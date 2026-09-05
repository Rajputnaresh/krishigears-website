import Link from "next/link";
import { MapPin, Truck, ShieldCheck, Headphones, ArrowRight } from "lucide-react";
import { INDIA_MAP } from "@/data/catalog";

const REGIONS = [
  { name: "North India", states: ["Punjab", "Haryana", "Uttar Pradesh", "Uttarakhand", "Himachal Pradesh", "Delhi", "Rajasthan"] },
  { name: "South India", states: ["Karnataka", "Tamil Nadu", "Kerala", "Andhra Pradesh", "Telangana"] },
  { name: "West India", states: ["Maharashtra", "Gujarat", "Goa", "Madhya Pradesh"] },
  { name: "East India", states: ["West Bengal", "Bihar", "Jharkhand", "Odisha"] },
  { name: "North-East", states: ["Assam", "Tripura", "Manipur", "Meghalaya", "Nagaland", "Arunachal", "Mizoram", "Sikkim"] },
  { name: "Central India", states: ["Chhattisgarh", "Madhya Pradesh"] },
];

export default function DealerNetwork() {
  return (
    <div data-testid="dealer-network-page">
      {/* Hero */}
      <section className="relative kg-section overflow-hidden">
        <div className="absolute inset-0">
          <img src={INDIA_MAP} alt="" loading="lazy" className="w-full h-full object-cover opacity-30" />
          <div className="absolute inset-0 bg-gradient-to-r from-white dark:from-black via-white/70 dark:via-black/70 to-transparent"></div>
        </div>
        <div className="max-w-[1400px] mx-auto relative grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="kg-eyebrow">Pan India Network</div>
            <h1 className="kg-h1 mt-4 text-balance">Wherever there is a farm, <span className="text-lime-500">there is KrishiGears.</span></h1>
            <p className="mt-6 text-zinc-300 text-lg max-w-xl leading-relaxed">
              From Punjab fields to Tamil Nadu paddy lands — our dealer & supply network reaches every corner of India. Authorized dealers, priority dispatch and warranty service in 28+ states.
            </p>
            <div className="mt-8 flex gap-3">
              <Link href="/become-a-dealer" data-testid="dn-become-dealer" className="bg-lime-500 hover:bg-lime-400 text-black dark:text-black font-bold px-7 py-4 rounded-md inline-flex items-center gap-2">
                Join Network <ArrowRight className="h-4 w-4" />
              </Link>
              <Link href="/contact" data-testid="dn-contact" className="border border-zinc-700 hover:border-lime-500 hover:text-lime-500 px-7 py-4 font-bold rounded-md">Find Local Dealer</Link>
            </div>
          </div>
          <div className="hidden lg:grid grid-cols-2 gap-4">
            {[
              { v: "28+", l: "States Covered" },
              { v: "500+", l: "Active Dealers" },
              { v: "1000+", l: "Pin Codes Served" },
              { v: "48h", l: "Fast Dispatch" },
            ].map((s) => (
              <div key={s.l} className="border border-lime-500/30 bg-black/70 backdrop-blur p-6">
                <div className="font-display font-black text-4xl text-lime-500">{s.v}</div>
                <div className="text-xs uppercase tracking-[0.2em] text-zinc-300 mt-2">{s.l}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Regions */}
      <section className="kg-section">
        <div className="max-w-[1400px] mx-auto">
          <div className="kg-eyebrow">Regional Coverage</div>
          <h2 className="kg-h2 mt-3">We supply <span className="text-lime-500">across India.</span></h2>
          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {REGIONS.map((r) => (
              <div key={r.name} className="kg-card p-7">
                <MapPin className="h-6 w-6 text-lime-500" />
                <h3 className="font-display font-bold text-xl mt-4">{r.name}</h3>
                <div className="flex flex-wrap gap-2 mt-4">
                  {r.states.map((s) => (
                    <span key={s} className="text-xs px-3 py-1 border border-zinc-800 text-zinc-300">{s}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="kg-section bg-surface-darker border-y border-zinc-900">
        <div className="max-w-[1400px] mx-auto">
          <div className="kg-eyebrow">Network Promise</div>
          <h2 className="kg-h2 mt-3 max-w-3xl">What our PAN India network <span className="text-lime-500">guarantees.</span></h2>
          <div className="mt-12 grid md:grid-cols-4 gap-5">
            {[
              { i: Truck, t: "Fast Dispatch", d: "48-hour dispatch from regional warehouses, door-step delivery PAN India." },
              { i: ShieldCheck, t: "Authorized Service", d: "Genuine warranty support through our authorized service network." },
              { i: Headphones, t: "Local Support", d: "Regional sales team that speaks your language and understands local farming." },
              { i: MapPin, t: "Last-mile Reach", d: "We serve over 1000+ pin codes including remote rural districts." },
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
