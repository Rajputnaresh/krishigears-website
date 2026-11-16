import type { Metadata } from "next";
import { Outfit, Mukta } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingActions from "@/components/FloatingActions";
import Providers from "./providers";
import { clampDescription } from "@/lib/seo-metadata";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  display: "swap",
});

const mukta = Mukta({
  variable: "--font-mukta",
  subsets: ["latin", "devanagari"],
  weight: ["400", "600", "800"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://krishigears.com"),
  title: {
    default: "KrishiGears — B2B Farm Machinery & Spares",
    template: "%s | KrishiGears",
  },
  description: clampDescription("B2B agricultural machinery and spare parts enquiries for dealers, FPOs and contractors across India. Procured per sale; availability and dispatch timing require confirmation."),
  alternates: {
    canonical: "https://krishigears.com",
    languages: {
      "x-default": "https://krishigears.com",
    },
  },
  authors: [{ name: "KrishiGears Engineering Desk", url: "https://krishigears.com" }],
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://krishigears.com",
    siteName: "KrishiGears",
    title: "KrishiGears — B2B Farm Machinery & Genuine Spare Parts · PAN India",
    description: "B2B agricultural machinery and spare parts enquiries for dealers, FPOs and contractors across India. Procured per sale; availability and dispatch timing require confirmation.",
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
    title: "KrishiGears — B2B Farm Machinery & Genuine Spare Parts · PAN India",
    description: "B2B agricultural machinery and spare parts enquiries for dealers, FPOs and contractors across India. Procured per sale; availability and dispatch timing require confirmation.",
    images: ["/logo512.png"],
  },
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-48x48.png", sizes: "48x48", type: "image/png" },
      { url: "/favicon-96x96.png", sizes: "96x96", type: "image/png" },
      { url: "/favicon-192x192.png", sizes: "192x192", type: "image/png" },
    ],
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
    shortcut: ["/favicon.ico"],
  },
};

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": "https://krishigears.com/#organization",
      "name": "KrishiGears",
      "legalName": "KRISHIGEARS INDIA PRIVATE LIMITED",
      "taxID": "08AANCK2216L1ZA",
      "vatID": "08AANCK2216L1ZA",
      "identifier": "U46539RJ2026PTC117758",
      "url": "https://krishigears.com",
      "logo": "https://krishigears.com/logo512.png",
      "contactPoint": {
        "@type": "ContactPoint",
        "telephone": "+91-6006078815",
        "email": "sales@krishigears.com",
        "contactType": "sales & dealer support",
        "areaServed": "IN",
        "availableLanguage": ["en", "hi", "mr"]
      },
      "sameAs": [
        "https://www.indiamart.com/krishigears/",
        "https://farmingtools.in",
        "https://www.facebook.com/krishigears",
        "https://www.instagram.com/krishigears",
        "https://www.youtube.com/@krishigears"
      ]
    },
    {
      "@type": "LocalBusiness",
      "@id": "https://krishigears.com/#localbusiness",
      "name": "KRISHIGEARS INDIA PRIVATE LIMITED — Jaipur Registered Office",
      "image": "https://krishigears.com/logo512.png",
      "telephone": "+91-6006078815",
      "description": "Jaipur registered office. No walk-in workshop or stocked warehouse. KrishiGears holds no stock; machinery and parts are procured per sale. Confirm a repair destination with support before moving a machine.",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Flat No.: T5-202, Mahima Shubh Nilay Apartments, Jaisinghpura, Ajmer Road",
        "addressLocality": "Jaipur",
        "addressRegion": "Rajasthan",
        "postalCode": "302026",
        "addressCountry": "IN"
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": 26.8538,
        "longitude": 75.7196
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
      className={`${outfit.variable} ${mukta.variable} h-full antialiased sunlight`}
    >
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var isDark=localStorage.getItem("kg_dark_mode")==="true"||localStorage.getItem("kg_sunlight_mode")==="false";if(isDark){document.documentElement.classList.add("dark");document.documentElement.classList.remove("sunlight");}}catch(e){}})();`
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
      </head>
      <body className="min-h-full flex flex-col pt-[86px] md:pt-[104px] bg-background text-foreground font-body">
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
