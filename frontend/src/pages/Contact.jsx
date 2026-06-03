import { useState } from "react";
import { Mail, Phone, MapPin, MessageCircle, Send } from "lucide-react";
import { toast } from "sonner";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { COMPANY } from "@/data/catalog";
import { apiClient, formatApiError } from "@/lib/api";
import { trackWhatsAppClick, trackPhoneClick, trackEnquirySubmit } from "@/lib/analytics";

export default function Contact() {
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({ name: "", phone: "", email: "", subject: "", message: "" });
  const update = (k) => (e) => setForm((f) => ({ ...f, [k]: e.target.value }));

  const submit = async (e) => {
    e.preventDefault();
    if (!form.name || !form.phone || !form.message) {
      toast.error("Name, phone and message are required");
      return;
    }
    setLoading(true);
    try {
      await apiClient.post("/leads/contact", form);
      trackEnquirySubmit(null, "contact");
      toast.success("Message sent. We will reply within 24 hours.");
      setForm({ name: "", phone: "", email: "", subject: "", message: "" });
    } catch (err) {
      toast.error(formatApiError(err));
    } finally { setLoading(false); }
  };

  return (
    <div data-testid="contact-page" className="kg-section">
      <div className="max-w-[1200px] mx-auto">
        <div className="kg-eyebrow">Contact Us</div>
        <h1 className="kg-h1 mt-4 text-balance">Let's talk about <span className="text-lime-500">your farm.</span></h1>
        <p className="text-zinc-400 mt-6 max-w-2xl leading-relaxed">
          Sales enquiries, dealer applications, bulk quotations, warranty support — pick the channel that works for you. Our team responds within 24 hours.
        </p>

        <div className="mt-12 grid lg:grid-cols-12 gap-10">
          {/* Channels */}
          <div className="lg:col-span-5 space-y-4">
            <ChannelCard icon={Phone} title="Call us" value={COMPANY.phone} href={`tel:${COMPANY.phone.replace(/\s+/g, "")}`} testid="contact-call" onClick={() => trackPhoneClick("contact_page")} />
            <ChannelCard icon={MessageCircle} title="WhatsApp" value={`+${COMPANY.whatsapp}`} href={`https://wa.me/${COMPANY.whatsapp}`} testid="contact-whatsapp" onClick={() => trackWhatsAppClick("contact_page")} />
            <ChannelCard icon={Mail} title="Sales / Orders" value={COMPANY.email} href={`mailto:${COMPANY.email}`} testid="contact-email-sales" />
            <ChannelCard icon={Mail} title="Service / Support" value={COMPANY.support} href={`mailto:${COMPANY.support}`} testid="contact-email-support" />
            <ChannelCard icon={Mail} title="Dealership" value={COMPANY.dealers} href={`mailto:${COMPANY.dealers}`} testid="contact-email-dealers" />
            <ChannelCard icon={Mail} title="Accounts / Payments" value={COMPANY.accounts} href={`mailto:${COMPANY.accounts}`} testid="contact-email-accounts" />
            <ChannelCard icon={MapPin} title="Coverage" value={COMPANY.address} testid="contact-address" />
          </div>

          {/* Form */}
          <form onSubmit={submit} className="lg:col-span-7 border border-zinc-800 bg-[#0F0F0F] p-6 md:p-10 space-y-5">
            <h2 className="font-display font-bold text-2xl">Send us a message</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <Label className="text-xs uppercase tracking-wider text-zinc-400">Name*</Label>
                <Input data-testid="contact-form-name" value={form.name} onChange={update("name")} className="bg-black border-zinc-800 mt-1.5" />
              </div>
              <div>
                <Label className="text-xs uppercase tracking-wider text-zinc-400">Phone*</Label>
                <Input data-testid="contact-form-phone" value={form.phone} onChange={update("phone")} className="bg-black border-zinc-800 mt-1.5" />
              </div>
              <div>
                <Label className="text-xs uppercase tracking-wider text-zinc-400">Email</Label>
                <Input data-testid="contact-form-email" value={form.email} onChange={update("email")} className="bg-black border-zinc-800 mt-1.5" />
              </div>
              <div>
                <Label className="text-xs uppercase tracking-wider text-zinc-400">Subject</Label>
                <Input data-testid="contact-form-subject" value={form.subject} onChange={update("subject")} className="bg-black border-zinc-800 mt-1.5" />
              </div>
            </div>
            <div>
              <Label className="text-xs uppercase tracking-wider text-zinc-400">Message*</Label>
              <Textarea data-testid="contact-form-message" rows={5} value={form.message} onChange={update("message")} className="bg-black border-zinc-800 mt-1.5"/>
            </div>
            <button
              type="submit"
              disabled={loading}
              data-testid="contact-form-submit"
              className="w-full bg-lime-500 hover:bg-lime-400 text-black font-bold py-4 rounded-md transition disabled:opacity-50 inline-flex items-center justify-center gap-2"
            >
              <Send className="h-4 w-4"/>{loading ? "Sending..." : "Send Message"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

function ChannelCard({ icon: Icon, title, value, href, testid, onClick }) {
  const inner = (
    <>
      <div className="h-12 w-12 grid place-items-center bg-lime-500/10 border border-lime-500/40 text-lime-500 rounded-sm shrink-0">
        <Icon className="h-5 w-5" />
      </div>
      <div>
        <div className="text-[10px] tracking-[0.25em] uppercase text-zinc-500 font-bold">{title}</div>
        <div className="font-bold text-white mt-1">{value}</div>
      </div>
    </>
  );
  if (href) {
    return (
      <a href={href} onClick={onClick} data-testid={testid} className="kg-card p-5 flex items-center gap-4 hover:border-lime-500/50 transition" target={href.startsWith("http") ? "_blank" : undefined} rel="noreferrer">
        {inner}
      </a>
    );
  }
  return <div data-testid={testid} className="kg-card p-5 flex items-center gap-4">{inner}</div>;
}
