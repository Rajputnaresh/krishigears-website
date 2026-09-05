import { Metadata } from 'next';
import Page from "@/pages_temp/BulkOrder.jsx";

export const metadata: Metadata = {
  title: "Bulk Orders & Institutional Procurement for FPOs & Contractors | KrishiGears",
  description: "Direct wholesale and institutional quotes for FPOs, corporate farming enterprises, government tenders, and custom hiring centers across India. Tiered volume pricing.",
  alternates: {
    canonical: "https://krishigears.com/bulk-order",
  },
  openGraph: {
    title: "Bulk Farm Machinery Procurement for FPOs & Institutions | KrishiGears",
    description: "Save up to 25% on volume procurement of power weeders and implements with full GST billing.",
    url: "https://krishigears.com/bulk-order",
    siteName: "KrishiGears",
  },
};

export default function RoutePage() {
  return <Page />;
}
