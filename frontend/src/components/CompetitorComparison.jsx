import WhatsAppLeadModal from "@/components/WhatsAppLeadModal";

export default function CompetitorComparison() {
  return (
    <section className="py-16 sm:py-24 bg-zinc-950 border-t border-zinc-900" data-testid="competitor-comparison">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 md:px-12">
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <h2 className="kg-h2 text-white">
            Why Dealers Switch to <span className="text-lime-400">KrishiGears</span>
          </h2>
          <p className="mt-4 text-zinc-400 text-sm sm:text-base">
            Stop losing margins to middlemen. Compare our direct-factory wholesale model against standard Indian agricultural machinery brands.
          </p>
        </div>

        <div className="overflow-x-auto rounded-xl border border-zinc-800 shadow-2xl">
          <table className="w-full text-left min-w-[700px]">
            <thead>
              <tr className="bg-zinc-900 border-b border-zinc-800 text-zinc-300 text-xs sm:text-sm uppercase tracking-wider">
                <th className="p-4 sm:p-6 font-bold">Feature</th>
                <th className="p-4 sm:p-6 font-bold text-center border-x border-zinc-800 w-1/3">Traditional Brands (VST, Greaves, Honda)</th>
                <th className="p-4 sm:p-6 font-bold text-center border-x border-zinc-800 w-1/3">KrishiGears (B2B Factory Direct)</th>
              </tr>
            </thead>
            <tbody className="text-sm sm:text-base divide-y divide-zinc-800 bg-zinc-950">
              <tr>
                <td className="p-4 sm:p-6 text-zinc-300 font-medium">Dealer Margins</td>
                <td className="p-4 sm:p-6 text-center text-zinc-500">10% - 15% (Eroded by multi-tier distributors)</td>
                <td className="p-4 sm:p-6 text-center text-lime-400 font-bold bg-lime-500/5">25% - 35% (Direct Factory Wholesale)</td>
              </tr>
              <tr>
                <td className="p-4 sm:p-6 text-zinc-300 font-medium">Working Capital & Inventory Risk</td>
                <td className="p-4 sm:p-6 text-center text-zinc-500">Mandatory ₹5L - ₹10L dead stock commitments</td>
                <td className="p-4 sm:p-6 text-center text-white font-bold bg-lime-500/5">Zero Held Stock · MOQ 2 Units Per Order</td>
              </tr>
              <tr>
                <td className="p-4 sm:p-6 text-zinc-300 font-medium">Spare Parts Dispatch SLA</td>
                <td className="p-4 sm:p-6 text-center text-zinc-500">15 to 30 days wait from central regional depots</td>
                <td className="p-4 sm:p-6 text-center text-lime-400 font-bold bg-lime-500/5">24-Hour Express Dispatch from Jaipur Warehouse</td>
              </tr>
              <tr>
                <td className="p-4 sm:p-6 text-zinc-300 font-medium">Territory Exclusivity</td>
                <td className="p-4 sm:p-6 text-center text-zinc-500">Multiple dealers undercut prices in the same tehsil</td>
                <td className="p-4 sm:p-6 text-center text-white font-bold bg-lime-500/5">Strict 1 Tehsil = 1 Authorized Dealer Policy</td>
              </tr>
              <tr>
                <td className="p-4 sm:p-6 text-zinc-300 font-medium">Direct B2C / Commercial Price Transparency</td>
                <td className="p-4 sm:p-6 text-center text-zinc-500">Opaque quotation markups by local distributors</td>
                <td className="p-4 sm:p-6 text-center text-white font-bold bg-lime-500/5">Published Factory Base Prices with 12% GST Bills</td>
              </tr>
              <tr>
                <td className="p-4 sm:p-6 text-zinc-300 font-medium">Technical & Warranty Support</td>
                <td className="p-4 sm:p-6 text-center text-zinc-500">Slow email tickets; dealer bears customer complaints</td>
                <td className="p-4 sm:p-6 text-center text-white font-bold bg-lime-500/5">Direct WhatsApp Video Support with Factory Engineers</td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* The Zero-Downtime Dealership Guarantee Banner */}
        <div className="mt-8 p-6 rounded-xl border border-zinc-800 bg-zinc-900 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-1 text-center md:text-left">
            <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-lime-400">
              <span className="h-2 w-2 rounded-full bg-lime-400 animate-ping"></span>
              The KrishiGears Zero-Downtime Guarantee
            </div>
            <h3 className="text-lg sm:text-xl font-bold text-white">24-Hour Express Spare Parts SLA from Jaipur Hub</h3>
            <p className="text-zinc-400 text-sm max-w-2xl">
              Dealers never lose customer trust. All 19 categories of OEM fitment-checked spares dispatch within 24 hours of enquiry, backed by live WhatsApp video support.
            </p>
          </div>
          <WhatsAppLeadModal
            source="competitor_comparison"
            defaultProduct="Dealership Margin & 24hr Spares Guarantee"
            trigger={
              <button
                type="button"
                className="px-6 py-3 bg-lime-500 hover:bg-lime-400 text-black font-extrabold text-sm rounded-lg whitespace-nowrap transition shadow-lg shrink-0 cursor-pointer active:scale-95"
              >
                Claim Protected District →
              </button>
            }
          />
        </div>
      </div>
    </section>
  );
}
