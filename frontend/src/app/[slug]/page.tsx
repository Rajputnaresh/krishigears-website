import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import locationsData from '@/data/locations.json';
import { STATE_SUBSIDIES, CROP_GUIDES, DEFAULT_CROP_GUIDE, DEFAULT_SUBSIDY } from '@/data/enrichment';
import { COMPANY } from '@/data/catalog';
import Link from 'next/link';
import { 
  Tractor, Wrench, Scissors, Drill, ShieldCheck, MapPin, 
  Phone, ArrowRight, CheckCircle2, ChevronRight, Truck, FileText 
} from 'lucide-react';

// Define the valid categories
const CATEGORIES: Record<string, { name: string; singular: string; icon: any; desc: string }> = {
  'power-weeders': {
    name: 'Power Weeders',
    singular: 'Power Weeder',
    icon: Tractor,
    desc: 'Heavy-duty 7HP & 9HP petrol/diesel intercultivators engineered for inter-row weeding and deep rotary soil aeration.'
  },
  'power-weeder-spare-parts': {
    name: 'Power Weeder Spare Parts',
    singular: 'Power Weeder Spare Part',
    icon: Wrench,
    desc: 'OEM fitment-tested carburetors, recoil starters, cultivator blades, clutch cables, and gearbox oil seals.'
  },
  'brush-cutters': {
    name: 'Brush Cutters',
    singular: 'Brush Cutter',
    icon: Scissors,
    desc: 'High-RPM 2-stroke & 4-stroke crop harvesters with paddy crop collector attachments and 80T carbide blades.'
  },
  'earth-augers': {
    name: 'Earth Augers',
    singular: 'Earth Auger',
    icon: Drill,
    desc: 'Heavy-reduction torque post hole diggers for horticulture plantations, solar panel piling, and farm fencing.'
  }
};

type DistrictData = {
  state: string;
  key_crops: string[];
  soil_type: string;
  farming_profile: string;
  major_district: boolean;
};

const locations = locationsData as Record<string, DistrictData>;

// Generate static params for ISR
export async function generateStaticParams() {
  const params: { slug: string }[] = [];
  
  Object.entries(locations).forEach(([locationName, data]) => {
    if (data.major_district) {
      const locationSlug = locationName.toLowerCase().replace(/ /g, '-').replace(/[()]/g, '');
      Object.keys(CATEGORIES).forEach(categorySlug => {
        params.push({ slug: `${categorySlug}-in-${locationSlug}` });
      });
    }
  });
  
  return params;
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  
  const match = slug.match(/^(.*?)-in-(.*?)$/);
  if (!match) return {};
  
  const categorySlug = match[1];
  const locationSlug = match[2];
  
  const category = CATEGORIES[categorySlug];
  if (!category) return {};

  const locationName = Object.keys(locations).find(
    k => k.toLowerCase().replace(/ /g, '-').replace(/[()]/g, '') === locationSlug
  );
  
  if (!locationName) return {};

  const locationData = locations[locationName];

  return {
    title: `${category.singular} Dealer & Supplier in ${locationName}, ${locationData.state} | KrishiGears`,
    description: `Authorized B2B supply of KrishiGears ${category.name} in ${locationName}, ${locationData.state}. Spec-matched for ${locationData.soil_type} and ${locationData.key_crops.slice(0, 3).join(', ')} crops with government DBT subsidy guidance.`,
    alternates: {
      canonical: `https://krishigears.com/${slug}`,
    }
  };
}

