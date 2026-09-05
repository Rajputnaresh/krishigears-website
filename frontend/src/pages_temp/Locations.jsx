"use client";

import React, { useState, useMemo } from "react";
import Link from "next/link";
import { MapPin, Search, ChevronRight, Building, Wrench, Tractor, Scissors, Drill, Sparkles, X } from "lucide-react";
import locationsData from "@/data/locations.json";

export default function Locations() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedState, setSelectedState] = useState("ALL");

  // Group all 740 districts by State
  const { states, groupedData, totalCount } = useMemo(() => {
    const groups = {};
    const stateSet = new Set();
    let count = 0;

    Object.entries(locationsData).forEach(([districtName, data]) => {
      const state = data.state || "Other";
      stateSet.add(state);
      if (!groups[state]) groups[state] = [];
      const slug = districtName.toLowerCase().replace(/ /g, "-").replace(/[()]/g, "");
      groups[state].push({
        districtName,
        slug,
        state: data.state,
        soil_type: data.soil_type,
        farming_profile: data.farming_profile,
        key_crops: data.key_crops || []
      });
      count++;
    });

    return {
      states: ["ALL", ...Array.from(stateSet).sort()],
      groupedData: groups,
      totalCount: count
    };
  }, []);

  const filteredData = useMemo(() => {
    const result = {};
    const term = searchTerm.toLowerCase().trim();

    Object.entries(groupedData).forEach(([state, districts]) => {
      if (selectedState !== "ALL" && state !== selectedState) return;

      const matchedDistricts = districts.filter(d => {
        if (!term) return true;
        return (
          d.districtName.toLowerCase().includes(term) ||
          d.state.toLowerCase().includes(term) ||
          (d.soil_type && d.soil_type.toLowerCase().includes(term)) ||
          d.key_crops.some((c) => c.toLowerCase().includes(term))
        );
      });

      if (matchedDistricts.length > 0) {
        result[state] = matchedDistricts;
      }
    });

    return result;
  }, [groupedData, searchTerm, selectedState]);

  const matchedTotal = useMemo(() => {
    return Object.values(filteredData).reduce((acc, list) => acc + list.length, 0);
  }, [filteredData]);

  return (
    <div className="min-h-screen pt-8 pb-20 bg-background text-zinc-100">
      <div className="max-w-[1300px] mx-auto px-5 sm:px-8">
        
        {/* Breadcrumb */}
        <div className="text-xs text-zinc-400 mb-6 flex items-center gap-2">
          <Link href="/" className="hover:text-lime-400">Home</Link>
          <span>›</span>
          <span className="text-lime-400 font-semibold">PAN India Directory</span>
        </div>

        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-lime-500/10 border border-lime-500/30 text-lime-400 text-xs font-bold uppercase tracking-wider mb-4">
            <MapPin className="w-3.5 h-3.5" /> All-India Agricultural Coverage
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-display font-black text-white mb-4 tracking-tight">
            Find Machinery & Dealers <span className="text-lime-500">Across 740 Districts</span>
          </h1>
          <p className="text-zinc-300 text-sm md:text-base leading-relaxed">
            Search your district to check localized soil fitment, recommended implements, state DBT subsidy links, and wholesale delivery timelines across all 35 States & Union Territories.
          </p>
        </div>

        {/* Search & State Filter Bar */}
        <div className="bg-zinc-950 border border-zinc-800 p-5 rounded-2xl shadow-xl mb-10 space-y-4">
          <div className="flex flex-col sm:flex-row gap-3">
            <div className="relative flex-1">
              <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-400" />
              <input
                type="text"
                placeholder="Search by district name, state, crop (e.g. Cotton, Sugarcane), or soil type..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-10 py-3 bg-zinc-900/90 border border-zinc-700 rounded-xl text-sm text-white placeholder:text-zinc-500 focus:outline-none focus:border-lime-500 transition"
              />
              {searchTerm && (
                <button
                  onClick={() => setSearchTerm("")}
                  className="absolute right-3.5 top-1/2 -translate-y-1/2 text-zinc-400 hover:text-white"
                >
                  <X className="w-4 h-4" />
                </button>
              )}
            </div>
            <div className="flex items-center justify-between sm:justify-end gap-3 shrink-0">
              <span className="text-xs font-mono text-zinc-400">
                Showing <strong className="text-lime-400">{matchedTotal}</strong> of {totalCount} Districts
              </span>
            </div>
          </div>

          {/* Horizontal State Pills Carousel */}
          <div className="flex overflow-x-auto gap-2 pt-2 pb-1 scrollbar-none">
            {states.map((st) => (
              <button
                key={st}
                onClick={() => setSelectedState(st)}
                className={`px-3.5 py-1.5 rounded-lg text-xs font-medium whitespace-nowrap transition ${
                  selectedState === st
                    ? "bg-lime-500 text-black font-bold shadow-md shadow-lime-500/20"
                    : "bg-zinc-900 border border-zinc-800 text-zinc-400 hover:text-white hover:border-zinc-700"
                }`}
              >
                {st}
              </button>
            ))}
          </div>
        </div>

        {/* Directory Grid */}
        <div className="space-y-12">
          {Object.entries(filteredData).map(([state, districts]) => (
            <div key={state} className="bg-zinc-950/70 border border-zinc-800 rounded-2xl p-6 sm:p-8 shadow-xl">
              <div className="flex items-center justify-between border-b border-zinc-800/80 pb-4 mb-6">
                <div className="flex items-center gap-2.5">
                  <Building className="w-5 h-5 text-lime-400" />
                  <h2 className="text-xl sm:text-2xl font-display font-bold text-white">
                    {state}
                  </h2>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-xs text-lime-400 font-mono font-semibold bg-lime-500/10 px-2.5 py-1 rounded border border-lime-500/20">
                    {districts.length} Districts Mapped
                  </span>
                  <Link 
                    href={`/dealer/${state.toLowerCase().replace(/ /g, "-")}`}
                    className="text-xs text-zinc-400 hover:text-white underline hidden sm:inline"
                  >
                    State Dealer Hub →
                  </Link>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {districts.map((item) => (
                  <div
                    key={item.slug}
                    className="p-5 bg-zinc-900/40 hover:bg-zinc-900/80 border border-zinc-800/80 hover:border-lime-500/40 rounded-xl transition flex flex-col justify-between group"
                  >
                    <div>
                      <div className="flex items-start justify-between gap-2">
                        <h3 className="text-base font-bold text-zinc-100 group-hover:text-lime-400 transition-colors">
                          {item.districtName}
                        </h3>
                        <span className="text-[10px] text-zinc-400 bg-zinc-800 px-1.5 py-0.5 rounded shrink-0">
                          {item.soil_type?.split(" ")[0] || "Alluvial"}
                        </span>
                      </div>

                      {item.key_crops && item.key_crops.length > 0 && (
                        <div className="mt-2.5 flex flex-wrap gap-1">
                          {item.key_crops.slice(0, 3).map((c) => (
                            <span key={c} className="text-[10px] px-2 py-0.5 rounded bg-zinc-950 text-zinc-300 border border-zinc-800">
                              {c}
                            </span>
                          ))}
                        </div>
                      )}

                      <p className="text-xs text-zinc-400 mt-2 line-clamp-1">
                        {item.farming_profile || item.soil_type}
                      </p>
                    </div>

                    {/* Quick Vertical Jump Links */}
                    <div className="mt-4 pt-3 border-t border-zinc-800/70 grid grid-cols-2 gap-2 text-[11px]">
                      <Link
                        href={`/power-weeders-in-${item.slug}`}
                        className="text-zinc-300 hover:text-lime-400 transition flex items-center gap-1 truncate"
                      >
                        <Tractor className="w-3 h-3 text-lime-400 shrink-0" />
                        <span>Power Weeders</span>
                      </Link>
                      <Link
                        href={`/power-weeder-spare-parts-in-${item.slug}`}
                        className="text-zinc-300 hover:text-lime-400 transition flex items-center gap-1 truncate"
                      >
                        <Wrench className="w-3 h-3 text-lime-400 shrink-0" />
                        <span>Spare Parts</span>
                      </Link>
                      <Link
                        href={`/brush-cutters-in-${item.slug}`}
                        className="text-zinc-300 hover:text-lime-400 transition flex items-center gap-1 truncate"
                      >
                        <Scissors className="w-3 h-3 text-lime-400 shrink-0" />
                        <span>Brush Cutters</span>
                      </Link>
                      <Link
                        href={`/earth-augers-in-${item.slug}`}
                        className="text-zinc-300 hover:text-lime-400 transition flex items-center gap-1 truncate"
                      >
                        <Drill className="w-3 h-3 text-lime-400 shrink-0" />
                        <span>Earth Augers</span>
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}

          {Object.keys(filteredData).length === 0 && (
            <div className="text-center py-16 bg-zinc-950 border border-zinc-800 rounded-2xl">
              <p className="text-zinc-400 text-sm">No districts found matching "{searchTerm}". Try another search keyword or select "ALL" states.</p>
            </div>
          )}
        </div>

      </div>
    </div>
  );
}
