import { Metadata } from 'next';
import Page from "@/pages_temp/BulkOrder.jsx";

export const metadata: Metadata = {
  title: "Bulk Farm Machinery & Spare Parts Wholesale Supply | KrishiGears",
  description: "Wholesale procurement of power weeders, tillers, brush cutters & OEM spare parts for dealers, repair shops, FPOs & government tenders. Tiered wholesale pricing with GST billing from Jaipur.",
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
    title: "Bulk Farm Machinery & Spare Parts Wholesale Supply | KrishiGears",
    description: "Direct factory pricing on power weeders and wholesale spare parts for dealers, repair shops & FPOs. PAN India dispatch.",
    url: "https://krishigears.com/bulk-order",
    siteName: "KrishiGears",
  },
};

const bulkOrderFaqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "How can machinery repair shops and dealers get the power weeder spare parts wholesale price list?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Fill out the bulk order form or contact our Jaipur wholesale desk on WhatsApp at +91 60060 78815. We share the comprehensive 2026 Excel / PDF wholesale catalog covering 170F, 177F, 173F, and 186F spare parts."
      }
    },
    {
      "@type": "Question",
      "name": "What is the Minimum Order Quantity (MOQ) for wholesale spare parts?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "KrishiGears supports small workshops and retailers with mixed-carton orders starting at just ₹15,000. You can mix carburetors, recoil starters, Viton oil seals, piston rings, and tiller blades."
      }
    },
    {
      "@type": "Question",
      "name": "Are KrishiGears OEM spare parts compatible with other brand machines?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, our spare parts are built to universal standard engine and transmission tolerances, ensuring 100% fitment compatibility with Royal Kissan, Neptune, Balwaan, and Honda-clone agricultural weeders."
      }
    },
    {
      "@type": "Question",
      "name": "Do you provide GST invoices for Input Tax Credit (ITC)?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. Every shipment includes a 100% compliant GST tax invoice (GSTIN: 08EQLPD7160R1Z2) and transport e-way bill for immediate input credit claim."
      }
    }
  ]
};

export default function RoutePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(bulkOrderFaqJsonLd) }}
      />
      <Page />
    </>
  );
}