export default async function LocationCategoryPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  
  const match = slug.match(/^(.*?)-in-(.*?)$/);
  if (!match) notFound();
  
  const categorySlug = match[1];
  const locationSlug = match[2];
  
  const category = CATEGORIES[categorySlug];
  if (!category) notFound();

  const locationName = Object.keys(locations).find(
    k => k.toLowerCase().replace(/ /g, '-').replace(/[()]/g, '') === locationSlug
  );
  
  if (!locationName) notFound();

  const data = locations[locationName];
  const subsidyData = STATE_SUBSIDIES[data.state] || DEFAULT_SUBSIDY;
  
  // Find a matching crop guide
  let matchedCropGuide = DEFAULT_CROP_GUIDE;
  let primaryCrop = data.key_crops[0] || 'various crops';
  for (const crop of data.key_crops) {
    if (CROP_GUIDES[crop]) {
      matchedCropGuide = CROP_GUIDES[crop].guide;
      primaryCrop = crop;
      break;
    }
  }

  // Find nearby districts in the same state
  const nearbyDistricts = Object.entries(locations)
    .filter(([name, d]) => d.state === data.state && name !== locationName)
    .slice(0, 12);

  // Pre-filled WhatsApp message
  const whatsappText = encodeURIComponent(
    `Hello KrishiGears, I am looking for ${category.name} dealer quotation and supply in ${locationName}, ${data.state} for ${primaryCrop} cultivation. Please share pricing.`
  );
  const whatsappUrl = `https://wa.me/${COMPANY.whatsapp}?text=${whatsappText}`;

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'WholesaleStore',
    name: `KrishiGears ${category.name} - ${locationName}`,
    description: `Authorized wholesale supplier of ${category.name} in ${locationName}, ${data.state}.`,
    url: `https://krishigears.com/${slug}`,
    areaServed: {
      '@type': 'City',
      name: locationName,
      containedInPlace: {
        '@type': 'State',
        name: data.state
      }
    },
    brand: {
      '@type': 'Brand',
      name: 'KrishiGears'
    }
  };

  return (
    <main className="min-h-screen bg-background text-zinc-100 pb-20">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      
      {/* Breadcrumbs */}
      <div className="bg-surface-dark border-b border-zinc-800">
        <div className="max-w-7xl mx-auto px-6 py-3 text-xs text-zinc-400 flex items-center gap-2 flex-wrap">
          <Link href="/" className="hover:text-lime-500 transition-colors">Home</Link>
          <span>›</span>
          <Link href="/locations" className="hover:text-lime-500 transition-colors">Locations</Link>
          <span>›</span>
          <span>{data.state}</span>
          <span>›</span>
          <span className="text-lime-400 font-semibold">{locationName}</span>
        </div>
      </div>

      {/* Hero Section */}
      <section className="bg-gradient-to-b from-zinc-950 via-zinc-900 to-background border-b border-zinc-800 py-12 md:py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-20 pointer-events-none"></div>
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-lime-500/10 border border-lime-500/30 text-lime-400 text-xs font-bold uppercase tracking-wider mb-4">
            <MapPin className="h-3.5 w-3.5" /> {data.state} · Direct Supply & Dealership Hub
          </div>

          <h1 className="font-display font-black text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-white tracking-tight leading-tight max-w-4xl text-balance">
            {category.singular} Dealers & Supply in <span className="text-lime-500">{locationName}</span>
          </h1>

          <p className="text-zinc-300 text-base md:text-lg max-w-3xl leading-relaxed mt-4">
            Authorized B2B supply of KrishiGears {category.name.toLowerCase()} for commercial dealers, agro-service centers, and farming cooperatives in {locationName}. Spec-optimized for {data.soil_type.toLowerCase()} and local cultivation of {data.key_crops.join(', ')}.
          </p>

          {/* Quick CTA Actions */}
          <div className="mt-8 flex flex-wrap gap-4 items-center">
            <a 
              href={whatsappUrl} 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-lime-500 hover:bg-lime-400 text-black font-bold px-6 py-3.5 rounded-lg transition-all shadow-lg shadow-lime-500/20 text-sm inline-flex items-center gap-2"
            >
              Request WhatsApp Quote
            </a>
            <Link 
              href="/become-a-dealer" 
              className="bg-zinc-900 hover:bg-zinc-800 border border-zinc-700 hover:border-lime-500/50 text-white font-medium px-6 py-3.5 rounded-lg transition-all text-sm inline-flex items-center gap-2"
            >
              Apply for Dealership in {locationName}
            </Link>
          </div>

          {/* Category Switcher Tabs */}
          <div className="mt-12 pt-8 border-t border-zinc-800/80">
            <div className="text-xs uppercase font-bold tracking-wider text-zinc-400 mb-3">
              Switch Machinery Vertical in {locationName}:
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              {Object.entries(CATEGORIES).map(([catKey, catVal]) => {
                const isActive = catKey === categorySlug;
                const Icon = catVal.icon;
                return (
                  <Link
                    key={catKey}
                    href={`/${catKey}-in-${locationSlug}`}
                    className={`p-3.5 rounded-xl border flex items-center gap-3 transition-all ${
                      isActive 
                        ? 'bg-lime-500/15 border-lime-500 text-white font-bold shadow-md shadow-lime-500/10' 
                        : 'bg-zinc-900/60 border-zinc-800 text-zinc-400 hover:text-white hover:border-zinc-700'
                    }`}
                  >
                    <Icon className={`h-5 w-5 shrink-0 ${isActive ? 'text-lime-400' : 'text-zinc-500'}`} />
                    <span className="text-xs sm:text-sm truncate">{catVal.name}</span>
                  </Link>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Main Content Area */}
      <div className="max-w-7xl mx-auto px-6 mt-16 space-y-16">
        
        {/* Agronomy & Local Soil Mechanization Matrix */}
        <section className="grid md:grid-cols-12 gap-8 items-start">
          <div className="md:col-span-7 bg-zinc-950 border border-zinc-800 p-6 md:p-8 rounded-2xl shadow-xl space-y-6">
            <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded text-[11px] font-semibold tracking-wide uppercase bg-lime-500/10 text-lime-400 border border-lime-500/30">
              District Agricultural Profile
            </div>
            <h2 className="font-display font-bold text-2xl text-white">
              Field Mechanization for {locationName}
            </h2>
            <p className="text-zinc-300 text-sm sm:text-base leading-relaxed">
              {locationName} is characterized by {data.farming_profile.toLowerCase()} with predominant <span className="text-lime-400 font-semibold">{data.soil_type.toLowerCase()}</span>. Farmers and contractors in this belt experience specific weed, moisture, and hardpan challenges that require correct implement selection.
            </p>

            <div className="p-4 rounded-xl bg-zinc-900/80 border border-zinc-800 space-y-2">
              <div className="text-xs uppercase font-bold text-lime-400 tracking-wider">
                Primary Crop Protocol: {primaryCrop}
              </div>
              <p className="text-zinc-300 text-sm leading-relaxed">{matchedCropGuide}</p>
            </div>

            <div className="grid grid-cols-2 gap-4 pt-2">
              <div className="p-4 rounded-xl bg-zinc-900/40 border border-zinc-800">
                <div className="text-xs text-zinc-400 font-medium">Major Local Crops</div>
                <div className="text-sm font-bold text-white mt-1 flex flex-wrap gap-1">
                  {data.key_crops.map(c => (
                    <span key={c} className="px-2 py-0.5 bg-zinc-800 rounded text-xs text-zinc-200">{c}</span>
                  ))}
                </div>
              </div>
              <div className="p-4 rounded-xl bg-zinc-900/40 border border-zinc-800">
                <div className="text-xs text-zinc-400 font-medium">Predominant Soil</div>
                <div className="text-sm font-bold text-lime-400 mt-1">{data.soil_type}</div>
              </div>
            </div>
          </div>

          {/* Technical Implementation Matrix */}
          <div className="md:col-span-5 bg-gradient-to-br from-zinc-900 to-zinc-950 border border-zinc-800 p-6 md:p-8 rounded-2xl shadow-xl space-y-5">
            <h3 className="font-display font-bold text-lg text-white flex items-center gap-2">
              <CheckCircle2 className="h-5 w-5 text-lime-400" /> Recommended Machinery Configuration
            </h3>
            <p className="text-zinc-400 text-xs leading-relaxed">
              Engineering specifications recommended for {locationName}'s soil density:
            </p>
            
            <ul className="space-y-3.5 text-xs sm:text-sm text-zinc-300">
              <li className="flex items-start gap-2.5">
                <div className="h-1.5 w-1.5 rounded-full bg-lime-500 mt-2 shrink-0"></div>
                <div>
                  <strong className="text-white">Engine Requirement:</strong> 7 HP petrol for light inter-row work or 5.5HP/9HP diesel for deep black cotton tilling.
                </div>
              </li>
              <li className="flex items-start gap-2.5">
                <div className="h-1.5 w-1.5 rounded-full bg-lime-500 mt-2 shrink-0"></div>
                <div>
                  <strong className="text-white">Blade Fitment:</strong> 32-piece curved dryland blades with anti-wrap weed discs for row crops.
                </div>
              </li>
              <li className="flex items-start gap-2.5">
                <div className="h-1.5 w-1.5 rounded-full bg-lime-500 mt-2 shrink-0"></div>
                <div>
                  <strong className="text-white">Logistics & Delivery:</strong> Express road dispatch from Jaipur to {locationName} transport hubs within 48–72 hours.
                </div>
              </li>
            </ul>

            <div className="pt-4 border-t border-zinc-800">
              <a 
                href={whatsappUrl} 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-full py-3 bg-zinc-800 hover:bg-zinc-700 text-lime-400 hover:text-lime-300 border border-zinc-700 rounded-lg text-xs font-bold uppercase tracking-wider text-center block transition-all"
              >
                Inquire Fitment Specs on WhatsApp →
              </a>
            </div>
          </div>
        </section>

        {/* State Government Subsidy Scheme Guidance */}
        <section className="bg-zinc-950 border border-zinc-800 p-8 rounded-2xl shadow-xl">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 pb-6 border-b border-zinc-800">
            <div>
              <div className="text-xs uppercase font-bold text-lime-400 tracking-wider mb-1">
                Direct Benefit Transfer (DBT) Guidance
              </div>
              <h2 className="font-display font-bold text-2xl text-white">
                Government Subsidies in {data.state}
              </h2>
            </div>
            <span className="text-xs font-mono px-3 py-1 bg-lime-500/10 text-lime-400 border border-lime-500/30 rounded-full w-fit">
              Scheme: {subsidyData.portalName}
            </span>
          </div>

          <div className="mt-6 grid md:grid-cols-3 gap-6">
            <div className="p-5 rounded-xl bg-zinc-900/60 border border-zinc-800">
              <div className="text-2xl mb-2">🏛️</div>
              <h3 className="font-bold text-white text-sm mb-1">{subsidyData.portalName}</h3>
              <p className="text-zinc-400 text-xs leading-relaxed">{subsidyData.details}</p>
            </div>

            <div className="p-5 rounded-xl bg-zinc-900/60 border border-zinc-800">
              <div className="text-2xl mb-2">📋</div>
              <h3 className="font-bold text-white text-sm mb-1">Required Documentation</h3>
              <p className="text-zinc-400 text-xs leading-relaxed">
                7/12 land extract or RoR record, Aadhaar card, bank passbook, and official KrishiGears GST quotation with FMTTI testing serial numbers.
              </p>
            </div>

            <div className="p-5 rounded-xl bg-zinc-900/60 border border-zinc-800">
              <div className="text-2xl mb-2">🤝</div>
              <h3 className="font-bold text-white text-sm mb-1">Dealer Assistance in {locationName}</h3>
              <p className="text-zinc-400 text-xs leading-relaxed">
                Authorized dealers provide complete assistance with portal invoice upload, batch verification, and physical inspection clearance.
              </p>
            </div>
          </div>
        </section>

        {/* B2B Exclusive Dealership Pitch */}
        <section className="p-8 md:p-10 rounded-2xl bg-gradient-to-r from-lime-500 via-lime-400 to-lime-500 text-black shadow-2xl relative overflow-hidden">
          <div className="relative z-10 max-w-3xl">
            <span className="inline-block px-3 py-1 bg-black text-lime-400 text-xs font-black uppercase tracking-wider rounded-md mb-3">
              Commercial Dealership Opportunity
            </span>
            <h2 className="font-display font-black text-2xl sm:text-3xl md:text-4xl text-black leading-tight">
              Establish the Authorized KrishiGears Showroom in {locationName}
            </h2>
            <p className="text-black/85 text-sm sm:text-base font-medium mt-3 leading-relaxed">
              We are actively appointing exclusive machinery dealers, spare parts retailers, and service stockists in {locationName} and surrounding tehsils. Benefit from wholesale pricing, protected territory margins, and 24-hour spare parts dispatch.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Link
                href="/become-a-dealer"
                className="px-6 py-3 bg-black hover:bg-zinc-900 text-lime-400 font-bold text-xs uppercase tracking-wider rounded-lg transition-all"
              >
                Apply as Dealer in {locationName}
              </Link>
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 bg-white/90 hover:bg-white text-black font-bold text-xs uppercase tracking-wider rounded-lg transition-all"
              >
                Chat on WhatsApp
              </a>
            </div>
          </div>
        </section>

        {/* Localized FAQ Accordion */}
        <section className="bg-zinc-950 border border-zinc-800 p-8 rounded-2xl shadow-xl space-y-6">
          <h2 className="font-display font-bold text-2xl text-white">
            Frequently Asked Questions - {locationName}
          </h2>
          <div className="space-y-4">
            <details className="p-5 rounded-xl bg-zinc-900/60 border border-zinc-800/80 cursor-pointer group">
              <summary className="font-bold text-zinc-200 group-hover:text-lime-400 transition-colors list-none flex justify-between items-center text-sm">
                <span>Where can I buy original KrishiGears machinery and spare parts in {locationName}?</span>
                <span className="text-lime-400 font-mono text-lg">+</span>
              </summary>
              <p className="text-zinc-400 text-xs sm:text-sm mt-3 pt-3 border-t border-zinc-800/80 leading-relaxed">
                Genuine equipment and fitment-checked spares are supplied through authorized machinery dealers and service counters in {locationName}. Bulk commercial shipments are dispatched directly from central Jaipur logistics with GST e-way bills.
              </p>
            </details>

            <details className="p-5 rounded-xl bg-zinc-900/60 border border-zinc-800/80 cursor-pointer group">
              <summary className="font-bold text-zinc-200 group-hover:text-lime-400 transition-colors list-none flex justify-between items-center text-sm">
                <span>What is the dispatch delivery timeframe for {locationName}?</span>
                <span className="text-lime-400 font-mono text-lg">+</span>
              </summary>
              <p className="text-zinc-400 text-xs sm:text-sm mt-3 pt-3 border-t border-zinc-800/80 leading-relaxed">
                Orders are processed within 24 hours. Express surface transport typically arrives at major transport godowns in {locationName} within 48 to 72 hours, accompanied by transit insurance.
              </p>
            </details>

            <details className="p-5 rounded-xl bg-zinc-900/60 border border-zinc-800/80 cursor-pointer group">
              <summary className="font-bold text-zinc-200 group-hover:text-lime-400 transition-colors list-none flex justify-between items-center text-sm">
                <span>Is financing or subsidy support available for farmers in {data.state}?</span>
                <span className="text-lime-400 font-mono text-lg">+</span>
              </summary>
              <p className="text-zinc-400 text-xs sm:text-sm mt-3 pt-3 border-t border-zinc-800/80 leading-relaxed">
                Yes. Eligible farmers can apply through {subsidyData.portalName}. Our dealer network provides official test compliance certificates and commercial quotations for subsidy approval.
              </p>
            </details>
          </div>
        </section>

        {/* Nearby District Internal Silo Linking */}
        <section className="bg-zinc-950 border border-zinc-800 p-8 rounded-2xl shadow-xl">
          <div className="flex items-center justify-between pb-4 mb-6 border-b border-zinc-800">
            <h3 className="font-display font-bold text-lg text-white">
              Explore {category.name} in Neighboring Districts of {data.state}
            </h3>
            <Link href="/locations" className="text-xs text-lime-400 hover:underline">
              View All 740 Districts →
            </Link>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
            {nearbyDistricts.map(([distName]) => (
              <Link 
                key={distName}
                href={`/${categorySlug}-in-${distName.toLowerCase().replace(/ /g, '-').replace(/[()]/g, '')}`}
                className="p-3 rounded-lg bg-zinc-900/50 hover:bg-zinc-900 border border-zinc-800/80 hover:border-lime-500/40 text-xs text-zinc-300 hover:text-lime-400 transition-all truncate"
              >
                {category.name} in {distName}
              </Link>
            ))}
          </div>
        </section>

      </div>
    </main>
  );
}
