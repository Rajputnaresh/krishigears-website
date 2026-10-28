import type { Metadata } from "next";
import TermsAndConditionsPage from "../terms-and-conditions/page";

export const metadata: Metadata = {
  title: "Terms and Conditions · KrishiGears",
  description: "Terms and conditions governing orders, agricultural machinery supply, payments, and services by KRISHIGEARS INDIA PRIVATE LIMITED.",
  alternates: { canonical: "https://krishigears.com/terms-and-conditions" }
};

export default function TermsAliasPage() {
  return <TermsAndConditionsPage />;
}
