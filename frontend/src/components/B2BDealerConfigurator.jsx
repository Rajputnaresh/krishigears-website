"use client";

import { useMemo, useState } from "react";
import { Layers, Plus, Minus, ShoppingCart, MessageCircle, Search } from "lucide-react";
import dealerCatalog from "@/data/dealerCatalog.json";

const WA_NUMBER = "916006078815";

const CROP_KITS = [
  {
    id: "sugarcane",
    name: "Sugarcane Contractor Kit",
    desc: "KG-186 10 HP Back Rotary + KG-TR15D Trencher",
    skus: ["KG-186-BR", "KG-TR15D"],
  },
  {
    id: "chc",
    name: "CHC / FPO Starter Fleet",
    desc: "KG-186 Weeder + Vardhman 2FP Reaper + KG-EEA700 Auger",
    skus: ["KG-186-BR", "VAR-2FP", "KG-EEA700"],
  },
  {
    id: "fpo-processing",
    name: "Horticulture Processing Kit",
    desc: "KG-FD16 24-Tray Dehydrator + KG-EEA700 Rig",
    skus: ["KG-FD16-24", "KG-EEA700"],
  },
];

function unitPriceForQty(item, qty) {
  if (qty >= 5) return item.moq_5_plus_inr;
  if (qty >= 2) return item.moq_2_4_inr;
  return item.retail_inr;
}

