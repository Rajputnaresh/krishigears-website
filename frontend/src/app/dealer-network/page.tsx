import { Metadata } from 'next';
import Page from "@/pages_temp/DealerNetwork.jsx";

export const metadata: Metadata = {
  title: "PAN-India Agricultural Machinery Dealer Network",
  description: "Find authorized KrishiGears dealers and service stockists across Rajasthan, Maharashtra, Karnataka, Gujarat, MP, UP and Bihar.",
  alternates: {
    canonical: "https://krishigears.com/dealer-network",
  },
  openGraph: {
    title: "Authorized KrishiGears Dealer & Service Network Across India",
    description: "Locate certified KrishiGears machinery distributors and service partners in your state.",
    url: "https://krishigears.com/dealer-network",
    siteName: "KrishiGears",
    images: [{ url: "/images/products/weeder.webp", width: 800, height: 600, alt: "Authorized KrishiGears Dealer Network" }],
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
