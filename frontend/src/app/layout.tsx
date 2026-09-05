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
    canonical: "/",
  },
  keywords: [
    "KrishiGears",
    "power weeder manufacturer",
    "b2b agricultural machinery",
    "power weeder spare parts wholesale",
    "farm equipment dealership india",
    "power tiller dealer jaipur"
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
        alt: "KrishiGears B2B Farm Machinery",
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
      <body className="min-h-full flex flex-col pt-20 bg-background text-foreground font-body">
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
