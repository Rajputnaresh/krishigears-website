import { useEffect, useState, useCallback } from "react";
import { toast } from "sonner";
import {
  Plus, Pencil, Trash2, Eye, EyeOff, Search, X, Star,
  Loader2, ImagePlus, Save, ChevronUp, ChevronDown
} from "lucide-react";
import { apiClient, formatApiError } from "@/lib/api";
import { CATEGORIES } from "@/data/catalog";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import {
  Select, SelectContent, SelectItem, SelectTrigger, SelectValue
} from "@/components/ui/select";

export default function AdminProducts() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [filterCategory, setFilterCategory] = useState("all");
  const [search, setSearch] = useState("");
  const [editing, setEditing] = useState(null);
  const [open, setOpen] = useState(false);

  const fetchProducts = useCallback(() => {
    setLoading(true);
    apiClient.get("/admin/products")
      .then((res) => setProducts(res.data))
      .catch((err) => toast.error(formatApiError(err)))
      .finally(() => setLoading(false));
  }, []);

  useEffect(() => { fetchProducts(); }, [fetchProducts]);

  const toggleActive = async (p) => {
    try {
      await apiClient.put(`/admin/products/${p.slug}`, { active: !p.active });
      toast.success(p.active ? "Product deactivated" : "Product activated");
      fetchProducts();
    } catch (err) { toast.error(formatApiError(err)); }
  };

  const toggleFeatured = async (p) => {
    try {
      await apiClient.put(`/admin/products/${p.slug}`, { featured: !p.featured });
      toast.success(p.featured ? "Removed from featured" : "Marked as featured");
      fetchProducts();
    } catch (err) { toast.error(formatApiError(err)); }
  };

  const move = async (p, direction) => {
    const newOrder = (p.sort_order || 0) + (direction === "up" ? -1 : 1);
    try {
      await apiClient.put(`/admin/products/${p.slug}`, { sort_order: Math.max(0, newOrder) });
      fetchProducts();
    } catch (err) { toast.error(formatApiError(err)); }
  };

  const remove = async (p) => {
    if (!window.confirm(`Delete "${p.name}"? This cannot be undone.`)) return;
    try {
      await apiClient.delete(`/admin/products/${p.slug}`);
      toast.success("Product deleted");
      fetchProducts();
    } catch (err) { toast.error(formatApiError(err)); }
  };

  const openNew = () => { setEditing(null); setOpen(true); };
  const openEdit = (p) => { setEditing(p); setOpen(true); };

  const filtered = products.filter((p) => {
    if (filterCategory !== "all" && p.category !== filterCategory) return false;
    if (search) {
      const q = search.toLowerCase();
      return p.name.toLowerCase().includes(q) || (p.model || "").toLowerCase().includes(q) || p.slug.includes(q);
    }
    return true;
  });

  return (
    <div data-testid="admin-products-panel">
      <div className="flex items-center justify-between flex-wrap gap-3 mb-5">
        <h3 className="font-display font-bold text-xl">Product Catalog ({products.length})</h3>
        <button
          onClick={openNew}
          data-testid="admin-products-new"
          className="bg-lime-500 hover:bg-lime-400 text-black font-bold px-5 py-2.5 rounded-md inline-flex items-center gap-2"
        >
          <Plus className="h-4 w-4"/> Add Product
        </button>
      </div>

      <div className="flex flex-wrap gap-3 mb-5">
        <div className="relative flex-1 min-w-[240px]">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-zinc-500" />
          <Input
            data-testid="admin-products-search"
            placeholder="Search by name, model, slug…"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="pl-10 bg-black border-zinc-800"
          />
        </div>
        <Select value={filterCategory} onValueChange={setFilterCategory}>
          <SelectTrigger data-testid="admin-products-category-filter" className="w-[240px] bg-black border-zinc-800">
            <SelectValue placeholder="All categories"/>
          </SelectTrigger>
          <SelectContent className="bg-[#0A0A0A] border-zinc-800 text-white max-h-72">
            <SelectItem value="all">All categories</SelectItem>
            {CATEGORIES.map((c) => <SelectItem key={c.slug} value={c.slug}>{c.name}</SelectItem>)}
          </SelectContent>
        </Select>
      </div>

      {loading ? (
        <div className="text-center text-zinc-500 py-12">Loading products…</div>
      ) : filtered.length === 0 ? (
        <div className="text-center text-zinc-500 py-12 border border-dashed border-zinc-800">No products match your filters.</div>
      ) : (
        <div className="border border-zinc-800 divide-y divide-zinc-800">
          {filtered.map((p) => (
            <ProductRow
              key={p.slug}
              product={p}
              onEdit={() => openEdit(p)}
              onDelete={() => remove(p)}
              onToggleActive={() => toggleActive(p)}
              onToggleFeatured={() => toggleFeatured(p)}
              onMove={(d) => move(p, d)}
            />
          ))}
        </div>
      )}

      <ProductEditor open={open} setOpen={setOpen} product={editing} onSaved={fetchProducts}/>
    </div>
  );
}

