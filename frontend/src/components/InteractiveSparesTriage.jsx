"use client";

import { useState } from "react";
import { Wrench, ShoppingBag, MessageCircle, CheckSquare, Plus, Check, Copy } from "lucide-react";
import { HERO_SPARES_MACHINES, buildSparesWhatsAppUrl } from "@/data/heroSparesData";

export default function InteractiveSparesTriage() {
  const [selectedId, setSelectedId] = useState(HERO_SPARES_MACHINES[0].id);
  const activeMachine = HERO_SPARES_MACHINES.find((m) => m.id === selectedId) || HERO_SPARES_MACHINES[0];

  const [activePartId, setActivePartId] = useState(activeMachine.parts[0]?.id || 1);
  const [kitSkus, setKitSkus] = useState([]);
  const [activeSymptomIdx, setActiveSymptomIdx] = useState(0);
  const [copiedKit, setCopiedKit] = useState(false);

  const activePart = activeMachine.parts.find((p) => p.id === activePartId) || activeMachine.parts[0];
  const activeTriage = activeMachine.triage[activeSymptomIdx] || activeMachine.triage[0];
  const kitItems = activeMachine.parts.filter((p) => kitSkus.includes(p.sku));
  const kitTotal = kitItems.reduce((sum, p) => sum + p.priceInr, 0);

  function handleMachineChange(id) {
    const next = HERO_SPARES_MACHINES.find((m) => m.id === id);
    setSelectedId(id);
    if (next?.parts?.[0]) setActivePartId(next.parts[0].id);
    setActiveSymptomIdx(0);
  }

  function toggleKitItem(sku) {
    setKitSkus((prev) =>
      prev.includes(sku) ? prev.filter((s) => s !== sku) : [...prev, sku]
    );
  }

  const kitQuoteText = `Hello KrishiGears Parts Desk, I need a Spare Kit Quote for ${activeMachine.name} (${activeMachine.id}):\n${kitItems
    .map((p, idx) => `${idx + 1}. ${p.nameEn} (${p.sku}) - ₹${p.priceInr.toLocaleString("en-IN")}`)
    .join("\n")}\nEstimated Total (GST incl.): ₹${kitTotal.toLocaleString("en-IN")}\nPlease confirm fitment & dispatch.`;

  async function copyKitQuote() {
    try {
      await navigator.clipboard.writeText(kitQuoteText);
      setCopiedKit(true);
      setTimeout(() => setCopiedKit(false), 1800);
    } catch {
      // ignore clipboard errors
    }
  }

  return (
    <section
      id="exploded-spares-triage"
      data-testid="interactive-spares-triage"
      className="kg-section bg-zinc-950 border-t border-zinc-800"
    >
      <div className="max-w-[1200px] mx-auto space-y-8">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs uppercase tracking-wider font-bold mb-3">
            Interactive Assembly Finder & 60-Sec Field Triage
          </div>
          <h2 className="kg-h2 text-white">
            Exploded Spare Parts &amp; <span className="text-lime-400">DIY Check</span>
          </h2>
          <p className="mt-2 text-zinc-400 text-sm sm:text-base">
            Select a KrishiGears machine, tap any assembly hotspot to confirm SKU fitment &amp; GST-inclusive rate, or run the 60-second pre-warranty field check.
          </p>
        </div>

        {/* Machine Selector */}
        <div className="flex flex-wrap gap-2">
          {HERO_SPARES_MACHINES.map((m) => {
            const isActive = m.id === activeMachine.id;
            return (
              <button
                key={m.id}
                type="button"
                onClick={() => handleMachineChange(m.id)}
                className={`min-h-[44px] rounded-xl border px-4 py-2 text-left text-xs font-bold transition sm:text-sm ${
                  isActive
                    ? "border-lime-500 bg-lime-500 text-black"
                    : "border-zinc-800 bg-zinc-900 text-zinc-200 hover:border-lime-500"
                }`}
              >
                <span className="font-mono mr-1.5 opacity-80">{m.id}</span>
                <span>{m.category}</span>
              </button>
            );
          })}
        </div>

        <div className="grid grid-cols-1 gap-6 lg:grid-cols-12">
          {/* Diagram & Hotspots */}
          <div className="rounded-2xl border border-zinc-800 bg-zinc-900 p-5 lg:col-span-7">
            <div className="mb-3 flex flex-wrap items-center justify-between gap-2">
              <div>
                <div className="font-mono text-[11px] font-bold uppercase tracking-wider text-lime-400">
                  {activeMachine.category}
                </div>
                <h3 className="text-lg font-extrabold text-white sm:text-xl">
                  {activeMachine.name}
                </h3>
                <p className="text-xs text-zinc-400">{activeMachine.engineSpec}</p>
              </div>
              <span className="rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3 py-1 text-[11px] font-bold text-emerald-300">
                Tap numbered hotspot
              </span>
            </div>

            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-xl border border-zinc-700 bg-white">
              <img
                src={activeMachine.image}
                alt={activeMachine.name}
                className="h-full w-full object-contain p-4"
              />
              {activeMachine.parts.map((part) => {
                const selected = part.id === activePart.id;
                return (
                  <button
                    key={part.id}
                    type="button"
                    onClick={() => setActivePartId(part.id)}
                    style={{ left: `${part.x}%`, top: `${part.y}%` }}
                    aria-label={`${part.id}: ${part.nameEn}`}
                    className={`absolute -translate-x-1/2 -translate-y-1/2 flex h-9 w-9 items-center justify-center rounded-full border-2 font-mono text-xs font-extrabold shadow-md transition ${
                      selected
                        ? "z-20 scale-110 border-white bg-[#15803D] text-white ring-4 ring-[#15803D]/30"
                        : "z-10 border-[#0F172A] bg-white text-[#0F172A] hover:bg-[#ECFDF5]"
                    }`}
                  >
                    {part.id}
                  </button>
                );
              })}
            </div>

            <div className="mt-4 flex flex-wrap gap-2">
              {activeMachine.parts.map((part) => {
                const selected = part.id === activePart.id;
                return (
                  <button
                    key={part.id}
                    type="button"
                    onClick={() => setActivePartId(part.id)}
                    className={`min-h-[44px] rounded-full border px-3 py-1.5 text-xs font-semibold transition ${
                      selected
                        ? "border-lime-500 bg-lime-500/15 text-lime-300"
                        : "border-zinc-700 bg-zinc-950 text-zinc-300 hover:border-zinc-500"
                    }`}
                  >
                    <span className="font-mono mr-1 font-bold">#{part.id}</span>
                    {part.nameEn}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Part Detail & Kit Builder */}
          <div className="space-y-5 lg:col-span-5">
            {activePart && (
              <div className="rounded-2xl border border-zinc-800 bg-zinc-900 p-5 text-white">
                <div className="mb-2 flex flex-wrap items-center justify-between gap-2">
                  <span className="rounded-full border border-emerald-500/30 bg-emerald-500/10 px-2.5 py-1 font-mono text-[11px] font-bold text-emerald-300">
                    Assembly #{activePart.id} · {activePart.sku}
                  </span>
                  <span className="rounded-full border border-zinc-700 bg-zinc-950 px-2.5 py-1 text-[11px] font-semibold text-zinc-300">
                    Dispatches in {activePart.dispatch}
                  </span>
                </div>

                <h4 className="text-xl font-extrabold">{activePart.nameEn}</h4>
                <div className="mt-0.5 text-sm font-semibold text-zinc-400">
                  {activePart.nameHi}
                </div>

                <div className="mt-4 rounded-xl border border-zinc-800 bg-zinc-950 p-3.5 text-xs">
                  <div className="flex items-center justify-between">
                    <span className="text-zinc-400">Fitment Spec</span>
                    <span className="font-semibold text-zinc-200">{activePart.fitment}</span>
                  </div>
                  <div className="mt-2 flex items-center justify-between border-t border-zinc-800 pt-2">
                    <span className="text-zinc-400">GST-Inclusive Price</span>
                    <span className="text-xl font-extrabold text-lime-400 tabular-nums">
                      ₹{activePart.priceInr.toLocaleString("en-IN")}
                    </span>
                  </div>
                </div>

                <div className="mt-4 grid grid-cols-1 gap-2.5 sm:grid-cols-2">
                  <a
                    href={buildSparesWhatsAppUrl(
                      `Hello KrishiGears Parts Desk, I need ${activePart.nameEn} (SKU: ${activePart.sku}) for ${activeMachine.name} at ₹${activePart.priceInr}. Please confirm fitment & dispatch.`
                    )}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex min-h-[44px] items-center justify-center gap-2 rounded-xl bg-[#15803D] px-4 py-2.5 text-xs font-bold text-white hover:bg-[#166534]"
                  >
                    <MessageCircle className="h-4 w-4" />
                    Order on WhatsApp
                  </a>

                  <button
                    type="button"
                    onClick={() => toggleKitItem(activePart.sku)}
                    className={`inline-flex min-h-[44px] items-center justify-center gap-2 rounded-xl border px-4 py-2.5 text-xs font-bold transition ${
                      kitSkus.includes(activePart.sku)
                        ? "border-lime-500 bg-lime-500/15 text-lime-300"
                        : "border-zinc-700 bg-zinc-950 text-zinc-200 hover:border-lime-500"
                    }`}
                  >
                    {kitSkus.includes(activePart.sku) ? (
                      <>
                        <Check className="h-4 w-4" /> In Spare Kit
                      </>
                    ) : (
                      <>
                        <Plus className="h-4 w-4" /> Add to Spare Kit
                      </>
                    )}
                  </button>
                </div>
              </div>
            )}

            <div className="rounded-2xl border border-zinc-800 bg-zinc-900 p-5 text-white">
              <div className="mb-3 flex items-center justify-between">
                <div className="flex items-center gap-2 text-base font-extrabold">
                  <ShoppingBag className="h-4 w-4 text-lime-400" />
                  <span>Spare Kit Builder ({kitItems.length})</span>
                </div>
                <span className="text-base font-extrabold text-lime-400 tabular-nums">
                  ₹{kitTotal.toLocaleString("en-IN")}
                </span>
              </div>

              {kitItems.length === 0 ? (
                <p className="text-xs text-zinc-400">
                  Add wear parts above (blades, belts, filters) to build one combined WhatsApp parts quote.
                </p>
              ) : (
                <div className="space-y-2.5">
                  <ul className="space-y-1.5 text-xs text-zinc-200">
                    {kitItems.map((item) => (
                      <li key={item.sku} className="flex items-center justify-between gap-2 tabular-nums">
                        <span className="truncate font-medium">
                          {item.nameEn} (<span className="font-mono">{item.sku}</span>)
                        </span>
                        <span className="font-bold">₹{item.priceInr.toLocaleString("en-IN")}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="grid grid-cols-2 gap-2 pt-2">
                    <button
                      type="button"
                      onClick={copyKitQuote}
                      className="inline-flex min-h-[44px] items-center justify-center gap-1.5 rounded-xl border border-zinc-700 bg-zinc-950 px-3 text-xs font-bold text-zinc-200"
                    >
                      <Copy className="h-3.5 w-3.5" />
                      {copiedKit ? "Copied" : "Copy Quote"}
                    </button>
                    <a
                      href={buildSparesWhatsAppUrl(kitQuoteText)}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex min-h-[44px] items-center justify-center gap-1.5 rounded-xl bg-[#15803D] px-3 text-xs font-bold text-white hover:bg-[#166534]"
                    >
                      <MessageCircle className="h-3.5 w-3.5" />
                      Send Kit Order
                    </a>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* 60-Second Pre-Warranty Field Triage */}
        <div className="rounded-2xl border border-[#FDE68A] bg-[#FFFBEB] p-5 text-[#92400E]">
          <div className="mb-3 flex flex-wrap items-center justify-between gap-2">
            <div className="flex items-center gap-2">
              <Wrench className="h-5 w-5" />
              <h3 className="text-lg font-extrabold text-[#0F172A]">
                60-Second Pre-Warranty Field Triage — {activeMachine.id}
              </h3>
            </div>
            <a
              href={buildSparesWhatsAppUrl(
                `Hello KrishiGears Service Team, I ran the 60-sec field check for ${activeMachine.name} (Symptom: ${activeTriage?.symptom}). Need technician video call support.`
              )}
              target="_blank"
              rel="noreferrer"
              className="inline-flex min-h-[44px] items-center gap-2 rounded-xl bg-[#0F172A] px-4 py-2 text-xs font-bold text-white hover:bg-slate-800"
            >
              <MessageCircle className="h-4 w-4" />
              Book Technician Video Call
            </a>
          </div>

          <div className="mb-4 flex flex-wrap gap-2">
            {activeMachine.triage.map((item, idx) => (
              <button
                key={item.symptom}
                type="button"
                onClick={() => setActiveSymptomIdx(idx)}
                className={`min-h-[44px] rounded-xl border px-3.5 py-1.5 text-xs font-bold transition ${
                  idx === activeSymptomIdx
                    ? "border-[#92400E] bg-[#92400E] text-white"
                    : "border-[#FDE68A] bg-white text-[#92400E] hover:border-[#92400E]"
                }`}
              >
                {item.symptom}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 gap-2.5 md:grid-cols-3">
            {activeTriage?.checks.map((chk, idx) => (
              <div
                key={chk}
                className="flex items-start gap-2.5 rounded-xl border border-[#FDE68A] bg-white p-3.5 text-xs font-semibold text-[#0F172A]"
              >
                <CheckSquare className="mt-0.5 h-4 w-4 shrink-0 text-[#15803D]" />
                <span>
                  Step {idx + 1}: {chk}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
