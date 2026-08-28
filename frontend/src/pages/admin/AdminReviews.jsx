import { useEffect, useState, useCallback } from "react";
import { toast } from "sonner";
import { Plus, Pencil, Trash2, Loader2, Save, Star } from "lucide-react";
import { apiClient, formatApiError } from "@/lib/api";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";

export default function AdminReviews() {
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(false);
  const [open, setOpen] = useState(false);
  const [editing, setEditing] = useState(null);

  const fetchReviews = useCallback(() => {
    setLoading(true);
    apiClient.get("/admin/reviews")
      .then((res) => setReviews(res.data))
      .catch((err) => toast.error(formatApiError(err)))
      .finally(() => setLoading(false));
  }, []);

  useEffect(() => { fetchReviews(); }, [fetchReviews]);

  const remove = async (r) => {
    if (!window.confirm(`Delete review by "${r.name}"?`)) return;
    try { await apiClient.delete(`/admin/reviews/${r.id}`); toast.success("Deleted"); fetchReviews(); }
    catch (err) { toast.error(formatApiError(err)); }
  };

  const toggleActive = async (r) => {
    try { await apiClient.put(`/admin/reviews/${r.id}`, { active: !r.active }); fetchReviews(); }
    catch (err) { toast.error(formatApiError(err)); }
  };

  return (
    <div data-testid="admin-reviews-panel">
      <div className="flex items-center justify-between mb-5">
        <h3 className="font-display font-bold text-xl">Customer Reviews ({reviews.length})</h3>
        <button onClick={() => { setEditing(null); setOpen(true); }} data-testid="admin-review-new" className="bg-lime-500 hover:bg-lime-400 text-zinc-50 dark:text-black font-bold px-5 py-2.5 rounded-md inline-flex items-center gap-2">
          <Plus className="h-4 w-4"/> Add Review
        </button>
      </div>

      <ReviewList loading={loading} reviews={reviews} onEdit={(r) => { setEditing(r); setOpen(true); }} onDelete={remove} onToggleActive={toggleActive}/>

      <ReviewEditor open={open} setOpen={setOpen} review={editing} onSaved={fetchReviews}/>
    </div>
  );
}

