"use client";
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
          <p className="text-zinc-300 mt-4">Thank you for your interest in becoming a KrishiGears authorized dealer. Our dealer development team will review your application and contact you within <strong className="text-lime-500">48 working hours</strong>.</p>
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
          <p className="text-zinc-300 mt-6 leading-relaxed">
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
              <li key={b} className="flex items-start gap-3 text-zinc-200 text-sm">
                <CheckCircle2 className="h-5 w-5 text-lime-500 shrink-0 mt-0.5" />{b}
              </li>
            ))}
          </ul>

          {/* Quick PDF Term Sheet & Audio Guide Card */}
          <div className="mt-8 p-5 bg-zinc-900/70 border border-zinc-800 rounded-lg space-y-4">
            <div className="flex items-start justify-between gap-3">
              <div>
                <span className="text-[10px] font-bold uppercase tracking-widest text-lime-400">Dealer Resources</span>
                <h4 className="font-bold text-white text-sm mt-0.5">KrishiGears Dealership Terms (PDF)</h4>
                <p className="text-xs text-zinc-400 mt-1">Download the 1-page summary of territory margins, MOQ terms, and warranty process.</p>
              </div>
              <a
                href="/docs/krishigears-dealer-terms.pdf"
                download
                className="px-3 py-2 bg-lime-500 text-black text-xs font-bold rounded hover:bg-lime-400 shrink-0 transition"
              >
                Download PDF ↓
              </a>
            </div>

            <div className="pt-3 border-t border-zinc-800">
              <span className="text-[10px] font-bold uppercase tracking-widest text-zinc-400">30-Second Audio Guide (हिंदी)</span>
              <p className="text-xs text-zinc-300 mt-1 mb-2">डीलरशिप कैसे लें और 15-22% मार्जिन कैसे प्राप्त करें — ऑडियो सुनें:</p>
              <audio controls className="w-full h-8 text-xs">
                <source src="/audio/dealer-guide-hindi.mp3" type="audio/mpeg" />
                Your browser does not support the audio element.
              </audio>
            </div>
          </div>

          <div className="mt-8 aspect-[4/3] overflow-hidden border border-zinc-800 hidden md:block">
            <img src={FARMER_FIELD} alt="farmer" loading="lazy" className="w-full h-full object-cover" />
          </div>
        </div>

        <form onSubmit={submit} className="lg:col-span-7 border border-zinc-800 bg-surface-dark p-6 md:p-10 space-y-5">
          <h2 className="font-display font-bold text-2xl">Application Form</h2>
          <p className="text-zinc-400 text-sm">Please share accurate details. All fields marked with * are required.</p>
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
            <Label className="text-xs uppercase tracking-wider text-zinc-300">Additional Information</Label>
            <Textarea data-testid="dealer-message" rows={4} value={form.message} onChange={update("message")} className="bg-black border-zinc-800 mt-1.5"/>
          </div>
          <button
            type="submit"
            disabled={loading}
            data-testid="dealer-submit-btn"
            className="w-full bg-lime-500 hover:bg-lime-400 text-black dark:text-black font-bold py-4 rounded-md transition disabled:opacity-50 inline-flex items-center justify-center gap-2"
          >
            {loading ? "Submitting..." : "Submit Dealership Application →"}
          </button>
        </form>
      </div>

      {/* Dealer FAQ & Hinglish B2B Guidance Section */}
      <div className="max-w-[1400px] mx-auto mt-16 pt-12 border-t border-zinc-800">
        <div className="max-w-3xl">
          <div className="kg-eyebrow">Dealership Q&A / अक्सर पूछे जाने वाले सवाल</div>
          <h2 className="kg-h2 mt-3 text-white">Power Weeder & Machinery Dealership FAQs</h2>
          <p className="text-zinc-300 text-sm mt-2">
            Important questions regarding minimum investment, margin structure, DBT agriculture subsidy billing, and spare parts support for agricultural machinery dealers.
          </p>
        </div>

        <div className="mt-8 grid md:grid-cols-2 gap-6">
          <div className="p-6 rounded-lg border border-zinc-800 bg-surface-dark space-y-2">
            <h3 className="font-display font-bold text-base text-lime-400">Q: KrishiGears की Dealership लेने के लिए क्या योग्यता और न्यूनतम निवेश चाहिए?</h3>
            <p className="text-zinc-300 text-sm leading-relaxed">
              KrishiGears डीलरशिप के लिए आपके पास वैध GST नंबर, कृषि उपकरण या खाद-बीज/ऑटो पार्ट्स की दुकान और स्थानीय किसानों/FPOs का नेटवर्क होना चाहिए। कोई भारी सिक्योरिटी डिपॉजिट नहीं है। आप केवल 3 से 5 मशीनों के शुरुआती बैच से अपने जिले में डीलरशिप शुरू कर सकते हैं।
            </p>
          </div>

          <div className="p-6 rounded-lg border border-zinc-800 bg-surface-dark space-y-2">
            <h3 className="font-display font-bold text-base text-lime-400">Q: डीलर मार्जिन और प्रॉफिट शेयरिंग कैसी रहती है?</h3>
            <p className="text-zinc-300 text-sm leading-relaxed">
              KrishiGears डीलर्स को 15% से 22% तक का स्वस्थ ग्रॉस मार्जिन मिलता है। मशीनों के साथ-साथ OEM स्पेयर पार्ट्स और रोटरी ब्लेड अटैचमेंट्स पर साल भर लगातार हाई-मार्जिन रिटर्न रहता है।
            </p>
          </div>

          <div className="p-6 rounded-lg border border-zinc-800 bg-surface-dark space-y-2">
            <h3 className="font-display font-bold text-base text-lime-400">Q: क्या KrishiGears की मशीनें सरकारी सब्सिडी (SMAM / DBT Agriculture) में मान्य हैं?</h3>
            <p className="text-zinc-300 text-sm leading-relaxed">
              हाँ, KrishiGears के मॉडल्स FMTTI / SRFMTTI परीक्षण मानकों के अनुसार तैयार किए जाते हैं। हम डीलर को उचित GST इनवॉइस, चेसिस व इंजन नंबर सर्टिफिकेट, और टेस्ट रिपोर्ट दस्तावेज़ उपलब्ध कराते हैं जिससे किसान आसानी से राज्य सब्सिडी पोर्टल पर 40% से 50% अनुदान प्राप्त कर सकें।
            </p>
          </div>

          <div className="p-6 rounded-lg border border-zinc-800 bg-surface-dark space-y-2">
            <h3 className="font-display font-bold text-base text-lime-400">Q: स्पेयर पार्ट्स और आफ्टर-सेल्स सपोर्ट कैसे मिलता है?</h3>
            <p className="text-zinc-300 text-sm leading-relaxed">
              जयपुर सेंट्रल वेयरहाउस से 24 से 48 घंटे के भीतर क्रैंकशाफ्ट, पिस्टन रिंग, कार्ब्युरेटर, और गियरबॉक्स पार्ट्स ट्रांसपोर्ट या स्पीड पोस्ट द्वारा डिस्पैच किए जाते हैं। हमारे सर्विस इंजीनियर वीडियो कॉल और ऑन-फील्ड ट्रेनिंग के माध्यम से आपके मैकेनिक को पूरी तकनीकी सहायता देते हैं।
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Field({ label, testid, value, onChange, type = "text" }) {
  return (
    <div>
      <Label className="text-xs uppercase tracking-wider text-zinc-300">{label}</Label>
      <Input data-testid={testid} type={type} value={value} onChange={onChange} className="bg-black border-zinc-800 mt-1.5" />
    </div>
  );
}