function ProductRow({ product, onEdit, onDelete, onToggleActive, onToggleFeatured, onMove }) {
  const category = CATEGORIES.find((c) => c.slug === product.category);
  return (
    <div className="grid grid-cols-12 gap-3 p-3 items-center hover:bg-zinc-950 transition">
      <div className="col-span-1">
        <div className="aspect-square w-14 bg-white border border-zinc-800 overflow-hidden">
          {product.images?.[0] && <img src={product.images[0]} alt="" className="w-full h-full object-contain p-1"/>}
        </div>
      </div>
      <div className="col-span-4">
        <div className="font-bold text-sm leading-tight line-clamp-2">{product.name}</div>
        <div className="mt-1 flex flex-wrap items-center gap-2 text-[10px] text-zinc-500">
          {product.model && <span className="font-mono">{product.model}</span>}
          <span className="text-lime-500">{category?.name}</span>
        </div>
      </div>
      <div className="col-span-2">
        <button onClick={onToggleActive} data-testid={`admin-toggle-active-${product.slug}`} className={`text-[10px] tracking-[0.2em] uppercase font-bold px-2 py-1 inline-flex items-center gap-1 ${product.active ? "text-lime-400 bg-lime-500/10 border border-lime-500/30" : "text-zinc-500 bg-zinc-900 border border-zinc-800"}`}>
          {product.active ? <Eye className="h-3 w-3"/> : <EyeOff className="h-3 w-3"/>}
          {product.active ? "Active" : "Hidden"}
        </button>
      </div>
      <div className="col-span-1">
        <button onClick={onToggleFeatured} data-testid={`admin-toggle-featured-${product.slug}`} title="Toggle featured" className={`h-7 w-7 grid place-items-center rounded ${product.featured ? "text-lime-500 bg-lime-500/10" : "text-zinc-600 hover:text-lime-500"}`}>
          <Star className={`h-4 w-4 ${product.featured ? "fill-lime-500" : ""}`}/>
        </button>
      </div>
      <div className="col-span-2 flex items-center gap-1">
        <button onClick={() => onMove("up")} className="h-7 w-7 grid place-items-center text-zinc-500 hover:text-lime-500" title="Move up"><ChevronUp className="h-4 w-4"/></button>
        <button onClick={() => onMove("down")} className="h-7 w-7 grid place-items-center text-zinc-500 hover:text-lime-500" title="Move down"><ChevronDown className="h-4 w-4"/></button>
        <span className="text-[10px] text-zinc-600 font-mono">#{product.sort_order ?? "—"}</span>
      </div>
      <div className="col-span-2 flex items-center justify-end gap-2">
        <a href={`/products/${product.slug}`} target="_blank" rel="noreferrer" className="text-zinc-400 hover:text-lime-500" title="View on site"><Eye className="h-4 w-4"/></a>
        <button onClick={onEdit} data-testid={`admin-edit-${product.slug}`} className="text-zinc-400 hover:text-lime-500"><Pencil className="h-4 w-4"/></button>
        <button onClick={onDelete} data-testid={`admin-delete-${product.slug}`} className="text-zinc-400 hover:text-red-500"><Trash2 className="h-4 w-4"/></button>
      </div>
    </div>
  );
}

