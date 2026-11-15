import { Metadata } from 'next';
import Page from "@/pages_temp/Contact.jsx";

export const metadata: Metadata = {
  title: "Contact Jaipur HQ & Dealer Support Desk",
  description: "B2B machinery quotes, dealership onboarding and spare parts dispatch. Phone +91 60060 78815, GSTIN 08AANCK2216L1ZA.",
  alternates: {
    canonical: "https://krishigears.com/contact",
  },
  openGraph: {
    title: "Contact KrishiGears | Jaipur HQ & B2B Wholesale Support",
    description: "Contact our sales and support desk for supplier-confirmed machinery quotations, spare parts enquiries and repair routing.",
    url: "https://krishigears.com/contact",
    siteName: "KrishiGears",
    images: [{ url: "/logo512.png", width: 512, height: 512, alt: "KrishiGears Contact" }],
  },
};

const contactJsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": "https://krishigears.com/#organization",
      "name": "KRISHIGEARS INDIA PRIVATE LIMITED",
      "legalName": "KRISHIGEARS INDIA PRIVATE LIMITED",
      "taxID": "08AANCK2216L1ZA",
      "image": "https://krishigears.com/logo512.png",
      "url": "https://krishigears.com",
      "telephone": "+916006078815",
      "email": "sales@krishigears.com",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Flat No.: T5-202, Mahima Shubh Nilay Apartments, Jaisinghpura, Ajmer Road",
        "addressLocality": "Jaipur",
        "addressRegion": "Rajasthan",
        "postalCode": "302026",
        "addressCountry": "IN"
      },
      "areaServed": "IN"
    },
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
          "name": "Contact",
          "item": "https://krishigears.com/contact"
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
        dangerouslySetInnerHTML={{ __html: JSON.stringify(contactJsonLd) }}
      />
      <Page />
    </>
  );
}
