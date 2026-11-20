import WhatsAppLeadModal from "@/components/WhatsAppLeadModal";

export default function CompetitorComparison() {
  return (
    <section className="py-16 sm:py-24 bg-zinc-950 border-t border-zinc-900" data-testid="competitor-comparison">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 md:px-12">
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <h2 className="kg-h2 text-white">
            What to Compare When Choosing <span className="text-lime-400">KrishiGears</span>
          </h2>
          <p className="mt-4 text-zinc-400 text-sm sm:text-base">
            Compare actual written quotations, model specifications and after-sales terms before committing to a dealer supply agreement.
          </p>
        </div>

        <div className="overflow-x-auto rounded-xl border border-zinc-800 shadow-2xl">
          <table className="w-full text-left min-w-[700px]">
            <thead>
              <tr className="bg-zinc-900 border-b border-zinc-800 text-zinc-300 text-xs sm:text-sm uppercase tracking-wider">
                <th className="p-4 sm:p-6 font-bold">Feature</th>
                <th className="p-4 sm:p-6 font-bold text-center border-x border-zinc-800 w-1/3">Questions for any supplier</th>
                <th className="p-4 sm:p-6 font-bold text-center border-x border-zinc-800 w-1/3">KrishiGears dealer enquiry</th>
              </tr>
            </thead>
            <tbody className="text-sm sm:text-base divide-y divide-zinc-800 bg-zinc-950">
              <tr>
                <td className="p-4 sm:p-6 text-zinc-300 font-medium">Dealer Margins</td>
                <td className="p-4 sm:p-6 text-center text-zinc-300">What is the delivered cost and expected margin?</td>
                <td className="p-4 sm:p-6 text-center text-lime-400 font-bold bg-lime-500/5">Request a model- and quantity-specific quotation</td>
              </tr>
              <tr>
                <td className="p-4 sm:p-6 text-zinc-300 font-medium">Working Capital & Inventory Risk</td>
                <td className="p-4 sm:p-6 text-center text-zinc-300">What are the stock and minimum quantity requirements?</td>
                <td className="p-4 sm:p-6 text-center text-white font-bold bg-lime-500/5">On-order procurement; confirm MOQ and dispatch</td>
              </tr>
              <tr>
                <td className="p-4 sm:p-6 text-zinc-300 font-medium">Spare Parts Dispatch SLA</td>
                <td className="p-4 sm:p-6 text-center text-zinc-300">What is available and when can it ship?</td>
                <td className="p-4 sm:p-6 text-center text-lime-400 font-bold bg-lime-500/5">Confirm spare part fitment and dispatch timing</td>
              </tr>
              <tr>
                <td className="p-4 sm:p-6 text-zinc-300 font-medium">Territory Exclusivity</td>
                <td className="p-4 sm:p-6 text-center text-zinc-300">Are territory rights written into the agreement?</td>
                <td className="p-4 sm:p-6 text-center text-white font-bold bg-lime-500/5">Discuss dealer terms and territory eligibility</td>
              </tr>
              <tr>
                <td className="p-4 sm:p-6 text-zinc-300 font-medium">Brand, model and commercial price</td>
                <td className="p-4 sm:p-6 text-center text-zinc-300">Do brand, configuration, taxes and freight match the offer?</td>
                <td className="p-4 sm:p-6 text-center text-white font-bold bg-lime-500/5">Confirm supplied brand and all costs in the quotation</td>
              </tr>
              <tr>
                <td className="p-4 sm:p-6 text-zinc-300 font-medium">Technical & Warranty Support</td>
                <td className="p-4 sm:p-6 text-center text-zinc-300">What is covered and how are claims handled?</td>
                <td className="p-4 sm:p-6 text-center text-white font-bold bg-lime-500/5">Request model-specific warranty and support details</td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Dealer service enquiry */}
        <div className="mt-8 p-6 rounded-xl border border-zinc-800 bg-zinc-900 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-1 text-center md:text-left">
            <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-lime-400">
              <span className="h-2 w-2 rounded-full bg-lime-400 animate-ping"></span>
              KrishiGears Service Enquiries
            </div>
            <h3 className="text-lg sm:text-xl font-bold text-white">Confirm spare parts and warranty support</h3>
            <p className="text-zinc-400 text-sm max-w-2xl">
              Share your machine model and part requirements with our desk so that fitment, availability and dispatch can be confirmed.
            </p>
          </div>
          <WhatsAppLeadModal
            source="competitor_comparison"
            defaultProduct="Dealership terms and spare parts support"
            trigger={
              <button
                type="button"
                className="px-6 py-3 bg-lime-500 hover:bg-lime-400 text-black font-extrabold text-sm rounded-lg whitespace-nowrap transition shadow-lg shrink-0 cursor-pointer active:scale-95"
              >
                Enquire About Dealership →
              </button>
            }
          />
        </div>
      </div>
    </section>
  );
}
