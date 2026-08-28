import { Link, useParams } from "react-router-dom";
import { Check, AlertTriangle, Wrench, Phone, ArrowRight } from "lucide-react";
import { COMPANY, HERO_BG } from "@/data/catalog";
import EnquiryDialog from "@/components/EnquiryDialog";
import { trackWhatsAppClick } from "@/lib/analytics";
import { CITY_STATE_MAP } from "@/data/cityStateMap";
import { pickRandom } from "@/lib/random";

const ALL_ENGINE_PROBLEMS = [
  { issue: "RK-170F 7HP Petrol won't start in morning", causes: ["Choke not engaged", "Fuel valve closed", "Carburetor bowl dry", "Spark plug carbon fouled"] },
  { issue: "RK-173F 5.5HP Diesel starting trouble (Cold)", causes: ["Decompression lever not used", "Air trapped in diesel line", "Fuel filter clogged with sludge", "Low compression"] },
  { issue: "RK-ICD-UP186-SH 10HP engine stalls under load", causes: ["Fuel delivery restricted", "Air filter soaked in oil/dust", "Valve clearance too tight", "Governor spring weak"] },
  { issue: "Black smoke from exhaust (Diesel models)", causes: ["Overloading in heavy wet soil", "Air filter blocked", "Fuel injector nozzle dripping", "Poor diesel quality"] },
  { issue: "White smoke / Blue smoke (Petrol models)", causes: ["Oil level too high", "Piston rings worn out", "Engine tilted too far during operation", "Head gasket failure"] },
  { issue: "Engine overheating after 30 mins", causes: ["Cooling fins blocked with mud/crop residue", "Low engine oil", "Running at max RPM continuously without load", "Lean fuel mixture"] },
  { issue: "Engine hunting or surging RPM", causes: ["Carburetor pilot jet clogged", "Governor linkage sticking", "Water in fuel tank", "Air leak at intake manifold"] },
  { issue: "Recoil starter rope stuck or broken", causes: ["Starter spring snapped", "Pawl mechanism jammed with dirt", "Pulley cracked", "Rope frayed due to angular pulling"] }
];

const ALL_MECHANICAL_PROBLEMS = [
  { issue: "Blades won't rotate in hard soil", causes: ["V-belt (B-section) slipping", "Clutch shoe friction pads worn (<2mm)", "Drive key sheared off inside gearbox", "Tensioner pulley spring weak"] },
  { issue: "Excessive vibration through handles", causes: ["Rotary blades unbalanced or bent", "Engine mount bolts loose", "Missing anti-vibration rubber pads", "Bent hexagonal drive shaft"] },
  { issue: "Gear shifting is very hard", causes: ["Low API GL-4 gear oil level", "Shift cable stretched or rusted", "Shift fork bent", "Gear dog wear from shifting without clutch"] },
  { issue: "Machine jumps out of gear", causes: ["Detent ball/spring worn out", "Shift cable misadjusted", "Internal gearbox wear", "Operator hitting shift lever"] },
  { issue: "Oil leaking from gearbox shaft", causes: ["Oil seal damaged by wire/twine wrapped on shaft", "Overfilled gearbox", "Breather plug clogged", "Bearing failure causing shaft play"] },
  { issue: "Clutch lever feels very loose", causes: ["Clutch cable snapped", "Clutch spring broken", "Cable adjuster completely screwed in", "Clutch arm stripped"] }
];

const ALL_FIELD_PROBLEMS = [
  { issue: "Machine digging too deep (Sinking)", causes: ["Depth drag bar set too low", "Using rubber wheels instead of paddy wheels in wet mud", "Operator holding handles too high", "Soil moisture too high for rotary"] },
  { issue: "Machine running away (Not digging)", causes: ["Depth drag bar set too high", "Blades installed backwards", "Soil too dry/hard (needs ridger first)", "Forward gear speed too fast"] },
  { issue: "Weeds wrapping around blade shaft", causes: ["Tall grass >1 foot (needs slashing first)", "Side disc missing", "Blades dull", "RPM too low for centrifugal clearing"] },
  { issue: "Pulling strongly to one side", causes: ["Uneven tire pressure", "One side blades missing/broken", "Bent depth bar", "Tilling on a steep slope without crab steering"] },
  { issue: "Paddy wheels getting stuck", causes: ["Clay content too high", "Fins bent", "Axle pin sheared on one side", "Wrong wheel diameter for depth"] }
];

