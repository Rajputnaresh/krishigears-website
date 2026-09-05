import Link from "next/link";
import { useParams } from "next/navigation";
import { Check, ArrowRight, MapPin, Wrench, Package, Phone } from "lucide-react";
import { CATEGORIES, COMPANY, HERO_BG } from "@/data/catalog";
import EnquiryDialog from "@/components/EnquiryDialog";
import { trackWhatsAppClick } from "@/lib/analytics";
import { CITY_STATE_MAP } from "@/data/cityStateMap";
import { pickRandom } from "@/lib/random";

const ALL_SPARE_CATEGORIES = [
  { name: "Engine Core Components", icon: "⚙️", items: ["Piston & Ring Set (RK-170F/RK-177F)", "Cylinder Block Assembly", "Crankshaft with Bearings", "Camshaft Assembly", "Spark Plug (NGK BP6ES)", "Carburetor Assembly", "Fuel Injector Nozzle (Diesel)", "Flywheel", "Ignition Coil / Magneto"] },
  { name: "Transmission & Drivetrain", icon: "🔗", items: ["Cast Iron Gearbox Housing", "Clutch Shoe Friction Pads (Heavy Duty)", "V-Belt (B-Section)", "Drive Shaft (Hexagonal)", "Tensioner Pulley Set", "Bearing Set (6203/6205/6206)", "Chain & Sprocket (Baby Weeder)", "Clutch Cable Assembly"] },
  { name: "Blades & Tillage Attachments", icon: "🔪", items: ["Dry Land Blades (L-Type, High Carbon)", "Wetland Paddy Blades (C-Type)", "Serrated Deep Tilling Blades", "Rotary Tiller Hub", "Blade Carrier Plate", "Skid Plate / Depth Bar", "Ridger Attachment", "Ditcher Plow"] },
  { name: "Consumables & Maintenance", icon: "🛢️", items: ["Air Filter Element (Foam/Paper)", "Fuel Filter (Inline/Tank)", "Engine Oil Filter", "Recoil Starter Rope (Nylon)", "Recoil Spring", "SAE 90 Gear Oil (1L)", "20W40 Engine Oil", "Carburetor Cleaning Kit"] },
  { name: "Controls & Handles", icon: "🕹️", items: ["Handlebar Assembly (Adjustable)", "Throttle Lever (Metal)", "Clutch Lever", "Gear Shift Lever", "Reverse Gear Lever", "Throttle Cable", "Clutch Cable", "Anti-Vibration Rubber Grips"] },
  { name: "Wheels & Chassis", icon: "🚜", items: ["Rubber Wheels (4.00-8 Chevron)", "Iron Paddy Wheels (Cage)", "Transport Wheels", "Wheel Hub with Pins", "Axle Assembly", "Engine Mounting Plate", "Bumper Guard", "Fender / Mudguard (Left/Right)"] },
];

const SERVICE_OFFERINGS = [
  "OEM guaranteed fitment for KrishiGears models",
  "Next-day dispatch for critical breakdown parts",
  "Wholesale pricing for local dealers & mechanics",
  "Genuine RK-series engine components",
  "Field-tested high carbon rotary blades",
  "Direct factory-to-farm supply chain",
];

