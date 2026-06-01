import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { CATEGORIES } from "@/data/catalog";
import EnquiryDialog from "@/components/EnquiryDialog";

export default function Products() {
  return (
    <div data-testid="products-page" className="kg-section">
      <div className="max-w-[1400px] mx-auto">
        <div className="kg-eyebrow">Product Catalogue</div>
        <h1 className="kg-h1 mt-4 max-w-3xl">A complete range of <span className="text-lime-500">agricultural machinery.</span></h1>
        <p className="text-zinc-400 mt-6 max-w-2xl leading-relaxed">
          Explore our 19 product categories — from heavy-duty tillers to precision sprayers and genuine spare parts. Tap any category to view models, specs and request a quote.
        </p>

        <div className="mt-12 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
          {CATEGORIES.map((c) => {
            const Icon = c.icon;
            return (
              <Link
                key={c.slug}
                to={`/products/category/${c.slug}`}
                data-testid={`products-cat-${c.slug}`}
                className="kg-card group overflow-hidden flex flex-col"
              >
                <div className="aspect-square bg-zinc-900 relative overflow-hidden">
                  <img src={c.image} alt={c.name} className="absolute inset-0 w-full h-full object-cover opacity-40 group-hover:opacity-60 group-hover:scale-105 transition duration-700" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent"></div>
                  <Icon className="absolute top-4 left-4 h-6 w-6 text-lime-500" />
                  <div className="absolute bottom-4 left-4 right-4">
                    <div className="text-[10px] tracking-[0.25em] uppercase text-lime-500 font-bold">Category</div>
                    <div className="font-display font-bold text-lg leading-tight mt-1">{c.name}</div>
                  </div>
                </div>
                <div className="p-4 flex items-center justify-between">
                  <span className="text-xs text-zinc-500">{c.short.slice(0, 36)}…</span>
                  <ArrowRight className="h-4 w-4 text-lime-500 group-hover:translate-x-1 transition" />
                </div>
              </Link>
            );
          })}
        </div>

        <div className="mt-16 border border-lime-500/30 bg-lime-500/5 p-8 md:p-10 flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div>
            <div className="kg-eyebrow">Bulk / Institutional</div>
            <h3 className="font-display font-bold text-2xl mt-2">Need a bulk quotation or government tender pricing?</h3>
            <p className="text-zinc-400 mt-2 text-sm">FPOs, agri input stores, contractors and institutions — talk to us.</p>
          </div>
          <div className="flex gap-3">
            <Link to="/bulk-order" data-testid="products-bulk-link" className="bg-lime-500 hover:bg-lime-400 text-black font-bold px-6 py-3.5 rounded-md">Bulk Order</Link>
            <EnquiryDialog trigger={
              <button data-testid="products-enquiry" className="border border-zinc-700 hover:border-lime-500 hover:text-lime-500 px-6 py-3.5 font-bold rounded-md">Request Price</button>
            } />
          </div>
        </div>
      </div>
    </div>
  );
}
