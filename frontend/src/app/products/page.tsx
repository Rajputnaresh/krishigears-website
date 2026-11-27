import { Metadata } from 'next';
import Page from "@/pages_temp/Products.jsx";
import equipmentEnquiries from "@/data/equipmentEnquiries.json";
import Link from "next/link";

export const metadata: Metadata = {
  title: "B2B Farm Machinery & Spares Catalog",
  description: "Browse KrishiGears B2B machinery: 7HP/9HP/10HP power weeders, power tillers, brush cutters, earth augers and OEM spare parts with PAN-India dispatch.",
  alternates: {
    canonical: "https://krishigears.com/products",
  },
  openGraph: {
    title: "Commercial Farm Machinery & Genuine Spare Parts Catalog",
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
    "image": prod.images?.[0] ? (prod.images[0].startsWith("http") ? prod.images[0] : `https://krishigears.com${prod.images[0]}`) : "https://krishigears.com/images/products/weeder.webp",
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
      <nav aria-labelledby="equipment-enquiries" className="mx-auto max-w-4xl px-5 py-10">
        <h2 id="equipment-enquiries" className="text-2xl font-semibold">Specialist equipment enquiries</h2>
        <ul className="mt-3 grid gap-2 sm:grid-cols-2">
          <li><Link className="inline-flex min-h-11 items-center underline" href="/products/category/power-weeders#back-rotary">Rear-rotary power weeders</Link></li>
          {equipmentEnquiries.map(({ slug, name }) => (
            <li key={slug}><Link className="inline-flex min-h-11 items-center underline" href={`/products/category/${slug}`}>{name}</Link></li>
          ))}
        </ul>
      </nav>
    </>
  );
}
