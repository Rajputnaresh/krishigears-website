"use client";
import Link from "next/link";
import { ShieldCheck, Award, Users, MapPin, Tractor, HeartHandshake, ArrowRight } from "lucide-react";
import { COMPANY, ABSTRACT_TERRAIN, FIELD_TRACTOR, FARMER_FIELD } from "@/data/catalog";

export default function About() {
  return (
    <div data-testid="about-page" className="bg-background text-zinc-100">
      {/* Hero */}
      <section className="relative kg-section">
        <div className="absolute inset-0 opacity-20" style={{ backgroundImage: `url(${ABSTRACT_TERRAIN})`, backgroundSize: "cover" }}/>
        <div className="max-w-[1200px] mx-auto relative">
          <div className="kg-eyebrow">About {COMPANY.name}</div>
          <h1 className="kg-h1 mt-4 max-w-3xl text-balance text-white">Standing with farmers, every season, <span className="text-lime-500">hamesha.</span></h1>
          <p className="mt-6 text-zinc-300 max-w-2xl leading-relaxed text-lg">
            {COMPANY.name} (operated by {COMPANY.legalName}) is one of India's trusted B2B agricultural machinery enterprises — built to bring rugged, dependable equipment and genuine spare parts within reach of every Indian farmer, dealer network, and FPO institution.
          </p>
        </div>
      </section>

      {/* Mission / Story */}
      <section className="kg-section bg-surface-darker border-y border-zinc-800">
        <div className="max-w-[1200px] mx-auto grid lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6 order-2 lg:order-1">
            <div className="kg-eyebrow">Our Mission</div>
            <h2 className="kg-h2 mt-3 text-white">Productivity & dignity <span className="text-lime-500">for every farmer.</span></h2>
            <p className="text-zinc-300 mt-6 leading-relaxed">
              We started KrishiGears with a simple belief: every Indian farmer deserves access to premium-quality machinery, genuine spare parts and honest service — no matter how small or remote their farm.
            </p>
            <p className="text-zinc-300 mt-4 leading-relaxed">
              Today, we proudly supply a complete range of power weeders and genuine spare parts across India, with PAN-India dispatch and dedicated dealer assistance.
            </p>
          </div>
          <div className="lg:col-span-6 order-1 lg:order-2">
            <div className="aspect-[5/4] overflow-hidden border border-zinc-800">
              <img src={FIELD_TRACTOR} alt="Farm" loading="lazy" className="w-full h-full object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* Brands & Corporate Structure (Razorpay KYC & Operational Disclosure) */}
      <section className="kg-section bg-zinc-950 border-b border-zinc-800">
        <div className="max-w-[1200px] mx-auto">
          <div className="kg-eyebrow">Corporate Structure &amp; Operating Brands</div>
          <h2 className="kg-h2 mt-3 text-white">Two focused brands, <span className="text-lime-500">one legal entity.</span></h2>
          <p className="mt-4 text-zinc-300 max-w-3xl leading-relaxed">
            <strong>{COMPANY.legalName}</strong> operates two dedicated, synergistic brands to serve the agricultural community across both wholesale commercial and retail consumer sectors:
          </p>
          <div className="mt-8 grid md:grid-cols-2 gap-6">
            <div className="kg-card p-6 border-zinc-800 bg-zinc-900/40 rounded-xl">
              <div className="flex items-center justify-between mb-3">
                <h3 className="font-display font-bold text-xl text-white">KrishiGears (B2B Division)</h3>
                <span className="px-2.5 py-1 text-xs font-semibold rounded bg-lime-500/10 text-lime-400 border border-lime-500/20">B2B &amp; Dealerships</span>
              </div>
              <p className="text-zinc-300 text-sm leading-relaxed mb-4">
                Our core B2B machinery brand dedicated to machinery dealership networks, district distributors, FPO bulk procurement, institutional tenders, and OEM spare parts supply across India. Supported by direct GST billing, transport logistics, and technical field engineers.
              </p>
              <div className="text-xs text-zinc-400 font-mono space-y-1 pt-3 border-t border-zinc-800/80">
                <div>Portals: <span className="text-zinc-200">krishigears.com</span> · <span className="text-zinc-200">erp.krishigears.in</span></div>
                <div>Focus: 7HP &amp; 9HP Power Weeders, Tillers, Heavy Augers &amp; Wholesale Spares</div>
              </div>
            </div>

            <div className="kg-card p-6 border-zinc-800 bg-zinc-900/40 rounded-xl">
              <div className="flex items-center justify-between mb-3">
                <h3 className="font-display font-bold text-xl text-white">FarmingTools.in (B2C Retail Storefront)</h3>
                <span className="px-2.5 py-1 text-xs font-semibold rounded bg-sky-500/10 text-sky-400 border border-sky-500/20">Direct-to-Farmer Retail</span>
              </div>
              <p className="text-zinc-300 text-sm leading-relaxed mb-4">
                Our direct-to-consumer e-commerce storefront owned and operated by {COMPANY.legalName}. Enables individual farmers, smallholders, and hobbyists to purchase agricultural tools, sprayers, harvesters, brush cutter attachments, and accessories online with transparent pricing, online payments, and doorstep delivery.
              </p>
              <div className="text-xs text-zinc-400 font-mono space-y-1 pt-3 border-t border-zinc-800/80 mb-4">
                <div>Storefront: <a href="https://farmingtools.in" target="_blank" rel="noopener noreferrer" className="text-sky-400 underline">https://farmingtools.in</a></div>
                <div>Focus: Direct retail orders, parcel delivery, farmer COD &amp; prepaid checkout</div>
              </div>
              <a href="https://farmingtools.in" target="_blank" rel="noopener noreferrer" className="text-xs text-lime-400 font-bold hover:underline inline-flex items-center gap-1">
                Visit FarmingTools.in Retail Storefront →
              </a>
            </div>
          </div>

          <div className="mt-6 p-5 rounded-xl bg-zinc-900/80 border border-zinc-800 text-xs text-zinc-300 font-mono leading-relaxed">
            <div className="font-semibold text-white mb-1.5 flex items-center gap-2">
              <ShieldCheck className="h-4 w-4 text-lime-400" />
              Corporate Incorporation &amp; Payment Gateway Underwriting Details:
            </div>
            <div><strong>Company Name:</strong> {COMPANY.legalName}</div>
            <div><strong>CIN:</strong> {COMPANY.cin} · <strong>GSTIN:</strong> {COMPANY.gst} · <strong>PAN:</strong> {COMPANY.pan}</div>
            <div><strong>Registered Office:</strong> {COMPANY.address}</div>
            <div className="mt-2 text-zinc-400 border-t border-zinc-800/80 pt-2">
              Both KrishiGears and FarmingTools.in operate under unified financial, billing, and regulatory governance of KRISHIGEARS INDIA PRIVATE LIMITED. Payment collections via Razorpay for both KrishiGears machinery token advances and FarmingTools.in orders settle into the registered corporate bank account of KRISHIGEARS INDIA PRIVATE LIMITED.
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="kg-section">
        <div className="max-w-[1200px] mx-auto">
          <div className="kg-eyebrow">What we stand for</div>
          <h2 className="kg-h2 mt-3 text-white">Our values, <span className="text-lime-500">in action.</span></h2>
          <div className="mt-12 grid md:grid-cols-3 gap-5">
            {[
              { icon: ShieldCheck, t: "Genuine, always", d: "100% original products and OEM-grade spare parts — sourced directly from authorized manufacturers." },
              { icon: HeartHandshake, t: "Farmer-first service", d: "Quick response, honest pricing and a dedicated support team for every order." },
              { icon: Users, t: "Strong dealer network", d: "We grow with our partners — fair margins, marketing support, training and priority supply." },
              { icon: MapPin, t: "PAN India reach", d: "From Punjab to Tamil Nadu, Gujarat to Assam — we deliver where farmers need us." },
              { icon: Tractor, t: "Built for Indian farms", d: "Rugged machines tuned for Indian soil, crops and operating conditions." },
              { icon: Award, t: "Warranty support", d: "Every machine comes with a manufacturer warranty and after-sales service network." },
            ].map((v) => {
              const I = v.icon;
              return (
                <div key={v.t} className="kg-card p-7 border-zinc-800">
                  <I className="h-7 w-7 text-lime-500" />
                  <h3 className="font-display font-bold text-xl mt-4 text-white">{v.t}</h3>
                  <p className="text-zinc-300 text-sm mt-2 leading-relaxed">{v.d}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="kg-section bg-surface-darker border-y border-zinc-800">
        <div className="max-w-[1200px] mx-auto text-center">
          <h2 className="kg-h2 max-w-3xl mx-auto text-balance text-white">Ready to bring KrishiGears to <span className="text-lime-500">your district?</span></h2>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link href="/become-a-dealer" data-testid="about-become-dealer" className="bg-lime-500 hover:bg-lime-400 text-black font-bold px-7 py-4 rounded-md inline-flex items-center gap-2 shadow-lg ">
              Become a Dealer <ArrowRight className="h-4 w-4" />
            </Link>
            <Link href="/contact" data-testid="about-contact" className="border border-zinc-700 hover:border-lime-500 hover:text-lime-400 text-zinc-200 px-7 py-4 font-bold rounded-md">
              Contact Sales
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