export default function SpareParts() {
  const { slug } = useParams();
  
  // URL format: power-weeder-spare-parts-in-{city_slug}
  const citySlugMatch = slug?.match(/power-weeder-spare-parts-in-(.+)/);
  const citySlug = citySlugMatch ? citySlugMatch[1] : slug;

  const geo = CITY_STATE_MAP[citySlug] || {};
  const location = geo.city || slug?.split("-").slice(0, -2).join(" ") || "India";
  const state = geo.state || "";
  
  // Deterministic random selection to prevent duplicate content across 5700+ pages
  const randomCategories = pickRandom(ALL_SPARE_CATEGORIES, 4, location + "parts");
  
  // Randomize the items within the categories
  const dynamicCategories = randomCategories.map(cat => ({
    ...cat,
    items: pickRandom(cat.items, 5, location + cat.name)
  }));

  const localSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": `KrishiGears Spare Parts Supplier in ${location}`,
    "description": `Genuine power weeder spare parts, blade sets, engine parts, transmission components and accessories for ${location}. Direct supply to dealers, distributors and farmers.`,
    "url": `https://krishigears.com/spare-parts/${slug}`,
    "telephone": "+91-60060-78815",
    "priceRange": "₹₹",
    "address": { "@type": "PostalAddress", "addressLocality": location, "addressCountry": "IN" },
  };

  const isMarathi = state === "Maharashtra";
  const vernacularHeadline = isMarathi
    ? `${location} मध्ये पॉवर वीडर सुटे भाग — घाऊक पुरवठादार`
    : `${location} में पावर वीडर स्पेयर पार्ट्स — थोक विक्रेता और डीलर`;

  return (
    <div data-testid="spare-parts-page">
      <script type="application/ld+json">{JSON.stringify(localSchema)}</script>

      {location && state && (
        <div className="max-w-[1200px] mx-auto px-6 pt-10 pb-4 flex flex-wrap items-center gap-2 text-xs text-zinc-500 relative z-10">
          <Link href="/" className="hover:text-lime-500 transition">Home</Link>
          <span>/</span>
          <Link href="/dealer-network" className="hover:text-lime-500 transition">Dealers</Link>
          <span>/</span>
          <Link href={`/dealer/${state.toLowerCase().replace(/\s+/g, "-")}`} className="hover:text-lime-500 transition">{state}</Link>
          <span>/</span>
          <span className="text-zinc-900 dark:text-zinc-300">{location} Spare Parts</span>
        </div>
      )}

      <section className="relative kg-section overflow-hidden">
        <div className="absolute inset-0">
          <img src={HERO_BG} alt="" className="w-full h-full object-cover opacity-30" />
          <div className="absolute inset-0 bg-gradient-to-r from-white dark:from-black via-white/70 dark:via-black/70 to-transparent"></div>
        </div>
        <div className="max-w-[1200px] mx-auto relative">
          <div className="kg-eyebrow">{COMPANY.name} · Spares & Attachments</div>
          <h1 className="kg-h1 mt-4 text-balance max-w-3xl">
            Power Weeder Spare Parts in {location} — OEM Wholesale Supply
          </h1>
          <h2 className="text-xl text-zinc-600 dark:text-zinc-400 mt-2 font-normal">
            {vernacularHeadline}
          </h2>
          <p className="text-zinc-700 dark:text-zinc-300 mt-6 max-w-2xl leading-relaxed text-lg">
            Direct supply of genuine high-carbon blades, RK-series engine components, gearboxes, and
            maintenance kits for power weeders in {location}. We support local mechanics, dealers, and
            farmers with guaranteed OEM fitment.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <EnquiryDialog product={`Spare Parts Bulk Order in ${location}`} trigger={
              <button data-testid="parts-enquiry" className="bg-lime-500 hover:bg-lime-400 text-black dark:text-black font-bold px-7 py-4 rounded-md">Order Spare Parts</button>
            } />
            <a href={`https://wa.me/${COMPANY.whatsapp}?text=${encodeURIComponent(`Hi, I need power weeder spare parts in ${location}. Looking for: `)}`} target="_blank" rel="noreferrer" onClick={() => trackWhatsAppClick("spare_parts", slug)} className="border border-zinc-300 dark:border-zinc-700 hover:border-lime-500 hover:text-lime-500 px-7 py-4 font-bold rounded-md">WhatsApp Parts Counter</a>
          </div>
        </div>
      </section>

      <section className="kg-section bg-white dark:bg-zinc-950">
        <div className="max-w-[1200px] mx-auto">
          <div className="grid lg:grid-cols-12 gap-12">
            <div className="lg:col-span-4">
              <h2 className="kg-h2 mb-4">Available Inventory for {location}</h2>
              <p className="text-zinc-600 dark:text-zinc-400 mb-8 leading-relaxed">
                We maintain a comprehensive catalog of wear-and-tear parts and core components.
                If a specific part for your 7HP or 9HP weeder is not listed, our parts desk can source it using your machine's serial number.
              </p>
              <div className="p-6 bg-zinc-50 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-md">
                <h3 className="font-bold text-zinc-900 dark:text-white mb-4 flex items-center gap-2">
                  <Package className="h-5 w-5 text-lime-500" /> Supply Guarantees
                </h3>
                <ul className="space-y-3">
                  {SERVICE_OFFERINGS.map((offer, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-sm text-zinc-700 dark:text-zinc-300">
                      <Check className="h-4 w-4 text-lime-500 shrink-0 mt-0.5" />
                      {offer}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            
            <div className="lg:col-span-8">
              <div className="grid sm:grid-cols-2 gap-6">
                {dynamicCategories.map((cat) => (
                  <div key={cat.name} className="border border-zinc-200 dark:border-zinc-800 bg-black rounded-md overflow-hidden hover:border-zinc-600 transition-colors">
                    <div className="bg-zinc-50 dark:bg-zinc-900 px-5 py-3 border-b border-zinc-200 dark:border-zinc-800 font-bold text-zinc-900 dark:text-white flex items-center gap-2">
                      <span>{cat.icon}</span> {cat.name}
                    </div>
                    <ul className="p-5 space-y-2">
                      {cat.items.map((item) => (
                        <li key={item} className="text-sm text-zinc-600 dark:text-zinc-400 flex items-start gap-2">
                          <span className="text-zinc-700 shrink-0">▪</span> {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Internal Silo Links */}
      <section className="kg-section bg-zinc-50 dark:bg-surface-darker border-t border-zinc-200 dark:border-zinc-800">
        <div className="max-w-[1200px] mx-auto text-center">
          <h2 className="kg-h3 mb-6 text-zinc-900 dark:text-zinc-100">Other {location} Resources</h2>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href={`/seo/power-weeders-supplier-${citySlug}`} className="px-6 py-3 border border-zinc-200 dark:border-zinc-800 rounded-md hover:border-lime-500 hover:text-lime-500 transition text-sm">
              Power Weeder Dealers in {location}
            </Link>
            <Link href={`/service/power-weeder-repair-service-in-${citySlug}`} className="px-6 py-3 border border-zinc-200 dark:border-zinc-800 rounded-md hover:border-lime-500 hover:text-lime-500 transition text-sm">
              Power Weeder Repair Service in {location}
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
