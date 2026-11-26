export const WHATSAPP_NUMBER = "916006078815";

export function buildSparesWhatsAppUrl(message) {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

export const HERO_SPARES_MACHINES = [
  {
    id: "KG-186",
    name: "KrishiGears KG-186 10 HP Back Rotary Diesel Weeder",
    category: "Rear-Rotary Power Weeder",
    image: "/images/catalog/kg-186-backrotary.webp",
    engineSpec: "186FA Air-Cooled Diesel · 10 HP · PTO Gear Drive",
    parts: [
      { id: 1, nameEn: "Recoil Starter Assembly", nameHi: "रिकॉइल स्टार्टर असेंबली", sku: "KG186-REC-01", fitment: "186FA Diesel / Heavy Pawl", priceInr: 1450, dispatch: "2-4 days", x: 64, y: 34 },
      { id: 2, nameEn: "High-Pressure Fuel Injector", nameHi: "डीजल फ्यूल इंजेक्टर नोजल", sku: "KG186-INJ-02", fitment: "186FA Direct Injection", priceInr: 1850, dispatch: "2-4 days", x: 52, y: 28 },
      { id: 3, nameEn: "Dual-Stage Oil Bath Air Filter", nameHi: "ऑयल बाथ एयर फिल्टर", sku: "KG186-AIR-03", fitment: "186FA 10HP Intake", priceInr: 780, dispatch: "2-4 days", x: 43, y: 22 },
      { id: 4, nameEn: "Multi-Plate Clutch Assembly", nameHi: "क्लच प्लेट असेंबली", sku: "KG186-CLT-04", fitment: "28mm Spline Main Shaft", priceInr: 2650, dispatch: "2-4 days", x: 48, y: 50 },
      { id: 5, nameEn: "Rear PTO Gearbox Housing & Gears", nameHi: "रियर पीटीओ गियरबॉक्स सेट", sku: "KG186-GBX-05", fitment: "Cast Iron 2F+1R PTO", priceInr: 6800, dispatch: "2-4 days", x: 32, y: 63 },
      { id: 6, nameEn: "Back Rotary Blade Set (24 Blades)", nameHi: "बैक रोटरी ब्लेड सेट (24 पीस)", sku: "KG186-BLD-06", fitment: "High-Carbon Forged L-Type", priceInr: 2950, dispatch: "2-4 days", x: 24, y: 76 }
    ],
    triage: [
      { symptom: "Hard starting / white smoke", checks: ["Bleed air lock at diesel fuel banjo bolt", "Check engine oil level (SAE 15W40)", "Clean oil-bath air filter foam & bowl"] },
      { symptom: "Low tilling depth in hard soil", checks: ["Inspect depth-skid pin position", "Check rear PTO engagement lever travel", "Verify rotary blades are not worn < 60%"] },
      { symptom: "Excess handle vibration", checks: ["Tighten 4 engine bed mounting bolts", "Verify equal blade count left/right", "Check wheel hub locking pins"] },
      { symptom: "Gearbox heating after 2 hrs", checks: ["Top up SAE 90 gear oil to dipstick mark", "Clear wrapped weeds around axle oil seal", "Rest 15 min per 2 hrs continuous black-soil load"] }
    ]
  },
  {
    id: "KG-TR15D",
    name: "KrishiGears KG-TR15D 15 HP Portable Chain Trencher",
    category: "Commercial Chain Trencher",
    image: "https://cdn.shopify.com/s/files/1/0776/7028/5470/files/kg_tr15d_trencher.jpg",
    engineSpec: "420cc Commercial Petrol · 15 HP · Tungsten Carbide Chain",
    parts: [
      { id: 1, nameEn: "Tungsten Carbide Trenching Chain", nameHi: "कार्बाइड ट्रेंचिंग चेन सेट", sku: "TR15D-CHN-01", fitment: "600mm Depth / 100mm Width", priceInr: 14500, dispatch: "2-4 days", x: 22, y: 68 },
      { id: 2, nameEn: "Heavy-Duty Centrifugal Clutch", nameHi: "सेंट्रीफ्यूगल क्लच असेंबली", sku: "TR15D-CLT-02", fitment: "25.4mm Keyed Crank Shaft", priceInr: 3400, dispatch: "2-4 days", x: 54, y: 46 },
      { id: 3, nameEn: "Twin B-Section Drive Belt Pair", nameHi: "डबल वी-बेल्ट सेट", sku: "TR15D-BLT-03", fitment: "B-42 Reinforced Aramid", priceInr: 950, dispatch: "2-4 days", x: 46, y: 53 },
      { id: 4, nameEn: "420cc Carburetor Assembly", nameHi: "420cc कार्बोरेटर असेंबली", sku: "TR15D-CRB-04", fitment: "15HP 4-Stroke Petrol", priceInr: 1950, dispatch: "2-4 days", x: 60, y: 34 },
      { id: 5, nameEn: "Soil Auger Spoil Removal Screw", nameHi: "मिट्टी हटाने वाला ऑगर स्क्रू", sku: "TR15D-AUG-05", fitment: "Side Discharge 100mm", priceInr: 2800, dispatch: "2-4 days", x: 30, y: 62 },
      { id: 6, nameEn: "Boom Nose Idler Sprocket & Bearing", nameHi: "बूम नोज़ स्प्रोकेट और बेयरिंग", sku: "TR15D-SPR-06", fitment: "Sealed 6205-2RS Pair", priceInr: 1750, dispatch: "2-4 days", x: 14, y: 78 }
    ],
    triage: [
      { symptom: "Chain stalls when hitting gravel", checks: ["Check twin B-belt tension (max 10mm deflection)", "Inspect centrifugal clutch shoe springs", "Clear compacted mud from nose sprocket"] },
      { symptom: "Engine hunts or won't idle", checks: ["Drain water from carburetor float bowl", "Clean paper + foam air pre-filter", "Use fresh unleaded petrol (< 15 days old)"] },
      { symptom: "Trench wall collapses", checks: ["Reduce forward pull speed on hard strata", "Verify spoil auger clears dirt > 20cm away", "Check boom angle lock pin"] },
      { symptom: "Excess vibration on boom", checks: ["Check chain slack (15–20mm mid-span)", "Replace chipped tungsten teeth in pairs", "Grease nose bearing nipple before shift"] }
    ]
  },
  {
    id: "KG-EEA700",
    name: "KrishiGears KG-EEA700 7 HP Deep Earthing Auger (20 Ft)",
    category: "Deep Earthing Bore Rig",
    image: "https://cdn.shopify.com/s/files/1/0776/7028/5470/files/krishigears-kg-eea700-deep-earthing-auger.jpg?v=1795255822",
    engineSpec: "170F 7 HP 4-Stroke · Heavy Reduction Gearbox · 20 Ft Reach",
    parts: [
      { id: 1, nameEn: "170F 7 HP Recoil Starter", nameHi: "170F 7HP रिकॉइल स्टार्टर", sku: "EEA700-REC-01", fitment: "170F Petrol Engine", priceInr: 790, dispatch: "2-4 days", x: 56, y: 26 },
      { id: 2, nameEn: "Heavy Worm Reduction Gearbox", nameHi: "हेवी रिडक्शन गियरबॉक्स", sku: "EEA700-GBX-02", fitment: "30:1 High-Torque Output", priceInr: 5900, dispatch: "2-4 days", x: 50, y: 42 },
      { id: 3, nameEn: "Tungsten Pilot Drill Bit (6 inch)", nameHi: "पायलट अर्थ ऑगर बिट (6 इंच)", sku: "EEA700-BIT-03", fitment: "20mm Pin Lock Shaft", priceInr: 2450, dispatch: "2-4 days", x: 48, y: 78 },
      { id: 4, nameEn: "1-Meter Extension Rod + Lock Pin", nameHi: "1 मीटर एक्सटेंशन रॉड सेट", sku: "EEA700-ROD-04", fitment: "Heavy Wall Seamless Tube", priceInr: 1350, dispatch: "2-4 days", x: 48, y: 60 },
      { id: 5, nameEn: "Manual Winch Lifting Cable (6mm)", nameHi: "विंच लिफ्टिंग स्टील वायर", sku: "EEA700-WNC-05", fitment: "Galvanized 7x19 Strand", priceInr: 890, dispatch: "2-4 days", x: 64, y: 50 },
      { id: 6, nameEn: "170F Carburetor & Fuel Cock", nameHi: "170F कार्बोरेटर असेंबली", sku: "EEA700-CRB-06", fitment: "212cc 4-Stroke", priceInr: 1150, dispatch: "2-4 days", x: 44, y: 28 }
    ],
    triage: [
      { symptom: "Bit jams at 10–15 ft depth", checks: ["Lift bit every 2 ft to clear wet clay", "Inspect shear bolt on 20mm coupler", "Add 2L water to soften dry kankar layer"] },
      { symptom: "Engine runs but bit does not spin", checks: ["Check shear pin on extension rod coupler", "Inspect gearbox keyway & clutch lining", "Check throttle cable full-open travel"] },
      { symptom: "Hard recoil pull", checks: ["Verify spark plug gap (0.7–0.8mm)", "Confirm engine oil sensor isn't low", "Ensure transmission lever is in Neutral"] },
      { symptom: "Winch slips while lifting", checks: ["Inspect ratchet pawl spring on winch drum", "Check wire rope clamp tightness", "Lubricate mast guide rollers"] }
    ]
  },
  {
    id: "KG-FD16",
    name: "KrishiGears KG-FD16 Commercial Food Dehydrator (SUS304)",
    category: "Commercial Food Processing",
    image: "https://cdn.shopify.com/s/files/1/0776/7028/5470/files/krishigears-kg-fd16-commercial-tray-dehydrator.jpg?v=1795255834",
    engineSpec: "SUS304 Food-Grade Steel · Digital PID · 12/16/24/48 Trays",
    parts: [
      { id: 1, nameEn: "PID Digital Temp & Timer Controller", nameHi: "डिजिटल तापमान और टाइमर कंट्रोलर", sku: "FD16-PID-01", fitment: "30°C–90°C · 24H Relay", priceInr: 2250, dispatch: "2-4 days", x: 50, y: 18 },
      { id: 2, nameEn: "SUS304 Mesh Drying Tray (40×38 cm)", nameHi: "स्टेनलेस स्टील जाली ट्रे", sku: "FD16-TRY-02", fitment: "304 Food-Grade 8mm Mesh", priceInr: 850, dispatch: "2-4 days", x: 48, y: 46 },
      { id: 3, nameEn: "Axial High-Temp Circulation Fan", nameHi: "हीट सर्कुलेशन ब्लोअर फैन", sku: "FD16-FAN-03", fitment: "220V Ball-Bearing Motor", priceInr: 1950, dispatch: "2-4 days", x: 70, y: 44 },
      { id: 4, nameEn: "Finned U-Type Heating Element (1.5kW)", nameHi: "फिन्ड हीटिंग एलिमेंट कॉइल", sku: "FD16-HTR-04", fitment: "230V AC Stainless Fin", priceInr: 1400, dispatch: "2-4 days", x: 68, y: 58 },
      { id: 5, nameEn: "Silicone Magnetic Door Gasket", nameHi: "सिलिकॉन डोर सील रबर", sku: "FD16-GSK-05", fitment: "High-Temp Food Silicone", priceInr: 690, dispatch: "2-4 days", x: 30, y: 52 },
      { id: 6, nameEn: "K-Type Thermocouple Probe", nameHi: "तापमान सेंसर प्रोब", sku: "FD16-PRB-06", fitment: "Stainless 2-Wire Probe", priceInr: 490, dispatch: "2-4 days", x: 62, y: 24 }
    ],
    triage: [
      { symptom: "Uneven drying on front vs back trays", checks: ["Do not overload tray mesh (> 1.5 kg wet)", "Verify rear circulation fan spins freely", "Leave 2cm gap from rear baffle plate"] },
      { symptom: "Chamber not reaching set temp", checks: ["Check silicone door gasket seal", "Test incoming voltage (needs >= 210V)", "Inspect MCB/SSR relay indicator LED"] },
      { symptom: "Moisture condenses on glass", checks: ["Open top moisture vent damper 50%", "Start citrus/herbs at 45°C for first 2 hrs", "Ensure exhaust rear clearance >= 30 cm"] },
      { symptom: "Display shows sensor error", checks: ["Reseat thermocouple terminal behind top hood", "Check probe tip is not touching metal wall", "Power-cycle main isolator for 30 sec"] }
    ]
  },
  {
    id: "VARDHMAN-2FP",
    name: "Vardhman 2FP Self-Propelled Petrol Crop Reaper",
    category: "Self-Propelled Power Reaper",
    image: "/images/products/vardhman/vardhman-2fp.webp",
    engineSpec: "7 HP Petrol · 4-Foot Cutter Bar · Dual Conveyor Belt",
    parts: [
      { id: 1, nameEn: "Serrated Reaper Cutter Blade Set", nameHi: "रीपर कटर ब्लेड सेट", sku: "VAR2FP-BLD-01", fitment: "4-Foot Standard Pitch", priceInr: 2400, dispatch: "2-4 days", x: 24, y: 72 },
      { id: 2, nameEn: "Crop Star-Wheel Conveyor Belt", nameHi: "फसल कन्वेयर बेल्ट (स्टार)", sku: "VAR2FP-CNV-02", fitment: "Reinforced Lugged Belt", priceInr: 1850, dispatch: "2-4 days", x: 36, y: 58 },
      { id: 3, nameEn: "Cutter Bar Pitman Arm & Eccentric", nameHi: "कटर बार पिटमैन आर्म", sku: "VAR2FP-PIT-03", fitment: "Forged Bearing Cam", priceInr: 2150, dispatch: "2-4 days", x: 30, y: 66 },
      { id: 4, nameEn: "7 HP Petrol Engine Carburetor", nameHi: "7HP पेट्रोल कार्बोरेटर", sku: "VAR2FP-CRB-04", fitment: "170F 212cc", priceInr: 1150, dispatch: "2-4 days", x: 64, y: 42 },
      { id: 5, nameEn: "Main Drive V-Belt & Tension Pulley", nameHi: "मेन ड्राइव बेल्ट और पुली", sku: "VAR2FP-BLT-05", fitment: "Cutter + Wheel Drive", priceInr: 980, dispatch: "2-4 days", x: 54, y: 54 },
      { id: 6, nameEn: "Pneumatic Tractor-Grip Tyre (4.00-8)", nameHi: "रीपर रबर टायर (4.00-8)", sku: "VAR2FP-TYR-06", fitment: "Heavy Lug Tubed", priceInr: 2100, dispatch: "2-4 days", x: 52, y: 72 }
    ],
    triage: [
      { symptom: "Crop stalks chew instead of clean cut", checks: ["Adjust cutter finger ledger-plate clearance (< 0.5mm)", "Grease sickle bar slides every 2 hrs", "Maintain 70% throttle during wheat/paddy cut"] },
      { symptom: "Cut crop fails to windrow cleanly", checks: ["Check star-wheel conveyor belt tension", "Clear wrapped weeds from crop dividers", "Ensure field moisture is not dripping wet"] },
      { symptom: "Cutter bar clutch slips", checks: ["Tighten cutter engagement cable barrel adjuster", "Inspect V-belt glazing or oil contamination", "Check pitman eccentric bearing play"] },
      { symptom: "Engine stalls on slight bunds", checks: ["Clean fuel petcock sediment cup", "Check air filter for chaff clogging", "Engage low gear before crossing field bunds"] }
    ]
  }
];
