import { useState } from "react";
import { toast } from "sonner";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger, DialogDescription } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { apiClient, formatApiError } from "@/lib/api";
import { trackEnquirySubmit } from "@/lib/analytics";

export default function EnquiryDialog({ trigger, product = "" }) {
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({ name: "", phone: "", email: "", location: "", product, message: "" });

  const update = (k) => (e) => setForm((f) => ({ ...f, [k]: e.target.value }));

  const submit = async (e) => {
    e.preventDefault();
    if (!form.name || !form.phone) {
      toast.error("Please enter your name and phone number");
      return;
    }
    setLoading(true);
    try {
      await apiClient.post("/leads/enquiry", form);
      trackEnquirySubmit(product);
      toast.success("Enquiry sent! Our team will call you within 24 hours.");
      setForm({ name: "", phone: "", email: "", location: "", product, message: "" });
      setOpen(false);
    } catch (err) {
      toast.error(formatApiError(err));
    } finally {
      setLoading(false);
    }
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>{trigger}</DialogTrigger>
      <DialogContent className="bg-[#0A0A0A] border-zinc-800 text-white max-w-lg">
        <DialogHeader>
          <DialogTitle className="font-display text-2xl">Request Price / Enquiry</DialogTitle>
          <DialogDescription className="text-zinc-400">
            Fill in your details. Our team will contact you within 24 hours with the best price.
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={submit} className="space-y-4 mt-2">
          <div className="grid grid-cols-2 gap-3">
            <div>
              <Label className="text-xs uppercase tracking-wider text-zinc-400">Name*</Label>
              <Input data-testid="enquiry-name" value={form.name} onChange={update("name")} className="bg-black border-zinc-800 mt-1.5" />
            </div>
            <div>
              <Label className="text-xs uppercase tracking-wider text-zinc-400">Phone*</Label>
              <Input data-testid="enquiry-phone" value={form.phone} onChange={update("phone")} className="bg-black border-zinc-800 mt-1.5" />
            </div>
          </div>
          <div className="grid grid-cols-2 gap-3">
            <div>
              <Label className="text-xs uppercase tracking-wider text-zinc-400">Email</Label>
              <Input data-testid="enquiry-email" value={form.email} onChange={update("email")} className="bg-black border-zinc-800 mt-1.5" />
            </div>
            <div>
              <Label className="text-xs uppercase tracking-wider text-zinc-400">Location</Label>
              <Input data-testid="enquiry-location" value={form.location} onChange={update("location")} className="bg-black border-zinc-800 mt-1.5" />
            </div>
          </div>
          {!product && (
            <div>
              <Label className="text-xs uppercase tracking-wider text-zinc-400">Product of Interest</Label>
              <Input data-testid="enquiry-product" value={form.product} onChange={update("product")} className="bg-black border-zinc-800 mt-1.5" />
            </div>
          )}
          <div>
            <Label className="text-xs uppercase tracking-wider text-zinc-400">Message</Label>
            <Textarea data-testid="enquiry-message" value={form.message} onChange={update("message")} rows={3} className="bg-black border-zinc-800 mt-1.5" />
          </div>
          <button
            type="submit"
            disabled={loading}
            data-testid="enquiry-submit-btn"
            className="w-full bg-lime-500 hover:bg-lime-400 text-black font-bold py-3 rounded-md transition disabled:opacity-50"
          >
            {loading ? "Sending..." : "Submit Enquiry"}
          </button>
        </form>
      </DialogContent>
    </Dialog>
  );
}
