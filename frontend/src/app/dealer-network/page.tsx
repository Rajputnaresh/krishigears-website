import { Metadata } from 'next';
import Page from "@/pages_temp/DealerNetwork.jsx";

export const metadata: Metadata = {
  title: "Dealer Enquiries & Supply Availability",
  description: "Enquire about machinery, parts and dealership. Procured per sale; confirm supplier availability, delivery coverage and dispatch timing for your PIN code.",
  alternates: {
    canonical: "https://krishigears.com/dealer-network",
  },
  openGraph: {
    title: "Dealer Enquiries & Supply Availability",
    description: "KrishiGears holds no stock. Machinery and parts are procured per sale. Confirm availability, delivery coverage and dispatch timing before ordering.",
    url: "https://krishigears.com/dealer-network",
    siteName: "KrishiGears",
    images: [{ url: "/images/products/weeder.webp", width: 800, height: 600, alt: "KrishiGears dealer and supply enquiries" }],
  },
};

const dealerNetworkJsonLd = {
  "@context": "https://schema.org",
  "@graph": [
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
          "name": "Dealer Network",
          "item": "https://krishigears.com/dealer-network"
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
        dangerouslySetInnerHTML={{ __html: JSON.stringify(dealerNetworkJsonLd) }}
      />
      <Page />
    </>
  );
}
