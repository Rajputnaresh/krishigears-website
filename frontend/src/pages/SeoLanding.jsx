import { Link, useParams, Navigate } from "react-router-dom";
import { Check, ArrowRight, MapPin } from "lucide-react";
import { CATEGORIES, SEO_PAGES, COMPANY, HERO_BG, INDIA_MAP } from "@/data/catalog";
import EnquiryDialog from "@/components/EnquiryDialog";
import { trackWhatsAppClick } from "@/lib/analytics";
import { CITY_STATE_MAP } from "@/data/cityStateMap";

export default function SeoLanding() {
  const { slug } = useParams();
  
  // First check if it's a hardcoded national SEO page
  let page = SEO_PAGES.find(p => p.slug === slug);
  
  if (!page) {
    // Dynamically parse city-based geo SEO pages to save 5MB JS bundle size
    let match = slug?.match(/power-weeders-supplier-(.+)/);
    let isWeeder = true;
    let crop = null;
    let citySlug = null;
    
    if (match) {
      citySlug = match[1];
    } else {
      match = slug?.match(/power-weeder-spare-parts-supplier-(.+)/);
      if (match) {
        citySlug = match[1];
        isWeeder = false;
      } else {
        match = slug?.match(/power-weeder-(.+?)-(.+)/);
        if (match) {
          crop = match[1].charAt(0).toUpperCase() + match[1].slice(1).replace("-", " ");
          citySlug = match[2];
        }
      }
    }
    
    if (citySlug) {
      const geo = CITY_STATE_MAP[citySlug] || {};
      const city = geo.city || citySlug.split("-").map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(" ");
      const category = isWeeder ? "power-weeders" : "power-weeder-spare-parts";
      
      const hindiTitle = isWeeder
        ? `${city} में पावर वीडर डीलर और थोक सप्लाई`
        : `${city} में पावर वीडर स्पेयर पार्ट्स सप्लाई`;

      page = {
        slug,
        title: crop 
          ? `Best Power Weeder for ${crop} Farming in ${city}`
          : `${isWeeder ? "Power Weeder" : "Power Weeder Spare Parts"} Dealer & Wholesale Supply in ${city}`,
        category,
        city,
        state: geo.state || "",
        crop,
        hindiTitle: crop ? `${city} में ${crop} खेती के लिए सबसे अच्छा पावर वीडर` : hindiTitle
      };
    }
  }

  if (!page) return <Navigate to="/" replace />;

  const category = page.category ? CATEGORIES.find((c) => c.slug === page.category) : null;
  const supplyFocus = category?.name || "Agricultural Machinery";
  const partnerTracks = [
    "Dealer territory onboarding",
    "Distributor and OEM partnerships",
    "FPO and cooperative supply",
    "Institutional and government procurement",
    "GST invoicing and documentation support",
    "Warranty, service and spare-part coordination",
  ];

  const localSchema = page.city ? {
    "@context": "https://schema.org",
    "@type": "WholesaleStore",
    "name": `KrishiGears ${supplyFocus} Supply in ${page.city}`,
    "description": `B2B ${supplyFocus.toLowerCase()} supplier serving dealers and institutions in ${page.city}, ${page.state}.`,
    "url": `https://krishigears.com/seo/${page.slug}`,
    "telephone": "+91-60060-78815",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": page.city,
      "addressRegion": page.state,
      "addressCountry": "IN"
    }
  } : null;

  return (
    <div data-testid="seo-landing" className="min-h-screen">
      {localSchema && (
        <script type="application/ld+json">
          {JSON.stringify(localSchema)}
        </script>
      )}

      {page.city && page.state && (
        <div className="max-w-[1200px] mx-auto px-6 pt-10 pb-4 flex flex-wrap items-center gap-2 text-xs text-zinc-500">
          <Link to="/" className="hover:text-lime-500 transition">Home</Link>
          <span>/</span>
          <Link to="/dealer-network" className="hover:text-lime-500 transition">Dealers</Link>
          <span>/</span>
          <Link to={`/dealer/${page.state.toLowerCase().replace(/\s+/g, "-")}`} className="hover:text-lime-500 transition">{page.state}</Link>
          <span>/</span>
          <span className="text-zinc-900 dark:text-zinc-300">{page.city} Power Weeders</span>
        </div>
      )}
      
      {/* Hero */}
      <section className="relative kg-section overflow-hidden">
        <div className="absolute inset-0">
          <img src={category?.image || HERO_BG} alt="" className="w-full h-full object-cover opacity-30" />
          <div className="absolute inset-0 bg-gradient-to-r from-white dark:from-black via-white/70 dark:via-black/70 to-transparent"></div>
        </div>
        <div className="max-w-[1200px] mx-auto relative">
          <div className="kg-eyebrow">{COMPANY.name} · B2B Supply Network</div>
          <h1 className="kg-h1 mt-4 text-balance max-w-3xl">{page.title}</h1>
          {page.hindiTitle && (
            <h2 className="text-xl text-zinc-600 dark:text-zinc-400 mt-2 font-normal">{page.hindiTitle}</h2>
          )}
          <p className="text-zinc-700 dark:text-zinc-300 mt-6 max-w-2xl leading-relaxed text-lg">
            KrishiGears supports dealer networks, distributor partners, OEM programs, FPOs, contractors and institutional procurement teams {page.city ? `in ${page.city}, ${page.state}` : "across India"} with documented supply, service coordination and direct dispatch.
          </p>
          {page.crop && (
            <p className="text-zinc-600 dark:text-zinc-400 mt-3 max-w-2xl leading-relaxed">
              Specifically optimized for <span className="text-lime-500 font-semibold">{page.crop}</span> cultivation — our dealers recommend the right HP, blade type and attachment configuration for maximum inter-row weeding efficiency.
            </p>
          )}
          <div className="mt-8 flex flex-wrap gap-3">
            <EnquiryDialog product={category?.name || page.title} trigger={
              <button data-testid="seo-enquiry-btn" className="bg-lime-500 hover:bg-lime-400 text-black dark:text-black font-bold px-7 py-4 rounded-md">Bulk / Dealer Inquiry</button>
            } />
            <Link to="/become-a-dealer" data-testid="seo-dealer-link" className="border border-zinc-300 dark:border-zinc-700 hover:border-lime-500 hover:text-lime-500 px-7 py-4 font-bold rounded-md">Become Dealer</Link>
            <Link to="/bulk-order" data-testid="seo-institutional-link" className="border border-zinc-300 dark:border-zinc-700 hover:border-lime-500 hover:text-lime-500 px-7 py-4 font-bold rounded-md">Institutional Supply</Link>
            <a href={`https://wa.me/${COMPANY.whatsapp}`} target="_blank" rel="noreferrer" onClick={() => trackWhatsAppClick("seo_landing", slug)} data-testid="seo-whatsapp-btn" className="border border-zinc-300 dark:border-zinc-700 hover:border-lime-500 hover:text-lime-500 px-7 py-4 font-bold rounded-md">WhatsApp Supply Desk</a>
          </div>
        </div>
      </section>

      {/* Why KrishiGears */}
      <section className="kg-section bg-surface-darker border-y border-zinc-100 dark:border-zinc-900">
        <div className="max-w-[1200px] mx-auto">
          <div className="kg-eyebrow">Partner Programs</div>
          <h2 className="kg-h2 mt-3 max-w-3xl">{supplyFocus} supply built for <span className="text-lime-500">B2B channels.</span></h2>
          {page.hindiTitle && (
            <h3 className="text-lg text-zinc-600 dark:text-zinc-400 mt-2 font-normal">KrishiGears B2B चैनलों के लिए {supplyFocus} सप्लाई — डीलर, FPO और संस्थागत खरीद</h3>
          )}
          <div className="mt-10 grid md:grid-cols-2 gap-4">
            {partnerTracks.map((b) => (
              <div key={b} className="flex items-start gap-3 text-zinc-700 dark:text-zinc-300">
                <Check className="h-5 w-5 text-lime-500 mt-0.5 shrink-0" />{b}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Internal Silo Links */}
      {page.city && (
        <section className="kg-section bg-zinc-50 dark:bg-surface-darker border-t border-zinc-200 dark:border-zinc-800">
          <div className="max-w-[1200px] mx-auto text-center">
            <h2 className="kg-h3 mb-6 text-zinc-900 dark:text-zinc-100">Other {page.city} Services</h2>
            <div className="flex flex-wrap justify-center gap-4">
              <Link to={`/service/power-weeder-repair-service-in-${page.city.toLowerCase().replace(/\s+/g, "-")}`} className="px-6 py-3 border border-zinc-200 dark:border-zinc-800 rounded-md hover:border-lime-500 hover:text-lime-500 transition text-sm">
                Power Weeder Repair Service in {page.city}
              </Link>
              <Link to={`/spare-parts/power-weeder-spare-parts-in-${page.city.toLowerCase().replace(/\s+/g, "-")}`} className="px-6 py-3 border border-zinc-200 dark:border-zinc-800 rounded-md hover:border-lime-500 hover:text-lime-500 transition text-sm">
                Power Weeder Spare Parts in {page.city}
              </Link>
            </div>
          </div>
        </section>
      )}

      {/* Coverage */}
      <section className="kg-section relative overflow-hidden">
        <div className="absolute inset-0 opacity-20" style={{ backgroundImage: `url(${INDIA_MAP})`, backgroundSize: "cover" }}/>
        <div className="max-w-[1200px] mx-auto relative">
          <div className="kg-eyebrow">Supply Coverage</div>
          <h2 className="kg-h2 mt-3">Dealer and institutional support <span className="text-lime-500">across India.</span></h2>
          {page.city && (
            <h3 className="text-lg text-zinc-600 dark:text-zinc-400 mt-2 font-normal">पूरे भारत में डीलर और संस्थागत सहायता</h3>
          )}
          <div className="mt-8 flex flex-wrap gap-2">
            {["Maharashtra","Karnataka","Tamil Nadu","Andhra Pradesh","Telangana","Kerala","Gujarat","Madhya Pradesh","Uttar Pradesh","Punjab","Haryana","Rajasthan","West Bengal","Bihar","Odisha","Assam","Chhattisgarh"].map((s) => (
              <span key={s} className="text-sm px-4 py-2 border border-zinc-200 dark:border-zinc-800 text-zinc-700 dark:text-zinc-300 hover:border-lime-500 hover:text-lime-500 transition cursor-default inline-flex items-center gap-1.5">
                <MapPin className="h-3 w-3"/>{s}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="kg-section bg-surface-darker border-y border-zinc-100 dark:border-zinc-900">
        <div className="max-w-[1100px] mx-auto text-center">
          <h2 className="kg-h2 max-w-2xl mx-auto text-balance">Build a B2B supply plan for <span className="text-lime-500">{supplyFocus.toLowerCase()}</span>.</h2>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            {category && (
              <Link to={`/products/category/${category.slug}`} data-testid="seo-view-products" className="border border-zinc-300 dark:border-zinc-700 hover:border-lime-500 hover:text-lime-500 px-7 py-4 font-bold rounded-md inline-flex items-center gap-2">View Supply Category <ArrowRight className="h-4 w-4"/></Link>
            )}
            <Link to="/bulk-order" data-testid="seo-bulk-link" className="bg-lime-500 hover:bg-lime-400 text-black dark:text-black font-bold px-7 py-4 rounded-md">Bulk Order Inquiry</Link>
            <Link to="/dealer-network" data-testid="seo-network-link" className="border border-zinc-300 dark:border-zinc-700 hover:border-lime-500 hover:text-lime-500 px-7 py-4 font-bold rounded-md">Dealer Network</Link>
          </div>
        </div>
      </section>
    </div>
  );
}
