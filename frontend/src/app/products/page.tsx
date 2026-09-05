import { Metadata } from 'next';
import Page from "@/pages_temp/Products.jsx";

export const metadata: Metadata = {
  title: "Commercial Farm Machinery & Spare Parts Catalog (19 Categories) | KrishiGears",
  description: "Browse KrishiGears B2B agricultural machinery: 7HP/9HP/10HP power weeders, power tillers, brush cutters, earth augers, and OEM spare parts with PAN-India dealer dispatch.",
  alternates: {
    canonical: "https://krishigears.com/products",
  },
  openGraph: {
    title: "Commercial Farm Machinery & Genuine Spare Parts Catalog | KrishiGears",
    description: "Wholesale equipment catalog for dealers, FPOs, and institutions across India. Direct factory dispatch with GST billing.",
    url: "https://krishigears.com/products",
    siteName: "KrishiGears",
    images: [{ url: "/images/products/weeder.webp", width: 800, height: 600, alt: "KrishiGears Power Weeder" }],
  },
};

import { PRODUCTS } from "@/data/catalog";

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://krishigears.com" },
    { "@type": "ListItem", "position": 2, "name": "Products", "item": "https://krishigears.com/products" }
  ]
};

const itemListJsonLd = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  "name": "KrishiGears Commercial Farm Machinery & Genuine Spare Parts",
  "description": "FMTTI-tested agricultural power weeders, tillers, and OEM spare parts wholesale catalog",
  "numberOfItems": PRODUCTS.length,
  "itemListElement": PRODUCTS.map((prod, idx) => ({
    "@type": "ListItem",
    "position": idx + 1,
    "name": prod.name,
    "url": `https://krishigears.com/products/${prod.slug}`,
    "image": prod.images?.[0] ? `https://krishigears.com${prod.images[0]}` : "https://krishigears.com/images/products/weeder.webp",
  }))
};

export default function RoutePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListJsonLd) }}
      />
      <Page />
    </>
  );
}
