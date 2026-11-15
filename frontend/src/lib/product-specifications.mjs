// Catalog values only: do not infer transmission or dimensions from model numbers.
export function getProductGSTRate(product) {
  if (!product) return 5;
  if (typeof product.gst === "number") return product.gst;

  const cat = product.category || "";
  const name = (product.name || "").toLowerCase();

  // Agricultural machinery under HSN 8432 / 8433: 5% GST
  if (cat === "power-weeders" || cat === "lawn-mowers" || cat === "crop-reapers") {
    return 5;
  }

  // Handheld mechanical tools with self-contained motor under HSN 8467: 18% GST
  if (cat === "brush-cutters") {
    return 18;
  }

  // Farm machinery: earth augers, chain saws, sprayers (HSN 8467 / 8424): 18% GST
  if (cat === "farm-machinery") {
    return 18;
  }

  // Spare parts: rotary blades / tines (HSN 8432 90) at 5%; engine components (HSN 8409) at 18%
  if (cat === "power-weeder-spare-parts") {
    if (name.includes("blade") || name.includes("tine") || name.includes("rotary")) {
      return 5;
    }
    return 18;
  }

  return 5;
}

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

export const CATEGORY_FAQS = {
  "power-weeders": [
    {
      question: "What is the wholesale power weeder price in India?",
      answer: "Wholesale dealer prices for commercial power weeders range between ₹18,000 to ₹48,000 depending on engine power (7HP petrol vs 9HP/10HP diesel), transmission type (direct gear-driven vs belt-driven), and included rotor sets. Contact our sales desk for volume container pricing."
    },
    {
      question: "Are KrishiGears power weeders eligible for DBT agriculture subsidy?",
      answer: "Yes. KrishiGears equipment meets FMTTI / SRFMTTI test compliance standards. Authorized dealers receive complete documentation — including commercial test report numbers, stamped engine certificates, and HSN-coded GST tax invoices — allowing registered farmers to claim 40% to 50% DBT / SMAM state subsidies."
    },
    {
      question: "What is the minimum order quantity (MOQ) for machinery dealers?",
      answer: "Our starter dealer MOQ is just 2 units per order. This allows local machinery retailers and agri-input shops to test regional farmer demand without locking up heavy working capital."
    },
    {
      question: "How fast can spare parts be delivered to remote districts?",
      answer: "All fast-moving wear-and-tear spares (carburetors, recoil starters, Viton oil seals, clutch pads, and rotary tines) dispatch within 24 to 48 hours from our central Jaipur facility via express surface cargo across PAN India."
    }
  ],
  "lawn-mowers": [
    {
      question: "What is the difference between rotary and roller commercial lawn mowers?",
      answer: "Rotary lawn mowers use a high-speed horizontal spinning blade suitable for uneven terrain, farmhouses, and tough grass. Roller lawn mowers feature a front/rear steel roller with a cylinder reel, creating manicured stripes and precise low-cut turf for sports facilities, golf greens, and resort estates."
    },
    {
      question: "What power options are available for KrishiGears commercial lawn mowers?",
      answer: "We supply 140cc–225cc OHV 4-stroke petrol self-propelled walk-behind mowers, heavy-duty 5HP to 15HP diesel roller mowers, and zero-emission corded electric mowers for institutional campuses."
    },
    {
      question: "Are replacement blades and cutting cylinders readily available?",
      answer: "Yes. Hardened high-carbon rotary blades, bottom bedknife blades, cylinder reels, throttle cables, and drive belts are stocked and dispatched within 24–48 hours from Jaipur."
    },
    {
      question: "What are the dealer margins and warranty for commercial mowers?",
      answer: "Dealers receive protected 15% to 25% margins on commercial lawn mowers with a 12-month manufacturer warranty on the engine and primary chassis."
    }
  ],
  "brush-cutters": [
    {
      question: "Which brush cutter model is best suited for crop harvesting (Wheat & Paddy)?",
      answer: "For cereal crop harvesting, 43cc/52cc 2-stroke or 35cc/50cc 4-stroke backpack (BP) brush cutters paired with an 80T tungsten carbide-tipped (TCT) blade and crop collection guard baffle are recommended. They allow upright harvesting with zero grain scattering."
    },
    {
      question: "What is the difference between 2-stroke and 4-stroke brush cutters?",
      answer: "2-stroke models deliver high power-to-weight ratio and high RPM at an economical price point, requiring a 1:25 2T oil-petrol premix. 4-stroke models run on pure petrol, produce lower noise and vibrations, offer higher fuel efficiency, and generate cleaner emissions for prolonged daily operation."
    },
    {
      question: "Which cutting attachments are interchangeable on KrishiGears brush cutters?",
      answer: "All models feature standard 28mm shaft tubes with 9-spline drive shafts compatible with 2-tooth / 3-tooth brush blades, 80T/100T TCT harvester blades, nylon tap-and-go trimmer heads, weeder tiller attachments, and pole pruners."
    },
    {
      question: "What is the wholesale MOQ and spare parts policy for brush cutters?",
      answer: "Wholesale starter orders begin at 3 units. Fast-moving spare parts including carburetors, spark plug caps, ignition coils, clutch shoes, and recoil assemblies dispatch within 24 to 48 hours."
    }
  ],
  "crop-reapers": [
    {
      question: "How do baffle crop reapers prevent grain shattering during harvesting?",
      answer: "KrishiGears crop reapers use a synchronized star-wheel and conveyor baffle mechanism that cuts crop stems cleanly at 2–3 inches above ground and lays them neatly in a continuous row (windrow) to the right side, preventing grain loss and simplifying bundling."
    },
    {
      question: "What is the harvesting speed and coverage of a walking crop reaper?",
      answer: "A standard 4-stroke petrol or diesel crop reaper with a 120cm cutter bar harvests approximately 1 acre of standing wheat or paddy in 1.5 to 2 hours, saving over 80% in manual labor costs during peak harvesting windows."
    },
    {
      question: "Can crop reaper attachments be mounted on standard power weeders?",
      answer: "Yes, front-mounted PTO crop reaper attachments are available for compatible 7HP petrol and 9HP diesel power weeders, giving multi-season versatility to farmers and custom hiring centers."
    },
    {
      question: "What maintenance and spares are required for commercial reapers?",
      answer: "Regular greasing of the cutter bar knife-head and conveyor chains is essential. Replacement serrated knife sections, ledger plates, star wheels, and conveyor belts are stocked in our Jaipur hub for express dispatch."
    }
  ],
  "farm-machinery": [
    {
      question: "What types of commercial farm machinery are supplied by KrishiGears?",
      answer: "Our heavy farm machinery range includes post-hole earth augers (52cc to 68cc trolley & handheld), high-capacity chaff cutters (motorized & engine-driven), 2-inch and 3-inch agricultural water pumps, and commercial chainsaws."
    },
    {
      question: "What hole diameters and depths can KrishiGears earth augers drill?",
      answer: "Our augers support bit diameters of 4, 6, 8, 10, and 12 inches up to depths of 3 feet (extendable to 5 feet with extension rods), ideal for horticulture sapling plantation, fencing posts, and solar panel pole foundations."
    },
    {
      question: "Do you supply farm machinery to FPOs, contractors and government tenders?",
      answer: "Yes. We support Farmer Producer Organizations (FPOs), agribusinesses, and panchayat contractors with formal proforma invoices, GST billing (HSN 8432 / 8436), test documentation, and volume slab pricing."
    },
    {
      question: "What warranty coverage is included on farm machinery?",
      answer: "All machinery includes a 12-month manufacturer warranty on the engine block and gearbox, backed by technical video assistance and genuine replacement parts availability."
    }
  ],
  "power-weeder-spare-parts": [
    {
      question: "How can agricultural repair workshops and dealers obtain the wholesale spare parts price list?",
      answer: "Authorized mechanics, service centers, and retail shops can request the latest 2026 wholesale spare parts catalog via our WhatsApp counter (+91 60060 78815) or by submitting the online Bulk Order form."
    },
    {
      question: "What is the Minimum Order Quantity (MOQ) for wholesale spare parts?",
      answer: "We offer flexible mixed-carton MOQs starting from ₹15,000, allowing local workshops to stock fast-moving carburetors, recoil starters, Viton seals, and rotary blades without heavy working capital lockup."
    },
    {
      question: "Are KrishiGears replacement spares compatible with other brand power weeders?",
      answer: "Yes. Our engine and transmission spares adhere to standard 170F/177F petrol and 173F/186F diesel dimensional tolerances, making them 100% fitment-compatible with Royal Kissan, Neptune, Balwaan, and Honda-clone agricultural weeders."
    },
    {
      question: "What are the dispatch and delivery timelines for wholesale spare parts orders?",
      answer: "All spare parts orders are picked, packaged, and dispatched from our Jaipur central depot within 24 to 48 hours via express surface cargo or Speed Post with live consignment tracking."
    }
  ]
};
