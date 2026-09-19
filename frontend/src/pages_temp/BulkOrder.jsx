"use client";
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
          <p className="text-zinc-300 mt-4">Our bulk order team will share a detailed quotation with institutional pricing within <strong className="text-lime-500">24 hours</strong>.</p>
        </div>
      </div>
    );
  }

  return (
    <div data-testid="bulk-order-page" className="kg-section">
      <div className="max-w-[1100px] mx-auto">
        <div className="kg-eyebrow">Bulk Machinery & Wholesale Spare Parts</div>
        <h1 className="kg-h1 mt-4 text-balance">Wholesale Supply for <span className="text-lime-500">Dealers, Repair Workshops & Institutions.</span></h1>
        <p className="text-zinc-300 mt-6 leading-relaxed max-w-2xl">
          Direct factory wholesale procurement of agricultural machinery (power weeders, tillers, brush cutters) and OEM spare parts (carburetors, recoil starters, Viton seals, rotary blades) for retailers, repair workshops, FPOs, and contractors with GST billing and PAN-India dispatch from Jaipur.
        </p>

        <form onSubmit={submit} className="mt-12 border border-zinc-800 bg-surface-dark p-6 md:p-10 space-y-5">
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
            <Label className="text-xs uppercase tracking-wider text-zinc-300">Product Category*</Label>
            <Select value={form.product} onValueChange={(v) => setForm((f) => ({ ...f, product: v }))}>
              <SelectTrigger data-testid="bulk-product-select" className="bg-black border-zinc-800 mt-1.5">
                <SelectValue placeholder="Select a product category" />
              </SelectTrigger>
              <SelectContent className="bg-background border-zinc-800 text-white max-h-72">
                {CATEGORIES.map((c) => (
                  <SelectItem key={c.slug} value={c.name}>{c.name}</SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <div>
            <Label className="text-xs uppercase tracking-wider text-zinc-300">Additional Requirements</Label>
            <Textarea data-testid="bulk-message" rows={4} value={form.message} onChange={update("message")} className="bg-black border-zinc-800 mt-1.5"/>
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

        {/* Wholesale Procurement Tiers & Policies */}
        <div className="mt-16 pt-12 border-t border-zinc-800 space-y-12">
          <div className="grid md:grid-cols-3 gap-6">
            <div className="p-6 rounded-xl border border-zinc-800 bg-zinc-950 space-y-3">
              <span className="text-lime-400 font-bold text-xs uppercase tracking-widest">Retailers & Workshops</span>
              <h3 className="text-white font-bold text-lg">Mixed Spare Parts Carton</h3>
              <p className="text-zinc-400 text-xs leading-relaxed">
                Small machinery repair shops and spare parts dealers can start with mixed-part cartons from ₹15,000. Combine carburetors, recoil starters, Viton oil seals, piston assemblies, and rotary tines.
              </p>
            </div>
            <div className="p-6 rounded-xl border border-zinc-800 bg-zinc-950 space-y-3">
              <span className="text-lime-400 font-bold text-xs uppercase tracking-widest">Machinery Dealers</span>
              <h3 className="text-white font-bold text-lg">Direct Machinery Consignments</h3>
              <p className="text-zinc-400 text-xs leading-relaxed">
                Batch orders starting at 2 to 5 power weeders or brush cutters with protected margins of 15% to 22%. Standard GST tax invoices with chassis serial matching for state DBT subsidies.
              </p>
            </div>
            <div className="p-6 rounded-xl border border-zinc-800 bg-zinc-950 space-y-3">
              <span className="text-lime-400 font-bold text-xs uppercase tracking-widest">FPOs & Institutions</span>
              <h3 className="text-white font-bold text-lg">Tender & Custom Specs</h3>
              <p className="text-zinc-400 text-xs leading-relaxed">
                Dedicated institutional quotations for Farmer Producer Organizations, custom hiring centers (CHCs), and government tenders with complete SRFMTTI/FMTTI testing certifications.
              </p>
            </div>
          </div>

          {/* Wholesale FAQ Section */}
          <div className="bg-zinc-950 border border-zinc-800 p-8 rounded-xl space-y-6">
            <div className="space-y-1">
              <span className="text-xs font-bold text-lime-400 uppercase tracking-widest">Wholesale Procurement FAQ</span>
              <h2 className="text-xl md:text-2xl font-display font-bold text-white">
                Frequently Asked Questions for Bulk Buyers & Stockists
              </h2>
            </div>

            <div className="grid md:grid-cols-2 gap-6 text-sm">
              <div className="space-y-2 border border-zinc-850 p-4 rounded-lg bg-zinc-900/30">
                <h3 className="font-bold text-white text-sm">How can machinery repair shops get the spare parts wholesale price list?</h3>
                <p className="text-zinc-400 text-xs leading-relaxed">
                  Submit this inquiry form or message our wholesale sales desk directly on WhatsApp at +91 60060 78815. We share the complete 2026 digital Excel/PDF catalog covering 170F/177F petrol and 173F/186F diesel components.
                </p>
              </div>
              <div className="space-y-2 border border-zinc-850 p-4 rounded-lg bg-zinc-900/30">
                <h3 className="font-bold text-white text-sm">What payment terms and GST invoicing are provided?</h3>
                <p className="text-zinc-400 text-xs leading-relaxed">
                  All consignments are billed with 100% compliant GST tax invoices (GSTIN: 08EQLPD7160R1Z2) allowing instant Input Tax Credit (ITC) claiming. Payment can be processed via NEFT, RTGS, or confirmed trade credit for verified network dealers.
                </p>
              </div>
              <div className="space-y-2 border border-zinc-850 p-4 rounded-lg bg-zinc-900/30">
                <h3 className="font-bold text-white text-sm">Are KrishiGears spares compatible with other machine brands?</h3>
                <p className="text-zinc-400 text-xs leading-relaxed">
                  Yes, our spare parts follow standard universal dimensions and metallurgical tolerances, ensuring drop-in compatibility with Balwaan, Royal Kissan, Neptune, and standard Honda-clone power tillers and weeders.
                </p>
              </div>
              <div className="space-y-2 border border-zinc-850 p-4 rounded-lg bg-zinc-900/30">
                <h3 className="font-bold text-white text-sm">What are the delivery timelines across Indian states?</h3>
                <p className="text-zinc-400 text-xs leading-relaxed">
                  Consignments are dispatched from our central Jaipur godown within 24 to 48 hours. Surface transit typically delivers to major transport godowns within 3 to 5 business days nationwide with live LR tracking.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Field({ label, testid, value, onChange }) {
  return (
    <div>
      <Label className="text-xs uppercase tracking-wider text-zinc-300">{label}</Label>
      <Input data-testid={testid} value={value} onChange={onChange} className="bg-black border-zinc-800 mt-1.5" />
    </div>
  );
}
