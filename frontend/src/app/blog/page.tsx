import { Metadata } from 'next';
import Page from "@/pages_temp/Blog.jsx";

export const metadata: Metadata = {
  title: "Agricultural Machinery Troubleshooting & Field Service Hub | KrishiGears",
  description: "Access 100 practical troubleshooting and service guides for power weeders, diesel engines, carburetors, brush cutters, and dealership management in India.",
  alternates: {
    canonical: "https://krishigears.com/blog",
  },
  openGraph: {
    title: "KrishiGears Field Service & Farmer Knowledge Hub",
    description: "Expert mechanical repair guides, engine maintenance tolerances, and field agronomy for Indian agricultural machinery.",
    url: "https://krishigears.com/blog",
    siteName: "KrishiGears",
  },
};

const blogJsonLd = {
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  "name": "KrishiGears Engineering & Service Hub",
  "description": "Comprehensive troubleshooting guides and field maintenance specifications for Indian farmers and machinery dealers.",
  "url": "https://krishigears.com/blog"
};

export default function RoutePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(blogJsonLd) }}
      />
      <Page />
    </>
  );
}
