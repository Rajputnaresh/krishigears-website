import { Metadata } from 'next';
import Page from "@/pages_temp/Locations.jsx";

export const metadata: Metadata = {
  title: "Agricultural Machinery District Directory (740 Districts)",
  description: "Browse KrishiGears authorized dealership availability, localized soil type recommendations, and state DBT subsidy links across all 740 Indian districts.",
  alternates: {
    canonical: "https://krishigears.com/locations",
  },
  openGraph: {
    title: "All-India Farm Machinery District Directory (740 Hubs)",
    description: "Search machinery specifications, compatible crops, and authorized service centers in your district.",
    url: "https://krishigears.com/locations",
    siteName: "KrishiGears",
    images: [{ url: "/images/products/weeder.webp", width: 800, height: 600, alt: "KrishiGears All-India Machinery Directory" }],
  },
};

const locationsJsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "CollectionPage",
      "@id": "https://krishigears.com/locations#webpage",
      "name": "All-India Farm Machinery District Directory (740 Hubs)",
      "description": "Directory of KrishiGears power weeder supply hubs, dealer availability, and soil agronomy across 740 districts in India.",
      "url": "https://krishigears.com/locations"
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
          "name": "District Directory",
          "item": "https://krishigears.com/locations"
        }
      ]
    }
  ]
};

export default function RoutePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(locationsJsonLd) }}
      />
      <Page />
    </>
  );
}
