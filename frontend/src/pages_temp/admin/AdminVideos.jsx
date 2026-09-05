import { useEffect, useState, useCallback } from "react";
import { toast } from "sonner";
import { Plus, Pencil, Trash2, Loader2, Save, Youtube, Instagram, Facebook, Twitter, Link2 } from "lucide-react";
import { apiClient, formatApiError } from "@/lib/api";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

const SOURCES = [
  { value: "youtube", label: "YouTube", icon: Youtube, color: "text-red-500" },
  { value: "instagram", label: "Instagram", icon: Instagram, color: "text-pink-500" },
  { value: "twitter", label: "X / Twitter", icon: Twitter, color: "text-sky-400" },
  { value: "facebook", label: "Facebook", icon: Facebook, color: "text-blue-500" },
  { value: "other", label: "Direct URL", icon: Link2, color: "text-zinc-300" },
];

export default function AdminVideos() {
  const [videos, setVideos] = useState([]);
  const [loading, setLoading] = useState(false);
  const [open, setOpen] = useState(false);
  const [editing, setEditing] = useState(null);

  const fetchVideos = useCallback(() => {
    setLoading(true);
    apiClient.get("/admin/videos")
      .then((res) => setVideos(res.data))
      .catch((err) => toast.error(formatApiError(err)))
      .finally(() => setLoading(false));
  }, []);

  useEffect(() => { fetchVideos(); }, [fetchVideos]);

  const remove = async (v) => {
    if (!window.confirm(`Delete "${v.title}"?`)) return;
    try { await apiClient.delete(`/admin/videos/${v.id}`); toast.success("Deleted"); fetchVideos(); }
    catch (err) { toast.error(formatApiError(err)); }
  };

  const toggleActive = async (v) => {
    try { await apiClient.put(`/admin/videos/${v.id}`, { active: !v.active }); fetchVideos(); }
    catch (err) { toast.error(formatApiError(err)); }
  };

  return (
    <div data-testid="admin-videos-panel">
      <div className="flex items-center justify-between mb-5">
        <h3 className="font-display font-bold text-xl">Video Gallery ({videos.length})</h3>
        <button onClick={() => { setEditing(null); setOpen(true); }} data-testid="admin-video-new" className="bg-lime-500 hover:bg-lime-400 text-black dark:text-black font-bold px-5 py-2.5 rounded-md inline-flex items-center gap-2">
          <Plus className="h-4 w-4"/> Add Video
        </button>
      </div>

      <VideoList loading={loading} videos={videos} onEdit={(v) => { setEditing(v); setOpen(true); }} onDelete={remove} onToggleActive={toggleActive}/>

      <VideoEditor open={open} setOpen={setOpen} video={editing} onSaved={fetchVideos}/>
    </div>
  );
}

