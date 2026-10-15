"use client";

import { useState } from "react";

export default function FarmerUtilityEngine() {
  const [activeTab, setActiveTab] = useState("fuel"); // "fuel" | "fitment"

  // Fuel Mix State
  const [petrolLiters, setPetrolLiters] = useState(2);
  const [ratio, setRatio] = useState(40); // 25, 40, 50

  // Shaft Fitment State
  const [shaftDiameter, setShaftDiameter] = useState("28mm"); // "26mm" | "28mm"
  const [splineTeeth, setSplineTeeth] = useState("9T"); // "9T" | "7T" | "square"

  // Calculation: ml of 2T oil = (Liters * 1000) / Ratio
  const oilMl = Math.round((petrolLiters * 1000) / ratio);

  // WhatsApp Pre-fill
  const waFuelText = encodeURIComponent(
    `Hello KrishiGears, I calculated 2T oil mix: ${petrolLiters}L petrol with ${ratio}:1 ratio needs ${oilMl}ml oil. Need advice on best 2T oil and machine spare parts.`
  );
  const waFitmentText = encodeURIComponent(
    `Hello KrishiGears, I am checking attachment fitment for ${shaftDiameter} pipe with ${splineTeeth} spline shaft. Please confirm compatible weeder & tiller attachments.`
  );

  return (
    <section
      id="farmer-tools"
      className="py-16 sm:py-24 bg-zinc-950 border-t border-zinc-900"
      data-testid="farmer-utility-engine"
    >
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 md:px-12">
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-lime-500/10 border border-lime-500/30 text-lime-400 text-xs uppercase tracking-wider font-bold mb-4">
            Farmer & Dealer Field Utility
          </div>
          <h2 className="kg-h2 text-white">
            Field Calculators & <span className="text-lime-400">Fitment Matcher</span>
          </h2>
          <p className="mt-3 text-zinc-400 text-sm sm:text-base">
            Solve the two most common machine failures in the field: incorrect 2-stroke oil mix and mismatched attachment splines.
          </p>

          {/* Mode Switcher Tabs */}
          <div className="inline-flex p-1 mt-6 rounded-xl bg-zinc-900 border border-zinc-800 shadow-inner">
            <button
              onClick={() => setActiveTab("fuel")}
              className={`px-5 py-2.5 rounded-lg text-xs sm:text-sm font-bold transition-all duration-150 active:scale-95 ${
                activeTab === "fuel"
                  ? "bg-lime-500 text-black shadow-md font-extrabold"
                  : "text-zinc-400 hover:text-white"
              }`}
            >
              2T Oil & Fuel Mix Calculator
            </button>
            <button
              onClick={() => setActiveTab("fitment")}
              className={`px-5 py-2.5 rounded-lg text-xs sm:text-sm font-bold transition-all duration-150 active:scale-95 ${
                activeTab === "fitment"
                  ? "bg-lime-500 text-black shadow-md font-extrabold"
                  : "text-zinc-400 hover:text-white"
              }`}
            >
              Shaft & Attachment Fitment Checker
            </button>
          </div>
        </div>

        {activeTab === "fuel" ? (
          /* TAB 1: 2T OIL & FUEL MIX CALCULATOR */
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Input Controls */}
            <div className="lg:col-span-7 p-6 sm:p-8 rounded-2xl bg-zinc-900/90 border border-zinc-800 shadow-xl space-y-6">
              <div>
                <label className="block text-zinc-300 font-bold text-sm sm:text-base mb-2">
                  Petrol Quantity: <span className="text-lime-400 font-extrabold text-xl">{petrolLiters} Liters</span>
                </label>
                <input
                  type="range"
                  min="0.5"
                  max="15"
                  step="0.5"
                  value={petrolLiters}
                  onChange={(e) => setPetrolLiters(parseFloat(e.target.value))}
                  className="kg-range-slider w-full h-2.5 bg-zinc-800 rounded-lg appearance-none cursor-pointer accent-lime-500 border border-zinc-700/60"
                />
                <div className="flex justify-between text-xs text-zinc-400 font-semibold mt-1.5">
                  <span>0.5L (Single tank)</span>
                  <span>5L (Canister)</span>
                  <span>10L</span>
                  <span>15L (Bulk pre-mix)</span>
                </div>
              </div>

              {/* Ratio Selector */}
              <div>
                <label className="block text-zinc-300 font-bold text-sm sm:text-base mb-3">
                  Engine Mixing Ratio
                </label>
                <div className="grid grid-cols-3 gap-3">
                  {[
                    { r: 25, label: "25:1", desc: "Break-in / Heavy Duty" },
                    { r: 40, label: "40:1", desc: "Standard (Recommended)" },
                    { r: 50, label: "50:1", desc: "Premium Synthetic" },
                  ].map((item) => (
                    <button
                      key={item.r}
                      type="button"
                      onClick={() => setRatio(item.r)}
                      className={`p-3 rounded-xl border text-left transition-all active:scale-95 ${
                        ratio === item.r
                          ? "bg-lime-500/10 border-lime-500 text-lime-400 font-bold ring-1 ring-lime-500"
                          : "bg-zinc-950 border-zinc-800 text-zinc-400 hover:border-zinc-700"
                      }`}
                    >
                      <span className="block text-base sm:text-lg font-extrabold text-white">
                        {item.label}
                      </span>
                      <span className="block text-[11px] leading-tight text-zinc-400 mt-0.5">
                        {item.desc}
                      </span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Quick reference advice */}
              <div className="p-4 rounded-xl bg-zinc-950 border border-zinc-800/80 text-xs sm:text-sm text-zinc-400 leading-relaxed space-y-2">
                <p>
                  <strong className="text-zinc-200">Mechanic Tip:</strong> Always pour 2T oil into the canister <em className="text-lime-300 not-italic">before</em> adding petrol, then shake vigorously for 30 seconds. Never mix fuel directly inside the machine’s fuel tank.
                </p>
                <p className="text-zinc-500 text-[11px]">
                  Applicable for: Balwaan BX-35/BE-52, Neptune CS-58M, Royal Kissan 52cc/63cc engines, and all 2-stroke agricultural implements.
                </p>
              </div>
            </div>

            {/* Calculated Output Card */}
            <div className="kg-output-card lg:col-span-5 p-6 sm:p-8 rounded-2xl bg-zinc-900 border border-zinc-800 shadow-2xl flex flex-col justify-between space-y-6">
              <div>
                <span className="text-xs uppercase tracking-widest text-zinc-400 font-extrabold">
                  Accurate Measure Required
                </span>
                <div className="mt-2 flex items-baseline gap-2">
                  <span className="text-5xl sm:text-6xl font-black text-lime-400 tracking-tight">
                    {oilMl}
                  </span>
                  <span className="text-2xl font-bold text-white">ml of 2T Oil</span>
                </div>
                <p className="mt-2 text-zinc-300 text-sm leading-relaxed">
                  Add exactly <strong className="text-white font-bold">{oilMl} ml</strong> of quality 2-stroke engine oil into <strong className="text-white font-bold">{petrolLiters} liters</strong> of fresh unleaded petrol.
                </p>
              </div>

              {/* Visual Dosing Aid */}
              <div className="p-4 rounded-xl bg-zinc-950 border border-zinc-800 space-y-2">
                <div className="flex justify-between text-xs font-bold text-zinc-300">
                  <span>Dosing Cap Reference:</span>
                  <span className="text-lime-400 font-extrabold">~{Math.round(oilMl / 25)} standard caps (25ml each)</span>
                </div>
                <div className="w-full bg-zinc-800 rounded-full h-3 overflow-hidden border border-zinc-700/50">
                  <div
                    className="bg-lime-500 h-3 rounded-full transition-all duration-300"
                    style={{ width: `${Math.min(100, (oilMl / 400) * 100)}%` }}
                  />
                </div>
                <span className="block text-[11px] text-zinc-400">
                  Calibrated for 2-stroke JASO FC / FD grade oil specifications.
                </span>
              </div>

              <a
                href={`https://wa.me/916006078815?text=${waFuelText}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 px-6 py-4 rounded-xl bg-lime-500 hover:bg-lime-400 text-black font-extrabold text-sm sm:text-base shadow-lg transition-transform active:scale-95"
              >
                <span>Ask Technician on WhatsApp</span>
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                  <path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.816 9.816 0 0 0 12.04 2z" />
                </svg>
              </a>
            </div>
          </div>
        ) : (
          /* TAB 2: SHAFT & ATTACHMENT FITMENT CHECKER */
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Input Selection */}
            <div className="lg:col-span-7 p-6 sm:p-8 rounded-2xl bg-zinc-900/90 border border-zinc-800 shadow-xl space-y-6">
              <div>
                <label className="block text-zinc-300 font-bold text-sm sm:text-base mb-3">
                  1. Outer Pole Diameter (Shaft Pipe)
                </label>
                <div className="grid grid-cols-2 gap-4">
                  {[
                    { id: "28mm", label: "28 mm Outer Pipe", desc: "Heavy Duty Commercial (90% Weeders)" },
                    { id: "26mm", label: "26 mm Outer Pipe", desc: "Lightweight Sidepack / Japanese Models" },
                  ].map((p) => (
                    <button
                      key={p.id}
                      type="button"
                      onClick={() => setShaftDiameter(p.id)}
                      className={`p-4 rounded-xl border text-left transition-all active:scale-95 ${
                        shaftDiameter === p.id
                          ? "bg-lime-500/10 border-lime-500 text-lime-400 font-bold ring-1 ring-lime-500"
                          : "bg-zinc-950 border-zinc-800 text-zinc-400 hover:border-zinc-700"
                      }`}
                    >
                      <span className="block text-base font-extrabold text-white">{p.label}</span>
                      <span className="block text-xs text-zinc-400 mt-1">{p.desc}</span>
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-zinc-300 font-bold text-sm sm:text-base mb-3">
                  2. Internal Drive Shaft Type (Teeth / Spline)
                </label>
                <div className="grid grid-cols-3 gap-3">
                  {[
                    { id: "9T", label: "9 Teeth (9T)", desc: "Standard Star Spine (Most Common)" },
                    { id: "7T", label: "7 Teeth (7T)", desc: "Older Model Spline" },
                    { id: "square", label: "Square (5.5mm)", desc: "Direct Square Drive Shaft" },
                  ].map((s) => (
                    <button
                      key={s.id}
                      type="button"
                      onClick={() => setSplineTeeth(s.id)}
                      className={`p-3 rounded-xl border text-left transition-all active:scale-95 ${
                        splineTeeth === s.id
                          ? "bg-lime-500/10 border-lime-500 text-lime-400 font-bold ring-1 ring-lime-500"
                          : "bg-zinc-950 border-zinc-800 text-zinc-400 hover:border-zinc-700"
                      }`}
                    >
                      <span className="block text-sm sm:text-base font-extrabold text-white">{s.label}</span>
                      <span className="block text-[11px] text-zinc-400 mt-0.5">{s.desc}</span>
                    </button>
                  ))}
                </div>
              </div>

              <div className="p-4 rounded-xl bg-zinc-950 border border-zinc-800/80 text-xs sm:text-sm text-zinc-400">
                <p>
                  <strong className="text-zinc-200">How to verify:</strong> Unscrew the two bolts on the gearbox gear head. Slide out the internal solid steel drive shaft and count the number of ridges/teeth on the end.
                </p>
              </div>
            </div>

            {/* Fitment Compatibility Results */}
            <div className="kg-output-card lg:col-span-5 p-6 sm:p-8 rounded-2xl bg-zinc-900 border border-zinc-800 shadow-2xl space-y-6">
              <div>
                <span className="text-xs uppercase tracking-widest text-zinc-400 font-extrabold">
                  Verified Fitment Specification
                </span>
                <h3 className="text-2xl font-black text-white mt-1">
                  {shaftDiameter} &times; {splineTeeth} Fitment
                </h3>
              </div>

              <div className="space-y-3">
                <div className="flex items-center justify-between p-3.5 rounded-xl bg-zinc-950 border border-zinc-800">
                  <span className="text-sm font-semibold text-zinc-300">Weeder / Tiller Attachment</span>
                  <span className={`text-xs px-2.5 py-1 rounded font-bold ${
                    shaftDiameter === "28mm" && splineTeeth === "9T"
                      ? "bg-lime-500/20 text-lime-400 border border-lime-500/30"
                      : "bg-amber-500/20 text-amber-300 border border-amber-500/30"
                  }`}>
                    {shaftDiameter === "28mm" && splineTeeth === "9T" ? "100% In-Stock Fit" : "Check Adapter"}
                  </span>
                </div>

                <div className="flex items-center justify-between p-3.5 rounded-xl bg-zinc-950 border border-zinc-800">
                  <span className="text-sm font-semibold text-zinc-300">Chainsaw Pole Pruner</span>
                  <span className={`text-xs px-2.5 py-1 rounded font-bold ${
                    splineTeeth === "9T"
                      ? "bg-lime-500/20 text-lime-400 border border-lime-500/30"
                      : "bg-zinc-800 text-zinc-400"
                  }`}>
                    {splineTeeth === "9T" ? "Direct Bolt-On" : "Requires 9T Shaft"}
                  </span>
                </div>

                <div className="flex items-center justify-between p-3.5 rounded-xl bg-zinc-950 border border-zinc-800">
                  <span className="text-sm font-semibold text-zinc-300">Paddy Guard & 80T Blade</span>
                  <span className="text-xs px-2.5 py-1 rounded font-bold bg-lime-500/20 text-lime-400 border border-lime-500/30">
                    Universal Fit (All Models)
                  </span>
                </div>

                <div className="flex items-center justify-between p-3.5 rounded-xl bg-zinc-950 border border-zinc-800">
                  <span className="text-sm font-semibold text-zinc-300">Water Pump Attachment</span>
                  <span className={`text-xs px-2.5 py-1 rounded font-bold ${
                    shaftDiameter === "28mm"
                      ? "bg-lime-500/20 text-lime-400 border border-lime-500/30"
                      : "bg-zinc-800 text-zinc-400"
                  }`}>
                    {shaftDiameter === "28mm" ? "Compatible (28mm)" : "Need Bushing Ring"}
                  </span>
                </div>
              </div>

              <a
                href={`https://wa.me/916006078815?text=${waFitmentText}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 px-6 py-4 rounded-xl bg-lime-500 hover:bg-lime-400 text-black font-extrabold text-sm sm:text-base shadow-lg transition-transform active:scale-95"
              >
                <span>Confirm Fitment with Engineer</span>
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                  <path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.816 9.816 0 0 0 12.04 2z" />
                </svg>
              </a>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
