import { Metadata } from 'next';
import Page from "@/pages_temp/Contact.jsx";

export const metadata: Metadata = {
  title: "Contact KrishiGears | Jaipur HQ, Wholesale Desk & Dealer Support",
  description: "Contact KrishiGears Jaipur HQ for B2B machinery quotes, dealership onboarding, and genuine spare parts dispatch. Phone: +91 60060 78815. GSTIN: 08EQLPD7160R1Z2.",
  alternates: {
    canonical: "https://krishigears.com/contact",
  },
  openGraph: {
    title: "Contact KrishiGears | Jaipur HQ & B2B Wholesale Support",
    description: "Connect directly with our machinery sales desk and service engineers in Jaipur. Fast quotation and PAN India dispatch.",
    url: "https://krishigears.com/contact",
    siteName: "KrishiGears",
    images: [{ url: "/logo512.png", width: 512, height: 512, alt: "KrishiGears Contact" }],
  },
};

const contactJsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "KrishiGears",
  "legalName": "KrishiGears",
  "taxID": "08EQLPD7160R1Z2",
  "image": "https://krishigears.com/logo512.png",
  "url": "https://krishigears.com",
  "telephone": "+916006078815",
  "email": "sales@krishigears.com",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "202, Mahima Shubh Nilay, Jaisinghpura",
    "addressLocality": "Jaipur",
    "addressRegion": "Rajasthan",
    "postalCode": "302026",
    "addressCountry": "IN"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": 26.8538,
    "longitude": 75.7196
  },
  "openingHoursSpecification": {
    "@type": "OpeningHoursSpecification",
    "dayOfWeek": [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday"
    ],
    "opens": "09:00",
    "closes": "19:00"
  },
  "areaServed": "IN"
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
