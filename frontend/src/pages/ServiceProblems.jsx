import { Link, useParams } from "react-router-dom";
import { Check, AlertTriangle, Wrench, Phone, ArrowRight } from "lucide-react";
import { COMPANY, HERO_BG } from "@/data/catalog";
import EnquiryDialog from "@/components/EnquiryDialog";
import { trackWhatsAppClick } from "@/lib/analytics";

const PROBLEM_CATEGORIES = [
  {
    icon: "⚡",
    category: "Engine Problems",
    color: "text-red-400",
    problems: [
      { issue: "Engine won't start", causes: ["Fuel tank empty or stale fuel", "Spark plug fouled or gap wrong", "Air filter clogged completely", "Choke not engaged on cold start", "Fuel valve closed"] },
      { issue: "Engine stalls after running", causes: ["Fuel line blockage", "Carburetor float stuck", "Tank vent clogged", "Low fuel mixture quality", "Dirty fuel filter"] },
      { issue: "Black smoke from exhaust", causes: ["Air filter severely clogged", "Carburetor running rich", "Choke left partially on", "Low-quality fuel"] },
      { issue: "White smoke from exhaust", causes: ["Water in fuel", "Oil mixing with fuel (2-stroke)", "Head gasket leak", "Engine running cold"] },
    ],
  },
  {
    icon: "🔧",
    category: "Mechanical Problems",
    color: "text-orange-400",
    problems: [
      { issue: "Blades won't rotate", causes: ["V-belt broken or slipped off", "Clutch shoes worn out (<2mm)", "Drive key sheared", "Blade hub seized"] },
      { issue: "Excessive vibration", causes: ["Blades unbalanced or bent", "Loose engine mount bolts", "Worn blade carrier bearing", "Bent drive shaft"] },
      { issue: "Gear shifting hard", causes: ["Low gear oil level", "Shift cable stretched", "Shift fork worn", "Gear dog wear"] },
      { issue: "Wheel wobble or play", causes: ["Wheel hub nut loose", "Bearing worn out", "Axle bent", "Wheel hub cracked"] },
    ],
  },
  {
    icon: "🌾",
    category: "Field Operation Problems",
    color: "text-yellow-400",
    problems: [
      { issue: "Machine digs into soil too deep", causes: ["Working depth set too deep", "Paddy wheels not installed", "Soil moisture too high", "Weight distribution wrong"] },
      { issue: "Weeds not cut properly", causes: ["Blade RPM too low", "Blades blunt or reversed", "Forward speed too fast", "Blade height wrong"] },
      { issue: "Machine pulls to one side", causes: ["Tyre pressure uneven", "Depth setting uneven", "Frame bent", "Engine mount shifted"] },
      { issue: "Paddy field sinking", causes: ["Using narrow wheels", "Ground too soft", "Operating too slowly (high sinkage)", "Need wider paddy wheels"] },
    ],
  },
  {
    icon: "🔌",
    category: "Electrical / Safety Problems",
    color: "text-blue-400",
    problems: [
      { issue: "Electric start not working", causes: ["Battery discharged (<11V)", "Battery terminals corroded", "Ignition switch faulty", "Starter motor failure"] },
      { issue: "Killswitch keeps cutting off", causes: ["Loose killswitch wire", "Short circuit in wiring harness", "Killswitch spring broken", "Water entry in switch"] },
      { issue: "Safety clutch not engaging", causes: ["Clutch lever return spring broken", "Cable frayed", "Clutch mechanism dirty"] },
    ],
  },
];

const SERVICE_OPTIONS = [
  { name: "On-site Repair Call", desc: "KrishiGears technician visits your field in 48 hours across India", icon: "🔧" },
  { name: "Machine Pickup Service", desc: "We collect your machine from your location for workshop repair", icon: "🚛" },
  { name: "AMC — Annual Maintenance", desc: "Year-round coverage: 2 scheduled services + unlimited breakdown calls", icon: "📋" },
  { name: "Operator Training", desc: "On-field training for your workers on correct operation and daily maintenance", icon: "📖" },
  { name: "Genuine Parts Only", desc: "All replacements use OEM-spec parts, not cheap aftermarket copies", icon: "✅" },
  { name: "Warranty Support", desc: "We handle warranty claims directly with the manufacturer on your behalf", icon: "🛡️" },
];
import { SERVICE_MAP } from "@/data/serviceSeo";

