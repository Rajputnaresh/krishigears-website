import type { Metadata } from "next";
import { Outfit, Manrope } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingActions from "@/components/FloatingActions";
import Providers from "./providers";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  display: "swap",
});

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://krishigears.com"),
  title: {
    default: "KrishiGears | B2B Agricultural Machinery & Genuine Spare Parts",
    template: "%s | KrishiGears B2B",
  },
  description: "KrishiGears is a Jaipur-based B2B agricultural machinery brand providing FMTTI-tested power weeders, tillers, and OEM spare parts to dealers and FPOs across India.",
  alternates: {
    canonical: "https://krishigears.com",
    languages: {
      "en-IN": "https://krishigears.com",
      "hi-IN": "https://krishigears.com",
      "x-default": "https://krishigears.com",
    },
  },
  keywords: [
    "KrishiGears",
    "power weeder manufacturer",
    "b2b agricultural machinery",
    "power weeder spare parts wholesale",
    "farm equipment dealership india",
    "power tiller dealer jaipur",
    "power weeder dealership kaise le",
    "7 hp diesel weeder price wholesale",
    "power weeder subsidy portal registration",
    "diesel weeder price kya hai",
    "krishi yantra dealership rajasthan",
    "power weeder subsidy rajasthan 2026",
    "power tiller wholesale market",
    "back rotary weeder price maharashtra",
    "honda engine weeder spare parts",
    "पावर वीडर डीलरशिप",
    "कृषि यंत्र सब्सिडी पोर्टल"
  ],
  authors: [{ name: "KrishiGears Engineering Desk", url: "https://krishigears.com" }],
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://krishigears.com",
    siteName: "KrishiGears",
    title: "KrishiGears | B2B Agricultural Machinery & Genuine Spare Parts",
    description: "KrishiGears is a Jaipur-based B2B agricultural machinery brand providing FMTTI-tested power weeders, tillers, and OEM spare parts to dealers across India.",
    images: [
      {
        url: "/logo512.png",
        width: 512,
        height: 512,
        alt: "KrishiGears B2B Farm Machinery & Genuine Spare Parts",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "KrishiGears | B2B Agricultural Machinery & Genuine Spare Parts",
    description: "Jaipur-based B2B agricultural machinery supplier for dealers, FPOs, and institutions across India.",
    images: ["/logo512.png"],
  },
};

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": "https://krishigears.com/#organization",
      "name": "KrishiGears",
      "legalName": "KrishiGears",
      "taxID": "08EQLPD7160R1Z2",
      "url": "https://krishigears.com",
      "logo": "https://krishigears.com/logo512.png",
      "contactPoint": {
        "@type": "ContactPoint",
        "telephone": "+91-6006078815",
        "contactType": "sales & dealer support",
        "areaServed": "IN",
        "availableLanguage": ["en", "hi", "mr"]
      },
      "sameAs": [
        "https://www.indiamart.com/krishigears/",
        "https://farmingtools.in"
      ]
    },
    {
      "@type": "LocalBusiness",
      "@id": "https://krishigears.com/#localbusiness",
      "name": "KrishiGears Central Machinery & Spares Depot",
      "image": "https://krishigears.com/logo512.png",
      "telephone": "+91-6006078815",
      "priceRange": "₹₹",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "202, Mahima Shubh Nilay, Jaisinghpura, Bhankrota",
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
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
        "opens": "09:00",
        "closes": "19:00"
      }
    }
  ]
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${outfit.variable} ${manrope.variable} h-full antialiased dark`}
    >
      <head>
        <link rel="preconnect" href="https://api.krishigears.com" crossOrigin="anonymous" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
      </head>
      <body className="min-h-full flex flex-col pt-[104px] bg-background text-foreground font-body">
        <Providers>
          <Header />
          <main className="flex-1">
            {children}
          </main>
          <Footer />
          <FloatingActions />
        </Providers>
      </body>
    </html>
  );
}
