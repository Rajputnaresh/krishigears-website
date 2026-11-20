import Link from "next/link";
import { productSpecifications, POWER_WEEDER_FAQS } from "@/lib/product-specifications.mjs";

export default function PowerWeederGuide({ items }) {
  const rearRotary = items.filter((product) => productSpecifications(product).some(({ name, value }) => name === "Rotary type" && value === "Back rotary"));
  return (
    <section className="mt-12 space-y-6" aria-labelledby="weeder-comparison">
      <div id="back-rotary" className="rounded-lg border border-zinc-700 bg-zinc-900/60 p-5 md:p-8 space-y-4">
        <div className="kg-eyebrow">Dealer procurement guide</div>
        <h2 className="kg-h2">Back rotary (rear rotary) power weeders</h2>
        <p className="text-zinc-300 leading-relaxed">A back rotary or rear rotary power weeder has its soil-working rotor behind the wheels. The rotor position does not establish whether the tines turn forward or in the opposite direction, nor does it guarantee a particular depth or performance. If you are looking for a backward-rotary machine, confirm the rotor position and direction separately with the supplier.</p>
        <p className="font-semibold text-white">What should a dealer or custom hiring centre compare?</p>
        <ul className="list-disc pl-5 space-y-2 text-zinc-300">
          <li>Actual row spacing, soil conditions, terrain, and proposed tilling task.</li>
          <li>Fuel and transmission, rotor position and direction, working width and depth for the fitted blade assembly.</li>
          <li>Model-specific guarding, controls, operating manual, spare blades and service arrangements.</li>
        </ul>
        {rearRotary.length > 0 && (
          <div className="space-y-2">
            <p className="font-semibold text-white">Existing catalogue models to compare:</p>
            <ul className="list-disc pl-5 space-y-1">
              {rearRotary.map((product) => <li key={product.slug}><Link className="text-lime-400 underline" href={`/products/${product.slug}`}>{product.name}</Link></li>)}
            </ul>
            <p className="text-sm text-zinc-400">Request confirmation of the exact brand, model, configuration and supply terms; catalogue inclusion is not an availability claim.</p>
          </div>
        )}
        <Link href="/bulk-order" className="inline-flex min-h-11 items-center rounded-md bg-lime-500 px-4 py-2 font-semibold text-black hover:bg-lime-400">Request a dealer quotation</Link>
      </div>
      <h2 id="weeder-comparison" className="kg-h2">Compare power weeder specifications</h2>
      <p className="text-zinc-300">Catalog specifications are listed below in their original units. KrishiGears holds no stock; machines are ordered from suppliers per sale. Confirm specifications, attachments, price and dispatch in your quotation.</p>
      <div className="overflow-x-auto rounded-lg border border-zinc-700" role="region" aria-label="Power weeder specification comparison" tabIndex={0}>
        <table className="w-full text-left text-sm">
          <caption className="p-4 text-left text-zinc-300">Model comparison from the KrishiGears catalog. A dash means the specification is not recorded; request supplier confirmation.</caption>
          <thead><tr>{["Model", "Engine / fuel", "Power / displacement", "Transmission", "Rotary type", "Tilling width", "Tilling depth"].map((label) => <th key={label} scope="col" className="p-3 border-b border-zinc-700">{label}</th>)}</tr></thead>
          <tbody>{items.map((product) => {
            const specs = Object.fromEntries(productSpecifications(product).map(({ name, value }) => [name, value]));
            return <tr key={product.slug} className="border-b border-zinc-800">
              <th scope="row" className="p-3"><Link className="text-lime-400 underline" href={`/products/${product.slug}`}>{product.name}</Link></th>
              {[specs.Engine || specs.Fuel, [specs.Power, specs.Displacement].filter(Boolean).join(" / "), specs.Transmission, specs["Rotary type"], specs["Tilling Width"] || specs["Working Width"], specs["Tilling Depth"] || specs["Working Depth"]].map((value, index) => <td key={index} className="p-3 text-zinc-200">{value || "—"}</td>)}
            </tr>;
          })}</tbody>
        </table>
      </div>
      <h2 className="kg-h2">Power weeder specification questions</h2>
      {POWER_WEEDER_FAQS.map(({ question, answer }) => <details key={question} className="border border-zinc-700 rounded-lg p-4"><summary className="min-h-11 cursor-pointer font-bold">{question}</summary><p className="mt-3 text-zinc-300">{answer}</p></details>)}
    </section>
  );
}