function VideoList({ loading, videos, onEdit, onDelete, onToggleActive }) {
  if (loading) return <div className="text-center text-zinc-400 py-12">Loading…</div>;
  if (videos.length === 0) return <div className="text-center text-zinc-400 py-12 border border-dashed border-zinc-800">No videos yet. Paste a YouTube / Instagram / X / Facebook URL to add your first.</div>;
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      {videos.map((v) => {
        const src = SOURCES.find((s) => s.value === v.source) || SOURCES[0];
        const Icon = src.icon;
        return (
          <div key={v.id} className="border border-zinc-800 bg-surface-dark p-4">
            <div className="flex items-start gap-3">
              <div className="h-20 w-32 bg-zinc-50 dark:bg-zinc-900 overflow-hidden shrink-0">
                {v.thumbnail && <img src={v.thumbnail} alt="" loading="lazy" className="w-full h-full object-cover"/>}
              </div>
              <div className="flex-1 min-w-0">
                <div className={`text-xs uppercase tracking-wider font-bold inline-flex items-center gap-1.5 ${src.color}`}>
                  <Icon className="h-3.5 w-3.5"/> {src.label}
                </div>
                <div className="font-bold text-sm mt-1 line-clamp-2">{v.title}</div>
                <a href={v.url} target="_blank" rel="noreferrer" className="text-[10px] text-zinc-400 font-mono break-all line-clamp-1 hover:text-lime-500">{v.url}</a>
              </div>
            </div>
            <div className="mt-3 flex items-center justify-between border-t border-zinc-800 pt-3">
              <button onClick={() => onToggleActive(v)} className={`text-[10px] tracking-wider uppercase font-bold px-2 py-1 ${v.active ? "text-lime-400 bg-lime-500/10 border border-lime-500/30" : "text-black dark:text-black bg-zinc-50 dark:bg-zinc-900 border border-zinc-800"}`}>
                {v.active ? "Visible" : "Hidden"}
              </button>
              <div className="flex gap-2">
                <button onClick={() => onEdit(v)} data-testid={`admin-video-edit-${v.id}`} className="text-zinc-300 hover:text-lime-500"><Pencil className="h-4 w-4"/></button>
                <button onClick={() => onDelete(v)} data-testid={`admin-video-delete-${v.id}`} className="text-zinc-300 hover:text-red-500"><Trash2 className="h-4 w-4"/></button>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

function detectSource(url) {
  const u = (url || "").toLowerCase();
  if (u.includes("youtube.com") || u.includes("youtu.be")) return "youtube";
  if (u.includes("instagram.com")) return "instagram";
  if (u.includes("twitter.com") || u.includes("x.com")) return "twitter";
  if (u.includes("facebook.com") || u.includes("fb.watch")) return "facebook";
  return "other";
}

function youtubeThumb(url) {
  const m = url.match(/(?:youtube\.com\/(?:[^/]+\/.+\/|(?:v|e(?:mbed)?)\/|.*[?&]v=)|youtu\.be\/)([^"&?/\s]{11})/);
  return m ? `https://img.youtube.com/vi/${m[1]}/hqdefault.jpg` : "";
}

function VideoEditor({ open, setOpen, video, onSaved }) {
  const isEdit = !!video;
  const [form, setForm] = useState({ title: "", url: "", source: "youtube", thumbnail: "", description: "", active: true, sort_order: 999 });
  const [saving, setSaving] = useState(false);

  useEffect(() => {
    if (video) setForm({ title: video.title, url: video.url, source: video.source || "youtube", thumbnail: video.thumbnail || "", description: video.description || "", active: video.active ?? true, sort_order: video.sort_order ?? 999 });
    else if (open) setForm({ title: "", url: "", source: "youtube", thumbnail: "", description: "", active: true, sort_order: 999 });
  }, [video, open]);

  const setUrl = (url) => {
    const source = detectSource(url);
    setForm((f) => ({
      ...f,
      url,
      source,
      thumbnail: f.thumbnail || (source === "youtube" ? youtubeThumb(url) : ""),
    }));
  };

  const save = async () => {
    if (!form.title || !form.url) { toast.error("Title and URL are required"); return; }
    setSaving(true);
    try {
      if (isEdit) await apiClient.put(`/admin/videos/${video.id}`, form);
      else await apiClient.post("/admin/videos", form);
      toast.success(isEdit ? "Video updated" : "Video added");
      setOpen(false);
      onSaved?.();
    } catch (err) { toast.error(formatApiError(err)); }
    finally { setSaving(false); }
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent className="bg-background border-zinc-800 text-white max-w-2xl">
        <DialogHeader><DialogTitle className="font-display text-2xl">{isEdit ? "Edit Video" : "Add Video"}</DialogTitle></DialogHeader>
        <div className="space-y-4 mt-2">
          <div>
            <Label className="text-xs uppercase tracking-wider text-zinc-300">Title*</Label>
            <Input data-testid="video-form-title" value={form.title} onChange={(e) => setForm({...form, title: e.target.value})} className="bg-black border-zinc-800 mt-1.5"/>
          </div>
          <div>
            <Label className="text-xs uppercase tracking-wider text-zinc-300">Video URL* (YouTube / Instagram / X / Facebook)</Label>
            <Input data-testid="video-form-url" value={form.url} onChange={(e) => setUrl(e.target.value)} placeholder="https://youtube.com/watch?v=… or https://instagram.com/reel/…" className="bg-black border-zinc-800 mt-1.5 font-mono text-xs"/>
            <div className="text-[10px] text-zinc-400 mt-1">Source auto-detected. YouTube videos embed natively; Instagram/X/FB open in a new tab when clicked.</div>
          </div>
          <div className="grid grid-cols-2 gap-3">
            <div>
              <Label className="text-xs uppercase tracking-wider text-zinc-300">Source</Label>
              <Select value={form.source} onValueChange={(v) => setForm({...form, source: v})}>
                <SelectTrigger className="bg-black border-zinc-800 mt-1.5"><SelectValue/></SelectTrigger>
                <SelectContent className="bg-background border-zinc-800 text-white">
                  {SOURCES.map((s) => <SelectItem key={s.value} value={s.value}>{s.label}</SelectItem>)}
                </SelectContent>
              </Select>
            </div>
            <div>
              <Label className="text-xs uppercase tracking-wider text-zinc-300">Sort Order</Label>
              <Input data-testid="video-form-sort" type="number" value={form.sort_order} onChange={(e) => setForm({...form, sort_order: parseInt(e.target.value, 10) || 999})} className="bg-black border-zinc-800 mt-1.5"/>
            </div>
          </div>
          <div>
            <Label className="text-xs uppercase tracking-wider text-zinc-300">Thumbnail URL (optional — auto-fetched for YouTube)</Label>
            <Input data-testid="video-form-thumb" value={form.thumbnail} onChange={(e) => setForm({...form, thumbnail: e.target.value})} placeholder="https://…" className="bg-black border-zinc-800 mt-1.5"/>
            {form.thumbnail && <div className="mt-2 aspect-video w-40 overflow-hidden border border-zinc-800"><img src={form.thumbnail} alt="" loading="lazy" className="w-full h-full object-cover"/></div>}
          </div>
          <div>
            <Label className="text-xs uppercase tracking-wider text-zinc-300">Short Description</Label>
            <Textarea data-testid="video-form-desc" rows={2} value={form.description} onChange={(e) => setForm({...form, description: e.target.value})} className="bg-black border-zinc-800 mt-1.5"/>
          </div>
          <div className="flex items-center gap-3">
            <Switch data-testid="video-form-active" checked={form.active} onCheckedChange={(v) => setForm({...form, active: v})}/>
            <span className="text-sm">{form.active ? "Visible on homepage" : "Hidden"}</span>
          </div>
          <button onClick={save} disabled={saving} data-testid="video-form-save" className="w-full bg-lime-500 hover:bg-lime-400 text-black dark:text-black font-bold py-3.5 rounded-md transition disabled:opacity-50 inline-flex items-center justify-center gap-2">
            {saving ? <Loader2 className="h-4 w-4 animate-spin"/> : <Save className="h-4 w-4"/>}
            {saving ? "Saving..." : (isEdit ? "Update Video" : "Add Video")}
          </button>
        </div>
      </DialogContent>
    </Dialog>
  );
}
