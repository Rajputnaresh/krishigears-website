import { Link, useParams } from "react-router-dom";
import { Check, ArrowRight, MapPin, TrendingUp, Award, Users } from "lucide-react";
import { COMPANY, HERO_BG } from "@/data/catalog";
import EnquiryDialog from "@/components/EnquiryDialog";
import { trackWhatsAppClick } from "@/lib/analytics";

// State-specific dealership benefits and requirements
const STATE_DATA = {
  "andhra-pradesh": { name: "Andhra Pradesh", cities: ["Vijayawada", "Guntur", "Visakhapatnam", "Tirupati", "Kurnool"], tier: "Tier 1" },
  "assam": { name: "Assam", cities: ["Guwahati", "Dibrugarh", "Silchar", "Jorhat", "Tezpur"], tier: "Tier 2" },
  "bihar": { name: "Bihar", cities: ["Patna", "Gaya", "Bhagalpur", "Muzaffarpur", "Darbhanga"], tier: "Tier 2" },
  "chhattisgarh": { name: "Chhattisgarh", cities: ["Raipur", "Bhilai", "Bilaspur", "Korba", "Jagdalpur"], tier: "Tier 2" },
  "goa": { name: "Goa", cities: ["Panaji", "Margao", "Vasco da Gama", "Mapusa"], tier: "Tier 3" },
  "gujarat": { name: "Gujarat", cities: ["Ahmedabad", "Surat", "Vadodara", "Rajkot", "Bhavnagar"], tier: "Tier 1" },
  "haryana": { name: "Haryana", cities: ["Gurugram", "Faridabad", "Karnal", "Hisar", "Panipat"], tier: "Tier 1" },
  "himachal-pradesh": { name: "Himachal Pradesh", cities: ["Shimla", "Mandi", "Dharamshala", "Solan", "Bilaspur"], tier: "Tier 3" },
  "jharkhand": { name: "Jharkhand", cities: ["Ranchi", "Jamshedpur", "Dhanbad", "Bokaro", "Hazaribagh"], tier: "Tier 2" },
  "karnataka": { name: "Karnataka", cities: ["Bengaluru", "Mysuru", "Hubli", "Mangaluru", "Belagavi"], tier: "Tier 1" },
  "kerala": { name: "Kerala", cities: ["Kochi", "Thiruvananthapuram", "Kozhikode", "Thrissur", "Kollam"], tier: "Tier 1" },
  "madhya-pradesh": { name: "Madhya Pradesh", cities: ["Bhopal", "Indore", "Jabalpur", "Gwalior", "Ujjain"], tier: "Tier 1" },
  "maharashtra": { name: "Maharashtra", cities: ["Mumbai", "Pune", "Nagpur", "Nashik", "Aurangabad"], tier: "Tier 1" },
  "odisha": { name: "Odisha", cities: ["Bhubaneswar", "Cuttack", "Puri", "Rourkela", "Berhampur"], tier: "Tier 2" },
  "punjab": { name: "Punjab", cities: ["Ludhiana", "Amritsar", "Jalandhar", "Patiala", "Bathinda"], tier: "Tier 1" },
  "rajasthan": { name: "Rajasthan", cities: ["Jaipur", "Jodhpur", "Udaipur", "Kota", "Bikaner"], tier: "Tier 1" },
  "tamil-nadu": { name: "Tamil Nadu", cities: ["Chennai", "Coimbatore", "Madurai", "Salem", "Tiruchirappalli"], tier: "Tier 1" },
  "telangana": { name: "Telangana", cities: ["Hyderabad", "Warangal", "Nizamabad", "Karimnagar", "Khammam"], tier: "Tier 1" },
  "uttar-pradesh": { name: "Uttar Pradesh", cities: ["Lucknow", "Kanpur", "Varanasi", "Agra", "Meerut"], tier: "Tier 1" },
  "uttarakhand": { name: "Uttarakhand", cities: ["Dehradun", "Haridwar", "Roorkee", "Haldwani", "Rudrapur"], tier: "Tier 2" },
  "west-bengal": { name: "West Bengal", cities: ["Kolkata", "Howrah", "Durgapur", "Asansol", "Siliguri"], tier: "Tier 1" },
};

const DEALER_BENEFITS = [
  { icon: "💰", title: "Direct Factory Economics", desc: "Industry-leading margins because we operate a zero-warehouse, factory-direct supply chain" },
  { icon: "📦", title: "On-Demand Dispatch", desc: "No dead stock. Order directly from our supplier network only when you have a confirmed sale" },
  { icon: "🚚", title: "Documented Supply Network", desc: "Full GST invoicing, e-way bills, and transit tracking directly to your showroom" },
  { icon: "🛠️", title: "Technical Support", desc: "Access to our OEM parts network and technical troubleshooting for RK-series engines" },
  { icon: "📢", title: "Local Geo-SEO Leads", desc: "We route inquiries generated from our digital platform directly to your dealership" },
  { icon: "📋", title: "Exclusive Territory Protection", desc: "Single authorized supply node per district. No overlap. Your customers, your business" },
];

