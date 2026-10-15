import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: "Agricultural Machinery Technical Glossary & Engineering Standards",
  description: "Official engineering reference for farm machinery terms: PTO splines, 2T JASO-FD ratios, FMTTI compliance, SMAM subsidies, and tillage mechanics.",
  alternates: {
    canonical: "https://krishigears.com/glossary",
  },
  openGraph: {
    title: "Agricultural Machinery Technical Glossary | KrishiGears B2B",
    description: "Definitive farm equipment engineering standards, shaft fitments, engine ratios, and testing benchmarks.",
    url: "https://krishigears.com/glossary",
    siteName: "KrishiGears",
    images: [{ url: "/logo512.png", width: 512, height: 512, alt: "KrishiGears Agricultural Glossary" }],
  },
};

const glossaryTerms = [
  {
    term: "PTO Spline Shaft (Power Take-Off)",
    category: "Transmission & Fitment",
    definition: "A splined mechanical drive shaft connecting an engine or gearbox to working attachments (such as rotavator tines, water pump adapters, or paddy reaper headers). In small machinery, 26mm diameter with 7-splines or 9-splines, and 28mm diameter with 9-splines, represent the Indian OEM standards for brush cutters and power weeders.",
    impact: "Must match exact millimeter and spline count before ordering replacement gearboxes or attachment tools."
  },
  {
    term: "JASO-FD 2-Stroke Lubrication Standard",
    category: "Engine Lubrication",
    definition: "The highest Japanese Automotive Standards Organization specification for 2-stroke air-cooled engines. JASO-FD lubricants provide maximum thermal detergency, rust prevention, and ultra-low exhaust smoke at high cylinder temperatures (operating up to 9,500 RPM in brush cutters and chainsaws) compared to older JASO-FB or FC oils.",
    impact: "Using JASO-FD synthetic oil at 40:1 ratio prevents cylinder carbon coking and spark plug fouling during harvesting."
  },
  {
    term: "FMTTI / SRFMTTI Test Certification",
    category: "Quality Standards & Subsidy",
    definition: "Standardized performance and safety testing conducted by the Government of India's Farm Machinery Training and Testing Institutes (Budni, Anantapur, Hisar, Biswanath Chariali). Certification confirms engine fuel consumption, noise levels, operator vibration, safety guards, and structural durability under Indian agronomic field conditions.",
    impact: "Mandatory qualification requirement for farmers to claim 40% to 50% DBT subsidy under the Central SMAM scheme."
  },
  {
    term: "SMAM (Sub-Mission on Agricultural Mechanization)",
    category: "Government Schemes",
    definition: "A flagship central sector DBT subsidy program operated by the Ministry of Agriculture and Farmers Welfare to promote farm mechanization among small, marginal, and women farmers. Subsidies range from 40% to 50% on power weeders, brush cutters, reapers, and sprayers via state agriculture portals (Rajkisan, Mahadbt, UP Agriculture, DBT Bihar).",
    impact: "Requires purchase from certified commercial manufacturers with commercial GST invoices and serial number verification."
  },
  {
    term: "Diaphragm Pump vs Horizontal Triplex Plunger (HTP)",
    category: "Crop Protection",
    definition: "A 12V DC diaphragm pump uses a flexible synthetic rubber membrane to generate 60 to 110 PSI discharge at 2.5–5.5 L/min for knapsack sprayers. An HTP pump uses three reciprocating ceramic-coated pistons inside a brass manifold to generate 400 to 600 PSI at 20–50 L/min, driving long 100-to-300 meter delivery hose lines in tall orchards.",
    impact: "Diaphragm pumps are optimal for small field knapsack sprayers; HTPs are essential for high-canopy fruit orchards."
  },
  {
    term: "TCT Blade (Tungsten Carbide Tipped)",
    category: "Cutting Implements",
    definition: "A circular manganese steel saw blade with brazed micro-grain tungsten carbide teeth (typically 40T or 80T). Engineered for high rotational speeds (up to 10,000 RPM) to slice cleanly through standing grain crops (wheat, paddy, mustard) without grain shattering, outlasting standard stamped carbon steel blades by 8x.",
    impact: "Paired with a paddy crop collection guard, TCT blades enable a brush cutter to function as a high-speed mini reaper."
  },
  {
    term: "Secondary Tillage vs Primary Tillage",
    category: "Soil Mechanics",
    definition: "Primary tillage refers to the initial deep breaking, lifting, and inversion of uncultivated or compacted soil (depth 15–25 cm) using moldboard plows. Secondary tillage involves lighter rotary pulverization (depth 8–15 cm) using power weeders or rotavators to break clods, incorporate fertilizer, and prepare a seedbed.",
    impact: "5HP to 7HP rotary weeders are secondary tillage machines; attempting primary deep clay plowing without pre-loosening causes excessive belt slippage."
  },
  {
    term: "2-in-1 Dual Manual-Battery Knapsack Sprayer",
    category: "Crop Protection",
    definition: "A hybrid knapsack sprayer combining an electric 12V 8Ah battery-driven diaphragm pump with a secondary manual hand-lever plunger pump within the same chemical tank chassis. If battery charge depletes in distant fields, the operator shifts to manual hand-pumping without losing field spraying time.",
    impact: "Critical risk-mitigation feature for farmers operating on remote acreage away from reliable electricity."
  }
];

const glossaryJsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "DefinedTermSet",
      "@id": "https://krishigears.com/glossary#definedtermset",
      "name": "Agricultural Machinery Technical Glossary & Engineering Standards",
      "description": "Authoritative engineering glossary covering farm equipment fitment, engine lubrication standards, FMTTI testing parameters, and SMAM subsidies.",
      "hasDefinedTerm": glossaryTerms.map((item) => ({
        "@type": "DefinedTerm",
        "name": item.term,
        "description": item.definition,
        "inDefinedTermSet": "https://krishigears.com/glossary#definedtermset"
      }))
    },
    {
      "@type": "BreadcrumbList",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": "https://krishigears.com"
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "Technical Glossary",
          "item": "https://krishigears.com/glossary"
        }
      ]
    }
  ]
};

export default function GlossaryPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(glossaryJsonLd) }}
      />
      <main className="min-h-screen bg-stone-50 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          {/* Header */}
          <div className="mb-10 text-center sm:text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 text-xs font-bold uppercase tracking-wider mb-3">
              Official Engineering Reference
            </div>
            <h1 className="text-3xl sm:text-4xl font-extrabold text-stone-900 tracking-tight">
              Agricultural Machinery Technical Glossary
            </h1>
            <p className="mt-3 text-base sm:text-lg text-stone-600 max-w-3xl">
              Definitive engineering standards, shaft fitment specifications, engine lubrication benchmarks, and FMTTI government testing parameters for Indian farmers, dealers, and agricultural engineers.
            </p>
          </div>

          {/* Quick Category Summary */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-8">
            <div className="bg-white p-3 rounded-xl border border-stone-200 text-center">
              <span className="text-xs text-stone-500 font-semibold block uppercase">Standards</span>
              <span className="text-sm font-bold text-stone-800">FMTTI & SMAM</span>
            </div>
            <div className="bg-white p-3 rounded-xl border border-stone-200 text-center">
              <span className="text-xs text-stone-500 font-semibold block uppercase">Transmission</span>
              <span className="text-sm font-bold text-stone-800">26mm & 28mm PTO</span>
            </div>
            <div className="bg-white p-3 rounded-xl border border-stone-200 text-center">
              <span className="text-xs text-stone-500 font-semibold block uppercase">Engines</span>
              <span className="text-sm font-bold text-stone-800">JASO-FD & 4-Stroke</span>
            </div>
            <div className="bg-white p-3 rounded-xl border border-stone-200 text-center">
              <span className="text-xs text-stone-500 font-semibold block uppercase">Pressure</span>
              <span className="text-sm font-bold text-stone-800">110 to 600 PSI</span>
            </div>
          </div>

          {/* Term Cards */}
          <div className="space-y-6">
            {glossaryTerms.map((item, idx) => (
              <div
                key={idx}
                className="bg-white rounded-2xl border border-stone-200 p-6 shadow-sm hover:border-emerald-300 transition-colors"
              >
                <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                  <h2 className="text-xl font-bold text-stone-900">{item.term}</h2>
                  <span className="text-xs font-bold px-2.5 py-1 rounded-md bg-stone-100 text-stone-700">
                    {item.category}
                  </span>
                </div>
                <p className="text-sm sm:text-base text-stone-700 leading-relaxed mb-4">
                  {item.definition}
                </p>
                <div className="bg-emerald-50/80 border border-emerald-200/80 rounded-xl p-3 text-xs sm:text-sm text-emerald-950 font-medium flex flex-col sm:flex-row sm:items-baseline gap-1.5 sm:gap-2">
                  <span className="shrink-0 px-2 py-0.5 rounded bg-emerald-700 text-white text-[11px] font-bold tracking-wide uppercase inline-block w-fit">Field Impact</span>
                  <span className="leading-relaxed">{item.impact}</span>
                </div>
              </div>
            ))}
          </div>

          {/* Cross Domain Handoff & Dealership CTA */}
          <div className="mt-12 bg-stone-900 rounded-2xl p-6 sm:p-8 text-white shadow-xl">
            <div className="sm:flex sm:items-center sm:justify-between">
              <div>
                <h3 className="text-xl font-bold tracking-tight">Need fitment verification for your district?</h3>
                <p className="mt-1 text-sm text-stone-300 max-w-xl">
                  KrishiGears provides certified wholesale spares and machinery to dealers across all 740 Indian districts. Single machine retail buyers can order with doorstep COD via FarmingTools.in.
                </p>
              </div>
              <div className="mt-4 sm:mt-0 flex flex-wrap gap-3">
                <Link
                  href="/become-a-dealer"
                  className="px-5 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-sm transition-colors shadow-sm"
                >
                  Wholesale Dealership
                </Link>
                <a
                  href="https://farmingtools.in"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-5 py-2.5 rounded-xl bg-stone-800 hover:bg-stone-700 text-stone-200 font-bold text-sm border border-stone-700 transition-colors"
                >
                  FarmingTools Storefront ↗
                </a>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
