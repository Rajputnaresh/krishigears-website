import { Metadata } from "next";
import Page from "@/pages_temp/DealerState.jsx";

const STATE_NAMES: Record<string, string> = {
  "andhra-pradesh": "Andhra Pradesh",
  "assam": "Assam",
  "bihar": "Bihar",
  "chhattisgarh": "Chhattisgarh",
  "goa": "Goa",
  "gujarat": "Gujarat",
  "haryana": "Haryana",
  "himachal-pradesh": "Himachal Pradesh",
  "jharkhand": "Jharkhand",
  "karnataka": "Karnataka",
  "kerala": "Kerala",
  "madhya-pradesh": "Madhya Pradesh",
  "maharashtra": "Maharashtra",
  "odisha": "Odisha",
  "punjab": "Punjab",
  "rajasthan": "Rajasthan",
  "tamil-nadu": "Tamil Nadu",
  "telangana": "Telangana",
  "uttar-pradesh": "Uttar Pradesh",
  "uttarakhand": "Uttarakhand",
  "west-bengal": "West Bengal",
};

export async function generateMetadata({
  params,
}: {
  params: Promise<{ state: string }>;
}): Promise<Metadata> {
  const { state } = await params;
  const stateSlug = state.toLowerCase();
  const stateName = STATE_NAMES[stateSlug] || state.replace(/-/g, " ").replace(/\b\w/g, (c) => c.toUpperCase());

  return {
    title: `KrishiGears Dealership in ${stateName} | Wholesale Power Weeders & Spares`,
    description: `Become an authorized KrishiGears dealer in ${stateName}. Factory-direct wholesale pricing on 7HP/9HP power weeders, genuine OEM spare parts, protected territory, and DBT subsidy support.`,
    alternates: {
      canonical: `https://krishigears.com/dealer/${stateSlug}`,
    },
    openGraph: {
      title: `KrishiGears Farm Machinery Dealership in ${stateName}`,
      description: `Exclusive territory dealership opportunity for agricultural machinery in ${stateName}. High dealer margins and 48-hour parts dispatch.`,
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
  const stateSlug = state.toLowerCase();
  const stateName = STATE_NAMES[stateSlug] || state.replace(/-/g, " ").replace(/\b\w/g, (c) => c.toUpperCase());

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://krishigears.com" },
      { "@type": "ListItem", "position": 2, "name": "Locations", "item": "https://krishigears.com/locations" },
      { "@type": "ListItem", "position": 3, "name": `${stateName} Dealer Hub`, "item": `https://krishigears.com/dealer/${stateSlug}` }
    ]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <Page />
    </>
  );
}
