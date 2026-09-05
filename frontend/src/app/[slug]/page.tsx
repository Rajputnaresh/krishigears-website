import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import locationsData from '@/data/locations.json';
import { STATE_SUBSIDIES, CROP_GUIDES, DEFAULT_CROP_GUIDE, DEFAULT_SUBSIDY } from '@/data/enrichment';
import Link from 'next/link';

// Define the valid categories
const CATEGORIES = {
  'power-weeders': {
    name: 'Power Weeders',
    singular: 'Power Weeder',
  },
  'power-weeder-spare-parts': {
    name: 'Power Weeder Spare Parts',
    singular: 'Power Weeder Spare Part',
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
  
  // To prevent Vercel build timeouts, we only pre-build major districts
  // The rest will be generated on-demand (ISR)
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
  
  // Parse slug: e.g., power-weeders-in-pune
  const match = slug.match(/^(.*?)-in-(.*?)$/);
  if (!match) return {};
  
  const categorySlug = match[1];
  const locationSlug = match[2];
  
  const category = CATEGORIES[categorySlug as keyof typeof CATEGORIES];
  if (!category) return {};

  // Find location by matching slugified keys
  const locationName = Object.keys(locations).find(
    k => k.toLowerCase().replace(/ /g, '-').replace(/[()]/g, '') === locationSlug
  );
  
  if (!locationName) return {};

  const locationData = locations[locationName];

  return {
    title: `${category.singular} Dealer & Supplier in ${locationName}, ${locationData.state} | KrishiGears`,
    description: `Find wholesale ${category.name} in ${locationName}, ${locationData.state}. Get genuine KrishiGears equipment, spare parts, and subsidy assistance for ${locationData.key_crops[0]} farming.`,
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
  
  const category = CATEGORIES[categorySlug as keyof typeof CATEGORIES];
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
    .slice(0, 8);

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
    <main className="min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      
      {/* Breadcrumbs */}
      <div className="bg-surface-dark border-b border-zinc-800">
        <div className="max-w-7xl mx-auto px-6 py-4 text-sm text-zinc-400">
          <Link href="/" className="hover:text-lime-500 transition-colors">Home</Link>
          <span className="mx-2">›</span>
          <span>{data.state}</span>
          <span className="mx-2">›</span>
          <span className="text-zinc-200">{locationName}</span>
        </div>
      </div>

      {/* Hero Section */}
      <section className="kg-section bg-surface-darker relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-30"></div>
        <div className="max-w-7xl mx-auto relative z-10">
          <p className="kg-eyebrow mb-4">Authorized B2B Supply</p>
          <h1 className="kg-h1 text-white mb-6">
            {category.singular} Dealers in <span className="text-lime-500">{locationName}</span>, {data.state}
          </h1>
          <p className="text-xl text-zinc-200 max-w-3xl leading-relaxed">
            Wholesale supply and authorized dealer network for KrishiGears {category.name} in {locationName}. 
            Engineered for {data.soil_type.toLowerCase()} and perfect for {data.key_crops.slice(0, 3).join(', ')} cultivation.
          </p>
          <div className="mt-10 flex gap-4">
            <button className="lime-btn rounded-md px-8 py-4">Request Bulk Quote</button>
            <button className="bg-surface text-white border border-zinc-700 hover:border-lime-500 rounded-md px-8 py-4 transition-all">
              Apply for Dealership
            </button>
          </div>
        </div>
      </section>

      {/* Dynamic Content Body */}
      <section className="kg-section bg-surface">
        <div className="max-w-4xl mx-auto space-y-16">
          
          {/* Agronomy Section */}
          <div className="kg-card p-8 md:p-10 rounded-xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-lime-500/10 blur-3xl rounded-full"></div>
            <h2 className="kg-h3 text-white mb-4">Optimized for {locationName} Agriculture</h2>
            <p className="text-zinc-200 leading-relaxed mb-6">
              {locationName} is a prominent agricultural district characterized by {data.farming_profile.toLowerCase()}. 
              With predominant {data.soil_type.toLowerCase()}, farmers require robust mechanization to maximize yield.
            </p>
            <div className="bg-surface-darker p-6 rounded-lg border border-zinc-700/80 relative">
              <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded text-[11px] font-semibold tracking-wide uppercase bg-lime-500/15 text-lime-400 border border-lime-500/30 mb-3">
                Crop Focus: {primaryCrop}
              </div>
              <p className="text-zinc-200 leading-relaxed">{matchedCropGuide}</p>
            </div>
          </div>

          {/* Subsidies Section */}
          <div className="space-y-6">
            <h2 className="kg-h2 text-white">Government Subsidy in {data.state}</h2>
            <p className="text-zinc-300 text-lg">
              Reduce your capital investment through official government schemes available to farmers in {locationName}.
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="kg-card p-6 rounded-lg">
                <div className="w-12 h-12 bg-lime-500/10 rounded-full flex items-center justify-center mb-4">
                  <span className="text-2xl">🏛️</span>
                </div>
                <h3 className="font-bold text-white mb-2">{subsidyData.portalName}</h3>
                <p className="text-zinc-300 text-sm leading-relaxed">{subsidyData.details}</p>
              </div>
              <div className="kg-card p-6 rounded-lg">
                <div className="w-12 h-12 bg-lime-500/10 rounded-full flex items-center justify-center mb-4">
                  <span className="text-2xl">📝</span>
                </div>
                <h3 className="font-bold text-white mb-2">Dealer Assistance</h3>
                <p className="text-zinc-300 text-sm leading-relaxed">Our authorized dealers in {locationName} will provide the necessary quotations and test reports required for your subsidy application.</p>
              </div>
            </div>
          </div>

          {/* Dealer Network Pitch */}
          <div className="bg-lime-500 text-black p-10 rounded-xl shadow-lg shadow-lime-500/20 text-center">
            <h2 className="kg-h3 mb-4 text-black">Become the Exclusive Dealer in {locationName}</h2>
            <p className="text-black/90 font-medium mb-8 max-w-2xl mx-auto leading-relaxed">
              We are actively expanding our B2B footprint in {data.state}. If you operate an agricultural machinery showroom in {locationName}, partner with KrishiGears to access wholesale pricing, marketing support, and exclusive territory rights.
            </p>
            <button className="bg-black text-lime-400 px-8 py-3 rounded-md font-bold hover:bg-zinc-900 transition-colors">
              Submit Dealer Application
            </button>
          </div>

          {/* Local FAQs */}
          <div className="space-y-6">
            <h2 className="kg-h2 text-white">Frequently Asked Questions - {locationName}</h2>
            <div className="space-y-4">
              <details className="kg-card p-6 rounded-lg cursor-pointer group">
                <summary className="font-bold text-white group-hover:text-lime-500 transition-colors list-none flex justify-between">
                  Where can I buy KrishiGears spare parts in {locationName}?
                  <span className="text-lime-500">+</span>
                </summary>
                <p className="text-zinc-400 mt-4 pt-4 border-t border-zinc-800">
                  Genuine spare parts are available through our authorized service centers and dealers across {locationName}. You can also place bulk orders directly through this B2B portal.
                </p>
              </details>
              <details className="kg-card p-6 rounded-lg cursor-pointer group">
                <summary className="font-bold text-white group-hover:text-lime-500 transition-colors list-none flex justify-between">
                  Is EMI available for farmers in {data.state}?
                  <span className="text-lime-500">+</span>
                </summary>
                <p className="text-zinc-400 mt-4 pt-4 border-t border-zinc-800">
                  Yes, our dealership network in {locationName} partners with leading rural banks and NBFCs to provide easy financing options for power weeders.
                </p>
              </details>
            </div>
          </div>
        </div>
      </section>

      {/* Internal Linking Engine (The Silo Web) */}
      <section className="border-t border-zinc-800 bg-surface-darker py-16">
        <div className="max-w-7xl mx-auto px-6">
          <h3 className="text-white font-bold mb-8">Explore {category.name} in Nearby Districts</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {nearbyDistricts.map(([distName]) => (
              <Link 
                key={distName}
                href={`/${categorySlug}-in-${distName.toLowerCase().replace(/ /g, '-').replace(/[()]/g, '')}`}
                className="text-zinc-400 hover:text-lime-500 transition-colors text-sm"
              >
                {category.name} in {distName}
              </Link>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
