import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: "168F, 170F & GX35 Engine Spares Fitment Guide (2026)",
  description: "Engineering guide to 168F, 170F and GX35 agricultural engine spares. Cross-compatibility rules, carburetor differences, 28mm 9T shaft fitment, and diagnostic triage across 359 demand queries.",
  alternates: {
    canonical: "https://krishigears.com/spare-parts/168f-170f-gx35-fitment-guide"
  },
  openGraph: {
    title: "168F, 170F & GX35 Engine Spares Fitment Guide | KrishiGears",
    description: "Engineering specifications, dimensional fitment rules, and physical measurement verification for 168F, 170F, and GX35 machinery spares.",
    url: "https://krishigears.com/spare-parts/168f-170f-gx35-fitment-guide",
    siteName: "KrishiGears",
    images: [{ url: "/images/products/weeder.webp", width: 800, height: 600, alt: "168F 170F GX35 Engine Spares Fitment Guide" }],
  }
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
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
          "name": "Spare Parts",
          "item": "https://krishigears.com/spare-parts"
        },
        {
          "@type": "ListItem",
          "position": 3,
          "name": "168F / 170F / GX35 Fitment Guide",
          "item": "https://krishigears.com/spare-parts/168f-170f-gx35-fitment-guide"
        }
      ]
    },
    {
      "@type": "TechArticle",
      "@id": "https://krishigears.com/spare-parts/168f-170f-gx35-fitment-guide#article",
      "headline": "168F, 170F and GX35 Engine Spares and Fitment Authority Guide",
      "description": "Comprehensive engineering specifications, cross-compatibility matrices, diagnostic procedures, and measurement protocols for 168F, 170F, and GX35 agricultural engines.",
      "inLanguage": "en-IN",
      "datePublished": "2026-11-17T17:00:00+05:30",
      "dateModified": "2026-11-17T17:00:00+05:30",
      "author": {
        "@type": "Organization",
        "name": "KrishiGears Technical Desk",
        "url": "https://krishigears.com"
      },
      "publisher": {
        "@type": "Organization",
        "name": "KrishiGears",
        "url": "https://krishigears.com",
        "logo": {
          "@type": "ImageObject",
          "url": "https://krishigears.com/images/krishigears-logo.webp"
        }
      }
    },
    {
      "@type": "ItemList",
      "@id": "https://krishigears.com/spare-parts/168f-170f-gx35-fitment-guide#parts-list",
      "name": "15 Critical 168F, 170F and GX35 Engine Spare Assemblies",
      "numberOfItems": 15,
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Recoil Starter Assembly 168F/170F (GE-2053)" },
        { "@type": "ListItem", "position": 2, "name": "Starter Ratchet Cup 168F/170F (GE-2055)" },
        { "@type": "ListItem", "position": 3, "name": "Carburetor Assembly 168F/170F (GE-2041)" },
        { "@type": "ListItem", "position": 4, "name": "GX35 Diaphragm Carburetor (SP-GX35-CARB)" },
        { "@type": "ListItem", "position": 5, "name": "Ignition Coil Assembly 168F/170F (GE-2035)" },
        { "@type": "ListItem", "position": 6, "name": "Piston Assembly 170F 70mm STD (GE-2010)" },
        { "@type": "ListItem", "position": 7, "name": "Piston Ring Set 170F 70mm STD (GE-2011)" },
        { "@type": "ListItem", "position": 8, "name": "Connecting Rod Assembly 170F (GE-2009)" },
        { "@type": "ListItem", "position": 9, "name": "Crankcase Oil Seal 25x41.25x6mm (GE-2058)" },
        { "@type": "ListItem", "position": 10, "name": "Cylinder Head Gasket 170F 70mm (GE-2022)" },
        { "@type": "ListItem", "position": 11, "name": "Rocker Arm Assembly 168F/170F (GE-2025)" },
        { "@type": "ListItem", "position": 12, "name": "Muffler Exhaust Assembly 168F/170F (GE-2052)" },
        { "@type": "ListItem", "position": 13, "name": "GX35 Centrifugal Clutch 78mm (SP-024)" },
        { "@type": "ListItem", "position": 14, "name": "Brush Cutter Shaft 28mm 9T (SP-028)" },
        { "@type": "ListItem", "position": 15, "name": "Gearcase Head 28mm 9T M10x1.25 LHT (SP-015)" }
      ]
    }
  ]
};

