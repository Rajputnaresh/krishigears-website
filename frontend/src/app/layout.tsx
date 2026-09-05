import type { Metadata } from "next";
import { Outfit, Manrope } from "next/font/google";
import "./globals.css";
// import Header from "@/components/Header";
// import Footer from "@/components/Footer";

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
  title: "KrishiGears | B2B Agricultural Machinery",
  description: "B2B agricultural machinery, dealer network, bulk supply, and institutional procurement.",
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
      <body className="min-h-full flex flex-col pt-20">
        {/* <Header /> */}
        {children}
        {/* <Footer /> */}
      </body>
    </html>
  );
}
