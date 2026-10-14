"use client";
import Link from "next/link";
import { useParams } from "next/navigation";
import { useState } from "react";
import { Check, ArrowRight, MapPin, TrendingUp, Award, Users, Search, Wrench } from "lucide-react";
import { COMPANY, HERO_BG } from "@/data/catalog";
import EnquiryDialog from "@/components/EnquiryDialog";
import { trackWhatsAppClick } from "@/lib/analytics";

// State-specific dealership benefits and requirements
const STATE_DATA = {
  "andhra-pradesh": { name: "Andhra Pradesh", cities: ["Vijayawada", "Guntur", "Visakhapatnam", "Tirupati", "Kurnool"], tier: "Tier 1" },
  "arunachal-pradesh": { name: "Arunachal Pradesh", cities: ["Itanagar", "Naharlagun", "Pasighat"], tier: "Tier 3" },
  "assam": { name: "Assam", cities: ["Guwahati", "Dibrugarh", "Silchar", "Jorhat", "Tezpur"], tier: "Tier 2" },
  "bihar": { name: "Bihar", cities: ["Patna", "Gaya", "Bhagalpur", "Muzaffarpur", "Darbhanga"], tier: "Tier 2" },
  "chandigarh": { name: "Chandigarh", cities: ["Chandigarh"], tier: "Tier 2" },
  "chandigarh-ut": { name: "Chandigarh (UT)", cities: ["Chandigarh"], tier: "Tier 2" },
  "chhattisgarh": { name: "Chhattisgarh", cities: ["Raipur", "Bhilai", "Bilaspur", "Korba", "Jagdalpur"], tier: "Tier 2" },
  "dadra-and-nagar-haveli": { name: "Dadra and Nagar Haveli", cities: ["Silvassa"], tier: "Tier 3" },
  "dadra-and-nagar-haveli-ut": { name: "Dadra and Nagar Haveli (UT)", cities: ["Silvassa"], tier: "Tier 3" },
  "daman-and-diu": { name: "Daman and Diu", cities: ["Daman", "Diu"], tier: "Tier 3" },
  "daman-and-diu-ut": { name: "Daman and Diu (UT)", cities: ["Daman", "Diu"], tier: "Tier 3" },
  "delhi": { name: "Delhi", cities: ["New Delhi", "North Delhi", "South Delhi"], tier: "Tier 1" },
  "delhi-nct": { name: "Delhi (NCT)", cities: ["New Delhi", "North Delhi", "South Delhi"], tier: "Tier 1" },
  "goa": { name: "Goa", cities: ["Panaji", "Margao", "Vasco da Gama", "Mapusa"], tier: "Tier 3" },
  "gujarat": { name: "Gujarat", cities: ["Ahmedabad", "Surat", "Vadodara", "Rajkot", "Bhavnagar"], tier: "Tier 1" },
  "haryana": { name: "Haryana", cities: ["Gurugram", "Faridabad", "Karnal", "Hisar", "Panipat"], tier: "Tier 1" },
  "himachal-pradesh": { name: "Himachal Pradesh", cities: ["Shimla", "Mandi", "Dharamshala", "Solan", "Bilaspur"], tier: "Tier 3" },
  "jammu-and-kashmir": { name: "Jammu and Kashmir", cities: ["Srinagar", "Jammu", "Anantnag", "Baramulla"], tier: "Tier 2" },
  "jharkhand": { name: "Jharkhand", cities: ["Ranchi", "Jamshedpur", "Dhanbad", "Bokaro", "Hazaribagh"], tier: "Tier 2" },
  "karnataka": { name: "Karnataka", cities: ["Bengaluru", "Mysuru", "Hubli", "Mangaluru", "Belagavi"], tier: "Tier 1" },
  "kerala": { name: "Kerala", cities: ["Kochi", "Thiruvananthapuram", "Kozhikode", "Thrissur", "Kollam"], tier: "Tier 1" },
  "lakshadweep": { name: "Lakshadweep", cities: ["Kavaratti"], tier: "Tier 3" },
  "lakshadweep-ut": { name: "Lakshadweep (UT)", cities: ["Kavaratti"], tier: "Tier 3" },
  "madhya-pradesh": { name: "Madhya Pradesh", cities: ["Bhopal", "Indore", "Jabalpur", "Gwalior", "Ujjain"], tier: "Tier 1" },
  "maharashtra": { name: "Maharashtra", cities: ["Mumbai", "Pune", "Nagpur", "Nashik", "Aurangabad"], tier: "Tier 1" },
  "manipur": { name: "Manipur", cities: ["Imphal", "Thoubal", "Churachandpur"], tier: "Tier 3" },
  "meghalaya": { name: "Meghalaya", cities: ["Shillong", "Tura", "Jowai"], tier: "Tier 3" },
  "mizoram": { name: "Mizoram", cities: ["Aizawl", "Lunglei", "Champhai"], tier: "Tier 3" },
  "nagaland": { name: "Nagaland", cities: ["Kohima", "Dimapur", "Mokokchung"], tier: "Tier 3" },
  "odisha": { name: "Odisha", cities: ["Bhubaneswar", "Cuttack", "Puri", "Rourkela", "Berhampur"], tier: "Tier 2" },
  "puducherry": { name: "Puducherry", cities: ["Puducherry", "Karaikal"], tier: "Tier 3" },
  "puducherry-ut": { name: "Puducherry (UT)", cities: ["Puducherry", "Karaikal"], tier: "Tier 3" },
  "punjab": { name: "Punjab", cities: ["Ludhiana", "Amritsar", "Jalandhar", "Patiala", "Bathinda"], tier: "Tier 1" },
  "rajasthan": { name: "Rajasthan", cities: ["Jaipur", "Jodhpur", "Udaipur", "Kota", "Bikaner"], tier: "Tier 1" },
  "sikkim": { name: "Sikkim", cities: ["Gangtok", "Namchi", "Gyalshing"], tier: "Tier 3" },
  "tamil-nadu": { name: "Tamil Nadu", cities: ["Chennai", "Coimbatore", "Madurai", "Salem", "Tiruchirappalli"], tier: "Tier 1" },
  "telangana": { name: "Telangana", cities: ["Hyderabad", "Warangal", "Nizamabad", "Karimnagar", "Khammam"], tier: "Tier 1" },
  "tripura": { name: "Tripura", cities: ["Agartala", "Udaipur", "Dharmanagar"], tier: "Tier 3" },
  "uttar-pradesh": { name: "Uttar Pradesh", cities: ["Lucknow", "Kanpur", "Varanasi", "Agra", "Meerut"], tier: "Tier 1" },
  "uttarakhand": { name: "Uttarakhand", cities: ["Dehradun", "Haridwar", "Roorkee", "Haldwani", "Rudrapur"], tier: "Tier 2" },
  "west-bengal": { name: "West Bengal", cities: ["Kolkata", "Howrah", "Durgapur", "Asansol", "Siliguri"], tier: "Tier 1" },
};