const DEALER_REQUIREMENTS = [
  "Existing agri-input retail shop OR commercial space for showroom",
  "Commitment to the On-Demand ordering model (No bulk speculative stocking required)",
  "GST registration and active PAN card",
  "Two-wheeler for local service calls and field demonstrations",
  "Ability to handle basic RK-series engine and rotary maintenance",
  "Working capital for placing on-demand supplier orders",
];

const DEALER_PROCESS = [
  { step: 1, title: "Apply Online", desc: "Fill the dealer application form with your location, investment capacity and current business profile. Takes 5 minutes." },
  { step: 2, title: "Screening Call (24h)", desc: "Our territory manager calls you within 24 hours to verify details and explain the opportunity in your district." },
  { step: 3, title: "Territory Visit (7d)", desc: "We schedule a face-to-face meeting at your proposed location, validate commercial viability and finalize terms." },
  { step: 4, title: "MOU & First Order (14d)", desc: "Sign the dealership MOU, place your first order (typically ₹3-8 lakh), and we dispatch within 48 hours." },
  { step: 5, title: "Training & Launch (21d)", desc: "Complete 3-day service training. We support your shop launch with co-marketing and demo day at your location." },
  { step: 6, title: "Ongoing Business", desc: "Live inventory access, monthly review calls, dedicated territory manager, and quarterly performance bonuses." },
];

