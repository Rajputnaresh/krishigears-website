import { Metadata } from 'next';
import Page from "@/pages_temp/Warranty.jsx";

export const metadata: Metadata = {
  title: "Machinery Warranty, OEM Spares Policy & Service Support | KrishiGears",
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

export default function RoutePage() {
  return <Page />;
}
