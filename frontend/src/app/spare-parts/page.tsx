import { Metadata } from 'next';
import Page from "@/pages_temp/SpareParts.jsx";
import { clampDescription } from "@/app/layout";

export const metadata: Metadata = {
  title: "OEM Agricultural Machinery Spare Parts Wholesale Hub",
  description: clampDescription("Direct factory wholesale supply of OEM power weeder, brush cutter, and earth auger spare parts across India. Carburetors, recoil starters, gearboxes, and blades with 24-48h dispatch.", 155),
  alternates: {
    canonical: "https://krishigears.com/spare-parts"
  },
  openGraph: {
    title: "KrishiGears OEM Agricultural Machinery Spare Parts Wholesale Hub",
    description: "Direct factory wholesale supply of OEM power weeder, brush cutter, and earth auger spare parts across India. Carburetors, recoil starters, gearboxes, and blades with 24-48h dispatch.",
    url: "https://krishigears.com/spare-parts",
    siteName: "KrishiGears",
    images: [{ url: "/images/products/weeder.webp", width: 800, height: 600, alt: "KrishiGears OEM Spare Parts" }],
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
