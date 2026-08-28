import { Link, useParams, Navigate } from "react-router-dom";
import { Check, ArrowRight, MapPin, Wrench, Package, Phone } from "lucide-react";
import { CATEGORIES, COMPANY, HERO_BG } from "@/data/catalog";
import EnquiryDialog from "@/components/EnquiryDialog";
import { trackWhatsAppClick } from "@/lib/analytics";

// Common spare parts catalog (categorical inventory, applies across India)
const SPARE_CATEGORIES = [
  { name: "Engine Parts", items: ["Piston kit", "Cylinder block", "Crankshaft", "Cam shaft", "Spark plug", "Air filter", "Fuel filter", "Oil filter", "Carburetor", "Recoil starter assembly", "Flywheel", "Ignition coil", "Throttle cable"] },
  { name: "Blade & Cutting", items: ["Dry land blades (L-type)", "Paddy blades (C-type)", "Serrrated blades", "Rotary tiller blades", "Blade hub", "Blade carrier", "Skid plate", "Depth adjustment lever"] },
  { name: "Transmission & Drivetrain", items: ["Gear box assembly", "Clutch shoes", "Belt (V-belt)", "Pulley set", "Drive shaft", "Bearing set (6203/6205/6206)", "Chain & sprocket", "Clutch cable"] },
  { name: "Handlebar & Controls", items: ["Handlebar assembly", "Throttle lever", "Clutch lever", "Gear shift lever", "Reverse lever", "Throttle cable", "Clutch cable", "Handle grips"] },
  { name: "Wheels & Tyres", items: ["Rubber wheels (4.00-8)", "Paddy wheels", "Transport wheels", "Wheel hub", "Axle assembly", "Tyre tube"] },
  { name: "Frame & Body", items: ["Main frame", "Engine mount", "Bumper", "Hood/cover", "Side cover", "Foot rest"] },
];

// Common problems & fixes (informational content)
const COMMON_PROBLEMS = [
  { issue: "Power weeder not starting", fix: "Check fuel level, spark plug condition, air filter blockage, and carburetor cleanliness. Ensure fuel mixture ratio (25:1 for 2-stroke, pure diesel for 4-stroke)." },
  { issue: "Engine cuts off after a few minutes", fix: "Likely a clogged fuel filter, carburetor float issue, or overheating. Inspect fuel line for air leaks and clean the carburetor jets." },
  { issue: "Blades not rotating", fix: "Check belt tension, clutch shoes wear, and drive shaft connection. Replace if clutch shoes are below 2mm thickness." },
  { issue: "Excessive vibration during operation", fix: "Inspect blade balance, bent blade carrier, loose engine mount bolts, or worn handlebar rubber dampers." },
  { issue: "Smoke from engine (white/blue/black)", fix: "White = coolant issue or burning oil; Blue = oil-fuel mix wrong; Black = rich fuel mixture. Adjust carburetor or replace seals." },
  { issue: "Loss of power in wet/paddy field", fix: "Use paddy wheels instead of rubber wheels. Check if water ingress in air filter. Reduce working depth." },
  { issue: "Belt slipping under load", fix: "Tension the V-belt via the idler pulley, or replace if stretched/glazed." },
  { issue: "Gear shifting problems", fix: "Inspect shift fork, shift cable, and gear box oil level. Top up with SAE 90 gear oil if low." },
];

// Service offerings at location
const SERVICE_OFFERINGS = [
  "On-site repair and breakdown support",
  "Pickup-and-drop for warranty machines",
  "Annual Maintenance Contract (AMC) for institutional buyers",
  "Field demonstration and operator training",
  "Spare-parts stocking at partner locations",
  "Toll-free technical helpline (Hindi, English, regional)",
];

