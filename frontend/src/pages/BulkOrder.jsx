import { useState } from "react";
import { toast } from "sonner";
import { Package, CheckCircle2 } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Select, SelectContent, SelectItem, SelectTrigger, SelectValue
} from "@/components/ui/select";
import { CATEGORIES } from "@/data/catalog";
import { apiClient, formatApiError } from "@/lib/api";
import { trackBulkOrderSubmit } from "@/lib/analytics";

export default function BulkOrder() {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [form, setForm] = useState({
    name: "", phone: "", email: "", organization: "", location: "",
    product: "", quantity: "", message: ""
  });
  const update = (k) => (e) => setForm((f) => ({ ...f, [k]: e.target.value }));

  const submit = async (e) => {
    e.preventDefault();
    if (!form.name || !form.phone || !form.product || !form.quantity) {
      toast.error("Please fill name, phone, product and quantity");
      return;
    }
    setLoading(true);
    try {
      await apiClient.post("/leads/bulk-order", form);
      trackBulkOrderSubmit();
      setSuccess(true);
      toast.success("Bulk order enquiry sent. Our team will share quotation soon.");
    } catch (err) {
      toast.error(formatApiError(err));
    } finally { setLoading(false); }
  };

  if (success) {
    return (
      <div data-testid="bulk-success-page" className="kg-section">
        <div className="max-w-2xl mx-auto text-center border border-lime-500/30 bg-lime-500/5 p-12">
          <CheckCircle2 className="h-16 w-16 mx-auto text-lime-500" />
          <h1 className="kg-h2 mt-6">Quotation Request Received.</h1>
          <p className="text-zinc-600 dark:text-zinc-400 mt-4">Our bulk order team will share a detailed quotation with institutional pricing within <strong className="text-lime-500">24 hours</strong>.</p>
        </div>
      </div>
    );
  }

  return (
    <div data-testid="bulk-order-page" className="kg-section">
      <div className="max-w-[1100px] mx-auto">
        <div className="kg-eyebrow">Bulk / Institutional Orders</div>
        <h1 className="kg-h1 mt-4 text-balance">Bulk pricing for <span className="text-lime-500">FPOs, contractors & institutions.</span></h1>
        <p className="text-zinc-600 dark:text-zinc-400 mt-6 leading-relaxed max-w-2xl">
          Farmer Producer Organizations, agri input stores, large contractors and government tender buyers — request a bulk quotation with institutional pricing, GST invoice and PAN India dispatch.
        </p>

        <form onSubmit={submit} className="mt-12 border border-zinc-200 dark:border-zinc-800 bg-surface-dark p-6 md:p-10 space-y-5">
          <div className="flex items-center gap-3">
            <Package className="h-6 w-6 text-lime-500" />
            <h2 className="font-display font-bold text-2xl">Bulk Order Form</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Field label="Your Name*" testid="bulk-name" value={form.name} onChange={update("name")} />
            <Field label="Phone*" testid="bulk-phone" value={form.phone} onChange={update("phone")} />
            <Field label="Email" testid="bulk-email" value={form.email} onChange={update("email")} />
            <Field label="Organization / FPO / Firm" testid="bulk-organization" value={form.organization} onChange={update("organization")} />
            <Field label="Location / District" testid="bulk-location" value={form.location} onChange={update("location")} />
            <Field label="Quantity Required*" testid="bulk-quantity" value={form.quantity} onChange={update("quantity")} />
          </div>

          <div>
            <Label className="text-xs uppercase tracking-wider text-zinc-600 dark:text-zinc-400">Product Category*</Label>
            <Select value={form.product} onValueChange={(v) => setForm((f) => ({ ...f, product: v }))}>
              <SelectTrigger data-testid="bulk-product-select" className="bg-black border-zinc-200 dark:border-zinc-800 mt-1.5">
                <SelectValue placeholder="Select a product category" />
              </SelectTrigger>
              <SelectContent className="bg-background border-zinc-200 dark:border-zinc-800 text-zinc-900 dark:text-white max-h-72">
                {CATEGORIES.map((c) => (
                  <SelectItem key={c.slug} value={c.name}>{c.name}</SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <div>
            <Label className="text-xs uppercase tracking-wider text-zinc-600 dark:text-zinc-400">Additional Requirements</Label>
            <Textarea data-testid="bulk-message" rows={4} value={form.message} onChange={update("message")} className="bg-black border-zinc-200 dark:border-zinc-800 mt-1.5"/>
          </div>
          <button
            type="submit"
            disabled={loading}
            data-testid="bulk-submit-btn"
            className="w-full bg-lime-500 hover:bg-lime-400 text-black dark:text-black font-bold py-4 rounded-md transition disabled:opacity-50"
          >
            {loading ? "Submitting..." : "Request Quotation"}
          </button>
        </form>
      </div>
    </div>
  );
}

function Field({ label, testid, value, onChange }) {
  return (
    <div>
      <Label className="text-xs uppercase tracking-wider text-zinc-600 dark:text-zinc-400">{label}</Label>
      <Input data-testid={testid} value={value} onChange={onChange} className="bg-black border-zinc-200 dark:border-zinc-800 mt-1.5" />
    </div>
  );
}