function ReviewList({ loading, reviews, onEdit, onDelete, onToggleActive }) {
  if (loading) return <div className="text-center text-zinc-500 dark:text-zinc-500 py-12">Loading…</div>;
  if (reviews.length === 0) return <div className="text-center text-zinc-500 dark:text-zinc-500 py-12 border border-dashed border-zinc-200 dark:border-zinc-800">No reviews yet. Add your first customer testimonial to start building social proof.</div>;
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      {reviews.map((r) => (
        <div key={r.id} className="border border-zinc-200 dark:border-zinc-800 bg-[#0F0F0F] p-5">
          <div className="flex items-start gap-3">
            {r.photo_url && (
              <div className="h-16 w-16 overflow-hidden border border-zinc-200 dark:border-zinc-800 shrink-0 bg-white">
                <img src={r.photo_url} alt={r.name} className="w-full h-full object-cover"/>
              </div>
            )}
            <div className="flex-1 min-w-0">
              <div className="font-bold">{r.name}</div>
              <div className="text-xs text-zinc-500 dark:text-zinc-500">{[r.role, r.location].filter(Boolean).join(" · ")}</div>
              <div className="flex gap-0.5 mt-1.5">
                {Array.from({ length: r.rating || 5 }).map((_, i) => <Star key={`star-${i}`} className="h-3.5 w-3.5 fill-lime-500 text-lime-500"/>)}
              </div>
            </div>
          </div>
          <p className="text-sm text-zinc-700 dark:text-zinc-300 mt-3 line-clamp-3">{r.text}</p>
          {r.product_slug && <div className="text-[10px] text-lime-500 font-mono mt-2">Linked: {r.product_slug}</div>}
          <div className="mt-4 flex items-center justify-between border-t border-zinc-200 dark:border-zinc-800 pt-3">
            <button onClick={() => onToggleActive(r)} className={`text-[10px] tracking-wider uppercase font-bold px-2 py-1 ${r.active ? "text-lime-400 bg-lime-500/10 border border-lime-500/30" : "text-zinc-500 dark:text-zinc-500 bg-zinc-50 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800"}`}>
              {r.active ? "Visible" : "Hidden"}
            </button>
            <div className="flex gap-2">
              <button onClick={() => onEdit(r)} data-testid={`admin-review-edit-${r.id}`} className="text-zinc-600 dark:text-zinc-400 hover:text-lime-500"><Pencil className="h-4 w-4"/></button>
              <button onClick={() => onDelete(r)} data-testid={`admin-review-delete-${r.id}`} className="text-zinc-600 dark:text-zinc-400 hover:text-red-500"><Trash2 className="h-4 w-4"/></button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

function ReviewEditor({ open, setOpen, review, onSaved }) {
  const isEdit = !!review;
  const [form, setForm] = useState({ name: "", role: "", location: "", text: "", rating: 5, photo_url: "", product_slug: "", active: true, sort_order: 999 });
  const [saving, setSaving] = useState(false);

  useEffect(() => {
    if (review) setForm({ ...review });
    else if (open) setForm({ name: "", role: "", location: "", text: "", rating: 5, photo_url: "", product_slug: "", active: true, sort_order: 999 });
  }, [review, open]);

  const save = async () => {
    if (!form.name || !form.text) { toast.error("Name and review text are required"); return; }
    setSaving(true);
    try {
      const payload = { ...form, rating: parseInt(form.rating, 10) || 5, sort_order: parseInt(form.sort_order, 10) || 999 };
      if (isEdit) await apiClient.put(`/admin/reviews/${review.id}`, payload);
      else await apiClient.post("/admin/reviews", payload);
      toast.success(isEdit ? "Review updated" : "Review added");
      setOpen(false);
      onSaved?.();
    } catch (err) { toast.error(formatApiError(err)); }
    finally { setSaving(false); }
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent className="bg-[#0A0A0A] border-zinc-200 dark:border-zinc-800 text-zinc-900 dark:text-white max-w-2xl">
        <DialogHeader><DialogTitle className="font-display text-2xl">{isEdit ? "Edit Review" : "Add Customer Review"}</DialogTitle></DialogHeader>
        <div className="space-y-4 mt-2">
          <div className="grid grid-cols-2 gap-3">
            <div>
              <Label className="text-xs uppercase tracking-wider text-zinc-600 dark:text-zinc-400">Customer Name*</Label>
              <Input data-testid="review-form-name" value={form.name} onChange={(e) => setForm({...form, name: e.target.value})} className="bg-black border-zinc-200 dark:border-zinc-800 mt-1.5"/>
            </div>
            <div>
              <Label className="text-xs uppercase tracking-wider text-zinc-600 dark:text-zinc-400">Rating (1-5)</Label>
              <Input data-testid="review-form-rating" type="number" min="1" max="5" value={form.rating} onChange={(e) => setForm({...form, rating: e.target.value})} className="bg-black border-zinc-200 dark:border-zinc-800 mt-1.5"/>
            </div>
            <div>
              <Label className="text-xs uppercase tracking-wider text-zinc-600 dark:text-zinc-400">Role / Occupation</Label>
              <Input data-testid="review-form-role" value={form.role} onChange={(e) => setForm({...form, role: e.target.value})} placeholder="e.g. Sugarcane Farmer" className="bg-black border-zinc-200 dark:border-zinc-800 mt-1.5"/>
            </div>
            <div>
              <Label className="text-xs uppercase tracking-wider text-zinc-600 dark:text-zinc-400">Location</Label>
              <Input data-testid="review-form-location" value={form.location} onChange={(e) => setForm({...form, location: e.target.value})} placeholder="e.g. Maharashtra" className="bg-black border-zinc-200 dark:border-zinc-800 mt-1.5"/>
            </div>
          </div>
          <div>
            <Label className="text-xs uppercase tracking-wider text-zinc-600 dark:text-zinc-400">Review Text*</Label>
            <Textarea data-testid="review-form-text" rows={4} value={form.text} onChange={(e) => setForm({...form, text: e.target.value})} className="bg-black border-zinc-200 dark:border-zinc-800 mt-1.5"/>
          </div>
          <div>
            <Label className="text-xs uppercase tracking-wider text-zinc-600 dark:text-zinc-400">Delivered Product Photo URL (optional)</Label>
            <Input data-testid="review-form-photo" value={form.photo_url} onChange={(e) => setForm({...form, photo_url: e.target.value})} placeholder="https://… (photo of the customer with delivered product)" className="bg-black border-zinc-200 dark:border-zinc-800 mt-1.5 font-mono text-xs"/>
            {form.photo_url && <div className="mt-2 h-24 w-24 overflow-hidden border border-zinc-200 dark:border-zinc-800 bg-white"><img src={form.photo_url} alt="" className="w-full h-full object-cover"/></div>}
          </div>
          <div className="grid grid-cols-2 gap-3">
            <div>
              <Label className="text-xs uppercase tracking-wider text-zinc-600 dark:text-zinc-400">Link to Product (slug, optional)</Label>
              <Input data-testid="review-form-product" value={form.product_slug} onChange={(e) => setForm({...form, product_slug: e.target.value})} placeholder="e.g. rk-170f" className="bg-black border-zinc-200 dark:border-zinc-800 mt-1.5"/>
            </div>
            <div>
              <Label className="text-xs uppercase tracking-wider text-zinc-600 dark:text-zinc-400">Sort Order</Label>
              <Input data-testid="review-form-sort" type="number" value={form.sort_order} onChange={(e) => setForm({...form, sort_order: e.target.value})} className="bg-black border-zinc-200 dark:border-zinc-800 mt-1.5"/>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <Switch data-testid="review-form-active" checked={form.active} onCheckedChange={(v) => setForm({...form, active: v})}/>
            <span className="text-sm">{form.active ? "Visible on homepage" : "Hidden"}</span>
          </div>
          <button onClick={save} disabled={saving} data-testid="review-form-save" className="w-full bg-lime-500 hover:bg-lime-400 text-zinc-50 dark:text-black font-bold py-3.5 rounded-md transition disabled:opacity-50 inline-flex items-center justify-center gap-2">
            {saving ? <Loader2 className="h-4 w-4 animate-spin"/> : <Save className="h-4 w-4"/>}
            {saving ? "Saving..." : (isEdit ? "Update Review" : "Add Review")}
          </button>
        </div>
      </DialogContent>
    </Dialog>
  );
}
