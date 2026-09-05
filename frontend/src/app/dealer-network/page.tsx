import { Metadata } from 'next';
import Page from "@/pages_temp/DealerNetwork.jsx";

export const metadata: Metadata = {
  title: "PAN-India Agricultural Machinery Dealer Network | KrishiGears",
  description: "Find authorized KrishiGears dealers and service stockists across Rajasthan, Maharashtra, Karnataka, Gujarat, MP, UP, and Bihar. Genuine machinery and immediate parts.",
  alternates: {
    canonical: "https://krishigears.com/dealer-network",
  },
  openGraph: {
    title: "Authorized KrishiGears Dealer & Service Network Across India",
    description: "Locate certified KrishiGears machinery distributors and service partners in your state.",
    url: "https://krishigears.com/dealer-network",
    siteName: "KrishiGears",
  },
};

export default function RoutePage() {
  return <Page />;
}
