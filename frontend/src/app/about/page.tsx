import { Metadata } from 'next';
import Page from "@/pages_temp/About.jsx";

export const metadata: Metadata = {
  title: "About KrishiGears | FMTTI Standard Farm Machinery & B2B Values",
  description: "Learn about KrishiGears: Jaipur-based agricultural machinery enterprise dedicated to farmer dignity, transparent dealer partnerships, and zero-compromise spare parts.",
  alternates: {
    canonical: "https://krishigears.com/about",
  },
  openGraph: {
    title: "About KrishiGears | Standing with Farmers Hamesha",
    description: "Jaipur-based agricultural machinery enterprise dedicated to farmer dignity and certified B2B dealer distribution.",
    url: "https://krishigears.com/about",
    siteName: "KrishiGears",
    images: [{ url: "/logo512.png", width: 512, height: 512, alt: "KrishiGears Brand" }],
  },
};

const aboutJsonLd = {
  "@context": "https://schema.org",
  "@type": "AboutPage",
  "name": "About KrishiGears",
  "description": "Information about KrishiGears, Jaipur-based agricultural machinery brand and B2B supplier.",
  "url": "https://krishigears.com/about"
};

export default function RoutePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(aboutJsonLd) }}
      />
      <Page />
    </>
  );
}
