import { Metadata } from 'next';
import Page from "@/pages_temp/BecomeDealer.jsx";
import { DEALER_FAQS } from "@/lib/product-specifications.mjs";

export const metadata: Metadata = {
  title: "Power Weeder Dealership Kaise Le: PAN India",
  description: "Apply for a KrishiGears power weeder dealership. 15%-25% machine margins, up to 35% on OEM spares, zero dead-stock on-demand MOQ from 2 units & 24-48hr spare parts dispatch from Jaipur.",
  keywords: [
    "power weeder dealership kaise le",
    "power weeder dealership",
    "krishi yantra dealership",
    "agricultural machinery wholesale",
    "power weeder manufacturer india",
    "7hp power weeder price wholesale",
    "power weeder attachments wholesale",
    "krishi yantra subsidy portal"
  ],
  alternates: {
    canonical: "https://krishigears.com/become-a-dealer",
  },
  openGraph: {
    title: "Power Weeder Dealership Kaise Le",
    description: "Start a certified farm machinery dealership. 15-25% machine margins, up to 35% on OEM spares, protected territory & 24-48 hour express spare parts dispatch from Jaipur.",
    url: "https://krishigears.com/become-a-dealer",
    siteName: "KrishiGears",
    images: [{ url: "/images/products/weeder.webp", width: 800, height: 600, alt: "KrishiGears Dealership" }],
  },
};

const becomeDealerBreadcrumbJsonLd = {
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
      "name": "Become a Dealer",
      "item": "https://krishigears.com/become-a-dealer"
    }
  ]
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": (DEALER_FAQS as Array<{ question: string; answer: string }>).map((faq) => ({
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
        dangerouslySetInnerHTML={{ __html: JSON.stringify(becomeDealerBreadcrumbJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <Page />
    </>
  );
}
