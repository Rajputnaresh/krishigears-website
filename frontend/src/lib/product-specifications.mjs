// Catalog values only: do not infer transmission or dimensions from model numbers.
export function productSpecifications(product) {
  const specs = { ...product.specs };
  if (!specs["Rotary type"]) {
    const rotary = product.name?.match(/\b(front|back|rear)[ -]rotary\b/i);
    if (rotary) specs["Rotary type"] = `${rotary[1].toLowerCase() === "front" ? "Front" : "Back"} rotary`;
  }
  const labels = { engine: "Engine", fuel: "Fuel", power: "Power", displacement: "Displacement", transmission: "Transmission", "rotary type": "Rotary type", "tilling width": "Tilling Width", "working width": "Working Width", "tilling depth": "Tilling Depth", "working depth": "Working Depth" };
  return Object.entries(specs)
    .filter(([, value]) => value !== null && value !== undefined && String(value).trim() !== "")
    .map(([key, value]) => {
      const name = key.replace(/([a-z])([A-Z])/g, "$1 $2").replace(/_/g, " ");
      return ({
      "@type": "PropertyValue",
      name: labels[name.toLowerCase()] || name,
      value: String(value),
    }); });
}

export const POWER_WEEDER_FAQS = [
  { question: "How should I compare power weeder specifications?", answer: "Compare engine fuel, rated power in HP, displacement in cc, transmission, rotary position, tilling width and tilling depth for the exact model. HP describes engine power; cc describes engine displacement and is not a power rating. Missing specifications need supplier confirmation." },
  { question: "What do tilling width and tilling depth mean?", answer: "Tilling width is the soil-working span in one pass. Tilling depth is how far the tines work below the soil surface. Both depend on the fitted blades, adjustment and soil conditions; confirm the configuration and units before ordering." },
  { question: "What is the difference between front and back rotary weeders?", answer: "Front and back rotary describe the position of the soil-working rotor relative to the machine wheels. Rotary position does not identify the transmission type. Confirm both separately for the exact model." },
  { question: "Are power weeders in stock and eligible for subsidies?", answer: "KrishiGears holds no stock: machines are ordered from suppliers per sale. Price, availability, dispatch timing and attachments require a supplier-confirmed quotation. Subsidy eligibility depends on the exact model, approved test documentation and current state scheme; it is not guaranteed." },
];

// These marketing assertions lack model-specific evidence in the catalogue.
// Keep technical specification values unchanged; omit claims from marketing lists.
export function productCopyItems(items = []) {
  return items.filter(item => !/FMTTI|SRFMTTI|ISO\s*9001|certif|guarante|in stock|stocked|spare parts availability|dispatch|warehouse|godown|24.?48/i.test(item));
}