export default function DealerState() {
  const { state } = useParams();
  const stateData = STATE_DATA[state?.toLowerCase()] || { name: state?.replace(/-/g, " ").replace(/\b\w/g, l => l.toUpperCase()), cities: [], tier: "Tier 2" };
  const stateName = stateData.name;

  return (
    <div data-testid="dealer-state-page">
      <section className="relative kg-section overflow-hidden">
        <div className="absolute inset-0">
          <img src={HERO_BG} alt="" className="w-full h-full object-cover opacity-30" />
          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/70 to-transparent"></div>
        </div>
        <div className="max-w-[1200px] mx-auto relative">
          <div className="kg-eyebrow">{COMPANY.name} · Dealership Opportunity</div>
          <h1 className="kg-h1 mt-4 text-balance max-w-3xl">
            Become KrishiGears Dealer in {stateName} — {stateData.tier} Territory
          </h1>
          <h2 className="text-xl text-zinc-400 mt-2 font-normal">
            {stateName} में KrishiGears डीलर बनें — आधिकारिक वितरक और सर्विस पार्टनर
          </h2>
          <p className="text-zinc-300 mt-6 max-w-2xl leading-relaxed text-lg">
            We're expanding our power weeder and spare parts distribution network across {stateName}. Partner with
            India's fastest-growing B2B agri-machinery brand — 30-40% margins, exclusive district territory,
            full service training and co-marketing support included.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <EnquiryDialog product={`Dealer Application - ${stateName}`} trigger={
              <button data-testid="dealer-apply" className="bg-lime-500 hover:bg-lime-400 text-black font-bold px-7 py-4 rounded-md">Apply for Dealership</button>
            } />
            <a href={`https://wa.me/${COMPANY.whatsapp}?text=${encodeURIComponent(`Hi, I want to become a KrishiGears dealer in ${stateName}. Please share details.`)}`} target="_blank" rel="noreferrer" onClick={() => trackWhatsAppClick("dealer_state", state)} className="border border-zinc-700 hover:border-lime-500 hover:text-lime-500 px-7 py-4 font-bold rounded-md">WhatsApp Territory Manager</a>
          </div>
        </div>
      </section>

      <section className="kg-section bg-[#080808] border-y border-zinc-900">
        <div className="max-w-[1200px] mx-auto">
          <div className="kg-eyebrow">Market Opportunity</div>
          <h2 className="kg-h2 mt-3">Why {stateName} is a strong {stateData.tier} market.</h2>
          <h3 className="text-lg text-zinc-400 mt-2 font-normal">{stateName} में क्यों है अच्छा अवसर</h3>
          <div className="mt-10 grid md:grid-cols-3 gap-4">
            <div className="border border-zinc-800 p-6 rounded-md">
              <TrendingUp className="h-8 w-8 text-lime-500 mb-3" />
              <h3 className="font-bold text-lg mb-2">Power weeder adoption</h3>
              <p className="text-zinc-400 text-sm">Labour shortage and rising wages are driving rapid mechanization across {stateName}. Estimated 15-20% YoY growth in weeder sales.</p>
            </div>
            <div className="border border-zinc-800 p-6 rounded-md">
              <Award className="h-8 w-8 text-lime-500 mb-3" />
              <h3 className="font-bold text-lg mb-2">Government subsidy programs</h3>
              <p className="text-zinc-400 text-sm">SMAM and state schemes offer 40-50% subsidy on power weeders in {stateName}. Dealers benefit from subsidy-driven demand spikes.</p>
            </div>
            <div className="border border-zinc-800 p-6 rounded-md">
              <Users className="h-8 w-8 text-lime-500 mb-3" />
              <h3 className="font-bold text-lg mb-2">FPO and cooperative demand</h3>
              <p className="text-zinc-400 text-sm">Active FPO networks in {stateName} offer bulk order opportunities — one FPO can be 20-50 machine orders per season.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="kg-section">
        <div className="max-w-[1200px] mx-auto">
          <div className="kg-eyebrow">What you get</div>
          <h2 className="kg-h2 mt-3">Dealership benefits in {stateName}.</h2>
          <h3 className="text-lg text-zinc-400 mt-2 font-normal">{stateName} में डीलर के फायदे</h3>
          <div className="mt-10 grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {DEALER_BENEFITS.map((b) => (
              <div key={b.title} className="border border-zinc-800 p-5 rounded-md hover:border-lime-500 transition">
                <div className="text-2xl mb-2">{b.icon}</div>
                <h3 className="font-bold text-lg mb-1">{b.title}</h3>
                <p className="text-zinc-400 text-sm">{b.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="kg-section bg-[#080808] border-y border-zinc-900">
        <div className="max-w-[1200px] mx-auto">
          <div className="kg-eyebrow">Requirements</div>
          <h2 className="kg-h2 mt-3">What we need from a {stateName} dealer.</h2>
          <div className="mt-10 grid md:grid-cols-2 gap-4">
            {DEALER_REQUIREMENTS.map((r) => (
              <div key={r} className="flex items-start gap-3 text-zinc-300">
                <Check className="h-5 w-5 text-lime-500 mt-0.5 shrink-0" />{r}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="kg-section">
        <div className="max-w-[1200px] mx-auto">
          <div className="kg-eyebrow">Onboarding Process</div>
          <h2 className="kg-h2 mt-3">From application to first sale in 21 days.</h2>
          <div className="mt-10 grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {DEALER_PROCESS.map((p) => (
              <div key={p.step} className="border border-zinc-800 p-5 rounded-md relative">
                <div className="absolute -top-3 -left-3 bg-lime-500 text-black font-bold w-10 h-10 rounded-full flex items-center justify-center">{p.step}</div>
                <h3 className="font-bold text-lg mb-2 mt-3">{p.title}</h3>
                <p className="text-zinc-400 text-sm">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {stateData.cities.length > 0 && (
        <section className="kg-section bg-[#080808] border-y border-zinc-900">
          <div className="max-w-[1200px] mx-auto">
            <div className="kg-eyebrow">Key Cities</div>
            <h2 className="kg-h2 mt-3">Active dealer recruitment in these {stateName} cities.</h2>
            <div className="mt-8 flex flex-wrap gap-2">
              {stateData.cities.map((c) => (
                <span key={c} className="text-sm px-4 py-2 border border-zinc-800 text-zinc-300 hover:border-lime-500 hover:text-lime-500 transition cursor-default inline-flex items-center gap-1.5">
                  <MapPin className="h-3 w-3"/>{c}
                </span>
              ))}
            </div>
          </div>
        </section>
      )}

      <section className="kg-section">
        <div className="max-w-[1100px] mx-auto text-center">
          <h2 className="kg-h2 max-w-2xl mx-auto text-balance">Ready to start your {stateName} dealership?</h2>
          <p className="text-zinc-400 mt-4 max-w-2xl mx-auto">
            Limited districts available in {stateName}. Applications reviewed within 48 hours.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <EnquiryDialog product={`Dealer Application - ${stateName}`} trigger={
              <button className="bg-lime-500 hover:bg-lime-400 text-black font-bold px-7 py-4 rounded-md inline-flex items-center gap-2">Apply Now <ArrowRight className="h-4 w-4"/></button>
            } />
            <Link to="/become-a-dealer" className="border border-zinc-700 hover:border-lime-500 hover:text-lime-500 px-7 py-4 font-bold rounded-md">General Application</Link>
          </div>
        </div>
      </section>
    </div>
  );
}