export default function B2BDealerConfigurator() {
  const allItems = useMemo(() => [...dealerCatalog.hero, ...dealerCatalog.catalog], []);
  const [brand, setBrand] = useState("");
  const [query, setQuery] = useState("");
  const [cart, setCart] = useState({ "KG-186-BR": 2 });

  const brands = useMemo(() => Array.from(new Set(allItems.map((i) => i.brand))).sort(), [allItems]);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return allItems.filter((item) => {
      if (brand && item.brand !== brand) return false;
      if (q && !item.title.toLowerCase().includes(q) && !item.sku.toLowerCase().includes(q) && !item.category.toLowerCase().includes(q)) {
        return false;
      }
      return true;
    });
  }, [allItems, brand, query]);

  function setQty(sku, nextQty) {
    setCart((prev) => {
      const copy = { ...prev };
      if (nextQty <= 0) delete copy[sku];
      else copy[sku] = nextQty;
      return copy;
    });
  }

  function applyCropKit(kit) {
    setCart((prev) => {
      const next = { ...prev };
      kit.skus.forEach((sku) => {
        next[sku] = Math.max(2, next[sku] || 0);
      });
      return next;
    });
  }

  const cartLines = Object.entries(cart)
    .map(([sku, qty]) => {
      const item = allItems.find((i) => i.sku === sku);
      if (!item || qty <= 0) return null;
      const unit = unitPriceForQty(item, qty);
      return { ...item, qty, unit, gross: unit * qty };
    })
    .filter(Boolean);

  const totalGross = cartLines.reduce((s, l) => s + l.gross, 0);
  const waQuote = `Hello KrishiGears B2B Desk, Wholesale MOQ Quote:\n${cartLines
    .map((l, idx) => `${idx + 1}. ${l.title} (${l.sku}) × ${l.qty} @ ₹${l.unit.toLocaleString("en-IN")} = ₹${l.gross.toLocaleString("en-IN")} (${l.gst_pct}% GST incl.)`)
    .join("\n")}\nGrand Total (GST incl.): ₹${totalGross.toLocaleString("en-IN")}`;

  return (
    <section
      id="b2b-moq-configurator"
      data-testid="b2b-dealer-configurator"
      className="mt-14 pt-12 border-t border-zinc-800 space-y-6"
    >
      <div className="space-y-2">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-lime-500/10 border border-lime-500/30 text-lime-400 text-xs uppercase tracking-wider font-bold">
          Self-Serve Dealer &amp; CHC Wholesale Configurator
        </div>
        <h2 className="text-2xl md:text-3xl font-display font-bold text-white">
          MOQ Slab Pricing &amp; <span className="text-lime-400">Crop-Kit Proforma Builder</span>
        </h2>
        <p className="text-zinc-400 text-sm max-w-2xl">
          Select approved models or apply a 1-click Crop/CHC Fleet Kit to compute MOQ 2–4 and 5+ wholesale slabs across {allItems.length} SKUs.
        </p>
      </div>

      {/* Crop Kits */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {CROP_KITS.map((kit) => (
          <button
            key={kit.id}
            type="button"
            onClick={() => applyCropKit(kit)}
            className="min-h-[44px] rounded-xl border border-zinc-800 bg-zinc-950 p-4 text-left hover:border-lime-500 transition"
          >
            <div className="flex items-center gap-2 text-lime-400 text-xs font-bold uppercase tracking-wider">
              <Layers className="h-3.5 w-3.5" />
              1-Click Fleet Kit
            </div>
            <div className="mt-1.5 font-bold text-white text-sm">{kit.name}</div>
            <div className="mt-1 text-xs text-zinc-400">{kit.desc}</div>
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
        {/* Catalog */}
        <div className="lg:col-span-8 space-y-4">
          <div className="grid grid-cols-1 sm:grid-cols-12 gap-3">
            <div className="relative sm:col-span-7">
              <Search className="pointer-events-none absolute left-3 top-3.5 h-4 w-4 text-zinc-500" />
              <input
                type="search"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search SKU, model, or category..."
                className="min-h-[44px] w-full rounded-lg border border-zinc-800 bg-black pl-9 pr-3 text-sm text-white"
              />
            </div>
            <select
              value={brand}
              onChange={(e) => setBrand(e.target.value)}
              className="sm:col-span-5 min-h-[44px] rounded-lg border border-zinc-800 bg-black px-3 text-sm text-white"
            >
              <option value="">All Approved Brands ({brands.length})</option>
              {brands.map((b) => (
                <option key={b} value={b}>{b}</option>
              ))}
            </select>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {filtered.slice(0, 16).map((item) => {
              const qty = cart[item.sku] || 0;
              return (
                <div key={item.sku} className="rounded-xl border border-zinc-800 bg-zinc-950 p-4 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between text-[11px]">
                      <span className="rounded-full bg-emerald-500/10 border border-emerald-500/30 px-2.5 py-0.5 font-mono text-emerald-300 font-bold">
                        {item.brand}
                      </span>
                      <span className="font-mono text-zinc-400">{item.gst_pct}% GST</span>
                    </div>
                    <h3 className="mt-2 font-bold text-white text-sm">{item.title}</h3>
                    <div className="mt-0.5 font-mono text-[11px] text-zinc-400">{item.sku}</div>
                  </div>

                  <div className="mt-3 pt-3 border-t border-zinc-800">
                    <div className="grid grid-cols-3 gap-1 text-[11px] tabular-nums">
                      <div>
                        <div className="text-zinc-500">1 Unit</div>
                        <div className="font-bold text-zinc-200">₹{item.retail_inr.toLocaleString("en-IN")}</div>
                      </div>
                      <div>
                        <div className="text-zinc-500">2–4 Units</div>
                        <div className="font-bold text-lime-400">₹{item.moq_2_4_inr.toLocaleString("en-IN")}</div>
                      </div>
                      <div>
                        <div className="text-zinc-500">5+ Units</div>
                        <div className="font-bold text-emerald-400">₹{item.moq_5_plus_inr.toLocaleString("en-IN")}</div>
                      </div>
                    </div>
                    <div className="mt-3 flex items-center justify-between">
                      <div className="inline-flex items-center gap-1 rounded-lg border border-zinc-800 bg-black p-1">
                        <button
                          type="button"
                          onClick={() => setQty(item.sku, qty - 1)}
                          aria-label={`Decrease ${item.sku}`}
                          className="h-9 w-9 flex items-center justify-center rounded text-zinc-300 hover:bg-zinc-800"
                        >
                          <Minus className="h-3.5 w-3.5" />
                        </button>
                        <span className="w-8 text-center font-mono text-xs font-bold text-white tabular-nums">{qty}</span>
                        <button
                          type="button"
                          onClick={() => setQty(item.sku, qty + 1)}
                          aria-label={`Increase ${item.sku}`}
                          className="h-9 w-9 flex items-center justify-center rounded bg-lime-500 text-black"
                        >
                          <Plus className="h-3.5 w-3.5" />
                        </button>
                      </div>
                      {qty > 0 && (
                        <span className="font-bold text-lime-400 text-sm tabular-nums">
                          ₹{(unitPriceForQty(item, qty) * qty).toLocaleString("en-IN")}
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Proforma Summary */}
        <aside className="lg:col-span-4 rounded-xl border border-zinc-800 bg-zinc-950 p-5 space-y-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2 font-bold text-white">
              <ShoppingCart className="h-4 w-4 text-lime-400" />
              <span>Wholesale Quote</span>
            </div>
            <span className="font-mono text-[11px] text-lime-400">GSTIN 08AANCK2216L1ZA</span>
          </div>

          {cartLines.length === 0 ? (
            <p className="text-xs text-zinc-400">Add SKUs on the left to build your MOQ wholesale quote.</p>
          ) : (
            <>
              <div className="divide-y divide-zinc-800 text-xs">
                {cartLines.map((l) => (
                  <div key={l.sku} className="py-2 flex justify-between gap-2 tabular-nums">
                    <div>
                      <div className="font-semibold text-white">{l.title}</div>
                      <div className="font-mono text-[11px] text-zinc-400">
                        {l.qty} × ₹{l.unit.toLocaleString("en-IN")}
                      </div>
                    </div>
                    <div className="font-bold text-lime-400">₹{l.gross.toLocaleString("en-IN")}</div>
                  </div>
                ))}
              </div>
              <div className="border-t border-zinc-800 pt-3 flex justify-between font-bold text-white tabular-nums">
                <span>Total (GST Incl.)</span>
                <span className="text-lime-400">₹{totalGross.toLocaleString("en-IN")}</span>
              </div>
              <a
                href={`https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(waQuote)}`}
                target="_blank"
                rel="noreferrer"
                className="inline-flex min-h-[44px] w-full items-center justify-center gap-2 rounded-lg bg-lime-500 hover:bg-lime-400 text-black font-bold text-sm"
              >
                <MessageCircle className="h-4 w-4" />
                Send Wholesale Quote on WhatsApp
              </a>
            </>
          )}
        </aside>
      </div>
    </section>
  );
}
