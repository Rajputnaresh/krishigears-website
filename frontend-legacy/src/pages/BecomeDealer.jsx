import { useState } from "react";
import { toast } from "sonner";
import { CheckCircle2, ArrowRight } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { apiClient, formatApiError } from "@/lib/api";
import { trackDealerSubmit } from "@/lib/analytics";
import { FARMER_FIELD } from "@/data/catalog";

export default function BecomeDealer() {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [form, setForm] = useState({
    full_name: "", phone: "", email: "", business_name: "",
    city: "", state: "", pincode: "", years_in_business: "",
    current_products: "", message: ""
  });
  const update = (k) => (e) => setForm((f) => ({ ...f, [k]: e.target.value }));

  const submit = async (e) => {
    e.preventDefault();
    if (!form.full_name || !form.phone || !form.city || !form.state) {
      toast.error("Please fill name, phone, city and state");
      return;
    }
    setLoading(true);
    try {
      await apiClient.post("/leads/dealer", form);
      trackDealerSubmit();
      setSuccess(true);
      toast.success("Application submitted! Our dealer team will contact you within 48 hours.");
    } catch (err) {
      toast.error(formatApiError(err));
    } finally { setLoading(false); }
  };

  if (success) {
    return (
      <div data-testid="dealer-success-page" className="kg-section">
        <div className="max-w-2xl mx-auto text-center border border-lime-500/30 bg-lime-500/5 p-12">
          <CheckCircle2 className="h-16 w-16 mx-auto text-lime-500" />
          <h1 className="kg-h2 mt-6">Application Received.</h1>
          <p className="text-zinc-600 dark:text-zinc-400 mt-4">Thank you for your interest in becoming a KrishiGears authorized dealer. Our dealer development team will review your application and contact you within <strong className="text-lime-500">48 working hours</strong>.</p>
          <a href="/" data-testid="dealer-success-home" className="mt-8 inline-flex items-center gap-2 text-lime-500 font-bold">Back to Home <ArrowRight className="h-4 w-4"/></a>
        </div>
      </div>
    );
  }

  return (
    <div data-testid="become-dealer-page" className="kg-section">
      <div className="max-w-[1400px] mx-auto grid lg:grid-cols-12 gap-12">
        <div className="lg:col-span-5">
          <div className="kg-eyebrow">Dealer Application</div>
          <h1 className="kg-h1 mt-4 text-balance">Become a <span className="text-lime-500">KrishiGears</span> dealer.</h1>
          <p className="text-zinc-600 dark:text-zinc-400 mt-6 leading-relaxed">
            Join India's fastest-growing agricultural machinery dealer network. Strong margins, dedicated support and exclusive access to our authorized product range.
          </p>
          <ul className="mt-8 space-y-3">
            {[
              "Attractive dealer margins on all products",
              "Co-branded marketing & lead support",
              "Free product training & onboarding",
              "Priority spare parts supply",
              "Authorized warranty service training",
              "Government tender & subsidy support",
            ].map((b) => (
              <li key={b} className="flex items-start gap-3 text-zinc-700 dark:text-zinc-300 text-sm">
                <CheckCircle2 className="h-5 w-5 text-lime-500 shrink-0 mt-0.5" />{b}
              </li>
            ))}
          </ul>
          <div className="mt-10 aspect-[4/3] overflow-hidden border border-zinc-200 dark:border-zinc-800 hidden md:block">
            <img src={FARMER_FIELD} alt="farmer" loading="lazy" className="w-full h-full object-cover" />
          </div>
        </div>

        <form onSubmit={submit} className="lg:col-span-7 border border-zinc-200 dark:border-zinc-800 bg-surface-dark p-6 md:p-10 space-y-5">
          <h2 className="font-display font-bold text-2xl">Application Form</h2>
          <p className="text-zinc-500 dark:text-zinc-500 text-sm">Please share accurate details. All fields marked with * are required.</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Field label="Full Name*" testid="dealer-full-name" value={form.full_name} onChange={update("full_name")} />
            <Field label="Phone*" testid="dealer-phone" value={form.phone} onChange={update("phone")} />
            <Field label="Email" testid="dealer-email" value={form.email} onChange={update("email")} />
            <Field label="Business / Firm Name" testid="dealer-business" value={form.business_name} onChange={update("business_name")} />
            <Field label="City*" testid="dealer-city" value={form.city} onChange={update("city")} />
            <Field label="State*" testid="dealer-state" value={form.state} onChange={update("state")} />
            <Field label="Pincode" testid="dealer-pincode" value={form.pincode} onChange={update("pincode")} />
            <Field label="Years in Business" testid="dealer-years" value={form.years_in_business} onChange={update("years_in_business")} />
          </div>
          <Field label="Current Products Sold" testid="dealer-products" value={form.current_products} onChange={update("current_products")} />
          <div>
            <Label className="text-xs uppercase tracking-wider text-zinc-600 dark:text-zinc-400">Additional Information</Label>
            <Textarea data-testid="dealer-message" rows={4} value={form.message} onChange={update("message")} className="bg-black border-zinc-200 dark:border-zinc-800 mt-1.5"/>
          </div>
          <button
            type="submit"
            disabled={loading}
            data-testid="dealer-submit-btn"
            className="w-full bg-lime-500 hover:bg-lime-400 text-black dark:text-black font-bold py-4 rounded-md transition disabled:opacity-50"
          >
            {loading ? "Submitting..." : "Submit Application"}
          </button>
        </form>
      </div>
    </div>
  );
}

function Field({ label, testid, value, onChange, type = "text" }) {
  return (
    <div>
      <Label className="text-xs uppercase tracking-wider text-zinc-600 dark:text-zinc-400">{label}</Label>
      <Input data-testid={testid} type={type} value={value} onChange={onChange} className="bg-black border-zinc-200 dark:border-zinc-800 mt-1.5" />
    </div>
  );
}
