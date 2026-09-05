import { Metadata } from 'next';
import Page from "@/pages_temp/Locations.jsx";

export const metadata: Metadata = {
  title: "Agricultural Machinery District Directory (740 Districts) | KrishiGears",
  description: "Browse KrishiGears authorized dealership availability, localized soil type recommendations, and state DBT subsidy links across all 740 Indian districts.",
  alternates: {
    canonical: "https://krishigears.com/locations",
  },
  openGraph: {
    title: "All-India Farm Machinery District Directory (740 Hubs) | KrishiGears",
    description: "Search machinery specifications, compatible crops, and authorized service centers in your district.",
    url: "https://krishigears.com/locations",
    siteName: "KrishiGears",
  },
};

export default function RoutePage() {
  return <Page />;
}