const blankProduct = {
  slug: "", category: CATEGORIES[0].slug, name: "", model: "",
  badges: [], images: [""], specs: [{ k: "", v: "" }],
  features: [""], applications: [""], benefits: [""],
  warranty: "12 months manufacturer warranty + KrishiGears after-sales service network.",
  active: true, featured: false, sort_order: 999,
};

function ProductEditor({ open, setOpen, product, onSaved }) {
  const isEdit = !!product;
  const [form, setForm] = useState(blankProduct);
  const [saving, setSaving] = useState(false);

  useEffect(() => {
    if (product) {
      setForm({
        slug: product.slug,
        category: product.category,
        name: product.name,
        model: product.model || "",
        badges: product.badges || [],
        images: product.images?.length ? product.images : [""],
        specs: Object.entries(product.specs || {}).map(([k, v]) => ({ k, v })),
        features: product.features?.length ? product.features : [""],
        applications: product.applications?.length ? product.applications : [""],
        benefits: product.benefits?.length ? product.benefits : [""],
        warranty: product.warranty || "",
        active: product.active ?? true,
        featured: product.featured ?? false,
        sort_order: product.sort_order ?? 999,
      });
    } else if (open) {
      setForm({ ...blankProduct, specs: [{ k: "", v: "" }] });
    }
  }, [product, open]);

  const update = (k) => (e) => setForm((f) => ({ ...f, [k]: e?.target ? e.target.value : e }));

  const updateArr = (key, idx, val) => setForm((f) => {
    const next = [...f[key]];
    next[idx] = val;
    return { ...f, [key]: next };
  });
  const addArrItem = (key, item = "") => setForm((f) => ({ ...f, [key]: [...f[key], item] }));
  const removeArrItem = (key, idx) => setForm((f) => ({ ...f, [key]: f[key].filter((_, i) => i !== idx) }));

  const autoSlug = (name) => name.toLowerCase().trim().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");

  const save = async () => {
    if (!form.name || !form.category) {
      toast.error("Name and category are required");
      return;
    }
    const slug = form.slug || autoSlug(form.name);
    const payload = {
      slug,
      category: form.category,
      name: form.name,
      model: form.model,
      badges: form.badges.filter(Boolean),
      images: form.images.filter(Boolean),
      specs: Object.fromEntries(form.specs.filter((s) => s.k.trim()).map((s) => [s.k.trim(), s.v.trim()])),
      features: form.features.filter(Boolean),
      applications: form.applications.filter(Boolean),
      benefits: form.benefits.filter(Boolean),
      warranty: form.warranty,
      active: form.active,
      featured: form.featured,
      sort_order: parseInt(form.sort_order, 10) || 999,
    };
    if (payload.images.length === 0) {
      toast.error("Please add at least one image URL");
      return;
    }
    setSaving(true);
    try {
      if (isEdit) {
        const { slug: _s, ...rest } = payload;
        await apiClient.put(`/admin/products/${product.slug}`, rest);
        toast.success("Product updated");
      } else {
        await apiClient.post("/admin/products", payload);
        toast.success("Product created");
      }
      setOpen(false);
      onSaved?.();
    } catch (err) { toast.error(formatApiError(err)); }
    finally { setSaving(false); }
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent className="bg-[#0A0A0A] border-zinc-800 text-white max-w-4xl max-h-[92vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="font-display text-2xl">{isEdit ? `Edit · ${product.name}` : "Add New Product"}</DialogTitle>
        </DialogHeader>

        <div className="space-y-6 mt-3">
          {/* Basic */}
          <Section title="Basic Information">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              <Field label="Product Name*" testid="pe-name" value={form.name} onChange={update("name")}/>
              <Field label="Model Number" testid="pe-model" value={form.model} onChange={update("model")} placeholder="e.g. RK-170F"/>
              <Field label="Slug (URL)" testid="pe-slug" value={form.slug} onChange={update("slug")} disabled={isEdit} placeholder={autoSlug(form.name) || "auto-from-name"}/>
              <div>
                <Label className="text-xs uppercase tracking-wider text-zinc-400">Category*</Label>
                <Select value={form.category} onValueChange={(v) => setForm((f) => ({ ...f, category: v }))}>
                  <SelectTrigger data-testid="pe-category" className="bg-black border-zinc-800 mt-1.5"><SelectValue/></SelectTrigger>
                  <SelectContent className="bg-[#0A0A0A] border-zinc-800 text-white max-h-72">
                    {CATEGORIES.map((c) => <SelectItem key={c.slug} value={c.slug}>{c.name}</SelectItem>)}
                  </SelectContent>
                </Select>
              </div>
              <Field label="Sort Order" testid="pe-sort" type="number" value={form.sort_order} onChange={update("sort_order")}/>
              <div className="flex items-center gap-6 pt-6">
                <label className="flex items-center gap-2 text-sm">
                  <Switch data-testid="pe-active" checked={form.active} onCheckedChange={(v) => setForm((f) => ({...f, active: v}))}/>
                  {form.active ? "Active (visible on site)" : "Hidden"}
                </label>
                <label className="flex items-center gap-2 text-sm">
                  <Switch data-testid="pe-featured" checked={form.featured} onCheckedChange={(v) => setForm((f) => ({...f, featured: v}))}/>
                  Featured
                </label>
              </div>
            </div>
          </Section>

          {/* Images */}
          <Section title="Product Images" subtitle="Paste image URLs (one per line). First image is the main image shown everywhere.">
            <ArrayEditor
              values={form.images}
              placeholder="https://… (paste image URL)"
              testidPrefix="pe-image"
              onChange={(i, v) => updateArr("images", i, v)}
              onAdd={() => addArrItem("images")}
              onRemove={(i) => removeArrItem("images", i)}
              previewImages
            />
            <div className="mt-2 text-[10px] text-zinc-500">Tip: For Royal Kissan products, you can paste URLs directly from royalkissanagro.com.</div>
          </Section>

          {/* Badges */}
          <Section title="Badges" subtitle="Short labels shown on the card (e.g. SRFMTTI Tested, Subsidy Approved, Premium).">
            <ArrayEditor
              values={form.badges.length ? form.badges : [""]}
              placeholder="e.g. SRFMTTI Tested"
              testidPrefix="pe-badge"
              onChange={(i, v) => {
                const arr = form.badges.length ? [...form.badges] : [""];
                arr[i] = v;
                setForm((f) => ({...f, badges: arr}));
              }}
              onAdd={() => addArrItem("badges")}
              onRemove={(i) => removeArrItem("badges", i)}
            />
          </Section>

          {/* Specs */}
          <Section title="Specifications" subtitle="Add key-value rows shown in the spec table.">
            <div className="space-y-2">
              {form.specs.map((s, i) => (
                <div key={i} className="grid grid-cols-12 gap-2">
                  <Input
                    data-testid={`pe-spec-k-${i}`}
                    value={s.k} onChange={(e) => updateArr("specs", i, { ...s, k: e.target.value })}
                    placeholder="Spec name (e.g. Power)" className="col-span-5 bg-black border-zinc-800 text-sm"
                  />
                  <Input
                    data-testid={`pe-spec-v-${i}`}
                    value={s.v} onChange={(e) => updateArr("specs", i, { ...s, v: e.target.value })}
                    placeholder="Value (e.g. 5.5 HP)" className="col-span-6 bg-black border-zinc-800 text-sm"
                  />
                  <button onClick={() => removeArrItem("specs", i)} className="col-span-1 text-zinc-500 hover:text-red-500"><X className="h-4 w-4 mx-auto"/></button>
                </div>
              ))}
              <button onClick={() => addArrItem("specs", { k: "", v: "" })} className="text-xs text-lime-500 hover:text-lime-400 inline-flex items-center gap-1.5 font-bold">
                <Plus className="h-3 w-3"/> Add spec
              </button>
            </div>
          </Section>

          {/* Features */}
          <Section title="Features">
            <ArrayEditor
              values={form.features}
              placeholder="e.g. Shock absorber handle"
              testidPrefix="pe-feature"
              onChange={(i, v) => updateArr("features", i, v)}
              onAdd={() => addArrItem("features")}
              onRemove={(i) => removeArrItem("features", i)}
            />
          </Section>

          {/* Applications */}
          <Section title="Applications">
            <ArrayEditor
              values={form.applications}
              placeholder="e.g. Paddy fields"
              testidPrefix="pe-app"
              onChange={(i, v) => updateArr("applications", i, v)}
              onAdd={() => addArrItem("applications")}
              onRemove={(i) => removeArrItem("applications", i)}
            />
          </Section>

          {/* Benefits */}
          <Section title="Benefits">
            <ArrayEditor
              values={form.benefits}
              placeholder="e.g. Saves 60% time"
              testidPrefix="pe-benefit"
              onChange={(i, v) => updateArr("benefits", i, v)}
              onAdd={() => addArrItem("benefits")}
              onRemove={(i) => removeArrItem("benefits", i)}
            />
          </Section>

          {/* Warranty */}
          <Section title="Warranty">
            <Textarea data-testid="pe-warranty" rows={2} value={form.warranty} onChange={update("warranty")} className="bg-black border-zinc-800"/>
          </Section>

          <button
            onClick={save}
            disabled={saving}
            data-testid="pe-save"
            className="w-full bg-lime-500 hover:bg-lime-400 text-black font-bold py-3.5 rounded-md transition disabled:opacity-50 inline-flex items-center justify-center gap-2"
          >
            {saving ? <Loader2 className="h-4 w-4 animate-spin"/> : <Save className="h-4 w-4"/>}
            {saving ? "Saving..." : (isEdit ? "Update Product" : "Create Product")}
          </button>
        </div>
      </DialogContent>
    </Dialog>
  );
}

