import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Terms and Conditions · KrishiGears",
  description: "Terms and conditions governing orders, agricultural machinery supply, payments, and services by KRISHIGEARS INDIA PRIVATE LIMITED.",
  alternates: { canonical: "https://krishigears.com/terms-and-conditions" }
};

export default function TermsAndConditionsPage() {
  return (
    <article className="mx-auto max-w-3xl px-6 py-12 text-foreground">
      <h1 className="text-3xl font-bold tracking-tight">Terms and Conditions</h1>
      <p className="mt-3 text-sm text-zinc-400">Last updated: 28 October 2026</p>

      <section className="mt-8 space-y-3">
        <h2 className="text-xl font-semibold">1. Corporate Identity &amp; Operating Brands</h2>
        <p className="leading-relaxed text-zinc-300">
          These Terms and Conditions constitute a legally binding agreement between you (&ldquo;Customer&rdquo;, &ldquo;Buyer&rdquo;, or &ldquo;User&rdquo;) and <strong>KRISHIGEARS INDIA PRIVATE LIMITED</strong> (&ldquo;Company&rdquo;, &ldquo;we&rdquo;, &ldquo;us&rdquo;, or &ldquo;our&rdquo;), a private limited company incorporated under the laws of India.
        </p>
        <p className="leading-relaxed text-zinc-300">
          <strong>Operating Brands &amp; Portals:</strong> KRISHIGEARS INDIA PRIVATE LIMITED operates two specialized agricultural machinery channels:
        </p>
        <ul className="list-disc pl-5 space-y-1.5 text-zinc-300 text-sm">
          <li><strong>KrishiGears</strong> (<code>https://krishigears.com</code> &amp; <code>https://erp.krishigears.in</code>): The B2B machinery manufacturing, wholesale dealer distribution, institutional procurement, and OEM spare parts division.</li>
          <li><strong>FarmingTools.in</strong> (<code>https://farmingtools.in</code>): The official consumer / direct-to-farmer retail e-commerce storefront for retail purchase of farm equipment, tools, sprayers, and accessories.</li>
        </ul>
        <div className="rounded-xl border border-zinc-800 bg-zinc-900/60 p-4 text-xs text-zinc-300 space-y-1 font-mono">
          <div><strong>Corporate Name:</strong> KRISHIGEARS INDIA PRIVATE LIMITED</div>
          <div><strong>Operating Brands:</strong> KrishiGears &amp; FarmingTools.in</div>
          <div><strong>CIN:</strong> U46539RJ2026PTC117758</div>
          <div><strong>GSTIN:</strong> 08AANCK2216L1ZA · PAN: AANCK2216L · TAN: JPRK10437A</div>
          <div><strong>Registered Office:</strong> Flat No.: T5-202, Mahima Shubh Nilay Apartments, Jaisinghpura, Ajmer Road, Jaipur, Rajasthan 302026, India</div>
          <div><strong>Corporate Emails:</strong> billing@krishigears.com / founder@krishigears.com / support@farmingtools.in</div>
          <div><strong>Customer Helpline:</strong> +91 60060 78815 (Mon–Sat, 9:30 AM – 6:30 PM IST)</div>
        </div>
      </section>

      <section className="mt-8 space-y-3">
        <h2 className="text-xl font-semibold">2. Scope of Services &amp; Products</h2>
        <p className="leading-relaxed text-zinc-300">
          KRISHIGEARS INDIA PRIVATE LIMITED provides agricultural machinery and implements through its brand portals:
        </p>
        <ul className="list-disc pl-5 space-y-1.5 text-zinc-300 text-sm">
          <li><strong>B2B Wholesale &amp; Dealerships (KrishiGears):</strong> Serving machinery dealerships, district distributors, FPOs, and custom hiring centres with 7HP/9HP power weeders, back-rotary tillers, post hole diggers, and bulk OEM spares. Orders are supported by formal GST invoices, transit e-way bills, and dealer agreements.</li>
          <li><strong>Consumer &amp; Retail E-Commerce (FarmingTools.in):</strong> Serving individual farmers, landscapers, and orchardists across India with direct parcel dispatches, genuine attachments, handheld sprayers, and brush cutter components.</li>
        </ul>
        <p className="leading-relaxed text-zinc-300 text-sm">
          All machines undergo factory quality checks at our associate manufacturing facility, SourceIndia Industries, Jaipur, Rajasthan, prior to boxing and dispatch.
        </p>
      </section>

      <section className="mt-8 space-y-3">
        <h2 className="text-xl font-semibold">3. Order Booking &amp; Payment Gateway Terms</h2>
        <p className="leading-relaxed text-zinc-300">
          Machinery orders placed via KrishiGears or tele-sales operate on a standard token advance booking model (typically ₹2,500 advance deposit online) or proforma invoice, with remaining balance payable upon delivery at the destination transport hub or authorized dealer location. Retail orders on FarmingTools.in may be paid online in full or via booking token.
        </p>
        <p className="leading-relaxed text-zinc-300">
          All online payments across both <strong>KrishiGears</strong> and <strong>FarmingTools.in</strong> (including UPI, NetBanking, Debit/Credit Cards, and Wallets) are processed securely through RBI-authorized payment aggregators, specifically <strong>Razorpay</strong>, under the verified corporate merchant account of <strong>KRISHIGEARS INDIA PRIVATE LIMITED</strong>.
        </p>
        <p className="leading-relaxed text-zinc-300 text-sm">
          We do not capture, record, or store raw payment card credentials, CVVs, or internet banking credentials on our application servers. All transactions are protected by end-to-end 256-bit SSL encryption.
        </p>
      </section>

      <section className="mt-8 space-y-3">
        <h2 className="text-xl font-semibold">4. Pricing, Invoicing &amp; Taxes</h2>
        <p className="leading-relaxed text-zinc-300">
          All prices displayed on our website and in official proforma invoices are in Indian Rupees (INR) and are inclusive of applicable Goods and Services Tax (GST) under official HSN codes (e.g. HSN 8432 for power weeders, tillers, and agricultural implements). Formal GST tax invoices are generated under GSTIN 08AANCK2216L1ZA upon final dispatch.
        </p>
      </section>

      <section className="mt-8 space-y-3">
        <h2 className="text-xl font-semibold">5. Delivery, Shipping &amp; Transit Hubs</h2>
        <p className="leading-relaxed text-zinc-300">
          Machinery is dispatched via established commercial freight carriers (including V-Trans, TCI Freight, and Delhivery) to the authorized transport hub nearest to the buyer&rsquo;s pin code. Standard transit timelines are 3 to 7 business days depending on geographical location. A Lorry Receipt (Bilty) number is provided to the buyer for live tracking. Buyers must inspect machinery upon pickup at the transport godown before taking delivery.
        </p>
      </section>

      <section className="mt-8 space-y-3">
        <h2 className="text-xl font-semibold">6. Warranty &amp; After-Sales Support</h2>
        <p className="leading-relaxed text-zinc-300">
          KrishiGears machinery comes with a standard 1-year manufacturer warranty against manufacturing defects on the engine and primary gearbox assembly. Consumables (such as rotary blades, tines, rubber drive belts, engine oil, and filters) subject to normal operational wear and tear are not covered under warranty. Warranty claims require proof of purchase and video evidence of the defect.
        </p>
      </section>

      <section className="mt-8 space-y-3">
        <h2 className="text-xl font-semibold">7. Cancellations and Refunds</h2>
        <p className="leading-relaxed text-zinc-300">
          Our cancellation and refund policies are published as dedicated pages and form an integral part of these Terms:
        </p>
        <ul className="list-disc pl-5 space-y-1 text-zinc-300">
          <li><Link href="/cancellation-policy" className="underline underline-offset-4 text-lime-400">Cancellation Policy</Link>: Pre-dispatch order cancellations are eligible for a 100% refund of the booking advance.</li>
          <li><Link href="/refund-policy" className="underline underline-offset-4 text-lime-400">Refund and Return Policy</Link>: Details on eligibility, refund timelines (5–7 business days via original payment method), and return procedures.</li>
        </ul>
      </section>

      <section className="mt-8 space-y-3">
        <h2 className="text-xl font-semibold">8. Limitation of Liability</h2>
        <p className="leading-relaxed text-zinc-300">
          To the maximum extent permitted by applicable Indian law, KRISHIGEARS INDIA PRIVATE LIMITED shall not be liable for any indirect, incidental, punitive, or consequential damages resulting from the use or inability to use the equipment, crop yield fluctuations, or unauthorized machine modifications. Total liability under any claim shall not exceed the net price paid by the customer for the specific product.
        </p>
      </section>

      <section className="mt-8 space-y-3">
        <h2 className="text-xl font-semibold">9. Governing Law &amp; Jurisdiction</h2>
        <p className="leading-relaxed text-zinc-300">
          These Terms and Conditions and all purchase contracts shall be governed by and construed in accordance with the laws of India. Any disputes arising out of or related to these terms shall be subject to the exclusive jurisdiction of the competent courts in <strong>Jaipur, Rajasthan, India</strong>.
        </p>
      </section>

      <section className="mt-8 space-y-3">
        <h2 className="text-xl font-semibold">10. Contact Information</h2>
        <p className="leading-relaxed text-zinc-300">
          For inquiries or legal notices regarding these Terms, please contact:
        </p>
        <p className="text-sm text-zinc-300">
          Compliance Desk, KRISHIGEARS INDIA PRIVATE LIMITED<br />
          Email: <a href="mailto:billing@krishigears.com" className="underline text-lime-400">billing@krishigears.com</a> / <a href="mailto:founder@krishigears.com" className="underline text-lime-400">founder@krishigears.com</a><br />
          Phone: +91 60060 78815 (Mon–Sat, 9:30 AM – 6:30 PM IST)
        </p>
      </section>

      <div className="mt-12 pt-6 border-t border-zinc-800 flex flex-wrap gap-4 text-sm">
        <Link href="/privacy-policy" className="text-zinc-400 hover:text-lime-400 underline underline-offset-4">Privacy Policy</Link>
        <Link href="/refund-policy" className="text-zinc-400 hover:text-lime-400 underline underline-offset-4">Refund Policy</Link>
        <Link href="/cancellation-policy" className="text-zinc-400 hover:text-lime-400 underline underline-offset-4">Cancellation Policy</Link>
        <Link href="/contact" className="text-zinc-400 hover:text-lime-400 underline underline-offset-4">Contact Us</Link>
      </div>
    </article>
  );
}
