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

export default function RoutePage() {
  return <Page />;
}
