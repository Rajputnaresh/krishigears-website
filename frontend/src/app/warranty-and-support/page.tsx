import { Metadata } from 'next';
import Page from "@/pages_temp/Warranty.jsx";

export const metadata: Metadata = {
  title: "Machinery Warranty, OEM Spares Policy & Service Support",
  description: "Review KrishiGears standard 12-month machinery warranty, genuine OEM spare parts dispatch guarantees, technical service helpline, and claim procedures.",
  alternates: {
    canonical: "https://krishigears.com/warranty-and-support",
  },
  openGraph: {
    title: "KrishiGears 12-Month Warranty & Service Policy",
    description: "Our commitment to quality: FMTTI test standards, genuine spare parts, and comprehensive dealer warranty support.",
    url: "https://krishigears.com/warranty-and-support",
    siteName: "KrishiGears",
  },
};

const warrantyFaqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What warranty does KrishiGears offer on its farm machinery?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "All KrishiGears machines come with the manufacturer standard warranty — typically 6 to 12 months depending on the product category. Warranty covers manufacturing defects; consumables, blades, belts, and normal wear-and-tear are excluded."
      }
    },
    {
      "@type": "Question",
      "name": "How do farmers and dealers claim a warranty repair?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Contact our technical support helpline or WhatsApp (+91 60060 78815) with your GST invoice and a short diagnostic video showing the issue. Our engineering team arranges immediate spare parts dispatch or guides you to the nearest authorized technician."
      }
    },
    {
      "@type": "Question",
      "name": "Does KrishiGears dispatch spare parts across India?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. 100% genuine OEM spare parts are dispatched from our Jaipur central depot within 24 to 48 hours via express surface cargo or Speed Post to every rural PIN code in India."
      }
    },
    {
      "@type": "Question",
      "name": "Are KrishiGears products eligible for state DBT agriculture subsidies?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. Key machines are FMTTI / SRFMTTI approved and eligible for 40% to 50% DBT subsidies under SMAM and state agriculture department portals across Rajasthan, Maharashtra, MP, UP, Bihar, and Karnataka."
      }
    },
    {
      "@type": "Question",
      "name": "Does KrishiGears supply to Farmer Producer Organizations (FPOs) and government tenders?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. We serve FPOs, custom hiring centers (CHCs), contractors, and agri-input retail dealers with institutional wholesale pricing, formal quotations, and compliant GST invoices."
      }
    }
  ]
};

export default function RoutePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(warrantyFaqJsonLd) }}
      />
      <Page />
    </>
  );
}
