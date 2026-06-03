import { ShieldCheck, Phone, Wrench, FileCheck, Clock, Headphones, CheckCircle2 } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { toast } from "sonner";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { COMPANY } from "@/data/catalog";
import { apiClient, formatApiError } from "@/lib/api";
import { trackWarrantySubmit } from "@/lib/analytics";

const FAQS = [
  { q: "What warranty does KrishiGears offer on its products?", a: "All KrishiGears machines come with the manufacturer's standard warranty — typically 6 to 12 months depending on the product category. Warranty covers manufacturing defects only; consumables, blades, belts and damages due to misuse are not covered." },
  { q: "How do I claim a warranty repair?", a: "Call our support line or WhatsApp us with your invoice and a short video describing the issue. Our team will guide you to the nearest authorized service centre or arrange a pickup." },
  { q: "Do you ship spare parts PAN India?", a: "Yes. Genuine spare parts are dispatched from our regional warehouses with 48-hour dispatch and 3-7 day delivery to any PIN code in India." },
  { q: "Are KrishiGears products eligible for government subsidy?", a: "Several of our products are FMTTI-approved and eligible for state agriculture subsidies. Please share your state and product interest — our team will guide you on the documentation." },
  { q: "Do you sell to FPOs and institutions?", a: "Yes — we serve Farmer Producer Organizations, agri input stores, contractors and government tender buyers with institutional pricing and GST invoicing. Use our Bulk Order form for a quotation." },
  { q: "What payment options are available?", a: "UPI, NEFT/RTGS, bank transfer and authorized dealer credit terms. We do not accept cash for orders above ₹2 lakh as per income tax norms." },
];

