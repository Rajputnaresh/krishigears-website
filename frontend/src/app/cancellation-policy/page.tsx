import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Cancellation Policy · KrishiGears",
  description: "Official cancellation policy for agricultural machinery orders, token bookings, and shipments by KRISHIGEARS INDIA PRIVATE LIMITED.",
  alternates: { canonical: "https://krishigears.com/cancellation-policy" }
};

export default function CancellationPolicyPage() {
  return (
    <article className="mx-auto max-w-3xl px-6 py-12 text-foreground">
      <h1 className="text-3xl font-bold tracking-tight">Order Cancellation Policy</h1>
      <p className="mt-3 text-sm text-zinc-400">Last updated: 28 October 2026</p>

      <section className="mt-8 space-y-3">
        <h2 className="text-xl font-semibold">1. Cancellation Scope &amp; Eligibility</h2>
        <p className="leading-relaxed text-zinc-300">
          This Cancellation Policy applies to all orders, machinery bookings, and token advances placed through <strong>https://krishigears.com</strong>, <strong>https://farmingtools.in</strong>, or via our authorized tele-sales and dealer network operated by <strong>KRISHIGEARS INDIA PRIVATE LIMITED</strong>.
        </p>
      </section>

      <section className="mt-8 space-y-3">
        <h2 className="text-xl font-semibold">2. Pre-Dispatch Order Cancellation (By Buyer)</h2>
        <p className="leading-relaxed text-zinc-300">
          Customers may cancel their agricultural machinery booking at any time prior to factory dispatch from SourceIndia Industries, Jaipur, and before the formal Lorry Receipt (Bilty) is generated.
        </p>
        <div className="rounded-xl border border-zinc-800 bg-zinc-900/60 p-4 text-sm text-zinc-300 space-y-2">
          <div><strong>• Cancellation Window:</strong> Typically within <strong>24 to 48 hours</strong> of placing the order, or until the factory dispatch confirmation notification is issued.</div>
          <div><strong>• Refund of Advance:</strong> When cancelled within this pre-dispatch window, <strong>100% of the advance deposit (e.g. ₹2,500)</strong> is refunded with zero cancellation fees or administrative penalties.</div>
          <div><strong>• Settlement Timeline:</strong> Refunds are initiated within <strong>2 business days</strong> and returned via the original payment source (Razorpay online settlement / bank transfer) within <strong>5 to 7 business days</strong>.</div>
        </div>
      </section>

      <section className="mt-8 space-y-3">
        <h2 className="text-xl font-semibold">3. How to Submit a Cancellation Request</h2>
        <p className="leading-relaxed text-zinc-300">
          To cancel an existing booking, please provide your <strong>Order Reference ID</strong> (e.g. <code>KGO-2026...</code>) and mobile number through any of the following channels:
        </p>
        <ul className="list-disc pl-5 space-y-2 text-zinc-300">
          <li><strong>Email:</strong> Send a cancellation request to <a href="mailto:billing@krishigears.com" className="text-lime-400 underline">billing@krishigears.com</a> with subject &ldquo;Order Cancellation Request - [Your Order ID]&rdquo;.</li>
          <li><strong>Phone / Helpline:</strong> Call our customer desk at <a href="tel:+916006078815" className="text-lime-400 underline">+91 60060 78815</a> (Monday to Saturday, 9:30 AM to 6:30 PM IST).</li>
          <li><strong>WhatsApp Desk:</strong> Message our verified business desk at <strong>+91 60060 78815</strong> with your order receipt.</li>
        </ul>
        <p className="leading-relaxed text-zinc-300">
          Our team will acknowledge your cancellation request within 4 business hours and share a confirmation email/SMS with the refund transaction reference.
        </p>
      </section>

      <section className="mt-8 space-y-3">
        <h2 className="text-xl font-semibold">4. Post-Dispatch Cancellation (In-Transit Shipments)</h2>
        <p className="leading-relaxed text-zinc-300">
          Once machinery has been crated, loaded onto commercial transport (V-Trans / TCI Freight / Delhivery), and a Bilty number has been assigned, an order cannot be cancelled while in active transit.
        </p>
        <p className="leading-relaxed text-zinc-300">
          If a buyer refuses to take delivery at the designated destination transport hub without legitimate manufacturing or transit damage cause, the actual round-trip freight charges incurred by the logistics carrier will be deducted from any refund.
        </p>
      </section>

      <section className="mt-8 space-y-3">
        <h2 className="text-xl font-semibold">5. Cancellation by KrishiGears</h2>
        <p className="leading-relaxed text-zinc-300">
          KRISHIGEARS INDIA PRIVATE LIMITED reserves the right to cancel an order under specific, unavoidable circumstances:
        </p>
        <ul className="list-disc pl-5 space-y-1 text-zinc-300">
          <li><strong>Non-Serviceable Route / Pin Code:</strong> In remote hill or ODA zones where freight transport carriers cannot safely deliver machinery.</li>
          <li><strong>Force Majeure:</strong> Natural disasters, regional transport strikes, or supply chain disruptions making delivery unfeasible.</li>
          <li><strong>Pricing or Technical Errors:</strong> Manifest pricing or technical errors on the storefront quotation system.</li>
        </ul>
        <p className="leading-relaxed text-zinc-300">
          In any scenario where KrishiGears initiates the cancellation, the customer is notified immediately, and a <strong>100% immediate refund</strong> of all amounts paid is remitted via the original payment source.
        </p>
      </section>

      <section className="mt-8 space-y-3">
        <h2 className="text-xl font-semibold">6. Questions Regarding Cancellations</h2>
        <p className="leading-relaxed text-zinc-300">
          For any clarifications regarding order status or cancellation procedures:
        </p>
        <div className="text-sm text-zinc-300 space-y-1 font-mono">
          <div>KRISHIGEARS INDIA PRIVATE LIMITED</div>
          <div>Operating Brands: <strong>KrishiGears</strong> (B2B) &amp; <strong>FarmingTools.in</strong> (B2C)</div>
          <div>CIN: U46539RJ2026PTC117758 · GSTIN: 08AANCK2216L1ZA</div>
          <div>Flat No.: T5-202, Mahima Shubh Nilay Apartments, Jaisinghpura, Ajmer Road, Jaipur, Rajasthan 302026</div>
          <div>Email: billing@krishigears.com / support@farmingtools.in · Phone: +91 60060 78815</div>
        </div>
      </section>

      <div className="mt-12 pt-6 border-t border-zinc-800 flex flex-wrap gap-4 text-sm">
        <Link href="/terms-and-conditions" className="text-zinc-400 hover:text-lime-400 underline underline-offset-4">Terms &amp; Conditions</Link>
        <Link href="/refund-policy" className="text-zinc-400 hover:text-lime-400 underline underline-offset-4">Refund Policy</Link>
        <Link href="/privacy-policy" className="text-zinc-400 hover:text-lime-400 underline underline-offset-4">Privacy Policy</Link>
        <Link href="/contact" className="text-zinc-400 hover:text-lime-400 underline underline-offset-4">Contact Us</Link>
      </div>
    </article>
  );
}