export default function SparesFitmentGuidePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <main className="max-w-[1200px] mx-auto px-4 py-8 space-y-10 text-zinc-100 font-sans">
        <nav aria-label="Breadcrumb" className="text-xs text-zinc-400 flex items-center gap-2">
          <Link href="/" className="hover:underline text-lime-400">Home</Link>
          <span>/</span>
          <Link href="/spare-parts" className="hover:underline text-lime-400">Spare Parts</Link>
          <span>/</span>
          <span className="text-zinc-200 font-medium">168F / 170F / GX35 Fitment Guide</span>
        </nav>

        <header className="space-y-4 border-b border-zinc-800 pb-8">
          <div className="inline-block px-3 py-1 bg-lime-950/60 border border-lime-500/40 text-lime-400 text-xs font-semibold uppercase tracking-wider rounded">
            Technical Fitment &amp; Spares Engineering
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-white font-display">
            168F, 170F and GX35 Engine Spares and Fitment Authority Guide
          </h1>
          <p className="text-zinc-300 text-base sm:text-lg leading-relaxed max-w-4xl">
            Finding the correct replacement parts for agricultural machinery in India is frequently complicated by identical-looking engine castings with completely different internal tolerances. A 168F petrol engine (196cc / 6.5 HP) and a 170F power weeder engine (208cc–212cc / 7.0 HP) share identical exterior bolt footprints for recoil starters and carburetors, but internal engine block components—specifically cylinder bores, pistons, and piston rings—are completely incompatible. Similarly, Honda-clone GX35 4-stroke brush cutters require specialized 28mm 9-spline drive couplings and dedicated 10W-30 engine oil sumps that differ entirely from common 2-stroke 43cc/52cc trimmers.
          </p>
          <p className="text-zinc-400 text-sm">
            Based on our systematic analysis of 359 engine spare parts search and maintenance query rows across India, striking-distance repair demand requires verified physical measurement and exact model matching.
          </p>

          <div className="p-4 sm:p-5 rounded-lg border border-amber-500/40 bg-amber-950/20 text-amber-200 text-sm space-y-2" role="note">
            <div className="font-semibold text-amber-300">Procurement &amp; Fitment Verification Policy</div>
            <p>
              <strong>Procurement Notice:</strong> KrishiGears holds no physical stock. Machinery and spare parts are procured per verified order from vetted component suppliers. Dispatch timing, availability, and freight costs are confirmed upon quotation review.
            </p>
            <p>
              <strong>Measurement Disclaimer:</strong> Photos assist our technical review but do not guarantee fitment without physical measurement of dimensions (vernier caliper, bolt-hole spacing, shaft diameter, spline tooth count). Always measure your existing part before placing an order.
            </p>
          </div>
        </header>

        <section aria-labelledby="toc-heading" className="p-6 rounded-lg border border-zinc-800 bg-zinc-900/50 space-y-4">
          <h2 id="toc-heading" className="text-lg font-bold text-white font-display">Table of Contents &amp; Quick Navigation</h2>
          <ul className="grid sm:grid-cols-2 gap-2 text-sm text-lime-400">
            <li><a href="#engineering-specifications" className="hover:underline">1. Engine Engineering Specifications (168F vs 170F vs GX35)</a></li>
            <li><a href="#interchangeability-matrix" className="hover:underline">2. Complete 25-Component Interchangeability Matrix</a></li>
            <li><a href="#measurement-protocols" className="hover:underline">3. Step-by-Step Measurement Protocols for Mechanics</a></li>
            <li><a href="#diagnostic-troubleshooting" className="hover:underline">4. Field Diagnostic &amp; Troubleshooting Guide</a></li>
            <li><a href="#gx35-brush-cutter-fitment" className="hover:underline">5. GX35 4-Stroke Brush Cutter Standards</a></li>
            <li><a href="#quotation-order-protocol" className="hover:underline">6. Parts Verification &amp; Quotation Intake</a></li>
            <li><a href="#frequently-asked-questions" className="hover:underline">7. Frequently Asked Field Questions</a></li>
          </ul>
        </section>

        {/* Section 1: Specifications */}
        <section id="engineering-specifications" className="space-y-4">
          <h2 className="text-2xl font-bold text-white font-display border-b border-zinc-800 pb-2">
            1. Engine Engineering Specifications (168F vs 170F vs GX35)
          </h2>
          <p className="text-zinc-300 text-sm leading-relaxed">
            Small petrol engines powering agricultural tillers, inter-cultivators, and weeders in India primarily belong to the single-cylinder Overhead Valve (OHV) architectural family. Understanding the precise bore, stroke, and displacement prevents catastrophic mechanical damage during field overhaul.
          </p>

          <div className="overflow-x-auto my-6 border border-zinc-800 rounded-lg" role="region" aria-label="Engine Technical Specifications Comparison" tabIndex={0}>
            <table className="w-full text-left text-xs sm:text-sm border-collapse">
              <thead className="bg-zinc-800 text-zinc-200">
                <tr>
                  <th scope="col" className="p-3 border-b border-zinc-700">Parameter</th>
                  <th scope="col" className="p-3 border-b border-zinc-700">168F Petrol Engine</th>
                  <th scope="col" className="p-3 border-b border-zinc-700">170F Petrol Power Weeder</th>
                  <th scope="col" className="p-3 border-b border-zinc-700">GX35 Mini 4-Stroke Engine</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-zinc-800 text-zinc-300">
                <tr>
                  <td className="p-3 font-semibold text-white">Engine Architecture</td>
                  <td className="p-3">4-Stroke, Single Cylinder, OHV, Horizontal Shaft</td>
                  <td className="p-3">4-Stroke, Single Cylinder, OHV, Horizontal Shaft</td>
                  <td className="p-3">4-Stroke, Single Cylinder, OHC (360° Any-Position)</td>
                </tr>
                <tr>
                  <td className="p-3 font-semibold text-white">Displacement</td>
                  <td className="p-3">196 cc</td>
                  <td className="p-3">208 cc – 212 cc</td>
                  <td className="p-3">35.8 cc</td>
                </tr>
                <tr>
                  <td className="p-3 font-semibold text-white">Cylinder Bore Diameter</td>
                  <td className="p-3">68 mm</td>
                  <td className="p-3">70 mm</td>
                  <td className="p-3">39 mm</td>
                </tr>
                <tr>
                  <td className="p-3 font-semibold text-white">Piston Stroke</td>
                  <td className="p-3">54 mm</td>
                  <td className="p-3">54 mm – 55 mm</td>
                  <td className="p-3">30 mm</td>
                </tr>
                <tr>
                  <td className="p-3 font-semibold text-white">Rated Power Output</td>
                  <td className="p-3">6.5 HP (4.8 kW) @ 3600 RPM</td>
                  <td className="p-3">7.0 HP (5.2 kW) @ 3600 RPM</td>
                  <td className="p-3">1.3 HP (1.0 kW) @ 7000 RPM</td>
                </tr>
                <tr>
                  <td className="p-3 font-semibold text-white">Maximum Torque</td>
                  <td className="p-3">12.4 N·m @ 2500 RPM</td>
                  <td className="p-3">13.2 N·m @ 2500 RPM</td>
                  <td className="p-3">1.6 N·m @ 5500 RPM</td>
                </tr>
                <tr>
                  <td className="p-3 font-semibold text-white">PTO Output Shaft Type</td>
                  <td className="p-3">19.05 mm (3/4") or 20 mm Keyway Shaft</td>
                  <td className="p-3">19.05 mm / 20 mm Keyway or Splined Shaft</td>
                  <td className="p-3">78 mm Centrifugal Clutch Drum (Direct)</td>
                </tr>
                <tr>
                  <td className="p-3 font-semibold text-white">Crankcase Oil Capacity</td>
                  <td className="p-3">0.6 Litres (SAE 10W-30 / 20W-40)</td>
                  <td className="p-3">0.6 Litres (SAE 10W-30 / 20W-40)</td>
                  <td className="p-3">0.1 Litres (100 ml SAE 10W-30 Only)</td>
                </tr>
                <tr>
                  <td className="p-3 font-semibold text-white">Fuel Tank Capacity</td>
                  <td className="p-3">3.6 Litres (Pure Unleaded Petrol)</td>
                  <td className="p-3">3.6 Litres (Pure Unleaded Petrol)</td>
                  <td className="p-3">0.63 Litres (Pure Unleaded Petrol)</td>
                </tr>
                <tr>
                  <td className="p-3 font-semibold text-white">Air Cleaner System</td>
                  <td className="p-3">Dual-element (Foam + Paper) or Oil-Bath</td>
                  <td className="p-3">Semi-dry Oil Bath Air Cleaner (Tillage)</td>
                  <td className="p-3">Semi-dry Polyurethane Foam Element</td>
                </tr>
                <tr>
                  <td className="p-3 font-semibold text-white">Recoil Mount Bolt Pitch</td>
                  <td className="p-3">160 mm Bolt-Hole Circle (3 Bolts)</td>
                  <td className="p-3">160 mm Bolt-Hole Circle (3 Bolts)</td>
                  <td className="p-3">Compact Mini Shroud (4 Bolts)</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Section 2: 25-Component Matrix */}
        <section id="interchangeability-matrix" className="space-y-4">
          <h2 className="text-2xl font-bold text-white font-display border-b border-zinc-800 pb-2">
            2. Complete 25-Component Interchangeability Matrix
          </h2>
          <p className="text-zinc-300 text-sm leading-relaxed">
            The table below provides dimensional rules and cross-compatibility guidance across the 25 most frequently replaced assemblies in Indian workshops. Due to variations across manufacturing batches and generic OEM rebadgers, always verify critical dimensions before ordering.
          </p>

          <div className="overflow-x-auto my-6 border border-zinc-800 rounded-lg" role="region" aria-label="25-Component Interchangeability Matrix" tabIndex={0}>
            <table className="w-full text-left text-xs sm:text-sm border-collapse">
              <thead className="bg-zinc-800 text-zinc-200">
                <tr>
                  <th scope="col" className="p-3 border-b border-zinc-700">Component Category</th>
                  <th scope="col" className="p-3 border-b border-zinc-700">OEM Part Code</th>
                  <th scope="col" className="p-3 border-b border-zinc-700">168F vs 170F Compatibility</th>
                  <th scope="col" className="p-3 border-b border-zinc-700">GX35 Compatibility</th>
                  <th scope="col" className="p-3 border-b border-zinc-700">Dimensional Rule &amp; Fitment Instruction</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-zinc-800 text-zinc-300">
                <tr>
                  <td className="p-3 font-semibold text-white">Recoil Starter Assembly<br/><span className="text-zinc-400 text-xs">डोरी स्टार्टर (Dori starter)</span></td>
                  <td className="p-3"><code>GE-2053 / GE-2054</code></td>
                  <td className="p-3"><span className="text-lime-400 font-medium">Interchangeable (Petrol)</span></td>
                  <td className="p-3"><span className="text-red-400 font-medium">Incompatible</span></td>
                  <td className="p-3">160mm 3-bolt circle on standard petrol 168F/170F. Verify housing diameter. Diesel 170F uses 195–205mm metal shroud.</td>
                </tr>
                <tr>
                  <td className="p-3 font-semibold text-white">Starter Ratchet Cup / Flange<br/><span className="text-zinc-400 text-xs">स्टार्टर कटोरी (Starter katori)</span></td>
                  <td className="p-3"><code>GE-2055</code></td>
                  <td className="p-3"><span className="text-lime-400 font-medium">Interchangeable</span></td>
                  <td className="p-3"><span className="text-red-400 font-medium">Incompatible</span></td>
                  <td className="p-3">65mm outer flange, crankshaft nut fitment. Matches dual-pawl starter assemblies.</td>
                </tr>
                <tr>
                  <td className="p-3 font-semibold text-white">Carburetor Assembly<br/><span className="text-zinc-400 text-xs">कार्बोरेटर (Carbutor)</span></td>
                  <td className="p-3"><code>GE-2041</code></td>
                  <td className="p-3"><span className="text-lime-400 font-medium">Interchangeable</span></td>
                  <td className="p-3"><span className="text-red-400 font-medium">Incompatible</span></td>
                  <td className="p-3">42–43mm mounting stud CTC, 19mm bore. 170F factory jetting is 0.72–0.74mm vs 0.70mm on 168F. GX35 uses diaphragm carb.</td>
                </tr>
                <tr>
                  <td className="p-3 font-semibold text-white">GX35 Diaphragm Carburetor<br/><span className="text-zinc-400 text-xs">चिड़िया कार्बोरेटर (Chidiya carb)</span></td>
                  <td className="p-3"><code>SP-GX35-CARB</code></td>
                  <td className="p-3"><span className="text-red-400 font-medium">Incompatible</span></td>
                  <td className="p-3"><span className="text-lime-400 font-medium">Compatible</span></td>
                  <td className="p-3">31mm mounting CTC with primer purge bulb. Dedicated to GX35 4-stroke trimmers.</td>
                </tr>
                <tr>
                  <td className="p-3 font-semibold text-white">Fuel Tank with Cap<br/><span className="text-zinc-400 text-xs">पेट्रोल टंकी (Fuel tanki)</span></td>
                  <td className="p-3"><code>GE-2004 / GE-2007</code></td>
                  <td className="p-3"><span className="text-lime-400 font-medium">Interchangeable</span></td>
                  <td className="p-3"><span className="text-red-400 font-medium">Incompatible</span></td>
                  <td className="p-3">3.6L capacity with bottom mounting brackets and M4.5 outlet. Fits standard horizontal frames.</td>
                </tr>
                <tr>
                  <td className="p-3 font-semibold text-white">Fuel Cock / Strainer Valve<br/><span className="text-zinc-400 text-xs">तेल चाबी (Fuel cock)</span></td>
                  <td className="p-3"><code>GE-2067</code></td>
                  <td className="p-3"><span className="text-lime-400 font-medium">Interchangeable</span></td>
                  <td className="p-3"><span className="text-red-400 font-medium">Incompatible</span></td>
                  <td className="p-3">M10x1.25 tank thread with internal sediment bowl and brass mesh filter.</td>
                </tr>
                <tr>
                  <td className="p-3 font-semibold text-white">Ignition Coil Module<br/><span className="text-zinc-400 text-xs">करंट कॉइल (Current coil)</span></td>
                  <td className="p-3"><code>GE-2035</code></td>
                  <td className="p-3"><span className="text-lime-400 font-medium">Interchangeable</span></td>
                  <td className="p-3"><span className="text-red-400 font-medium">Incompatible</span></td>
                  <td className="p-3">58mm bolt hole CTC. Set air gap to 0.35–0.45mm with brass feeler gauge against flywheel magnet.</td>
                </tr>
                <tr>
                  <td className="p-3 font-semibold text-white">Spark Plug (Standard)<br/><span className="text-zinc-400 text-xs">स्पार्क प्लग (Spark plug)</span></td>
                  <td className="p-3"><code>F7TC / BP6ES</code></td>
                  <td className="p-3"><span className="text-lime-400 font-medium">Interchangeable</span></td>
                  <td className="p-3"><span className="text-red-400 font-medium">Incompatible</span></td>
                  <td className="p-3">14mm thread, 19mm reach. Calibrate electrode gap to 0.70–0.80mm. Cannot fit 10mm mini heads.</td>
                </tr>
                <tr>
                  <td className="p-3 font-semibold text-white">Spark Plug Mini (GX35)<br/><span className="text-zinc-400 text-xs">छोटा प्लग (Chhota plug)</span></td>
                  <td className="p-3"><code>CMR5H (NGK)</code></td>
                  <td className="p-3"><span className="text-red-400 font-medium">Incompatible</span></td>
                  <td className="p-3"><span className="text-lime-400 font-medium">Compatible</span></td>
                  <td className="p-3">10mm thread, 12.7mm reach. Calibrate gap to 0.60–0.70mm. Do not overtighten in aluminum casting.</td>
                </tr>
                <tr>
                  <td className="p-3 font-semibold text-white">Cylinder Bore &amp; Block<br/><span className="text-zinc-400 text-xs">इंजन ब्लॉक (Engine block)</span></td>
                  <td className="p-3"><code>GE-2002</code></td>
                  <td className="p-3"><span className="text-amber-400 font-medium">Bore Different (68 vs 70mm)</span></td>
                  <td className="p-3"><span className="text-red-400 font-medium">Incompatible</span></td>
                  <td className="p-3">Incompatible internal dimensions. 168F bore is 68mm (196cc); 170F bore is 70mm (208–212cc).</td>
                </tr>
                <tr>
                  <td className="p-3 font-semibold text-white">Piston Assembly (STD)<br/><span className="text-zinc-400 text-xs">पिस्टन (Piston)</span></td>
                  <td className="p-3"><code>GE-2010</code></td>
                  <td className="p-3"><span className="text-red-400 font-medium">Incompatible</span></td>
                  <td className="p-3"><span className="text-red-400 font-medium">Incompatible</span></td>
                  <td className="p-3">68mm (168F) vs 70mm (170F). Measure piston crown diameter with vernier caliper before ordering.</td>
                </tr>
                <tr>
                  <td className="p-3 font-semibold text-white">Piston Ring Set (STD)<br/><span className="text-zinc-400 text-xs">रिंग सेट (Ring set)</span></td>
                  <td className="p-3"><code>GE-2011</code></td>
                  <td className="p-3"><span className="text-red-400 font-medium">Incompatible</span></td>
                  <td className="p-3"><span className="text-red-400 font-medium">Incompatible</span></td>
                  <td className="p-3">Must match bore exactly (68mm vs 70mm). Stagger ring end gaps at 120° intervals around piston.</td>
                </tr>
                <tr>
                  <td className="p-3 font-semibold text-white">Connecting Rod Assembly<br/><span className="text-zinc-400 text-xs">कनेक्टिंग रॉड (Connecting rod)</span></td>
                  <td className="p-3"><code>GE-2009</code></td>
                  <td className="p-3"><span className="text-amber-400 font-medium">Verify Spec</span></td>
                  <td className="p-3"><span className="text-red-400 font-medium">Incompatible</span></td>
                  <td className="p-3">30mm crankpin journal diameter. 170F connecting rod features reinforced structural ribbing.</td>
                </tr>
                <tr>
                  <td className="p-3 font-semibold text-white">Crankcase Oil Seals<br/><span className="text-zinc-400 text-xs">ऑयल सील (Oil seal)</span></td>
                  <td className="p-3"><code>GE-2058</code></td>
                  <td className="p-3"><span className="text-lime-400 font-medium">Interchangeable</span></td>
                  <td className="p-3"><span className="text-red-400 font-medium">Incompatible</span></td>
                  <td className="p-3">25mm ID x 41.25mm OD x 6mm Width. Dual lip Viton construction fits standard horizontal shafts.</td>
                </tr>
                <tr>
                  <td className="p-3 font-semibold text-white">Cylinder Head Gasket<br/><span className="text-zinc-400 text-xs">हेड पैकिंग (Head packing)</span></td>
                  <td className="p-3"><code>GE-2022</code></td>
                  <td className="p-3"><span className="text-red-400 font-medium">Incompatible</span></td>
                  <td className="p-3"><span className="text-red-400 font-medium">Incompatible</span></td>
                  <td className="p-3">Must match bore diameter. Installing a 68mm gasket on a 70mm block crushes fire ring.</td>
                </tr>
                <tr>
                  <td className="p-3 font-semibold text-white">Complete Gasket Kit<br/><span className="text-zinc-400 text-xs">फुल पैकिंग किट (Full packing kit)</span></td>
                  <td className="p-3"><code>GE-2023</code></td>
                  <td className="p-3"><span className="text-amber-400 font-medium">Partial Overlap</span></td>
                  <td className="p-3"><span className="text-red-400 font-medium">Incompatible</span></td>
                  <td className="p-3">Crankcase, carburetor insulator, and muffler gaskets match; head gasket differs by bore.</td>
                </tr>
                <tr>
                  <td className="p-3 font-semibold text-white">Rocker Arm Assembly<br/><span className="text-zinc-400 text-xs">रॉकर आर्म, चिड़िया (Rocker arm)</span></td>
                  <td className="p-3"><code>GE-2025</code></td>
                  <td className="p-3"><span className="text-lime-400 font-medium">Interchangeable</span></td>
                  <td className="p-3"><span className="text-red-400 font-medium">Incompatible</span></td>
                  <td className="p-3">M8 pivot stud, stamped steel arms. Shared OHV geometry on standard 168F and 170F heads.</td>
                </tr>
                <tr>
                  <td className="p-3 font-semibold text-white">Push Rod Set<br/><span className="text-zinc-400 text-xs">पुश रॉड (Push rod)</span></td>
                  <td className="p-3"><code>GE-2026</code></td>
                  <td className="p-3"><span className="text-lime-400 font-medium">Interchangeable</span></td>
                  <td className="p-3"><span className="text-red-400 font-medium">Incompatible</span></td>
                  <td className="p-3">140mm length hardened steel. Verify straightness on flat reference surface during reassembly.</td>
                </tr>
                <tr>
                  <td className="p-3 font-semibold text-white">Muffler Exhaust Assembly<br/><span className="text-zinc-400 text-xs">साइलेंसर (Silencer)</span></td>
                  <td className="p-3"><code>GE-2052</code></td>
                  <td className="p-3"><span className="text-lime-400 font-medium">Interchangeable</span></td>
                  <td className="p-3"><span className="text-red-400 font-medium">Incompatible</span></td>
                  <td className="p-3">45mm stud CTC with side exhaust port. Standard low-noise box muffler fits both engines.</td>
                </tr>
                <tr>
                  <td className="p-3 font-semibold text-white">Centrifugal Clutch 78mm<br/><span className="text-zinc-400 text-xs">क्लच शू (Clutch shoe)</span></td>
                  <td className="p-3"><code>SP-024 / P5235</code></td>
                  <td className="p-3"><span className="text-red-400 font-medium">Incompatible</span></td>
                  <td className="p-3"><span className="text-lime-400 font-medium">Compatible</span></td>
                  <td className="p-3">78mm shoe OD, 54mm bolt CTC. Aluminum clutch shoes with central tension spring for GX35 trimmers.</td>
                </tr>
                <tr>
                  <td className="p-3 font-semibold text-white">Drive Shaft Outer Tube<br/><span className="text-zinc-400 text-xs">28mm डंडा (Outer pipe)</span></td>
                  <td className="p-3"><code>SP-028</code></td>
                  <td className="p-3"><span className="text-red-400 font-medium">Incompatible</span></td>
                  <td className="p-3"><span className="text-lime-400 font-medium">Compatible</span></td>
                  <td className="p-3">28mm OD aluminum pipe. Heavy-duty 4-stroke standard; measure with caliper to avoid 26mm mismatch.</td>
                </tr>
                <tr>
                  <td className="p-3 font-semibold text-white">Inner Drive Shaft Core<br/><span className="text-zinc-400 text-xs">9-दांतेदार शाफ्ट (9T shaft)</span></td>
                  <td className="p-3"><code>SP-029</code></td>
                  <td className="p-3"><span className="text-red-400 font-medium">Incompatible</span></td>
                  <td className="p-3"><span className="text-lime-400 font-medium">Compatible</span></td>
                  <td className="p-3">8mm solid steel, 9-spline (9T). Count spline teeth before ordering; budget trimmers use 7T or square.</td>
                </tr>
                <tr>
                  <td className="p-3 font-semibold text-white">Gearcase Head 28mm<br/><span className="text-zinc-400 text-xs">गियर हेड (Gear head)</span></td>
                  <td className="p-3"><code>SP-015</code></td>
                  <td className="p-3"><span className="text-red-400 font-medium">Incompatible</span></td>
                  <td className="p-3"><span className="text-lime-400 font-medium">Compatible</span></td>
                  <td className="p-3">28mm clamp, 9T spline, M10x1.25 LHT arbor. Bevel gear assembly with grease port for brush cutters.</td>
                </tr>
                <tr>
                  <td className="p-3 font-semibold text-white">Oil Alert Float Switch<br/><span className="text-zinc-400 text-xs">ऑयल सेंसर (Oil sensor)</span></td>
                  <td className="p-3"><code>GE-2038</code></td>
                  <td className="p-3"><span className="text-lime-400 font-medium">Interchangeable</span></td>
                  <td className="p-3"><span className="text-red-400 font-medium">Incompatible</span></td>
                  <td className="p-3">Crankcase low-oil cutoff sensor unit shutting off ignition when oil falls below 0.35L threshold.</td>
                </tr>
                <tr>
                  <td className="p-3 font-semibold text-white">Throttle Cable &amp; Lever<br/><span className="text-zinc-400 text-xs">एक्सीलेटर मुट्ठा (Throttle lever)</span></td>
                  <td className="p-3"><code>SP-026</code></td>
                  <td className="p-3"><span className="text-red-400 font-medium">Incompatible</span></td>
                  <td className="p-3"><span className="text-lime-400 font-medium">Compatible</span></td>
                  <td className="p-3">19mm handlebar clamp with dual safety trigger and integrated run/stop toggle switch.</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Section 3: Measurement Protocols */}
        <section id="measurement-protocols" className="space-y-4">
          <h2 className="text-2xl font-bold text-white font-display border-b border-zinc-800 pb-2">
            3. Step-by-Step Measurement Protocols for Mechanics
          </h2>
          <p className="text-zinc-300 text-sm leading-relaxed">
            To ensure zero return friction and prevent order mismatches, follow these standard workshop measurement steps prior to requesting quotes:
          </p>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 text-sm">
            <div className="p-4 rounded-lg border border-zinc-800 bg-zinc-900/40 space-y-2">
              <div className="font-bold text-lime-400">Step 1: Cylinder Bore Diameter</div>
              <p className="text-zinc-300 text-xs">
                Measure cylinder bore or piston crown with a vernier caliper. 68.0mm indicates 168F (196cc); 70.0mm indicates 170F (208–212cc).
              </p>
            </div>
            <div className="p-4 rounded-lg border border-zinc-800 bg-zinc-900/40 space-y-2">
              <div className="font-bold text-lime-400">Step 2: Carburetor Stud Spacing</div>
              <p className="text-zinc-300 text-xs">
                Measure center-to-center (CTC) spacing between the two intake mounting studs. Float-type OHV carbs require 42–43mm CTC; GX35 diaphragm carbs require 31mm CTC.
              </p>
            </div>
            <div className="p-4 rounded-lg border border-zinc-800 bg-zinc-900/40 space-y-2">
              <div className="font-bold text-lime-400">Step 3: Recoil Bolt-Hole Circle</div>
              <p className="text-zinc-300 text-xs">
                Measure adjacent hole pitch on the starter housing. Standard petrol units use a 3-bolt circle spaced at 160mm. Diesel 170F units use a 195–205mm metal shroud.
              </p>
            </div>
            <div className="p-4 rounded-lg border border-zinc-800 bg-zinc-900/40 space-y-2">
              <div className="font-bold text-lime-400">Step 4: Shaft Outer Diameter</div>
              <p className="text-zinc-300 text-xs">
                Clamp caliper jaws around the aluminum guide pipe. Commercial 4-stroke brush cutters use 28mm outer diameter; 2-stroke trimmers frequently use 26mm.
              </p>
            </div>
            <div className="p-4 rounded-lg border border-zinc-800 bg-zinc-900/40 space-y-2">
              <div className="font-bold text-lime-400">Step 5: Inner Shaft Spline Teeth</div>
              <p className="text-zinc-300 text-xs">
                Slide off the gearbox head and count the raised teeth on the tip of the solid drive shaft. Count carefully between 7-tooth, 9-tooth, and square drive cores.
              </p>
            </div>
            <div className="p-4 rounded-lg border border-zinc-800 bg-zinc-900/40 space-y-2">
              <div className="font-bold text-lime-400">Step 6: PTO Shaft &amp; Output Keyway</div>
              <p className="text-zinc-300 text-xs">
                Measure engine output shaft diameter. Standard tiller PTO shafts are 19.05mm (3/4") or 20mm with rectangular keyways; direct-coupling weeders use splined outputs.
              </p>
            </div>
          </div>
        </section>

        {/* Section 4: Diagnostics */}
        <section id="diagnostic-troubleshooting" className="space-y-4">
          <h2 className="text-2xl font-bold text-white font-display border-b border-zinc-800 pb-2">
            4. Field Diagnostic &amp; Troubleshooting Guide
          </h2>
          <p className="text-zinc-300 text-sm leading-relaxed">
            Common symptoms encountered during seasonal maintenance in Indian agricultural workshops:
          </p>

          <div className="overflow-x-auto my-6 border border-zinc-800 rounded-lg" role="region" aria-label="Diagnostic Troubleshooting Guide" tabIndex={0}>
            <table className="w-full text-left text-xs sm:text-sm border-collapse">
              <thead className="bg-zinc-800 text-zinc-200">
                <tr>
                  <th scope="col" className="p-3 border-b border-zinc-700">Observed Symptom</th>
                  <th scope="col" className="p-3 border-b border-zinc-700">Root Cause</th>
                  <th scope="col" className="p-3 border-b border-zinc-700">Corrective Action &amp; Parts Needed</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-zinc-800 text-zinc-300">
                <tr>
                  <td className="p-3 font-semibold text-white">Dense bluish smoke under throttle</td>
                  <td className="p-3">Worn piston rings or leaking valve stem seals burning crankcase oil.</td>
                  <td className="p-3">Inspect cylinder wall for scoring; replace STD piston rings (GE-2011) or valve stem seals.</td>
                </tr>
                <tr>
                  <td className="p-3 font-semibold text-white">Backfiring through carburetor intake</td>
                  <td className="p-3">Lean fuel mixture, sticking intake valve, or sheared flywheel woodruff key.</td>
                  <td className="p-3">Clean main jet; check valve clearance (0.15mm intake); inspect flywheel key timing.</td>
                </tr>
                <tr>
                  <td className="p-3 font-semibold text-white">Engine stalls when tines engage soil</td>
                  <td className="p-3">Clogged main carburetor jet, governor arm slip, or fouled oil-bath air filter.</td>
                  <td className="p-3">Clean carburetor jet (GE-2041); recalibrate governor linkage; wash oil-bath foam in clean diesel.</td>
                </tr>
                <tr>
                  <td className="p-3 font-semibold text-white">Recoil rope extremely hard to pull</td>
                  <td className="p-3">Excessive cylinder carbon, hydrolock (fuel/oil in bore), or camshaft decompressor failure.</td>
                  <td className="p-3">Remove spark plug and inspect for liquid in cylinder; verify camshaft decompressor spring.</td>
                </tr>
                <tr>
                  <td className="p-3 font-semibold text-white">Recoil rope pulls freely without engaging</td>
                  <td className="p-3">Broken recoil starter pawl spring or rounded starter ratchet cup edges.</td>
                  <td className="p-3">Replace recoil starter assembly (GE-2053) and starter cup (GE-2055).</td>
                </tr>
                <tr>
                  <td className="p-3 font-semibold text-white">Severe vibration along trimmer shaft</td>
                  <td className="p-3">Bent inner drive shaft, worn rubber shaft dampers, or unbalanced blade.</td>
                  <td className="p-3">Replace inner 9T steel shaft (SP-029) and verify blade arbor balance.</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Section 5: GX35 Standards */}
        <section id="gx35-brush-cutter-fitment" className="space-y-4">
          <h2 className="text-2xl font-bold text-white font-display border-b border-zinc-800 pb-2">
            5. GX35 4-Stroke Brush Cutter Standards
          </h2>
          <div className="p-5 rounded-lg border border-zinc-800 bg-zinc-900/30 text-zinc-300 text-sm space-y-3">
            <p>
              The Honda-clone GX35 35.8cc mini 4-stroke engine operates under strict operating parameters distinct from 2-stroke trimmers:
            </p>
            <ul className="list-disc pl-5 space-y-1 text-xs sm:text-sm">
              <li><strong>Dedicated Oil Sump:</strong> Holds exactly 100 ml of SAE 10W-30 four-stroke engine oil. <em>Never mix 2T oil into the fuel tank.</em></li>
              <li><strong>Drive Coupling Standard:</strong> Commercial 4-stroke units use a 28mm aluminum outer guide tube with an internal 8mm 9-spline (9T) drive shaft.</li>
              <li><strong>Clutch Mechanism:</strong> Standard 78mm centrifugal clutch shoes engage at 4,200 RPM inside an integrated clutch drum housing.</li>
            </ul>
          </div>
        </section>

        {/* Section 6: Quotation & Intake */}
        <section id="quotation-order-protocol" className="space-y-4">
          <h2 className="text-2xl font-bold text-white font-display border-b border-zinc-800 pb-2">
            6. Parts Verification &amp; Quotation Intake Protocol
          </h2>
          <p className="text-zinc-300 text-sm leading-relaxed">
            KrishiGears operates an on-demand B2B procurement workflow for workshops, dealers, and agricultural machinery contractors. To verify availability and receive an official quotation, share the following details:
          </p>

          <div className="p-5 rounded-lg border border-zinc-800 bg-zinc-900/40 space-y-4">
            <div className="text-sm font-semibold text-white">Required Intake Information:</div>
            <ol className="list-decimal pl-5 space-y-1 text-xs sm:text-sm text-zinc-300">
              <li>Stamped Engine Model &amp; Code (e.g. 168F, 170F, GX35)</li>
              <li>Part Name / OEM Code from Schematics (e.g. Recoil Starter GE-2053, Piston STD GE-2010)</li>
              <li>Physical Dimensions (Bore diameter, shaft outer tube diameter, spline tooth count)</li>
              <li>Photo of Old Defective Part (top view, mounting flanges, bolt hole spacing)</li>
              <li>Destination Delivery PIN Code (for freight logistics calculation)</li>
            </ol>

            <div className="pt-2">
              <a
                href="https://wa.me/916006078815?text=Hello%20KrishiGears%2C%20I%20need%20spare%20parts%20for%20my%20engine%20weeder%2Fbrush%20cutter.%20Here%20are%20my%20details%3A"
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-lime-500 hover:bg-lime-400 text-black font-bold text-sm rounded transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                WhatsApp Technical Verification Desk (+91 60060 78815)
              </a>
            </div>
          </div>
        </section>

        {/* Section 7: FAQs */}
        <section id="frequently-asked-questions" className="space-y-4">
          <h2 className="text-2xl font-bold text-white font-display border-b border-zinc-800 pb-2">
            7. Frequently Asked Field Questions
          </h2>

          <div className="space-y-4 text-sm">
            <div className="p-4 rounded-lg border border-zinc-800 bg-zinc-900/30 space-y-2">
              <div className="font-bold text-white">Q1: Is a 170F recoil starter interchangeable with a 168F power weeder engine?</div>
              <p className="text-zinc-300 text-xs sm:text-sm">
                Yes. Both 168F (196cc / 6.5 HP) and 170F (208cc–212cc / 7.0 HP) petrol engines share an identical 3-bolt recoil starter mounting circle with 160 mm bolt-hole pitch and compatible starter cup engagement. You can install a standard 168F/170F recoil assembly on either petrol engine without bracket modifications. Note that diesel 170F engines use a larger, heavier 195–205 mm metal starter shroud and are not interchangeable.
              </p>
            </div>

            <div className="p-4 rounded-lg border border-zinc-800 bg-zinc-900/30 space-y-2">
              <div className="font-bold text-white">Q2: Can I install a 170F piston in a 168F engine block?</div>
              <p className="text-zinc-300 text-xs sm:text-sm">
                No. A 170F piston cannot be fitted into a standard 168F engine block. The 168F cylinder bore is 68 mm, whereas the 170F cylinder bore is 70 mm. Attempting to force a 70 mm piston or piston rings into an unbored 68 mm cylinder will cause immediate mechanical interference and engine seizure.
              </p>
            </div>

            <div className="p-4 rounded-lg border border-zinc-800 bg-zinc-900/30 space-y-2">
              <div className="font-bold text-white">Q3: What carburetor is compatible with 168F and 170F petrol power weeders?</div>
              <p className="text-zinc-300 text-xs sm:text-sm">
                Both 168F and 170F petrol engines utilize a float-feed fixed-jet carburetor with a 42–43 mm center-to-center mounting stud spacing and manual choke lever. While 170F factory jetting is marginally richer (0.72 mm–0.74 mm main jet vs 0.70 mm on 168F) to account for higher displacement, the physical carburetor bodies and mounting gaskets are directly interchangeable. GX35 engines use a miniature diaphragm primer carburetor that is completely incompatible.
              </p>
            </div>

            <div className="p-4 rounded-lg border border-zinc-800 bg-zinc-900/30 space-y-2">
              <div className="font-bold text-white">Q4: Does the GX35 4-stroke brush cutter require 2T oil mixed in petrol?</div>
              <p className="text-zinc-300 text-xs sm:text-sm">
                No. The GX35 is a genuine 4-stroke overhead cam (OHC) engine with a dedicated internal crankcase oil sump holding approximately 100 ml of 10W-30 engine oil. Only pure unleaded petrol must be poured into the fuel tank. Mixing 2T oil into the petrol will foul the spark plug, carbonize the exhaust valve, and cause severe engine smoking.
              </p>
            </div>

            <div className="p-4 rounded-lg border border-zinc-800 bg-zinc-900/30 space-y-2">
              <div className="font-bold text-white">Q5: How do I determine if my brush cutter uses a 28mm 9-spline or 26mm 7-spline shaft?</div>
              <p className="text-zinc-300 text-xs sm:text-sm">
                To verify shaft fitment, take two physical measurements: first, measure the outside diameter of the aluminum shaft tube using a vernier caliper (commonly 28 mm for commercial 4-stroke machines or 26 mm for lightweight 2-stroke units). Second, loosen the gearcase clamp bolts, slide off the gearcase head, and count the splined teeth at the tip of the solid inner steel drive shaft (typically 9-spline, 7-spline, or square 8 mm drive).
              </p>
            </div>

            <div className="p-4 rounded-lg border border-zinc-800 bg-zinc-900/30 space-y-2">
              <div className="font-bold text-white">Q6: What spark plug gap and heat range should be used for 168F and 170F engines?</div>
              <p className="text-zinc-300 text-xs sm:text-sm">
                168F and 170F petrol engines require an F7TC, F6TC, or NGK BP6ES resistor spark plug with a thread diameter of 14 mm and reach of 19 mm. The electrode gap must be calibrated to between 0.70 mm and 0.80 mm using a wire feeler gauge. For GX35 mini 4-stroke engines, use a compact CMR5H plug (10 mm thread) gapped to 0.60 mm–0.70 mm.
              </p>
            </div>

            <div className="p-4 rounded-lg border border-zinc-800 bg-zinc-900/30 space-y-2">
              <div className="font-bold text-white">Q7: Why does my 170F power weeder engine stall when the rotor tines engage soil?</div>
              <p className="text-zinc-300 text-xs sm:text-sm">
                Stalling under tillage load is commonly caused by three factors: a clogged main carburetor jet restricting fuel flow under governor demand, an incorrectly adjusted governor spring or mechanical governor arm slipping on the governor shaft, or an excessively fouled oil-bath air cleaner suffocating air intake in dusty field conditions.
              </p>
            </div>

            <div className="p-4 rounded-lg border border-zinc-800 bg-zinc-900/30 space-y-2">
              <div className="font-bold text-white">Q8: How does KrishiGears and FarmingTools process spare parts orders and guarantee fitment?</div>
              <p className="text-zinc-300 text-xs sm:text-sm">
                KrishiGears holds no physical stock and procures all spare parts per verified customer order from vetted component suppliers. We do not provide sight-unseen fitment guarantees. To verify compatibility, customers share clear photos of their engine nameplate, old part, and vernier measurements via WhatsApp (+91 60060 78815) for technical verification prior to formal quotation and dispatch.
              </p>
            </div>
          </div>
        </section>

        {/* Hub Footer Navigation */}
        <footer className="pt-8 border-t border-zinc-800 space-y-4">
          <div className="text-sm font-semibold text-white">Related Machinery &amp; Spares Resources:</div>
          <div className="flex flex-wrap gap-4 text-xs sm:text-sm text-lime-400">
            <Link href="/spare-parts" className="hover:underline">All Spare Parts</Link>
            <Link href="/products/category/power-weeder-spare-parts" className="hover:underline">Power Weeder Spares Catalog</Link>
            <Link href="/service" className="hover:underline">Service Support &amp; Repair Routing</Link>
            <Link href="/contact" className="hover:underline">Contact Support Desk</Link>
            <Link href="/dealer-network" className="hover:underline">Dealer Network &amp; Enquiries</Link>
          </div>
        </footer>
      </main>
    </>
  );
}
