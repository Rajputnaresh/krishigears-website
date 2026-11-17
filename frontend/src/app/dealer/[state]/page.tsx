import { Metadata } from "next";
import Page from "@/pages_temp/DealerState.jsx";
import { getDistrictsForState } from "@/lib/dealer-districts";
import { getStateAgronomy } from "@/data/stateAgronomy";
import { clampDescription } from "@/lib/seo-metadata";

const STATE_NAMES: Record<string, string> = {
  "andhra-pradesh": "Andhra Pradesh",
  "arunachal-pradesh": "Arunachal Pradesh",
  "assam": "Assam",
  "bihar": "Bihar",
  "chandigarh": "Chandigarh",
  "chandigarh-ut": "Chandigarh (UT)",
  "chhattisgarh": "Chhattisgarh",
  "dadra-and-nagar-haveli": "Dadra and Nagar Haveli",
  "dadra-and-nagar-haveli-ut": "Dadra and Nagar Haveli (UT)",
  "daman-and-diu": "Daman and Diu",
  "daman-and-diu-ut": "Daman and Diu (UT)",
  "dadra-and-nagar-haveli-and-daman-and-diu": "Dadra and Nagar Haveli and Daman and Diu (UT)",
  "dadra-and-nagar-haveli-and-daman-and-diu-ut": "Dadra and Nagar Haveli and Daman and Diu (UT)",
  "delhi": "Delhi",
  "delhi-nct": "Delhi (NCT)",
  "goa": "Goa",
  "gujarat": "Gujarat",
  "haryana": "Haryana",
  "himachal-pradesh": "Himachal Pradesh",
  "jammu-and-kashmir": "Jammu and Kashmir",
  "jharkhand": "Jharkhand",
  "karnataka": "Karnataka",
  "kerala": "Kerala",
  "ladakh": "Ladakh (UT)",
  "ladakh-ut": "Ladakh (UT)",
  "lakshadweep": "Lakshadweep",
  "lakshadweep-ut": "Lakshadweep (UT)",
  "madhya-pradesh": "Madhya Pradesh",
  "maharashtra": "Maharashtra",
  "manipur": "Manipur",
  "meghalaya": "Meghalaya",
  "mizoram": "Mizoram",
  "nagaland": "Nagaland",
  "odisha": "Odisha",
  "puducherry": "Puducherry",
  "puducherry-ut": "Puducherry (UT)",
  "punjab": "Punjab",
  "rajasthan": "Rajasthan",
  "sikkim": "Sikkim",
  "tamil-nadu": "Tamil Nadu",
  "telangana": "Telangana",
  "tripura": "Tripura",
  "uttar-pradesh": "Uttar Pradesh",
  "uttarakhand": "Uttarakhand",
  "west-bengal": "West Bengal",
};

export async function generateStaticParams() {
  return Object.keys(STATE_NAMES).map((state) => ({ state }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ state: string }>;
}): Promise<Metadata> {
  const { state } = await params;
  const decoded = decodeURIComponent(state);
  const stateSlug = decoded.replace(/%26/g, "and").replace(/&/g, "and").replace(/[^a-zA-Z0-9]+/g, "-").replace(/^-|-$/g, "").toLowerCase();
  const stateName = STATE_NAMES[stateSlug] || stateSlug.replace(/-/g, " ").replace(/\b\w/g, (c) => c.toUpperCase());
  const agronomy = getStateAgronomy(stateSlug);

  return {
    title: `Dealership in ${stateName} | Wholesale Power Weeders & Spares`,
    description: clampDescription(
      `Become an authorized KrishiGears dealer in ${stateName}. Factory-direct wholesale pricing on 7HP/9HP power weeders, genuine OEM spare parts, protected territory, and ${agronomy.subsidy_scheme} DBT support.`,
      155
    ),
    alternates: {
      canonical: `https://krishigears.com/dealer/${stateSlug}`,
    },
    openGraph: {
      title: `Farm Machinery Dealership in ${stateName}`,
      description: clampDescription(
        `Exclusive territory dealership opportunity for agricultural machinery in ${stateName}. High dealer margins, ${agronomy.soil} fitment, and order-per-sale spares procurement support.`,
        155
      ),
      url: `https://krishigears.com/dealer/${stateSlug}`,
      siteName: "KrishiGears",
      images: [{ url: "/images/products/weeder.webp", width: 800, height: 600, alt: `KrishiGears ${stateName}` }],
    },
  };
}

export default async function DealerStatePage({
  params,
}: {
  params: Promise<{ state: string }>;
}) {
  const { state } = await params;
  const decoded = decodeURIComponent(state);
  const stateSlug = decoded.replace(/%26/g, "and").replace(/&/g, "and").replace(/[^a-zA-Z0-9]+/g, "-").replace(/^-|-$/g, "").toLowerCase();
  const stateName = STATE_NAMES[stateSlug] || stateSlug.replace(/-/g, " ").replace(/\b\w/g, (c) => c.toUpperCase());
  const districts = getDistrictsForState(stateSlug);
  const agronomy = getStateAgronomy(stateSlug);

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://krishigears.com" },
      { "@type": "ListItem", "position": 2, "name": "Locations", "item": "https://krishigears.com/locations" },
      { "@type": "ListItem", "position": 3, "name": `${stateName} Dealer Hub`, "item": `https://krishigears.com/dealer/${stateSlug}` }
    ]
  };

  const districtItemListJsonLd = districts.length > 0 ? {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "name": `Authorized KrishiGears Dealership & Supply Points in ${stateName}`,
    "description": `District-by-district wholesale agricultural machinery and spare parts supply points across ${stateName}.`,
    "numberOfItems": districts.length,
    "itemListElement": districts.map((d, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": `${d.city} Power Weeder & Spares Supply Hub`,
      "url": `https://krishigears.com/power-weeders-in-${d.slug}`
    }))
  } : null;

  const stateFaqJsonLd = agronomy.faqs && agronomy.faqs.length > 0 ? {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": agronomy.faqs.map((f) => ({
      "@type": "Question",
      "name": f.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": f.answer
      }
    }))
  } : null;

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      {districtItemListJsonLd && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(districtItemListJsonLd) }}
        />
      )}
      {stateFaqJsonLd && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(stateFaqJsonLd) }}
        />
      )}
      <Page districts={districts} stateSlug={stateSlug} stateName={stateName} agronomy={agronomy} />
    </>
  );
}

