import { useEffect, useState, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";
import {
  LogOut, Inbox, Users, Package, MessageSquare, Trash2, RefreshCw,
  FileText, Plus, Pencil, Eye, X, ChevronDown, ChevronUp
} from "lucide-react";
import { apiClient, formatApiError } from "@/lib/api";
import { LOGO_URL } from "@/data/catalog";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Switch } from "@/components/ui/switch";
import SheetsIntegration from "@/pages/admin/SheetsIntegration";
import AdminProducts from "@/pages/admin/AdminProducts";

const LEAD_TYPES = [
  { value: "all", label: "All Leads", icon: Inbox },
  { value: "enquiry", label: "Enquiries", icon: MessageSquare },
  { value: "dealer", label: "Dealer Apps", icon: Users },
  { value: "bulk-order", label: "Bulk Orders", icon: Package },
  { value: "contact", label: "Contact", icon: FileText },
];

export default function AdminDashboard() {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  const [stats, setStats] = useState(null);

  const refreshStats = useCallback(() => {
    apiClient.get("/admin/stats").then((res) => setStats(res.data)).catch(() => {});
  }, []);

  useEffect(() => {
    const token = localStorage.getItem("kg_admin_token");
    if (!token) { navigate("/admin/login"); return; }
    apiClient.get("/auth/me")
      .then((res) => setUser(res.data))
      .catch(() => {
        localStorage.removeItem("kg_admin_token");
        navigate("/admin/login");
      });
    refreshStats();
  }, [navigate, refreshStats]);

  const logout = () => {
    localStorage.removeItem("kg_admin_token");
    localStorage.removeItem("kg_admin_user");
    navigate("/admin/login");
  };

  if (!user) return <div className="min-h-screen grid place-items-center bg-black text-zinc-400">Loading…</div>;

  return (
    <div data-testid="admin-dashboard" className="min-h-screen bg-[#070707] text-white">
      {/* Header */}
      <header className="sticky top-0 z-30 bg-black/80 backdrop-blur border-b border-zinc-900">
        <div className="max-w-[1400px] mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img src={LOGO_URL} alt="" className="h-10 w-10 rounded-full"/>
            <div>
              <div className="font-display font-black">KRISHI<span className="text-lime-500">GEARS</span> Admin</div>
              <div className="text-[10px] tracking-[0.25em] text-zinc-500 uppercase">{user.email}</div>
            </div>
          </div>
          <button onClick={logout} data-testid="admin-logout" className="text-sm text-zinc-400 hover:text-lime-500 inline-flex items-center gap-2">
            <LogOut className="h-4 w-4"/> Logout
          </button>
        </div>
      </header>

      <main className="max-w-[1400px] mx-auto px-6 py-10">
        {/* Stats */}
        {stats && (
          <div className="grid grid-cols-2 md:grid-cols-6 gap-3 mb-10">
            <StatCard label="Total Leads" value={stats.total_leads} />
            <StatCard label="Enquiries" value={stats.enquiry} />
            <StatCard label="Dealer Apps" value={stats.dealer} />
            <StatCard label="Bulk Orders" value={stats.bulk_order} />
            <StatCard label="Active Products" value={stats.products_active} />
            <StatCard label="Blog Posts" value={stats.blog_posts} />
          </div>
        )}

        <Tabs defaultValue="leads" className="w-full">
          <TabsList className="bg-[#0F0F0F] border border-zinc-800">
            <TabsTrigger data-testid="tab-leads" value="leads">Leads</TabsTrigger>
            <TabsTrigger data-testid="tab-products" value="products">Products</TabsTrigger>
            <TabsTrigger data-testid="tab-blog" value="blog">Blog Posts</TabsTrigger>
            <TabsTrigger data-testid="tab-sheets" value="sheets">Sheets Integration</TabsTrigger>
          </TabsList>

          <TabsContent value="leads" className="mt-6">
            <LeadsPanel onChange={refreshStats}/>
          </TabsContent>
          <TabsContent value="products" className="mt-6">
            <AdminProducts/>
          </TabsContent>
          <TabsContent value="blog" className="mt-6">
            <BlogPanel onChange={refreshStats}/>
          </TabsContent>
          <TabsContent value="sheets" className="mt-6">
            <SheetsIntegration />
          </TabsContent>
        </Tabs>
      </main>
    </div>
  );
}

