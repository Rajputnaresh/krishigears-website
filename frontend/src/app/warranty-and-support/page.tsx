import { Metadata } from 'next';
import Page from "@/pages_temp/Warranty.jsx";
import { WARRANTY_FAQS } from "@/lib/product-specifications.mjs";

export const metadata: Metadata = {
  title: "Machinery Warranty & Spares Policy",
  description: "Review KrishiGears standard 12-month machinery warranty, genuine OEM spare parts dispatch guarantees, technical service helpline, and claim procedures.",
  alternates: {
    canonical: "https://krishigears.com/warranty-and-support",
  },
  openGraph: {
    title: "KrishiGears 12-Month Warranty & Service Policy",
    description: "Our commitment to quality: FMTTI test standards, genuine spare parts, and comprehensive dealer warranty support.",
    url: "https://krishigears.com/warranty-and-support",
    siteName: "KrishiGears",
    images: [{ url: "/images/products/weeder.webp", width: 800, height: 600, alt: "KrishiGears 12-Month Warranty & Service Policy" }],
  },
};

const warrantyBreadcrumbsJsonLd = {
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
      "name": "Warranty & Support",
      "item": "https://krishigears.com/warranty-and-support"
    }
  ]
};

const warrantyFaqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": (WARRANTY_FAQS as Array<{ question: string; answer: string }>).map((faq) => ({
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
        dangerouslySetInnerHTML={{ __html: JSON.stringify(warrantyBreadcrumbsJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(warrantyFaqJsonLd) }}
      />
      <Page />
    </>
  );
}
