import { Metadata } from 'next';
import Page from "@/pages_temp/SpareParts.jsx";
import { clampDescription } from "@/lib/seo-metadata";

export const metadata: Metadata = {
  title: "Agricultural Machinery Spare Parts & Fitment Support",
  description: clampDescription("Enquire for power weeder, brush cutter, and earth auger spare parts across India. Model-matched carburetors, recoil starters, gearboxes, and blades procured per order.", 155),
  alternates: {
    canonical: "https://krishigears.com/spare-parts"
  },
  openGraph: {
    title: "KrishiGears Agricultural Machinery Spare Parts & Fitment Support",
    description: "Enquire for power weeder, brush cutter, and earth auger spare parts across India. Model-matched carburetors, recoil starters, gearboxes, and blades procured per order.",
    url: "https://krishigears.com/spare-parts",
    siteName: "KrishiGears",
    images: [{ url: "/images/products/weeder.webp", width: 800, height: 600, alt: "KrishiGears Spare Parts" }],
  }
};

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
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
    }
  ]
};

export default function SparePartsRootPage() {
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
