import React, { useState, useMemo } from "react";
import Link from "next/link";
import { MapPin, Search, ChevronRight, Building, Wrench } from "lucide-react";
import { CITY_STATE_MAP } from "@/data/cityStateMap";
import SEO from "@/components/SEO";

export default function Locations() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedState, setSelectedState] = useState("ALL");

  // Group cities by State
  const { states, groupedData, totalCount } = useMemo(() => {
    const groups = {};
    const stateSet = new Set();
    let count = 0;

    Object.entries(CITY_STATE_MAP).forEach(([slug, data]) => {
      const state = data.state || "Other";
      stateSet.add(state);
      if (!groups[state]) groups[state] = [];
      groups[state].push({
        slug,
        city: data.city || slug.replace(/-/g, " "),
        state: data.state
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
    const term = searchTerm.toLowerCase();

    Object.entries(groupedData).forEach(([state, cities]) => {
      if (selectedState !== "ALL" && state !== selectedState) return;

      const matchedCities = cities.filter(
        c => c.city.toLowerCase().includes(term) || state.toLowerCase().includes(term)
      );

      if (matchedCities.length > 0) {
        result[state] = matchedCities;
      }
    });

    return result;
  }, [groupedData, searchTerm, selectedState]);

  return (
    <div className="min-h-screen pt-24 pb-20 bg-background text-zinc-100">
      <SEO
        title="All Supply Locations & Dealer Network Across India"
        description={`Explore KrishiGears dealer network, machinery supply, and spare parts across ${totalCount}+ cities and agricultural hubs in India.`}
      />

      <div className="max-w-[1200px] mx-auto px-6">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-lime-500/10 border border-lime-500/20 text-lime-400 text-xs font-semibold uppercase tracking-wider mb-4">
            <MapPin className="w-3.5 h-3.5" /> PAN India Directory
          </div>
          <h1 className="text-3xl md:text-4xl font-extrabold text-white mb-4">
            Machinery & Spare Parts by Location
          </h1>
          <p className="text-zinc-400 text-sm md:text-base">
            Find authorized dealers, bulk supply, and genuine spare parts across thousands of agricultural regions in India.
          </p>
        </div>

        {/* Search & Filter Controls */}
        <div className="flex flex-col md:flex-row gap-4 mb-10">
          <div className="relative flex-1">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-400" />
            <input
              type="text"
              placeholder="Search by city, district, or state..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-11 pr-4 py-3 bg-zinc-900/80 border border-zinc-800 rounded-xl text-sm text-white placeholder:text-zinc-400 focus:outline-none focus:border-lime-500 transition"
            />
          </div>

          <div className="flex overflow-x-auto gap-2 pb-2 md:pb-0 scrollbar-none">
            {states.slice(0, 10).map((st) => (
              <button
                key={st}
                onClick={() => setSelectedState(st)}
                className={`px-4 py-2.5 rounded-xl text-xs font-medium whitespace-nowrap transition ${
                  selectedState === st
                    ? "bg-lime-500 text-black font-semibold shadow-lg shadow-lime-500/20"
                    : "bg-zinc-900 border border-zinc-800 text-zinc-400 hover:text-white"
                }`}
              >
                {st}
              </button>
            ))}
          </div>
        </div>

        {/* Directory Grid */}
        <div className="space-y-10">
          {Object.entries(filteredData).map(([state, cities]) => (
            <div key={state} className="bg-zinc-950/60 border border-zinc-800/80 rounded-2xl p-6 md:p-8">
              <div className="flex items-center justify-between border-b border-zinc-800/80 pb-4 mb-6">
                <h2 className="text-xl font-bold text-white flex items-center gap-2">
                  <Building className="w-5 h-5 text-lime-500" /> {state}
                </h2>
                <span className="text-xs text-zinc-400 font-mono">
                  {cities.length} Territories
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
                {cities.map((item) => (
                  <div
                    key={item.slug}
                    className="p-3 bg-zinc-900/50 hover:bg-zinc-800/60 border border-zinc-800/50 hover:border-lime-500/40 rounded-xl transition group"
                  >
                    <div className="text-sm font-semibold text-zinc-200 group-hover:text-white mb-2 flex items-center justify-between">
                      {item.city}
                      <ChevronRight className="w-3.5 h-3.5 text-zinc-300 group-hover:text-lime-400 transition transform group-hover:translate-x-0.5" />
                    </div>
                    <div className="flex flex-col gap-1 text-[11px] text-zinc-400">
                      <Link
                        href={`/seo/power-weeders-supplier-${item.slug}`}
                        className="hover:text-lime-400 transition flex items-center gap-1"
                      >
                        • Power Weeders
                      </Link>
                      <Link
                        href={`/seo/power-weeder-spare-parts-supplier-${item.slug}`}
                        className="hover:text-lime-400 transition flex items-center gap-1"
                      >
                        • Spare Parts
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}

          {Object.keys(filteredData).length === 0 && (
            <div className="text-center py-16 bg-zinc-900/30 border border-zinc-800/50 rounded-2xl">
              <p className="text-zinc-400 text-sm">No locations found matching "{searchTerm}".</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