export default function Warranty() {
  return (
    <div data-testid="warranty-page">
      <section className="kg-section">
        <div className="max-w-[1200px] mx-auto">
          <div className="kg-eyebrow">Warranty & Support</div>
          <h1 className="kg-h1 mt-4 text-balance">Your machine. <span className="text-lime-500">Our promise.</span></h1>
          <p className="text-zinc-400 mt-6 max-w-2xl leading-relaxed">
            Every KrishiGears product is backed by manufacturer warranty, authorized service network and dedicated customer care. Here's everything you need to know about claiming support.
          </p>
        </div>
      </section>

      <section className="kg-section bg-[#080808] border-y border-zinc-900 -mt-8">
        <div className="max-w-[1200px] mx-auto">
          <div className="grid md:grid-cols-3 gap-5">
            {[
              { i: ShieldCheck, t: "Manufacturer Warranty", d: "6 to 12 months on every machine, covering manufacturing defects." },
              { i: Wrench, t: "Authorized Service", d: "Repairs through our authorized service centre network across 28+ states." },
              { i: FileCheck, t: "Genuine Spare Parts", d: "Only OEM-grade spare parts, dispatched PAN India within 48 hours." },
              { i: Clock, t: "Fast Resolution", d: "Warranty queries acknowledged within 24 hours of submission." },
              { i: Headphones, t: "Dedicated Support", d: "Customer care available via phone, WhatsApp and email." },
              { i: Phone, t: "Call Support", d: COMPANY.phone, link: `tel:${COMPANY.phone.replace(/\s+/g, "")}` },
            ].map((b) => {
              const I = b.i;
              return (
                <div key={b.t} className="kg-card p-7">
                  <I className="h-7 w-7 text-lime-500" />
                  <h3 className="font-display font-bold text-lg mt-4">{b.t}</h3>
                  <p className="text-zinc-400 text-sm mt-2 leading-relaxed">{b.d}</p>
                  {b.link && <a href={b.link} className="mt-4 inline-block text-lime-500 text-sm font-bold">Call now →</a>}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="kg-section">
        <div className="max-w-[900px] mx-auto">
          <div className="kg-eyebrow">FAQs</div>
          <h2 className="kg-h2 mt-3">Common <span className="text-lime-500">questions.</span></h2>
          <Accordion type="single" collapsible className="mt-8">
            {FAQS.map((f, i) => (
              <AccordionItem key={f.q} value={`f${i}`} className="border-zinc-800">
                <AccordionTrigger data-testid={`faq-trigger-${i}`} className="text-left text-base hover:text-lime-500 hover:no-underline">
                  {f.q}
                </AccordionTrigger>
                <AccordionContent className="text-zinc-400 leading-relaxed">
                  {f.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>

          <div className="mt-12 border border-lime-500/30 bg-lime-500/5 p-8 text-center">
            <h3 className="font-display font-bold text-2xl">Need help with a specific machine?</h3>
            <p className="text-zinc-400 mt-2">Share your invoice number and we'll get back within 24 hours.</p>
            <Link to="/contact" data-testid="warranty-contact-cta" className="mt-6 inline-flex items-center gap-2 bg-lime-500 hover:bg-lime-400 text-black font-bold px-7 py-4 rounded-md">
              Contact Support
            </Link>
          </div>
        </div>
      </section>

      <RegisterWarrantySection/>
    </div>
  );
}

function RegisterWarrantySection() {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [form, setForm] = useState({
    owner_name: "", phone: "", email: "",
    product_model: "", serial_number: "", purchase_date: "",
    dealer_name: "", city: "", state: "", message: ""
  });
  const update = (k) => (e) => setForm((f) => ({ ...f, [k]: e.target.value }));

  const submit = async (e) => {
    e.preventDefault();
    if (!form.owner_name || !form.phone || !form.product_model) {
      toast.error("Name, phone and product model are required");
      return;
    }
    setLoading(true);
    try {
      await apiClient.post("/warranty/register", form);
      trackWarrantySubmit();
      setSuccess(true);
      toast.success("Warranty registered. We'll send a confirmation soon.");
    } catch (err) {
      toast.error(formatApiError(err));
    } finally { setLoading(false); }
  };

  if (success) {
    return (
      <section data-testid="warranty-register-success" className="kg-section bg-[#080808] border-t border-zinc-900">
        <div className="max-w-2xl mx-auto text-center border border-lime-500/30 bg-lime-500/5 p-12">
          <CheckCircle2 className="h-16 w-16 mx-auto text-lime-500" />
          <h2 className="kg-h2 mt-6">Warranty Registered.</h2>
          <p className="text-zinc-400 mt-4">Your product is now on our records. Keep your invoice safe — for any service request, just WhatsApp us at <strong className="text-lime-500">{COMPANY.phone}</strong>.</p>
        </div>
      </section>
    );
  }

  return (
    <section data-testid="warranty-register-section" className="kg-section bg-[#080808] border-t border-zinc-900">
      <div className="max-w-[1100px] mx-auto">
        <div className="kg-eyebrow">Activate your warranty</div>
        <h2 className="kg-h2 mt-3 text-balance">Register your machine in <span className="text-lime-500">2 minutes.</span></h2>
        <p className="text-zinc-400 mt-4 max-w-2xl leading-relaxed">
          Just bought a KrishiGears product? Register it below so we have your purchase on record. This activates your warranty coverage and helps us serve you faster when you need support.
        </p>

        <form onSubmit={submit} className="mt-10 border border-zinc-800 bg-[#0F0F0F] p-6 md:p-10 space-y-5">
          <div className="flex items-center gap-3">
            <ShieldCheck className="h-6 w-6 text-lime-500" />
            <h3 className="font-display font-bold text-xl">Warranty Registration</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Field label="Owner Name*" testid="warranty-owner" value={form.owner_name} onChange={update("owner_name")} />
            <Field label="Phone*" testid="warranty-phone" value={form.phone} onChange={update("phone")} />
            <Field label="Email" testid="warranty-email" value={form.email} onChange={update("email")} />
            <Field label="Product Model*" testid="warranty-model" value={form.product_model} onChange={update("product_model")} placeholder="e.g. RK-170F"/>
            <Field label="Serial Number" testid="warranty-serial" value={form.serial_number} onChange={update("serial_number")} />
            <Field label="Purchase Date" testid="warranty-date" type="date" value={form.purchase_date} onChange={update("purchase_date")} />
            <Field label="Dealer / Shop Name" testid="warranty-dealer" value={form.dealer_name} onChange={update("dealer_name")} />
            <Field label="City" testid="warranty-city" value={form.city} onChange={update("city")} />
            <Field label="State" testid="warranty-state" value={form.state} onChange={update("state")} />
          </div>
          <div>
            <Label className="text-xs uppercase tracking-wider text-zinc-400">Additional notes (optional)</Label>
            <Textarea data-testid="warranty-message" rows={3} value={form.message} onChange={update("message")} className="bg-black border-zinc-800 mt-1.5"/>
          </div>
          <button
            type="submit"
            disabled={loading}
            data-testid="warranty-submit-btn"
            className="w-full bg-lime-500 hover:bg-lime-400 text-black font-bold py-4 rounded-md transition disabled:opacity-50"
          >
            {loading ? "Registering..." : "Register Warranty"}
          </button>
        </form>
      </div>
    </section>
  );
}

function Field({ label, testid, value, onChange, type = "text", placeholder }) {
  return (
    <div>
      <Label className="text-xs uppercase tracking-wider text-zinc-400">{label}</Label>
      <Input data-testid={testid} type={type} value={value} onChange={onChange} placeholder={placeholder} className="bg-black border-zinc-800 mt-1.5"/>
    </div>
  );
}
