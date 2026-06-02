import { Link } from "react-router-dom";
import { ShieldCheck, Award, Users, MapPin, Tractor, HeartHandshake, ArrowRight } from "lucide-react";
import { COMPANY, ABSTRACT_TERRAIN, FIELD_TRACTOR, FARMER_FIELD } from "@/data/catalog";

export default function About() {
  return (
    <div data-testid="about-page">
      {/* Hero */}
      <section className="relative kg-section">
        <div className="absolute inset-0 opacity-20" style={{ backgroundImage: `url(${ABSTRACT_TERRAIN})`, backgroundSize: "cover" }}/>
        <div className="max-w-[1200px] mx-auto relative">
          <div className="kg-eyebrow">About {COMPANY.name}</div>
          <h1 className="kg-h1 mt-4 max-w-3xl text-balance">Standing with farmers, every season, <span className="text-lime-500">hamesha.</span></h1>
          <p className="mt-6 text-zinc-400 max-w-2xl leading-relaxed text-lg">
            {COMPANY.name} is one of India's trusted names in premium agricultural machinery — a homegrown brand built to bring rugged, dependable equipment within reach of every Indian farmer, from small landholders to large contractors and institutions.
          </p>
        </div>
      </section>

      {/* Mission / Story */}
      <section className="kg-section bg-[#080808] border-y border-zinc-900">
        <div className="max-w-[1200px] mx-auto grid lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6 order-2 lg:order-1">
            <div className="kg-eyebrow">Our Mission</div>
            <h2 className="kg-h2 mt-3">Productivity & dignity <span className="text-lime-500">for every farmer.</span></h2>
            <p className="text-zinc-400 mt-6 leading-relaxed">
              We started KrishiGears with a simple belief: every Indian farmer deserves access to premium-quality machinery, genuine spare parts and honest service — no matter how small or remote their farm.
            </p>
            <p className="text-zinc-400 mt-4 leading-relaxed">
              Today, we proudly supply a complete range of power tillers, weeders, brush cutters, sprayers, reapers and spare parts across India, with PAN-India dispatch and dedicated dealer assistance.
            </p>
          </div>
          <div className="lg:col-span-6 order-1 lg:order-2">
            <div className="aspect-[5/4] overflow-hidden border border-zinc-800">
              <img src={FIELD_TRACTOR} alt="Farm" className="w-full h-full object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="kg-section">
        <div className="max-w-[1200px] mx-auto">
          <div className="kg-eyebrow">What we stand for</div>
          <h2 className="kg-h2 mt-3">Our values, <span className="text-lime-500">in action.</span></h2>
          <div className="mt-12 grid md:grid-cols-3 gap-5">
            {[
              { icon: ShieldCheck, t: "Genuine, always", d: "100% original products and OEM-grade spare parts — sourced directly from authorized manufacturers." },
              { icon: HeartHandshake, t: "Farmer-first service", d: "Quick response, honest pricing and a dedicated support team for every order." },
              { icon: Users, t: "Strong dealer network", d: "We grow with our partners — fair margins, marketing support, training and priority supply." },
              { icon: MapPin, t: "PAN India reach", d: "From Punjab to Tamil Nadu, Gujarat to Assam — we deliver where farmers need us." },
              { icon: Tractor, t: "Built for Indian farms", d: "Rugged machines tuned for Indian soil, crops and operating conditions." },
              { icon: Award, t: "Warranty support", d: "Every machine comes with a manufacturer warranty and after-sales service network." },
            ].map((v, i) => {
              const I = v.icon;
              return (
                <div key={i} className="kg-card p-7">
                  <I className="h-7 w-7 text-lime-500" />
                  <h3 className="font-display font-bold text-xl mt-4">{v.t}</h3>
                  <p className="text-zinc-400 text-sm mt-2 leading-relaxed">{v.d}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="kg-section bg-[#080808] border-y border-zinc-900">
        <div className="max-w-[1200px] mx-auto text-center">
          <h2 className="kg-h2 max-w-3xl mx-auto text-balance">Ready to bring KrishiGears to <span className="text-lime-500">your district?</span></h2>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link to="/become-a-dealer" data-testid="about-become-dealer" className="bg-lime-500 hover:bg-lime-400 text-black font-bold px-7 py-4 rounded-md inline-flex items-center gap-2">
              Become a Dealer <ArrowRight className="h-4 w-4" />
            </Link>
            <Link to="/contact" data-testid="about-contact" className="border border-zinc-700 hover:border-lime-500 hover:text-lime-500 px-7 py-4 font-bold rounded-md">
              Contact Sales
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