const DEALER_BENEFITS = [
  { icon: "💰", title: "Direct Factory Economics", desc: "Industry-leading margins because we operate a zero-warehouse, factory-direct supply chain" },
  { icon: "📦", title: "On-Demand Dispatch", desc: "No dead stock. Order directly from our supplier network only when you have a confirmed sale" },
  { icon: "🚚", title: "Documented Supply Network", desc: "Full GST invoicing, e-way bills, and transit tracking directly to your showroom" },
  { icon: "🛠️", title: "Technical Support", desc: "Access to our OEM parts network and technical troubleshooting for KG- engines" },
  { icon: "📢", title: "Local Geo-SEO Leads", desc: "We route inquiries generated from our digital platform directly to your dealership" },
  { icon: "📋", title: "Exclusive Territory Protection", desc: "Single authorized supply node per district. No overlap. Your customers, your business" },
];

const DEALER_REQUIREMENTS = [
  "Existing agri-input retail shop OR commercial space for showroom",
  "Commitment to the On-Demand ordering model (No bulk speculative stocking required)",
  "GST registration and active PAN card",
  "Two-wheeler for local service calls and field demonstrations",
  "Ability to handle basic KG- engine and rotary maintenance",
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

import { getStateAgronomy } from "@/data/stateAgronomy";

export default function DealerState({ districts = [], stateName: propStateName, stateSlug: propStateSlug, tier: propTier, agronomy: propAgronomy } = {}) {
  const params = useParams();
  const routeState = params?.state;
  const activeSlug = propStateSlug || routeState?.toLowerCase();
  const stateData = STATE_DATA[activeSlug] || { name: activeSlug?.replace(/-/g, " ").replace(/\b\w/g, l => l.toUpperCase()), cities: [], tier: propTier || "Tier 2" };
  const stateName = propStateName || stateData.name;
  const agronomy = propAgronomy || getStateAgronomy(activeSlug || "rajasthan");
  const [searchQuery, setSearchQuery] = useState("");

  const districtsList = districts && districts.length > 0
    ? districts
    : stateData.cities.map(c => ({
        city: c,
        slug: c.toLowerCase().replace(/[^a-zA-Z0-9]+/g, "-").replace(/^-|-$/g, ""),
        crops: [],
        soil: "",
        major: true
      }));

  const filteredDistricts = districtsList.filter(d =>
    !searchQuery.trim() ||
    d.city.toLowerCase().includes(searchQuery.toLowerCase()) ||
    (d.crops && d.crops.some(c => c.toLowerCase().includes(searchQuery.toLowerCase())))
  );

  return (
    <div data-testid="dealer-state-page">
      <section className="relative kg-section overflow-hidden">
        <div className="absolute inset-0">
          <img src={HERO_BG} alt="" className="w-full h-full object-cover opacity-30" />
          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-transparent"></div>
        </div>
        <div className="max-w-[1200px] mx-auto relative">
          <div className="kg-eyebrow">{COMPANY.name} · Dealership Opportunity</div>
          <h1 className="kg-h1 mt-4 text-balance max-w-3xl">
            Become KrishiGears Dealer in {stateName} — {stateData.tier} Territory
          </h1>
          <h2 className="text-xl text-zinc-300 mt-2 font-normal">
            {stateName} में KrishiGears डीलर बनें — आधिकारिक वितरक और सर्विस पार्टनर
          </h2>
          <p className="text-zinc-200 mt-6 max-w-2xl leading-relaxed text-lg">
            We're expanding our power weeder and spare parts distribution network across {stateName}. Partner with
            India's fastest-growing B2B agri-machinery brand — 30-40% margins, exclusive district territory,
            full service training and co-marketing support included.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <EnquiryDialog product={`Dealer Application - ${stateName}`} trigger={
              <button data-testid="dealer-apply" className="bg-lime-500 hover:bg-lime-400 text-black dark:text-black font-bold px-7 py-4 rounded-md">Apply for Dealership</button>
            } />
            <a href={`https://api.whatsapp.com/send?phone=${COMPANY.whatsapp}&text=${encodeURIComponent(`Hi, I want to become a KrishiGears dealer in ${stateName}. Please share details.`)}&utm_source=website&utm_medium=whatsapp&utm_campaign=kg_catalog`} target="_blank" rel="noreferrer" aria-label={`WhatsApp Territory Manager for ${stateName}`} onClick={() => trackWhatsAppClick("dealer_state", activeSlug)} className="border border-zinc-700 hover:border-lime-500 hover:text-lime-500 px-7 py-4 font-bold rounded-md">WhatsApp Territory Manager</a>
          </div>
        </div>
      </section>

      {/* Regional Agronomy & Soil Fitment */}
      <section className="kg-section bg-surface-dark border-b border-zinc-900">
        <div className="max-w-[1200px] mx-auto">
          <div className="kg-eyebrow">Agronomy & Field Engineering · {stateName}</div>
          <h2 className="kg-h2 mt-3">Machinery Engineered for <span className="text-lime-500">{stateName} Soils</span></h2>
          <h3 className="text-lg text-zinc-300 mt-1 font-normal">{stateName} की मिट्टी और प्रमुख फसलों के लिए उपयुक्त कृषि यंत्र</h3>

          <div className="mt-8 grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="p-5 border border-zinc-800 bg-surface-darker/70 rounded-lg space-y-2">
              <span className="text-xs font-bold text-lime-400 uppercase tracking-wider">Soil Classification</span>
              <h4 className="font-bold text-white text-base">{agronomy.soil}</h4>
              <p className="text-xs text-zinc-400">Specially configured rotary tines and gearbox seals prevent soil compaction and clay binding.</p>
            </div>
            <div className="p-5 border border-zinc-800 bg-surface-darker/70 rounded-lg space-y-2">
              <span className="text-xs font-bold text-lime-400 uppercase tracking-wider">Primary Crops Sized For</span>
              <h4 className="font-bold text-white text-base">{agronomy.crops}</h4>
              <p className="text-xs text-zinc-400">Adjustable rotor width (18"–36") protects standing root systems in high-density crop rows.</p>
            </div>
            <div className="p-5 border border-zinc-800 bg-surface-darker/70 rounded-lg space-y-2">
              <span className="text-xs font-bold text-lime-400 uppercase tracking-wider">Recommended Machinery</span>
              <h4 className="font-bold text-white text-base">{agronomy.recommended_weeder}</h4>
              <p className="text-xs text-zinc-400">Heavy-duty cast iron transmission with standard PTO shaft for water pump and ditcher attachments.</p>
            </div>
            <div className="p-5 border border-zinc-800 bg-surface-darker/70 rounded-lg space-y-2">
              <span className="text-xs font-bold text-lime-400 uppercase tracking-wider">DBT Subsidy Mechanism</span>
              <h4 className="font-bold text-white text-base">{agronomy.subsidy_scheme}</h4>
              <p className="text-xs text-lime-400 font-semibold">{agronomy.subsidy_pct}</p>
            </div>
          </div>
        </div>
      </section>

      <section className="kg-section bg-surface-darker border-y border-zinc-900">
        <div className="max-w-[1200px] mx-auto">
          <div className="kg-eyebrow">Market Opportunity</div>
          <h2 className="kg-h2 mt-3">Why {stateName} is a strong {stateData.tier} market.</h2>
          <h3 className="text-lg text-zinc-300 mt-2 font-normal">{stateName} में क्यों है अच्छा अवसर</h3>
          <div className="mt-10 grid md:grid-cols-3 gap-4">
            <div className="border border-zinc-800 p-6 rounded-md">
              <TrendingUp className="h-8 w-8 text-lime-500 mb-3" />
              <h3 className="font-bold text-lg mb-2">Power weeder adoption</h3>
              <p className="text-zinc-300 text-sm">Labour shortage and rising wages are driving rapid mechanization across {stateName}. Estimated 15-20% YoY growth in weeder sales.</p>
            </div>
            <div className="border border-zinc-800 p-6 rounded-md">
              <Award className="h-8 w-8 text-lime-500 mb-3" />
              <h3 className="font-bold text-lg mb-2">Government subsidy programs</h3>
              <p className="text-zinc-300 text-sm">{agronomy.subsidy_scheme} offers {agronomy.subsidy_pct} on power weeders in {stateName}. Dealers benefit from subsidy-driven demand spikes.</p>
            </div>
            <div className="border border-zinc-800 p-6 rounded-md">
              <Users className="h-8 w-8 text-lime-500 mb-3" />
              <h3 className="font-bold text-lg mb-2">FPO and cooperative demand</h3>
              <p className="text-zinc-300 text-sm">Active FPO networks in {stateName} offer bulk order opportunities — one FPO can be 20-50 machine orders per season.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="kg-section">
        <div className="max-w-[1200px] mx-auto">
          <div className="kg-eyebrow">What you get</div>
          <h2 className="kg-h2 mt-3">Dealership benefits in {stateName}.</h2>
          <h3 className="text-lg text-zinc-300 mt-2 font-normal">{stateName} में डीलर के फायदे</h3>
          <div className="mt-10 grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {DEALER_BENEFITS.map((b) => (
              <div key={b.title} className="border border-zinc-800 p-5 rounded-md hover:border-lime-500 transition">
                <div className="text-2xl mb-2">{b.icon}</div>
                <h3 className="font-bold text-lg mb-1">{b.title}</h3>
                <p className="text-zinc-300 text-sm">{b.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Logistics & Express Dispatch Hubs */}
      <section className="kg-section">
        <div className="max-w-[1200px] mx-auto">
          <div className="kg-eyebrow">Logistics & Supply Chain</div>
          <h2 className="kg-h2 mt-3">Factory Dispatch & Transport Hubs serving {stateName}.</h2>
          <p className="text-zinc-300 text-sm mt-2 max-w-2xl">
            All machinery and OEM spare parts orders are dispatched from our central Jaipur logistics facility (VKI Area / Transport Nagar) directly to major regional freight depots across {stateName}:
          </p>
          <div className="mt-8 grid md:grid-cols-3 gap-4">
            <div className="p-5 border border-zinc-800 bg-surface-dark rounded-lg space-y-2">
              <span className="text-xs font-bold text-lime-400 uppercase tracking-wider">Primary Rail Freight</span>
              <h4 className="font-bold text-white text-base">Container & Parcel Express</h4>
              <p className="text-xs text-zinc-400">Direct booking via Western & North-Western Railway freight networks to {stateName} junction stations (24–48 hours transit).</p>
            </div>
            <div className="p-5 border border-zinc-800 bg-surface-dark rounded-lg space-y-2">
              <span className="text-xs font-bold text-lime-400 uppercase tracking-wider">Road Logistics</span>
              <h4 className="font-bold text-white text-base">VRL / TCI / SafeXpress</h4>
              <p className="text-xs text-zinc-400">Doorstep delivery to dealer godowns across district headquarters with full e-way bill documentation and digital LR tracking.</p>
            </div>
            <div className="p-5 border border-zinc-800 bg-surface-dark rounded-lg space-y-2">
              <span className="text-xs font-bold text-lime-400 uppercase tracking-wider">Urgent Spare Parts</span>
              <h4 className="font-bold text-white text-base">Air Cargo & Speed Post</h4>
              <p className="text-xs text-zinc-400">Critical warranty spares, carburetors, and electrical components dispatched same-day to minimize machine downtime during sowing season.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="kg-section bg-surface-darker border-y border-zinc-900">
        <div className="max-w-[1200px] mx-auto">
          <div className="kg-eyebrow">Requirements</div>
          <h2 className="kg-h2 mt-3">What we need from a {stateName} dealer.</h2>
          <div className="mt-10 grid md:grid-cols-2 gap-4">
            {DEALER_REQUIREMENTS.map((r) => (
              <div key={r} className="flex items-start gap-3 text-zinc-200">
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
                <div className="absolute -top-3 -left-3 bg-lime-500 text-black dark:text-black font-bold w-10 h-10 rounded-full flex items-center justify-center">{p.step}</div>
                <h3 className="font-bold text-lg mb-2 mt-3">{p.title}</h3>
                <p className="text-zinc-300 text-sm">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* District Hub-and-Spoke Mesh */}
      {districtsList.length > 0 && (
        <section className="kg-section bg-surface-darker border-y border-zinc-900" id="districts">
          <div className="max-w-[1200px] mx-auto">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
              <div>
                <div className="kg-eyebrow">District Supply Network · {stateName}</div>
                <h2 className="kg-h2 mt-2">
                  All {districtsList.length} District Supply Hubs in <span className="text-lime-500">{stateName}</span>
                </h2>
                <h3 className="text-lg text-zinc-300 mt-1 font-normal">
                  {stateName} के सभी जिलों में अधिकृत डीलरशिप और थोक पार्ट्स सप्लाई नेटवर्क
                </h3>
              </div>
              {districtsList.length > 6 && (
                <div className="w-full md:w-72 relative">
                  <Search className="h-4 w-4 text-zinc-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                  <input
                    type="text"
                    placeholder={`Search ${stateName} districts...`}
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full bg-black/60 border border-zinc-800 focus:border-lime-500 pl-10 pr-4 py-2.5 rounded-md text-sm text-white placeholder-zinc-500 outline-none transition"
                  />
                </div>
              )}
            </div>

            <p className="text-zinc-300 text-sm mt-4 max-w-3xl leading-relaxed">
              Explore verified B2B wholesale supply points, regional agronomy profiles, recommended HP configurations, and express OEM spare parts dispatch across all {districtsList.length} districts of {stateName}.
            </p>

            <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
              {filteredDistricts.map((d) => (
                <div
                  key={d.city}
                  className="p-4 border border-zinc-800 bg-surface-dark/70 hover:border-lime-500/70 rounded-lg transition group flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-start justify-between gap-2">
                      <h4 className="font-bold text-white text-base group-hover:text-lime-400 transition flex items-center gap-1.5">
                        <MapPin className="h-3.5 w-3.5 text-lime-500 shrink-0" />
                        {d.city}
                      </h4>
                      {d.major && (
                        <span className="text-[10px] font-semibold uppercase tracking-wider bg-lime-500/10 text-lime-400 px-1.5 py-0.5 rounded border border-lime-500/20">
                          Major
                        </span>
                      )}
                    </div>
                    {d.crops && d.crops.length > 0 && (
                      <p className="text-xs text-zinc-400 mt-1.5 line-clamp-1">
                        Crops: {d.crops.slice(0, 3).join(", ")}
                      </p>
                    )}
                  </div>

                  <div className="mt-4 pt-3 border-t border-zinc-800/80 flex items-center justify-between text-xs font-medium">
                    <Link
                      href={`/seo/power-weeders-supplier-${d.slug}`}
                      className="text-lime-400 hover:text-lime-300 transition flex items-center gap-1"
                    >
                      Power Weeders &rarr;
                    </Link>
                    <Link
                      href={`/seo/power-weeder-spare-parts-supplier-${d.slug}`}
                      className="text-zinc-400 hover:text-white transition flex items-center gap-1"
                    >
                      <Wrench className="h-3 w-3" /> Spares
                    </Link>
                  </div>
                </div>
              ))}
            </div>

            {filteredDistricts.length === 0 && (
              <div className="p-8 text-center text-zinc-500 border border-zinc-800 rounded-lg mt-6">
                No districts matching "{searchQuery}". Clear your search to view all {districtsList.length} districts for {stateName}.
              </div>
            )}
          </div>
        </section>
      )}

      {/* State Dealership & Subsidy FAQs */}
      {agronomy.faqs && agronomy.faqs.length > 0 && (
        <section className="kg-section bg-surface-darker border-y border-zinc-900" id="faqs">
          <div className="max-w-[1200px] mx-auto">
            <div className="kg-eyebrow">Frequently Asked Questions · {stateName}</div>
            <h2 className="kg-h2 mt-3">{stateName} Dealership & DBT Subsidy FAQs</h2>
            <div className="mt-8 grid md:grid-cols-2 gap-5">
              {agronomy.faqs.map((f, i) => (
                <div key={i} className="p-6 border border-zinc-800 bg-surface-dark/70 rounded-lg space-y-3">
                  <h3 className="font-bold text-white text-lg flex items-start gap-2">
                    <span className="text-lime-500 font-black">Q:</span> {f.question}
                  </h3>
                  <p className="text-sm text-zinc-300 leading-relaxed pl-6 border-l-2 border-lime-500/30">
                    {f.answer}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      <section className="kg-section">
        <div className="max-w-[1100px] mx-auto text-center">
          <h2 className="kg-h2 max-w-2xl mx-auto text-balance">Ready to start your {stateName} dealership?</h2>
          <p className="text-zinc-300 mt-4 max-w-2xl mx-auto">
            Limited districts available in {stateName}. Applications reviewed within 48 hours.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <EnquiryDialog product={`Dealer Application - ${stateName}`} trigger={
              <button className="bg-lime-500 hover:bg-lime-400 text-black dark:text-black font-bold px-7 py-4 rounded-md inline-flex items-center gap-2">Apply Now <ArrowRight className="h-4 w-4"/></button>
            } />
            <Link href="/become-a-dealer" className="border border-zinc-700 hover:border-lime-500 hover:text-lime-500 px-7 py-4 font-bold rounded-md">General Application</Link>
          </div>
        </div>
      </section>
    </div>
  );
}

