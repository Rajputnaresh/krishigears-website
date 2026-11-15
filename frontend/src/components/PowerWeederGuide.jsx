import Link from "next/link";
import { productSpecifications, POWER_WEEDER_FAQS } from "@/lib/product-specifications.mjs";

export default function PowerWeederGuide({ items }) {
  return (
    <section className="mt-12 space-y-6" aria-labelledby="weeder-comparison">
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
