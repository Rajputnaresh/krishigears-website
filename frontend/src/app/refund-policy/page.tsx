import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Refund and Return Policy · KrishiGears",
  description: "Official refund and return policy for agricultural machinery, token advances, and spare parts by KRISHIGEARS INDIA PRIVATE LIMITED.",
  alternates: { canonical: "https://krishigears.com/refund-policy" }
};

export default function RefundPolicyPage() {
  return (
    <article className="mx-auto max-w-3xl px-6 py-12 text-foreground">
      <h1 className="text-3xl font-bold tracking-tight">Refund and Return Policy</h1>
      <p className="mt-3 text-sm text-zinc-400">Last updated: 28 October 2026</p>

      <section className="mt-8 space-y-3">
        <h2 className="text-xl font-semibold">1. Overview and Core Principle</h2>
        <p className="leading-relaxed text-zinc-300">
          At <strong>KRISHIGEARS INDIA PRIVATE LIMITED</strong> (&ldquo;Company&rdquo;, &ldquo;we&rdquo;, &ldquo;us&rdquo;), we stand behind the durability and performance of our agricultural machinery. We maintain a clear, fair, and transparent refund and return policy governing both our B2B commercial platform <strong>KrishiGears</strong> (<code>https://krishigears.com</code>) and our consumer retail storefront <strong>FarmingTools.in</strong> (<code>https://farmingtools.in</code>).
        </p>
      </section>

      <section className="mt-8 space-y-3">
        <h2 className="text-xl font-semibold">2. Pre-Dispatch Advance Token Refunds (100% Refundable)</h2>
        <p className="leading-relaxed text-zinc-300">
          When you place an order or booking for machinery (such as a 7HP or 9HP Power Weeder) via KrishiGears, FarmingTools.in, or our authorized sales desk, an advance token deposit (standard ₹2,500) or full order amount is paid online via Razorpay to reserve factory allocation at SourceIndia Industries, Jaipur.
        </p>
        <p className="leading-relaxed text-zinc-300">
          <strong>If you choose to cancel your booking prior to factory dispatch and bilty issuance, you are entitled to a full 100% refund of your advance deposit.</strong> No cancellation charges or processing penalties will be deducted.
        </p>
      </section>

      <section className="mt-8 space-y-3">
        <h2 className="text-xl font-semibold">3. Transit Damage &amp; Manufacturing Defects</h2>
        <p className="leading-relaxed text-zinc-300">
          Every machine undergoes multi-point factory inspection (engine dry test, gearbox leak check, safety checklist) prior to packaging. However, in the rare event of transit damage or a manufacturing defect:
        </p>
        <ul className="list-disc pl-5 space-y-2 text-zinc-300">
          <li><strong>Inspection on Delivery:</strong> The buyer must inspect the crated equipment upon arrival at the destination transport hub (V-Trans / TCI Freight / Delhivery godown).</li>
          <li><strong>Reporting Window:</strong> Any physical transit damage or missing component must be reported within <strong>48 hours</strong> of collection by emailing <a href="mailto:billing@krishigears.com" className="text-lime-400 underline">billing@krishigears.com</a> or messaging our WhatsApp customer desk at <strong>+91 60060 78815</strong> with photos/video of the defect and the Lorry Receipt (Bilty).</li>
          <li><strong>Resolution:</strong> KrishiGears will immediately dispatch replacement components or arrange a free return and replacement machine. If a replacement is unavailable, a 100% full refund will be processed.</li>
        </ul>
      </section>

      <section className="mt-8 space-y-3">
        <h2 className="text-xl font-semibold">4. Spare Parts &amp; Attachment Returns</h2>
        <p className="leading-relaxed text-zinc-300">
          Individual spare parts, rotary blades, or optional implement attachments may be returned within <strong>7 days</strong> of delivery, provided:
        </p>
        <ul className="list-disc pl-5 space-y-1 text-zinc-300">
          <li>The item is unused, uninstalled, and in its original protective packaging.</li>
          <li>The original tax invoice or order confirmation receipt is provided.</li>
          <li>The return is coordinated through our authorized support desk.</li>
        </ul>
      </section>

      <section className="mt-8 space-y-3">
        <h2 className="text-xl font-semibold">5. Refund Processing Timeframe &amp; Mode</h2>
        <p className="leading-relaxed text-zinc-300">
          Once an approved refund is authorized:
        </p>
        <div className="rounded-xl border border-zinc-800 bg-zinc-900/60 p-4 text-sm text-zinc-300 space-y-2">
          <div><strong>• Initiation:</strong> Refunds are initiated by our billing department within <strong>2 business days</strong> of approval.</div>
          <div><strong>• Processing Time:</strong> Funds are credited back to the customer&rsquo;s original payment method (Bank Account, UPI, or Debit/Credit Card) within <strong>5 to 7 business days</strong>, subject to standard banking settlement cycles.</div>
          <div><strong>• Payment Channel:</strong> Online refunds are settled automatically through our RBI-regulated payment gateway partner, <strong>Razorpay</strong>, to the customer&rsquo;s original payment method under merchant account <strong>KRISHIGEARS INDIA PRIVATE LIMITED</strong>. Direct NEFT/RTGS refunds are credited to the verified account from which funds were transferred.</div>
        </div>
      </section>

      <section className="mt-8 space-y-3">
        <h2 className="text-xl font-semibold">6. Non-Refundable Circumstances</h2>
        <p className="leading-relaxed text-zinc-300">
          Refunds cannot be issued under the following circumstances:
        </p>
        <ul className="list-disc pl-5 space-y-1 text-zinc-300">
          <li>The machine has already been dispatched from the factory and is in active transit, and the buyer refuses delivery without a valid, documented cause (in such cases, actual return transport freight incurred is deductible).</li>
          <li>The machine has been fueled, operated in the field, or modified by an unauthorized mechanic.</li>
          <li>Consumable parts (engine oil, lubricants, air filter elements, belts, worn tines) that have been utilized.</li>
          <li>Damage caused by improper fuel mix, negligence, electrical surge, or non-compliance with the operator&rsquo;s manual.</li>
        </ul>
      </section>

      <section className="mt-8 space-y-3">
        <h2 className="text-xl font-semibold">7. How to Request a Refund</h2>
        <p className="leading-relaxed text-zinc-300">
          To initiate a refund or return request, please contact our accounts team:
        </p>
        <div className="text-sm text-zinc-300 space-y-1">
          <div><strong>Billing &amp; Refunds Desk:</strong> KRISHIGEARS INDIA PRIVATE LIMITED</div>
          <div>Operating Brands: <strong>KrishiGears</strong> &amp; <strong>FarmingTools.in</strong></div>
          <div>Email: <a href="mailto:billing@krishigears.com" className="underline text-lime-400">billing@krishigears.com</a> / <a href="mailto:support@farmingtools.in" className="underline text-lime-400">support@farmingtools.in</a></div>
          <div>Customer Support: <a href="tel:+916006078815" className="underline text-lime-400">+91 60060 78815</a></div>
          <div>Address: Flat No.: T5-202, Mahima Shubh Nilay Apartments, Jaisinghpura, Ajmer Road, Jaipur, Rajasthan 302026, India</div>
        </div>
      </section>

      <div className="mt-12 pt-6 border-t border-zinc-800 flex flex-wrap gap-4 text-sm">
        <Link href="/terms-and-conditions" className="text-zinc-400 hover:text-lime-400 underline underline-offset-4">Terms &amp; Conditions</Link>
        <Link href="/cancellation-policy" className="text-zinc-400 hover:text-lime-400 underline underline-offset-4">Cancellation Policy</Link>
        <Link href="/privacy-policy" className="text-zinc-400 hover:text-lime-400 underline underline-offset-4">Privacy Policy</Link>
        <Link href="/contact" className="text-zinc-400 hover:text-lime-400 underline underline-offset-4">Contact Us</Link>
      </div>
    </article>
  );
}