function StatCard({ label, value }) {
  return (
    <div className="border border-zinc-800 bg-[#0F0F0F] p-4">
      <div className="text-[10px] uppercase tracking-[0.2em] text-zinc-500">{label}</div>
      <div className="font-display font-black text-3xl text-lime-500 mt-1">{value ?? "—"}</div>
    </div>
  );
}

/* ---------------- LEADS PANEL ---------------- */
function LeadsPanel({ onChange }) {
  const [type, setType] = useState("all");
  const [leads, setLeads] = useState([]);
  const [loading, setLoading] = useState(false);
  const [expanded, setExpanded] = useState(null);

  const fetchLeads = useCallback((t = type) => {
    setLoading(true);
    apiClient.get(`/admin/leads?type=${t}`)
      .then((res) => setLeads(res.data))
      .catch((err) => toast.error(formatApiError(err)))
      .finally(() => setLoading(false));
  }, [type]);

  useEffect(() => { fetchLeads(type); }, [type, fetchLeads]);

  const remove = async (id) => {
    if (!window.confirm("Delete this lead?")) return;
    try {
      await apiClient.delete(`/admin/leads/${id}`);
      toast.success("Lead deleted");
      fetchLeads();
      onChange?.();
    } catch (err) { toast.error(formatApiError(err)); }
  };

  return (
    <div>
      <div className="flex items-center justify-between flex-wrap gap-3 mb-4">
        <div className="flex flex-wrap gap-2">
          {LEAD_TYPES.map((t) => {
            const I = t.icon;
            return (
              <button
                key={t.value}
                data-testid={`leads-filter-${t.value}`}
                onClick={() => setType(t.value)}
                className={`px-4 py-2 border text-sm font-medium inline-flex items-center gap-2 transition ${
                  type === t.value ? "border-lime-500 text-lime-500 bg-lime-500/10" : "border-zinc-800 text-zinc-400 hover:border-zinc-600"
                }`}
              >
                <I className="h-3.5 w-3.5"/>{t.label}
              </button>
            );
          })}
        </div>
        <button data-testid="leads-refresh" onClick={() => fetchLeads()} className="text-sm text-zinc-400 hover:text-lime-500 inline-flex items-center gap-2">
          <RefreshCw className="h-4 w-4"/> Refresh
        </button>
      </div>

      {loading ? (
        <div className="text-center text-zinc-500 py-12">Loading…</div>
      ) : leads.length === 0 ? (
        <div className="text-center text-zinc-500 py-12 border border-dashed border-zinc-800">No leads in this category yet.</div>
      ) : (
        <div className="border border-zinc-800 overflow-hidden">
          {leads.map((lead) => {
            const isOpen = expanded === lead.id;
            return (
              <div key={lead.id} className="border-b border-zinc-800 last:border-b-0">
                <div className="grid grid-cols-12 gap-4 p-4 items-center hover:bg-zinc-950 transition">
                  <div className="col-span-2 text-[10px] tracking-[0.2em] uppercase text-lime-500 font-bold">{lead.type}</div>
                  <div className="col-span-4 font-bold text-white">{lead.data?.name || lead.data?.full_name || "—"}</div>
                  <div className="col-span-3 text-sm text-zinc-300">{lead.data?.phone || "—"}</div>
                  <div className="col-span-2 text-xs text-zinc-500">{new Date(lead.created_at).toLocaleDateString()}</div>
                  <div className="col-span-1 flex justify-end gap-2">
                    <button data-testid={`lead-expand-${lead.id}`} onClick={() => setExpanded(isOpen ? null : lead.id)} className="text-zinc-400 hover:text-lime-500">
                      {isOpen ? <ChevronUp className="h-4 w-4"/> : <ChevronDown className="h-4 w-4"/>}
                    </button>
                    <button data-testid={`lead-delete-${lead.id}`} onClick={() => remove(lead.id)} className="text-zinc-400 hover:text-red-500">
                      <Trash2 className="h-4 w-4"/>
                    </button>
                  </div>
                </div>
                {isOpen && (
                  <div className="px-4 pb-4 bg-zinc-950">
                    <div className="grid sm:grid-cols-2 gap-3 text-sm">
                      {Object.entries(lead.data || {}).map(([k, v]) => (
                        <div key={k} className="border border-zinc-800 p-3 bg-black">
                          <div className="text-[10px] uppercase tracking-[0.2em] text-zinc-500">{k.replace(/_/g, " ")}</div>
                          <div className="text-zinc-200 break-words mt-1">{v || <span className="text-zinc-600">—</span>}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}

/* ---------------- BLOG PANEL ---------------- */
function BlogPanel({ onChange }) {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [editing, setEditing] = useState(null);
  const [open, setOpen] = useState(false);

  const fetchPosts = useCallback(() => {
    setLoading(true);
    apiClient.get("/admin/blog")
      .then((res) => setPosts(res.data))
      .catch((err) => toast.error(formatApiError(err)))
      .finally(() => setLoading(false));
  }, []);

  useEffect(() => { fetchPosts(); }, [fetchPosts]);

  const remove = async (slug) => {
    if (!window.confirm("Delete this post?")) return;
    try {
      await apiClient.delete(`/admin/blog/${slug}`);
      toast.success("Post deleted");
      fetchPosts();
      onChange?.();
    } catch (err) { toast.error(formatApiError(err)); }
  };

  const openNew = () => { setEditing(null); setOpen(true); };
  const openEdit = (p) => { setEditing(p); setOpen(true); };

  return (
    <div>
      <div className="flex items-center justify-between mb-4">
        <h3 className="font-display font-bold text-xl">Manage Blog Posts</h3>
        <button data-testid="blog-new-btn" onClick={openNew} className="bg-lime-500 hover:bg-lime-400 text-black font-bold px-5 py-2.5 rounded-md inline-flex items-center gap-2">
          <Plus className="h-4 w-4"/> New Post
        </button>
      </div>

      {loading ? (
        <div className="text-center text-zinc-500 py-12">Loading…</div>
      ) : posts.length === 0 ? (
        <div className="text-center text-zinc-500 py-12 border border-dashed border-zinc-800">No blog posts yet. Click "New Post" to create your first.</div>
      ) : (
        <div className="border border-zinc-800">
          {posts.map((p) => (
            <div key={p.slug} className="grid grid-cols-12 gap-4 p-4 items-center border-b border-zinc-800 last:border-b-0">
              <div className="col-span-1">
                {p.cover_image && <img src={p.cover_image} alt="" className="h-12 w-12 object-cover border border-zinc-800"/>}
              </div>
              <div className="col-span-6">
                <div className="font-bold">{p.title}</div>
                <div className="text-xs text-zinc-500 mt-1">/blog/{p.slug}</div>
              </div>
              <div className="col-span-2">
                <span className={`text-[10px] tracking-[0.2em] uppercase font-bold px-2 py-1 ${p.published ? "text-lime-500 bg-lime-500/10" : "text-zinc-500 bg-zinc-900"}`}>
                  {p.published ? "PUBLISHED" : "DRAFT"}
                </span>
              </div>
              <div className="col-span-2 text-xs text-zinc-500">{new Date(p.created_at).toLocaleDateString()}</div>
              <div className="col-span-1 flex justify-end gap-2">
                <a href={`/blog/${p.slug}`} target="_blank" rel="noreferrer" className="text-zinc-400 hover:text-lime-500"><Eye className="h-4 w-4"/></a>
                <button onClick={() => openEdit(p)} data-testid={`blog-edit-${p.slug}`} className="text-zinc-400 hover:text-lime-500"><Pencil className="h-4 w-4"/></button>
                <button onClick={() => remove(p.slug)} data-testid={`blog-delete-${p.slug}`} className="text-zinc-400 hover:text-red-500"><Trash2 className="h-4 w-4"/></button>
              </div>
            </div>
          ))}
        </div>
      )}

      <BlogEditor open={open} setOpen={setOpen} post={editing} onSaved={() => { fetchPosts(); onChange?.(); }}/>
    </div>
  );
}

function BlogEditor({ open, setOpen, post, onSaved }) {
  const isEdit = !!post;
  const [form, setForm] = useState({
    title: "", slug: "", excerpt: "", content: "", cover_image: "", tags: "", published: true,
  });
  const [saving, setSaving] = useState(false);

  useEffect(() => {
    if (post) {
      setForm({
        title: post.title || "",
        slug: post.slug || "",
        excerpt: post.excerpt || "",
        content: post.content || "",
        cover_image: post.cover_image || "",
        tags: (post.tags || []).join(", "),
        published: post.published ?? true,
      });
    } else if (open) {
      setForm({ title: "", slug: "", excerpt: "", content: "", cover_image: "", tags: "", published: true });
    }
  }, [post, open]);

  const update = (k) => (e) => setForm((f) => ({ ...f, [k]: e?.target ? e.target.value : e }));

  const autoSlug = (title) => title.toLowerCase().trim().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");

  const save = async () => {
    if (!form.title || !form.excerpt || !form.content) {
      toast.error("Title, excerpt and content are required");
      return;
    }
    setSaving(true);
    const payload = {
      title: form.title,
      slug: form.slug || autoSlug(form.title),
      excerpt: form.excerpt,
      content: form.content,
      cover_image: form.cover_image || null,
      tags: form.tags.split(",").map((t) => t.trim()).filter(Boolean),
      published: form.published,
    };
    try {
      if (isEdit) {
        const { published, slug, ...rest } = payload;
        await apiClient.put(`/admin/blog/${post.slug}`, { ...rest, published });
        toast.success("Post updated");
      } else {
        await apiClient.post("/admin/blog", payload);
        toast.success("Post created");
      }
      setOpen(false);
      onSaved?.();
    } catch (err) { toast.error(formatApiError(err)); }
    finally { setSaving(false); }
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent className="bg-[#0A0A0A] border-zinc-800 text-white max-w-3xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="font-display text-2xl">{isEdit ? "Edit Post" : "New Post"}</DialogTitle>
        </DialogHeader>
        <div className="space-y-4 mt-2">
          <div>
            <Label className="text-xs uppercase tracking-wider text-zinc-400">Title</Label>
            <Input data-testid="blog-form-title" value={form.title} onChange={update("title")} className="bg-black border-zinc-800 mt-1.5"/>
          </div>
          <div>
            <Label className="text-xs uppercase tracking-wider text-zinc-400">Slug (URL)</Label>
            <Input data-testid="blog-form-slug" value={form.slug} onChange={update("slug")} disabled={isEdit} placeholder={autoSlug(form.title)} className="bg-black border-zinc-800 mt-1.5"/>
          </div>
          <div>
            <Label className="text-xs uppercase tracking-wider text-zinc-400">Excerpt (short summary)</Label>
            <Textarea data-testid="blog-form-excerpt" rows={2} value={form.excerpt} onChange={update("excerpt")} className="bg-black border-zinc-800 mt-1.5"/>
          </div>
          <div>
            <Label className="text-xs uppercase tracking-wider text-zinc-400">Cover Image URL</Label>
            <Input data-testid="blog-form-cover" value={form.cover_image} onChange={update("cover_image")} placeholder="https://…" className="bg-black border-zinc-800 mt-1.5"/>
          </div>
          <div>
            <Label className="text-xs uppercase tracking-wider text-zinc-400">Tags (comma separated)</Label>
            <Input data-testid="blog-form-tags" value={form.tags} onChange={update("tags")} placeholder="Power Tiller, Buying Guide" className="bg-black border-zinc-800 mt-1.5"/>
          </div>
          <div>
            <Label className="text-xs uppercase tracking-wider text-zinc-400">Content (Markdown supported: use ## for headings)</Label>
            <Textarea data-testid="blog-form-content" rows={12} value={form.content} onChange={update("content")} className="bg-black border-zinc-800 mt-1.5 font-mono text-sm"/>
          </div>
          <div className="flex items-center gap-3">
            <Switch data-testid="blog-form-published" checked={form.published} onCheckedChange={(v) => setForm((f) => ({ ...f, published: v }))} />
            <span className="text-sm">{form.published ? "Published" : "Draft"}</span>
          </div>
          <button
            onClick={save}
            disabled={saving}
            data-testid="blog-form-save"
            className="w-full bg-lime-500 hover:bg-lime-400 text-black font-bold py-3.5 rounded-md transition disabled:opacity-50"
          >
            {saving ? "Saving..." : (isEdit ? "Update Post" : "Create Post")}
          </button>
        </div>
      </DialogContent>
    </Dialog>
  );
}