const SERVICE_OPTIONS = [
  { name: "On-site Repair Call", desc: "KrishiGears technician visits your field in 48 hours across India", icon: "🔧" },
  { name: "Machine Pickup Service", desc: "We collect your machine from your location for workshop repair", icon: "🚛" },
  { name: "AMC — Annual Maintenance", desc: "Year-round coverage: 2 scheduled services + unlimited breakdown calls", icon: "📋" },
  { name: "Operator Training", desc: "On-field training for your workers on correct operation and daily maintenance", icon: "📖" },
  { name: "Genuine Parts Only", desc: "All replacements use OEM-spec parts, not cheap aftermarket copies", icon: "✅" },
  { name: "Warranty Support", desc: "We handle warranty claims directly with the manufacturer on your behalf", icon: "🛡️" },
];

export default function ServiceProblems() {
  const { slug } = useParams();
  
  // URL format: power-weeder-repair-service-in-{city_slug}
  const citySlugMatch = slug?.match(/power-weeder-repair-service-in-(.+)/);
  const citySlug = citySlugMatch ? citySlugMatch[1] : slug;
  
  const geo = CITY_STATE_MAP[citySlug] || {};
  const location = geo.city || slug?.split("-").slice(0, -2).join(" ") || "India";
  const state = geo.state || "";
  
  // Deterministic random selection for this city to prevent duplicate content
  const randomEngine = pickRandom(ALL_ENGINE_PROBLEMS, 4, location + "eng");
  const randomMech = pickRandom(ALL_MECHANICAL_PROBLEMS, 3, location + "mech");
  const randomField = pickRandom(ALL_FIELD_PROBLEMS, 3, location + "fld");

  const DYNAMIC_CATEGORIES = [
    { icon: "⚡", category: "Engine Problems", color: "text-red-400", problems: randomEngine },
    { icon: "🔧", category: "Mechanical Problems", color: "text-orange-400", problems: randomMech },
    { icon: "🌾", category: "Field Operation Problems", color: "text-yellow-400", problems: randomField }
  ];

  // First-class vernacular support as per DESIGN rules
  const isMarathi = state === "Maharashtra";
  const vernacularHeadline = isMarathi 
    ? `${location} मधील पॉवर वीडर समस्या आणि सर्व्हिस — तज्ञ दुरुस्ती मदत`
    : `${location} में पावर वीडर की समस्याएं और सर्विस — विशेषज्ञ मरम्मत सहायता`;

  return (
    <div data-testid="service-problems-page">
      {location && state && (
        <div className="max-w-[1200px] mx-auto px-6 pt-10 pb-4 flex flex-wrap items-center gap-2 text-xs text-zinc-500">
          <Link to="/" className="hover:text-lime-500 transition">Home</Link>
          <span>/</span>
          <Link to="/dealer-network" className="hover:text-lime-500 transition">Dealers</Link>
          <span>/</span>
          <Link to={`/dealer/${state.toLowerCase().replace(/\s+/g, "-")}`} className="hover:text-lime-500 transition">{state}</Link>
          <span>/</span>
          <span className="text-zinc-900 dark:text-zinc-300">{location} Service Center</span>
        </div>
      )}
      <section className="relative kg-section overflow-hidden">
        <div className="absolute inset-0">
          <img src={HERO_BG} alt="" className="w-full h-full object-cover opacity-30" />
          <div className="absolute inset-0 bg-gradient-to-r from-white dark:from-black via-white/70 dark:via-black/70 to-transparent"></div>
        </div>
        <div className="max-w-[1200px] mx-auto relative">
          <div className="kg-eyebrow">{COMPANY.name} · Service & Troubleshooting</div>
          <h1 className="kg-h1 mt-4 text-balance max-w-3xl">
            Power Weeder Problems & Service in {location} — Expert Repair Support
          </h1>
          <h2 className="text-xl text-zinc-600 dark:text-zinc-400 mt-2 font-normal">
            {vernacularHeadline}
          </h2>
          <p className="text-zinc-700 dark:text-zinc-300 mt-6 max-w-2xl leading-relaxed text-lg">
            Whether your power weeder won't start in {location} paddy fields, blades aren't cutting properly,
            or the engine keeps cutting out mid-session — we have the service team and spare parts to get you
            back working in under 48 hours.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <EnquiryDialog product={`Power Weeder Service in ${location}`} trigger={
              <button data-testid="service-enquiry" className="bg-lime-500 hover:bg-lime-400 text-zinc-50 dark:text-black font-bold px-7 py-4 rounded-md">Book Service Call</button>
            } />
            <a href={`https://wa.me/${COMPANY.whatsapp}?text=${encodeURIComponent(`Hi, I have a power weeder problem in ${location}. Machine details: `)}`} target="_blank" rel="noreferrer" onClick={() => trackWhatsAppClick("service_problems", slug)} className="border border-zinc-300 dark:border-zinc-700 hover:border-lime-500 hover:text-lime-500 px-7 py-4 font-bold rounded-md">WhatsApp Service Desk</a>
            <Link to="/warranty-and-support" data-testid="warranty-link" className="border border-zinc-300 dark:border-zinc-700 hover:border-lime-500 hover:text-lime-500 px-7 py-4 font-bold rounded-md">Warranty Info</Link>
          </div>
        </div>
      </section>

      <section className="kg-section bg-white dark:bg-zinc-950">
        <div className="max-w-[1200px] mx-auto">
          <h2 className="kg-h2 text-center mb-12">Common Power Weeder Problems in {location}</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {DYNAMIC_CATEGORIES.map((cat) => (
              <div key={cat.category} className="border border-zinc-200 dark:border-zinc-800 rounded-md overflow-hidden">
                <div className={`bg-zinc-50 dark:bg-zinc-900 px-6 py-4 font-bold text-xl flex items-center gap-3 ${cat.color}`}>
                  <span className="text-2xl">{cat.icon}</span> {cat.category}
                </div>
                <div className="divide-y divide-zinc-800">
                  {cat.problems.map((prob) => (
                    <div key={prob.issue} className="p-5">
                      <div className="flex items-start gap-3 mb-3">
                        <AlertTriangle className="h-5 w-5 text-yellow-500 shrink-0 mt-0.5" />
                        <h4 className="font-bold text-zinc-800 dark:text-zinc-200">{prob.issue}</h4>
                      </div>
                      <ul className="ml-8 space-y-1.5 text-sm text-zinc-600 dark:text-zinc-400">
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
          <div className="mt-12 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {SERVICE_OPTIONS.map((opt) => (
              <div key={opt.name} className="p-6 bg-zinc-50 dark:bg-zinc-900 rounded-md border border-zinc-200 dark:border-zinc-800">
                <div className="text-3xl mb-4">{opt.icon}</div>
                <h4 className="font-bold text-xl text-zinc-900 dark:text-white mb-2">{opt.name}</h4>
                <p className="text-zinc-600 dark:text-zinc-400">{opt.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Internal Silo Links */}
      <section className="kg-section bg-zinc-50 dark:bg-[#080808] border-t border-zinc-200 dark:border-zinc-800">
        <div className="max-w-[1200px] mx-auto text-center">
          <h2 className="kg-h3 mb-6 text-zinc-900 dark:text-zinc-100">Other {location} Resources</h2>
          <div className="flex flex-wrap justify-center gap-4">
            <Link to={`/seo/power-weeders-supplier-${citySlug}`} className="px-6 py-3 border border-zinc-200 dark:border-zinc-800 rounded-md hover:border-lime-500 hover:text-lime-500 transition text-sm">
              Power Weeder Dealers in {location}
            </Link>
            <Link to={`/spare-parts/power-weeder-spare-parts-in-${citySlug}`} className="px-6 py-3 border border-zinc-200 dark:border-zinc-800 rounded-md hover:border-lime-500 hover:text-lime-500 transition text-sm">
              Power Weeder Spare Parts in {location}
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