export default function SpareParts() {
  const { slug } = useParams();
  // Parse slug: <location>-spare-parts or <location>-power-weeder-spare-parts
  const parts = slug?.split("-") || [];
  const location = parts.slice(0, parts.length >= 4 ? -2 : -1).join(" ");
  const stateGuess = parts.length >= 4 ? parts[parts.length - 1] : "";

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

  return (
    <div data-testid="spare-parts-page">
      <script type="application/ld+json">{JSON.stringify(localSchema)}</script>

      <section className="relative kg-section overflow-hidden">
        <div className="absolute inset-0">
          <img src={HERO_BG} alt="" className="w-full h-full object-cover opacity-30" />
          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/70 to-transparent"></div>
        </div>
        <div className="max-w-[1200px] mx-auto relative">
          <div className="kg-eyebrow">{COMPANY.name} · Spare Parts Supply</div>
          <h1 className="kg-h1 mt-4 text-balance max-w-3xl">
            Power Weeder Spare Parts in {location} — Genuine OEM & Aftermarket
          </h1>
          <h2 className="text-xl text-zinc-400 mt-2 font-normal">
            {location} में पावर वीडर के असली स्पेयर पार्ट्स — ब्लेड, इंजन पार्ट्स, ट्रांसमिशन
          </h2>
          <p className="text-zinc-300 mt-6 max-w-2xl leading-relaxed text-lg">
            Genuine spare parts for all major power weeder brands in {location}. Blade sets, engine components,
            transmission parts, filters and accessories — stocked locally and dispatched across {location} district
            with COD and prepaid options for dealers and farmers.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <EnquiryDialog product="Power Weeder Spare Parts" trigger={
              <button data-testid="spare-enquiry" className="bg-lime-500 hover:bg-lime-400 text-black font-bold px-7 py-4 rounded-md">Request Spare Parts Quote</button>
            } />
            <a href={`https://wa.me/${COMPANY.whatsapp}`} target="_blank" rel="noreferrer" onClick={() => trackWhatsAppClick("spare_parts", slug)} data-testid="spare-whatsapp" className="border border-zinc-700 hover:border-lime-500 hover:text-lime-500 px-7 py-4 font-bold rounded-md">WhatsApp Spare Parts Desk</a>
          </div>
        </div>
      </section>

      <section className="kg-section bg-[#080808] border-y border-zinc-900">
        <div className="max-w-[1200px] mx-auto">
          <div className="kg-eyebrow">Parts Catalog</div>
          <h2 className="kg-h2 mt-3">Spare part categories we supply in {location}.</h2>
          <h3 className="text-lg text-zinc-400 mt-2 font-normal">{location} में हम जो स्पेयर पार्ट्स की आपूर्ति करते हैं</h3>
          <div className="mt-10 grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {SPARE_CATEGORIES.map((cat) => (
              <div key={cat.name} className="border border-zinc-800 p-6 rounded-md hover:border-lime-500 transition">
                <div className="flex items-center gap-2 mb-3">
                  <Package className="h-5 w-5 text-lime-500" />
                  <h3 className="font-bold text-lg">{cat.name}</h3>
                </div>
                <ul className="space-y-1.5 text-sm text-zinc-400">
                  {cat.items.map((item) => <li key={item} className="flex items-start gap-2"><span className="text-lime-500">•</span>{item}</li>)}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="kg-section">
        <div className="max-w-[1200px] mx-auto">
          <div className="kg-eyebrow">Service Support</div>
          <h2 className="kg-h2 mt-3">Beyond parts: full service in {location}.</h2>
          <h3 className="text-lg text-zinc-400 mt-2 font-normal">{location} में हमारी सेवा — सिर्फ पार्ट्स नहीं, पूरा सपोर्ट</h3>
          <div className="mt-10 grid md:grid-cols-2 gap-4">
            {SERVICE_OFFERINGS.map((s) => (
              <div key={s} className="flex items-start gap-3 text-zinc-300">
                <Check className="h-5 w-5 text-lime-500 mt-0.5 shrink-0" />{s}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="kg-section bg-[#080808] border-y border-zinc-900">
        <div className="max-w-[1100px] mx-auto text-center">
          <h2 className="kg-h2 max-w-2xl mx-auto text-balance">Need a specific part not listed?</h2>
          <p className="text-zinc-400 mt-4 max-w-2xl mx-auto">
            Send the model name and part photo on WhatsApp. We source hard-to-find components within 3-5 working days.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <a href={`https://wa.me/${COMPANY.whatsapp}`} target="_blank" rel="noreferrer" onClick={() => trackWhatsAppClick("spare_parts_custom", slug)} className="bg-lime-500 hover:bg-lime-400 text-black font-bold px-7 py-4 rounded-md inline-flex items-center gap-2"><Phone className="h-4 w-4" />WhatsApp Part Inquiry</a>
            <Link to="/contact" className="border border-zinc-700 hover:border-lime-500 hover:text-lime-500 px-7 py-4 font-bold rounded-md">Contact Form</Link>
          </div>
        </div>
      </section>
    </div>
  );
}
