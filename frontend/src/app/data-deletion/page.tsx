import type { Metadata } from "next";
import Link from "next/link";
export const metadata: Metadata = { title: "Data Deletion Requests", description: "Request review and deletion of your KrishiGears customer information.", alternates: { canonical: "https://krishigears.com/data-deletion" } };
export default function DataDeletionPage() {
  return <article className="mx-auto max-w-3xl px-6 py-12 text-foreground">
    <h1 className="text-3xl font-bold">Request deletion of your information</h1>
    <p className="mt-4 leading-relaxed">For information held by KRISHIGEARS INDIA PRIVATE LIMITED, email <a className="underline underline-offset-4" href="mailto:founder@krishigears.com?subject=Data%20deletion%20request">founder@krishigears.com</a> with the subject “Data deletion request”. This is a manually reviewed request, not an instant deletion button.</p>
    <ol className="mt-6 list-decimal space-y-4 pl-6 leading-relaxed">
      <li>Tell us which company channel you used, such as our website, storefront, Facebook, Instagram or WhatsApp.</li>
      <li>Include the email address or phone number you used and any available enquiry or order reference. Send the request from the same email address where possible.</li>
      <li>Tell us whether you want a correction, deletion, an explanation of the information held, or an end to optional marketing.</li>
    </ol>
    <p className="mt-6 leading-relaxed">Do not send passwords, PINs, OTPs or government identity documents. We may ask for a limited confirmation that the records belong to you before disclosing or deleting information.</p>
    <p className="mt-6 leading-relaxed">We review the request and explain what was deleted or corrected and what must be retained for transactions, compliance, security or unresolved service matters. Protected backups are removed under the backup retention schedule. Removing a Meta app connection does not automatically delete records already held by KrishiGears; send a request using the steps above.</p>
    <p className="mt-6 leading-relaxed">Requests concerning information held independently by Facebook, Instagram, WhatsApp, Google or Shopify must also be addressed through that platform’s own controls.</p>
    <p className="mt-8"><Link className="underline underline-offset-4" href="/privacy-policy">Read our customer privacy notice</Link></p>
  </article>;
}