function Section({ title, subtitle, children }) {
  return (
    <div className="border border-zinc-800 bg-[#0F0F0F]">
      <div className="px-4 py-3 border-b border-zinc-800">
        <div className="text-[10px] tracking-[0.25em] uppercase text-lime-500 font-bold">{title}</div>
        {subtitle && <div className="text-xs text-zinc-500 mt-1">{subtitle}</div>}
      </div>
      <div className="p-4">{children}</div>
    </div>
  );
}

function Field({ label, testid, value, onChange, type = "text", disabled, placeholder }) {
  return (
    <div>
      <Label className="text-xs uppercase tracking-wider text-zinc-400">{label}</Label>
      <Input data-testid={testid} type={type} value={value} onChange={onChange} disabled={disabled} placeholder={placeholder} className="bg-black border-zinc-800 mt-1.5"/>
    </div>
  );
}

function ArrayEditor({ values, placeholder, testidPrefix, onChange, onAdd, onRemove, previewImages = false }) {
  return (
    <div className="space-y-2">
      {values.map((v, i) => (
        <div key={i} className="flex items-center gap-2">
          {previewImages && v && (
            <div className="h-10 w-10 bg-white border border-zinc-800 overflow-hidden shrink-0">
              <img src={v} alt="" className="w-full h-full object-contain"/>
            </div>
          )}
          <Input
            data-testid={`${testidPrefix}-${i}`}
            value={v}
            onChange={(e) => onChange(i, e.target.value)}
            placeholder={placeholder}
            className="bg-black border-zinc-800 text-sm flex-1"
          />
          <button onClick={() => onRemove(i)} className="text-zinc-500 hover:text-red-500 shrink-0"><X className="h-4 w-4"/></button>
        </div>
      ))}
      <button onClick={onAdd} className="text-xs text-lime-500 hover:text-lime-400 inline-flex items-center gap-1.5 font-bold">
        {previewImages ? <ImagePlus className="h-3 w-3"/> : <Plus className="h-3 w-3"/>} Add {previewImages ? "image" : "item"}
      </button>
    </div>
  );
}
