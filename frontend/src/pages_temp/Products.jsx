"use client";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { CATEGORIES, PRODUCTS, FARMINGTOOLS_URL } from "@/data/catalog";

export default function Products() {
  return (
    <div data-testid="products-page" className="kg-section bg-background text-zinc-100">
      <div className="max-w-[1400px] mx-auto">
        <div className="kg-eyebrow">Products We Supply</div>
        <h1 className="kg-h1 mt-4 max-w-3xl text-white">
          Our 19 product categories for <span className="text-lime-500">dealers, bulk buyers, FPOs, contractors, institutions and OEM distribution.</span>
        </h1>
        <p className="text-zinc-300 mt-6 max-w-2xl leading-relaxed">
          Explore our 19 product categories for dealers, bulk buyers, FPOs, contractors, institutions and OEM distribution. Retail buyers should purchase online through FarmingTools.in.
        </p>

        <div className="mt-12 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
          {CATEGORIES.map((c) => {
            const Icon = c.icon;
            return (
              <Link
                key={c.slug}
                href={`/products/category/${c.slug}`}
                data-testid={`products-cat-${c.slug}`}
                className="kg-card group overflow-hidden flex flex-col border-zinc-800 bg-surface"
              >
                <div className="aspect-square bg-zinc-900 relative overflow-hidden">
                  <img src={c.image} alt={c.name} loading="lazy" className="absolute inset-0 w-full h-full object-cover opacity-40 group-hover:opacity-60 group-hover:scale-105 transition duration-700" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent"></div>
                  <Icon className="absolute top-4 left-4 h-6 w-6 text-lime-500" />
                  <div className="absolute bottom-4 left-4 right-4">
                    <div className="text-[10px] tracking-[0.25em] uppercase text-lime-400 font-bold">Category</div>
                    <div className="font-display font-bold text-lg leading-tight mt-1 text-white">{c.name}</div>
                  </div>
                </div>
                <div className="p-4 flex items-center justify-between">
                  <span className="text-xs text-zinc-400">{(c.short || "Explore category").slice(0, 36)}…</span>
                  <ArrowRight className="h-4 w-4 text-lime-400 group-hover:translate-x-1 transition" />
                </div>
              </Link>
            );
          })}
        </div>

        {/* Featured Commercial Models Grid */}
        <div className="mt-16">
          <div className="flex items-center justify-between mb-8 pb-4 border-b border-zinc-800">
            <div>
              <div className="kg-eyebrow">Featured Supply Models</div>
              <h2 className="kg-h2 mt-1 text-white">Commercial Farm Equipment & Fitment Spares</h2>
            </div>
            <Link href="/bulk-order" className="text-xs text-lime-400 hover:underline">
              Request Price List & Quotation →
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
            {PRODUCTS.map((prod) => (
              <div key={prod.slug} className="kg-card p-5 border border-zinc-800 bg-surface rounded-lg flex flex-col justify-between group hover:border-lime-500/40 transition">
                <div>
                  <div className="flex items-center justify-between text-[11px] text-zinc-400 mb-2">
                    <span className="text-lime-400 font-bold uppercase tracking-wider">{prod.category.replace(/-/g, " ")}</span>
                    <span>{prod.model}</span>
                  </div>
                  <h3 className="font-display font-bold text-white text-base group-hover:text-lime-400 transition-colors">
                    {prod.name}
                  </h3>
                  <p className="text-xs text-zinc-400 mt-2 line-clamp-2">
                    {prod.features?.[0] || "Heavy-duty commercial agricultural machine built to FMTTI standards."}
                  </p>
                </div>
                <div className="mt-5 pt-3 border-t border-zinc-800/80 flex items-center justify-between">
                  <Link
                    href={`/products/${prod.slug}`}
                    className="text-xs font-bold text-lime-400 hover:text-lime-300 inline-flex items-center gap-1"
                  >
                    View Specs <ArrowRight className="h-3.5 w-3.5" />
                  </Link>
                  <Link
                    href={`/products/category/${prod.category}`}
                    className="text-[11px] text-zinc-400 hover:text-white transition-colors"
                  >
                    Category Hub →
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* B2B Procurement FAQ */}
        <div className="mt-16 bg-zinc-950 border border-zinc-800 p-8 rounded-xl space-y-6">
          <div className="space-y-1">
            <span className="text-xs font-bold text-lime-400 uppercase tracking-widest">B2B Wholesale Procurement Guide</span>
            <h2 className="text-xl md:text-2xl font-display font-bold text-white">
              Commercial Farm Machinery Supply & Dealership FAQ
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6 text-sm">
            <div className="space-y-2 border border-zinc-850 p-4 rounded-lg bg-zinc-900/30">
              <h3 className="font-bold text-white text-sm">How do machinery dealers and retailers place wholesale orders?</h3>
              <p className="text-zinc-400 text-xs leading-relaxed">
                Dealers can order directly through our Jaipur central desk by submitting an inquiry on our portal or contacting our B2B desk via WhatsApp (+91 60060 78815). We provide standard GST invoices with input tax credit and fast dispatch across all 740 districts.
              </p>
            </div>
            <div className="space-y-2 border border-zinc-850 p-4 rounded-lg bg-zinc-900/30">
              <h3 className="font-bold text-white text-sm">What is the introductory MOQ for new authorized dealers?</h3>
              <p className="text-zinc-400 text-xs leading-relaxed">
                KrishiGears allows new rural machinery shops to start with as few as 2 to 3 units per batch, allowing you to test local farmer demand with zero speculative inventory risk.
              </p>
            </div>
            <div className="space-y-2 border border-zinc-850 p-4 rounded-lg bg-zinc-900/30">
              <h3 className="font-bold text-white text-sm">Are KrishiGears models compliant with Government Subsidy schemes?</h3>
              <p className="text-zinc-400 text-xs leading-relaxed">
                Yes, our power weeders and intercultivators are designed to meet FMTTI / SRFMTTI testing guidelines. We provide certified commercial test reports and engine serial documentation for State DBT Agriculture portals.
              </p>
            </div>
            <div className="space-y-2 border border-zinc-850 p-4 rounded-lg bg-zinc-900/30">
              <h3 className="font-bold text-white text-sm">How fast are replacement spare parts dispatched to workshops?</h3>
              <p className="text-zinc-400 text-xs leading-relaxed">
                All high-wear spare parts including carburetors, recoil starters, Viton oil seals, and 32-piece blade sets are packed and dispatched within 24 to 48 hours from our central Jaipur godown.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-16 border border-lime-500/30 bg-lime-500/5 p-8 md:p-10 flex flex-col md:flex-row md:items-center justify-between gap-6 rounded-lg">
          <div>
            <div className="kg-eyebrow">Bulk / Institutional</div>
            <h3 className="font-display font-bold text-2xl mt-2 text-white">Need a bulk quotation or government tender pricing?</h3>
            <p className="text-zinc-300 mt-2 text-sm">FPOs, agri input stores, contractors and institutions — talk to us.</p>
          </div>
          <div className="flex flex-wrap gap-3">
            <a href={FARMINGTOOLS_URL} target="_blank" rel="noreferrer" data-testid="products-buy-online" className="bg-lime-500 hover:bg-lime-400 text-black font-bold px-6 py-3.5 rounded-md shadow-lg shadow-lime-500/20">Buy Online</a>
            <Link href="/bulk-order" data-testid="products-bulk-link" className="border border-zinc-700 hover:border-lime-500 hover:text-lime-400 text-zinc-200 px-6 py-3.5 font-bold rounded-md">Bulk Order Inquiry</Link>
            <Link href="/become-a-dealer" data-testid="products-dealer-link" className="border border-zinc-700 hover:border-lime-500 hover:text-lime-400 text-zinc-200 px-6 py-3.5 font-bold rounded-md">Become Dealer</Link>
          </div>
        </div>
      </div>
    </div>
  );
}
