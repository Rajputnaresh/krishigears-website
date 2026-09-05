import { Metadata } from 'next';
import Page from "@/pages_temp/BecomeDealer.jsx";

export const metadata: Metadata = {
  title: "Apply for Agricultural Machinery Dealership (PAN India) | KrishiGears",
  description: "Become an authorized KrishiGears dealer in your district. Protected territory margins, 24-hour spare parts dispatch, direct factory pricing, and full DBT subsidy documentation support.",
  alternates: {
    canonical: "https://krishigears.com/become-a-dealer",
  },
  openGraph: {
    title: "Apply for KrishiGears Dealership | High Margins & Territory Exclusivity",
    description: "Join India's fastest-growing agricultural machinery network. Complete our quick dealer onboarding form today.",
    url: "https://krishigears.com/become-a-dealer",
    siteName: "KrishiGears",
    images: [{ url: "/images/products/weeder.webp", width: 800, height: 600, alt: "KrishiGears Dealership" }],
  },
};

export default function RoutePage() {
  return <Page />;
}