export default function ServiceProblems() {
  const { slug } = useParams();
  const pageData = SERVICE_MAP.get(slug);
  const location = pageData?.city || slug?.split("-").slice(0, -2).join(" ") || "India";

  return (
    <div data-testid="service-problems-page">
      <section className="relative kg-section overflow-hidden">
        <div className="absolute inset-0">
          <img src={HERO_BG} alt="" className="w-full h-full object-cover opacity-30" />
          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/70 to-transparent"></div>
        </div>
        <div className="max-w-[1200px] mx-auto relative">
          <div className="kg-eyebrow">{COMPANY.name} · Service & Troubleshooting</div>
          <h1 className="kg-h1 mt-4 text-balance max-w-3xl">
            Power Weeder Problems & Service in {location} — Expert Repair Support
          </h1>
          <h2 className="text-xl text-zinc-400 mt-2 font-normal">
            {location} में पावर वीडर की समस्याएं और सर्विस — विशेषज्ञ मरम्मत सहायता
          </h2>
          <p className="text-zinc-300 mt-6 max-w-2xl leading-relaxed text-lg">
            Whether your power weeder won't start in {location} paddy fields, blades aren't cutting properly,
            or the engine keeps cutting out mid-session — we have the service team and spare parts to get you
            back working in under 48 hours.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <EnquiryDialog product="Power Weeder Service" trigger={
              <button data-testid="service-enquiry" className="bg-lime-500 hover:bg-lime-400 text-black font-bold px-7 py-4 rounded-md">Book Service Call</button>
            } />
            <a href={`https://wa.me/${COMPANY.whatsapp}?text=${encodeURIComponent(`Hi, I have a power weeder problem in ${location}. Machine details: `)}`} target="_blank" rel="noreferrer" onClick={() => trackWhatsAppClick("service_problems", slug)} className="border border-zinc-700 hover:border-lime-500 hover:text-lime-500 px-7 py-4 font-bold rounded-md">WhatsApp Service Desk</a>
            <Link to="/warranty-and-support" data-testid="warranty-link" className="border border-zinc-700 hover:border-lime-500 hover:text-lime-500 px-7 py-4 font-bold rounded-md">Warranty Info</Link>
          </div>
        </div>
      </section>

      <section className="kg-section bg-[#080808] border-y border-zinc-900">
        <div className="max-w-[1200px] mx-auto">
          <div className="kg-eyebrow">Troubleshooting Guide</div>
          <h2 className="kg-h2 mt-3">Common problems in {location} and how to fix them.</h2>
          <h3 className="text-lg text-zinc-400 mt-2 font-normal">{location} में आम समस्याएं और समाधान</h3>
          <div className="mt-10 space-y-8">
            {PROBLEM_CATEGORIES.map((cat) => (
              <div key={cat.category} className="border border-zinc-800 rounded-md overflow-hidden">
                <div className={`bg-zinc-900 px-6 py-4 font-bold text-xl flex items-center gap-3 ${cat.color}`}>
                  <span className="text-2xl">{cat.icon}</span> {cat.category} Problems in {location}
                </div>
                <div className="divide-y divide-zinc-800">
                  {cat.problems.map((prob) => (
                    <div key={prob.issue} className="p-5">
                      <div className="flex items-start gap-3 mb-3">
                        <AlertTriangle className="h-5 w-5 text-yellow-500 shrink-0 mt-0.5" />
                        <h4 className="font-bold text-zinc-200">{prob.issue}</h4>
                      </div>
                      <ul className="ml-8 space-y-1.5 text-sm text-zinc-400">
                        {prob.causes.map((c) => (
                          <li key={c} className="flex items-start gap-2"><span className="text-lime-500 shrink-0">→</span>{c}</li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="kg-section">
        <div className="max-w-[1200px] mx-auto">
          <div className="kg-eyebrow">Service Options in {location}</div>
          <h2 className="kg-h2 mt-3">Service packages available for {location} dealers and farmers.</h2>
          <h3 className="text-lg text-zinc-400 mt-2 font-normal">{location} में उपलब्ध सर्विस पैकेज</h3>
          <div className="mt-10 grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {SERVICE_OPTIONS.map((s) => (
              <div key={s.name} className="border border-zinc-800 p-5 rounded-md hover:border-lime-500 transition">
                <div className="text-2xl mb-2">{s.icon}</div>
                <h3 className="font-bold text-lg mb-1">{s.name}</h3>
                <p className="text-zinc-400 text-sm">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="kg-section bg-[#080808] border-y border-zinc-900">
        <div className="max-w-[1100px] mx-auto text-center">
          <h2 className="kg-h2 max-w-2xl mx-auto text-balance">
            Machine down? Don't wait — service in {location} within 48 hours.
          </h2>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <EnquiryDialog product="Emergency Service" trigger={
              <button className="bg-lime-500 hover:bg-lime-400 text-black font-bold px-7 py-4 rounded-md inline-flex items-center gap-2"><Wrench className="h-4 w-4" />Book Emergency Service</button>
            } />
            <a href={`https://wa.me/${COMPANY.whatsapp}`} target="_blank" rel="noreferrer" className="border border-zinc-700 hover:border-lime-500 hover:text-lime-500 px-7 py-4 font-bold rounded-md inline-flex items-center gap-2"><Phone className="h-4 w-4" />Call Now</a>
            <Link to="/become-a-dealer" className="border border-zinc-700 hover:border-lime-500 hover:text-lime-500 px-7 py-4 font-bold rounded-md inline-flex items-center gap-2">Become Service Partner <ArrowRight className="h-4 w-4"/></Link>
          </div>
        </div>
      </section>
    </div>
  );
}
