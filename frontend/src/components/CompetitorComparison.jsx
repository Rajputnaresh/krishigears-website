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
                <th className="p-4 sm:p-6 font-bold text-center border-x border-zinc-800 w-1/3">Traditional Brands</th>
                <th className="p-4 sm:p-6 font-black text-center bg-lime-500/10 text-lime-400 w-1/3">KrishiGears (B2B)</th>
              </tr>
            </thead>
            <tbody className="text-sm sm:text-base divide-y divide-zinc-800 bg-zinc-950">
              <tr>
                <td className="p-4 sm:p-6 text-zinc-300 font-medium">Dealer Margins</td>
                <td className="p-4 sm:p-6 text-center text-zinc-500">10% - 15%</td>
                <td className="p-4 sm:p-6 text-center text-lime-400 font-bold bg-lime-500/5">25% - 35% (Direct Factory)</td>
              </tr>
              <tr>
                <td className="p-4 sm:p-6 text-zinc-300 font-medium">FMTTI Certification</td>
                <td className="p-4 sm:p-6 text-center text-zinc-500">Only premium models</td>
                <td className="p-4 sm:p-6 text-center text-white font-bold bg-lime-500/5">100% Subsidy Approved</td>
              </tr>
              <tr>
                <td className="p-4 sm:p-6 text-zinc-300 font-medium">Spare Parts Dispatch</td>
                <td className="p-4 sm:p-6 text-center text-zinc-500">7-10 Days</td>
                <td className="p-4 sm:p-6 text-center text-white font-bold bg-lime-500/5">24-Hour Express Logistics</td>
              </tr>
              <tr>
                <td className="p-4 sm:p-6 text-zinc-300 font-medium">Wholesale Pricing (7HP Weeder)</td>
                <td className="p-4 sm:p-6 text-center text-zinc-500">₹36,000 - ₹42,000</td>
                <td className="p-4 sm:p-6 text-center text-lime-400 font-bold bg-lime-500/5">₹28,500 (Bulk MOQ)</td>
              </tr>
              <tr>
                <td className="p-4 sm:p-6 text-zinc-300 font-medium">Warranty Support</td>
                <td className="p-4 sm:p-6 text-center text-zinc-500">Limited Email Support</td>
                <td className="p-4 sm:p-6 text-center text-white font-bold bg-lime-500/5">Direct WhatsApp Video Tech Support</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
