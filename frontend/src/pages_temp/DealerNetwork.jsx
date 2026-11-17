"use client";
import Link from "next/link";
import { MapPin, Truck, ShieldCheck, Headphones, ArrowRight } from "lucide-react";
import { INDIA_MAP } from "@/data/catalog";

const REGIONS = [
  { name: "North India", states: ["Punjab", "Haryana", "Uttar Pradesh", "Uttarakhand", "Himachal Pradesh", "Delhi", "Rajasthan"] },
  { name: "South India", states: ["Karnataka", "Tamil Nadu", "Kerala", "Andhra Pradesh", "Telangana"] },
  { name: "West India", states: ["Maharashtra", "Gujarat", "Goa"] },
  { name: "East India", states: ["West Bengal", "Bihar", "Jharkhand", "Odisha"] },
  { name: "North-East", states: ["Assam", "Tripura", "Manipur", "Meghalaya", "Nagaland", "Arunachal Pradesh", "Mizoram", "Sikkim"] },
  { name: "Central & UTs", states: ["Chhattisgarh", "Madhya Pradesh", "Jammu and Kashmir", "Ladakh", "Chandigarh"] },
];

export default function DealerNetwork() {
  return (
    <div data-testid="dealer-network-page">
      {/* Hero */}
      <section className="relative kg-section overflow-hidden">
        <div className="absolute inset-0">
          <img src={INDIA_MAP} alt="" loading="lazy" className="w-full h-full object-cover opacity-30" />
          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-transparent"></div>
        </div>
        <div className="max-w-[1400px] mx-auto relative">
          <div>
            <div className="kg-eyebrow">Dealer & Supply Enquiries</div>
            <h1 className="kg-h1 mt-4 text-balance">Dealer enquiries & <span className="text-lime-500">supply availability.</span></h1>
            <p className="mt-6 text-zinc-300 text-lg max-w-xl leading-relaxed">
              KrishiGears holds no stock. Machinery and parts are procured from suppliers per sale. Share your machine or part requirement and PIN code so we can confirm availability, delivery coverage and dispatch timing before you order.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link href="/become-a-dealer" data-testid="dn-become-dealer" className="bg-lime-500 hover:bg-lime-400 text-black dark:text-black font-bold px-7 py-4 rounded-md inline-flex items-center gap-2">
                Enquire About Dealership <ArrowRight className="h-4 w-4" />
              </Link>
              <Link href="/contact" data-testid="dn-contact" className="border border-zinc-700 hover:border-lime-500 hover:text-lime-500 px-7 py-4 font-bold rounded-md">Check Local Availability</Link>
            </div>
          </div>

        </div>
      </section>

      {/* Regions */}
      <section className="kg-section">
        <div className="max-w-[1400px] mx-auto">
          <div className="kg-eyebrow">Enquire by Region</div>
          <h2 className="kg-h2 mt-3">Check supply options <span className="text-lime-500">for your location.</span></h2>
          <p className="mt-4 text-zinc-300 max-w-3xl leading-relaxed">These state links are enquiry routes, not a verified dealer directory. A listed state does not confirm a local dealer, stock, delivery or service availability. Contact us with your PIN code to check.</p>
          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {REGIONS.map((r) => (
              <div key={r.name} className="kg-card p-7">
                <MapPin className="h-6 w-6 text-lime-500" />
                <h3 className="font-display font-bold text-xl mt-4">{r.name}</h3>
                <div className="flex flex-wrap gap-2 mt-4">
                  {r.states.map((s) => {
                    const slug = s.toLowerCase().replace(/[^a-zA-Z0-9]+/g, "-").replace(/^-|-$/g, "");
                    return (
                      <Link
                        key={s}
                        href={`/dealer/${slug}`}
                        className="text-xs px-3 py-1 border border-zinc-800 text-zinc-300 hover:border-lime-500 hover:text-lime-400 transition rounded"
                      >
                        {s}
                      </Link>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Enquiry checks */}
      <section className="kg-section bg-surface-darker border-y border-zinc-900">
        <div className="max-w-[1400px] mx-auto">
          <div className="kg-eyebrow">Before You Order</div>
          <h2 className="kg-h2 mt-3 max-w-3xl">What to <span className="text-lime-500">confirm with us.</span></h2>
          <div className="mt-12 grid md:grid-cols-4 gap-5">
            {[
              { i: Truck, t: "Procurement & Dispatch", d: "We hold no stock and procure per sale. Confirm supplier availability, freight and dispatch timing before ordering." },
              { i: ShieldCheck, t: "Warranty & Service", d: "Ask for the warranty terms for your model and confirm a service destination before moving a machine." },
              { i: Headphones, t: "Requirement Details", d: "Share the machine model, part photos or specifications and your PIN code so we can review your enquiry." },
              { i: MapPin, t: "Location Confirmation", d: "Delivery coverage and any dealer or service referral require confirmation for your location and requirement." },
            ].map((b) => {
              const I = b.i;
              return (
                <div key={b.t} className="kg-card p-7">
                  <I className="h-7 w-7 text-lime-500" />
                  <h3 className="font-display font-bold text-lg mt-4">{b.t}</h3>
                  <p className="text-zinc-300 text-sm mt-2 leading-relaxed">{b.d}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}
