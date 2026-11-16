import { Metadata } from 'next';
import Page from "@/pages_temp/BulkOrder.jsx";
import { BULK_ORDER_FAQS } from "@/lib/product-specifications.mjs";

export const metadata: Metadata = {
  title: "Bulk Farm Machinery & Spare Parts Wholesale",
  description: "Wholesale power weeders, tillers & OEM spare parts for dealers, repair shops, FPOs and government tenders. GST billing from Jaipur.",
  keywords: [
    "power weeder spare parts wholesale",
    "agricultural machinery spare parts suppliers",
    "power tiller spare parts price list",
    "power weeder spare parts price list pdf",
    "brush cutter spare parts wholesale",
    "bulk agricultural machinery supply",
    "fpo farm machinery procurement"
  ],
  alternates: {
    canonical: "https://krishigears.com/bulk-order",
  },
  openGraph: {
    title: "Bulk Farm Machinery & Spare Parts Wholesale Supply",
    description: "Direct factory pricing on power weeders and wholesale spare parts for dealers, repair shops & FPOs. PAN India dispatch.",
    url: "https://krishigears.com/bulk-order",
    siteName: "KrishiGears",
    images: [{ url: "/images/products/weeder.webp", width: 800, height: 600, alt: "KrishiGears Bulk Order & Wholesale Spares" }],
  },
};

const bulkOrderBreadcrumbs = {
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
      "name": "Bulk Orders",
      "item": "https://krishigears.com/bulk-order"
    }
  ]
};

const bulkOrderFaqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": (BULK_ORDER_FAQS as Array<{ question: string; answer: string }>).map((faq) => ({
    "@type": "Question",
    "name": faq.question,
    "acceptedAnswer": {
      "@type": "Answer",
      "text": faq.answer
    }
  }))
};

export default function RoutePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(bulkOrderBreadcrumbs) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(bulkOrderFaqJsonLd) }}
      />
      <Page />
    </>
  );
}
