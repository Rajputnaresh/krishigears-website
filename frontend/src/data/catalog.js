// KrishiGears product catalog — premium agricultural machinery range.
// Authentic farming equipment built to FMTTI / SRFMTTI standards, sold PAN India.

import {
  Tractor, Wrench, Scissors, Drill, SprayCan, Droplets,
  Trees, Sprout, Wheat, Cog, Settings, CircleDot, Package
} from "lucide-react";

export const LOGO_URL = "/logo-96.webp";
export const LOGO_LARGE_URL = "/logo512.png";
export const HERO_BG = "/assets/brand/hero-bg.webp";
export const INDIA_MAP = "/assets/brand/india-map.webp";
export const ABSTRACT_TERRAIN = "/assets/brand/abstract-terrain.webp";

// Category cover images (Self-hosted WebP for high Core Web Vitals performance)
const COVER = {
  weeder: "/images/products/weeder.webp",
  brushCutter: "/images/products/brush-cutter.webp",
  chainsaw: "/images/products/chainsaw.webp",
  earthAuger: "/images/products/earth-auger.webp",
  waterPump: "/images/products/water-pump.webp",
  hosePipe: "/images/products/hosepipe.webp",
  engine: "/images/products/engine.webp",
  sprayer: "/images/products/sprayer.webp",
  chaffCutter: "/images/products/chaff-cutter.webp",
  maizeThresher: "/images/products/maize-thresher.webp",
  reaper: "/images/products/reaper.webp",
  grassMower: "/images/products/grass-mower.webp",
  miniInter: "/images/products/mini-inter.webp",
  babyWeeder: "/images/products/baby-weeder.webp",
  seeder: "/images/products/seeder.webp",
  crankshaft: "/images/products/crankshaft.webp",
  piston: "/images/products/piston.webp",
  carburetor: "/images/products/carburetor.webp",
  recoil: "/images/products/recoil.webp",
};

export const FARMER_FIELD = "https://images.pexels.com/photos/29039798/pexels-photo-29039798.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940";
export const FIELD_TRACTOR = "https://images.pexels.com/photos/2933243/pexels-photo-2933243.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940";
export const PLOWING = FIELD_TRACTOR;

export const COMPANY = {
  name: "KrishiGears",
  legalName: "KRISHIGEARS INDIA PRIVATE LIMITED",
  tagline: "For the Farmers, With the Farmer, To the Farmer, HAMESHA",
  website: "KrishiGears.com",
  email: "sales@krishigears.com",
  contact: "contact@krishigears.com",
  support: "support@krishigears.com",
  service: "service@krishigears.com",
  accounts: "accounts@krishigears.com",
  dealers: "dealers@krishigears.com",
  phone: "+91 60060 78815",
  whatsapp: "916006078815",
  address: "Flat No.: T5-202, Mahima Shubh Nilay Apartments, Jaisinghpura, Ajmer Road, Jaipur, Rajasthan 302026",
  city: "Jaipur",
  state: "Rajasthan",
  pincode: "302026",
  gst: "08AANCK2216L1ZA",
  cin: "U46539RJ2026PTC117758",
  pan: "AANCK2216L",
  tan: "JPRK10437A",
  retailBrand: "FarmingTools.in",
  retailWebsite: "https://farmingtools.in",
};

// FarmingTools.in — sister B2C ecommerce site for consumer transactions.
// KrishiGears.com is the B2B / dealer / OEM / institutional brand site.
// All retail "buy" intent on KrishiGears redirects here.
export const FARMINGTOOLS_URL = (process.env.REACT_APP_FARMINGTOOLS_URL || process.env.NEXT_PUBLIC_FARMINGTOOLS_URL || "https://farmingtools.in").replace(/\/$/, "");

const FARMINGTOOLS_COLLECTION_HANDLES = {
  "agricultural-accessories": "accessories",
  "agricultural-engines": "engines-motors",
  "agricultural-spare-parts": "spare-parts",
  "battery-sprayers": "battery-sprayers",
  "brush-cutter-spare-parts": "brush-cutter-spare-parts",
  "brush-cutters": "brush-cutters",
  "crop-reapers": "power-reapers",
  "farm-machinery": "farm-machinery",
  "lawn-mowers": "grass-mowers",
  "chaff-cutters": "chaff-cutters",
  "chain-saws": "chainsaws",
  "earth-augers": "earth-augers",
  "htp-pumps": "htp-sprayers",
  "mini-cultivators": "mini-power-tillers",
  "power-sprayers": "power-sprayers",
  "power-tillers": "power-weeders-tillers",
  "power-weeder-spare-parts": "spare-parts",
  "power-weeders": "power-weeders",
  "reapers": "power-reapers",
  "rotavator-blades": "tiller-attachments",
  "seeders": "seeders",
  "water-pumps": "water-pumps",
};

const FARMINGTOOLS_PRODUCT_HANDLES = {
  "nb-icd-c178": "royal-kissan-nb-icd-c178",
  "nb-icd-c186": "royal-kissan-nb-icd-c186",
  "np-icp-c177": "royal-kissan-np-icp-c177",
  "nsm-bc-c35": "royal-kissan-nsm-bc-c35-sp-bp",
  "nsm-bc-c43": "royal-kissan-nsm-bc-c43-sp-bp",
  "nsm-bc-c52": "royal-kissan-nsm-bc-c52-sp-bp",
  "nsm-csp-c58": "royal-kissan-nsm-csp-c58-18-22",
  "nsm-ea-p52": "royal-kissan-nsm-ea-p52",
  "nsm-ea-p55": "royal-kissan-nsm-ea-p55",
  "nsm-ea-p68": "royal-kissan-nsm-ea-p68",
  "kg-170f": "royal-kissan-nb-icp-c170-lce",
  "kg-173f-diesel": "royal-kissan-kg-173f",
  "kg-177f-wolf": "royal-kissan-kg-170f",
  "kg-baby-weeder": "royal-kissan-kg-bw-p63",
  "kg-bc-p50": "royal-kissan-kg-bc-p50-sp",
  "kg-bc-up35": "royal-kissan-kg-bc-up35-bp-sp",
  "kg-bc-up43": "royal-kissan-kg-bc-up43-sp",
  "kg-bc-up52": "royal-kissan-kg-bc-up52-sp-bp",
  "kg-chaff-cutter": "royal-kissan-kg-cc-3-2",
  "kg-csp-up58": "royal-kissan-kg-csp-up58-18-22",
  "kg-csp-up63": "royal-kissan-kg-csp-up63-18-22",
  "kg-ea-p52": "royal-kissan-kg-ea-p52",
  "kg-ea-p68": "royal-kissan-kg-ea-p68",
  "kg-icd-up186-sh": "royal-kissan-kg-icd-up186-sh",
  "kg-icp-p170-lde": "royal-kissan-kg-icp-p170-lde",
  "kg-icp-p177-lde": "royal-kissan-kg-icp-p177-lde",
  "kg-icp-up170-sh": "royal-kissan-kg-icp-up170-sh-ultra-premium",
  "kg-pw-wp-d80": "royal-kissan-kg-pw-wp-d80",
  "kg-pw-wp-p80": "royal-kissan-kg-pw-wp-p80",
  "kg-su80": "royal-kissan-kg-su80",
  "kg-wp-p02": "royal-kissan-kg-wp-p02",
  "kg-wp-p03": "royal-kissan-kg-wp-p03",
  "kg-wp-p1-5": "royal-kissan-kg-wp-p1-5",
  "kg-wp-up3": "royal-kissan-kg-wp-up3",
  "wqd10-11-075a": "royal-kissan-wqd10-11-0-75a",
  "wqd15-10-11a": "royal-kissan-wqd15-10-1-1fa",
  "wqd15-15-15fa": "royal-kissan-wqd15-15-1-5fa",
};

export const farmingtoolsCategoryUrl = (slug) => {
  const handle = FARMINGTOOLS_COLLECTION_HANDLES[slug] || slug;
  return handle ? `${FARMINGTOOLS_URL}/collections/${handle}` : FARMINGTOOLS_URL;
};

export const farmingtoolsProductUrl = (productOrSlug, categorySlug) => {
  const slug = typeof productOrSlug === "object" ? productOrSlug?.slug : productOrSlug;
  const fallbackCategory = typeof productOrSlug === "object" ? productOrSlug?.category : categorySlug;
  const handle = FARMINGTOOLS_PRODUCT_HANDLES[slug];

  if (handle) return `${FARMINGTOOLS_URL}/products/${handle}`;
  if (fallbackCategory) return farmingtoolsCategoryUrl(fallbackCategory);
  return FARMINGTOOLS_URL;
};


export const CATEGORIES = [
  {
    slug: "power-weeders",
    name: "Power Weeders & Tillers",
    icon: Tractor,
    image: COVER.weeder,
    featured: true,
    short: "Commercial petrol & diesel intercultivators, rotary tillers, chain cultivators, and walking tractors for Indian farming.",
  },
  {
    slug: "lawn-mowers",
    name: "Commercial Lawn Mowers",
    icon: CircleDot,
    image: COVER.grassMower,
    featured: true,
    short: "Commercial walk-behind rotary mowers, heavy-duty roller mowers, and diesel ride-on grass cutters for farms, estates, and turf.",
  },
  {
    slug: "brush-cutters",
    name: "Brush Cutters & Crop Trimmers",
    icon: Scissors,
    image: COVER.brushCutter,
    featured: true,
    short: "Heavy-duty 2-stroke and 4-stroke backpack & side-pack brush cutters, multi-crop weed cutters, and cordless trimmers.",
  },
  {
    slug: "crop-reapers",
    name: "Crop Harvesters & Reapers",
    icon: Wheat,
    image: COVER.reaper,
    featured: true,
    short: "High-efficiency baffle crop reapers and paddy/wheat harvesters engineered for clean cutting and zero-grain loss.",
  },
  {
    slug: "farm-machinery",
    name: "Farm Machinery & Implements",
    icon: Settings,
    image: COVER.chaffCutter,
    featured: false,
    short: "Heavy-duty chaff cutters, post hole earth augers, agricultural water pumps, chainsaws, garden rollers, and stubble mowers.",
  },
  {
    slug: "power-weeder-spare-parts",
    name: "Genuine Spare Parts & Accessories",
    icon: Wrench,
    image: COVER.crankshaft,
    featured: true,
    short: "Genuine OEM replacement carburetors, recoil starters, crankshafts, piston rings, rotary tiller blades, and brush cutter blades.",
  },
];

// ----------- Spec helpers -----------
const baseFeatures = (extra = []) => [
  "Genuine KrishiGears branded product",
  "Backed by manufacturer warranty",
  "PAN India delivery from KrishiGears",
  "Genuine spare parts availability",
  ...extra,
];

const baseApps = (apps) => apps;
const baseBenefits = (extra = []) => [
  "Saves significant manual labour",
  "Reduces operating cost over time",
  "FMTTI-tested durability",
  ...extra,
];
const warrantyStd = "12 months manufacturer warranty + KrishiGears after-sales service network.";
const warranty6 = "6 months manufacturer warranty + KrishiGears after-sales service network.";

// ----------- PRODUCT CATALOG -----------
export const PRODUCTS = [
  {
    "brand": "KrishiGears",
    "slug": "kg-170f",
    "category": "power-weeders",
    "name": "KrishiGears KG-170F Petrol Power Weeder (7 HP)",
    "model": "KG-170F",
    "badges": [
      "Bestseller",
      "FMTTI Tested"
    ],
    "price": 26000,
    "images": [
      "/images/catalog/kg-170f.webp"
    ],
    "specs": {
      "Engine": "4 Stroke Petrol",
      "Power": "7 HP / 212cc",
      "Start": "Recoil",
      "Blades": "32 Dryland",
      "PTO": "Yes"
    },
    "features": [
      "Genuine KrishiGears branded product",
      "Backed by manufacturer warranty",
      "PAN India delivery from KrishiGears",
      "Genuine spare parts availability",
      "Heavy-duty rotary attachment",
      "Adjustable handlebar",
      "Deep tilling capability"
    ],
    "applications": [
      "Sugarcane",
      "Cotton",
      "Vegetable inter-cultivation"
    ],
    "benefits": [
      "Saves significant manual labour",
      "Reduces operating cost over time",
      "FMTTI-tested durability",
      "Cuts labor costs by 70%",
      "Perfect for hard soil"
    ],
    "warranty": "12 months manufacturer warranty + KrishiGears after-sales service network."
  },
  {
    "brand": "KrishiGears",
    "slug": "kg-173f-diesel",
    "category": "power-weeders",
    "name": "KrishiGears KG-173F Diesel Power Weeder (5.5 HP)",
    "model": "KG-173F",
    "badges": [
      "High Torque"
    ],
    "price": 34000,
    "images": [
      "/images/catalog/kg-173f-diesel.webp"
    ],
    "specs": {
      "Engine": "4 Stroke Diesel",
      "Power": "5.5 HP",
      "Start": "Recoil",
      "WorkingWidth": "3.5 Feet"
    },
    "features": [
      "Genuine KrishiGears branded product",
      "Backed by manufacturer warranty",
      "PAN India delivery from KrishiGears",
      "Genuine spare parts availability",
      "High torque at low RPM",
      "Fuel efficient diesel engine",
      "Rugged transmission"
    ],
    "applications": [
      "Heavy clay soil",
      "Orchards",
      "Large farms"
    ],
    "benefits": [
      "Saves significant manual labour",
      "Reduces operating cost over time",
      "FMTTI-tested durability",
      "Low running cost",
      "Excellent for deep plowing"
    ],
    "warranty": "12 months manufacturer warranty + KrishiGears after-sales service network."
  },
  {
    "brand": "KrishiGears",
    "slug": "kg-177f-wolf",
    "category": "power-weeders",
    "name": "KrishiGears KG-177F Wolf Petrol Weeder (9 HP)",
    "model": "KG-177F",
    "badges": [
      "Heavy Duty"
    ],
    "price": 36000,
    "images": [
      "/images/catalog/kg-177f-wolf.webp"
    ],
    "specs": {
      "Engine": "4 Stroke Petrol",
      "Power": "9 HP / 270cc",
      "Start": "Recoil",
      "WorkingDepth": "8-10 inches"
    },
    "features": [
      "Genuine KrishiGears branded product",
      "Backed by manufacturer warranty",
      "PAN India delivery from KrishiGears",
      "Genuine spare parts availability",
      "9 HP massive power",
      "Direct drive transmission",
      "Wide tilling span"
    ],
    "applications": [
      "Commercial farming",
      "Hard terrain cultivation"
    ],
    "benefits": [
      "Saves significant manual labour",
      "Reduces operating cost over time",
      "FMTTI-tested durability",
      "Replaces tractor for mid-size farms",
      "High acreage coverage"
    ],
    "warranty": "12 months manufacturer warranty + KrishiGears after-sales service network."
  },
  {
    "brand": "KrishiGears",
    "slug": "kg-icp-p170-lde",
    "category": "power-weeders",
    "name": "KrishiGears KG-ICP-P170-LDE Electric Start Weeder",
    "model": "KG-ICP-P170-LDE",
    "badges": [
      "Premium",
      "Self Start"
    ],
    "price": 30000,
    "images": [
      "/images/catalog/kg-icp-p170-lde.webp"
    ],
    "specs": {
      "Engine": "Petrol",
      "Power": "7 HP",
      "Start": "Key / Electric Start",
      "Weight": "85 kg"
    },
    "features": [
      "Genuine KrishiGears branded product",
      "Backed by manufacturer warranty",
      "PAN India delivery from KrishiGears",
      "Genuine spare parts availability",
      "Electric Key Start",
      "LED Headlight for night work",
      "Anti-vibration mount"
    ],
    "applications": [
      "All crops",
      "Night operations"
    ],
    "benefits": [
      "Saves significant manual labour",
      "Reduces operating cost over time",
      "FMTTI-tested durability",
      "Zero effort starting",
      "Highly comfortable operation"
    ],
    "warranty": "12 months manufacturer warranty + KrishiGears after-sales service network."
  },
  {
    "brand": "KrishiGears",
    "slug": "kg-icp-up170-sh",
    "category": "power-weeders",
    "name": "KrishiGears KG-ICP-UP170-SH Back-Rotary Weeder",
    "model": "KG-ICP-UP170-SH",
    "badges": [
      "Back Rotary"
    ],
    "price": 38000,
    "images": [
      "/images/catalog/kg-icp-up170-sh.webp"
    ],
    "specs": {
      "Engine": "Petrol",
      "Power": "7 HP",
      "Start": "Recoil",
      "Transmission": "Gear Drive"
    },
    "features": [
      "Genuine KrishiGears branded product",
      "Backed by manufacturer warranty",
      "PAN India delivery from KrishiGears",
      "Genuine spare parts availability",
      "Active back rotary action",
      "Perfectly balanced center of gravity"
    ],
    "applications": [
      "Weed control in narrow rows",
      "Soft soil tilling"
    ],
    "benefits": [
      "Saves significant manual labour",
      "Reduces operating cost over time",
      "FMTTI-tested durability",
      "Leaves finely milled soil",
      "Operator fatigue reduced by 50%"
    ],
    "warranty": "12 months manufacturer warranty + KrishiGears after-sales service network."
  },
  {
    "brand": "KrishiGears",
    "slug": "kg-icd-up186-sh",
    "category": "power-weeders",
    "name": "KrishiGears KG-ICD-UP186-SH Diesel (10 HP)",
    "model": "KG-ICD-UP186-SH",
    "badges": [
      "Professional",
      "10 HP"
    ],
    "price": 46000,
    "images": [
      "/images/catalog/kg-icd-up186-sh.webp"
    ],
    "specs": {
      "Engine": "Diesel",
      "Power": "10 HP",
      "Start": "Recoil / Electric",
      "PTO": "Dual PTO"
    },
    "features": [
      "Genuine KrishiGears branded product",
      "Backed by manufacturer warranty",
      "PAN India delivery from KrishiGears",
      "Genuine spare parts availability",
      "Massive 10 HP diesel engine",
      "Multi-attachment ready (Reaper, Water Pump)"
    ],
    "applications": [
      "Contract farming",
      "Rental services",
      "Large estates"
    ],
    "benefits": [
      "Saves significant manual labour",
      "Reduces operating cost over time",
      "FMTTI-tested durability",
      "Industrial grade durability",
      "Can power water pumps directly"
    ],
    "warranty": "12 months manufacturer warranty + KrishiGears after-sales service network."
  },
  {
    "brand": "KrishiGears",
    "slug": "kg-baby-weeder",
    "category": "power-weeders",
    "name": "KrishiGears KG Baby Weeder (Lightweight)",
    "model": "KG-BW",
    "badges": [
      "Compact"
    ],
    "price": 14500,
    "images": [
      "/images/catalog/kg-baby-weeder.webp"
    ],
    "specs": {
      "Type": "Compact Baby Weeder",
      "Weight": "Ultra Light"
    },
    "features": [
      "Genuine KrishiGears branded product",
      "Backed by manufacturer warranty",
      "PAN India delivery from KrishiGears",
      "Genuine spare parts availability",
      "Lightweight & maneuverable",
      "Easy for women & senior farmers"
    ],
    "applications": [
      "Rice paddy",
      "Small kitchen gardens",
      "Greenhouses"
    ],
    "benefits": [
      "Saves significant manual labour",
      "Reduces operating cost over time",
      "FMTTI-tested durability",
      "80% weed reduction in tight spaces"
    ],
    "warranty": "12 months manufacturer warranty + KrishiGears after-sales service network."
  },
  {
    "brand": "KrishiGears",
    "slug": "kg-crankshaft",
    "category": "power-weeder-spare-parts",
    "name": "KrishiGears Crankshaft Assembly (7 HP / 9 HP)",
    "model": "KG-CRANK-WEEDER",
    "badges": [
      "Spare Part"
    ],
    "price": 1850,
    "images": [
      "/images/products/crankshaft.webp"
    ],
    "specs": {
      "Type": "Crankshaft",
      "Grade": "OEM",
      "Compatibility": "KG-170F, KG-177F"
    },
    "features": [
      "Genuine KrishiGears branded product",
      "Backed by manufacturer warranty",
      "PAN India delivery from KrishiGears",
      "Genuine spare parts availability",
      "Genuine OEM grade forged steel",
      "Precision machined"
    ],
    "applications": [
      "Engine overhaul",
      "Service center stock"
    ],
    "benefits": [
      "Saves significant manual labour",
      "Reduces operating cost over time",
      "FMTTI-tested durability",
      "Restores factory engine performance"
    ],
    "warranty": "3 months replacement on manufacturing defects"
  },
  {
    "brand": "KrishiGears",
    "slug": "kg-piston-ring",
    "category": "power-weeder-spare-parts",
    "name": "KrishiGears Piston & Ring Set (Standard & Oversize)",
    "model": "KG-PISTON-WEEDER",
    "badges": [
      "Spare Part"
    ],
    "price": 750,
    "images": [
      "/images/products/piston.webp"
    ],
    "specs": {
      "Type": "Piston & Ring",
      "Grade": "OEM",
      "Compatibility": "All Petrol Weeders"
    },
    "features": [
      "Genuine KrishiGears branded product",
      "Backed by manufacturer warranty",
      "PAN India delivery from KrishiGears",
      "Genuine spare parts availability",
      "Low friction alloy",
      "Heat resistant rings"
    ],
    "applications": [
      "Engine rebuilds",
      "Compression loss repair"
    ],
    "benefits": [
      "Saves significant manual labour",
      "Reduces operating cost over time",
      "FMTTI-tested durability",
      "Eliminates oil burning",
      "Restores full compression"
    ],
    "warranty": "3 months replacement on manufacturing defects"
  },
  {
    "brand": "KrishiGears",
    "slug": "kg-recoil-starter",
    "category": "power-weeder-spare-parts",
    "name": "KrishiGears Recoil Starter Assembly (Pull Cord)",
    "model": "KG-RECOIL-WEEDER",
    "badges": [
      "Spare Part"
    ],
    "price": 650,
    "images": [
      "/images/products/recoil.webp"
    ],
    "specs": {
      "Type": "Recoil Starter Assembly",
      "Compatibility": "KG-170F, KG-173F"
    },
    "features": [
      "Genuine KrishiGears branded product",
      "Backed by manufacturer warranty",
      "PAN India delivery from KrishiGears",
      "Genuine spare parts availability",
      "Easy-pull ratcheting mechanism",
      "Heavy duty nylon cord"
    ],
    "applications": [
      "Broken pull cord repair"
    ],
    "benefits": [
      "Saves significant manual labour",
      "Reduces operating cost over time",
      "FMTTI-tested durability",
      "Quick field replacement"
    ],
    "warranty": "3 months replacement on manufacturing defects"
  },
  {
    "brand": "KrishiGears",
    "slug": "kg-rotary-blades",
    "category": "power-weeder-spare-parts",
    "name": "KrishiGears Dryland / Wetland Tiller Blades (Set of 32)",
    "model": "KG-BLADES-32",
    "badges": [
      "Fast Moving Spare"
    ],
    "price": 1400,
    "images": [
      "/images/catalog/kg-rotary-blades.webp"
    ],
    "specs": {
      "Type": "Rotary Tine",
      "Material": "High Carbon Steel",
      "Hardness": "HRC 45+"
    },
    "features": [
      "Genuine KrishiGears branded product",
      "Backed by manufacturer warranty",
      "PAN India delivery from KrishiGears",
      "Genuine spare parts availability",
      "Self-sharpening edge",
      "Rust resistant coating"
    ],
    "applications": [
      "Regular blade replacement"
    ],
    "benefits": [
      "Saves significant manual labour",
      "Reduces operating cost over time",
      "FMTTI-tested durability",
      "Deeper cut with less engine strain"
    ],
    "warranty": "Guaranteed against breakage during transit"
  },
  {
    "slug": "bi-750-pto-kibao",
    "category": "power-weeders",
    "name": "KrishiGears 750 PTO Kibao Series (7.0 HP max, Petrol / 4 Litre)",
    "model": "750 PTO Kibao Series",
    "brand": "KrishiGears",
    "badges": [
      "FMTTI Tested",
      "ISO 9001:2015",
      "Commercial Grade"
    ],
    "price": 36000,
    "comparePrice": 42000,
    "images": [
      "/images/catalog/bi-750-pto-kibao.webp"
    ],
    "specs": {
      "Starting": "Manual",
      "RPM": "3600",
      "Transmission": "Gear Drive",
      "RPM Rotary": "800",
      "Power": "7.0 HP max",
      "Driving Mode": "Gear",
      "Displacement": "212 cc",
      "Gear": "1, 0, 2, R",
      "Fuel": "Petrol / 4 Litre",
      "Tilling Width": "100 cms (36 inch) Adjustable",
      "Consumption": "550 ml / hour",
      "Tilling Depth": "10 cm"
    },
    "features": [
      "Genuine KrishiGears branded product",
      "Backed by manufacturer warranty",
      "PAN India delivery from KrishiGears",
      "Genuine spare parts availability",
      "Genuine KrishiGears commercial agricultural machinery",
      "FMTTI-tested commercial durability standard",
      "Precision-engineered transmission case for tough Indian soil",
      "PAN India direct drop-ship dispatch from KrishiGears Express Network",
      "24-48 hour dispatch with genuine replacement spare parts guarantee"
    ],
    "applications": [
      "Sugarcane",
      "Cotton",
      "Vegetables (Tomato, Onion, Chilli)",
      "Maize"
    ],
    "benefits": [
      "Saves significant manual labour",
      "Reduces operating cost over time",
      "FMTTI-tested durability",
      "Cuts inter-cultivation labor cost by up to 70% in Sugarcane fields",
      "High-torque de-weeding and soil aeration in Red Loamy Soil",
      "Approved for state agricultural mechanization subsidies across Karnataka and Maharashtra"
    ],
    "warranty": "12 months manufacturer warranty + KrishiGears after-sales service network.",
    "video": null,
    "hsn": "8432",
    "gst": 12
  },
  {
    "slug": "bi-750-pro-series-orange",
    "category": "power-weeders",
    "name": "KrishiGears 750 Pro Series \u2013 Orange (7.0 HP max, Petrol / 4 Litre)",
    "model": "750 Pro Series \u2013 Orange",
    "brand": "KrishiGears",
    "badges": [
      "FMTTI Tested",
      "ISO 9001:2015",
      "Commercial Grade"
    ],
    "price": 36000,
    "comparePrice": 42000,
    "images": [
      "/images/catalog/bi-750-pro-series-orange.webp"
    ],
    "specs": {
      "Starting": "Manual",
      "RPM": "3600",
      "Transmission": "Gear Drive",
      "RPM Rotary": "800",
      "Power": "7.0 HP max",
      "Driving Mode": "Gear",
      "Displacement": "212 cc",
      "Gear": "1, 0, 2, R",
      "Fuel": "Petrol / 4 Litre",
      "Tilling Width": "100 cms (36 inch) Adjustable",
      "Consumption": "550 ml / hour",
      "Tilling Depth": "10 cm"
    },
    "features": [
      "Genuine KrishiGears branded product",
      "Backed by manufacturer warranty",
      "PAN India delivery from KrishiGears",
      "Genuine spare parts availability",
      "Genuine KrishiGears commercial agricultural machinery",
      "FMTTI-tested commercial durability standard",
      "Precision-engineered transmission case for tough Indian soil",
      "PAN India direct drop-ship dispatch from KrishiGears Express Network",
      "24-48 hour dispatch with genuine replacement spare parts guarantee"
    ],
    "applications": [
      "Sugarcane",
      "Cotton",
      "Vegetables (Tomato, Onion, Chilli)",
      "Maize"
    ],
    "benefits": [
      "Saves significant manual labour",
      "Reduces operating cost over time",
      "FMTTI-tested durability",
      "Cuts inter-cultivation labor cost by up to 70% in Sugarcane fields",
      "High-torque de-weeding and soil aeration in Red Loamy Soil",
      "Approved for state agricultural mechanization subsidies across Karnataka and Maharashtra"
    ],
    "warranty": "12 months manufacturer warranty + KrishiGears after-sales service network.",
    "video": null,
    "hsn": "8432",
    "gst": 12
  },
  {
    "slug": "bi-750-pro-series-yellow",
    "category": "power-weeders",
    "name": "KrishiGears 750 Pro Series \u2013 Yellow (7.0 HP max, Petrol / 4 Litre)",
    "model": "750 Pro Series \u2013 Yellow",
    "brand": "KrishiGears",
    "badges": [
      "FMTTI Tested",
      "ISO 9001:2015",
      "Commercial Grade"
    ],
    "price": 36000,
    "comparePrice": 42000,
    "images": [
      "/images/catalog/bi-750-pro-series-yellow.webp"
    ],
    "specs": {
      "Starting": "Manual",
      "RPM": "3600",
      "Transmission": "Gear Drive",
      "RPM Rotary": "800",
      "Power": "7.0 HP max",
      "Driving Mode": "Gear",
      "Displacement": "212 cc",
      "Gear": "1, 0, 2, R",
      "Fuel": "Petrol / 4 Litre",
      "Tilling Width": "100 cms (36 inch) Adjustable",
      "Consumption": "550 ml / hour",
      "Tilling Depth": "10 cm"
    },
    "features": [
      "Genuine KrishiGears branded product",
      "Backed by manufacturer warranty",
      "PAN India delivery from KrishiGears",
      "Genuine spare parts availability",
      "Genuine KrishiGears commercial agricultural machinery",
      "FMTTI-tested commercial durability standard",
      "Precision-engineered transmission case for tough Indian soil",
      "PAN India direct drop-ship dispatch from KrishiGears Express Network",
      "24-48 hour dispatch with genuine replacement spare parts guarantee"
    ],
    "applications": [
      "Sugarcane",
      "Cotton",
      "Vegetables (Tomato, Onion, Chilli)",
      "Maize"
    ],
    "benefits": [
      "Saves significant manual labour",
      "Reduces operating cost over time",
      "FMTTI-tested durability",
      "Cuts inter-cultivation labor cost by up to 70% in Sugarcane fields",
      "High-torque de-weeding and soil aeration in Red Loamy Soil",
      "Approved for state agricultural mechanization subsidies across Karnataka and Maharashtra"
    ],
    "warranty": "12 months manufacturer warranty + KrishiGears after-sales service network.",
    "video": null,
    "hsn": "8432",
    "gst": 12
  },
  {
    "slug": "bi-850-series",
    "category": "power-weeders",
    "name": "KrishiGears 850 Kibao Series (7.0 HP max, Petrol / 4 Litre)",
    "model": "850 Kibao Series",
    "brand": "KrishiGears",
    "badges": [
      "FMTTI Tested",
      "ISO 9001:2015",
      "Commercial Grade"
    ],
    "price": 36000,
    "comparePrice": 42000,
    "images": [
      "/images/catalog/bi-850-series.webp",
      "/images/catalog/bi-850-series-1.webp"
    ],
    "specs": {
      "Starting": "Manual",
      "RPM": "3000",
      "Transmission": "Gear Drive",
      "RPM Rotary": "800",
      "Power": "7.0 HP max",
      "Driving Mode": "Gear",
      "Displacement": "246 cc",
      "Gear": "1, 0, 2, R",
      "Fuel": "Petrol / 4 Litre",
      "Tilling Width": "100 cms (36 inch) Adjustable",
      "Consumption": "400 ml / hour",
      "Tilling Depth": "10 cm"
    },
    "features": [
      "Genuine KrishiGears branded product",
      "Backed by manufacturer warranty",
      "PAN India delivery from KrishiGears",
      "Genuine spare parts availability",
      "Genuine KrishiGears commercial agricultural machinery",
      "FMTTI-tested commercial durability standard",
      "Precision-engineered transmission case for tough Indian soil",
      "PAN India direct drop-ship dispatch from KrishiGears Express Network",
      "24-48 hour dispatch with genuine replacement spare parts guarantee"
    ],
    "applications": [
      "Sugarcane",
      "Cotton",
      "Vegetables (Tomato, Onion, Chilli)",
      "Maize"
    ],
    "benefits": [
      "Saves significant manual labour",
      "Reduces operating cost over time",
      "FMTTI-tested durability",
      "Cuts inter-cultivation labor cost by up to 70% in Sugarcane fields",
      "High-torque de-weeding and soil aeration in Red Loamy Soil",
      "Approved for state agricultural mechanization subsidies across Karnataka and Maharashtra"
    ],
    "warranty": "12 months manufacturer warranty + KrishiGears after-sales service network.",
    "video": null,
    "hsn": "8432",
    "gst": 12
  },
  {
    "slug": "bi-950-series",
    "category": "power-weeders",
    "name": "KrishiGears 950 Kibao Series (7.0 HP max, Petrol / 4 Litre)",
    "model": "950 Kibao Series",
    "brand": "KrishiGears",
    "badges": [
      "FMTTI Tested",
      "ISO 9001:2015",
      "Commercial Grade"
    ],
    "price": 45000,
    "comparePrice": 52000,
    "images": [
      "/images/catalog/bi-950-series.webp"
    ],
    "specs": {
      "Starting": "Manual",
      "RPM": "3600",
      "Transmission": "Gear Drive",
      "RPM Rotary": "800",
      "Power": "7.0 HP max",
      "Driving Mode": "Gear",
      "Displacement": "212 cc",
      "Gear": "1, 0, 2, R",
      "Fuel": "Petrol / 4 Litre",
      "Tilling Width": "100 cms (36 inch) Adjustable",
      "Consumption": "550 ml / hour",
      "Tilling Depth": "10 cm"
    },
    "features": [
      "Genuine KrishiGears branded product",
      "Backed by manufacturer warranty",
      "PAN India delivery from KrishiGears",
      "Genuine spare parts availability",
      "Genuine KrishiGears commercial agricultural machinery",
      "FMTTI-tested commercial durability standard",
      "Precision-engineered transmission case for tough Indian soil",
      "PAN India direct drop-ship dispatch from KrishiGears Express Network",
      "24-48 hour dispatch with genuine replacement spare parts guarantee"
    ],
    "applications": [
      "Sugarcane",
      "Cotton",
      "Vegetables (Tomato, Onion, Chilli)",
      "Maize"
    ],
    "benefits": [
      "Saves significant manual labour",
      "Reduces operating cost over time",
      "FMTTI-tested durability",
      "Cuts inter-cultivation labor cost by up to 70% in Sugarcane fields",
      "High-torque de-weeding and soil aeration in Red Loamy Soil",
      "Approved for state agricultural mechanization subsidies across Karnataka and Maharashtra"
    ],
    "warranty": "12 months manufacturer warranty + KrishiGears after-sales service network.",
    "video": null,
    "hsn": "8432",
    "gst": 12
  },
  {
    "slug": "kg-1000d-kibao",
    "category": "power-weeders",
    "name": "KrishiGears KG-1000D Kibao Series (7.0 HP max, Diesel)",
    "model": "KG-1000D Kibao Series",
    "brand": "KrishiGears",
    "badges": [
      "FMTTI Tested",
      "ISO 9001:2015",
      "Commercial Grade"
    ],
    "price": 58000,
    "comparePrice": 68000,
    "images": [
      "/images/catalog/kg-1000d-kibao.webp"
    ],
    "specs": {
      "Starting": "Manual",
      "RPM": "3600",
      "Transmission": "Gear Drive",
      "RPM Rotary": "800",
      "Power": "7.0 HP max",
      "Driving Mode": "Gear",
      "Displacement": "260 cc",
      "Gear": "1, 0, 2, R",
      "Fuel": "Diesel",
      "Tilling Width": "100 cms (36 inch) Adjustable",
      "Consumption": "550 ml / hour",
      "Tilling Depth": "10 cm"
    },
    "features": [
      "Genuine KrishiGears branded product",
      "Backed by manufacturer warranty",
      "PAN India delivery from KrishiGears",
      "Genuine spare parts availability",
      "Genuine KrishiGears commercial agricultural machinery",
      "FMTTI-tested commercial durability standard",
      "Precision-engineered transmission case for tough Indian soil",
      "PAN India direct drop-ship dispatch from KrishiGears Express Network",
      "24-48 hour dispatch with genuine replacement spare parts guarantee"
    ],
    "applications": [
      "Sugarcane",
      "Cotton",
      "Vegetables (Tomato, Onion, Chilli)",
      "Maize"
    ],
    "benefits": [
      "Saves significant manual labour",
      "Reduces operating cost over time",
      "FMTTI-tested durability",
      "Cuts inter-cultivation labor cost by up to 70% in Sugarcane fields",
      "High-torque de-weeding and soil aeration in Red Loamy Soil",
      "Approved for state agricultural mechanization subsidies across Karnataka and Maharashtra"
    ],
    "warranty": "12 months manufacturer warranty + KrishiGears after-sales service network.",
    "video": null,
    "hsn": "8432",
    "gst": 12
  },
  {
    "slug": "bi-bi-1000",
    "category": "power-weeders",
    "name": "KrishiGears Bi-1000 Diesel Series (7.0 HP max, Diesel)",
    "model": "Bi-1000 Diesel Series",
    "brand": "KrishiGears",
    "badges": [
      "FMTTI Tested",
      "ISO 9001:2015",
      "Commercial Grade"
    ],
    "price": 58000,
    "comparePrice": 68000,
    "images": [
      "/images/catalog/bi-bi-1000.webp"
    ],
    "specs": {
      "Starting": "Manual",
      "RPM": "3600",
      "Transmission": "Gear Drive",
      "RPM Rotary": "800",
      "Power": "7.0 HP max",
      "Driving Mode": "Gear",
      "Displacement": "260 cc",
      "Gear": "1, 0, 2, R",
      "Fuel": "Diesel",
      "Tilling Width": "100 cms (36 inch) Adjustable",
      "Consumption": "550 ml / hour",
      "Tilling Depth": "10 cm"
    },
    "features": [
      "Genuine KrishiGears branded product",
      "Backed by manufacturer warranty",
      "PAN India delivery from KrishiGears",
      "Genuine spare parts availability",
      "Genuine KrishiGears commercial agricultural machinery",
      "FMTTI-tested commercial durability standard",
      "Precision-engineered transmission case for tough Indian soil",
      "PAN India direct drop-ship dispatch from KrishiGears Express Network",
      "24-48 hour dispatch with genuine replacement spare parts guarantee"
    ],
    "applications": [
      "Sugarcane",
      "Cotton",
      "Vegetables (Tomato, Onion, Chilli)",
      "Maize"
    ],
    "benefits": [
      "Saves significant manual labour",
      "Reduces operating cost over time",
      "FMTTI-tested durability",
      "Cuts inter-cultivation labor cost by up to 70% in Sugarcane fields",
      "High-torque de-weeding and soil aeration in Red Loamy Soil",
      "Approved for state agricultural mechanization subsidies across Karnataka and Maharashtra"
    ],
    "warranty": "12 months manufacturer warranty + KrishiGears after-sales service network.",
    "video": null,
    "hsn": "8432",
    "gst": 12
  },
  {
    "slug": "kg-1050d-kibao",
    "category": "power-weeders",
    "name": "KrishiGears KG-1050D Kibao Series (7.0 HP max, Diesel / 4 Litre)",
    "model": "KG-1050D Kibao Series",
    "brand": "KrishiGears",
    "badges": [
      "FMTTI Tested",
      "ISO 9001:2015",
      "Commercial Grade"
    ],
    "price": 58000,
    "comparePrice": 68000,
    "images": [
      "/images/catalog/kg-1050d-kibao.webp"
    ],
    "specs": {
      "Starting": "Manual",
      "RPM": "3600",
      "Transmission": "Gear Drive",
      "RPM Rotary": "800",
      "Power": "7.0 HP max",
      "Driving Mode": "Gear",
      "Displacement": "296 cc",
      "Gear": "1, 0, 2, R",
      "Fuel": "Diesel / 4 Litre",
      "Tilling Width": "105 cms (36 inch) Adjustable",
      "Consumption": "550 ml / hour",
      "Tilling Depth": "10 cm"
    },
    "features": [
      "Genuine KrishiGears branded product",
      "Backed by manufacturer warranty",
      "PAN India delivery from KrishiGears",
      "Genuine spare parts availability",
      "Genuine KrishiGears commercial agricultural machinery",
      "FMTTI-tested commercial durability standard",
      "Precision-engineered transmission case for tough Indian soil",
      "PAN India direct drop-ship dispatch from KrishiGears Express Network",
      "24-48 hour dispatch with genuine replacement spare parts guarantee"
    ],
    "applications": [
      "Sugarcane",
      "Cotton",
      "Vegetables (Tomato, Onion, Chilli)",
      "Maize"
    ],
    "benefits": [
      "Saves significant manual labour",
      "Reduces operating cost over time",
      "FMTTI-tested durability",
      "Cuts inter-cultivation labor cost by up to 70% in Sugarcane fields",
      "High-torque de-weeding and soil aeration in Red Loamy Soil",
      "Approved for state agricultural mechanization subsidies across Karnataka and Maharashtra"
    ],
    "warranty": "12 months manufacturer warranty + KrishiGears after-sales service network.",
    "video": null,
    "hsn": "8432",
    "gst": 12
  },
  {
    "slug": "kg-1150d-manual",
    "category": "power-weeders",
    "name": "KrishiGears KG-1150D Diesel (Manual Start) (7 HP, Diesel)",
    "model": "KG-1150D Diesel (Manual Start)",
    "brand": "KrishiGears",
    "badges": [
      "FMTTI Tested",
      "ISO 9001:2015",
      "Commercial Grade"
    ],
    "price": 58000,
    "comparePrice": 68000,
    "images": [
      "/images/catalog/kg-1150d-manual.webp"
    ],
    "specs": {
      "Starting": "Manual",
      "Transmission": "Gear Drive",
      "Displacement": "406 cc",
      "Fuel": "Diesel",
      "Consumption": "650 ml / hour",
      "RPM": "3000",
      "RPM Rotary": "800",
      "Driving Mode": "Gear",
      "Gear": "1, 0, 2, 0, R",
      "Tilling Width": "135 cms (48 inch) Adjustable",
      "Tilling Depth": "10 cm"
    },
    "features": [
      "Genuine KrishiGears branded product",
      "Backed by manufacturer warranty",
      "PAN India delivery from KrishiGears",
      "Genuine spare parts availability",
      "Genuine KrishiGears commercial agricultural machinery",
      "FMTTI-tested commercial durability standard",
      "Precision-engineered transmission case for tough Indian soil",
      "PAN India direct drop-ship dispatch from KrishiGears Express Network",
      "24-48 hour dispatch with genuine replacement spare parts guarantee"
    ],
    "applications": [
      "Sugarcane",
      "Cotton",
      "Vegetables (Tomato, Onion, Chilli)",
      "Maize"
    ],
    "benefits": [
      "Saves significant manual labour",
      "Reduces operating cost over time",
      "FMTTI-tested durability",
      "Cuts inter-cultivation labor cost by up to 70% in Sugarcane fields",
      "High-torque de-weeding and soil aeration in Red Loamy Soil",
      "Approved for state agricultural mechanization subsidies across Karnataka and Maharashtra"
    ],
    "warranty": "12 months manufacturer warranty + KrishiGears after-sales service network.",
    "video": null,
    "hsn": "8432",
    "gst": 12
  },
  {
    "slug": "kg-1150d-electric",
    "category": "power-weeders",
    "name": "KrishiGears KG-1150D Diesel (Electric Start) (7 HP, Diesel)",
    "model": "KG-1150D Diesel (Electric Start)",
    "brand": "KrishiGears",
    "badges": [
      "FMTTI Tested",
      "ISO 9001:2015",
      "Commercial Grade"
    ],
    "price": 68000,
    "comparePrice": 78000,
    "images": [
      "/images/catalog/kg-1150d-electric.webp"
    ],
    "specs": {
      "Starting": "Electric",
      "Transmission": "Gear Drive",
      "Displacement": "406 cc",
      "Fuel": "Diesel",
      "Consumption": "650 ml / hour",
      "RPM": "3000",
      "RPM Rotary": "800",
      "Driving Mode": "Gear",
      "Gear": "1, 0, 2, 0, R",
      "Tilling Width": "135 cms (48 inch) Adjustable",
      "Tilling Depth": "10 cm"
    },
    "features": [
      "Genuine KrishiGears branded product",
      "Backed by manufacturer warranty",
      "PAN India delivery from KrishiGears",
      "Genuine spare parts availability",
      "Genuine KrishiGears commercial agricultural machinery",
      "FMTTI-tested commercial durability standard",
      "Precision-engineered transmission case for tough Indian soil",
      "PAN India direct drop-ship dispatch from KrishiGears Express Network",
      "24-48 hour dispatch with genuine replacement spare parts guarantee"
    ],
    "applications": [
      "Sugarcane",
      "Cotton",
      "Vegetables (Tomato, Onion, Chilli)",
      "Maize"
    ],
    "benefits": [
      "Saves significant manual labour",
      "Reduces operating cost over time",
      "FMTTI-tested durability",
      "Cuts inter-cultivation labor cost by up to 70% in Sugarcane fields",
      "High-torque de-weeding and soil aeration in Red Loamy Soil",
      "Approved for state agricultural mechanization subsidies across Karnataka and Maharashtra"
    ],
    "warranty": "12 months manufacturer warranty + KrishiGears after-sales service network.",
    "video": null,
    "hsn": "8432",
    "gst": 12
  },
  {
    "slug": "kg-188d-recoil",
    "category": "power-weeders",
    "name": "KrishiGears KG-188D Diesel (Recoil) (7.0 HP max, Diesel / 5.5 Litre)",
    "model": "KG-188D Diesel (Recoil)",
    "brand": "KrishiGears",
    "badges": [
      "FMTTI Tested",
      "ISO 9001:2015",
      "Commercial Grade"
    ],
    "price": 68000,
    "comparePrice": 78000,
    "images": [
      "/images/catalog/kg-188d-recoil.webp"
    ],
    "specs": {
      "Starting": "Recoil",
      "Transmission": "Gear Drive",
      "Power": "7.0 HP max",
      "Displacement": "406 cc",
      "Fuel": "Diesel / 5.5 Litre",
      "Consumption": "650 ml / hour",
      "RPM": "3000",
      "RPM Rotary": "800",
      "Gear": "1, 0, 2, 0, R",
      "Tilling Width": "135 cms (48 inch) Adjustable",
      "Tilling Depth": "10 cm"
    },
    "features": [
      "Genuine KrishiGears branded product",
      "Backed by manufacturer warranty",
      "PAN India delivery from KrishiGears",
      "Genuine spare parts availability",
      "Genuine KrishiGears commercial agricultural machinery",
      "FMTTI-tested commercial durability standard",
      "Precision-engineered transmission case for tough Indian soil",
      "PAN India direct drop-ship dispatch from KrishiGears Express Network",
      "24-48 hour dispatch with genuine replacement spare parts guarantee"
    ],
    "applications": [
      "Sugarcane",
      "Cotton",
      "Vegetables (Tomato, Onion, Chilli)",
      "Maize"
    ],
    "benefits": [
      "Saves significant manual labour",
      "Reduces operating cost over time",
      "FMTTI-tested durability",
      "Cuts inter-cultivation labor cost by up to 70% in Sugarcane fields",
      "High-torque de-weeding and soil aeration in Red Loamy Soil",
      "Approved for state agricultural mechanization subsidies across Karnataka and Maharashtra"
    ],
    "warranty": "12 months manufacturer warranty + KrishiGears after-sales service network.",
    "video": null,
    "hsn": "8432",
    "gst": 12
  },
  {
    "slug": "kg-188d-electric",
    "category": "power-weeders",
    "name": "KrishiGears KG-188D Diesel (Electric Start) (7.0 HP max, Diesel / 5.5 Litre)",
    "model": "KG-188D Diesel (Electric Start)",
    "brand": "KrishiGears",
    "badges": [
      "FMTTI Tested",
      "ISO 9001:2015",
      "Commercial Grade"
    ],
    "price": 68000,
    "comparePrice": 78000,
    "images": [
      "/images/catalog/kg-188d-electric.webp"
    ],
    "specs": {
      "Starting": "Electric",
      "Transmission": "Gear Drive",
      "Power": "7.0 HP max",
      "Displacement": "406 cc",
      "Fuel": "Diesel / 5.5 Litre",
      "Consumption": "650 ml / hour",
      "RPM": "3000",
      "RPM Rotary": "800",
      "Gear": "1, 0, 2, 0, R",
      "Tilling Width": "135 cms (48 inch) Adjustable",
      "Tilling Depth": "10 cm"
    },
    "features": [
      "Genuine KrishiGears branded product",
      "Backed by manufacturer warranty",
      "PAN India delivery from KrishiGears",
      "Genuine spare parts availability",
      "Genuine KrishiGears commercial agricultural machinery",
      "FMTTI-tested commercial durability standard",
      "Precision-engineered transmission case for tough Indian soil",
      "PAN India direct drop-ship dispatch from KrishiGears Express Network",
      "24-48 hour dispatch with genuine replacement spare parts guarantee"
    ],
    "applications": [
      "Sugarcane",
      "Cotton",
      "Vegetables (Tomato, Onion, Chilli)",
      "Maize"
    ],
    "benefits": [
      "Saves significant manual labour",
      "Reduces operating cost over time",
      "FMTTI-tested durability",
      "Cuts inter-cultivation labor cost by up to 70% in Sugarcane fields",
      "High-torque de-weeding and soil aeration in Red Loamy Soil",
      "Approved for state agricultural mechanization subsidies across Karnataka and Maharashtra"
    ],
    "warranty": "12 months manufacturer warranty + KrishiGears after-sales service network.",
    "video": null,
    "hsn": "8432",
    "gst": 12
  },
  {
    "slug": "bi-1250-pro",
    "category": "power-weeders",
    "name": "KrishiGears 1250 PRO Series (7.0 HP max, Petrol)",
    "model": "1250 PRO Series",
    "brand": "KrishiGears",
    "badges": [
      "FMTTI Tested",
      "ISO 9001:2015",
      "Commercial Grade"
    ],
    "price": 45000,
    "comparePrice": 52000,
    "images": [
      "/images/catalog/bi-1250-pro.webp"
    ],
    "specs": {
      "Starting": "Manual",
      "RPM": "3600",
      "Transmission": "Gear Drive",
      "RPM Rotary": "800",
      "Power": "7.0 HP max",
      "Driving Mode": "Gear",
      "Displacement": "270 cc",
      "Gear": "1, 0, 2, R",
      "Fuel": "Petrol",
      "Tilling Width": "100 cms (36 inch) Adjustable",
      "Consumption": "550 ml / hour",
      "Tilling Depth": "10 cm"
    },
    "features": [
      "Genuine KrishiGears branded product",
      "Backed by manufacturer warranty",
      "PAN India delivery from KrishiGears",
      "Genuine spare parts availability",
      "Genuine KrishiGears commercial agricultural machinery",
      "FMTTI-tested commercial durability standard",
      "Precision-engineered transmission case for tough Indian soil",
      "PAN India direct drop-ship dispatch from KrishiGears Express Network",
      "24-48 hour dispatch with genuine replacement spare parts guarantee"
    ],
    "applications": [
      "Sugarcane",
      "Cotton",
      "Vegetables (Tomato, Onion, Chilli)",
      "Maize"
    ],
    "benefits": [
      "Saves significant manual labour",
      "Reduces operating cost over time",
      "FMTTI-tested durability",
      "Cuts inter-cultivation labor cost by up to 70% in Sugarcane fields",
      "High-torque de-weeding and soil aeration in Red Loamy Soil",
      "Approved for state agricultural mechanization subsidies across Karnataka and Maharashtra"
    ],
    "warranty": "12 months manufacturer warranty + KrishiGears after-sales service network.",
    "video": null,
    "hsn": "8432",
    "gst": 12
  },
  {
    "slug": "bi-1250",
    "category": "power-weeders",
    "name": "KrishiGears 1250 Series (7.0 HP max, Petrol)",
    "model": "1250 Series",
    "brand": "KrishiGears",
    "badges": [
      "FMTTI Tested",
      "ISO 9001:2015",
      "Commercial Grade"
    ],
    "price": 45000,
    "comparePrice": 52000,
    "images": [
      "/images/catalog/bi-1250.webp"
    ],
    "specs": {
      "Starting": "Manual",
      "RPM": "3600",
      "Transmission": "Gear Drive",
      "RPM Rotary": "800",
      "Power": "7.0 HP max",
      "Driving Mode": "Gear",
      "Displacement": "270 cc",
      "Gear": "1, 0, 2, R",
      "Fuel": "Petrol",
      "Tilling Width": "100 cms (36 inch) Adjustable",
      "Consumption": "550 ml / hour",
      "Tilling Depth": "10 cm"
    },
    "features": [
      "Genuine KrishiGears branded product",
      "Backed by manufacturer warranty",
      "PAN India delivery from KrishiGears",
      "Genuine spare parts availability",
      "Genuine KrishiGears commercial agricultural machinery",
      "FMTTI-tested commercial durability standard",
      "Precision-engineered transmission case for tough Indian soil",
      "PAN India direct drop-ship dispatch from KrishiGears Express Network",
      "24-48 hour dispatch with genuine replacement spare parts guarantee"
    ],
    "applications": [
      "Sugarcane",
      "Cotton",
      "Vegetables (Tomato, Onion, Chilli)",
      "Maize"
    ],
    "benefits": [
      "Saves significant manual labour",
      "Reduces operating cost over time",
      "FMTTI-tested durability",
      "Cuts inter-cultivation labor cost by up to 70% in Sugarcane fields",
      "High-torque de-weeding and soil aeration in Red Loamy Soil",
      "Approved for state agricultural mechanization subsidies across Karnataka and Maharashtra"
    ],
    "warranty": "12 months manufacturer warranty + KrishiGears after-sales service network.",
    "video": null,
    "hsn": "8432",
    "gst": 12
  },
  {
    "slug": "kg-750p-diesel",
    "category": "power-weeders",
    "name": "KrishiGears KG-750P Series (7.0 HP max, Diesel)",
    "model": "KG-750P Series",
    "brand": "KrishiGears",
    "badges": [
      "FMTTI Tested",
      "ISO 9001:2015",
      "Commercial Grade"
    ],
    "price": 58000,
    "comparePrice": 68000,
    "images": [
      "/images/catalog/kg-750p-diesel.webp"
    ],
    "specs": {
      "Starting": "Manual",
      "RPM": "3600",
      "Transmission": "Gear Drive",
      "RPM Rotary": "800",
      "Power": "7.0 HP max",
      "Driving Mode": "Gear",
      "Displacement": "540 cc",
      "Gear": "1, 0, 2, R",
      "Fuel": "Diesel",
      "Tilling Width": "135 cms (48 inch) Adjustable",
      "Consumption": "550 ml / hour",
      "Tilling Depth": "10 cm"
    },
    "features": [
      "Genuine KrishiGears branded product",
      "Backed by manufacturer warranty",
      "PAN India delivery from KrishiGears",
      "Genuine spare parts availability",
      "Genuine KrishiGears commercial agricultural machinery",
      "FMTTI-tested commercial durability standard",
      "Precision-engineered transmission case for tough Indian soil",
      "PAN India direct drop-ship dispatch from KrishiGears Express Network",
      "24-48 hour dispatch with genuine replacement spare parts guarantee"
    ],
    "applications": [
      "Sugarcane",
      "Cotton",
      "Vegetables (Tomato, Onion, Chilli)",
      "Maize"
    ],
    "benefits": [
      "Saves significant manual labour",
      "Reduces operating cost over time",
      "FMTTI-tested durability",
      "Cuts inter-cultivation labor cost by up to 70% in Sugarcane fields",
      "High-torque de-weeding and soil aeration in Red Loamy Soil",
      "Approved for state agricultural mechanization subsidies across Karnataka and Maharashtra"
    ],
    "warranty": "12 months manufacturer warranty + KrishiGears after-sales service network.",
    "video": null,
    "hsn": "8432",
    "gst": 12
  },
  {
    "slug": "kg-186-backrotary",
    "category": "power-weeders",
    "name": "KrishiGears KG-186 Back Rotary Series (7.0 HP max, Diesel / 5.5 Litre)",
    "model": "KG-186 Back Rotary Series",
    "brand": "KrishiGears",
    "badges": [
      "FMTTI Tested",
      "ISO 9001:2015",
      "Commercial Grade"
    ],
    "price": 58000,
    "comparePrice": 68000,
    "images": [
      "/images/catalog/kg-186-backrotary.webp"
    ],
    "specs": {
      "Starting": "Manual",
      "RPM": "3000",
      "Transmission": "Gear Drive",
      "RPM Rotary": "800",
      "Power": "7.0 HP max",
      "Driving Mode": "Gear",
      "Displacement": "460 cc",
      "Gear": "1, 0, 2, R",
      "Fuel": "Diesel / 5.5 Litre",
      "Tilling Width": "135 cms (48 inch) Adjustable",
      "Consumption": "650 ml / hour",
      "Tilling Depth": "10 cm"
    },
    "features": [
      "Genuine KrishiGears branded product",
      "Backed by manufacturer warranty",
      "PAN India delivery from KrishiGears",
      "Genuine spare parts availability",
      "Genuine KrishiGears commercial agricultural machinery",
      "FMTTI-tested commercial durability standard",
      "Precision-engineered transmission case for tough Indian soil",
      "PAN India direct drop-ship dispatch from KrishiGears Express Network",
      "24-48 hour dispatch with genuine replacement spare parts guarantee"
    ],
    "applications": [
      "Sugarcane",
      "Cotton",
      "Vegetables (Tomato, Onion, Chilli)",
      "Maize"
    ],
    "benefits": [
      "Saves significant manual labour",
      "Reduces operating cost over time",
      "FMTTI-tested durability",
      "Cuts inter-cultivation labor cost by up to 70% in Sugarcane fields",
      "High-torque de-weeding and soil aeration in Red Loamy Soil",
      "Approved for state agricultural mechanization subsidies across Karnataka and Maharashtra"
    ],
    "warranty": "12 months manufacturer warranty + KrishiGears after-sales service network.",
    "video": null,
    "hsn": "8432",
    "gst": 12
  },
  {
    "slug": "kg-1350-4wd",
    "category": "power-weeders",
    "name": "KrishiGears KG-1350 4WD Series (7.0 HP max, Diesel)",
    "model": "KG-1350 4WD Series",
    "brand": "KrishiGears",
    "badges": [
      "FMTTI Tested",
      "ISO 9001:2015",
      "Commercial Grade"
    ],
    "price": 145000,
    "comparePrice": 165000,
    "images": [
      "/images/catalog/kg-1350-4wd.webp"
    ],
    "specs": {
      "Starting": "Manual",
      "RPM": "3600",
      "Transmission": "Gear Drive",
      "RPM Rotary": "800",
      "Power": "7.0 HP max",
      "Driving Mode": "Gear",
      "Displacement": "540 cc",
      "Gear": "1, 0, 2, R",
      "Fuel": "Diesel",
      "Tilling Width": "135 cms (48 inch) Adjustable",
      "Consumption": "550 ml / hour",
      "Tilling Depth": "10 cm"
    },
    "features": [
      "Genuine KrishiGears branded product",
      "Backed by manufacturer warranty",
      "PAN India delivery from KrishiGears",
      "Genuine spare parts availability",
      "Genuine KrishiGears commercial agricultural machinery",
      "FMTTI-tested commercial durability standard",
      "Precision-engineered transmission case for tough Indian soil",
      "PAN India direct drop-ship dispatch from KrishiGears Express Network",
      "24-48 hour dispatch with genuine replacement spare parts guarantee"
    ],
    "applications": [
      "Sugarcane",
      "Cotton",
      "Vegetables (Tomato, Onion, Chilli)",
      "Maize"
    ],
    "benefits": [
      "Saves significant manual labour",
      "Reduces operating cost over time",
      "FMTTI-tested durability",
      "Cuts inter-cultivation labor cost by up to 70% in Sugarcane fields",
      "High-torque de-weeding and soil aeration in Red Loamy Soil",
      "Approved for state agricultural mechanization subsidies across Karnataka and Maharashtra"
    ],
    "warranty": "12 months manufacturer warranty + KrishiGears after-sales service network.",
    "video": null,
    "hsn": "8432",
    "gst": 12
  },
  {
    "slug": "bi-bi-600",
    "category": "power-weeders",
    "name": "KrishiGears Bi-600 ATV Series (7 HP, Petrol)",
    "model": "Bi-600 ATV Series",
    "brand": "KrishiGears",
    "badges": [
      "FMTTI Tested",
      "ISO 9001:2015",
      "Commercial Grade"
    ],
    "price": 36000,
    "comparePrice": 42000,
    "images": [
      "/images/catalog/bi-bi-600.webp"
    ],
    "specs": {
      "Starting": "Recoil",
      "Transmission": "Gear Drive",
      "Gear": "1, 0, 2, R",
      "Max Power": "7.0 HP",
      "Fuel": "Petrol",
      "RPM": "3600",
      "Handle Bar": "Up/Down/Left/Right Adjustable",
      "Tyre": "4.0-8",
      "Blades (Dry)": "32 pcs"
    },
    "features": [
      "Genuine KrishiGears branded product",
      "Backed by manufacturer warranty",
      "PAN India delivery from KrishiGears",
      "Genuine spare parts availability",
      "Genuine KrishiGears commercial agricultural machinery",
      "FMTTI-tested commercial durability standard",
      "Precision-engineered transmission case for tough Indian soil",
      "PAN India direct drop-ship dispatch from KrishiGears Express Network",
      "24-48 hour dispatch with genuine replacement spare parts guarantee"
    ],
    "applications": [
      "Sugarcane",
      "Cotton",
      "Vegetables (Tomato, Onion, Chilli)",
      "Maize"
    ],
    "benefits": [
      "Saves significant manual labour",
      "Reduces operating cost over time",
      "FMTTI-tested durability",
      "Cuts inter-cultivation labor cost by up to 70% in Sugarcane fields",
      "High-torque de-weeding and soil aeration in Red Loamy Soil",
      "Approved for state agricultural mechanization subsidies across Karnataka and Maharashtra"
    ],
    "warranty": "12 months manufacturer warranty + KrishiGears after-sales service network.",
    "video": null,
    "hsn": "8432",
    "gst": 12
  },
  {
    "slug": "bi-bi-600p-h-l",
    "category": "power-weeders",
    "name": "KrishiGears Bi-600P H/l Series (7 HP, Petrol)",
    "model": "Bi-600P H/L Series",
    "brand": "KrishiGears",
    "badges": [
      "FMTTI Tested",
      "ISO 9001:2015",
      "Commercial Grade"
    ],
    "price": 36000,
    "comparePrice": 42000,
    "images": [
      "/images/catalog/bi-bi-600p-h-l.webp"
    ],
    "specs": {
      "Transmission": "Gear Drive",
      "Starting": "Manual",
      "Displacement": "212 cc",
      "Gear": "1, 0, 2, R",
      "Max Power": "7.0 HP",
      "Fuel": "Petrol",
      "RPM": "3600",
      "Handle Bar": "Up/Down/Left/Right Adjustable",
      "Tyre": "4.0-8",
      "Blades (Dry)": "32 pcs"
    },
    "features": [
      "Genuine KrishiGears branded product",
      "Backed by manufacturer warranty",
      "PAN India delivery from KrishiGears",
      "Genuine spare parts availability",
      "Genuine KrishiGears commercial agricultural machinery",
      "FMTTI-tested commercial durability standard",
      "Precision-engineered transmission case for tough Indian soil",
      "PAN India direct drop-ship dispatch from KrishiGears Express Network",
      "24-48 hour dispatch with genuine replacement spare parts guarantee"
    ],
    "applications": [
      "Sugarcane",
      "Cotton",
      "Vegetables (Tomato, Onion, Chilli)",
      "Maize"
    ],
    "benefits": [
      "Saves significant manual labour",
      "Reduces operating cost over time",
      "FMTTI-tested durability",
      "Cuts inter-cultivation labor cost by up to 70% in Sugarcane fields",
      "High-torque de-weeding and soil aeration in Red Loamy Soil",
      "Approved for state agricultural mechanization subsidies across Karnataka and Maharashtra"
    ],
    "warranty": "12 months manufacturer warranty + KrishiGears after-sales service network.",
    "video": null,
    "hsn": "8432",
    "gst": 12
  },
  {
    "slug": "kg-mw-70-mini",
    "category": "power-weeders",
    "name": "KrishiGears KG-MW-70 Mini Weeder (7 HP, Petrol)",
    "model": "KG-MW-70 Mini Weeder",
    "brand": "KrishiGears",
    "badges": [
      "FMTTI Tested",
      "ISO 9001:2015",
      "Commercial Grade"
    ],
    "price": 24000,
    "comparePrice": 28000,
    "images": [
      "/images/catalog/kg-mw-70-mini.webp"
    ],
    "specs": {
      "Engine Model": "1E48F-S",
      "Engine Power": "2.2 kW / 2.99 HP / 7000 r/min",
      "Engine Displacement": "74 cc",
      "Idling Speed": "2800-3200 r/min",
      "Fuel Tank Capacity": "1200 ml",
      "Tilling Depth": "45 cm (20 inch)",
      "Capacity": "0.3-0.6 Acre/Hour"
    },
    "features": [
      "Genuine KrishiGears branded product",
      "Backed by manufacturer warranty",
      "PAN India delivery from KrishiGears",
      "Genuine spare parts availability",
      "Genuine KrishiGears commercial agricultural machinery",
      "FMTTI-tested commercial durability standard",
      "Precision-engineered transmission case for tough Indian soil",
      "PAN India direct drop-ship dispatch from KrishiGears Express Network",
      "24-48 hour dispatch with genuine replacement spare parts guarantee"
    ],
    "applications": [
      "Sugarcane",
      "Cotton",
      "Vegetables (Tomato, Onion, Chilli)",
      "Maize"
    ],
    "benefits": [
      "Saves significant manual labour",
      "Reduces operating cost over time",
      "FMTTI-tested durability",
      "Cuts inter-cultivation labor cost by up to 70% in Sugarcane fields",
      "High-torque de-weeding and soil aeration in Red Loamy Soil",
      "Approved for state agricultural mechanization subsidies across Karnataka and Maharashtra"
    ],
    "warranty": "12 months manufacturer warranty + KrishiGears after-sales service network.",
    "video": null,
    "hsn": "8432",
    "gst": 12
  },
  {
    "slug": "ri-gr-8002-7762",
    "category": "power-weeders",
    "name": "KrishiGears Power Weeder 9 Hp Model-GR 8002 - Petrol",
    "model": "GR-8002",
    "brand": "KrishiGears",
    "badges": [
      "Industrial Standard Quality",
      "Commercial Agro Tested",
      "Commercial Grade"
    ],
    "price": 52307,
    "comparePrice": 61722,
    "images": [
      "/images/catalog/ri-gr-8002-7762.webp"
    ],
    "specs": {
      "Power": "9 Hp",
      "Engine Type": "Petrol",
      "Grade Type": "Fully-Automatic",
      "Cutting Capacity": "400-600 kg/hr",
      "Brand": "KrishiGears",
      "Model Name/Number": "GR-8002"
    },
    "features": [
      "Genuine KrishiGears branded product",
      "Backed by manufacturer warranty",
      "PAN India delivery from KrishiGears",
      "Genuine spare parts availability",
      "Genuine KrishiGears commercial agricultural machinery",
      "FMTTI-tested commercial durability standard",
      "Precision-engineered transmission case for tough Indian soil",
      "PAN India direct drop-ship dispatch from KrishiGears Express Network",
      "24-48 hour dispatch with genuine replacement spare parts guarantee"
    ],
    "applications": [
      "Cotton",
      "Sugarcane",
      "Wheat",
      "Paddy"
    ],
    "benefits": [
      "Saves significant manual labour",
      "Reduces operating cost over time",
      "FMTTI-tested durability",
      "Cuts inter-cultivation labor cost by up to 70% in Cotton fields",
      "High-torque de-weeding and soil aeration in Black Cotton Soil",
      "Approved for state agricultural mechanization subsidies across Maharashtra and Madhya Pradesh"
    ],
    "warranty": "12 months manufacturer warranty + KrishiGears after-sales service network.",
    "video": "https://www.youtube.com/watch?v=XErTJ11jW2o",
    "hsn": "8432",
    "gst": 12
  },
  {
    "slug": "leo-ba-021-2486",
    "category": "power-weeders",
    "name": "KrishiGears Power Weeder 7hp Model No Ba-021 (7 Hp) - Petrol",
    "model": "BA-021",
    "brand": "KrishiGears",
    "badges": [
      "Industrial Standard Quality",
      "Commercial Agro Tested",
      "Commercial Grade"
    ],
    "price": 35000,
    "comparePrice": 41300,
    "images": [
      "/images/catalog/leo-ba-021-2486.webp"
    ],
    "specs": {
      "Power": "7 Hp",
      "Engine Type": "Petrol",
      "Grade Type": "Manual",
      "Power Source": "Petrol",
      "Brand": "KrishiGears",
      "Model Name/Number": "BA-021"
    },
    "features": [
      "Genuine KrishiGears branded product",
      "Backed by manufacturer warranty",
      "PAN India delivery from KrishiGears",
      "Genuine spare parts availability",
      "Genuine KrishiGears commercial agricultural machinery",
      "FMTTI-tested commercial durability standard",
      "Precision-engineered transmission case for tough Indian soil",
      "PAN India direct drop-ship dispatch from KrishiGears Express Network",
      "24-48 hour dispatch with genuine replacement spare parts guarantee"
    ],
    "applications": [
      "Cotton",
      "Sugarcane",
      "Wheat",
      "Paddy"
    ],
    "benefits": [
      "Saves significant manual labour",
      "Reduces operating cost over time",
      "FMTTI-tested durability",
      "Cuts inter-cultivation labor cost by up to 70% in Cotton fields",
      "High-torque de-weeding and soil aeration in Black Cotton Soil",
      "Approved for state agricultural mechanization subsidies across Maharashtra and Madhya Pradesh"
    ],
    "warranty": "12 months manufacturer warranty + KrishiGears after-sales service network.",
    "video": "https://www.youtube.com/watch?v=XErTJ11jW2o",
    "hsn": "8432",
    "gst": 12
  },
  {
    "slug": "ri-kpe-1000-17-2343",
    "category": "power-weeders",
    "name": "KrishiGears Model - Kpe- 1000 With Radial Tyre (7 Hp) - Petrol",
    "model": "KPE-1000 170F Gasoline Engine 4 Stroke",
    "brand": "KrishiGears",
    "badges": [
      "Industrial Standard Quality",
      "Commercial Agro Tested",
      "Commercial Grade"
    ],
    "price": 49232,
    "comparePrice": 58094,
    "images": [
      "/images/catalog/ri-kpe-1000-17-2343.webp"
    ],
    "specs": {
      "Power": "7 Hp",
      "Engine Type": "Petrol",
      "Grade Type": "Fully-Automatic",
      "Power Source": "Petrol",
      "Brand": "KrishiGears",
      "Model no": "KPE-1000 170F Gasoline Engine 4 Stroke"
    },
    "features": [
      "Genuine KrishiGears branded product",
      "Backed by manufacturer warranty",
      "PAN India delivery from KrishiGears",
      "Genuine spare parts availability",
      "Genuine KrishiGears commercial agricultural machinery",
      "FMTTI-tested commercial durability standard",
      "Precision-engineered transmission case for tough Indian soil",
      "PAN India direct drop-ship dispatch from KrishiGears Express Network",
      "24-48 hour dispatch with genuine replacement spare parts guarantee"
    ],
    "applications": [
      "Cotton",
      "Sugarcane",
      "Wheat",
      "Paddy"
    ],
    "benefits": [
      "Saves significant manual labour",
      "Reduces operating cost over time",
      "FMTTI-tested durability",
      "Cuts inter-cultivation labor cost by up to 70% in Cotton fields",
      "High-torque de-weeding and soil aeration in Black Cotton Soil",
      "Approved for state agricultural mechanization subsidies across Maharashtra and Madhya Pradesh"
    ],
    "warranty": "12 months manufacturer warranty + KrishiGears after-sales service network.",
    "video": "https://www.youtube.com/watch?v=XErTJ11jW2o",
    "hsn": "8432",
    "gst": 12
  },
  {
    "slug": "ri-no-kpd-1350-2352",
    "category": "power-weeders",
    "name": "KrishiGears Power Weeder 10 Hp Model No Kpd-1350 E - Diesel",
    "model": "No Kpd-1350 E",
    "brand": "KrishiGears",
    "badges": [
      "Industrial Standard Quality",
      "Commercial Agro Tested",
      "Commercial Grade"
    ],
    "price": 80000,
    "comparePrice": 94400,
    "images": [
      "/images/catalog/ri-no-kpd-1350-2352.webp"
    ],
    "specs": {
      "Engine Power": "10 hp",
      "Working Width": "1350 mm",
      "Fuel Type": "Diesel",
      "Grade Type": "Semi-Automatic",
      "Engine Type": "Diesel",
      "Starting System": "Recoil + Self"
    },
    "features": [
      "Genuine KrishiGears branded product",
      "Backed by manufacturer warranty",
      "PAN India delivery from KrishiGears",
      "Genuine spare parts availability",
      "Genuine KrishiGears commercial agricultural machinery",
      "FMTTI-tested commercial durability standard",
      "Precision-engineered transmission case for tough Indian soil",
      "PAN India direct drop-ship dispatch from KrishiGears Express Network",
      "24-48 hour dispatch with genuine replacement spare parts guarantee"
    ],
    "applications": [
      "Cotton",
      "Sugarcane",
      "Wheat",
      "Paddy"
    ],
    "benefits": [
      "Saves significant manual labour",
      "Reduces operating cost over time",
      "FMTTI-tested durability",
      "Cuts inter-cultivation labor cost by up to 70% in Cotton fields",
      "High-torque de-weeding and soil aeration in Black Cotton Soil",
      "Approved for state agricultural mechanization subsidies across Maharashtra and Madhya Pradesh"
    ],
    "warranty": "12 months manufacturer warranty + KrishiGears after-sales service network.",
    "video": "https://www.youtube.com/watch?v=XErTJ11jW2o",
    "hsn": "8432",
    "gst": 12
  },
  {
    "slug": "ri-kpe-1000-2342",
    "category": "power-weeders",
    "name": "KrishiGears Power Weeder Model - Kpe - 1000 (7 Hp) - Diesel",
    "model": "KPE-1000",
    "brand": "KrishiGears",
    "badges": [
      "Industrial Standard Quality",
      "Commercial Agro Tested",
      "Commercial Grade"
    ],
    "price": 43847,
    "comparePrice": 51739,
    "images": [
      "/images/catalog/ri-kpe-1000-2342.webp"
    ],
    "specs": {
      "Power": "7 Hp",
      "Grade Type": "Semi-Automatic",
      "Power Source": "Diesel",
      "Brand": "KrishiGears",
      "Model no": "KPE-1000"
    },
    "features": [
      "Genuine KrishiGears branded product",
      "Backed by manufacturer warranty",
      "PAN India delivery from KrishiGears",
      "Genuine spare parts availability",
      "Genuine KrishiGears commercial agricultural machinery",
      "FMTTI-tested commercial durability standard",
      "Precision-engineered transmission case for tough Indian soil",
      "PAN India direct drop-ship dispatch from KrishiGears Express Network",
      "24-48 hour dispatch with genuine replacement spare parts guarantee"
    ],
    "applications": [
      "Cotton",
      "Sugarcane",
      "Wheat",
      "Paddy"
    ],
    "benefits": [
      "Saves significant manual labour",
      "Reduces operating cost over time",
      "FMTTI-tested durability",
      "Cuts inter-cultivation labor cost by up to 70% in Cotton fields",
      "High-torque de-weeding and soil aeration in Black Cotton Soil",
      "Approved for state agricultural mechanization subsidies across Maharashtra and Madhya Pradesh"
    ],
    "warranty": "12 months manufacturer warranty + KrishiGears after-sales service network.",
    "video": "https://www.youtube.com/watch?v=XErTJ11jW2o",
    "hsn": "8432",
    "gst": 12
  },
  {
    "slug": "ri-kp-750-2344",
    "category": "power-weeders",
    "name": "KrishiGears Power Weeder Model Kp-750 (5 Hp) - Petrol",
    "model": "KP-750",
    "brand": "KrishiGears",
    "badges": [
      "Industrial Standard Quality",
      "Commercial Agro Tested",
      "Commercial Grade"
    ],
    "price": 32307,
    "comparePrice": 38122,
    "images": [
      "/images/catalog/ri-kp-750-2344.webp"
    ],
    "specs": {
      "Power": "5 Hp",
      "Engine Type": "Petrol",
      "Grade Type": "Manual",
      "Power Source": "Petrol",
      "Brand": "KrishiGears",
      "Model no": "KP-750"
    },
    "features": [
      "Genuine KrishiGears branded product",
      "Backed by manufacturer warranty",
      "PAN India delivery from KrishiGears",
      "Genuine spare parts availability",
      "Genuine KrishiGears commercial agricultural machinery",
      "FMTTI-tested commercial durability standard",
      "Precision-engineered transmission case for tough Indian soil",
      "PAN India direct drop-ship dispatch from KrishiGears Express Network",
      "24-48 hour dispatch with genuine replacement spare parts guarantee"
    ],
    "applications": [
      "Cotton",
      "Sugarcane",
      "Wheat",
      "Paddy"
    ],
    "benefits": [
      "Saves significant manual labour",
      "Reduces operating cost over time",
      "FMTTI-tested durability",
      "Cuts inter-cultivation labor cost by up to 70% in Cotton fields",
      "High-torque de-weeding and soil aeration in Black Cotton Soil",
      "Approved for state agricultural mechanization subsidies across Maharashtra and Madhya Pradesh"
    ],
    "warranty": "12 months manufacturer warranty + KrishiGears after-sales service network.",
    "video": "https://www.youtube.com/watch?v=XErTJ11jW2o",
    "hsn": "8432",
    "gst": 12
  },
  {
    "slug": "ri-kpd-1000-2347",
    "category": "power-weeders",
    "name": "KrishiGears Power Weeder Model Kpd - 1000 (7 Hp) - Diesel",
    "model": "KPD-1000",
    "brand": "KrishiGears",
    "badges": [
      "Industrial Standard Quality",
      "Commercial Agro Tested",
      "Commercial Grade"
    ],
    "price": 52307,
    "comparePrice": 61722,
    "images": [
      "/images/catalog/ri-kpd-1000-2347.webp"
    ],
    "specs": {
      "Power": "7 Hp",
      "Engine Type": "Diesel",
      "Grade Type": "Manual",
      "Power Source": "Diesel",
      "Brand": "KrishiGears",
      "Model no": "KPD-1000"
    },
    "features": [
      "Genuine KrishiGears branded product",
      "Backed by manufacturer warranty",
      "PAN India delivery from KrishiGears",
      "Genuine spare parts availability",
      "Genuine KrishiGears commercial agricultural machinery",
      "FMTTI-tested commercial durability standard",
      "Precision-engineered transmission case for tough Indian soil",
      "PAN India direct drop-ship dispatch from KrishiGears Express Network",
      "24-48 hour dispatch with genuine replacement spare parts guarantee"
    ],
    "applications": [
      "Cotton",
      "Sugarcane",
      "Wheat",
      "Paddy"
    ],
    "benefits": [
      "Saves significant manual labour",
      "Reduces operating cost over time",
      "FMTTI-tested durability",
      "Cuts inter-cultivation labor cost by up to 70% in Cotton fields",
      "High-torque de-weeding and soil aeration in Black Cotton Soil",
      "Approved for state agricultural mechanization subsidies across Maharashtra and Madhya Pradesh"
    ],
    "warranty": "12 months manufacturer warranty + KrishiGears after-sales service network.",
    "video": "https://www.youtube.com/watch?v=XErTJ11jW2o",
    "hsn": "8432",
    "gst": 12
  },
  {
    "slug": "ri-kpde-1000-2348",
    "category": "power-weeders",
    "name": "KrishiGears Power Weeder Model Kpde - 1000 (7 Hp) - Diesel",
    "model": "KPDE-1000",
    "brand": "KrishiGears",
    "badges": [
      "Industrial Standard Quality",
      "Commercial Agro Tested",
      "Commercial Grade"
    ],
    "price": 66154,
    "comparePrice": 78062,
    "images": [
      "/images/catalog/ri-kpde-1000-2348.webp"
    ],
    "specs": {
      "Power": "7 Hp",
      "Engine Type": "Diesel",
      "Grade Type": "Semi-Automatic",
      "Power Source": "Battery",
      "Brand": "KrishiGears",
      "Model no": "KPDE-1000"
    },
    "features": [
      "Genuine KrishiGears branded product",
      "Backed by manufacturer warranty",
      "PAN India delivery from KrishiGears",
      "Genuine spare parts availability",
      "Genuine KrishiGears commercial agricultural machinery",
      "FMTTI-tested commercial durability standard",
      "Precision-engineered transmission case for tough Indian soil",
      "PAN India direct drop-ship dispatch from KrishiGears Express Network",
      "24-48 hour dispatch with genuine replacement spare parts guarantee"
    ],
    "applications": [
      "Cotton",
      "Sugarcane",
      "Wheat",
      "Paddy"
    ],
    "benefits": [
      "Saves significant manual labour",
      "Reduces operating cost over time",
      "FMTTI-tested durability",
      "Cuts inter-cultivation labor cost by up to 70% in Cotton fields",
      "High-torque de-weeding and soil aeration in Black Cotton Soil",
      "Approved for state agricultural mechanization subsidies across Maharashtra and Madhya Pradesh"
    ],
    "warranty": "12 months manufacturer warranty + KrishiGears after-sales service network.",
    "video": "https://www.youtube.com/watch?v=XErTJ11jW2o",
    "hsn": "8432",
    "gst": 12
  },
  {
    "slug": "ri-kpd-1350-2349",
    "category": "power-weeders",
    "name": "KrishiGears Power Weeder Model Kpd- 1350 (10 hp) - Diesel",
    "model": "Kpd- 1350",
    "brand": "KrishiGears",
    "badges": [
      "Industrial Standard Quality",
      "Commercial Agro Tested",
      "Commercial Grade"
    ],
    "price": 71000,
    "comparePrice": 83780,
    "images": [
      "/images/catalog/ri-kpd-1350-2349.webp"
    ],
    "specs": {
      "Engine Power": "10 hp",
      "Working Width": "1350 mm",
      "Fuel Type": "Diesel",
      "Grade Type": "Manual",
      "Engine Type": "Diesel",
      "Starting System": "Recoil Start"
    },
    "features": [
      "Genuine KrishiGears branded product",
      "Backed by manufacturer warranty",
      "PAN India delivery from KrishiGears",
      "Genuine spare parts availability",
      "Genuine KrishiGears commercial agricultural machinery",
      "FMTTI-tested commercial durability standard",
      "Precision-engineered transmission case for tough Indian soil",
      "PAN India direct drop-ship dispatch from KrishiGears Express Network",
      "24-48 hour dispatch with genuine replacement spare parts guarantee"
    ],
    "applications": [
      "Cotton",
      "Sugarcane",
      "Wheat",
      "Paddy"
    ],
    "benefits": [
      "Saves significant manual labour",
      "Reduces operating cost over time",
      "FMTTI-tested durability",
      "Cuts inter-cultivation labor cost by up to 70% in Cotton fields",
      "High-torque de-weeding and soil aeration in Black Cotton Soil",
      "Approved for state agricultural mechanization subsidies across Maharashtra and Madhya Pradesh"
    ],
    "warranty": "12 months manufacturer warranty + KrishiGears after-sales service network.",
    "video": "https://www.youtube.com/watch?v=XErTJ11jW2o",
    "hsn": "8432",
    "gst": 12
  },
  {
    "slug": "ri-kp-1050-ae-2350",
    "category": "power-weeders",
    "name": "KrishiGears Power Weeder 7hp Model Kp-1050 AE (9 Hp) - Petrol",
    "model": "KP-1050 AE",
    "brand": "KrishiGears",
    "badges": [
      "Industrial Standard Quality",
      "Commercial Agro Tested",
      "Commercial Grade"
    ],
    "price": 66154,
    "comparePrice": 78062,
    "images": [
      "/images/catalog/ri-kp-1050-ae-2350.webp"
    ],
    "specs": {
      "Engine Type": "Petrol",
      "Grade Type": "Manual",
      "Power Source": "Battery",
      "Brand": "KrishiGears",
      "Model no": "KP-1050 AE",
      "Power": "9 Hp"
    },
    "features": [
      "Genuine KrishiGears branded product",
      "Backed by manufacturer warranty",
      "PAN India delivery from KrishiGears",
      "Genuine spare parts availability",
      "Genuine KrishiGears commercial agricultural machinery",
      "FMTTI-tested commercial durability standard",
      "Precision-engineered transmission case for tough Indian soil",
      "PAN India direct drop-ship dispatch from KrishiGears Express Network",
      "24-48 hour dispatch with genuine replacement spare parts guarantee"
    ],
    "applications": [
      "Cotton",
      "Sugarcane",
      "Wheat",
      "Paddy"
    ],
    "benefits": [
      "Saves significant manual labour",
      "Reduces operating cost over time",
      "FMTTI-tested durability",
      "Cuts inter-cultivation labor cost by up to 70% in Cotton fields",
      "High-torque de-weeding and soil aeration in Black Cotton Soil",
      "Approved for state agricultural mechanization subsidies across Maharashtra and Madhya Pradesh"
    ],
    "warranty": "12 months manufacturer warranty + KrishiGears after-sales service network.",
    "video": "https://www.youtube.com/watch?v=XErTJ11jW2o",
    "hsn": "8432",
    "gst": 12
  },
  {
    "slug": "ri-kpe-1050-a-2351",
    "category": "power-weeders",
    "name": "KrishiGears Power Weeder 10hp Model No Kpe-1050 A (10 Hp) - Diesel",
    "model": "KPE-1050 A",
    "brand": "KrishiGears",
    "badges": [
      "Industrial Standard Quality",
      "Commercial Agro Tested",
      "Commercial Grade"
    ],
    "price": 55385,
    "comparePrice": 65354,
    "images": [
      "/images/catalog/ri-kpe-1050-a-2351.webp"
    ],
    "specs": {
      "Power": "10 Hp",
      "Grade Type": "Manual",
      "Power Source": "Diesel",
      "Brand": "KrishiGears",
      "Model no": "KPE-1050 A"
    },
    "features": [
      "Genuine KrishiGears branded product",
      "Backed by manufacturer warranty",
      "PAN India delivery from KrishiGears",
      "Genuine spare parts availability",
      "Genuine KrishiGears commercial agricultural machinery",
      "FMTTI-tested commercial durability standard",
      "Precision-engineered transmission case for tough Indian soil",
      "PAN India direct drop-ship dispatch from KrishiGears Express Network",
      "24-48 hour dispatch with genuine replacement spare parts guarantee"
    ],
    "applications": [
      "Cotton",
      "Sugarcane",
      "Wheat",
      "Paddy"
    ],
    "benefits": [
      "Saves significant manual labour",
      "Reduces operating cost over time",
      "FMTTI-tested durability",
      "Cuts inter-cultivation labor cost by up to 70% in Cotton fields",
      "High-torque de-weeding and soil aeration in Black Cotton Soil",
      "Approved for state agricultural mechanization subsidies across Maharashtra and Madhya Pradesh"
    ],
    "warranty": "12 months manufacturer warranty + KrishiGears after-sales service network.",
    "video": "https://www.youtube.com/watch?v=XErTJ11jW2o",
    "hsn": "8432",
    "gst": 12
  },
  {
    "slug": "ri-sc-820-6698",
    "category": "power-weeders",
    "name": "KrishiGears Power Weeder 7 Hp Sc -820 - Petrol",
    "model": "SC -820",
    "brand": "KrishiGears",
    "badges": [
      "Industrial Standard Quality",
      "Commercial Agro Tested",
      "Commercial Grade"
    ],
    "price": 34616,
    "comparePrice": 40847,
    "images": [
      "/images/catalog/ri-sc-820-6698.webp"
    ],
    "specs": {
      "Power": "7 Hp",
      "Engine Type": "Petrol",
      "Grade Type": "Manual",
      "Brand": "KrishiGears",
      "Model": "SC -820"
    },
    "features": [
      "Genuine KrishiGears branded product",
      "Backed by manufacturer warranty",
      "PAN India delivery from KrishiGears",
      "Genuine spare parts availability",
      "Genuine KrishiGears commercial agricultural machinery",
      "FMTTI-tested commercial durability standard",
      "Precision-engineered transmission case for tough Indian soil",
      "PAN India direct drop-ship dispatch from KrishiGears Express Network",
      "24-48 hour dispatch with genuine replacement spare parts guarantee"
    ],
    "applications": [
      "Cotton",
      "Sugarcane",
      "Wheat",
      "Paddy"
    ],
    "benefits": [
      "Saves significant manual labour",
      "Reduces operating cost over time",
      "FMTTI-tested durability",
      "Cuts inter-cultivation labor cost by up to 70% in Cotton fields",
      "High-torque de-weeding and soil aeration in Black Cotton Soil",
      "Approved for state agricultural mechanization subsidies across Maharashtra and Madhya Pradesh"
    ],
    "warranty": "12 months manufacturer warranty + KrishiGears after-sales service network.",
    "video": "https://www.youtube.com/watch?v=XErTJ11jW2o",
    "hsn": "8432",
    "gst": 12
  },
  {
    "slug": "ri-sc-55-6691",
    "category": "power-weeders",
    "name": "KrishiGears Power Weeder Model Sc - 55 (7 Hp) - Petrol",
    "model": "SC -55",
    "brand": "KrishiGears",
    "badges": [
      "Industrial Standard Quality",
      "Commercial Agro Tested",
      "Commercial Grade"
    ],
    "price": 30000,
    "comparePrice": 35400,
    "images": [
      "/images/catalog/ri-sc-55-6691.webp"
    ],
    "specs": {
      "Power": "7 Hp",
      "Engine Type": "Petrol",
      "Grade Type": "Manual",
      "Power Source": "Petrol",
      "Brand": "KrishiGears",
      "MODEL": "SC -55"
    },
    "features": [
      "Genuine KrishiGears branded product",
      "Backed by manufacturer warranty",
      "PAN India delivery from KrishiGears",
      "Genuine spare parts availability",
      "Genuine KrishiGears commercial agricultural machinery",
      "FMTTI-tested commercial durability standard",
      "Precision-engineered transmission case for tough Indian soil",
      "PAN India direct drop-ship dispatch from KrishiGears Express Network",
      "24-48 hour dispatch with genuine replacement spare parts guarantee"
    ],
    "applications": [
      "Cotton",
      "Sugarcane",
      "Wheat",
      "Paddy"
    ],
    "benefits": [
      "Saves significant manual labour",
      "Reduces operating cost over time",
      "FMTTI-tested durability",
      "Cuts inter-cultivation labor cost by up to 70% in Cotton fields",
      "High-torque de-weeding and soil aeration in Black Cotton Soil",
      "Approved for state agricultural mechanization subsidies across Maharashtra and Madhya Pradesh"
    ],
    "warranty": "12 months manufacturer warranty + KrishiGears after-sales service network.",
    "video": "https://www.youtube.com/watch?v=XErTJ11jW2o",
    "hsn": "8432",
    "gst": 12
  },
  {
    "slug": "ri-model-no-kp-2341",
    "category": "power-weeders",
    "name": "KrishiGears Power Weeder Model - Kp - 1000 (7 Hp) - Petrol",
    "model": "Model No KP-1000",
    "brand": "KrishiGears",
    "badges": [
      "Industrial Standard Quality",
      "Commercial Agro Tested",
      "Commercial Grade"
    ],
    "price": 35000,
    "comparePrice": 41300,
    "images": [
      "/images/catalog/ri-model-no-kp-2341.webp"
    ],
    "specs": {
      "Power": "7 Hp",
      "Engine Type": "Petrol",
      "Grade Type": "Semi-Automatic",
      "Power Source": "Petrol",
      "Brand": "KrishiGears",
      "Model": "Model No KP-1000"
    },
    "features": [
      "Genuine KrishiGears branded product",
      "Backed by manufacturer warranty",
      "PAN India delivery from KrishiGears",
      "Genuine spare parts availability",
      "Genuine KrishiGears commercial agricultural machinery",
      "FMTTI-tested commercial durability standard",
      "Precision-engineered transmission case for tough Indian soil",
      "PAN India direct drop-ship dispatch from KrishiGears Express Network",
      "24-48 hour dispatch with genuine replacement spare parts guarantee"
    ],
    "applications": [
      "Cotton",
      "Sugarcane",
      "Wheat",
      "Paddy"
    ],
    "benefits": [
      "Saves significant manual labour",
      "Reduces operating cost over time",
      "FMTTI-tested durability",
      "Cuts inter-cultivation labor cost by up to 70% in Cotton fields",
      "High-torque de-weeding and soil aeration in Black Cotton Soil",
      "Approved for state agricultural mechanization subsidies across Maharashtra and Madhya Pradesh"
    ],
    "warranty": "12 months manufacturer warranty + KrishiGears after-sales service network.",
    "video": "https://www.youtube.com/watch?v=XErTJ11jW2o",
    "hsn": "8432",
    "gst": 12
  },
  {
    "slug": "ri-sc-1150-6699",
    "category": "power-weeders",
    "name": "KrishiGears Power Weeder Model Sc - 1150 (9 Hp) - Petrol",
    "model": "SC -1150",
    "brand": "KrishiGears",
    "badges": [
      "Industrial Standard Quality",
      "Commercial Agro Tested",
      "Commercial Grade"
    ],
    "price": 40000,
    "comparePrice": 47200,
    "images": [
      "/images/catalog/ri-sc-1150-6699.webp"
    ],
    "specs": {
      "Power": "9 Hp",
      "Engine Type": "Petrol",
      "Grade Type": "Manual",
      "Power Source": "Petrol",
      "Brand": "KrishiGears",
      "Model": "SC -1150"
    },
    "features": [
      "Genuine KrishiGears branded product",
      "Backed by manufacturer warranty",
      "PAN India delivery from KrishiGears",
      "Genuine spare parts availability",
      "Genuine KrishiGears commercial agricultural machinery",
      "FMTTI-tested commercial durability standard",
      "Precision-engineered transmission case for tough Indian soil",
      "PAN India direct drop-ship dispatch from KrishiGears Express Network",
      "24-48 hour dispatch with genuine replacement spare parts guarantee"
    ],
    "applications": [
      "Cotton",
      "Sugarcane",
      "Wheat",
      "Paddy"
    ],
    "benefits": [
      "Saves significant manual labour",
      "Reduces operating cost over time",
      "FMTTI-tested durability",
      "Cuts inter-cultivation labor cost by up to 70% in Cotton fields",
      "High-torque de-weeding and soil aeration in Black Cotton Soil",
      "Approved for state agricultural mechanization subsidies across Maharashtra and Madhya Pradesh"
    ],
    "warranty": "12 months manufacturer warranty + KrishiGears after-sales service network.",
    "video": "https://www.youtube.com/watch?v=XErTJ11jW2o",
    "hsn": "8432",
    "gst": 12
  },
  {
    "slug": "ri-kpd-1350-e-2356",
    "category": "power-weeders",
    "name": "KrishiGears Power Weeder Model KPD- 1350-E (6 Hp) - OHV 4-Stroke",
    "model": "KPD- 1350-E",
    "brand": "KrishiGears",
    "badges": [
      "Industrial Standard Quality",
      "Commercial Agro Tested",
      "Commercial Grade"
    ],
    "price": 44000,
    "comparePrice": 51920,
    "images": [
      "/images/catalog/ri-kpd-1350-e-2356.webp"
    ],
    "specs": {
      "Power": "6 Hp",
      "Grade Type": "Semi-Automatic",
      "Engine Type": "OHV 4-Stroke",
      "Usage/Application": "Agriculture",
      "Tilling Width": "60 cm",
      "Fuel Tank Capacity": "3.6 L"
    },
    "features": [
      "Genuine KrishiGears branded product",
      "Backed by manufacturer warranty",
      "PAN India delivery from KrishiGears",
      "Genuine spare parts availability",
      "Genuine KrishiGears commercial agricultural machinery",
      "FMTTI-tested commercial durability standard",
      "Precision-engineered transmission case for tough Indian soil",
      "PAN India direct drop-ship dispatch from KrishiGears Express Network",
      "24-48 hour dispatch with genuine replacement spare parts guarantee"
    ],
    "applications": [
      "Cotton",
      "Sugarcane",
      "Wheat",
      "Paddy"
    ],
    "benefits": [
      "Saves significant manual labour",
      "Reduces operating cost over time",
      "FMTTI-tested durability",
      "Cuts inter-cultivation labor cost by up to 70% in Cotton fields",
      "High-torque de-weeding and soil aeration in Black Cotton Soil",
      "Approved for state agricultural mechanization subsidies across Maharashtra and Madhya Pradesh"
    ],
    "warranty": "12 months manufacturer warranty + KrishiGears after-sales service network.",
    "video": "https://www.youtube.com/watch?v=XErTJ11jW2o",
    "hsn": "8432",
    "gst": 12
  },
  {
    "slug": "ri-sc-1000-d-4542",
    "category": "power-weeders",
    "name": "KrishiGears Power Weeder Model Sc - 1000-D (12 HP) - 4 Stroke",
    "model": "Sc - 1000-D",
    "brand": "KrishiGears",
    "badges": [
      "Industrial Standard Quality",
      "Commercial Agro Tested",
      "Commercial Grade"
    ],
    "price": 141538,
    "comparePrice": 167015,
    "images": [
      "/images/catalog/ri-sc-1000-d-4542.webp"
    ],
    "specs": {
      "Engine Power": "12 HP",
      "Fuel": "Diesel",
      "Working Width": "4 feet",
      "Fuel Type": "Diesel",
      "Engine Type": "4 Stroke",
      "Grade Type": "Semi-Automatic"
    },
    "features": [
      "Genuine KrishiGears branded product",
      "Backed by manufacturer warranty",
      "PAN India delivery from KrishiGears",
      "Genuine spare parts availability",
      "Genuine KrishiGears commercial agricultural machinery",
      "FMTTI-tested commercial durability standard",
      "Precision-engineered transmission case for tough Indian soil",
      "PAN India direct drop-ship dispatch from KrishiGears Express Network",
      "24-48 hour dispatch with genuine replacement spare parts guarantee"
    ],
    "applications": [
      "Cotton",
      "Sugarcane",
      "Wheat",
      "Paddy"
    ],
    "benefits": [
      "Saves significant manual labour",
      "Reduces operating cost over time",
      "FMTTI-tested durability",
      "Cuts inter-cultivation labor cost by up to 70% in Cotton fields",
      "High-torque de-weeding and soil aeration in Black Cotton Soil",
      "Approved for state agricultural mechanization subsidies across Maharashtra and Madhya Pradesh"
    ],
    "warranty": "12 months manufacturer warranty + KrishiGears after-sales service network.",
    "video": "https://www.youtube.com/watch?v=XErTJ11jW2o",
    "hsn": "8432",
    "gst": 12
  },
  {
    "slug": "ri-kp-1050-a-e-5777",
    "category": "power-weeders",
    "name": "KrishiGears Power Weeder Model KP- 1050 A E (9 Hp) - Petrol",
    "model": "KP- 1050 A E",
    "brand": "KrishiGears",
    "badges": [
      "Industrial Standard Quality",
      "Commercial Agro Tested",
      "Commercial Grade"
    ],
    "price": 30000,
    "comparePrice": 35400,
    "images": [
      "/images/catalog/ri-kp-1050-a-e-5777.webp"
    ],
    "specs": {
      "Power": "9 Hp",
      "Material": "Metal",
      "Engine Type": "Petrol",
      "Grade Type": "Fully-Automatic",
      "Usage/Application": "Office",
      "Color": "RED"
    },
    "features": [
      "Genuine KrishiGears branded product",
      "Backed by manufacturer warranty",
      "PAN India delivery from KrishiGears",
      "Genuine spare parts availability",
      "Genuine KrishiGears commercial agricultural machinery",
      "FMTTI-tested commercial durability standard",
      "Precision-engineered transmission case for tough Indian soil",
      "PAN India direct drop-ship dispatch from KrishiGears Express Network",
      "24-48 hour dispatch with genuine replacement spare parts guarantee"
    ],
    "applications": [
      "Cotton",
      "Sugarcane",
      "Wheat",
      "Paddy"
    ],
    "benefits": [
      "Saves significant manual labour",
      "Reduces operating cost over time",
      "FMTTI-tested durability",
      "Cuts inter-cultivation labor cost by up to 70% in Cotton fields",
      "High-torque de-weeding and soil aeration in Black Cotton Soil",
      "Approved for state agricultural mechanization subsidies across Maharashtra and Madhya Pradesh"
    ],
    "warranty": "12 months manufacturer warranty + KrishiGears after-sales service network.",
    "video": "https://www.youtube.com/watch?v=XErTJ11jW2o",
    "hsn": "8432",
    "gst": 12
  },
  {
    "slug": "ri-kp-500-2346",
    "category": "power-weeders",
    "name": "KrishiGears Power Weeder Model Kp- 500 (5 Hp) - Petrol",
    "model": "KP-500",
    "brand": "KrishiGears",
    "badges": [
      "Industrial Standard Quality",
      "Commercial Agro Tested",
      "Commercial Grade"
    ],
    "price": 52307,
    "comparePrice": 61722,
    "images": [
      "/images/catalog/ri-kp-500-2346.webp"
    ],
    "specs": {
      "Power": "5 Hp",
      "Engine Type": "Petrol",
      "Grade Type": "Manual",
      "Power Source": "Petrol",
      "Brand": "KrishiGears",
      "Model no": "KP-500"
    },
    "features": [
      "Genuine KrishiGears branded product",
      "Backed by manufacturer warranty",
      "PAN India delivery from KrishiGears",
      "Genuine spare parts availability",
      "Genuine KrishiGears commercial agricultural machinery",
      "FMTTI-tested commercial durability standard",
      "Precision-engineered transmission case for tough Indian soil",
      "PAN India direct drop-ship dispatch from KrishiGears Express Network",
      "24-48 hour dispatch with genuine replacement spare parts guarantee"
    ],
    "applications": [
      "Cotton",
      "Sugarcane",
      "Wheat",
      "Paddy"
    ],
    "benefits": [
      "Saves significant manual labour",
      "Reduces operating cost over time",
      "FMTTI-tested durability",
      "Cuts inter-cultivation labor cost by up to 70% in Cotton fields",
      "High-torque de-weeding and soil aeration in Black Cotton Soil",
      "Approved for state agricultural mechanization subsidies across Maharashtra and Madhya Pradesh"
    ],
    "warranty": "12 months manufacturer warranty + KrishiGears after-sales service network.",
    "video": "https://www.youtube.com/watch?v=XErTJ11jW2o",
    "hsn": "8432",
    "gst": 12
  },
  {
    "slug": "ri-sc-800-6692",
    "category": "power-weeders",
    "name": "KrishiGears Power Weeder Model - Sc- 800 (7 Hp) - Petrol",
    "model": "SC -800",
    "brand": "KrishiGears",
    "badges": [
      "Industrial Standard Quality",
      "Commercial Agro Tested",
      "Commercial Grade"
    ],
    "price": 29231,
    "comparePrice": 34493,
    "images": [
      "/images/catalog/ri-sc-800-6692.webp"
    ],
    "specs": {
      "Power": "7 Hp",
      "Engine Type": "Petrol",
      "Grade Type": "Manual",
      "Power Source": "Petrol",
      "Brand": "KrishiGears",
      "Model": "SC -800"
    },
    "features": [
      "Genuine KrishiGears branded product",
      "Backed by manufacturer warranty",
      "PAN India delivery from KrishiGears",
      "Genuine spare parts availability",
      "Genuine KrishiGears commercial agricultural machinery",
      "FMTTI-tested commercial durability standard",
      "Precision-engineered transmission case for tough Indian soil",
      "PAN India direct drop-ship dispatch from KrishiGears Express Network",
      "24-48 hour dispatch with genuine replacement spare parts guarantee"
    ],
    "applications": [
      "Cotton",
      "Sugarcane",
      "Wheat",
      "Paddy"
    ],
    "benefits": [
      "Saves significant manual labour",
      "Reduces operating cost over time",
      "FMTTI-tested durability",
      "Cuts inter-cultivation labor cost by up to 70% in Cotton fields",
      "High-torque de-weeding and soil aeration in Black Cotton Soil",
      "Approved for state agricultural mechanization subsidies across Maharashtra and Madhya Pradesh"
    ],
    "warranty": "12 months manufacturer warranty + KrishiGears after-sales service network.",
    "video": "https://www.youtube.com/watch?v=XErTJ11jW2o",
    "hsn": "8432",
    "gst": 12
  },
  {
    "slug": "ri-fj-1200-0927",
    "category": "power-weeders",
    "name": "KrishiGears Power Weeder Model Fj -1200",
    "model": "Fj -1200",
    "brand": "KrishiGears",
    "badges": [
      "Industrial Standard Quality",
      "Commercial Agro Tested",
      "Commercial Grade"
    ],
    "price": 150000,
    "comparePrice": 177000,
    "images": [
      "/images/catalog/ri-fj-1200-0927.webp"
    ],
    "specs": {
      "Fuel Tank Capacity": "1 L",
      "Fuel": "Petrol",
      "Usage/Application": "Agriculture",
      "Net Power Output": "9 hp / 6.3kW, 3600 RPM",
      "Fuel Consumption": "2.4 L per hour, 3600 RPM",
      "Wheels": "4.00 x 8 Agricultural"
    },
    "features": [
      "Genuine KrishiGears branded product",
      "Backed by manufacturer warranty",
      "PAN India delivery from KrishiGears",
      "Genuine spare parts availability",
      "Genuine KrishiGears commercial agricultural machinery",
      "FMTTI-tested commercial durability standard",
      "Precision-engineered transmission case for tough Indian soil",
      "PAN India direct drop-ship dispatch from KrishiGears Express Network",
      "24-48 hour dispatch with genuine replacement spare parts guarantee"
    ],
    "applications": [
      "Cotton",
      "Sugarcane",
      "Wheat",
      "Paddy"
    ],
    "benefits": [
      "Saves significant manual labour",
      "Reduces operating cost over time",
      "FMTTI-tested durability",
      "Cuts inter-cultivation labor cost by up to 70% in Cotton fields",
      "High-torque de-weeding and soil aeration in Black Cotton Soil",
      "Approved for state agricultural mechanization subsidies across Maharashtra and Madhya Pradesh"
    ],
    "warranty": "12 months manufacturer warranty + KrishiGears after-sales service network.",
    "video": "https://www.youtube.com/watch?v=XErTJ11jW2o",
    "hsn": "8432",
    "gst": 12
  },
  {
    "slug": "ri-fj-600-ho-2081",
    "category": "power-weeders",
    "name": "KrishiGears Power Weeder Model Fj - 600 Honda Powered (7 Hp)",
    "model": "Fj - 600 Honda Powered",
    "brand": "KrishiGears",
    "badges": [
      "Industrial Standard Quality",
      "Commercial Agro Tested",
      "Commercial Grade"
    ],
    "price": 61539,
    "comparePrice": 72616,
    "images": [
      "/images/catalog/ri-fj-600-ho-2081.webp"
    ],
    "specs": {
      "Power": "7 Hp",
      "Brand": "KrishiGears"
    },
    "features": [
      "Genuine KrishiGears branded product",
      "Backed by manufacturer warranty",
      "PAN India delivery from KrishiGears",
      "Genuine spare parts availability",
      "Genuine KrishiGears commercial agricultural machinery",
      "FMTTI-tested commercial durability standard",
      "Precision-engineered transmission case for tough Indian soil",
      "PAN India direct drop-ship dispatch from KrishiGears Express Network",
      "24-48 hour dispatch with genuine replacement spare parts guarantee"
    ],
    "applications": [
      "Cotton",
      "Sugarcane",
      "Wheat",
      "Paddy"
    ],
    "benefits": [
      "Saves significant manual labour",
      "Reduces operating cost over time",
      "FMTTI-tested durability",
      "Cuts inter-cultivation labor cost by up to 70% in Cotton fields",
      "High-torque de-weeding and soil aeration in Black Cotton Soil",
      "Approved for state agricultural mechanization subsidies across Maharashtra and Madhya Pradesh"
    ],
    "warranty": "12 months manufacturer warranty + KrishiGears after-sales service network.",
    "video": "https://www.youtube.com/watch?v=XErTJ11jW2o",
    "hsn": "8432",
    "gst": 12
  },
  {
    "slug": "ri-254022073-2073",
    "category": "power-weeders",
    "name": "KrishiGears Power Tiller Sc -90 7hp - 4 Stroke",
    "model": "254022073",
    "brand": "KrishiGears",
    "badges": [
      "Industrial Standard Quality",
      "Commercial Agro Tested",
      "Commercial Grade"
    ],
    "price": 30000,
    "comparePrice": 35400,
    "images": [
      "/images/catalog/ri-254022073-2073.webp"
    ],
    "specs": {
      "Fuel Type": "Petrol, Petrol",
      "Engine Type": "4 Stroke",
      "Starting System": "Manual",
      "No of Gears": "2 + 2 forward",
      "Number of Tynes": "6 tynes",
      "Displacement": "208 CC"
    },
    "features": [
      "Genuine KrishiGears branded product",
      "Backed by manufacturer warranty",
      "PAN India delivery from KrishiGears",
      "Genuine spare parts availability",
      "Genuine KrishiGears commercial agricultural machinery",
      "FMTTI-tested commercial durability standard",
      "Precision-engineered transmission case for tough Indian soil",
      "PAN India direct drop-ship dispatch from KrishiGears Express Network",
      "24-48 hour dispatch with genuine replacement spare parts guarantee"
    ],
    "applications": [
      "Cotton",
      "Sugarcane",
      "Wheat",
      "Paddy"
    ],
    "benefits": [
      "Saves significant manual labour",
      "Reduces operating cost over time",
      "FMTTI-tested durability",
      "Cuts inter-cultivation labor cost by up to 70% in Cotton fields",
      "High-torque de-weeding and soil aeration in Black Cotton Soil",
      "Approved for state agricultural mechanization subsidies across Maharashtra and Madhya Pradesh"
    ],
    "warranty": "12 months manufacturer warranty + KrishiGears after-sales service network.",
    "video": "https://www.youtube.com/watch?v=Dk8QFoE-h2k",
    "hsn": "8432",
    "gst": 12
  },
  {
    "slug": "ri-gx-160-2719",
    "category": "power-weeders",
    "name": "KrishiGears Power Weeder 7 Hp Model Gx-160 - 4 Stroke",
    "model": "Gx-160",
    "brand": "KrishiGears",
    "badges": [
      "Industrial Standard Quality",
      "Commercial Agro Tested",
      "Commercial Grade"
    ],
    "price": 38000,
    "comparePrice": 44840,
    "images": [
      "/images/catalog/ri-gx-160-2719.webp"
    ],
    "specs": {
      "Engine Power": "7 HP",
      "Fuel": "Petrol",
      "Fuel Type": "Petrol",
      "Working Width": "7 feet",
      "Engine Type": "4 Stroke",
      "Fuel Tank Capacity": "3 Litre"
    },
    "features": [
      "Genuine KrishiGears branded product",
      "Backed by manufacturer warranty",
      "PAN India delivery from KrishiGears",
      "Genuine spare parts availability",
      "Genuine KrishiGears commercial agricultural machinery",
      "FMTTI-tested commercial durability standard",
      "Precision-engineered transmission case for tough Indian soil",
      "PAN India direct drop-ship dispatch from KrishiGears Express Network",
      "24-48 hour dispatch with genuine replacement spare parts guarantee"
    ],
    "applications": [
      "Cotton",
      "Sugarcane",
      "Wheat",
      "Paddy"
    ],
    "benefits": [
      "Saves significant manual labour",
      "Reduces operating cost over time",
      "FMTTI-tested durability",
      "Cuts inter-cultivation labor cost by up to 70% in Cotton fields",
      "High-torque de-weeding and soil aeration in Black Cotton Soil",
      "Approved for state agricultural mechanization subsidies across Maharashtra and Madhya Pradesh"
    ],
    "warranty": "12 months manufacturer warranty + KrishiGears after-sales service network.",
    "video": "https://www.youtube.com/watch?v=XErTJ11jW2o",
    "hsn": "8432",
    "gst": 12
  },
  {
    "slug": "ri-sc-1000-8480",
    "category": "power-weeders",
    "name": "KrishiGears Power Weeder Model - Sc-1000 (7 HP) - 4 Stroke OHV Petrol Engine",
    "model": "Sc-1000",
    "brand": "KrishiGears",
    "badges": [
      "Industrial Standard Quality",
      "Commercial Agro Tested",
      "Commercial Grade"
    ],
    "price": 33000,
    "comparePrice": 38940,
    "images": [
      "/images/catalog/ri-sc-1000-8480.webp"
    ],
    "specs": {
      "Engine Power": "7 HP",
      "Fuel": "Petrol",
      "Fuel Type": "Petrol",
      "Working Width": "4 feet",
      "Engine Type": "4 Stroke OHV Petrol Engine",
      "Fuel Tank Capacity": "3.5 Litre"
    },
    "features": [
      "Genuine KrishiGears branded product",
      "Backed by manufacturer warranty",
      "PAN India delivery from KrishiGears",
      "Genuine spare parts availability",
      "Genuine KrishiGears commercial agricultural machinery",
      "FMTTI-tested commercial durability standard",
      "Precision-engineered transmission case for tough Indian soil",
      "PAN India direct drop-ship dispatch from KrishiGears Express Network",
      "24-48 hour dispatch with genuine replacement spare parts guarantee"
    ],
    "applications": [
      "Cotton",
      "Sugarcane",
      "Wheat",
      "Paddy"
    ],
    "benefits": [
      "Saves significant manual labour",
      "Reduces operating cost over time",
      "FMTTI-tested durability",
      "Cuts inter-cultivation labor cost by up to 70% in Cotton fields",
      "High-torque de-weeding and soil aeration in Black Cotton Soil",
      "Approved for state agricultural mechanization subsidies across Maharashtra and Madhya Pradesh"
    ],
    "warranty": "12 months manufacturer warranty + KrishiGears after-sales service network.",
    "video": "https://www.youtube.com/watch?v=XErTJ11jW2o",
    "hsn": "8432",
    "gst": 12
  },
  {
    "slug": "ri-sc-1000-s-7307",
    "category": "power-weeders",
    "name": "KrishiGears Power Weeder Model - Sc 1000-S (7 HP) - 170F Gasoline Engine 4 Stroke OHV Petrol Engine",
    "model": "Sc 1000-S",
    "brand": "KrishiGears",
    "badges": [
      "Industrial Standard Quality",
      "Commercial Agro Tested",
      "Commercial Grade"
    ],
    "price": 40000,
    "comparePrice": 47200,
    "images": [
      "/images/catalog/ri-sc-1000-s-7307.webp"
    ],
    "specs": {
      "Engine Power": "7 HP",
      "Fuel": "Petrol",
      "Fuel Type": "Petrol",
      "Working Width": "7 feet",
      "Engine Type": "170F Gasoline Engine 4 Stroke OHV Petrol Engine",
      "Fuel Tank Capacity": "3 Litre"
    },
    "features": [
      "Genuine KrishiGears branded product",
      "Backed by manufacturer warranty",
      "PAN India delivery from KrishiGears",
      "Genuine spare parts availability",
      "Genuine KrishiGears commercial agricultural machinery",
      "FMTTI-tested commercial durability standard",
      "Precision-engineered transmission case for tough Indian soil",
      "PAN India direct drop-ship dispatch from KrishiGears Express Network",
      "24-48 hour dispatch with genuine replacement spare parts guarantee"
    ],
    "applications": [
      "Cotton",
      "Sugarcane",
      "Wheat",
      "Paddy"
    ],
    "benefits": [
      "Saves significant manual labour",
      "Reduces operating cost over time",
      "FMTTI-tested durability",
      "Cuts inter-cultivation labor cost by up to 70% in Cotton fields",
      "High-torque de-weeding and soil aeration in Black Cotton Soil",
      "Approved for state agricultural mechanization subsidies across Maharashtra and Madhya Pradesh"
    ],
    "warranty": "12 months manufacturer warranty + KrishiGears after-sales service network.",
    "video": "https://www.youtube.com/watch?v=XErTJ11jW2o",
    "hsn": "8432",
    "gst": 12
  },
  {
    "slug": "ri-kp-1250-8465",
    "category": "power-weeders",
    "name": "KrishiGears Power Weeder Model-Kp 1250 (7 Hp) - Petrol",
    "model": "Kp 1250",
    "brand": "KrishiGears",
    "badges": [
      "Industrial Standard Quality",
      "Commercial Agro Tested",
      "Commercial Grade"
    ],
    "price": 37000,
    "comparePrice": 43660,
    "images": [
      "/images/catalog/ri-kp-1250-8465.webp"
    ],
    "specs": {
      "Power": "7 Hp",
      "Engine Type": "Petrol",
      "Grade Type": "Manual",
      "Power Source": "Petrol",
      "Brand": "KrishiGears"
    },
    "features": [
      "Genuine KrishiGears branded product",
      "Backed by manufacturer warranty",
      "PAN India delivery from KrishiGears",
      "Genuine spare parts availability",
      "Genuine KrishiGears commercial agricultural machinery",
      "FMTTI-tested commercial durability standard",
      "Precision-engineered transmission case for tough Indian soil",
      "PAN India direct drop-ship dispatch from KrishiGears Express Network",
      "24-48 hour dispatch with genuine replacement spare parts guarantee"
    ],
    "applications": [
      "Cotton",
      "Sugarcane",
      "Wheat",
      "Paddy"
    ],
    "benefits": [
      "Saves significant manual labour",
      "Reduces operating cost over time",
      "FMTTI-tested durability",
      "Cuts inter-cultivation labor cost by up to 70% in Cotton fields",
      "High-torque de-weeding and soil aeration in Black Cotton Soil",
      "Approved for state agricultural mechanization subsidies across Maharashtra and Madhya Pradesh"
    ],
    "warranty": "12 months manufacturer warranty + KrishiGears after-sales service network.",
    "video": "https://www.youtube.com/watch?v=XErTJ11jW2o",
    "hsn": "8432",
    "gst": 12
  },
  {
    "slug": "ri-cg-530-0002",
    "category": "power-weeders",
    "name": "KrishiGears Power Weeder Model Cg - 530 (3 hp) - 2 stroke",
    "model": "Cg - 530",
    "brand": "KrishiGears",
    "badges": [
      "Industrial Standard Quality",
      "Commercial Agro Tested",
      "Commercial Grade"
    ],
    "price": 13077,
    "comparePrice": 15431,
    "images": [
      "/images/catalog/ri-cg-530-0002.webp"
    ],
    "specs": {
      "Engine Power": "3 hp",
      "Fuel": "Petrol",
      "Fuel Type": "Petrol",
      "Working Width": "7 feet",
      "Engine Type": "2 stroke",
      "Fuel Tank Capacity": "3 Litre"
    },
    "features": [
      "Genuine KrishiGears branded product",
      "Backed by manufacturer warranty",
      "PAN India delivery from KrishiGears",
      "Genuine spare parts availability",
      "Genuine KrishiGears commercial agricultural machinery",
      "FMTTI-tested commercial durability standard",
      "Precision-engineered transmission case for tough Indian soil",
      "PAN India direct drop-ship dispatch from KrishiGears Express Network",
      "24-48 hour dispatch with genuine replacement spare parts guarantee"
    ],
    "applications": [
      "Cotton",
      "Sugarcane",
      "Wheat",
      "Paddy"
    ],
    "benefits": [
      "Saves significant manual labour",
      "Reduces operating cost over time",
      "FMTTI-tested durability",
      "Cuts inter-cultivation labor cost by up to 70% in Cotton fields",
      "High-torque de-weeding and soil aeration in Black Cotton Soil",
      "Approved for state agricultural mechanization subsidies across Maharashtra and Madhya Pradesh"
    ],
    "warranty": "12 months manufacturer warranty + KrishiGears after-sales service network.",
    "video": "https://www.youtube.com/watch?v=XErTJ11jW2o",
    "hsn": "8432",
    "gst": 12
  },
  {
    "slug": "ri-sc-1000-z-e-3146",
    "category": "power-weeders",
    "name": "KrishiGears Power Weeder Model Sc 1000 Z- E (10 Hp) - Diesel",
    "model": "Sc 1000 Z- E",
    "brand": "KrishiGears",
    "badges": [
      "Industrial Standard Quality",
      "Commercial Agro Tested",
      "Commercial Grade"
    ],
    "price": 80000,
    "comparePrice": 94400,
    "images": [
      "/images/catalog/ri-sc-1000-z-e-3146.webp"
    ],
    "specs": {
      "Power": "10 Hp",
      "Engine Type": "Diesel",
      "Grade Type": "Semi-Automatic",
      "Power Source": "Diesel",
      "Brand": "KrishiGears"
    },
    "features": [
      "Genuine KrishiGears branded product",
      "Backed by manufacturer warranty",
      "PAN India delivery from KrishiGears",
      "Genuine spare parts availability",
      "Genuine KrishiGears commercial agricultural machinery",
      "FMTTI-tested commercial durability standard",
      "Precision-engineered transmission case for tough Indian soil",
      "PAN India direct drop-ship dispatch from KrishiGears Express Network",
      "24-48 hour dispatch with genuine replacement spare parts guarantee"
    ],
    "applications": [
      "Cotton",
      "Sugarcane",
      "Wheat",
      "Paddy"
    ],
    "benefits": [
      "Saves significant manual labour",
      "Reduces operating cost over time",
      "FMTTI-tested durability",
      "Cuts inter-cultivation labor cost by up to 70% in Cotton fields",
      "High-torque de-weeding and soil aeration in Black Cotton Soil",
      "Approved for state agricultural mechanization subsidies across Maharashtra and Madhya Pradesh"
    ],
    "warranty": "12 months manufacturer warranty + KrishiGears after-sales service network.",
    "video": "https://www.youtube.com/watch?v=XErTJ11jW2o",
    "hsn": "8432",
    "gst": 12
  },
  {
    "slug": "ri-cg-600-3322",
    "category": "power-weeders",
    "name": "KrishiGears Power Weeder Model - Cg - 600 (3 Hp) - Petrol",
    "model": "Cg - 600",
    "brand": "KrishiGears",
    "badges": [
      "Industrial Standard Quality",
      "Commercial Agro Tested",
      "Commercial Grade"
    ],
    "price": 22308,
    "comparePrice": 26323,
    "images": [
      "/images/catalog/ri-cg-600-3322.webp"
    ],
    "specs": {
      "Power": "3 Hp",
      "Engine Type": "Petrol",
      "Grade Type": "Manual",
      "Power Source": "Petrol",
      "Brand": "KrishiGears"
    },
    "features": [
      "Genuine KrishiGears branded product",
      "Backed by manufacturer warranty",
      "PAN India delivery from KrishiGears",
      "Genuine spare parts availability",
      "Genuine KrishiGears commercial agricultural machinery",
      "FMTTI-tested commercial durability standard",
      "Precision-engineered transmission case for tough Indian soil",
      "PAN India direct drop-ship dispatch from KrishiGears Express Network",
      "24-48 hour dispatch with genuine replacement spare parts guarantee"
    ],
    "applications": [
      "Cotton",
      "Sugarcane",
      "Wheat",
      "Paddy"
    ],
    "benefits": [
      "Saves significant manual labour",
      "Reduces operating cost over time",
      "FMTTI-tested durability",
      "Cuts inter-cultivation labor cost by up to 70% in Cotton fields",
      "High-torque de-weeding and soil aeration in Black Cotton Soil",
      "Approved for state agricultural mechanization subsidies across Maharashtra and Madhya Pradesh"
    ],
    "warranty": "12 months manufacturer warranty + KrishiGears after-sales service network.",
    "video": "https://www.youtube.com/watch?v=XErTJ11jW2o",
    "hsn": "8432",
    "gst": 12
  },
  {
    "slug": "leo-cg-520-4521",
    "category": "power-weeders",
    "name": "KrishiGears Mini Tiller Model Cg 520 (2.4 Hp / 52 Cc) Cg 530 - 2-Stroke",
    "model": "Cg 520",
    "brand": "KrishiGears",
    "badges": [
      "Industrial Standard Quality",
      "Commercial Agro Tested",
      "Commercial Grade"
    ],
    "price": 13077,
    "comparePrice": 15431,
    "images": [
      "/images/catalog/leo-cg-520-4521.webp"
    ],
    "specs": {
      "Tiller Type": "Mini",
      "Fuel Type": "Petrol",
      "Engine Type": "2-Stroke",
      "Working Width": "7 feet",
      "Starting System": "Manual",
      "Number of Gears": "2 + 2 forward"
    },
    "features": [
      "Genuine KrishiGears branded product",
      "Backed by manufacturer warranty",
      "PAN India delivery from KrishiGears",
      "Genuine spare parts availability",
      "Genuine KrishiGears commercial agricultural machinery",
      "FMTTI-tested commercial durability standard",
      "Precision-engineered transmission case for tough Indian soil",
      "PAN India direct drop-ship dispatch from KrishiGears Express Network",
      "24-48 hour dispatch with genuine replacement spare parts guarantee"
    ],
    "applications": [
      "Cotton",
      "Sugarcane",
      "Wheat",
      "Paddy"
    ],
    "benefits": [
      "Saves significant manual labour",
      "Reduces operating cost over time",
      "FMTTI-tested durability",
      "Cuts inter-cultivation labor cost by up to 70% in Cotton fields",
      "High-torque de-weeding and soil aeration in Black Cotton Soil",
      "Approved for state agricultural mechanization subsidies across Maharashtra and Madhya Pradesh"
    ],
    "warranty": "12 months manufacturer warranty + KrishiGears after-sales service network.",
    "video": "https://www.youtube.com/watch?v=EsLWgk1cdIE",
    "hsn": "8432",
    "gst": 12
  },
  {
    "slug": "leo-295837443-7443",
    "category": "brush-cutters",
    "name": "KrishiGears Side Pack Brushcutter CG-530 (2.4 HP) - 2 Stroke",
    "model": "295837443",
    "brand": "KrishiGears",
    "badges": [
      "Industrial Standard Quality",
      "Commercial Agro Tested",
      "Commercial Grade"
    ],
    "price": 8924,
    "comparePrice": 10530,
    "images": [
      "/images/catalog/leo-295837443-7443.webp"
    ],
    "specs": {
      "Engine Displacement": "52 cc",
      "Engine Type": "2 Stroke",
      "Mounting Type": "Side Pack",
      "Power Source": "Petrol",
      "Power Output": "2.4 HP",
      "Handle Type": "Bike Handle (U)"
    },
    "features": [
      "Genuine KrishiGears branded product",
      "Backed by manufacturer warranty",
      "PAN India delivery from KrishiGears",
      "Genuine spare parts availability",
      "Genuine KrishiGears commercial agricultural machinery",
      "FMTTI-tested commercial durability standard",
      "Precision-engineered transmission case for tough Indian soil",
      "PAN India direct drop-ship dispatch from KrishiGears Express Network",
      "24-48 hour dispatch with genuine replacement spare parts guarantee"
    ],
    "applications": [
      "Cotton",
      "Sugarcane",
      "Wheat",
      "Paddy"
    ],
    "benefits": [
      "Saves significant manual labour",
      "Reduces operating cost over time",
      "FMTTI-tested durability",
      "Cuts inter-cultivation labor cost by up to 70% in Cotton fields",
      "High-torque de-weeding and soil aeration in Black Cotton Soil",
      "Approved for state agricultural mechanization subsidies across Maharashtra and Madhya Pradesh"
    ],
    "warranty": "12 months manufacturer warranty + KrishiGears after-sales service network.",
    "video": "https://www.youtube.com/watch?v=EsLWgk1cdIE",
    "hsn": "8433",
    "gst": 12
  },
  {
    "slug": "leo-cg-680-0294",
    "category": "power-weeders",
    "name": "KrishiGears Minni Tiller - Model CG-680 - 2-Stroke",
    "model": "CG-680",
    "brand": "KrishiGears",
    "badges": [
      "Industrial Standard Quality",
      "Commercial Agro Tested",
      "Commercial Grade"
    ],
    "price": 12000,
    "comparePrice": 14160,
    "images": [
      "/images/catalog/leo-cg-680-0294.webp"
    ],
    "specs": {
      "Tiller Type": "Mini",
      "Fuel": "Gas, Petrol",
      "Engine Type": "2-Stroke",
      "Working Width": "6 feet",
      "Starting System": "Manual",
      "Number of Gears": "1 + 1 forward"
    },
    "features": [
      "Genuine KrishiGears branded product",
      "Backed by manufacturer warranty",
      "PAN India delivery from KrishiGears",
      "Genuine spare parts availability",
      "Genuine KrishiGears commercial agricultural machinery",
      "FMTTI-tested commercial durability standard",
      "Precision-engineered transmission case for tough Indian soil",
      "PAN India direct drop-ship dispatch from KrishiGears Express Network",
      "24-48 hour dispatch with genuine replacement spare parts guarantee"
    ],
    "applications": [
      "Cotton",
      "Sugarcane",
      "Wheat",
      "Paddy"
    ],
    "benefits": [
      "Saves significant manual labour",
      "Reduces operating cost over time",
      "FMTTI-tested durability",
      "Cuts inter-cultivation labor cost by up to 70% in Cotton fields",
      "High-torque de-weeding and soil aeration in Black Cotton Soil",
      "Approved for state agricultural mechanization subsidies across Maharashtra and Madhya Pradesh"
    ],
    "warranty": "12 months manufacturer warranty + KrishiGears after-sales service network.",
    "video": "https://www.youtube.com/watch?v=EsLWgk1cdIE",
    "hsn": "8432",
    "gst": 12
  },
  {
    "slug": "leo-253407350-7350",
    "category": "farm-machinery",
    "name": "KrishiGears Chain Saw 62 Cc 2 Stroke (2.2 kW)",
    "model": "253407350",
    "brand": "KrishiGears",
    "badges": [
      "Industrial Standard Quality",
      "Commercial Agro Tested",
      "Commercial Grade"
    ],
    "price": 20000,
    "comparePrice": 23600,
    "images": [
      "/images/catalog/leo-253407350-7350.webp"
    ],
    "specs": {
      "Engine Displacement": "62 cc",
      "Bar Length": "22 inch",
      "Engine Power": "2.2 kW",
      "Chain Pitch": "0.325 inch",
      "Fuel Mixture Ratio": "25:1"
    },
    "features": [
      "Genuine KrishiGears branded product",
      "Backed by manufacturer warranty",
      "PAN India delivery from KrishiGears",
      "Genuine spare parts availability",
      "Genuine KrishiGears commercial agricultural machinery",
      "FMTTI-tested commercial durability standard",
      "Precision-engineered transmission case for tough Indian soil",
      "PAN India direct drop-ship dispatch from KrishiGears Express Network",
      "24-48 hour dispatch with genuine replacement spare parts guarantee"
    ],
    "applications": [
      "Cotton",
      "Sugarcane",
      "Wheat",
      "Paddy"
    ],
    "benefits": [
      "Saves significant manual labour",
      "Reduces operating cost over time",
      "FMTTI-tested durability",
      "Cuts inter-cultivation labor cost by up to 70% in Cotton fields",
      "High-torque de-weeding and soil aeration in Black Cotton Soil",
      "Approved for state agricultural mechanization subsidies across Maharashtra and Madhya Pradesh"
    ],
    "warranty": "12 months manufacturer warranty + KrishiGears after-sales service network.",
    "video": "https://www.youtube.com/watch?v=EsLWgk1cdIE",
    "hsn": "8433",
    "gst": 12
  },
  {
    "slug": "leo-rover-850-sp-1843",
    "category": "lawn-mowers",
    "name": "KrishiGears Walk Bihind Mowers Model ROVER-850 SP (5.5 HP)",
    "model": "ROVER-850 SP",
    "brand": "KrishiGears",
    "badges": [
      "Industrial Standard Quality",
      "Commercial Agro Tested",
      "Commercial Grade"
    ],
    "price": 20000,
    "comparePrice": 23600,
    "images": [
      "/images/catalog/leo-rover-850-sp-1843.webp"
    ],
    "specs": {
      "Cutting Width": "18\"",
      "Cutting Height": "25 mm",
      "Forward Speed": "Adjustable",
      "Power": "5.5 HP",
      "Color": "Red",
      "Size": "15 to 55 L"
    },
    "features": [
      "Genuine KrishiGears branded product",
      "Backed by manufacturer warranty",
      "PAN India delivery from KrishiGears",
      "Genuine spare parts availability",
      "Genuine KrishiGears commercial agricultural machinery",
      "FMTTI-tested commercial durability standard",
      "Precision-engineered transmission case for tough Indian soil",
      "PAN India direct drop-ship dispatch from KrishiGears Express Network",
      "24-48 hour dispatch with genuine replacement spare parts guarantee"
    ],
    "applications": [
      "Cotton",
      "Sugarcane",
      "Wheat",
      "Paddy"
    ],
    "benefits": [
      "Saves significant manual labour",
      "Reduces operating cost over time",
      "FMTTI-tested durability",
      "Cuts inter-cultivation labor cost by up to 70% in Cotton fields",
      "High-torque de-weeding and soil aeration in Black Cotton Soil",
      "Approved for state agricultural mechanization subsidies across Maharashtra and Madhya Pradesh"
    ],
    "warranty": "12 months manufacturer warranty + KrishiGears after-sales service network.",
    "video": "",
    "hsn": "8433",
    "gst": 12
  },
  {
    "slug": "leo-254165680-5680",
    "category": "farm-machinery",
    "name": "KrishiGears Earth Auger Wheel Type 3.5hp / 68cc",
    "model": "254165680",
    "brand": "KrishiGears",
    "badges": [
      "Industrial Standard Quality",
      "Commercial Agro Tested",
      "Commercial Grade"
    ],
    "price": 28000,
    "comparePrice": 33040,
    "images": [
      "/images/catalog/leo-254165680-5680.webp"
    ],
    "specs": {
      "Drill Diameter": "More Than 18 inch",
      "Material": "7 HP 4 Stroke Air Cooled Petrol Engine",
      "Color": "black/red",
      "Weight": "16kgs",
      "Digging Depth": "18kgs",
      "Capacity": "3 Ltrs"
    },
    "features": [
      "Genuine KrishiGears branded product",
      "Backed by manufacturer warranty",
      "PAN India delivery from KrishiGears",
      "Genuine spare parts availability",
      "Genuine KrishiGears commercial agricultural machinery",
      "FMTTI-tested commercial durability standard",
      "Precision-engineered transmission case for tough Indian soil",
      "PAN India direct drop-ship dispatch from KrishiGears Express Network",
      "24-48 hour dispatch with genuine replacement spare parts guarantee"
    ],
    "applications": [
      "Cotton",
      "Sugarcane",
      "Wheat",
      "Paddy"
    ],
    "benefits": [
      "Saves significant manual labour",
      "Reduces operating cost over time",
      "FMTTI-tested durability",
      "Cuts inter-cultivation labor cost by up to 70% in Cotton fields",
      "High-torque de-weeding and soil aeration in Black Cotton Soil",
      "Approved for state agricultural mechanization subsidies across Maharashtra and Madhya Pradesh"
    ],
    "warranty": "12 months manufacturer warranty + KrishiGears after-sales service network.",
    "video": "https://www.youtube.com/watch?v=EsLWgk1cdIE",
    "hsn": "8433",
    "gst": 12
  },
  {
    "slug": "leo-wp-15-2557",
    "category": "farm-machinery",
    "name": "KrishiGears Water Pump Model Wp -15 (1 HP) - 4 Stroke",
    "model": "Wp -15",
    "brand": "KrishiGears",
    "badges": [
      "Industrial Standard Quality",
      "Commercial Agro Tested",
      "Commercial Grade"
    ],
    "price": 9923,
    "comparePrice": 11709,
    "images": [
      "/images/catalog/leo-wp-15-2557.webp"
    ],
    "specs": {
      "Power": "1 HP",
      "Power Source": "Petrol",
      "Engine Type": "4 Stroke",
      "Automation Grade": "Automatic",
      "Pump Size": "25 mm",
      "Max Flow Rate": "170 Lpm"
    },
    "features": [
      "Genuine KrishiGears branded product",
      "Backed by manufacturer warranty",
      "PAN India delivery from KrishiGears",
      "Genuine spare parts availability",
      "Genuine KrishiGears commercial agricultural machinery",
      "FMTTI-tested commercial durability standard",
      "Precision-engineered transmission case for tough Indian soil",
      "PAN India direct drop-ship dispatch from KrishiGears Express Network",
      "24-48 hour dispatch with genuine replacement spare parts guarantee"
    ],
    "applications": [
      "Cotton",
      "Sugarcane",
      "Wheat",
      "Paddy"
    ],
    "benefits": [
      "Saves significant manual labour",
      "Reduces operating cost over time",
      "FMTTI-tested durability",
      "Cuts inter-cultivation labor cost by up to 70% in Cotton fields",
      "High-torque de-weeding and soil aeration in Black Cotton Soil",
      "Approved for state agricultural mechanization subsidies across Maharashtra and Madhya Pradesh"
    ],
    "warranty": "12 months manufacturer warranty + KrishiGears after-sales service network.",
    "video": "https://www.youtube.com/watch?v=EsLWgk1cdIE",
    "hsn": "8433",
    "gst": 12
  },
  {
    "slug": "leo-303454139-4139",
    "category": "brush-cutters",
    "name": "KrishiGears Rotary Slasher Shrub Master (10 hp) - Petrol",
    "model": "303454139",
    "brand": "KrishiGears",
    "badges": [
      "Industrial Standard Quality",
      "Commercial Agro Tested",
      "Commercial Grade"
    ],
    "price": 80000,
    "comparePrice": 94400,
    "images": [
      "/images/catalog/leo-303454139-4139.webp"
    ],
    "specs": {
      "Cutting Capacity": "400 kg/hr",
      "Power": "10 hp",
      "Grade Type": "Semi-Automatic",
      "Engine Type": "Petrol",
      "Country of Origin": "Made in India"
    },
    "features": [
      "Genuine KrishiGears branded product",
      "Backed by manufacturer warranty",
      "PAN India delivery from KrishiGears",
      "Genuine spare parts availability",
      "Genuine KrishiGears commercial agricultural machinery",
      "FMTTI-tested commercial durability standard",
      "Precision-engineered transmission case for tough Indian soil",
      "PAN India direct drop-ship dispatch from KrishiGears Express Network",
      "24-48 hour dispatch with genuine replacement spare parts guarantee"
    ],
    "applications": [
      "Cotton",
      "Sugarcane",
      "Wheat",
      "Paddy"
    ],
    "benefits": [
      "Saves significant manual labour",
      "Reduces operating cost over time",
      "FMTTI-tested durability",
      "Cuts inter-cultivation labor cost by up to 70% in Cotton fields",
      "High-torque de-weeding and soil aeration in Black Cotton Soil",
      "Approved for state agricultural mechanization subsidies across Maharashtra and Madhya Pradesh"
    ],
    "warranty": "12 months manufacturer warranty + KrishiGears after-sales service network.",
    "video": "",
    "hsn": "8433",
    "gst": 12
  },
  {
    "slug": "leo-392-9514",
    "category": "lawn-mowers",
    "name": "KrishiGears Rotary Lawn Mower Model 392 (7 HP) - Petrol",
    "model": "392",
    "brand": "KrishiGears",
    "badges": [
      "Industrial Standard Quality",
      "Commercial Agro Tested",
      "Commercial Grade"
    ],
    "price": 28461,
    "comparePrice": 33584,
    "images": [
      "/images/catalog/leo-392-9514.webp"
    ],
    "specs": {
      "Power Source": "Petrol",
      "Drive Type": "Push",
      "Cutting Width": "20 Inch",
      "Engine Power": "7 HP",
      "Cutting Height": "50 mm",
      "Grass Collector": "With Collector"
    },
    "features": [
      "Genuine KrishiGears branded product",
      "Backed by manufacturer warranty",
      "PAN India delivery from KrishiGears",
      "Genuine spare parts availability",
      "Genuine KrishiGears commercial agricultural machinery",
      "FMTTI-tested commercial durability standard",
      "Precision-engineered transmission case for tough Indian soil",
      "PAN India direct drop-ship dispatch from KrishiGears Express Network",
      "24-48 hour dispatch with genuine replacement spare parts guarantee"
    ],
    "applications": [
      "Cotton",
      "Sugarcane",
      "Wheat",
      "Paddy"
    ],
    "benefits": [
      "Saves significant manual labour",
      "Reduces operating cost over time",
      "FMTTI-tested durability",
      "Cuts inter-cultivation labor cost by up to 70% in Cotton fields",
      "High-torque de-weeding and soil aeration in Black Cotton Soil",
      "Approved for state agricultural mechanization subsidies across Maharashtra and Madhya Pradesh"
    ],
    "warranty": "12 months manufacturer warranty + KrishiGears after-sales service network.",
    "video": "https://www.youtube.com/watch?v=EsLWgk1cdIE",
    "hsn": "8433",
    "gst": 12
  },
  {
    "slug": "leo-393-9876",
    "category": "lawn-mowers",
    "name": "KrishiGears Rotary Lawn Mower Model 393 (7 HP) - Petrol",
    "model": "393",
    "brand": "KrishiGears",
    "badges": [
      "Industrial Standard Quality",
      "Commercial Agro Tested",
      "Commercial Grade"
    ],
    "price": 32308,
    "comparePrice": 38123,
    "images": [
      "/images/catalog/leo-393-9876.webp"
    ],
    "specs": {
      "Power Source": "Petrol",
      "Drive Type": "Self Propelled",
      "Cutting Width": "20 Inch",
      "Forward Speed": "Adjustable",
      "Engine Power": "7 HP",
      "Cutting Height": "50 mm"
    },
    "features": [
      "Genuine KrishiGears branded product",
      "Backed by manufacturer warranty",
      "PAN India delivery from KrishiGears",
      "Genuine spare parts availability",
      "Genuine KrishiGears commercial agricultural machinery",
      "FMTTI-tested commercial durability standard",
      "Precision-engineered transmission case for tough Indian soil",
      "PAN India direct drop-ship dispatch from KrishiGears Express Network",
      "24-48 hour dispatch with genuine replacement spare parts guarantee"
    ],
    "applications": [
      "Cotton",
      "Sugarcane",
      "Wheat",
      "Paddy"
    ],
    "benefits": [
      "Saves significant manual labour",
      "Reduces operating cost over time",
      "FMTTI-tested durability",
      "Cuts inter-cultivation labor cost by up to 70% in Cotton fields",
      "High-torque de-weeding and soil aeration in Black Cotton Soil",
      "Approved for state agricultural mechanization subsidies across Maharashtra and Madhya Pradesh"
    ],
    "warranty": "12 months manufacturer warranty + KrishiGears after-sales service network.",
    "video": "https://www.youtube.com/watch?v=EsLWgk1cdIE",
    "hsn": "8433",
    "gst": 12
  },
  {
    "slug": "leo-0378-1872",
    "category": "lawn-mowers",
    "name": "KrishiGears Wheel Type Manual Lawn Mower (steel Frame) (Model 0378 )",
    "model": "0378",
    "brand": "KrishiGears",
    "badges": [
      "Industrial Standard Quality",
      "Commercial Agro Tested",
      "Commercial Grade"
    ],
    "price": 4000,
    "comparePrice": 4720,
    "images": [
      "/images/catalog/leo-0378-1872.webp"
    ],
    "specs": {
      "Cutting Height": "75 mm",
      "Number Of Blades": "6 blades",
      "Cutting Width": "14\"",
      "Forward Speed": "Adjustable",
      "Drive Type": "Push",
      "Grass Collector": "With Collector"
    },
    "features": [
      "Genuine KrishiGears branded product",
      "Backed by manufacturer warranty",
      "PAN India delivery from KrishiGears",
      "Genuine spare parts availability",
      "Genuine KrishiGears commercial agricultural machinery",
      "FMTTI-tested commercial durability standard",
      "Precision-engineered transmission case for tough Indian soil",
      "PAN India direct drop-ship dispatch from KrishiGears Express Network",
      "24-48 hour dispatch with genuine replacement spare parts guarantee"
    ],
    "applications": [
      "Cotton",
      "Sugarcane",
      "Wheat",
      "Paddy"
    ],
    "benefits": [
      "Saves significant manual labour",
      "Reduces operating cost over time",
      "FMTTI-tested durability",
      "Cuts inter-cultivation labor cost by up to 70% in Cotton fields",
      "High-torque de-weeding and soil aeration in Black Cotton Soil",
      "Approved for state agricultural mechanization subsidies across Maharashtra and Madhya Pradesh"
    ],
    "warranty": "12 months manufacturer warranty + KrishiGears after-sales service network.",
    "video": "https://www.youtube.com/watch?v=EsLWgk1cdIE",
    "hsn": "8433",
    "gst": 12
  },
  {
    "slug": "leo-297634235-4235",
    "category": "farm-machinery",
    "name": "KrishiGears Chaff Cutter Machine - Electric",
    "model": "297634235",
    "brand": "KrishiGears",
    "badges": [
      "Industrial Standard Quality",
      "Commercial Agro Tested",
      "Commercial Grade"
    ],
    "price": 17500,
    "comparePrice": 20650,
    "images": [
      "/images/catalog/leo-297634235-4235.webp"
    ],
    "specs": {
      "Type": "Heavy Duty",
      "Power Source": "Electric",
      "Feed Material": "Corn Stalk",
      "Output Mechanism": "Side Discharge",
      "Machine Feed": "Corn Stalk",
      "Transmission Type": "Gear"
    },
    "features": [
      "Genuine KrishiGears branded product",
      "Backed by manufacturer warranty",
      "PAN India delivery from KrishiGears",
      "Genuine spare parts availability",
      "Genuine KrishiGears commercial agricultural machinery",
      "FMTTI-tested commercial durability standard",
      "Precision-engineered transmission case for tough Indian soil",
      "PAN India direct drop-ship dispatch from KrishiGears Express Network",
      "24-48 hour dispatch with genuine replacement spare parts guarantee"
    ],
    "applications": [
      "Cotton",
      "Sugarcane",
      "Wheat",
      "Paddy"
    ],
    "benefits": [
      "Saves significant manual labour",
      "Reduces operating cost over time",
      "FMTTI-tested durability",
      "Cuts inter-cultivation labor cost by up to 70% in Cotton fields",
      "High-torque de-weeding and soil aeration in Black Cotton Soil",
      "Approved for state agricultural mechanization subsidies across Maharashtra and Madhya Pradesh"
    ],
    "warranty": "12 months manufacturer warranty + KrishiGears after-sales service network.",
    "video": "https://www.youtube.com/watch?v=EsLWgk1cdIE",
    "hsn": "8433",
    "gst": 12
  },
  {
    "slug": "leo-chain-saw-sh-6799",
    "category": "power-weeder-spare-parts",
    "name": "KrishiGears Electric Chain Sharpener",
    "model": "Chain Saw Sharpener",
    "brand": "KrishiGears",
    "badges": [
      "Industrial Standard Quality",
      "Commercial Agro Tested",
      "Commercial Grade"
    ],
    "price": 4308,
    "comparePrice": 5083,
    "images": [
      "/images/catalog/leo-chain-saw-sh-6799.webp"
    ],
    "specs": {
      "Voltage": "250W",
      "Model Name/Number": "Chain Saw Sharpener"
    },
    "features": [
      "Genuine KrishiGears branded product",
      "Backed by manufacturer warranty",
      "PAN India delivery from KrishiGears",
      "Genuine spare parts availability",
      "Genuine KrishiGears commercial agricultural machinery",
      "FMTTI-tested commercial durability standard",
      "Precision-engineered transmission case for tough Indian soil",
      "PAN India direct drop-ship dispatch from KrishiGears Express Network",
      "24-48 hour dispatch with genuine replacement spare parts guarantee"
    ],
    "applications": [
      "Cotton",
      "Sugarcane",
      "Wheat",
      "Paddy"
    ],
    "benefits": [
      "Saves significant manual labour",
      "Reduces operating cost over time",
      "FMTTI-tested durability",
      "Cuts inter-cultivation labor cost by up to 70% in Cotton fields",
      "High-torque de-weeding and soil aeration in Black Cotton Soil",
      "Approved for state agricultural mechanization subsidies across Maharashtra and Madhya Pradesh"
    ],
    "warranty": "12 months manufacturer warranty + KrishiGears after-sales service network.",
    "video": "https://www.youtube.com/watch?v=EsLWgk1cdIE",
    "hsn": "8432",
    "gst": 12
  },
  {
    "slug": "leo-34586930-6930",
    "category": "power-weeder-spare-parts",
    "name": "KrishiGears Cast Iron Clutch Brush Cutter - Petrol/Diesel",
    "model": "34586930",
    "brand": "KrishiGears",
    "badges": [
      "Industrial Standard Quality",
      "Commercial Agro Tested",
      "Commercial Grade"
    ],
    "price": 300,
    "comparePrice": 354,
    "images": [
      "/images/catalog/leo-34586930-6930.webp"
    ],
    "specs": {
      "Power Source": "Petrol/Diesel",
      "Material": "Cast Iron",
      "Usage/Application": "Brush Cutter",
      "Weight": "290 gm",
      "Color": "Grey",
      "Pack Type": "Box"
    },
    "features": [
      "Genuine KrishiGears branded product",
      "Backed by manufacturer warranty",
      "PAN India delivery from KrishiGears",
      "Genuine spare parts availability",
      "Genuine KrishiGears commercial agricultural machinery",
      "FMTTI-tested commercial durability standard",
      "Precision-engineered transmission case for tough Indian soil",
      "PAN India direct drop-ship dispatch from KrishiGears Express Network",
      "24-48 hour dispatch with genuine replacement spare parts guarantee"
    ],
    "applications": [
      "Cotton",
      "Sugarcane",
      "Wheat",
      "Paddy"
    ],
    "benefits": [
      "Saves significant manual labour",
      "Reduces operating cost over time",
      "FMTTI-tested durability",
      "Cuts inter-cultivation labor cost by up to 70% in Cotton fields",
      "High-torque de-weeding and soil aeration in Black Cotton Soil",
      "Approved for state agricultural mechanization subsidies across Maharashtra and Madhya Pradesh"
    ],
    "warranty": "12 months manufacturer warranty + KrishiGears after-sales service network.",
    "video": "",
    "hsn": "8432",
    "gst": 12
  },
  {
    "slug": "leo-34586928-6928",
    "category": "power-weeder-spare-parts",
    "name": "KrishiGears Carburetor For Brush Cutter Parts - Electric",
    "model": "34586928",
    "brand": "KrishiGears",
    "badges": [
      "Industrial Standard Quality",
      "Commercial Agro Tested",
      "Commercial Grade"
    ],
    "price": 750,
    "comparePrice": 885,
    "images": [
      "/images/catalog/leo-34586928-6928.webp"
    ],
    "specs": {
      "Power Source": "Electric",
      "Material": "Aluminium",
      "Usage/Application": "Brush Cutter",
      "Displacement": "25.4 cc",
      "Engine": "2-stroke / 4-stroke",
      "Pack Type": "Box"
    },
    "features": [
      "Genuine KrishiGears branded product",
      "Backed by manufacturer warranty",
      "PAN India delivery from KrishiGears",
      "Genuine spare parts availability",
      "Genuine KrishiGears commercial agricultural machinery",
      "FMTTI-tested commercial durability standard",
      "Precision-engineered transmission case for tough Indian soil",
      "PAN India direct drop-ship dispatch from KrishiGears Express Network",
      "24-48 hour dispatch with genuine replacement spare parts guarantee"
    ],
    "applications": [
      "Cotton",
      "Sugarcane",
      "Wheat",
      "Paddy"
    ],
    "benefits": [
      "Saves significant manual labour",
      "Reduces operating cost over time",
      "FMTTI-tested durability",
      "Cuts inter-cultivation labor cost by up to 70% in Cotton fields",
      "High-torque de-weeding and soil aeration in Black Cotton Soil",
      "Approved for state agricultural mechanization subsidies across Maharashtra and Madhya Pradesh"
    ],
    "warranty": "12 months manufacturer warranty + KrishiGears after-sales service network.",
    "video": "",
    "hsn": "8432",
    "gst": 12
  },
  {
    "slug": "leo-34586965-6965",
    "category": "power-weeder-spare-parts",
    "name": "KrishiGears Tap N GO Brush Cutter - Petrol/Diesel",
    "model": "34586965",
    "brand": "KrishiGears",
    "badges": [
      "Industrial Standard Quality",
      "Commercial Agro Tested",
      "Commercial Grade"
    ],
    "price": 250,
    "comparePrice": 295,
    "images": [
      "/images/catalog/leo-34586965-6965.webp"
    ],
    "specs": {
      "Power Source": "Petrol/Diesel",
      "Material": "Plastic",
      "Usage/Application": "Brush Cutter",
      "Color": "Red",
      "Pack Type": "Box",
      "Width": "5inch"
    },
    "features": [
      "Genuine KrishiGears branded product",
      "Backed by manufacturer warranty",
      "PAN India delivery from KrishiGears",
      "Genuine spare parts availability",
      "Genuine KrishiGears commercial agricultural machinery",
      "FMTTI-tested commercial durability standard",
      "Precision-engineered transmission case for tough Indian soil",
      "PAN India direct drop-ship dispatch from KrishiGears Express Network",
      "24-48 hour dispatch with genuine replacement spare parts guarantee"
    ],
    "applications": [
      "Cotton",
      "Sugarcane",
      "Wheat",
      "Paddy"
    ],
    "benefits": [
      "Saves significant manual labour",
      "Reduces operating cost over time",
      "FMTTI-tested durability",
      "Cuts inter-cultivation labor cost by up to 70% in Cotton fields",
      "High-torque de-weeding and soil aeration in Black Cotton Soil",
      "Approved for state agricultural mechanization subsidies across Maharashtra and Madhya Pradesh"
    ],
    "warranty": "12 months manufacturer warranty + KrishiGears after-sales service network.",
    "video": "",
    "hsn": "8432",
    "gst": 12
  },
  {
    "slug": "leo-303454205-4205",
    "category": "power-weeder-spare-parts",
    "name": "KrishiGears Brush Cutter Trimmer Line",
    "model": "303454205",
    "brand": "KrishiGears",
    "badges": [
      "Industrial Standard Quality",
      "Commercial Agro Tested",
      "Commercial Grade"
    ],
    "price": 600,
    "comparePrice": 708,
    "images": [
      "/images/catalog/leo-303454205-4205.webp"
    ],
    "specs": {
      "Size": "2.5 mm",
      "Brand": "KrishiGears",
      "Length": "52 METER",
      "Color": "GREEN",
      "Country of Origin": "Made in India"
    },
    "features": [
      "Genuine KrishiGears branded product",
      "Backed by manufacturer warranty",
      "PAN India delivery from KrishiGears",
      "Genuine spare parts availability",
      "Genuine KrishiGears commercial agricultural machinery",
      "FMTTI-tested commercial durability standard",
      "Precision-engineered transmission case for tough Indian soil",
      "PAN India direct drop-ship dispatch from KrishiGears Express Network",
      "24-48 hour dispatch with genuine replacement spare parts guarantee"
    ],
    "applications": [
      "Cotton",
      "Sugarcane",
      "Wheat",
      "Paddy"
    ],
    "benefits": [
      "Saves significant manual labour",
      "Reduces operating cost over time",
      "FMTTI-tested durability",
      "Cuts inter-cultivation labor cost by up to 70% in Cotton fields",
      "High-torque de-weeding and soil aeration in Black Cotton Soil",
      "Approved for state agricultural mechanization subsidies across Maharashtra and Madhya Pradesh"
    ],
    "warranty": "12 months manufacturer warranty + KrishiGears after-sales service network.",
    "video": "",
    "hsn": "8432",
    "gst": 12
  },
  {
    "slug": "leo-34586948-6948",
    "category": "power-weeder-spare-parts",
    "name": "KrishiGears Cast Iron Spark Plug Cap For Brush Cutter - Electric",
    "model": "34586948",
    "brand": "KrishiGears",
    "badges": [
      "Industrial Standard Quality",
      "Commercial Agro Tested",
      "Commercial Grade"
    ],
    "price": 100,
    "comparePrice": 118,
    "images": [
      "/images/catalog/leo-34586948-6948.webp"
    ],
    "specs": {
      "Power Source": "Electric",
      "Material": "Cast Iron",
      "Usage/Application": "Brush Cutter",
      "Size": "1/4\"",
      "Pack Type": "Box",
      "Weight": "1.6 ounces"
    },
    "features": [
      "Genuine KrishiGears branded product",
      "Backed by manufacturer warranty",
      "PAN India delivery from KrishiGears",
      "Genuine spare parts availability",
      "Genuine KrishiGears commercial agricultural machinery",
      "FMTTI-tested commercial durability standard",
      "Precision-engineered transmission case for tough Indian soil",
      "PAN India direct drop-ship dispatch from KrishiGears Express Network",
      "24-48 hour dispatch with genuine replacement spare parts guarantee"
    ],
    "applications": [
      "Cotton",
      "Sugarcane",
      "Wheat",
      "Paddy"
    ],
    "benefits": [
      "Saves significant manual labour",
      "Reduces operating cost over time",
      "FMTTI-tested durability",
      "Cuts inter-cultivation labor cost by up to 70% in Cotton fields",
      "High-torque de-weeding and soil aeration in Black Cotton Soil",
      "Approved for state agricultural mechanization subsidies across Maharashtra and Madhya Pradesh"
    ],
    "warranty": "12 months manufacturer warranty + KrishiGears after-sales service network.",
    "video": "",
    "hsn": "8432",
    "gst": 12
  },
  {
    "slug": "leo-26277631-7631",
    "category": "power-weeder-spare-parts",
    "name": "KrishiGears Brush Cutter Spare Parts",
    "model": "26277631",
    "brand": "KrishiGears",
    "badges": [
      "Industrial Standard Quality",
      "Commercial Agro Tested",
      "Commercial Grade"
    ],
    "price": 100,
    "comparePrice": 118,
    "images": [
      "/images/catalog/leo-26277631-7631.webp"
    ],
    "specs": {
      "Part type": "Trimmer head",
      "Compatible brand": "KrishiGears / Universal",
      "Suitable engine cc": "52 cc",
      "Material": "Alunimium",
      "Shaft size": "28 mm",
      "Model reference": "CG- 530"
    },
    "features": [
      "Genuine KrishiGears branded product",
      "Backed by manufacturer warranty",
      "PAN India delivery from KrishiGears",
      "Genuine spare parts availability",
      "Genuine KrishiGears commercial agricultural machinery",
      "FMTTI-tested commercial durability standard",
      "Precision-engineered transmission case for tough Indian soil",
      "PAN India direct drop-ship dispatch from KrishiGears Express Network",
      "24-48 hour dispatch with genuine replacement spare parts guarantee"
    ],
    "applications": [
      "Cotton",
      "Sugarcane",
      "Wheat",
      "Paddy"
    ],
    "benefits": [
      "Saves significant manual labour",
      "Reduces operating cost over time",
      "FMTTI-tested durability",
      "Cuts inter-cultivation labor cost by up to 70% in Cotton fields",
      "High-torque de-weeding and soil aeration in Black Cotton Soil",
      "Approved for state agricultural mechanization subsidies across Maharashtra and Madhya Pradesh"
    ],
    "warranty": "12 months manufacturer warranty + KrishiGears after-sales service network.",
    "video": "",
    "hsn": "8432",
    "gst": 12
  },
  {
    "slug": "leo-34586968-6968",
    "category": "power-weeder-spare-parts",
    "name": "KrishiGears 5 INCH 2 Tooth Brush Cutter Blade - Electric",
    "model": "34586968",
    "brand": "KrishiGears",
    "badges": [
      "Industrial Standard Quality",
      "Commercial Agro Tested",
      "Commercial Grade"
    ],
    "price": 300,
    "comparePrice": 354,
    "images": [
      "/images/catalog/leo-34586968-6968.webp"
    ],
    "specs": {
      "Power Source": "Electric",
      "Size": "5 Inch",
      "Usage/Application": "Brush Cutter",
      "Material": "HSS",
      "Color": "Black",
      "Pack Type": "Box"
    },
    "features": [
      "Genuine KrishiGears branded product",
      "Backed by manufacturer warranty",
      "PAN India delivery from KrishiGears",
      "Genuine spare parts availability",
      "Genuine KrishiGears commercial agricultural machinery",
      "FMTTI-tested commercial durability standard",
      "Precision-engineered transmission case for tough Indian soil",
      "PAN India direct drop-ship dispatch from KrishiGears Express Network",
      "24-48 hour dispatch with genuine replacement spare parts guarantee"
    ],
    "applications": [
      "Cotton",
      "Sugarcane",
      "Wheat",
      "Paddy"
    ],
    "benefits": [
      "Saves significant manual labour",
      "Reduces operating cost over time",
      "FMTTI-tested durability",
      "Cuts inter-cultivation labor cost by up to 70% in Cotton fields",
      "High-torque de-weeding and soil aeration in Black Cotton Soil",
      "Approved for state agricultural mechanization subsidies across Maharashtra and Madhya Pradesh"
    ],
    "warranty": "12 months manufacturer warranty + KrishiGears after-sales service network.",
    "video": "",
    "hsn": "8432",
    "gst": 12
  },
  {
    "slug": "leo-34586974-6974",
    "category": "power-weeder-spare-parts",
    "name": "KrishiGears 10 INCH HSS Brush Cutter Blades",
    "model": "34586974",
    "brand": "KrishiGears",
    "badges": [
      "Industrial Standard Quality",
      "Commercial Agro Tested",
      "Commercial Grade"
    ],
    "price": 400,
    "comparePrice": 472,
    "images": [
      "/images/catalog/leo-34586974-6974.webp"
    ],
    "specs": {
      "Color": "Silver",
      "Material": "HSS",
      "Usage/Application": "Brush Cutter",
      "Blade Diameter": "10 inch",
      "Number Of Teeth": "80 Teeth",
      "Packaging Type": "Box"
    },
    "features": [
      "Genuine KrishiGears branded product",
      "Backed by manufacturer warranty",
      "PAN India delivery from KrishiGears",
      "Genuine spare parts availability",
      "Genuine KrishiGears commercial agricultural machinery",
      "FMTTI-tested commercial durability standard",
      "Precision-engineered transmission case for tough Indian soil",
      "PAN India direct drop-ship dispatch from KrishiGears Express Network",
      "24-48 hour dispatch with genuine replacement spare parts guarantee"
    ],
    "applications": [
      "Cotton",
      "Sugarcane",
      "Wheat",
      "Paddy"
    ],
    "benefits": [
      "Saves significant manual labour",
      "Reduces operating cost over time",
      "FMTTI-tested durability",
      "Cuts inter-cultivation labor cost by up to 70% in Cotton fields",
      "High-torque de-weeding and soil aeration in Black Cotton Soil",
      "Approved for state agricultural mechanization subsidies across Maharashtra and Madhya Pradesh"
    ],
    "warranty": "12 months manufacturer warranty + KrishiGears after-sales service network.",
    "video": "",
    "hsn": "8432",
    "gst": 12
  },
  {
    "slug": "leo-34586983-6983",
    "category": "power-weeder-spare-parts",
    "name": "KrishiGears 10 INCH Silver 100 T Brush Cutter Blade",
    "model": "34586983",
    "brand": "KrishiGears",
    "badges": [
      "Industrial Standard Quality",
      "Commercial Agro Tested",
      "Commercial Grade"
    ],
    "price": 400,
    "comparePrice": 472,
    "images": [
      "/images/catalog/leo-34586983-6983.webp"
    ],
    "specs": {
      "Usage/Application": "Brush Cutter",
      "Material": "Steel",
      "Color": "Silver",
      "Packaging Type": "Box",
      "Number Of Teeth": "100 Teeth",
      "Blade Diameter": "10 inch"
    },
    "features": [
      "Genuine KrishiGears branded product",
      "Backed by manufacturer warranty",
      "PAN India delivery from KrishiGears",
      "Genuine spare parts availability",
      "Genuine KrishiGears commercial agricultural machinery",
      "FMTTI-tested commercial durability standard",
      "Precision-engineered transmission case for tough Indian soil",
      "PAN India direct drop-ship dispatch from KrishiGears Express Network",
      "24-48 hour dispatch with genuine replacement spare parts guarantee"
    ],
    "applications": [
      "Cotton",
      "Sugarcane",
      "Wheat",
      "Paddy"
    ],
    "benefits": [
      "Saves significant manual labour",
      "Reduces operating cost over time",
      "FMTTI-tested durability",
      "Cuts inter-cultivation labor cost by up to 70% in Cotton fields",
      "High-torque de-weeding and soil aeration in Black Cotton Soil",
      "Approved for state agricultural mechanization subsidies across Maharashtra and Madhya Pradesh"
    ],
    "warranty": "12 months manufacturer warranty + KrishiGears after-sales service network.",
    "video": "",
    "hsn": "8432",
    "gst": 12
  },
  {
    "slug": "leo-34586972-6972",
    "category": "power-weeder-spare-parts",
    "name": "KrishiGears 2 Tooth Brush Cutter Blade",
    "model": "34586972",
    "brand": "KrishiGears",
    "badges": [
      "Industrial Standard Quality",
      "Commercial Agro Tested",
      "Commercial Grade"
    ],
    "price": 300,
    "comparePrice": 354,
    "images": [
      "/images/catalog/leo-34586972-6972.webp"
    ],
    "specs": {
      "Blade type": "3 teeth",
      "Blade diameter": "255 mm",
      "Bore size": "25.4 mm",
      "Size": "10 Inch",
      "Usage/Application": "Brush Cutter",
      "Material": "Steel"
    },
    "features": [
      "Genuine KrishiGears branded product",
      "Backed by manufacturer warranty",
      "PAN India delivery from KrishiGears",
      "Genuine spare parts availability",
      "Genuine KrishiGears commercial agricultural machinery",
      "FMTTI-tested commercial durability standard",
      "Precision-engineered transmission case for tough Indian soil",
      "PAN India direct drop-ship dispatch from KrishiGears Express Network",
      "24-48 hour dispatch with genuine replacement spare parts guarantee"
    ],
    "applications": [
      "Cotton",
      "Sugarcane",
      "Wheat",
      "Paddy"
    ],
    "benefits": [
      "Saves significant manual labour",
      "Reduces operating cost over time",
      "FMTTI-tested durability",
      "Cuts inter-cultivation labor cost by up to 70% in Cotton fields",
      "High-torque de-weeding and soil aeration in Black Cotton Soil",
      "Approved for state agricultural mechanization subsidies across Maharashtra and Madhya Pradesh"
    ],
    "warranty": "12 months manufacturer warranty + KrishiGears after-sales service network.",
    "video": "",
    "hsn": "8432",
    "gst": 12
  },
  {
    "slug": "leo-397-9478",
    "category": "lawn-mowers",
    "name": "KrishiGears Wheel Type Lawn Mower Model- 397",
    "model": "397",
    "brand": "KrishiGears",
    "badges": [
      "Industrial Standard Quality",
      "Commercial Agro Tested",
      "Commercial Grade"
    ],
    "price": 7794,
    "comparePrice": 9197,
    "images": [
      "/images/catalog/leo-397-9478.webp"
    ],
    "specs": {
      "Cutting Width": "14 Inch",
      "Cutting Height": "15 mm",
      "Brand": "KrishiGears",
      "Usage/Application": "Grass Cutting",
      "Structure": "Special Hardened Iron Frame"
    },
    "features": [
      "Genuine KrishiGears branded product",
      "Backed by manufacturer warranty",
      "PAN India delivery from KrishiGears",
      "Genuine spare parts availability",
      "Genuine KrishiGears commercial agricultural machinery",
      "FMTTI-tested commercial durability standard",
      "Precision-engineered transmission case for tough Indian soil",
      "PAN India direct drop-ship dispatch from KrishiGears Express Network",
      "24-48 hour dispatch with genuine replacement spare parts guarantee"
    ],
    "applications": [
      "Cotton",
      "Sugarcane",
      "Wheat",
      "Paddy"
    ],
    "benefits": [
      "Saves significant manual labour",
      "Reduces operating cost over time",
      "FMTTI-tested durability",
      "Cuts inter-cultivation labor cost by up to 70% in Cotton fields",
      "High-torque de-weeding and soil aeration in Black Cotton Soil",
      "Approved for state agricultural mechanization subsidies across Maharashtra and Madhya Pradesh"
    ],
    "warranty": "12 months manufacturer warranty + KrishiGears after-sales service network.",
    "video": "https://www.youtube.com/watch?v=EsLWgk1cdIE",
    "hsn": "8433",
    "gst": 12
  },
  {
    "slug": "leo-391-7692",
    "category": "lawn-mowers",
    "name": "KrishiGears Rotary Lawn Mower Model 391 (5 hp 139 cc)",
    "model": "391",
    "brand": "KrishiGears",
    "badges": [
      "Industrial Standard Quality",
      "Commercial Agro Tested",
      "Commercial Grade"
    ],
    "price": 33846,
    "comparePrice": 39938,
    "images": [
      "/images/catalog/leo-391-7692.webp"
    ],
    "specs": {
      "Cutting Width": "18 Inch",
      "Cutting Height": "50 mm",
      "Forward Speed": "Adjustable",
      "Power": "5 hp 139 cc",
      "Color": "Red"
    },
    "features": [
      "Genuine KrishiGears branded product",
      "Backed by manufacturer warranty",
      "PAN India delivery from KrishiGears",
      "Genuine spare parts availability",
      "Genuine KrishiGears commercial agricultural machinery",
      "FMTTI-tested commercial durability standard",
      "Precision-engineered transmission case for tough Indian soil",
      "PAN India direct drop-ship dispatch from KrishiGears Express Network",
      "24-48 hour dispatch with genuine replacement spare parts guarantee"
    ],
    "applications": [
      "Cotton",
      "Sugarcane",
      "Wheat",
      "Paddy"
    ],
    "benefits": [
      "Saves significant manual labour",
      "Reduces operating cost over time",
      "FMTTI-tested durability",
      "Cuts inter-cultivation labor cost by up to 70% in Cotton fields",
      "High-torque de-weeding and soil aeration in Black Cotton Soil",
      "Approved for state agricultural mechanization subsidies across Maharashtra and Madhya Pradesh"
    ],
    "warranty": "12 months manufacturer warranty + KrishiGears after-sales service network.",
    "video": "https://www.youtube.com/watch?v=EsLWgk1cdIE",
    "hsn": "8433",
    "gst": 12
  },
  {
    "slug": "leo-395-9215",
    "category": "lawn-mowers",
    "name": "KrishiGears Rotary Lawn Mower Model 395 - Petrol",
    "model": "395",
    "brand": "KrishiGears",
    "badges": [
      "Industrial Standard Quality",
      "Commercial Agro Tested",
      "Commercial Grade"
    ],
    "price": 36000,
    "comparePrice": 42480,
    "images": [
      "/images/catalog/leo-395-9215.webp"
    ],
    "specs": {
      "Power Source": "Petrol",
      "Drive Type": "Self Propelled",
      "Cutting Width": "20 Inch",
      "Forward Speed": "Adjustable",
      "Cutting Height": "25 mm",
      "Grass Collector": "With Collector"
    },
    "features": [
      "Genuine KrishiGears branded product",
      "Backed by manufacturer warranty",
      "PAN India delivery from KrishiGears",
      "Genuine spare parts availability",
      "Genuine KrishiGears commercial agricultural machinery",
      "FMTTI-tested commercial durability standard",
      "Precision-engineered transmission case for tough Indian soil",
      "PAN India direct drop-ship dispatch from KrishiGears Express Network",
      "24-48 hour dispatch with genuine replacement spare parts guarantee"
    ],
    "applications": [
      "Cotton",
      "Sugarcane",
      "Wheat",
      "Paddy"
    ],
    "benefits": [
      "Saves significant manual labour",
      "Reduces operating cost over time",
      "FMTTI-tested durability",
      "Cuts inter-cultivation labor cost by up to 70% in Cotton fields",
      "High-torque de-weeding and soil aeration in Black Cotton Soil",
      "Approved for state agricultural mechanization subsidies across Maharashtra and Madhya Pradesh"
    ],
    "warranty": "12 months manufacturer warranty + KrishiGears after-sales service network.",
    "video": "https://www.youtube.com/watch?v=EsLWgk1cdIE",
    "hsn": "8433",
    "gst": 12
  },
  {
    "slug": "leo-zf-6123-4367",
    "category": "lawn-mowers",
    "name": "KrishiGears Rotary Lawn Mower Model ZF - 6123 (1600 W) - Electric",
    "model": "ZF - 6123",
    "brand": "KrishiGears",
    "badges": [
      "Industrial Standard Quality",
      "Commercial Agro Tested",
      "Commercial Grade"
    ],
    "price": 13847,
    "comparePrice": 16339,
    "images": [
      "/images/catalog/leo-zf-6123-4367.webp"
    ],
    "specs": {
      "Power Source": "Electric",
      "Drive Type": "Push",
      "Cutting Width": "380mm",
      "Power": "1600 W",
      "Forward Speed": "Adjustable",
      "Engine Power": "5 HP"
    },
    "features": [
      "Genuine KrishiGears branded product",
      "Backed by manufacturer warranty",
      "PAN India delivery from KrishiGears",
      "Genuine spare parts availability",
      "Genuine KrishiGears commercial agricultural machinery",
      "FMTTI-tested commercial durability standard",
      "Precision-engineered transmission case for tough Indian soil",
      "PAN India direct drop-ship dispatch from KrishiGears Express Network",
      "24-48 hour dispatch with genuine replacement spare parts guarantee"
    ],
    "applications": [
      "Cotton",
      "Sugarcane",
      "Wheat",
      "Paddy"
    ],
    "benefits": [
      "Saves significant manual labour",
      "Reduces operating cost over time",
      "FMTTI-tested durability",
      "Cuts inter-cultivation labor cost by up to 70% in Cotton fields",
      "High-torque de-weeding and soil aeration in Black Cotton Soil",
      "Approved for state agricultural mechanization subsidies across Maharashtra and Madhya Pradesh"
    ],
    "warranty": "12 months manufacturer warranty + KrishiGears after-sales service network.",
    "video": "https://www.youtube.com/watch?v=EsLWgk1cdIE",
    "hsn": "8433",
    "gst": 12
  },
  {
    "slug": "leo-376-8052",
    "category": "lawn-mowers",
    "name": "KrishiGears Rotary Lawn Mower Model 376 (1600 W)",
    "model": "376",
    "brand": "KrishiGears",
    "badges": [
      "Industrial Standard Quality",
      "Commercial Agro Tested",
      "Commercial Grade"
    ],
    "price": 20000,
    "comparePrice": 23600,
    "images": [
      "/images/catalog/leo-376-8052.webp"
    ],
    "specs": {
      "Cutting Width": "14 Inch",
      "Cutting Height": "50 mm",
      "Forward Speed": "Adjustable",
      "Power": "1600 W",
      "Product Code": "0376",
      "Color": "Red"
    },
    "features": [
      "Genuine KrishiGears branded product",
      "Backed by manufacturer warranty",
      "PAN India delivery from KrishiGears",
      "Genuine spare parts availability",
      "Genuine KrishiGears commercial agricultural machinery",
      "FMTTI-tested commercial durability standard",
      "Precision-engineered transmission case for tough Indian soil",
      "PAN India direct drop-ship dispatch from KrishiGears Express Network",
      "24-48 hour dispatch with genuine replacement spare parts guarantee"
    ],
    "applications": [
      "Cotton",
      "Sugarcane",
      "Wheat",
      "Paddy"
    ],
    "benefits": [
      "Saves significant manual labour",
      "Reduces operating cost over time",
      "FMTTI-tested durability",
      "Cuts inter-cultivation labor cost by up to 70% in Cotton fields",
      "High-torque de-weeding and soil aeration in Black Cotton Soil",
      "Approved for state agricultural mechanization subsidies across Maharashtra and Madhya Pradesh"
    ],
    "warranty": "12 months manufacturer warranty + KrishiGears after-sales service network.",
    "video": "https://www.youtube.com/watch?v=EsLWgk1cdIE",
    "hsn": "8433",
    "gst": 12
  },
  {
    "slug": "leo-0382-18-inc-2366",
    "category": "lawn-mowers",
    "name": "KrishiGears Engine Heavy Duty Roller Model 0382 18 INCH Lawn Mower",
    "model": "0382 18 INCH LAWN MOWER",
    "brand": "KrishiGears",
    "badges": [
      "Industrial Standard Quality",
      "Commercial Agro Tested",
      "Commercial Grade"
    ],
    "price": 21000,
    "comparePrice": 24780,
    "images": [
      "/images/catalog/leo-0382-18-inc-2366.webp"
    ],
    "specs": {
      "Cutting Width": "18 Inch",
      "Cutting Height": "25 mm",
      "Forward Speed": "Adjustable",
      "Displacement": "125 CC",
      "Color": "Green",
      "Country of Origin": "Made in India"
    },
    "features": [
      "Genuine KrishiGears branded product",
      "Backed by manufacturer warranty",
      "PAN India delivery from KrishiGears",
      "Genuine spare parts availability",
      "Genuine KrishiGears commercial agricultural machinery",
      "FMTTI-tested commercial durability standard",
      "Precision-engineered transmission case for tough Indian soil",
      "PAN India direct drop-ship dispatch from KrishiGears Express Network",
      "24-48 hour dispatch with genuine replacement spare parts guarantee"
    ],
    "applications": [
      "Cotton",
      "Sugarcane",
      "Wheat",
      "Paddy"
    ],
    "benefits": [
      "Saves significant manual labour",
      "Reduces operating cost over time",
      "FMTTI-tested durability",
      "Cuts inter-cultivation labor cost by up to 70% in Cotton fields",
      "High-torque de-weeding and soil aeration in Black Cotton Soil",
      "Approved for state agricultural mechanization subsidies across Maharashtra and Madhya Pradesh"
    ],
    "warranty": "12 months manufacturer warranty + KrishiGears after-sales service network.",
    "video": "https://www.youtube.com/watch?v=EsLWgk1cdIE",
    "hsn": "8433",
    "gst": 12
  },
  {
    "slug": "leo-376-in-22-in-5239",
    "category": "lawn-mowers",
    "name": "KrishiGears Rotary Lawn Mower Model 376 in 22 inch - Electric",
    "model": "376 in 22 inch",
    "brand": "KrishiGears",
    "badges": [
      "Industrial Standard Quality",
      "Commercial Agro Tested",
      "Commercial Grade"
    ],
    "price": 37693,
    "comparePrice": 44478,
    "images": [
      "/images/catalog/leo-376-in-22-in-5239.webp"
    ],
    "specs": {
      "Power Source": "Electric",
      "Drive Type": "Self Propelled",
      "Cutting Width": "21 Inch",
      "Forward Speed": "Adjustable",
      "Cutting Height": "10 mm",
      "Grass Collector": "Without Collector"
    },
    "features": [
      "Genuine KrishiGears branded product",
      "Backed by manufacturer warranty",
      "PAN India delivery from KrishiGears",
      "Genuine spare parts availability",
      "Genuine KrishiGears commercial agricultural machinery",
      "FMTTI-tested commercial durability standard",
      "Precision-engineered transmission case for tough Indian soil",
      "PAN India direct drop-ship dispatch from KrishiGears Express Network",
      "24-48 hour dispatch with genuine replacement spare parts guarantee"
    ],
    "applications": [
      "Cotton",
      "Sugarcane",
      "Wheat",
      "Paddy"
    ],
    "benefits": [
      "Saves significant manual labour",
      "Reduces operating cost over time",
      "FMTTI-tested durability",
      "Cuts inter-cultivation labor cost by up to 70% in Cotton fields",
      "High-torque de-weeding and soil aeration in Black Cotton Soil",
      "Approved for state agricultural mechanization subsidies across Maharashtra and Madhya Pradesh"
    ],
    "warranty": "12 months manufacturer warranty + KrishiGears after-sales service network.",
    "video": "https://www.youtube.com/watch?v=EsLWgk1cdIE",
    "hsn": "8433",
    "gst": 12
  },
  {
    "slug": "ri-394-8942",
    "category": "lawn-mowers",
    "name": "KrishiGears Rotary Lawn Mower Model 394 , - Petrol",
    "model": "394",
    "brand": "KrishiGears",
    "badges": [
      "Industrial Standard Quality",
      "Commercial Agro Tested",
      "Commercial Grade"
    ],
    "price": 41026,
    "comparePrice": 48411,
    "images": [
      "/images/catalog/ri-394-8942.webp"
    ],
    "specs": {
      "Power Source": "Petrol",
      "Drive Type": "Push",
      "Cutting Width": "21 Inch",
      "Cutting Height": "25-75 mm",
      "Grass Collector": "With Collector",
      "Brand": "KrishiGears"
    },
    "features": [
      "Genuine KrishiGears branded product",
      "Backed by manufacturer warranty",
      "PAN India delivery from KrishiGears",
      "Genuine spare parts availability",
      "Genuine KrishiGears commercial agricultural machinery",
      "FMTTI-tested commercial durability standard",
      "Precision-engineered transmission case for tough Indian soil",
      "PAN India direct drop-ship dispatch from KrishiGears Express Network",
      "24-48 hour dispatch with genuine replacement spare parts guarantee"
    ],
    "applications": [
      "Cotton",
      "Sugarcane",
      "Wheat",
      "Paddy"
    ],
    "benefits": [
      "Saves significant manual labour",
      "Reduces operating cost over time",
      "FMTTI-tested durability",
      "Cuts inter-cultivation labor cost by up to 70% in Cotton fields",
      "High-torque de-weeding and soil aeration in Black Cotton Soil",
      "Approved for state agricultural mechanization subsidies across Maharashtra and Madhya Pradesh"
    ],
    "warranty": "12 months manufacturer warranty + KrishiGears after-sales service network.",
    "video": "https://www.youtube.com/watch?v=EsLWgk1cdIE",
    "hsn": "8433",
    "gst": 12
  },
  {
    "slug": "leo-376-in-17-7094",
    "category": "lawn-mowers",
    "name": "KrishiGears Rotary Lawn Mower Model 376 in 17 (1200 W) - Electric",
    "model": "376 in 17",
    "brand": "KrishiGears",
    "badges": [
      "Industrial Standard Quality",
      "Commercial Agro Tested",
      "Commercial Grade"
    ],
    "price": 26300,
    "comparePrice": 31034,
    "images": [
      "/images/catalog/leo-376-in-17-7094.webp"
    ],
    "specs": {
      "Power Source": "Electric",
      "Drive Type": "Self Propelled",
      "Cutting Width": "18 Inch",
      "Forward Speed": "Adjustable",
      "Power": "1200 W",
      "Engine Power": "2 HP"
    },
    "features": [
      "Genuine KrishiGears branded product",
      "Backed by manufacturer warranty",
      "PAN India delivery from KrishiGears",
      "Genuine spare parts availability",
      "Genuine KrishiGears commercial agricultural machinery",
      "FMTTI-tested commercial durability standard",
      "Precision-engineered transmission case for tough Indian soil",
      "PAN India direct drop-ship dispatch from KrishiGears Express Network",
      "24-48 hour dispatch with genuine replacement spare parts guarantee"
    ],
    "applications": [
      "Cotton",
      "Sugarcane",
      "Wheat",
      "Paddy"
    ],
    "benefits": [
      "Saves significant manual labour",
      "Reduces operating cost over time",
      "FMTTI-tested durability",
      "Cuts inter-cultivation labor cost by up to 70% in Cotton fields",
      "High-torque de-weeding and soil aeration in Black Cotton Soil",
      "Approved for state agricultural mechanization subsidies across Maharashtra and Madhya Pradesh"
    ],
    "warranty": "12 months manufacturer warranty + KrishiGears after-sales service network.",
    "video": "https://www.youtube.com/watch?v=EsLWgk1cdIE",
    "hsn": "8433",
    "gst": 12
  },
  {
    "slug": "leo-0385-8277",
    "category": "lawn-mowers",
    "name": "KrishiGears Power Lawn Mower Model 0385 (50 W)",
    "model": "0385",
    "brand": "KrishiGears",
    "badges": [
      "Industrial Standard Quality",
      "Commercial Agro Tested",
      "Commercial Grade"
    ],
    "price": 20000,
    "comparePrice": 23600,
    "images": [
      "/images/catalog/leo-0385-8277.webp"
    ],
    "specs": {
      "Cutting Width": "6",
      "Cutting Height": "10 mm",
      "Forward Speed": "Adjustable",
      "Power": "50 W",
      "Cutting Capacity": "large capacity",
      "Color": "Green"
    },
    "features": [
      "Genuine KrishiGears branded product",
      "Backed by manufacturer warranty",
      "PAN India delivery from KrishiGears",
      "Genuine spare parts availability",
      "Genuine KrishiGears commercial agricultural machinery",
      "FMTTI-tested commercial durability standard",
      "Precision-engineered transmission case for tough Indian soil",
      "PAN India direct drop-ship dispatch from KrishiGears Express Network",
      "24-48 hour dispatch with genuine replacement spare parts guarantee"
    ],
    "applications": [
      "Cotton",
      "Sugarcane",
      "Wheat",
      "Paddy"
    ],
    "benefits": [
      "Saves significant manual labour",
      "Reduces operating cost over time",
      "FMTTI-tested durability",
      "Cuts inter-cultivation labor cost by up to 70% in Cotton fields",
      "High-torque de-weeding and soil aeration in Black Cotton Soil",
      "Approved for state agricultural mechanization subsidies across Maharashtra and Madhya Pradesh"
    ],
    "warranty": "12 months manufacturer warranty + KrishiGears after-sales service network.",
    "video": "https://www.youtube.com/watch?v=EsLWgk1cdIE",
    "hsn": "8433",
    "gst": 12
  },
  {
    "slug": "ri-332541464-1464",
    "category": "lawn-mowers",
    "name": "KrishiGears Rotary Lawn Mower (7 HP) - Petrol",
    "model": "332541464",
    "brand": "KrishiGears",
    "badges": [
      "Industrial Standard Quality",
      "Commercial Agro Tested",
      "Commercial Grade"
    ],
    "price": 41050,
    "comparePrice": 48439,
    "images": [
      "/images/catalog/ri-332541464-1464.webp"
    ],
    "specs": {
      "Power Source": "Petrol",
      "Cutting Width": "600 mm",
      "Drive Type": "Push",
      "Engine Power": "7 HP",
      "Cutting Height": "25-75 mm",
      "Grass Collector": "With Collector"
    },
    "features": [
      "Genuine KrishiGears branded product",
      "Backed by manufacturer warranty",
      "PAN India delivery from KrishiGears",
      "Genuine spare parts availability",
      "Genuine KrishiGears commercial agricultural machinery",
      "FMTTI-tested commercial durability standard",
      "Precision-engineered transmission case for tough Indian soil",
      "PAN India direct drop-ship dispatch from KrishiGears Express Network",
      "24-48 hour dispatch with genuine replacement spare parts guarantee"
    ],
    "applications": [
      "Cotton",
      "Sugarcane",
      "Wheat",
      "Paddy"
    ],
    "benefits": [
      "Saves significant manual labour",
      "Reduces operating cost over time",
      "FMTTI-tested durability",
      "Cuts inter-cultivation labor cost by up to 70% in Cotton fields",
      "High-torque de-weeding and soil aeration in Black Cotton Soil",
      "Approved for state agricultural mechanization subsidies across Maharashtra and Madhya Pradesh"
    ],
    "warranty": "12 months manufacturer warranty + KrishiGears after-sales service network.",
    "video": "",
    "hsn": "8433",
    "gst": 12
  },
  {
    "slug": "leo-390-7210",
    "category": "lawn-mowers",
    "name": "KrishiGears Rotary Lawn Mower Model 390 (5 HP 139cc)",
    "model": "390",
    "brand": "KrishiGears",
    "badges": [
      "Industrial Standard Quality",
      "Commercial Agro Tested",
      "Commercial Grade"
    ],
    "price": 22308,
    "comparePrice": 26323,
    "images": [
      "/images/catalog/leo-390-7210.webp"
    ],
    "specs": {
      "Cutting Width": "18 Inch",
      "Cutting Height": "25 mm",
      "Power": "5 HP 139cc",
      "Color": "Red"
    },
    "features": [
      "Genuine KrishiGears branded product",
      "Backed by manufacturer warranty",
      "PAN India delivery from KrishiGears",
      "Genuine spare parts availability",
      "Genuine KrishiGears commercial agricultural machinery",
      "FMTTI-tested commercial durability standard",
      "Precision-engineered transmission case for tough Indian soil",
      "PAN India direct drop-ship dispatch from KrishiGears Express Network",
      "24-48 hour dispatch with genuine replacement spare parts guarantee"
    ],
    "applications": [
      "Cotton",
      "Sugarcane",
      "Wheat",
      "Paddy"
    ],
    "benefits": [
      "Saves significant manual labour",
      "Reduces operating cost over time",
      "FMTTI-tested durability",
      "Cuts inter-cultivation labor cost by up to 70% in Cotton fields",
      "High-torque de-weeding and soil aeration in Black Cotton Soil",
      "Approved for state agricultural mechanization subsidies across Maharashtra and Madhya Pradesh"
    ],
    "warranty": "12 months manufacturer warranty + KrishiGears after-sales service network.",
    "video": "https://www.youtube.com/watch?v=EsLWgk1cdIE",
    "hsn": "8433",
    "gst": 12
  },
  {
    "slug": "leo-pro-cut-910-3461",
    "category": "lawn-mowers",
    "name": "KrishiGears 50 mm Model Pro Cut-910 Walk Behind Mowers (2.04 HP)",
    "model": "Pro Cut-910 Walk Behind Mowers",
    "brand": "KrishiGears",
    "badges": [
      "Industrial Standard Quality",
      "Commercial Agro Tested",
      "Commercial Grade"
    ],
    "price": 20000,
    "comparePrice": 23600,
    "images": [
      "/images/catalog/leo-pro-cut-910-3461.webp"
    ],
    "specs": {
      "Cutting Width": "21\"",
      "Cutting Height": "50 mm",
      "Forward Speed": "Adjustable",
      "Cutting Capacity": "0.47\"-2.24\"",
      "Power": "2.04 HP",
      "Weight": "48 KG"
    },
    "features": [
      "Genuine KrishiGears branded product",
      "Backed by manufacturer warranty",
      "PAN India delivery from KrishiGears",
      "Genuine spare parts availability",
      "Genuine KrishiGears commercial agricultural machinery",
      "FMTTI-tested commercial durability standard",
      "Precision-engineered transmission case for tough Indian soil",
      "PAN India direct drop-ship dispatch from KrishiGears Express Network",
      "24-48 hour dispatch with genuine replacement spare parts guarantee"
    ],
    "applications": [
      "Cotton",
      "Sugarcane",
      "Wheat",
      "Paddy"
    ],
    "benefits": [
      "Saves significant manual labour",
      "Reduces operating cost over time",
      "FMTTI-tested durability",
      "Cuts inter-cultivation labor cost by up to 70% in Cotton fields",
      "High-torque de-weeding and soil aeration in Black Cotton Soil",
      "Approved for state agricultural mechanization subsidies across Maharashtra and Madhya Pradesh"
    ],
    "warranty": "12 months manufacturer warranty + KrishiGears after-sales service network.",
    "video": "",
    "hsn": "8433",
    "gst": 12
  },
  {
    "slug": "leo-zf-6127-7076",
    "category": "lawn-mowers",
    "name": "KrishiGears Rotary Lawn Mower Model ZF - 6127 (1600 W)",
    "model": "ZF - 6127",
    "brand": "KrishiGears",
    "badges": [
      "Industrial Standard Quality",
      "Commercial Agro Tested",
      "Commercial Grade"
    ],
    "price": 20000,
    "comparePrice": 23600,
    "images": [
      "/images/catalog/leo-zf-6127-7076.webp"
    ],
    "specs": {
      "Cutting Width": "460mm",
      "Cutting Height": "50 mm",
      "Forward Speed": "Adjustable",
      "Power": "1600 W",
      "Product Code": "6127",
      "Cutting Capacity": "75 MM"
    },
    "features": [
      "Genuine KrishiGears branded product",
      "Backed by manufacturer warranty",
      "PAN India delivery from KrishiGears",
      "Genuine spare parts availability",
      "Genuine KrishiGears commercial agricultural machinery",
      "FMTTI-tested commercial durability standard",
      "Precision-engineered transmission case for tough Indian soil",
      "PAN India direct drop-ship dispatch from KrishiGears Express Network",
      "24-48 hour dispatch with genuine replacement spare parts guarantee"
    ],
    "applications": [
      "Cotton",
      "Sugarcane",
      "Wheat",
      "Paddy"
    ],
    "benefits": [
      "Saves significant manual labour",
      "Reduces operating cost over time",
      "FMTTI-tested durability",
      "Cuts inter-cultivation labor cost by up to 70% in Cotton fields",
      "High-torque de-weeding and soil aeration in Black Cotton Soil",
      "Approved for state agricultural mechanization subsidies across Maharashtra and Madhya Pradesh"
    ],
    "warranty": "12 months manufacturer warranty + KrishiGears after-sales service network.",
    "video": "https://www.youtube.com/watch?v=EsLWgk1cdIE",
    "hsn": "8433",
    "gst": 12
  },
  {
    "slug": "leo-zf-6124-1571",
    "category": "lawn-mowers",
    "name": "KrishiGears Rotary Lawn Mower Model Zf - 6124 (1200 W)",
    "model": "Zf - 6124",
    "brand": "KrishiGears",
    "badges": [
      "Industrial Standard Quality",
      "Commercial Agro Tested",
      "Commercial Grade"
    ],
    "price": 13334,
    "comparePrice": 15734,
    "images": [
      "/images/catalog/leo-zf-6124-1571.webp"
    ],
    "specs": {
      "Cutting Width": "320mm",
      "Cutting Height": "25 mm",
      "Forward Speed": "Adjustable",
      "Power": "1200 W",
      "Product Code": "6122",
      "Cutting Capacity": "3 Height Poastion 25/40/55mm"
    },
    "features": [
      "Genuine KrishiGears branded product",
      "Backed by manufacturer warranty",
      "PAN India delivery from KrishiGears",
      "Genuine spare parts availability",
      "Genuine KrishiGears commercial agricultural machinery",
      "FMTTI-tested commercial durability standard",
      "Precision-engineered transmission case for tough Indian soil",
      "PAN India direct drop-ship dispatch from KrishiGears Express Network",
      "24-48 hour dispatch with genuine replacement spare parts guarantee"
    ],
    "applications": [
      "Cotton",
      "Sugarcane",
      "Wheat",
      "Paddy"
    ],
    "benefits": [
      "Saves significant manual labour",
      "Reduces operating cost over time",
      "FMTTI-tested durability",
      "Cuts inter-cultivation labor cost by up to 70% in Cotton fields",
      "High-torque de-weeding and soil aeration in Black Cotton Soil",
      "Approved for state agricultural mechanization subsidies across Maharashtra and Madhya Pradesh"
    ],
    "warranty": "12 months manufacturer warranty + KrishiGears after-sales service network.",
    "video": "https://www.youtube.com/watch?v=EsLWgk1cdIE",
    "hsn": "8433",
    "gst": 12
  },
  {
    "slug": "ri-bkr-ri-1800-3962",
    "category": "lawn-mowers",
    "name": "KrishiGears Rotary Lawn Mower Model - 396 (1800 W)",
    "model": "BKR-RI-1800",
    "brand": "KrishiGears",
    "badges": [
      "Industrial Standard Quality",
      "Commercial Agro Tested",
      "Commercial Grade"
    ],
    "price": 25000,
    "comparePrice": 29500,
    "images": [
      "/images/catalog/ri-bkr-ri-1800-3962.webp"
    ],
    "specs": {
      "Cutting Width": "18 Inch",
      "Voltage": "240 V",
      "Model": "BKR-RI-1800",
      "Brand": "KrishiGears",
      "Cutting Height": "75mm",
      "Power": "1800 W"
    },
    "features": [
      "Genuine KrishiGears branded product",
      "Backed by manufacturer warranty",
      "PAN India delivery from KrishiGears",
      "Genuine spare parts availability",
      "Genuine KrishiGears commercial agricultural machinery",
      "FMTTI-tested commercial durability standard",
      "Precision-engineered transmission case for tough Indian soil",
      "PAN India direct drop-ship dispatch from KrishiGears Express Network",
      "24-48 hour dispatch with genuine replacement spare parts guarantee"
    ],
    "applications": [
      "Cotton",
      "Sugarcane",
      "Wheat",
      "Paddy"
    ],
    "benefits": [
      "Saves significant manual labour",
      "Reduces operating cost over time",
      "FMTTI-tested durability",
      "Cuts inter-cultivation labor cost by up to 70% in Cotton fields",
      "High-torque de-weeding and soil aeration in Black Cotton Soil",
      "Approved for state agricultural mechanization subsidies across Maharashtra and Madhya Pradesh"
    ],
    "warranty": "12 months manufacturer warranty + KrishiGears after-sales service network.",
    "video": "https://www.youtube.com/watch?v=EsLWgk1cdIE",
    "hsn": "8433",
    "gst": 12
  },
  {
    "slug": "leo-pro-cut-910-8493",
    "category": "lawn-mowers",
    "name": "KrishiGears 14 Inch Model Pro Cut-910 Walk Behind Lawn Mowers (2.1 hp)",
    "model": "Pro Cut-910 Walk Behind Lawn Mowers",
    "brand": "KrishiGears",
    "badges": [
      "Industrial Standard Quality",
      "Commercial Agro Tested",
      "Commercial Grade"
    ],
    "price": 21000,
    "comparePrice": 24780,
    "images": [
      "/images/catalog/leo-pro-cut-910-8493.webp"
    ],
    "specs": {
      "Cutting Width": "14 Inch",
      "Cutting Height": "50 mm",
      "Forward Speed": "Adjustable",
      "Power": "2.1 hp",
      "Weight": "25kg",
      "Color": "Red"
    },
    "features": [
      "Genuine KrishiGears branded product",
      "Backed by manufacturer warranty",
      "PAN India delivery from KrishiGears",
      "Genuine spare parts availability",
      "Genuine KrishiGears commercial agricultural machinery",
      "FMTTI-tested commercial durability standard",
      "Precision-engineered transmission case for tough Indian soil",
      "PAN India direct drop-ship dispatch from KrishiGears Express Network",
      "24-48 hour dispatch with genuine replacement spare parts guarantee"
    ],
    "applications": [
      "Cotton",
      "Sugarcane",
      "Wheat",
      "Paddy"
    ],
    "benefits": [
      "Saves significant manual labour",
      "Reduces operating cost over time",
      "FMTTI-tested durability",
      "Cuts inter-cultivation labor cost by up to 70% in Cotton fields",
      "High-torque de-weeding and soil aeration in Black Cotton Soil",
      "Approved for state agricultural mechanization subsidies across Maharashtra and Madhya Pradesh"
    ],
    "warranty": "12 months manufacturer warranty + KrishiGears after-sales service network.",
    "video": "",
    "hsn": "8433",
    "gst": 12
  },
  {
    "slug": "ri-332551977-1977",
    "category": "lawn-mowers",
    "name": "KrishiGears 45cm 10mm Manual Cutting Lawn Mower (1 HP)",
    "model": "332551977",
    "brand": "KrishiGears",
    "badges": [
      "Industrial Standard Quality",
      "Commercial Agro Tested",
      "Commercial Grade"
    ],
    "price": 3800,
    "comparePrice": 4484,
    "images": [
      "/images/catalog/ri-332551977-1977.webp"
    ],
    "specs": {
      "Power Source": "Manual",
      "Cutting Width": "400 mm",
      "Drive Type": "Push",
      "Engine Power": "1 HP",
      "Cutting Height": "20-60 mm",
      "Grass Collector": "With Collector"
    },
    "features": [
      "Genuine KrishiGears branded product",
      "Backed by manufacturer warranty",
      "PAN India delivery from KrishiGears",
      "Genuine spare parts availability",
      "Genuine KrishiGears commercial agricultural machinery",
      "FMTTI-tested commercial durability standard",
      "Precision-engineered transmission case for tough Indian soil",
      "PAN India direct drop-ship dispatch from KrishiGears Express Network",
      "24-48 hour dispatch with genuine replacement spare parts guarantee"
    ],
    "applications": [
      "Cotton",
      "Sugarcane",
      "Wheat",
      "Paddy"
    ],
    "benefits": [
      "Saves significant manual labour",
      "Reduces operating cost over time",
      "FMTTI-tested durability",
      "Cuts inter-cultivation labor cost by up to 70% in Cotton fields",
      "High-torque de-weeding and soil aeration in Black Cotton Soil",
      "Approved for state agricultural mechanization subsidies across Maharashtra and Madhya Pradesh"
    ],
    "warranty": "12 months manufacturer warranty + KrishiGears after-sales service network.",
    "video": "",
    "hsn": "8433",
    "gst": 12
  },
  {
    "slug": "leo-model-rover-9908",
    "category": "lawn-mowers",
    "name": "KrishiGears Rover- Model- 850 SP Walk Behind Lawn Mowers",
    "model": "Model Rover-850 SP",
    "brand": "KrishiGears",
    "badges": [
      "Industrial Standard Quality",
      "Commercial Agro Tested",
      "Commercial Grade"
    ],
    "price": 21000,
    "comparePrice": 24780,
    "images": [
      "/images/catalog/leo-model-rover-9908.webp"
    ],
    "specs": {
      "Cutting Width": "20 Inch",
      "Cutting Height": "10 mm",
      "Forward Speed": "Adjustable",
      "Displacement": "159CC Petrol",
      "Model": "Model Rover-850 SP",
      "Color": "Red"
    },
    "features": [
      "Genuine KrishiGears branded product",
      "Backed by manufacturer warranty",
      "PAN India delivery from KrishiGears",
      "Genuine spare parts availability",
      "Genuine KrishiGears commercial agricultural machinery",
      "FMTTI-tested commercial durability standard",
      "Precision-engineered transmission case for tough Indian soil",
      "PAN India direct drop-ship dispatch from KrishiGears Express Network",
      "24-48 hour dispatch with genuine replacement spare parts guarantee"
    ],
    "applications": [
      "Cotton",
      "Sugarcane",
      "Wheat",
      "Paddy"
    ],
    "benefits": [
      "Saves significant manual labour",
      "Reduces operating cost over time",
      "FMTTI-tested durability",
      "Cuts inter-cultivation labor cost by up to 70% in Cotton fields",
      "High-torque de-weeding and soil aeration in Black Cotton Soil",
      "Approved for state agricultural mechanization subsidies across Maharashtra and Madhya Pradesh"
    ],
    "warranty": "12 months manufacturer warranty + KrishiGears after-sales service network.",
    "video": "",
    "hsn": "8433",
    "gst": 12
  },
  {
    "slug": "ri-376-in-17-2952",
    "category": "lawn-mowers",
    "name": "KrishiGears Rotary Lawn Mower Model 376 in 17 (2 HP) - Electric",
    "model": "376 in 17",
    "brand": "KrishiGears",
    "badges": [
      "Industrial Standard Quality",
      "Commercial Agro Tested",
      "Commercial Grade"
    ],
    "price": 26500,
    "comparePrice": 31270,
    "images": [
      "/images/catalog/ri-376-in-17-2952.webp"
    ],
    "specs": {
      "Power Source": "Electric",
      "Cutting Width": "330 mm",
      "Drive Type": "Push",
      "Engine Power": "2 HP",
      "Cutting Height": "30-100 mm",
      "Grass Collector": "With Collector"
    },
    "features": [
      "Genuine KrishiGears branded product",
      "Backed by manufacturer warranty",
      "PAN India delivery from KrishiGears",
      "Genuine spare parts availability",
      "Genuine KrishiGears commercial agricultural machinery",
      "FMTTI-tested commercial durability standard",
      "Precision-engineered transmission case for tough Indian soil",
      "PAN India direct drop-ship dispatch from KrishiGears Express Network",
      "24-48 hour dispatch with genuine replacement spare parts guarantee"
    ],
    "applications": [
      "Cotton",
      "Sugarcane",
      "Wheat",
      "Paddy"
    ],
    "benefits": [
      "Saves significant manual labour",
      "Reduces operating cost over time",
      "FMTTI-tested durability",
      "Cuts inter-cultivation labor cost by up to 70% in Cotton fields",
      "High-torque de-weeding and soil aeration in Black Cotton Soil",
      "Approved for state agricultural mechanization subsidies across Maharashtra and Madhya Pradesh"
    ],
    "warranty": "12 months manufacturer warranty + KrishiGears after-sales service network.",
    "video": "",
    "hsn": "8433",
    "gst": 12
  },
  {
    "slug": "ri-376-in-22-in-6681",
    "category": "lawn-mowers",
    "name": "KrishiGears Rotary Lawn Mower Model 376 in 22 inch (3 HP) - Electric",
    "model": "376 in 22 inch",
    "brand": "KrishiGears",
    "badges": [
      "Industrial Standard Quality",
      "Commercial Agro Tested",
      "Commercial Grade"
    ],
    "price": 37700,
    "comparePrice": 44486,
    "images": [
      "/images/catalog/ri-376-in-22-in-6681.webp"
    ],
    "specs": {
      "Power Source": "Electric",
      "Cutting Width": "400 mm",
      "Drive Type": "Self Propelled",
      "Engine Power": "3 HP",
      "Cutting Height": "20-60 mm",
      "Grass Collector": "With Collector"
    },
    "features": [
      "Genuine KrishiGears branded product",
      "Backed by manufacturer warranty",
      "PAN India delivery from KrishiGears",
      "Genuine spare parts availability",
      "Genuine KrishiGears commercial agricultural machinery",
      "FMTTI-tested commercial durability standard",
      "Precision-engineered transmission case for tough Indian soil",
      "PAN India direct drop-ship dispatch from KrishiGears Express Network",
      "24-48 hour dispatch with genuine replacement spare parts guarantee"
    ],
    "applications": [
      "Cotton",
      "Sugarcane",
      "Wheat",
      "Paddy"
    ],
    "benefits": [
      "Saves significant manual labour",
      "Reduces operating cost over time",
      "FMTTI-tested durability",
      "Cuts inter-cultivation labor cost by up to 70% in Cotton fields",
      "High-torque de-weeding and soil aeration in Black Cotton Soil",
      "Approved for state agricultural mechanization subsidies across Maharashtra and Madhya Pradesh"
    ],
    "warranty": "12 months manufacturer warranty + KrishiGears after-sales service network.",
    "video": "",
    "hsn": "8433",
    "gst": 12
  },
  {
    "slug": "ri-392-7363",
    "category": "lawn-mowers",
    "name": "KrishiGears Rotary Lawn Mower Model 392 (7 HP) - Petrol",
    "model": "392",
    "brand": "KrishiGears",
    "badges": [
      "Industrial Standard Quality",
      "Commercial Agro Tested",
      "Commercial Grade"
    ],
    "price": 28500,
    "comparePrice": 33630,
    "images": [
      "/images/catalog/ri-392-7363.webp"
    ],
    "specs": {
      "Power Source": "Petrol",
      "Cutting Width": "500 mm",
      "Drive Type": "Push",
      "Engine Power": "7 HP",
      "Cutting Height": "20-60 mm",
      "Grass Collector": "With Collector"
    },
    "features": [
      "Genuine KrishiGears branded product",
      "Backed by manufacturer warranty",
      "PAN India delivery from KrishiGears",
      "Genuine spare parts availability",
      "Genuine KrishiGears commercial agricultural machinery",
      "FMTTI-tested commercial durability standard",
      "Precision-engineered transmission case for tough Indian soil",
      "PAN India direct drop-ship dispatch from KrishiGears Express Network",
      "24-48 hour dispatch with genuine replacement spare parts guarantee"
    ],
    "applications": [
      "Cotton",
      "Sugarcane",
      "Wheat",
      "Paddy"
    ],
    "benefits": [
      "Saves significant manual labour",
      "Reduces operating cost over time",
      "FMTTI-tested durability",
      "Cuts inter-cultivation labor cost by up to 70% in Cotton fields",
      "High-torque de-weeding and soil aeration in Black Cotton Soil",
      "Approved for state agricultural mechanization subsidies across Maharashtra and Madhya Pradesh"
    ],
    "warranty": "12 months manufacturer warranty + KrishiGears after-sales service network.",
    "video": "",
    "hsn": "8433",
    "gst": 12
  },
  {
    "slug": "leo-0381-5052",
    "category": "lawn-mowers",
    "name": "KrishiGears Diesel Ride On Lawn Mower Model - 0381 (5 HP)",
    "model": "0381",
    "brand": "KrishiGears",
    "badges": [
      "Industrial Standard Quality",
      "Commercial Agro Tested",
      "Commercial Grade"
    ],
    "price": 71500,
    "comparePrice": 84370,
    "images": [
      "/images/catalog/leo-0381-5052.webp"
    ],
    "specs": {
      "Drive Type": "Ride On",
      "Engine Power": "5 HP",
      "Cutting Width": "20 Inch",
      "Forward Speed": "Adjustable",
      "Starting System": "Recoil Start",
      "Cutting Height": "50 mm"
    },
    "features": [
      "Genuine KrishiGears branded product",
      "Backed by manufacturer warranty",
      "PAN India delivery from KrishiGears",
      "Genuine spare parts availability",
      "Genuine KrishiGears commercial agricultural machinery",
      "FMTTI-tested commercial durability standard",
      "Precision-engineered transmission case for tough Indian soil",
      "PAN India direct drop-ship dispatch from KrishiGears Express Network",
      "24-48 hour dispatch with genuine replacement spare parts guarantee"
    ],
    "applications": [
      "Cotton",
      "Sugarcane",
      "Wheat",
      "Paddy"
    ],
    "benefits": [
      "Saves significant manual labour",
      "Reduces operating cost over time",
      "FMTTI-tested durability",
      "Cuts inter-cultivation labor cost by up to 70% in Cotton fields",
      "High-torque de-weeding and soil aeration in Black Cotton Soil",
      "Approved for state agricultural mechanization subsidies across Maharashtra and Madhya Pradesh"
    ],
    "warranty": "12 months manufacturer warranty + KrishiGears after-sales service network.",
    "video": "https://www.youtube.com/watch?v=EsLWgk1cdIE",
    "hsn": "8433",
    "gst": 12
  },
  {
    "slug": "leo-386-9195",
    "category": "lawn-mowers",
    "name": "KrishiGears Roller Type Petrol Lawn Mower Model - 386",
    "model": "386",
    "brand": "KrishiGears",
    "badges": [
      "Industrial Standard Quality",
      "Commercial Agro Tested",
      "Commercial Grade"
    ],
    "price": 42000,
    "comparePrice": 49560,
    "images": [
      "/images/catalog/leo-386-9195.webp"
    ],
    "specs": {
      "Cutting Width": "41 cm",
      "Displacement": "125 CC",
      "Forward Speed": "Adjustable",
      "Cutting Height": "70 mm",
      "Brand": "KrishiGears",
      "Weight": "26 kg"
    },
    "features": [
      "Genuine KrishiGears branded product",
      "Backed by manufacturer warranty",
      "PAN India delivery from KrishiGears",
      "Genuine spare parts availability",
      "Genuine KrishiGears commercial agricultural machinery",
      "FMTTI-tested commercial durability standard",
      "Precision-engineered transmission case for tough Indian soil",
      "PAN India direct drop-ship dispatch from KrishiGears Express Network",
      "24-48 hour dispatch with genuine replacement spare parts guarantee"
    ],
    "applications": [
      "Cotton",
      "Sugarcane",
      "Wheat",
      "Paddy"
    ],
    "benefits": [
      "Saves significant manual labour",
      "Reduces operating cost over time",
      "FMTTI-tested durability",
      "Cuts inter-cultivation labor cost by up to 70% in Cotton fields",
      "High-torque de-weeding and soil aeration in Black Cotton Soil",
      "Approved for state agricultural mechanization subsidies across Maharashtra and Madhya Pradesh"
    ],
    "warranty": "12 months manufacturer warranty + KrishiGears after-sales service network.",
    "video": "https://www.youtube.com/watch?v=EsLWgk1cdIE",
    "hsn": "8433",
    "gst": 12
  },
  {
    "slug": "leo-20402307-2307",
    "category": "farm-machinery",
    "name": "KrishiGears Garden Roller",
    "model": "20402307",
    "brand": "KrishiGears",
    "badges": [
      "Industrial Standard Quality",
      "Commercial Agro Tested",
      "Commercial Grade"
    ],
    "price": 29500,
    "comparePrice": 34810,
    "images": [
      "/images/catalog/leo-20402307-2307.webp"
    ],
    "specs": {
      "Roller Width": "24 inch",
      "Drum Capacity": "150 kg",
      "Operation": "Tow behind",
      "Drum Material": "Heavy-duty steel or poly drum",
      "Filling Type": "Water filled",
      "Handle Type": "Fixed handle"
    },
    "features": [
      "Genuine KrishiGears branded product",
      "Backed by manufacturer warranty",
      "PAN India delivery from KrishiGears",
      "Genuine spare parts availability",
      "Genuine KrishiGears commercial agricultural machinery",
      "FMTTI-tested commercial durability standard",
      "Precision-engineered transmission case for tough Indian soil",
      "PAN India direct drop-ship dispatch from KrishiGears Express Network",
      "24-48 hour dispatch with genuine replacement spare parts guarantee"
    ],
    "applications": [
      "Cotton",
      "Sugarcane",
      "Wheat",
      "Paddy"
    ],
    "benefits": [
      "Saves significant manual labour",
      "Reduces operating cost over time",
      "FMTTI-tested durability",
      "Cuts inter-cultivation labor cost by up to 70% in Cotton fields",
      "High-torque de-weeding and soil aeration in Black Cotton Soil",
      "Approved for state agricultural mechanization subsidies across Maharashtra and Madhya Pradesh"
    ],
    "warranty": "12 months manufacturer warranty + KrishiGears after-sales service network.",
    "video": "https://www.youtube.com/watch?v=EsLWgk1cdIE",
    "hsn": "8433",
    "gst": 12
  },
  {
    "slug": "leo-382-8975",
    "category": "lawn-mowers",
    "name": "KrishiGears Roller Type Petrol Lawn Mower Model - 382 (50 W)",
    "model": "382",
    "brand": "KrishiGears",
    "badges": [
      "Industrial Standard Quality",
      "Commercial Agro Tested",
      "Commercial Grade"
    ],
    "price": 26950,
    "comparePrice": 31801,
    "images": [
      "/images/catalog/leo-382-8975.webp"
    ],
    "specs": {
      "Cutting Width": "24 Inch",
      "Cutting Height": "25 mm",
      "Power": "50 W",
      "Forward Speed": "Adjustable",
      "Product Code": "0382",
      "Cutting Capacity": "24inch"
    },
    "features": [
      "Genuine KrishiGears branded product",
      "Backed by manufacturer warranty",
      "PAN India delivery from KrishiGears",
      "Genuine spare parts availability",
      "Genuine KrishiGears commercial agricultural machinery",
      "FMTTI-tested commercial durability standard",
      "Precision-engineered transmission case for tough Indian soil",
      "PAN India direct drop-ship dispatch from KrishiGears Express Network",
      "24-48 hour dispatch with genuine replacement spare parts guarantee"
    ],
    "applications": [
      "Cotton",
      "Sugarcane",
      "Wheat",
      "Paddy"
    ],
    "benefits": [
      "Saves significant manual labour",
      "Reduces operating cost over time",
      "FMTTI-tested durability",
      "Cuts inter-cultivation labor cost by up to 70% in Cotton fields",
      "High-torque de-weeding and soil aeration in Black Cotton Soil",
      "Approved for state agricultural mechanization subsidies across Maharashtra and Madhya Pradesh"
    ],
    "warranty": "12 months manufacturer warranty + KrishiGears after-sales service network.",
    "video": "https://www.youtube.com/watch?v=EsLWgk1cdIE",
    "hsn": "8433",
    "gst": 12
  },
  {
    "slug": "leo-258558586-8586",
    "category": "lawn-mowers",
    "name": "KrishiGears Cub Cadet - Lx46 Fab Lawn Mower (20 HP)",
    "model": "258558586",
    "brand": "KrishiGears",
    "badges": [
      "Industrial Standard Quality",
      "Commercial Agro Tested",
      "Commercial Grade"
    ],
    "price": 342000,
    "comparePrice": 403560,
    "images": [
      "/images/catalog/leo-258558586-8586.webp"
    ],
    "specs": {
      "Engine Power": "20 HP",
      "Cutting Width": "46 inch",
      "Transmission": "Hydrostatic",
      "Forward Speed": "Adjustable",
      "Fuel Type": "Petrol",
      "Cutting Height": "25 mm"
    },
    "features": [
      "Genuine KrishiGears branded product",
      "Backed by manufacturer warranty",
      "PAN India delivery from KrishiGears",
      "Genuine spare parts availability",
      "Genuine KrishiGears commercial agricultural machinery",
      "FMTTI-tested commercial durability standard",
      "Precision-engineered transmission case for tough Indian soil",
      "PAN India direct drop-ship dispatch from KrishiGears Express Network",
      "24-48 hour dispatch with genuine replacement spare parts guarantee"
    ],
    "applications": [
      "Cotton",
      "Sugarcane",
      "Wheat",
      "Paddy"
    ],
    "benefits": [
      "Saves significant manual labour",
      "Reduces operating cost over time",
      "FMTTI-tested durability",
      "Cuts inter-cultivation labor cost by up to 70% in Cotton fields",
      "High-torque de-weeding and soil aeration in Black Cotton Soil",
      "Approved for state agricultural mechanization subsidies across Maharashtra and Madhya Pradesh"
    ],
    "warranty": "12 months manufacturer warranty + KrishiGears after-sales service network.",
    "video": "",
    "hsn": "8433",
    "gst": 12
  },
  {
    "slug": "leo-0381-9107",
    "category": "lawn-mowers",
    "name": "KrishiGears Roller Type Diesel Lawn Mower Model - 0381 (15 HP)",
    "model": "0381",
    "brand": "KrishiGears",
    "badges": [
      "Industrial Standard Quality",
      "Commercial Agro Tested",
      "Commercial Grade"
    ],
    "price": 118975,
    "comparePrice": 140390,
    "images": [
      "/images/catalog/leo-0381-9107.webp"
    ],
    "specs": {
      "Cutting Width": "20 Inch",
      "Power": "15 HP",
      "Brand": "KrishiGears",
      "Usage/Application": "Grass Cutting",
      "Model No": "0381",
      "Structure": "5mm Heavy Steel Frame For Long Life Of Machine"
    },
    "features": [
      "Genuine KrishiGears branded product",
      "Backed by manufacturer warranty",
      "PAN India delivery from KrishiGears",
      "Genuine spare parts availability",
      "Genuine KrishiGears commercial agricultural machinery",
      "FMTTI-tested commercial durability standard",
      "Precision-engineered transmission case for tough Indian soil",
      "PAN India direct drop-ship dispatch from KrishiGears Express Network",
      "24-48 hour dispatch with genuine replacement spare parts guarantee"
    ],
    "applications": [
      "Cotton",
      "Sugarcane",
      "Wheat",
      "Paddy"
    ],
    "benefits": [
      "Saves significant manual labour",
      "Reduces operating cost over time",
      "FMTTI-tested durability",
      "Cuts inter-cultivation labor cost by up to 70% in Cotton fields",
      "High-torque de-weeding and soil aeration in Black Cotton Soil",
      "Approved for state agricultural mechanization subsidies across Maharashtra and Madhya Pradesh"
    ],
    "warranty": "12 months manufacturer warranty + KrishiGears after-sales service network.",
    "video": "https://www.youtube.com/watch?v=EsLWgk1cdIE",
    "hsn": "8433",
    "gst": 12
  },
  {
    "slug": "leo-model-pro-cu-0732",
    "category": "lawn-mowers",
    "name": "KrishiGears 18 Inch Model Pro Cut-720 Walk Behind Mowers",
    "model": "Model Pro Cut-720",
    "brand": "KrishiGears",
    "badges": [
      "Industrial Standard Quality",
      "Commercial Agro Tested",
      "Commercial Grade"
    ],
    "price": 20000,
    "comparePrice": 23600,
    "images": [
      "/images/catalog/leo-model-pro-cu-0732.webp"
    ],
    "specs": {
      "Cutting Width": "18 Inch",
      "Displacement": "173cc Petrol",
      "Model": "Model Pro Cut-720",
      "Forward Speed": "Adjustable",
      "Cutting Height": "10 mm",
      "Color": "Red"
    },
    "features": [
      "Genuine KrishiGears branded product",
      "Backed by manufacturer warranty",
      "PAN India delivery from KrishiGears",
      "Genuine spare parts availability",
      "Genuine KrishiGears commercial agricultural machinery",
      "FMTTI-tested commercial durability standard",
      "Precision-engineered transmission case for tough Indian soil",
      "PAN India direct drop-ship dispatch from KrishiGears Express Network",
      "24-48 hour dispatch with genuine replacement spare parts guarantee"
    ],
    "applications": [
      "Cotton",
      "Sugarcane",
      "Wheat",
      "Paddy"
    ],
    "benefits": [
      "Saves significant manual labour",
      "Reduces operating cost over time",
      "FMTTI-tested durability",
      "Cuts inter-cultivation labor cost by up to 70% in Cotton fields",
      "High-torque de-weeding and soil aeration in Black Cotton Soil",
      "Approved for state agricultural mechanization subsidies across Maharashtra and Madhya Pradesh"
    ],
    "warranty": "12 months manufacturer warranty + KrishiGears after-sales service network.",
    "video": "",
    "hsn": "8433",
    "gst": 12
  },
  {
    "slug": "leo-296052269-2269",
    "category": "brush-cutters",
    "name": "KrishiGears Wheel String Trimmer (1.0 kW) - Petrol",
    "model": "296052269",
    "brand": "KrishiGears",
    "badges": [
      "Industrial Standard Quality",
      "Commercial Agro Tested",
      "Commercial Grade"
    ],
    "price": 22500,
    "comparePrice": 26550,
    "images": [
      "/images/catalog/leo-296052269-2269.webp"
    ],
    "specs": {
      "Power Source": "Petrol",
      "Power Output": "1.0 kW",
      "Cutting Width": "380 mm",
      "Line Diameter": "2.4 mm",
      "Shaft Type": "Straight Shaft",
      "Handle Type": "Loop Handle"
    },
    "features": [
      "Genuine KrishiGears branded product",
      "Backed by manufacturer warranty",
      "PAN India delivery from KrishiGears",
      "Genuine spare parts availability",
      "Genuine KrishiGears commercial agricultural machinery",
      "FMTTI-tested commercial durability standard",
      "Precision-engineered transmission case for tough Indian soil",
      "PAN India direct drop-ship dispatch from KrishiGears Express Network",
      "24-48 hour dispatch with genuine replacement spare parts guarantee"
    ],
    "applications": [
      "Cotton",
      "Sugarcane",
      "Wheat",
      "Paddy"
    ],
    "benefits": [
      "Saves significant manual labour",
      "Reduces operating cost over time",
      "FMTTI-tested durability",
      "Cuts inter-cultivation labor cost by up to 70% in Cotton fields",
      "High-torque de-weeding and soil aeration in Black Cotton Soil",
      "Approved for state agricultural mechanization subsidies across Maharashtra and Madhya Pradesh"
    ],
    "warranty": "12 months manufacturer warranty + KrishiGears after-sales service network.",
    "video": "https://www.youtube.com/watch?v=EsLWgk1cdIE",
    "hsn": "8433",
    "gst": 12
  },
  {
    "slug": "leo-297386313-6313",
    "category": "lawn-mowers",
    "name": "KrishiGears Rotary Mower Self Propelled 225cc",
    "model": "297386313",
    "brand": "KrishiGears",
    "badges": [
      "Industrial Standard Quality",
      "Commercial Agro Tested",
      "Commercial Grade"
    ],
    "price": 58461,
    "comparePrice": 68984,
    "images": [
      "/images/catalog/leo-297386313-6313.webp"
    ],
    "specs": {
      "Cutting Width": "21 Inch",
      "Forward Speed": "Adjustable"
    },
    "features": [
      "Genuine KrishiGears branded product",
      "Backed by manufacturer warranty",
      "PAN India delivery from KrishiGears",
      "Genuine spare parts availability",
      "Genuine KrishiGears commercial agricultural machinery",
      "FMTTI-tested commercial durability standard",
      "Precision-engineered transmission case for tough Indian soil",
      "PAN India direct drop-ship dispatch from KrishiGears Express Network",
      "24-48 hour dispatch with genuine replacement spare parts guarantee"
    ],
    "applications": [
      "Cotton",
      "Sugarcane",
      "Wheat",
      "Paddy"
    ],
    "benefits": [
      "Saves significant manual labour",
      "Reduces operating cost over time",
      "FMTTI-tested durability",
      "Cuts inter-cultivation labor cost by up to 70% in Cotton fields",
      "High-torque de-weeding and soil aeration in Black Cotton Soil",
      "Approved for state agricultural mechanization subsidies across Maharashtra and Madhya Pradesh"
    ],
    "warranty": "12 months manufacturer warranty + KrishiGears after-sales service network.",
    "video": "https://www.youtube.com/watch?v=EsLWgk1cdIE",
    "hsn": "8433",
    "gst": 12
  },
  {
    "slug": "leo-0381-2663",
    "category": "lawn-mowers",
    "name": "KrishiGears Roller Type Diesel Lawn Mower Model - 0381 (20 HP)",
    "model": "0381",
    "brand": "KrishiGears",
    "badges": [
      "Industrial Standard Quality",
      "Commercial Agro Tested",
      "Commercial Grade"
    ],
    "price": 65000,
    "comparePrice": 76700,
    "images": [
      "/images/catalog/leo-0381-2663.webp"
    ],
    "specs": {
      "Cutting Width": "12 Inch",
      "Power": "20 HP",
      "Usage/Application": "Grass Cutting",
      "Bottom Blade": "Steel",
      "No of Stroke": "4 Stroke",
      "Fuel Tank Capacity": "5 Ltr"
    },
    "features": [
      "Genuine KrishiGears branded product",
      "Backed by manufacturer warranty",
      "PAN India delivery from KrishiGears",
      "Genuine spare parts availability",
      "Genuine KrishiGears commercial agricultural machinery",
      "FMTTI-tested commercial durability standard",
      "Precision-engineered transmission case for tough Indian soil",
      "PAN India direct drop-ship dispatch from KrishiGears Express Network",
      "24-48 hour dispatch with genuine replacement spare parts guarantee"
    ],
    "applications": [
      "Cotton",
      "Sugarcane",
      "Wheat",
      "Paddy"
    ],
    "benefits": [
      "Saves significant manual labour",
      "Reduces operating cost over time",
      "FMTTI-tested durability",
      "Cuts inter-cultivation labor cost by up to 70% in Cotton fields",
      "High-torque de-weeding and soil aeration in Black Cotton Soil",
      "Approved for state agricultural mechanization subsidies across Maharashtra and Madhya Pradesh"
    ],
    "warranty": "12 months manufacturer warranty + KrishiGears after-sales service network.",
    "video": "https://www.youtube.com/watch?v=EsLWgk1cdIE",
    "hsn": "8433",
    "gst": 12
  },
  {
    "slug": "leo-pro-cut-950-4145",
    "category": "lawn-mowers",
    "name": "KrishiGears 15 Mm Model Pro Cut-950 Walk Bihind Mowers (2.24 HP)",
    "model": "Pro Cut-950 Walk Bihind Mowers",
    "brand": "KrishiGears",
    "badges": [
      "Industrial Standard Quality",
      "Commercial Agro Tested",
      "Commercial Grade"
    ],
    "price": 21000,
    "comparePrice": 24780,
    "images": [
      "/images/catalog/leo-pro-cut-950-4145.webp"
    ],
    "specs": {
      "Cutting Height": "15 mm",
      "Forward Speed": "Adjustable",
      "Power": "2.24 HP",
      "Weight": "196 CC",
      "Color": "Red",
      "Size": "0.47\"-2.24\""
    },
    "features": [
      "Genuine KrishiGears branded product",
      "Backed by manufacturer warranty",
      "PAN India delivery from KrishiGears",
      "Genuine spare parts availability",
      "Genuine KrishiGears commercial agricultural machinery",
      "FMTTI-tested commercial durability standard",
      "Precision-engineered transmission case for tough Indian soil",
      "PAN India direct drop-ship dispatch from KrishiGears Express Network",
      "24-48 hour dispatch with genuine replacement spare parts guarantee"
    ],
    "applications": [
      "Cotton",
      "Sugarcane",
      "Wheat",
      "Paddy"
    ],
    "benefits": [
      "Saves significant manual labour",
      "Reduces operating cost over time",
      "FMTTI-tested durability",
      "Cuts inter-cultivation labor cost by up to 70% in Cotton fields",
      "High-torque de-weeding and soil aeration in Black Cotton Soil",
      "Approved for state agricultural mechanization subsidies across Maharashtra and Madhya Pradesh"
    ],
    "warranty": "12 months manufacturer warranty + KrishiGears after-sales service network.",
    "video": "",
    "hsn": "8433",
    "gst": 12
  },
  {
    "slug": "leo-model-rover-7967",
    "category": "lawn-mowers",
    "name": "KrishiGears 18 INCH Model ROVER-820 Patrol Walk Behind Mowers",
    "model": "Model Rover-820",
    "brand": "KrishiGears",
    "badges": [
      "Industrial Standard Quality",
      "Commercial Agro Tested",
      "Commercial Grade"
    ],
    "price": 20000,
    "comparePrice": 23600,
    "images": [
      "/images/catalog/leo-model-rover-7967.webp"
    ],
    "specs": {
      "Cutting Width": "18 Inch",
      "Displacement": "159CC Petrol",
      "Model": "Model Rover-820",
      "Forward Speed": "Adjustable",
      "Cutting Height": "10 mm",
      "Color": "Red"
    },
    "features": [
      "Genuine KrishiGears branded product",
      "Backed by manufacturer warranty",
      "PAN India delivery from KrishiGears",
      "Genuine spare parts availability",
      "Genuine KrishiGears commercial agricultural machinery",
      "FMTTI-tested commercial durability standard",
      "Precision-engineered transmission case for tough Indian soil",
      "PAN India direct drop-ship dispatch from KrishiGears Express Network",
      "24-48 hour dispatch with genuine replacement spare parts guarantee"
    ],
    "applications": [
      "Cotton",
      "Sugarcane",
      "Wheat",
      "Paddy"
    ],
    "benefits": [
      "Saves significant manual labour",
      "Reduces operating cost over time",
      "FMTTI-tested durability",
      "Cuts inter-cultivation labor cost by up to 70% in Cotton fields",
      "High-torque de-weeding and soil aeration in Black Cotton Soil",
      "Approved for state agricultural mechanization subsidies across Maharashtra and Madhya Pradesh"
    ],
    "warranty": "12 months manufacturer warranty + KrishiGears after-sales service network.",
    "video": "",
    "hsn": "8433",
    "gst": 12
  },
  {
    "slug": "leo-375-3993",
    "category": "lawn-mowers",
    "name": "KrishiGears Green Mower Model - 375 (5.5 HP)",
    "model": "375",
    "brand": "KrishiGears",
    "badges": [
      "Industrial Standard Quality",
      "Commercial Agro Tested",
      "Commercial Grade"
    ],
    "price": 95000,
    "comparePrice": 112100,
    "images": [
      "/images/catalog/leo-375-3993.webp"
    ],
    "specs": {
      "Engine Power": "5.5 HP",
      "Drive Type": "Self Propelled",
      "Cutting Width": "22 inches (56 mm)",
      "Forward Speed": "Adjustable",
      "Starting System": "Electric Start",
      "Cutting Height": "15 mm"
    },
    "features": [
      "Genuine KrishiGears branded product",
      "Backed by manufacturer warranty",
      "PAN India delivery from KrishiGears",
      "Genuine spare parts availability",
      "Genuine KrishiGears commercial agricultural machinery",
      "FMTTI-tested commercial durability standard",
      "Precision-engineered transmission case for tough Indian soil",
      "PAN India direct drop-ship dispatch from KrishiGears Express Network",
      "24-48 hour dispatch with genuine replacement spare parts guarantee"
    ],
    "applications": [
      "Cotton",
      "Sugarcane",
      "Wheat",
      "Paddy"
    ],
    "benefits": [
      "Saves significant manual labour",
      "Reduces operating cost over time",
      "FMTTI-tested durability",
      "Cuts inter-cultivation labor cost by up to 70% in Cotton fields",
      "High-torque de-weeding and soil aeration in Black Cotton Soil",
      "Approved for state agricultural mechanization subsidies across Maharashtra and Madhya Pradesh"
    ],
    "warranty": "12 months manufacturer warranty + KrishiGears after-sales service network.",
    "video": "https://www.youtube.com/watch?v=EsLWgk1cdIE",
    "hsn": "8433",
    "gst": 12
  },
  {
    "slug": "leo-322540525-0525",
    "category": "brush-cutters",
    "name": "KrishiGears Wheel String Trimmer (4599 W) - Petrol",
    "model": "322540525",
    "brand": "KrishiGears",
    "badges": [
      "Industrial Standard Quality",
      "Commercial Agro Tested",
      "Commercial Grade"
    ],
    "price": 80000,
    "comparePrice": 94400,
    "images": [
      "/images/catalog/leo-322540525-0525.webp"
    ],
    "specs": {
      "Power Source": "Petrol",
      "Power Output": "4599 W",
      "Cutting Width": "22 - 24 inch",
      "Line Diameter": "3.5 mm",
      "Shaft Type": "Vertical Shaft",
      "Handle Type": "D Handle"
    },
    "features": [
      "Genuine KrishiGears branded product",
      "Backed by manufacturer warranty",
      "PAN India delivery from KrishiGears",
      "Genuine spare parts availability",
      "Genuine KrishiGears commercial agricultural machinery",
      "FMTTI-tested commercial durability standard",
      "Precision-engineered transmission case for tough Indian soil",
      "PAN India direct drop-ship dispatch from KrishiGears Express Network",
      "24-48 hour dispatch with genuine replacement spare parts guarantee"
    ],
    "applications": [
      "Cotton",
      "Sugarcane",
      "Wheat",
      "Paddy"
    ],
    "benefits": [
      "Saves significant manual labour",
      "Reduces operating cost over time",
      "FMTTI-tested durability",
      "Cuts inter-cultivation labor cost by up to 70% in Cotton fields",
      "High-torque de-weeding and soil aeration in Black Cotton Soil",
      "Approved for state agricultural mechanization subsidies across Maharashtra and Madhya Pradesh"
    ],
    "warranty": "12 months manufacturer warranty + KrishiGears after-sales service network.",
    "video": "https://www.youtube.com/watch?v=EsLWgk1cdIE",
    "hsn": "8433",
    "gst": 12
  },
  {
    "slug": "leo-386-8522",
    "category": "lawn-mowers",
    "name": "KrishiGears Roller Type Electric Lawn Mower Model - 386 - Corded Electric",
    "model": "386",
    "brand": "KrishiGears",
    "badges": [
      "Industrial Standard Quality",
      "Commercial Agro Tested",
      "Commercial Grade"
    ],
    "price": 60000,
    "comparePrice": 70800,
    "images": [
      "/images/catalog/leo-386-8522.webp"
    ],
    "specs": {
      "Power Source": "Corded Electric",
      "Motor Power": "1600 W",
      "Cutting Width": "24 inches",
      "Cutting Height": "35-75 mm",
      "Grass Collector": "With Collector",
      "Drive Type": "Push"
    },
    "features": [
      "Genuine KrishiGears branded product",
      "Backed by manufacturer warranty",
      "PAN India delivery from KrishiGears",
      "Genuine spare parts availability",
      "Genuine KrishiGears commercial agricultural machinery",
      "FMTTI-tested commercial durability standard",
      "Precision-engineered transmission case for tough Indian soil",
      "PAN India direct drop-ship dispatch from KrishiGears Express Network",
      "24-48 hour dispatch with genuine replacement spare parts guarantee"
    ],
    "applications": [
      "Cotton",
      "Sugarcane",
      "Wheat",
      "Paddy"
    ],
    "benefits": [
      "Saves significant manual labour",
      "Reduces operating cost over time",
      "FMTTI-tested durability",
      "Cuts inter-cultivation labor cost by up to 70% in Cotton fields",
      "High-torque de-weeding and soil aeration in Black Cotton Soil",
      "Approved for state agricultural mechanization subsidies across Maharashtra and Madhya Pradesh"
    ],
    "warranty": "12 months manufacturer warranty + KrishiGears after-sales service network.",
    "video": "https://www.youtube.com/watch?v=EsLWgk1cdIE",
    "hsn": "8433",
    "gst": 12
  },
  {
    "slug": "leo-zf6127-leo-e-3513",
    "category": "lawn-mowers",
    "name": "KrishiGears Model ZF6127 Electric Lawn Mower (1600 W)",
    "model": "ZF6127 Electric Lawn Mower",
    "brand": "KrishiGears",
    "badges": [
      "Industrial Standard Quality",
      "Commercial Agro Tested",
      "Commercial Grade"
    ],
    "price": 22565,
    "comparePrice": 26627,
    "images": [
      "/images/catalog/leo-zf6127-leo-e-3513.webp"
    ],
    "specs": {
      "Cutting Width": "400 min",
      "Cutting Height": "25 mm",
      "Power": "1600 W",
      "Forward Speed": "Adjustable",
      "Product Code": "6127",
      "Cutting Capacity": "25-75 min"
    },
    "features": [
      "Genuine KrishiGears branded product",
      "Backed by manufacturer warranty",
      "PAN India delivery from KrishiGears",
      "Genuine spare parts availability",
      "Genuine KrishiGears commercial agricultural machinery",
      "FMTTI-tested commercial durability standard",
      "Precision-engineered transmission case for tough Indian soil",
      "PAN India direct drop-ship dispatch from KrishiGears Express Network",
      "24-48 hour dispatch with genuine replacement spare parts guarantee"
    ],
    "applications": [
      "Cotton",
      "Sugarcane",
      "Wheat",
      "Paddy"
    ],
    "benefits": [
      "Saves significant manual labour",
      "Reduces operating cost over time",
      "FMTTI-tested durability",
      "Cuts inter-cultivation labor cost by up to 70% in Cotton fields",
      "High-torque de-weeding and soil aeration in Black Cotton Soil",
      "Approved for state agricultural mechanization subsidies across Maharashtra and Madhya Pradesh"
    ],
    "warranty": "12 months manufacturer warranty + KrishiGears after-sales service network.",
    "video": "https://www.youtube.com/watch?v=EsLWgk1cdIE",
    "hsn": "8433",
    "gst": 12
  },
  {
    "slug": "leo-384-8837",
    "category": "lawn-mowers",
    "name": "KrishiGears Roller Type Lawn Mower Model - 384",
    "model": "384",
    "brand": "KrishiGears",
    "badges": [
      "Industrial Standard Quality",
      "Commercial Agro Tested",
      "Commercial Grade"
    ],
    "price": 20000,
    "comparePrice": 23600,
    "images": [
      "/images/catalog/leo-384-8837.webp"
    ],
    "specs": {
      "Cutting Height": "55 mm",
      "Number Of Blades": "6 blades",
      "Cutting Width": "heavy duty 6 blades running On ball bearings",
      "Forward Speed": "Adjustable",
      "Drive Type": "Push",
      "Grass Collector": "With Collector"
    },
    "features": [
      "Genuine KrishiGears branded product",
      "Backed by manufacturer warranty",
      "PAN India delivery from KrishiGears",
      "Genuine spare parts availability",
      "Genuine KrishiGears commercial agricultural machinery",
      "FMTTI-tested commercial durability standard",
      "Precision-engineered transmission case for tough Indian soil",
      "PAN India direct drop-ship dispatch from KrishiGears Express Network",
      "24-48 hour dispatch with genuine replacement spare parts guarantee"
    ],
    "applications": [
      "Cotton",
      "Sugarcane",
      "Wheat",
      "Paddy"
    ],
    "benefits": [
      "Saves significant manual labour",
      "Reduces operating cost over time",
      "FMTTI-tested durability",
      "Cuts inter-cultivation labor cost by up to 70% in Cotton fields",
      "High-torque de-weeding and soil aeration in Black Cotton Soil",
      "Approved for state agricultural mechanization subsidies across Maharashtra and Madhya Pradesh"
    ],
    "warranty": "12 months manufacturer warranty + KrishiGears after-sales service network.",
    "video": "https://www.youtube.com/watch?v=EsLWgk1cdIE",
    "hsn": "8433",
    "gst": 12
  },
  {
    "slug": "leo-cg-530-9160",
    "category": "brush-cutters",
    "name": "KrishiGears Brushcutter Model Cg-530 (2.4 hp 50cc) - 2 Stroke",
    "model": "Cg-530",
    "brand": "KrishiGears",
    "badges": [
      "Industrial Standard Quality",
      "Commercial Agro Tested",
      "Commercial Grade"
    ],
    "price": 8924,
    "comparePrice": 10530,
    "images": [
      "/images/catalog/leo-cg-530-9160.webp"
    ],
    "specs": {
      "Engine Displacement": "52 cc",
      "Engine Type": "2 Stroke",
      "Mounting Type": "Side Pack",
      "Power Output": "2.0 kW",
      "Fuel Tank Capacity": "0.7 L",
      "Power": "2.4 hp 50cc"
    },
    "features": [
      "Genuine KrishiGears branded product",
      "Backed by manufacturer warranty",
      "PAN India delivery from KrishiGears",
      "Genuine spare parts availability",
      "Genuine KrishiGears commercial agricultural machinery",
      "FMTTI-tested commercial durability standard",
      "Precision-engineered transmission case for tough Indian soil",
      "PAN India direct drop-ship dispatch from KrishiGears Express Network",
      "24-48 hour dispatch with genuine replacement spare parts guarantee"
    ],
    "applications": [
      "Cotton",
      "Sugarcane",
      "Wheat",
      "Paddy"
    ],
    "benefits": [
      "Saves significant manual labour",
      "Reduces operating cost over time",
      "FMTTI-tested durability",
      "Cuts inter-cultivation labor cost by up to 70% in Cotton fields",
      "High-torque de-weeding and soil aeration in Black Cotton Soil",
      "Approved for state agricultural mechanization subsidies across Maharashtra and Madhya Pradesh"
    ],
    "warranty": "12 months manufacturer warranty + KrishiGears after-sales service network.",
    "video": "https://www.youtube.com/watch?v=EsLWgk1cdIE",
    "hsn": "8433",
    "gst": 12
  },
  {
    "slug": "leo-cg-530-8458",
    "category": "brush-cutters",
    "name": "KrishiGears Multi Tool Brush Cutter Model -Cg 530 (2.4 HP 52cc) - 2 Stroke",
    "model": "Cg 530",
    "brand": "KrishiGears",
    "badges": [
      "Industrial Standard Quality",
      "Commercial Agro Tested",
      "Commercial Grade"
    ],
    "price": 14616,
    "comparePrice": 17247,
    "images": [
      "/images/catalog/leo-cg-530-8458.webp"
    ],
    "specs": {
      "Engine Displacement": "52 cc",
      "Engine Type": "2 Stroke",
      "Mounting Type": "Side Pack",
      "Power Output": "2.0 kW",
      "Fuel Tank Capacity": "0.6 L",
      "Power": "2.4 HP 52cc"
    },
    "features": [
      "Genuine KrishiGears branded product",
      "Backed by manufacturer warranty",
      "PAN India delivery from KrishiGears",
      "Genuine spare parts availability",
      "Genuine KrishiGears commercial agricultural machinery",
      "FMTTI-tested commercial durability standard",
      "Precision-engineered transmission case for tough Indian soil",
      "PAN India direct drop-ship dispatch from KrishiGears Express Network",
      "24-48 hour dispatch with genuine replacement spare parts guarantee"
    ],
    "applications": [
      "Cotton",
      "Sugarcane",
      "Wheat",
      "Paddy"
    ],
    "benefits": [
      "Saves significant manual labour",
      "Reduces operating cost over time",
      "FMTTI-tested durability",
      "Cuts inter-cultivation labor cost by up to 70% in Cotton fields",
      "High-torque de-weeding and soil aeration in Black Cotton Soil",
      "Approved for state agricultural mechanization subsidies across Maharashtra and Madhya Pradesh"
    ],
    "warranty": "12 months manufacturer warranty + KrishiGears after-sales service network.",
    "video": "https://www.youtube.com/watch?v=EsLWgk1cdIE",
    "hsn": "8433",
    "gst": 12
  },
  {
    "slug": "leo-297263000-3000",
    "category": "brush-cutters",
    "name": "KrishiGears Back Pack Brushcutter Gx- 50 (2.0 kW) - 4 stroke",
    "model": "297263000",
    "brand": "KrishiGears",
    "badges": [
      "Industrial Standard Quality",
      "Commercial Agro Tested",
      "Commercial Grade"
    ],
    "price": 13230,
    "comparePrice": 15611,
    "images": [
      "/images/catalog/leo-297263000-3000.webp"
    ],
    "specs": {
      "Engine Type": "4 stroke",
      "Mounting Type": "Backpack",
      "Engine Displacement": "52 CC",
      "Power Output": "2.0 kW",
      "Fuel Tank Capacity": "1.0 L",
      "Cutting Attachment": "3 Tooth Blade"
    },
    "features": [
      "Genuine KrishiGears branded product",
      "Backed by manufacturer warranty",
      "PAN India delivery from KrishiGears",
      "Genuine spare parts availability",
      "Genuine KrishiGears commercial agricultural machinery",
      "FMTTI-tested commercial durability standard",
      "Precision-engineered transmission case for tough Indian soil",
      "PAN India direct drop-ship dispatch from KrishiGears Express Network",
      "24-48 hour dispatch with genuine replacement spare parts guarantee"
    ],
    "applications": [
      "Cotton",
      "Sugarcane",
      "Wheat",
      "Paddy"
    ],
    "benefits": [
      "Saves significant manual labour",
      "Reduces operating cost over time",
      "FMTTI-tested durability",
      "Cuts inter-cultivation labor cost by up to 70% in Cotton fields",
      "High-torque de-weeding and soil aeration in Black Cotton Soil",
      "Approved for state agricultural mechanization subsidies across Maharashtra and Madhya Pradesh"
    ],
    "warranty": "12 months manufacturer warranty + KrishiGears after-sales service network.",
    "video": "https://www.youtube.com/watch?v=EsLWgk1cdIE",
    "hsn": "8433",
    "gst": 12
  },
  {
    "slug": "leo-297380561-0561",
    "category": "brush-cutters",
    "name": "KrishiGears Cordless Brush Cutter (1.5 HP) - battery operated",
    "model": "297380561",
    "brand": "KrishiGears",
    "badges": [
      "Industrial Standard Quality",
      "Commercial Agro Tested",
      "Commercial Grade"
    ],
    "price": 23078,
    "comparePrice": 27232,
    "images": [
      "/images/catalog/leo-297380561-0561.webp"
    ],
    "specs": {
      "Engine Displacement": "KrishiGears Cordless brush cutter",
      "Engine Type": "battery operated",
      "Mounting Type": "Side Pack",
      "Power Source": "Battery (Cordless)",
      "Power Output": "1.5 HP",
      "Handle Type": "Loop Handle (D)"
    },
    "features": [
      "Genuine KrishiGears branded product",
      "Backed by manufacturer warranty",
      "PAN India delivery from KrishiGears",
      "Genuine spare parts availability",
      "Genuine KrishiGears commercial agricultural machinery",
      "FMTTI-tested commercial durability standard",
      "Precision-engineered transmission case for tough Indian soil",
      "PAN India direct drop-ship dispatch from KrishiGears Express Network",
      "24-48 hour dispatch with genuine replacement spare parts guarantee"
    ],
    "applications": [
      "Cotton",
      "Sugarcane",
      "Wheat",
      "Paddy"
    ],
    "benefits": [
      "Saves significant manual labour",
      "Reduces operating cost over time",
      "FMTTI-tested durability",
      "Cuts inter-cultivation labor cost by up to 70% in Cotton fields",
      "High-torque de-weeding and soil aeration in Black Cotton Soil",
      "Approved for state agricultural mechanization subsidies across Maharashtra and Madhya Pradesh"
    ],
    "warranty": "12 months manufacturer warranty + KrishiGears after-sales service network.",
    "video": "https://www.youtube.com/watch?v=EsLWgk1cdIE",
    "hsn": "8433",
    "gst": 12
  },
  {
    "slug": "leo-re-1400-6087",
    "category": "brush-cutters",
    "name": "KrishiGears Electric Brush Cutter Model Re-1400 (1400 watts)",
    "model": "Re-1400",
    "brand": "KrishiGears",
    "badges": [
      "Industrial Standard Quality",
      "Commercial Agro Tested",
      "Commercial Grade"
    ],
    "price": 20000,
    "comparePrice": 23600,
    "images": [
      "/images/catalog/leo-re-1400-6087.webp"
    ],
    "specs": {
      "Cutting Width": "30 cm",
      "Displacement": "35 cc",
      "Overall Length": "1928 mm",
      "Type": "Cordless",
      "Power": "1400 watts"
    },
    "features": [
      "Genuine KrishiGears branded product",
      "Backed by manufacturer warranty",
      "PAN India delivery from KrishiGears",
      "Genuine spare parts availability",
      "Genuine KrishiGears commercial agricultural machinery",
      "FMTTI-tested commercial durability standard",
      "Precision-engineered transmission case for tough Indian soil",
      "PAN India direct drop-ship dispatch from KrishiGears Express Network",
      "24-48 hour dispatch with genuine replacement spare parts guarantee"
    ],
    "applications": [
      "Cotton",
      "Sugarcane",
      "Wheat",
      "Paddy"
    ],
    "benefits": [
      "Saves significant manual labour",
      "Reduces operating cost over time",
      "FMTTI-tested durability",
      "Cuts inter-cultivation labor cost by up to 70% in Cotton fields",
      "High-torque de-weeding and soil aeration in Black Cotton Soil",
      "Approved for state agricultural mechanization subsidies across Maharashtra and Madhya Pradesh"
    ],
    "warranty": "12 months manufacturer warranty + KrishiGears after-sales service network.",
    "video": "https://www.youtube.com/watch?v=EsLWgk1cdIE",
    "hsn": "8433",
    "gst": 12
  },
  {
    "slug": "leo-re-2200-9709",
    "category": "brush-cutters",
    "name": "KrishiGears Electric Brush Cutter Model Re-2200 (2.0 kW)",
    "model": "Re-2200",
    "brand": "KrishiGears",
    "badges": [
      "Industrial Standard Quality",
      "Commercial Agro Tested",
      "Commercial Grade"
    ],
    "price": 17500,
    "comparePrice": 20650,
    "images": [
      "/images/catalog/leo-re-2200-9709.webp"
    ],
    "specs": {
      "Power Source": "Electric",
      "Power Output": "2.0 kW",
      "Cutting Width": "400 mm",
      "Cutting Attachment": "Metal Blade, Trimmer head ,Double Harness Belt",
      "Shaft Type": "Straight Shaft",
      "Handle Type": "Bike Handle"
    },
    "features": [
      "Genuine KrishiGears branded product",
      "Backed by manufacturer warranty",
      "PAN India delivery from KrishiGears",
      "Genuine spare parts availability",
      "Genuine KrishiGears commercial agricultural machinery",
      "FMTTI-tested commercial durability standard",
      "Precision-engineered transmission case for tough Indian soil",
      "PAN India direct drop-ship dispatch from KrishiGears Express Network",
      "24-48 hour dispatch with genuine replacement spare parts guarantee"
    ],
    "applications": [
      "Cotton",
      "Sugarcane",
      "Wheat",
      "Paddy"
    ],
    "benefits": [
      "Saves significant manual labour",
      "Reduces operating cost over time",
      "FMTTI-tested durability",
      "Cuts inter-cultivation labor cost by up to 70% in Cotton fields",
      "High-torque de-weeding and soil aeration in Black Cotton Soil",
      "Approved for state agricultural mechanization subsidies across Maharashtra and Madhya Pradesh"
    ],
    "warranty": "12 months manufacturer warranty + KrishiGears after-sales service network.",
    "video": "https://www.youtube.com/watch?v=EsLWgk1cdIE",
    "hsn": "8433",
    "gst": 12
  },
  {
    "slug": "leo-297279169-9169",
    "category": "brush-cutters",
    "name": "KrishiGears Mitsubishi Powered Brushcutter - Tu-43 (2.1hp) - 2 Stroke",
    "model": "297279169",
    "brand": "KrishiGears",
    "badges": [
      "Industrial Standard Quality",
      "Commercial Agro Tested",
      "Commercial Grade"
    ],
    "price": 18462,
    "comparePrice": 21785,
    "images": [
      "/images/catalog/leo-297279169-9169.webp"
    ],
    "specs": {
      "Engine Displacement": "43 cc",
      "Engine Type": "2 Stroke",
      "Mounting Type": "Side Pack",
      "Type": "Shoulder",
      "Displacement": "43 CC",
      "Power Output": "2.1HP"
    },
    "features": [
      "Genuine KrishiGears branded product",
      "Backed by manufacturer warranty",
      "PAN India delivery from KrishiGears",
      "Genuine spare parts availability",
      "Genuine KrishiGears commercial agricultural machinery",
      "FMTTI-tested commercial durability standard",
      "Precision-engineered transmission case for tough Indian soil",
      "PAN India direct drop-ship dispatch from KrishiGears Express Network",
      "24-48 hour dispatch with genuine replacement spare parts guarantee"
    ],
    "applications": [
      "Cotton",
      "Sugarcane",
      "Wheat",
      "Paddy"
    ],
    "benefits": [
      "Saves significant manual labour",
      "Reduces operating cost over time",
      "FMTTI-tested durability",
      "Cuts inter-cultivation labor cost by up to 70% in Cotton fields",
      "High-torque de-weeding and soil aeration in Black Cotton Soil",
      "Approved for state agricultural mechanization subsidies across Maharashtra and Madhya Pradesh"
    ],
    "warranty": "12 months manufacturer warranty + KrishiGears after-sales service network.",
    "video": "",
    "hsn": "8433",
    "gst": 12
  },
  {
    "slug": "leo-332557074-7074",
    "category": "brush-cutters",
    "name": "KrishiGears Wheeled String Trimmer (450 W) - Petrol",
    "model": "332557074",
    "brand": "KrishiGears",
    "badges": [
      "Industrial Standard Quality",
      "Commercial Agro Tested",
      "Commercial Grade"
    ],
    "price": 80000,
    "comparePrice": 94400,
    "images": [
      "/images/catalog/leo-332557074-7074.webp"
    ],
    "specs": {
      "Power Source": "Petrol",
      "Power Output": "450 W",
      "Cutting Width": "350 mm",
      "Line Diameter": "3.5 mm",
      "Shaft Type": "vertical shaft",
      "Handle Type": "D Handle"
    },
    "features": [
      "Genuine KrishiGears branded product",
      "Backed by manufacturer warranty",
      "PAN India delivery from KrishiGears",
      "Genuine spare parts availability",
      "Genuine KrishiGears commercial agricultural machinery",
      "FMTTI-tested commercial durability standard",
      "Precision-engineered transmission case for tough Indian soil",
      "PAN India direct drop-ship dispatch from KrishiGears Express Network",
      "24-48 hour dispatch with genuine replacement spare parts guarantee"
    ],
    "applications": [
      "Cotton",
      "Sugarcane",
      "Wheat",
      "Paddy"
    ],
    "benefits": [
      "Saves significant manual labour",
      "Reduces operating cost over time",
      "FMTTI-tested durability",
      "Cuts inter-cultivation labor cost by up to 70% in Cotton fields",
      "High-torque de-weeding and soil aeration in Black Cotton Soil",
      "Approved for state agricultural mechanization subsidies across Maharashtra and Madhya Pradesh"
    ],
    "warranty": "12 months manufacturer warranty + KrishiGears after-sales service network.",
    "video": "",
    "hsn": "8433",
    "gst": 12
  },
  {
    "slug": "leo-253009174-9174",
    "category": "brush-cutters",
    "name": "KrishiGears Wheel Type Brushcutter Cg - 530 (2.4 HP) - 2 Stroke",
    "model": "253009174",
    "brand": "KrishiGears",
    "badges": [
      "Industrial Standard Quality",
      "Commercial Agro Tested",
      "Commercial Grade"
    ],
    "price": 20000,
    "comparePrice": 23600,
    "images": [
      "/images/catalog/leo-253009174-9174.webp"
    ],
    "specs": {
      "Power Source": "Petrol",
      "Engine Displacement": "52 CC",
      "Engine Type": "2 Stroke",
      "Overall Length": "1483 mm",
      "Number Of Wheels": "2 Wheel",
      "Power": "2.4 HP"
    },
    "features": [
      "Genuine KrishiGears branded product",
      "Backed by manufacturer warranty",
      "PAN India delivery from KrishiGears",
      "Genuine spare parts availability",
      "Genuine KrishiGears commercial agricultural machinery",
      "FMTTI-tested commercial durability standard",
      "Precision-engineered transmission case for tough Indian soil",
      "PAN India direct drop-ship dispatch from KrishiGears Express Network",
      "24-48 hour dispatch with genuine replacement spare parts guarantee"
    ],
    "applications": [
      "Cotton",
      "Sugarcane",
      "Wheat",
      "Paddy"
    ],
    "benefits": [
      "Saves significant manual labour",
      "Reduces operating cost over time",
      "FMTTI-tested durability",
      "Cuts inter-cultivation labor cost by up to 70% in Cotton fields",
      "High-torque de-weeding and soil aeration in Black Cotton Soil",
      "Approved for state agricultural mechanization subsidies across Maharashtra and Madhya Pradesh"
    ],
    "warranty": "12 months manufacturer warranty + KrishiGears after-sales service network.",
    "video": "https://www.youtube.com/watch?v=EsLWgk1cdIE",
    "hsn": "8433",
    "gst": 12
  },
  {
    "slug": "leo-34586937-6937",
    "category": "brush-cutters",
    "name": "KrishiGears Ignition Coil For Brush Cutter",
    "model": "34586937",
    "brand": "KrishiGears",
    "badges": [
      "Industrial Standard Quality",
      "Commercial Agro Tested",
      "Commercial Grade"
    ],
    "price": 450,
    "comparePrice": 531,
    "images": [
      "/images/catalog/leo-34586937-6937.webp"
    ],
    "specs": {
      "Vehicle Brand": "Maruti",
      "Part No.": "3",
      "Usage/Application": "Brush Cutter",
      "Pack Type": "Box",
      "Displacement": "43 CC",
      "No of Stroke": "2 Stroke"
    },
    "features": [
      "Genuine KrishiGears branded product",
      "Backed by manufacturer warranty",
      "PAN India delivery from KrishiGears",
      "Genuine spare parts availability",
      "Genuine KrishiGears commercial agricultural machinery",
      "FMTTI-tested commercial durability standard",
      "Precision-engineered transmission case for tough Indian soil",
      "PAN India direct drop-ship dispatch from KrishiGears Express Network",
      "24-48 hour dispatch with genuine replacement spare parts guarantee"
    ],
    "applications": [
      "Cotton",
      "Sugarcane",
      "Wheat",
      "Paddy"
    ],
    "benefits": [
      "Saves significant manual labour",
      "Reduces operating cost over time",
      "FMTTI-tested durability",
      "Cuts inter-cultivation labor cost by up to 70% in Cotton fields",
      "High-torque de-weeding and soil aeration in Black Cotton Soil",
      "Approved for state agricultural mechanization subsidies across Maharashtra and Madhya Pradesh"
    ],
    "warranty": "12 months manufacturer warranty + KrishiGears after-sales service network.",
    "video": "",
    "hsn": "8433",
    "gst": 12
  },
  {
    "slug": "leo-94097441-7441",
    "category": "brush-cutters",
    "name": "KrishiGears Side Pack Brushcutter Cg-530 (2.4 HP) - 2 stroke",
    "model": "94097441",
    "brand": "KrishiGears",
    "badges": [
      "Industrial Standard Quality",
      "Commercial Agro Tested",
      "Commercial Grade"
    ],
    "price": 8462,
    "comparePrice": 9985,
    "images": [
      "/images/catalog/leo-94097441-7441.webp"
    ],
    "specs": {
      "Engine Type": "2 stroke",
      "Mounting Type": "Side Pack",
      "Engine Displacement": "52 CC",
      "Overall Length": "1483 mm",
      "Power Source": "Petrol",
      "Power Output": "2.4 HP"
    },
    "features": [
      "Genuine KrishiGears branded product",
      "Backed by manufacturer warranty",
      "PAN India delivery from KrishiGears",
      "Genuine spare parts availability",
      "Genuine KrishiGears commercial agricultural machinery",
      "FMTTI-tested commercial durability standard",
      "Precision-engineered transmission case for tough Indian soil",
      "PAN India direct drop-ship dispatch from KrishiGears Express Network",
      "24-48 hour dispatch with genuine replacement spare parts guarantee"
    ],
    "applications": [
      "Cotton",
      "Sugarcane",
      "Wheat",
      "Paddy"
    ],
    "benefits": [
      "Saves significant manual labour",
      "Reduces operating cost over time",
      "FMTTI-tested durability",
      "Cuts inter-cultivation labor cost by up to 70% in Cotton fields",
      "High-torque de-weeding and soil aeration in Black Cotton Soil",
      "Approved for state agricultural mechanization subsidies across Maharashtra and Madhya Pradesh"
    ],
    "warranty": "12 months manufacturer warranty + KrishiGears after-sales service network.",
    "video": "https://www.youtube.com/watch?v=EsLWgk1cdIE",
    "hsn": "8433",
    "gst": 12
  },
  {
    "slug": "leo-297280912-0912",
    "category": "brush-cutters",
    "name": "KrishiGears Wheel Type Brushcutter Gx-35 (1.3 HP) - 4 Stroke",
    "model": "297280912",
    "brand": "KrishiGears",
    "badges": [
      "Industrial Standard Quality",
      "Commercial Agro Tested",
      "Commercial Grade"
    ],
    "price": 13462,
    "comparePrice": 15885,
    "images": [
      "/images/catalog/leo-297280912-0912.webp"
    ],
    "specs": {
      "Engine Displacement": "35 cc",
      "Engine Type": "4 Stroke",
      "Mounting Type": "Trolley",
      "Carry Type": "Trolley",
      "Power Source": "Petrol",
      "Power Output": "1.3 HP"
    },
    "features": [
      "Genuine KrishiGears branded product",
      "Backed by manufacturer warranty",
      "PAN India delivery from KrishiGears",
      "Genuine spare parts availability",
      "Genuine KrishiGears commercial agricultural machinery",
      "FMTTI-tested commercial durability standard",
      "Precision-engineered transmission case for tough Indian soil",
      "PAN India direct drop-ship dispatch from KrishiGears Express Network",
      "24-48 hour dispatch with genuine replacement spare parts guarantee"
    ],
    "applications": [
      "Cotton",
      "Sugarcane",
      "Wheat",
      "Paddy"
    ],
    "benefits": [
      "Saves significant manual labour",
      "Reduces operating cost over time",
      "FMTTI-tested durability",
      "Cuts inter-cultivation labor cost by up to 70% in Cotton fields",
      "High-torque de-weeding and soil aeration in Black Cotton Soil",
      "Approved for state agricultural mechanization subsidies across Maharashtra and Madhya Pradesh"
    ],
    "warranty": "12 months manufacturer warranty + KrishiGears after-sales service network.",
    "video": "https://www.youtube.com/watch?v=EsLWgk1cdIE",
    "hsn": "8433",
    "gst": 12
  },
  {
    "slug": "leo-252814707-4707",
    "category": "brush-cutters",
    "name": "KrishiGears Back Pack Brushcutter Cg-530 (2.4 HP) - 2 Stroke",
    "model": "252814707",
    "brand": "KrishiGears",
    "badges": [
      "Industrial Standard Quality",
      "Commercial Agro Tested",
      "Commercial Grade"
    ],
    "price": 24000,
    "comparePrice": 28320,
    "images": [
      "/images/catalog/leo-252814707-4707.webp"
    ],
    "specs": {
      "Engine Type": "2 Stroke",
      "Mounting Type": "Backpack",
      "Engine Displacement": "52 CC",
      "Overall Length": "1495 mm",
      "Power Source": "Petrol",
      "Power Output": "2.4 HP"
    },
    "features": [
      "Genuine KrishiGears branded product",
      "Backed by manufacturer warranty",
      "PAN India delivery from KrishiGears",
      "Genuine spare parts availability",
      "Genuine KrishiGears commercial agricultural machinery",
      "FMTTI-tested commercial durability standard",
      "Precision-engineered transmission case for tough Indian soil",
      "PAN India direct drop-ship dispatch from KrishiGears Express Network",
      "24-48 hour dispatch with genuine replacement spare parts guarantee"
    ],
    "applications": [
      "Cotton",
      "Sugarcane",
      "Wheat",
      "Paddy"
    ],
    "benefits": [
      "Saves significant manual labour",
      "Reduces operating cost over time",
      "FMTTI-tested durability",
      "Cuts inter-cultivation labor cost by up to 70% in Cotton fields",
      "High-torque de-weeding and soil aeration in Black Cotton Soil",
      "Approved for state agricultural mechanization subsidies across Maharashtra and Madhya Pradesh"
    ],
    "warranty": "12 months manufacturer warranty + KrishiGears after-sales service network.",
    "video": "https://www.youtube.com/watch?v=EsLWgk1cdIE",
    "hsn": "8433",
    "gst": 12
  },
  {
    "slug": "ri-kpd-1350-8308",
    "category": "power-weeders",
    "name": "KrishiGears Power Weeder Model Kpd- 1350 (10 Hp) - Diesel",
    "model": "Kpd- 1350",
    "brand": "KrishiGears",
    "badges": [
      "Industrial Standard Quality",
      "Commercial Agro Tested",
      "Commercial Grade"
    ],
    "price": 35000,
    "comparePrice": 41300,
    "images": [
      "/images/catalog/ri-kpd-1350-8308.webp"
    ],
    "specs": {
      "Power": "10 Hp",
      "Engine Type": "Diesel",
      "Grade Type": "Manual",
      "Brand": "KrishiGears"
    },
    "features": [
      "Genuine KrishiGears branded product",
      "Backed by manufacturer warranty",
      "PAN India delivery from KrishiGears",
      "Genuine spare parts availability",
      "Genuine KrishiGears commercial agricultural machinery",
      "FMTTI-tested commercial durability standard",
      "Precision-engineered transmission case for tough Indian soil",
      "PAN India direct drop-ship dispatch from KrishiGears Express Network",
      "24-48 hour dispatch with genuine replacement spare parts guarantee"
    ],
    "applications": [
      "Cotton",
      "Sugarcane",
      "Wheat",
      "Paddy"
    ],
    "benefits": [
      "Saves significant manual labour",
      "Reduces operating cost over time",
      "FMTTI-tested durability",
      "Cuts inter-cultivation labor cost by up to 70% in Cotton fields",
      "High-torque de-weeding and soil aeration in Black Cotton Soil",
      "Approved for state agricultural mechanization subsidies across Maharashtra and Madhya Pradesh"
    ],
    "warranty": "12 months manufacturer warranty + KrishiGears after-sales service network.",
    "video": "https://www.youtube.com/watch?v=XErTJ11jW2o",
    "hsn": "8432",
    "gst": 12
  },
  {
    "slug": "leo-295837771-7771",
    "category": "brush-cutters",
    "name": "KrishiGears Back Pack Brushcutter CG-530 (52cc) - 2 Stroke",
    "model": "295837771",
    "brand": "KrishiGears",
    "badges": [
      "Industrial Standard Quality",
      "Commercial Agro Tested",
      "Commercial Grade"
    ],
    "price": 9846,
    "comparePrice": 11618,
    "images": [
      "/images/catalog/leo-295837771-7771.webp"
    ],
    "specs": {
      "Engine Displacement": "52 cc",
      "Engine Type": "2 Stroke",
      "Mounting Type": "Backpack",
      "Power Source": "Petrol",
      "Power Output": "2.4 HP",
      "Power": "52CC"
    },
    "features": [
      "Genuine KrishiGears branded product",
      "Backed by manufacturer warranty",
      "PAN India delivery from KrishiGears",
      "Genuine spare parts availability",
      "Genuine KrishiGears commercial agricultural machinery",
      "FMTTI-tested commercial durability standard",
      "Precision-engineered transmission case for tough Indian soil",
      "PAN India direct drop-ship dispatch from KrishiGears Express Network",
      "24-48 hour dispatch with genuine replacement spare parts guarantee"
    ],
    "applications": [
      "Cotton",
      "Sugarcane",
      "Wheat",
      "Paddy"
    ],
    "benefits": [
      "Saves significant manual labour",
      "Reduces operating cost over time",
      "FMTTI-tested durability",
      "Cuts inter-cultivation labor cost by up to 70% in Cotton fields",
      "High-torque de-weeding and soil aeration in Black Cotton Soil",
      "Approved for state agricultural mechanization subsidies across Maharashtra and Madhya Pradesh"
    ],
    "warranty": "12 months manufacturer warranty + KrishiGears after-sales service network.",
    "video": "https://www.youtube.com/watch?v=EsLWgk1cdIE",
    "hsn": "8433",
    "gst": 12
  },
  {
    "slug": "ri-297272678-2678",
    "category": "brush-cutters",
    "name": "KrishiGears Side Pack Brush cutter Cg-400 (2.6 HP 56 cc) - 2 Stroke",
    "model": "297272678",
    "brand": "KrishiGears",
    "badges": [
      "Industrial Standard Quality",
      "Commercial Agro Tested",
      "Commercial Grade"
    ],
    "price": 18462,
    "comparePrice": 21785,
    "images": [
      "/images/catalog/ri-297272678-2678.webp"
    ],
    "specs": {
      "Engine Type": "2 Stroke",
      "Power": "2.6 HP 56 cc"
    },
    "features": [
      "Genuine KrishiGears branded product",
      "Backed by manufacturer warranty",
      "PAN India delivery from KrishiGears",
      "Genuine spare parts availability",
      "Genuine KrishiGears commercial agricultural machinery",
      "FMTTI-tested commercial durability standard",
      "Precision-engineered transmission case for tough Indian soil",
      "PAN India direct drop-ship dispatch from KrishiGears Express Network",
      "24-48 hour dispatch with genuine replacement spare parts guarantee"
    ],
    "applications": [
      "Cotton",
      "Sugarcane",
      "Wheat",
      "Paddy"
    ],
    "benefits": [
      "Saves significant manual labour",
      "Reduces operating cost over time",
      "FMTTI-tested durability",
      "Cuts inter-cultivation labor cost by up to 70% in Cotton fields",
      "High-torque de-weeding and soil aeration in Black Cotton Soil",
      "Approved for state agricultural mechanization subsidies across Maharashtra and Madhya Pradesh"
    ],
    "warranty": "12 months manufacturer warranty + KrishiGears after-sales service network.",
    "video": "",
    "hsn": "8433",
    "gst": 12
  },
  {
    "slug": "leo-297381357-1357",
    "category": "brush-cutters",
    "name": "KrishiGears 20v Cordless Multi Tool Brush Cutter",
    "model": "297381357",
    "brand": "KrishiGears",
    "badges": [
      "Industrial Standard Quality",
      "Commercial Agro Tested",
      "Commercial Grade"
    ],
    "price": 15384,
    "comparePrice": 18153,
    "images": [
      "/images/catalog/leo-297381357-1357.webp"
    ],
    "specs": {
      "Power": "20V"
    },
    "features": [
      "Genuine KrishiGears branded product",
      "Backed by manufacturer warranty",
      "PAN India delivery from KrishiGears",
      "Genuine spare parts availability",
      "Genuine KrishiGears commercial agricultural machinery",
      "FMTTI-tested commercial durability standard",
      "Precision-engineered transmission case for tough Indian soil",
      "PAN India direct drop-ship dispatch from KrishiGears Express Network",
      "24-48 hour dispatch with genuine replacement spare parts guarantee"
    ],
    "applications": [
      "Cotton",
      "Sugarcane",
      "Wheat",
      "Paddy"
    ],
    "benefits": [
      "Saves significant manual labour",
      "Reduces operating cost over time",
      "FMTTI-tested durability",
      "Cuts inter-cultivation labor cost by up to 70% in Cotton fields",
      "High-torque de-weeding and soil aeration in Black Cotton Soil",
      "Approved for state agricultural mechanization subsidies across Maharashtra and Madhya Pradesh"
    ],
    "warranty": "12 months manufacturer warranty + KrishiGears after-sales service network.",
    "video": "https://www.youtube.com/watch?v=EsLWgk1cdIE",
    "hsn": "8433",
    "gst": 12
  },
  {
    "slug": "leo-gx-35-2041",
    "category": "brush-cutters",
    "name": "KrishiGears Side Pack Brushcutter Model Gx - 35 (1.3 HP) - 4 Stroke",
    "model": "Gx - 35",
    "brand": "KrishiGears",
    "badges": [
      "Industrial Standard Quality",
      "Commercial Agro Tested",
      "Commercial Grade"
    ],
    "price": 8000,
    "comparePrice": 9440,
    "images": [
      "/images/catalog/leo-gx-35-2041.webp"
    ],
    "specs": {
      "Engine Displacement": "35.8 cc",
      "Engine Type": "4 Stroke",
      "Mounting Type": "Side Pack",
      "Power Source": "Petrol",
      "Power Output": "1.5 HP",
      "Power": "1.3 HP"
    },
    "features": [
      "Genuine KrishiGears branded product",
      "Backed by manufacturer warranty",
      "PAN India delivery from KrishiGears",
      "Genuine spare parts availability",
      "Genuine KrishiGears commercial agricultural machinery",
      "FMTTI-tested commercial durability standard",
      "Precision-engineered transmission case for tough Indian soil",
      "PAN India direct drop-ship dispatch from KrishiGears Express Network",
      "24-48 hour dispatch with genuine replacement spare parts guarantee"
    ],
    "applications": [
      "Cotton",
      "Sugarcane",
      "Wheat",
      "Paddy"
    ],
    "benefits": [
      "Saves significant manual labour",
      "Reduces operating cost over time",
      "FMTTI-tested durability",
      "Cuts inter-cultivation labor cost by up to 70% in Cotton fields",
      "High-torque de-weeding and soil aeration in Black Cotton Soil",
      "Approved for state agricultural mechanization subsidies across Maharashtra and Madhya Pradesh"
    ],
    "warranty": "12 months manufacturer warranty + KrishiGears after-sales service network.",
    "video": "https://www.youtube.com/watch?v=EsLWgk1cdIE",
    "hsn": "8433",
    "gst": 12
  },
  {
    "slug": "leo-296052723-2723",
    "category": "brush-cutters",
    "name": "KrishiGears Back Pack Brushcutter Cg-530 (2.4 HP) - 2 Stroke",
    "model": "296052723",
    "brand": "KrishiGears",
    "badges": [
      "Industrial Standard Quality",
      "Commercial Agro Tested",
      "Commercial Grade"
    ],
    "price": 9231,
    "comparePrice": 10893,
    "images": [
      "/images/catalog/leo-296052723-2723.webp"
    ],
    "specs": {
      "Engine Displacement": "52 cc",
      "Engine Type": "2 Stroke",
      "Mounting Type": "Backpack",
      "Carry Type": "Backpack",
      "Power Source": "Petrol",
      "Power Output": "2.4 HP"
    },
    "features": [
      "Genuine KrishiGears branded product",
      "Backed by manufacturer warranty",
      "PAN India delivery from KrishiGears",
      "Genuine spare parts availability",
      "Genuine KrishiGears commercial agricultural machinery",
      "FMTTI-tested commercial durability standard",
      "Precision-engineered transmission case for tough Indian soil",
      "PAN India direct drop-ship dispatch from KrishiGears Express Network",
      "24-48 hour dispatch with genuine replacement spare parts guarantee"
    ],
    "applications": [
      "Cotton",
      "Sugarcane",
      "Wheat",
      "Paddy"
    ],
    "benefits": [
      "Saves significant manual labour",
      "Reduces operating cost over time",
      "FMTTI-tested durability",
      "Cuts inter-cultivation labor cost by up to 70% in Cotton fields",
      "High-torque de-weeding and soil aeration in Black Cotton Soil",
      "Approved for state agricultural mechanization subsidies across Maharashtra and Madhya Pradesh"
    ],
    "warranty": "12 months manufacturer warranty + KrishiGears after-sales service network.",
    "video": "https://www.youtube.com/watch?v=EsLWgk1cdIE",
    "hsn": "8433",
    "gst": 12
  },
  {
    "slug": "leo-297262606-2606",
    "category": "brush-cutters",
    "name": "KrishiGears Side Pack Brushcutter Gx-50 (2 HP) - 4 Stroke",
    "model": "297262606",
    "brand": "KrishiGears",
    "badges": [
      "Industrial Standard Quality",
      "Commercial Agro Tested",
      "Commercial Grade"
    ],
    "price": 12308,
    "comparePrice": 14523,
    "images": [
      "/images/catalog/leo-297262606-2606.webp"
    ],
    "specs": {
      "Engine Type": "4 Stroke",
      "Power": "2 HP"
    },
    "features": [
      "Genuine KrishiGears branded product",
      "Backed by manufacturer warranty",
      "PAN India delivery from KrishiGears",
      "Genuine spare parts availability",
      "Genuine KrishiGears commercial agricultural machinery",
      "FMTTI-tested commercial durability standard",
      "Precision-engineered transmission case for tough Indian soil",
      "PAN India direct drop-ship dispatch from KrishiGears Express Network",
      "24-48 hour dispatch with genuine replacement spare parts guarantee"
    ],
    "applications": [
      "Cotton",
      "Sugarcane",
      "Wheat",
      "Paddy"
    ],
    "benefits": [
      "Saves significant manual labour",
      "Reduces operating cost over time",
      "FMTTI-tested durability",
      "Cuts inter-cultivation labor cost by up to 70% in Cotton fields",
      "High-torque de-weeding and soil aeration in Black Cotton Soil",
      "Approved for state agricultural mechanization subsidies across Maharashtra and Madhya Pradesh"
    ],
    "warranty": "12 months manufacturer warranty + KrishiGears after-sales service network.",
    "video": "https://www.youtube.com/watch?v=EsLWgk1cdIE",
    "hsn": "8433",
    "gst": 12
  },
  {
    "slug": "leo-297262381-2381",
    "category": "brush-cutters",
    "name": "KrishiGears Back Pack Brushcutter Gx-35 (1.3 HP) - 4 Stroke",
    "model": "297262381",
    "brand": "KrishiGears",
    "badges": [
      "Industrial Standard Quality",
      "Commercial Agro Tested",
      "Commercial Grade"
    ],
    "price": 10924,
    "comparePrice": 12890,
    "images": [
      "/images/catalog/leo-297262381-2381.webp"
    ],
    "specs": {
      "Engine Type": "4 Stroke",
      "Power": "1.3 HP"
    },
    "features": [
      "Genuine KrishiGears branded product",
      "Backed by manufacturer warranty",
      "PAN India delivery from KrishiGears",
      "Genuine spare parts availability",
      "Genuine KrishiGears commercial agricultural machinery",
      "FMTTI-tested commercial durability standard",
      "Precision-engineered transmission case for tough Indian soil",
      "PAN India direct drop-ship dispatch from KrishiGears Express Network",
      "24-48 hour dispatch with genuine replacement spare parts guarantee"
    ],
    "applications": [
      "Cotton",
      "Sugarcane",
      "Wheat",
      "Paddy"
    ],
    "benefits": [
      "Saves significant manual labour",
      "Reduces operating cost over time",
      "FMTTI-tested durability",
      "Cuts inter-cultivation labor cost by up to 70% in Cotton fields",
      "High-torque de-weeding and soil aeration in Black Cotton Soil",
      "Approved for state agricultural mechanization subsidies across Maharashtra and Madhya Pradesh"
    ],
    "warranty": "12 months manufacturer warranty + KrishiGears after-sales service network.",
    "video": "https://www.youtube.com/watch?v=EsLWgk1cdIE",
    "hsn": "8433",
    "gst": 12
  },
  {
    "slug": "leo-gx-35-8104",
    "category": "brush-cutters",
    "name": "KrishiGears Side Pack Brushcutter Model GX - 35 (35.8cc) - 4 Stroke",
    "model": "GX - 35",
    "brand": "KrishiGears",
    "badges": [
      "Industrial Standard Quality",
      "Commercial Agro Tested",
      "Commercial Grade"
    ],
    "price": 10000,
    "comparePrice": 11800,
    "images": [
      "/images/catalog/leo-gx-35-8104.webp"
    ],
    "specs": {
      "Engine Type": "4 Stroke",
      "Power": "35.8CC",
      "Country of Origin": "Made in India"
    },
    "features": [
      "Genuine KrishiGears branded product",
      "Backed by manufacturer warranty",
      "PAN India delivery from KrishiGears",
      "Genuine spare parts availability",
      "Genuine KrishiGears commercial agricultural machinery",
      "FMTTI-tested commercial durability standard",
      "Precision-engineered transmission case for tough Indian soil",
      "PAN India direct drop-ship dispatch from KrishiGears Express Network",
      "24-48 hour dispatch with genuine replacement spare parts guarantee"
    ],
    "applications": [
      "Cotton",
      "Sugarcane",
      "Wheat",
      "Paddy"
    ],
    "benefits": [
      "Saves significant manual labour",
      "Reduces operating cost over time",
      "FMTTI-tested durability",
      "Cuts inter-cultivation labor cost by up to 70% in Cotton fields",
      "High-torque de-weeding and soil aeration in Black Cotton Soil",
      "Approved for state agricultural mechanization subsidies across Maharashtra and Madhya Pradesh"
    ],
    "warranty": "12 months manufacturer warranty + KrishiGears after-sales service network.",
    "video": "https://www.youtube.com/watch?v=EsLWgk1cdIE",
    "hsn": "8433",
    "gst": 12
  },
  {
    "slug": "rly-173f",
    "category": "power-weeders",
    "name": "KrishiGears RAPL-MC-173D Chain Cultivator | 247cc Diesel",
    "model": "173F",
    "brand": "KrishiGears",
    "badges": [
      "FMTTI Tested",
      "Commercial Grade",
      "Industrial Quality Standards"
    ],
    "price": 39000,
    "comparePrice": 46000,
    "images": [
      "/images/catalog/rly-173f.webp",
      "/images/catalog/rly-173f-1.webp",
      "/images/catalog/rly-173f-2.webp",
      "/images/catalog/rly-173f-3.webp"
    ],
    "specs": {
      "Product Name": "KrishiGears RAPL-MC-173D Chain Cultivator",
      "Engine Model": "173F",
      "Engine Type": "4-Stroke Diesel",
      "Engine Displacement": "247cc",
      "Engine Power": "3.6 kW",
      "Chain Width": "150 mm",
      "Gear Shifts": "2 Forward / 1 Reverse",
      "Fuel Type": "Diesel",
      "Standard Implements": "Leveler, Flip Plow, Ditcher, 3-Tyne Hoe",
      "Optional Accessory": "Seeder Fertilizer"
    },
    "features": [
      "Genuine KrishiGears branded product",
      "Backed by manufacturer warranty",
      "PAN India delivery from KrishiGears",
      "Genuine spare parts availability",
      "Genuine KrishiGears commercial agricultural machinery",
      "FMTTI-tested commercial durability standard",
      "Precision-engineered transmission case for tough Indian soil",
      "PAN India direct drop-ship dispatch from KrishiGears Express Network",
      "24-48 hour dispatch with genuine replacement spare parts guarantee"
    ],
    "applications": [
      "Sugarcane",
      "Cotton",
      "Soybean",
      "Onion"
    ],
    "benefits": [
      "Saves significant manual labour",
      "Reduces operating cost over time",
      "FMTTI-tested durability",
      "Cuts inter-cultivation labor cost by up to 70% in Sugarcane fields",
      "High-torque de-weeding and soil aeration in Black Cotton Soil (Regur)",
      "Approved for state agricultural mechanization subsidies across Maharashtra and Gujarat"
    ],
    "warranty": "12 months manufacturer warranty + KrishiGears after-sales service network.",
    "video": "https://www.youtube.com/watch?v=KRJFfkK0eJM",
    "hsn": "8432",
    "gst": 12
  },
  {
    "slug": "rly-170f",
    "category": "power-weeders",
    "name": "KrishiGears RAPL-MC-170G Chain Cultivator | 212cc Petrol",
    "model": "170F",
    "brand": "KrishiGears",
    "badges": [
      "FMTTI Tested",
      "Commercial Grade",
      "Industrial Quality Standards"
    ],
    "price": 39000,
    "comparePrice": 46000,
    "images": [
      "/images/catalog/rly-170f.webp",
      "/images/catalog/rly-170f-1.webp",
      "/images/catalog/rly-170f-2.webp",
      "/images/catalog/rly-170f-3.webp"
    ],
    "specs": {
      "Product Name": "KrishiGears RAPL-MC-170G Chain Cultivator",
      "Engine Model": "170F",
      "Engine Type": "4-Stroke Petrol",
      "Engine Displacement": "212cc",
      "Engine Power": "4 kW",
      "Chain Width": "150 mm",
      "Gear Shifts": "2 Forward / 1 Reverse",
      "Fuel Type": "Petrol",
      "Standard Implements": "Leveler, Flip Plow, Ditcher, 3-Tyne Hoe",
      "Optional Accessory": "Seeder Fertilizer"
    },
    "features": [
      "Genuine KrishiGears branded product",
      "Backed by manufacturer warranty",
      "PAN India delivery from KrishiGears",
      "Genuine spare parts availability",
      "Genuine KrishiGears commercial agricultural machinery",
      "FMTTI-tested commercial durability standard",
      "Precision-engineered transmission case for tough Indian soil",
      "PAN India direct drop-ship dispatch from KrishiGears Express Network",
      "24-48 hour dispatch with genuine replacement spare parts guarantee"
    ],
    "applications": [
      "Sugarcane",
      "Cotton",
      "Soybean",
      "Onion"
    ],
    "benefits": [
      "Saves significant manual labour",
      "Reduces operating cost over time",
      "FMTTI-tested durability",
      "Cuts inter-cultivation labor cost by up to 70% in Sugarcane fields",
      "High-torque de-weeding and soil aeration in Black Cotton Soil (Regur)",
      "Approved for state agricultural mechanization subsidies across Maharashtra and Gujarat"
    ],
    "warranty": "12 months manufacturer warranty + KrishiGears after-sales service network.",
    "video": "https://www.youtube.com/watch?v=KRJFfkK0eJM",
    "hsn": "8432",
    "gst": 12
  },
  {
    "slug": "rly-cr-r50-b",
    "category": "crop-reapers",
    "name": "KrishiGears CR-R50-B Baffle Crop Reaper | 50cc 4-Stroke Petrol Paddy Harvester",
    "model": "CR-R50-B",
    "brand": "KrishiGears",
    "badges": [
      "FMTTI Tested",
      "Commercial Grade",
      "Industrial Quality Standards"
    ],
    "price": 39000,
    "comparePrice": 46000,
    "images": [
      "/images/catalog/rly-cr-r50-b.webp"
    ],
    "specs": {
      "Brand": "KrishiGears",
      "Model": "CR-R50-B",
      "Product Type": "Baffle Crop Reaper / Brush Cutter",
      "Engine Model": "JX50 / 4-Stroke",
      "Engine Power / Displacement": "50 cc / 1.5 kW",
      "Fuel Type": "Petrol",
      "Carry Type": "Backpack"
    },
    "features": [
      "Genuine KrishiGears branded product",
      "Backed by manufacturer warranty",
      "PAN India delivery from KrishiGears",
      "Genuine spare parts availability",
      "Genuine KrishiGears commercial agricultural machinery",
      "FMTTI-tested commercial durability standard",
      "Precision-engineered transmission case for tough Indian soil",
      "PAN India direct drop-ship dispatch from KrishiGears Express Network",
      "24-48 hour dispatch with genuine replacement spare parts guarantee"
    ],
    "applications": [
      "Sugarcane",
      "Cotton",
      "Soybean",
      "Onion"
    ],
    "benefits": [
      "Saves significant manual labour",
      "Reduces operating cost over time",
      "FMTTI-tested durability",
      "Cuts inter-cultivation labor cost by up to 70% in Sugarcane fields",
      "High-torque de-weeding and soil aeration in Black Cotton Soil (Regur)",
      "Approved for state agricultural mechanization subsidies across Maharashtra and Gujarat"
    ],
    "warranty": "12 months manufacturer warranty + KrishiGears after-sales service network.",
    "video": "https://www.youtube.com/watch?v=KRJFfkK0eJM",
    "hsn": "8432",
    "gst": 12
  },
  {
    "slug": "rly-cr-r52-b",
    "category": "crop-reapers",
    "name": "KrishiGears CR-R52-B Baffle Crop Reaper | 52cc 2-Stroke Backpack Paddy Harvester",
    "model": "CR-R52-B",
    "brand": "KrishiGears",
    "badges": [
      "FMTTI Tested",
      "Commercial Grade",
      "Industrial Quality Standards"
    ],
    "price": 39000,
    "comparePrice": 46000,
    "images": [
      "/images/catalog/rly-cr-r52-b.webp"
    ],
    "specs": {
      "Brand": "KrishiGears",
      "Model": "CR-R52-B",
      "Product Type": "Baffle Crop Reaper / Backpack Brush Cutter",
      "Approval": "FMTTI Approved",
      "Engine Model": "1E44F / 2-Stroke",
      "Engine Power / Displacement": "52 cc / 1.5 kW",
      "Fuel Type": "Oil Mix Petrol (1:25 Ratio)",
      "Carry Type": "Backpack"
    },
    "features": [
      "Genuine KrishiGears branded product",
      "Backed by manufacturer warranty",
      "PAN India delivery from KrishiGears",
      "Genuine spare parts availability",
      "Genuine KrishiGears commercial agricultural machinery",
      "FMTTI-tested commercial durability standard",
      "Precision-engineered transmission case for tough Indian soil",
      "PAN India direct drop-ship dispatch from KrishiGears Express Network",
      "24-48 hour dispatch with genuine replacement spare parts guarantee"
    ],
    "applications": [
      "Sugarcane",
      "Cotton",
      "Soybean",
      "Onion"
    ],
    "benefits": [
      "Saves significant manual labour",
      "Reduces operating cost over time",
      "FMTTI-tested durability",
      "Cuts inter-cultivation labor cost by up to 70% in Sugarcane fields",
      "High-torque de-weeding and soil aeration in Black Cotton Soil (Regur)",
      "Approved for state agricultural mechanization subsidies across Maharashtra and Gujarat"
    ],
    "warranty": "12 months manufacturer warranty + KrishiGears after-sales service network.",
    "video": "https://www.youtube.com/watch?v=KRJFfkK0eJM",
    "hsn": "8432",
    "gst": 12
  },
  {
    "slug": "rly-cr-r52-s",
    "category": "crop-reapers",
    "name": "KrishiGears CR-R52-S Baffle Crop Reaper | 52cc 2-Stroke Petrol Paddy Harvester",
    "model": "CR-R52-S",
    "brand": "KrishiGears",
    "badges": [
      "FMTTI Tested",
      "Commercial Grade",
      "Industrial Quality Standards"
    ],
    "price": 39000,
    "comparePrice": 46000,
    "images": [
      "/images/catalog/rly-cr-r52-s.webp"
    ],
    "specs": {
      "Brand": "KrishiGears",
      "Model": "CR-R52-S",
      "Product Type": "Baffle Crop Reaper / Heavy-Duty Brush Cutter",
      "Approval": "FMTTI Approved",
      "Engine Model": "1E44F / 2-Stroke",
      "Engine Power / Displacement": "52 cc / 1.5 kW",
      "Fuel Type": "Oil Mix Petrol (1:25 Ratio)",
      "Carry Type": "Side Pack"
    },
    "features": [
      "Genuine KrishiGears branded product",
      "Backed by manufacturer warranty",
      "PAN India delivery from KrishiGears",
      "Genuine spare parts availability",
      "Genuine KrishiGears commercial agricultural machinery",
      "FMTTI-tested commercial durability standard",
      "Precision-engineered transmission case for tough Indian soil",
      "PAN India direct drop-ship dispatch from KrishiGears Express Network",
      "24-48 hour dispatch with genuine replacement spare parts guarantee"
    ],
    "applications": [
      "Sugarcane",
      "Cotton",
      "Soybean",
      "Onion"
    ],
    "benefits": [
      "Saves significant manual labour",
      "Reduces operating cost over time",
      "FMTTI-tested durability",
      "Cuts inter-cultivation labor cost by up to 70% in Sugarcane fields",
      "High-torque de-weeding and soil aeration in Black Cotton Soil (Regur)",
      "Approved for state agricultural mechanization subsidies across Maharashtra and Gujarat"
    ],
    "warranty": "12 months manufacturer warranty + KrishiGears after-sales service network.",
    "video": "https://www.youtube.com/watch?v=KRJFfkK0eJM",
    "hsn": "8432",
    "gst": 12
  },
  {
    "slug": "rly-cr-r35-b",
    "category": "crop-reapers",
    "name": "KrishiGears CR-R35-B Baffle Crop Reaper | 35cc 4-Stroke Petrol Paddy Harvester",
    "model": "CR-R35-B",
    "brand": "KrishiGears",
    "badges": [
      "FMTTI Tested",
      "Commercial Grade",
      "Industrial Quality Standards"
    ],
    "price": 39000,
    "comparePrice": 46000,
    "images": [
      "/images/catalog/rly-cr-r35-b.webp",
      "/images/catalog/rly-cr-r35-b-1.webp"
    ],
    "specs": {
      "Brand": "KrishiGears",
      "Model": "CR-R35-B",
      "Product Type": "Baffle Crop Reaper / Brush Cutter",
      "Approval": "FMTTI Approved",
      "Engine Model": "JX35 / 4-Stroke",
      "Engine Power / Displacement": "35 cc / 1 kW",
      "Fuel Type": "Petrol",
      "Carry Type": "Backpack"
    },
    "features": [
      "Genuine KrishiGears branded product",
      "Backed by manufacturer warranty",
      "PAN India delivery from KrishiGears",
      "Genuine spare parts availability",
      "Genuine KrishiGears commercial agricultural machinery",
      "FMTTI-tested commercial durability standard",
      "Precision-engineered transmission case for tough Indian soil",
      "PAN India direct drop-ship dispatch from KrishiGears Express Network",
      "24-48 hour dispatch with genuine replacement spare parts guarantee"
    ],
    "applications": [
      "Sugarcane",
      "Cotton",
      "Soybean",
      "Onion"
    ],
    "benefits": [
      "Saves significant manual labour",
      "Reduces operating cost over time",
      "FMTTI-tested durability",
      "Cuts inter-cultivation labor cost by up to 70% in Sugarcane fields",
      "High-torque de-weeding and soil aeration in Black Cotton Soil (Regur)",
      "Approved for state agricultural mechanization subsidies across Maharashtra and Gujarat"
    ],
    "warranty": "12 months manufacturer warranty + KrishiGears after-sales service network.",
    "video": "https://www.youtube.com/watch?v=KRJFfkK0eJM",
    "hsn": "8432",
    "gst": 12
  },
  {
    "slug": "rly-cr-r35-s",
    "category": "crop-reapers",
    "name": "KrishiGears CR-R35-S Baffle Crop Reaper | 35cc 4-Stroke Petrol",
    "model": "CR-R35-S",
    "brand": "KrishiGears",
    "badges": [
      "FMTTI Tested",
      "Commercial Grade",
      "Industrial Quality Standards"
    ],
    "price": 39000,
    "comparePrice": 46000,
    "images": [
      "/images/catalog/rly-cr-r35-s.webp",
      "/images/catalog/rly-cr-r35-s-1.webp",
      "/images/catalog/rly-cr-r35-s-2.webp",
      "/images/catalog/rly-cr-r35-s-3.webp"
    ],
    "specs": {
      "Product Name": "KrishiGears CR-R35-S Baffle Crop Reaper",
      "Engine Type": "4-Stroke Petrol Engine",
      "Engine Displacement": "35cc",
      "Engine Power": "1 kW",
      "Fuel Type": "Petrol",
      "Carrying Type": "Side Pack",
      "Cutting Accessories": "Trimmer Head, 2mm 2T Blade, 80T TCT Blade, Paddy Harvester",
      "Approval": "FMTTI Approved"
    },
    "features": [
      "Genuine KrishiGears branded product",
      "Backed by manufacturer warranty",
      "PAN India delivery from KrishiGears",
      "Genuine spare parts availability",
      "Genuine KrishiGears commercial agricultural machinery",
      "FMTTI-tested commercial durability standard",
      "Precision-engineered transmission case for tough Indian soil",
      "PAN India direct drop-ship dispatch from KrishiGears Express Network",
      "24-48 hour dispatch with genuine replacement spare parts guarantee"
    ],
    "applications": [
      "Sugarcane",
      "Cotton",
      "Soybean",
      "Onion"
    ],
    "benefits": [
      "Saves significant manual labour",
      "Reduces operating cost over time",
      "FMTTI-tested durability",
      "Cuts inter-cultivation labor cost by up to 70% in Sugarcane fields",
      "High-torque de-weeding and soil aeration in Black Cotton Soil (Regur)",
      "Approved for state agricultural mechanization subsidies across Maharashtra and Gujarat"
    ],
    "warranty": "12 months manufacturer warranty + KrishiGears after-sales service network.",
    "video": "https://www.youtube.com/watch?v=KRJFfkK0eJM",
    "hsn": "8432",
    "gst": 12
  },
  {
    "slug": "rly-1e40f-2",
    "category": "crop-reapers",
    "name": "KrishiGears CR-R43W-S Baffle Crop Reaper | 43cc 2-Stroke Agricultural Cutter",
    "model": "1E40F-2",
    "brand": "KrishiGears",
    "badges": [
      "FMTTI Tested",
      "Commercial Grade",
      "Industrial Quality Standards"
    ],
    "price": 39000,
    "comparePrice": 46000,
    "images": [
      "/images/catalog/rly-1e40f-2.webp",
      "/images/catalog/rly-1e40f-2-1.webp",
      "/images/catalog/rly-1e40f-2-2.webp",
      "/images/catalog/rly-1e40f-2-3.webp"
    ],
    "specs": {
      "Product Name": "KrishiGears CR-R43W-S Baffle Crop Reaper",
      "Engine Model": "1E40F-2",
      "Engine Type": "2-Stroke Petrol Engine",
      "Engine Displacement": "43cc",
      "Engine Power": "1.5 kW",
      "Carburetor": "Walbro",
      "Fuel Type": "Petrol + 2-Stroke Oil",
      "Fuel Mixing Ratio": "1:25",
      "Carrying Type": "Side Pack",
      "Cutting Accessories": "Trimmer Head, 2mm 2T Blade, 80T TCT Blade, Paddy Harvester"
    },
    "features": [
      "Genuine KrishiGears branded product",
      "Backed by manufacturer warranty",
      "PAN India delivery from KrishiGears",
      "Genuine spare parts availability",
      "Genuine KrishiGears commercial agricultural machinery",
      "FMTTI-tested commercial durability standard",
      "Precision-engineered transmission case for tough Indian soil",
      "PAN India direct drop-ship dispatch from KrishiGears Express Network",
      "24-48 hour dispatch with genuine replacement spare parts guarantee"
    ],
    "applications": [
      "Sugarcane",
      "Cotton",
      "Soybean",
      "Onion"
    ],
    "benefits": [
      "Saves significant manual labour",
      "Reduces operating cost over time",
      "FMTTI-tested durability",
      "Cuts inter-cultivation labor cost by up to 70% in Sugarcane fields",
      "High-torque de-weeding and soil aeration in Black Cotton Soil (Regur)",
      "Approved for state agricultural mechanization subsidies across Maharashtra and Gujarat"
    ],
    "warranty": "12 months manufacturer warranty + KrishiGears after-sales service network.",
    "video": "https://www.youtube.com/watch?v=KRJFfkK0eJM",
    "hsn": "8432",
    "gst": 12
  },
  {
    "slug": "rly-cr-r50-s",
    "category": "crop-reapers",
    "name": "KrishiGears CR-R50-S Baffle Crop Reaper | 50 CC",
    "model": "CR-R50-S",
    "brand": "KrishiGears",
    "badges": [
      "FMTTI Tested",
      "Commercial Grade",
      "Industrial Quality Standards"
    ],
    "price": 39000,
    "comparePrice": 46000,
    "images": [
      "/images/catalog/rly-cr-r50-s.webp",
      "/images/catalog/rly-cr-r50-s-1.webp",
      "/images/catalog/rly-cr-r50-s-2.webp",
      "/images/catalog/rly-cr-r50-s-3.webp"
    ],
    "specs": {
      "Brand": "KrishiGears",
      "Model": "CR-R50-S",
      "Product Type": "Baffle Crop Reaper",
      "Engine Model": "J50",
      "Engine Type": "4-Stroke",
      "Engine Capacity": "50 CC",
      "Engine Power": "1.5 kW",
      "Fuel": "Petrol",
      "Carry Type": "Backpack",
      "Accessories": "Trimmer Head, 2 mm 2T Blade, 80T CT Blade, Paddy Harvester"
    },
    "features": [
      "Genuine KrishiGears branded product",
      "Backed by manufacturer warranty",
      "PAN India delivery from KrishiGears",
      "Genuine spare parts availability",
      "Genuine KrishiGears commercial agricultural machinery",
      "FMTTI-tested commercial durability standard",
      "Precision-engineered transmission case for tough Indian soil",
      "PAN India direct drop-ship dispatch from KrishiGears Express Network",
      "24-48 hour dispatch with genuine replacement spare parts guarantee"
    ],
    "applications": [
      "Sugarcane",
      "Cotton",
      "Soybean",
      "Onion"
    ],
    "benefits": [
      "Saves significant manual labour",
      "Reduces operating cost over time",
      "FMTTI-tested durability",
      "Cuts inter-cultivation labor cost by up to 70% in Sugarcane fields",
      "High-torque de-weeding and soil aeration in Black Cotton Soil (Regur)",
      "Approved for state agricultural mechanization subsidies across Maharashtra and Gujarat"
    ],
    "warranty": "12 months manufacturer warranty + KrishiGears after-sales service network.",
    "video": "https://www.youtube.com/watch?v=KRJFfkK0eJM",
    "hsn": "8432",
    "gst": 12
  },
  {
    "slug": "rly-rapl-tb-52",
    "category": "crop-reapers",
    "name": "KrishiGears RAPL-TB-52 Wheel Type Baffle Crop Reaper | 52 CC",
    "model": "RAPL-TB-52",
    "brand": "KrishiGears",
    "badges": [
      "FMTTI Tested",
      "Commercial Grade",
      "Industrial Quality Standards"
    ],
    "price": 39000,
    "comparePrice": 46000,
    "images": [
      "/images/catalog/rly-rapl-tb-52.webp",
      "/images/catalog/rly-rapl-tb-52-1.webp",
      "/images/catalog/rly-rapl-tb-52-2.webp"
    ],
    "specs": {
      "Brand": "KrishiGears",
      "Model": "RAPL-TB-52",
      "Product Type": "Wheel Type Baffle Crop Reaper",
      "Engine Model": "144F",
      "Engine Type": "2-Stroke",
      "Engine Capacity": "52 CC",
      "Engine Power": "1.5 kW",
      "Fuel": "Petrol",
      "Fuel Mix Ratio": "1:25",
      "Carry Type": "Trolley",
      "Mobility": "Wheels for Easy Movement",
      "Features": "Easy Start Technology, ON/OFF Switch",
      "Accessories": "Trimmer Head, 2 mm 2T Blade, Oil Can, Tool Kit",
      "Applications": "Grass Cutting, Crop Cutting, Lawn Cutting, Bush Cutting"
    },
    "features": [
      "Genuine KrishiGears branded product",
      "Backed by manufacturer warranty",
      "PAN India delivery from KrishiGears",
      "Genuine spare parts availability",
      "Genuine KrishiGears commercial agricultural machinery",
      "FMTTI-tested commercial durability standard",
      "Precision-engineered transmission case for tough Indian soil",
      "PAN India direct drop-ship dispatch from KrishiGears Express Network",
      "24-48 hour dispatch with genuine replacement spare parts guarantee"
    ],
    "applications": [
      "Sugarcane",
      "Cotton",
      "Soybean",
      "Onion"
    ],
    "benefits": [
      "Saves significant manual labour",
      "Reduces operating cost over time",
      "FMTTI-tested durability",
      "Cuts inter-cultivation labor cost by up to 70% in Sugarcane fields",
      "High-torque de-weeding and soil aeration in Black Cotton Soil (Regur)",
      "Approved for state agricultural mechanization subsidies across Maharashtra and Gujarat"
    ],
    "warranty": "12 months manufacturer warranty + KrishiGears after-sales service network.",
    "video": "https://www.youtube.com/watch?v=KRJFfkK0eJM",
    "hsn": "8432",
    "gst": 12
  },
  {
    "slug": "rly-m-52",
    "category": "crop-reapers",
    "name": "KrishiGears M-52 Baffle Crop Reaper | 52 CC 2 HP",
    "model": "M-52",
    "brand": "KrishiGears",
    "badges": [
      "FMTTI Tested",
      "Commercial Grade",
      "Industrial Quality Standards"
    ],
    "price": 39000,
    "comparePrice": 46000,
    "images": [
      "/images/catalog/rly-m-52.webp",
      "/images/catalog/rly-m-52-1.webp",
      "/images/catalog/rly-m-52-2.webp",
      "/images/catalog/rly-m-52-3.webp"
    ],
    "specs": {
      "Model": "M-52",
      "Product Type": "Baffle Crop Reaper",
      "Displacement": "52 CC",
      "Engine Type": "2 Stroke",
      "Engine Power": "2 HP",
      "Engine Speed": "7000 RPM",
      "Fuel": "Oil Mix Petrol 1:25",
      "Carry Type": "Backpack",
      "Blade": "2 mm 2T Blade",
      "Additional Blade": "80T TCT Blade",
      "Trimmer Head": "Easy Refill Trimmer Head"
    },
    "features": [
      "Genuine KrishiGears branded product",
      "Backed by manufacturer warranty",
      "PAN India delivery from KrishiGears",
      "Genuine spare parts availability",
      "Genuine KrishiGears commercial agricultural machinery",
      "FMTTI-tested commercial durability standard",
      "Precision-engineered transmission case for tough Indian soil",
      "PAN India direct drop-ship dispatch from KrishiGears Express Network",
      "24-48 hour dispatch with genuine replacement spare parts guarantee"
    ],
    "applications": [
      "Sugarcane",
      "Cotton",
      "Soybean",
      "Onion"
    ],
    "benefits": [
      "Saves significant manual labour",
      "Reduces operating cost over time",
      "FMTTI-tested durability",
      "Cuts inter-cultivation labor cost by up to 70% in Sugarcane fields",
      "High-torque de-weeding and soil aeration in Black Cotton Soil (Regur)",
      "Approved for state agricultural mechanization subsidies across Maharashtra and Gujarat"
    ],
    "warranty": "12 months manufacturer warranty + KrishiGears after-sales service network.",
    "video": "https://www.youtube.com/watch?v=KRJFfkK0eJM",
    "hsn": "8432",
    "gst": 12
  },
  {
    "slug": "rly-m-35s",
    "category": "crop-reapers",
    "name": "KrishiGears M-35S Baffle Crop Reaper | 35 CC 4-Stroke",
    "model": "M-35S",
    "brand": "KrishiGears",
    "badges": [
      "FMTTI Tested",
      "Commercial Grade",
      "Industrial Quality Standards"
    ],
    "price": 39000,
    "comparePrice": 46000,
    "images": [
      "/images/catalog/rly-m-35s.webp",
      "/images/catalog/rly-m-35s-1.webp",
      "/images/catalog/rly-m-35s-2.webp",
      "/images/catalog/rly-m-35s-3.webp"
    ],
    "specs": {
      "Model": "M-35S",
      "Product Type": "Baffle Crop Reaper",
      "Displacement": "35 CC",
      "Engine Type": "4 Stroke",
      "Engine Power": "1.25 HP",
      "Engine Speed": "7000 RPM",
      "Fuel": "Petrol",
      "Carry Type": "Side Pack",
      "Shaft Thickness": "2 mm",
      "Handle": "One Piece Premium Handle",
      "Gear Box": "Premium Durable Gear Box",
      "Blade": "2 mm 2T Blade",
      "Additional Blade": "80T TCT Blade",
      "Trimmer Head": "Easy Refill Trimmer Head",
      "Safety Feature": "Safety Guard"
    },
    "features": [
      "Genuine KrishiGears branded product",
      "Backed by manufacturer warranty",
      "PAN India delivery from KrishiGears",
      "Genuine spare parts availability",
      "Genuine KrishiGears commercial agricultural machinery",
      "FMTTI-tested commercial durability standard",
      "Precision-engineered transmission case for tough Indian soil",
      "PAN India direct drop-ship dispatch from KrishiGears Express Network",
      "24-48 hour dispatch with genuine replacement spare parts guarantee"
    ],
    "applications": [
      "Sugarcane",
      "Cotton",
      "Soybean",
      "Onion"
    ],
    "benefits": [
      "Saves significant manual labour",
      "Reduces operating cost over time",
      "FMTTI-tested durability",
      "Cuts inter-cultivation labor cost by up to 70% in Sugarcane fields",
      "High-torque de-weeding and soil aeration in Black Cotton Soil (Regur)",
      "Approved for state agricultural mechanization subsidies across Maharashtra and Gujarat"
    ],
    "warranty": "12 months manufacturer warranty + KrishiGears after-sales service network.",
    "video": "https://www.youtube.com/watch?v=KRJFfkK0eJM",
    "hsn": "8432",
    "gst": 12
  },
  {
    "slug": "rly-rh-3800d-sp",
    "category": "power-weeders",
    "name": "KrishiGears RH-3800D-SP Front Rotary Mini Tiller | 247 CC",
    "model": "RH-3800D-SP",
    "brand": "KrishiGears",
    "badges": [
      "FMTTI Tested",
      "Commercial Grade",
      "Industrial Quality Standards"
    ],
    "price": 36000,
    "comparePrice": 44000,
    "images": [
      "/images/catalog/rly-rh-3800d-sp.webp",
      "/images/catalog/rly-rh-3800d-sp-1.webp",
      "/images/catalog/rly-rh-3800d-sp-2.webp",
      "/images/catalog/rly-rh-3800d-sp-3.webp"
    ],
    "specs": {
      "Brand": "KrishiGears",
      "Model": "RH-3800D-SP",
      "Product Type": "Front Rotary Mini Tiller",
      "Drive Type": "Self Propelled",
      "Engine Power": "247 CC / 3.6 kW",
      "Engine Model": "173F",
      "Engine Type": "4 Stroke Petrol Engine",
      "Working Width": "38 cm / 15 Inch",
      "Handle": "Adjustable Up / Down Handle",
      "Wheels": "Double Solid Wheels",
      "Starting System": "Easy Recoil Start",
      "Switch": "On / Off Switch",
      "Attachment": "Rotary Blades"
    },
    "features": [
      "Genuine KrishiGears branded product",
      "Backed by manufacturer warranty",
      "PAN India delivery from KrishiGears",
      "Genuine spare parts availability",
      "Genuine KrishiGears commercial agricultural machinery",
      "FMTTI-tested commercial durability standard",
      "Precision-engineered transmission case for tough Indian soil",
      "PAN India direct drop-ship dispatch from KrishiGears Express Network",
      "24-48 hour dispatch with genuine replacement spare parts guarantee"
    ],
    "applications": [
      "Sugarcane",
      "Cotton",
      "Soybean",
      "Onion"
    ],
    "benefits": [
      "Saves significant manual labour",
      "Reduces operating cost over time",
      "FMTTI-tested durability",
      "Cuts inter-cultivation labor cost by up to 70% in Sugarcane fields",
      "High-torque de-weeding and soil aeration in Black Cotton Soil (Regur)",
      "Approved for state agricultural mechanization subsidies across Maharashtra and Gujarat"
    ],
    "warranty": "12 months manufacturer warranty + KrishiGears after-sales service network.",
    "video": "https://www.youtube.com/watch?v=KRJFfkK0eJM",
    "hsn": "8432",
    "gst": 12
  },
  {
    "slug": "rly-rh-3800d",
    "category": "power-weeders",
    "name": "KrishiGears RH-3800D Front Rotary Mini Tiller | 247 CC",
    "model": "RH-3800D",
    "brand": "KrishiGears",
    "badges": [
      "FMTTI Tested",
      "Commercial Grade",
      "Industrial Quality Standards"
    ],
    "price": 36000,
    "comparePrice": 44000,
    "images": [
      "/images/catalog/rly-rh-3800d.webp",
      "/images/catalog/rly-rh-3800d-1.webp",
      "/images/catalog/rly-rh-3800d-2.webp"
    ],
    "specs": {
      "Brand": "KrishiGears",
      "Model": "RH-3800D",
      "Product Type": "Front Rotary Mini Tiller",
      "Operation": "Hand Push",
      "Engine Power": "247 CC / 3.6 kW",
      "Engine Model": "173F",
      "Engine Type": "4 Stroke Petrol Engine",
      "Working Width": "38 cm / 15 Inch",
      "Handle": "Adjustable Up / Down Handle",
      "Wheels": "Double Wheel",
      "Starting System": "Easy Recoil Start",
      "Switch": "On / Off Switch",
      "Attachment": "Rotary Blades"
    },
    "features": [
      "Genuine KrishiGears branded product",
      "Backed by manufacturer warranty",
      "PAN India delivery from KrishiGears",
      "Genuine spare parts availability",
      "Genuine KrishiGears commercial agricultural machinery",
      "FMTTI-tested commercial durability standard",
      "Precision-engineered transmission case for tough Indian soil",
      "PAN India direct drop-ship dispatch from KrishiGears Express Network",
      "24-48 hour dispatch with genuine replacement spare parts guarantee"
    ],
    "applications": [
      "Sugarcane",
      "Cotton",
      "Soybean",
      "Onion"
    ],
    "benefits": [
      "Saves significant manual labour",
      "Reduces operating cost over time",
      "FMTTI-tested durability",
      "Cuts inter-cultivation labor cost by up to 70% in Sugarcane fields",
      "High-torque de-weeding and soil aeration in Black Cotton Soil (Regur)",
      "Approved for state agricultural mechanization subsidies across Maharashtra and Gujarat"
    ],
    "warranty": "12 months manufacturer warranty + KrishiGears after-sales service network.",
    "video": "https://www.youtube.com/watch?v=KRJFfkK0eJM",
    "hsn": "8432",
    "gst": 12
  },
  {
    "slug": "rly-rh-3800g-sp",
    "category": "power-weeders",
    "name": "KrishiGears RH-3800G-SP Front Rotary Mini Tiller",
    "model": "RH-3800G-SP",
    "brand": "KrishiGears",
    "badges": [
      "FMTTI Tested",
      "Commercial Grade",
      "Industrial Quality Standards"
    ],
    "price": 36000,
    "comparePrice": 44000,
    "images": [
      "/images/catalog/rly-rh-3800g-sp.webp",
      "/images/catalog/rly-rh-3800g-sp-1.webp"
    ],
    "specs": {
      "Brand": "KrishiGears",
      "Model": "RH-3800G-SP",
      "Product Type": "Front Rotary Mini Tiller",
      "Drive Type": "Self Propelled",
      "Engine Power": "212 CC / 4 kW",
      "Engine Model": "170F",
      "Engine Type": "4 Stroke Petrol Engine",
      "Working Width": "38 cm / 15 Inch",
      "Handle": "Adjustable Up / Down Handle",
      "Wheels": "Double Solid Wheels",
      "Starting System": "Easy Recoil Start",
      "Switch": "On / Off Switch",
      "Free Attachment": "Rotary Blades"
    },
    "features": [
      "Genuine KrishiGears branded product",
      "Backed by manufacturer warranty",
      "PAN India delivery from KrishiGears",
      "Genuine spare parts availability",
      "Genuine KrishiGears commercial agricultural machinery",
      "FMTTI-tested commercial durability standard",
      "Precision-engineered transmission case for tough Indian soil",
      "PAN India direct drop-ship dispatch from KrishiGears Express Network",
      "24-48 hour dispatch with genuine replacement spare parts guarantee"
    ],
    "applications": [
      "Sugarcane",
      "Cotton",
      "Soybean",
      "Onion"
    ],
    "benefits": [
      "Saves significant manual labour",
      "Reduces operating cost over time",
      "FMTTI-tested durability",
      "Cuts inter-cultivation labor cost by up to 70% in Sugarcane fields",
      "High-torque de-weeding and soil aeration in Black Cotton Soil (Regur)",
      "Approved for state agricultural mechanization subsidies across Maharashtra and Gujarat"
    ],
    "warranty": "12 months manufacturer warranty + KrishiGears after-sales service network.",
    "video": "https://www.youtube.com/watch?v=KRJFfkK0eJM",
    "hsn": "8432",
    "gst": 12
  },
  {
    "slug": "rly-rh-3800g",
    "category": "power-weeders",
    "name": "KrishiGears RH-3800G Front Rotary Mini Tiller | 212 CC 4 KW",
    "model": "RH-3800G",
    "brand": "KrishiGears",
    "badges": [
      "FMTTI Tested",
      "Commercial Grade",
      "Industrial Quality Standards"
    ],
    "price": 36000,
    "comparePrice": 44000,
    "images": [
      "/images/catalog/rly-rh-3800g.webp",
      "/images/catalog/rly-rh-3800g-1.webp"
    ],
    "specs": {
      "Model": "RH-3800G",
      "Product Type": "Front Rotary Mini Tiller",
      "Engine": "170F, 4 Stroke",
      "Engine Capacity": "212 CC",
      "Power": "4 KW",
      "Working Width": "38 cm / 15 inch",
      "Operation": "Hand Push",
      "Handle": "Adjustable Up &amp; Down",
      "Weeding System": "7 Blades",
      "Blade Type": "Rotary Blades",
      "Wheel": "Double Wheel",
      "Starting System": "Easy Recoil Start",
      "Switch": "ON / OFF Switch",
      "Free Attachments": "Ridger, 7 Blades &amp; Rotary Blades",
      "Additional Feature": "Wooden Box"
    },
    "features": [
      "Genuine KrishiGears branded product",
      "Backed by manufacturer warranty",
      "PAN India delivery from KrishiGears",
      "Genuine spare parts availability",
      "Genuine KrishiGears commercial agricultural machinery",
      "FMTTI-tested commercial durability standard",
      "Precision-engineered transmission case for tough Indian soil",
      "PAN India direct drop-ship dispatch from KrishiGears Express Network",
      "24-48 hour dispatch with genuine replacement spare parts guarantee"
    ],
    "applications": [
      "Sugarcane",
      "Cotton",
      "Soybean",
      "Onion"
    ],
    "benefits": [
      "Saves significant manual labour",
      "Reduces operating cost over time",
      "FMTTI-tested durability",
      "Cuts inter-cultivation labor cost by up to 70% in Sugarcane fields",
      "High-torque de-weeding and soil aeration in Black Cotton Soil (Regur)",
      "Approved for state agricultural mechanization subsidies across Maharashtra and Gujarat"
    ],
    "warranty": "12 months manufacturer warranty + KrishiGears after-sales service network.",
    "video": "https://www.youtube.com/watch?v=KRJFfkK0eJM",
    "hsn": "8432",
    "gst": 12
  },
  {
    "slug": "rly-rh-2600",
    "category": "power-weeders",
    "name": "KrishiGears RH-2600 Front Rotary Mini Tiller | 212 CC 4 KW",
    "model": "RH-2600",
    "brand": "KrishiGears",
    "badges": [
      "FMTTI Tested",
      "Commercial Grade",
      "Industrial Quality Standards"
    ],
    "price": 28500,
    "comparePrice": 34500,
    "images": [
      "/images/catalog/rly-rh-2600.webp",
      "/images/catalog/rly-rh-2600-1.webp",
      "/images/catalog/rly-rh-2600-2.webp",
      "/images/catalog/rly-rh-2600-3.webp"
    ],
    "specs": {
      "Model": "RH-2600",
      "Product Type": "Front Rotary Mini Tiller",
      "Engine": "170F, 4 Stroke",
      "Engine Capacity": "212 CC",
      "Power": "4 KW",
      "Working Width": "26 cm / 10.25 inch",
      "Operation": "Hand Push",
      "Handle": "Adjustable Up &amp; Down",
      "Weeding System": "7 Blades",
      "Wheel": "Double Wheel",
      "Starting System": "Easy Recoil Start",
      "Switch": "ON / OFF Switch",
      "Attachments": "Ridger &amp; 7 Blades",
      "Additional Feature": "Wooden Box"
    },
    "features": [
      "Genuine KrishiGears branded product",
      "Backed by manufacturer warranty",
      "PAN India delivery from KrishiGears",
      "Genuine spare parts availability",
      "Genuine KrishiGears commercial agricultural machinery",
      "FMTTI-tested commercial durability standard",
      "Precision-engineered transmission case for tough Indian soil",
      "PAN India direct drop-ship dispatch from KrishiGears Express Network",
      "24-48 hour dispatch with genuine replacement spare parts guarantee"
    ],
    "applications": [
      "Sugarcane",
      "Cotton",
      "Soybean",
      "Onion"
    ],
    "benefits": [
      "Saves significant manual labour",
      "Reduces operating cost over time",
      "FMTTI-tested durability",
      "Cuts inter-cultivation labor cost by up to 70% in Sugarcane fields",
      "High-torque de-weeding and soil aeration in Black Cotton Soil (Regur)",
      "Approved for state agricultural mechanization subsidies across Maharashtra and Gujarat"
    ],
    "warranty": "12 months manufacturer warranty + KrishiGears after-sales service network.",
    "video": "https://www.youtube.com/watch?v=KRJFfkK0eJM",
    "hsn": "8432",
    "gst": 12
  },
  {
    "slug": "rly-rh-2000",
    "category": "power-weeders",
    "name": "KrishiGears RH-2000 Front Rotary Mini Tiller",
    "model": "RH-2000",
    "brand": "KrishiGears",
    "badges": [
      "FMTTI Tested",
      "Commercial Grade",
      "Industrial Quality Standards"
    ],
    "price": 28500,
    "comparePrice": 34500,
    "images": [
      "/images/catalog/rly-rh-2000.webp",
      "/images/catalog/rly-rh-2000-1.webp",
      "/images/catalog/rly-rh-2000-2.webp",
      "/images/catalog/rly-rh-2000-3.webp"
    ],
    "specs": {
      "Brand": "KrishiGears",
      "Model": "RH-2000",
      "Machine Type": "Front Rotary Mini Tiller",
      "Engine": "170F / 4 Stroke",
      "Engine Power": "212cc / 4 kW",
      "Working Width": "20 cm / 8 inch",
      "Working System": "Front Rotary",
      "Blades": "7 Blades",
      "Handle": "Adjustable Up/Down",
      "Wheel System": "Double Wheel",
      "Starting System": "Easy Recoil Start",
      "Attachments": "Ridger &amp; 7-Blade Weeding Attachment",
      "Packing": "Wooden Box"
    },
    "features": [
      "Genuine KrishiGears branded product",
      "Backed by manufacturer warranty",
      "PAN India delivery from KrishiGears",
      "Genuine spare parts availability",
      "Genuine KrishiGears commercial agricultural machinery",
      "FMTTI-tested commercial durability standard",
      "Precision-engineered transmission case for tough Indian soil",
      "PAN India direct drop-ship dispatch from KrishiGears Express Network",
      "24-48 hour dispatch with genuine replacement spare parts guarantee"
    ],
    "applications": [
      "Sugarcane",
      "Cotton",
      "Soybean",
      "Onion"
    ],
    "benefits": [
      "Saves significant manual labour",
      "Reduces operating cost over time",
      "FMTTI-tested durability",
      "Cuts inter-cultivation labor cost by up to 70% in Sugarcane fields",
      "High-torque de-weeding and soil aeration in Black Cotton Soil (Regur)",
      "Approved for state agricultural mechanization subsidies across Maharashtra and Gujarat"
    ],
    "warranty": "12 months manufacturer warranty + KrishiGears after-sales service network.",
    "video": "https://www.youtube.com/watch?v=KRJFfkK0eJM",
    "hsn": "8432",
    "gst": 12
  },
  {
    "slug": "rly-rap-l-rh-6301",
    "category": "power-weeders",
    "name": "KrishiGears RAPL-RH-6301 63CC Petrol Mini Weeder | Buy Online",
    "model": "RAP-L-RH-6301",
    "brand": "KrishiGears",
    "badges": [
      "FMTTI Tested",
      "Commercial Grade",
      "Industrial Quality Standards"
    ],
    "price": 18500,
    "comparePrice": 22500,
    "images": [
      "/images/catalog/rly-rap-l-rh-6301.webp",
      "/images/catalog/rly-rap-l-rh-6301-1.webp",
      "/images/catalog/rly-rap-l-rh-6301-2.webp",
      "/images/catalog/rly-rap-l-rh-6301-3.webp"
    ],
    "specs": {
      "Product Name": "KrishiGears Mini Weeder",
      "Model": "RAP-L-RH-6301",
      "Engine Model": "1E48F / 2 Stroke",
      "Engine Power": "63cc / 2.2 kW",
      "Fuel": "Oil Mix Petrol 1:25",
      "Machine Type": "Mini Weeder",
      "Type": "Carry Type Trolley",
      "Application": "Weeding"
    },
    "features": [
      "Genuine KrishiGears branded product",
      "Backed by manufacturer warranty",
      "PAN India delivery from KrishiGears",
      "Genuine spare parts availability",
      "Genuine KrishiGears commercial agricultural machinery",
      "FMTTI-tested commercial durability standard",
      "Precision-engineered transmission case for tough Indian soil",
      "PAN India direct drop-ship dispatch from KrishiGears Express Network",
      "24-48 hour dispatch with genuine replacement spare parts guarantee"
    ],
    "applications": [
      "Sugarcane",
      "Cotton",
      "Soybean",
      "Onion"
    ],
    "benefits": [
      "Saves significant manual labour",
      "Reduces operating cost over time",
      "FMTTI-tested durability",
      "Cuts inter-cultivation labor cost by up to 70% in Sugarcane fields",
      "High-torque de-weeding and soil aeration in Black Cotton Soil (Regur)",
      "Approved for state agricultural mechanization subsidies across Maharashtra and Gujarat"
    ],
    "warranty": "12 months manufacturer warranty + KrishiGears after-sales service network.",
    "video": "https://www.youtube.com/watch?v=KRJFfkK0eJM",
    "hsn": "8432",
    "gst": 12
  },
  {
    "slug": "rly-my-300g",
    "category": "power-weeders",
    "name": "KrishiGears MY-300G Mini Power Tiller | 63cc",
    "model": "MY-300G",
    "brand": "KrishiGears",
    "badges": [
      "FMTTI Tested",
      "Commercial Grade",
      "Industrial Quality Standards"
    ],
    "price": 28500,
    "comparePrice": 34500,
    "images": [
      "/images/catalog/rly-my-300g.webp",
      "/images/catalog/rly-my-300g-1.webp",
      "/images/catalog/rly-my-300g-2.webp"
    ],
    "specs": {
      "Model": "MY-300G",
      "Product Type": "Mini Power Tiller",
      "Brand": "KrishiGears",
      "Engine Model": "1E48F / 2 Stroke",
      "Engine Power": "63cc / 2.3 kW",
      "Fuel": "Oil Mix Petrol 1:25",
      "Suitable For": "Tilling &amp; Weeding",
      "Control": "Fingertip Accelerator",
      "Switch": "On-Off Switch",
      "Mobility": "Wheels for Easy Movement"
    },
    "features": [
      "Genuine KrishiGears branded product",
      "Backed by manufacturer warranty",
      "PAN India delivery from KrishiGears",
      "Genuine spare parts availability",
      "Genuine KrishiGears commercial agricultural machinery",
      "FMTTI-tested commercial durability standard",
      "Precision-engineered transmission case for tough Indian soil",
      "PAN India direct drop-ship dispatch from KrishiGears Express Network",
      "24-48 hour dispatch with genuine replacement spare parts guarantee"
    ],
    "applications": [
      "Sugarcane",
      "Cotton",
      "Soybean",
      "Onion"
    ],
    "benefits": [
      "Saves significant manual labour",
      "Reduces operating cost over time",
      "FMTTI-tested durability",
      "Cuts inter-cultivation labor cost by up to 70% in Sugarcane fields",
      "High-torque de-weeding and soil aeration in Black Cotton Soil (Regur)",
      "Approved for state agricultural mechanization subsidies across Maharashtra and Gujarat"
    ],
    "warranty": "12 months manufacturer warranty + KrishiGears after-sales service network.",
    "video": "https://www.youtube.com/watch?v=KRJFfkK0eJM",
    "hsn": "8432",
    "gst": 12
  },
  {
    "slug": "rly-my-573d-upgraded",
    "category": "power-weeders",
    "name": "KrishiGears MY-573D Upgraded Diesel Power Weeder | 247 CC",
    "model": "MY-573D (Upgraded)",
    "brand": "KrishiGears",
    "badges": [
      "FMTTI Tested",
      "Commercial Grade",
      "Industrial Quality Standards"
    ],
    "price": 54000,
    "comparePrice": 64000,
    "images": [
      "/images/catalog/rly-my-573d-upgraded.webp",
      "/images/catalog/rly-my-573d-upgraded-1.webp"
    ],
    "specs": {
      "Model": "MY-573D (Upgraded)",
      "Engine": "173F 4 Stroke Diesel",
      "Displacement": "247 cc",
      "Maximum Power": "3.6 kW",
      "Transmission": "Gear Drive",
      "Starting System": "Recoil",
      "Blades": "32 Pcs",
      "Tyre": "4.0-10 Tubeless",
      "Tilling Width": "1050 mm",
      "Tilling Depth": "100-300 mm",
      "Handle": "Adjustable"
    },
    "features": [
      "Genuine KrishiGears branded product",
      "Backed by manufacturer warranty",
      "PAN India delivery from KrishiGears",
      "Genuine spare parts availability",
      "Genuine KrishiGears commercial agricultural machinery",
      "FMTTI-tested commercial durability standard",
      "Precision-engineered transmission case for tough Indian soil",
      "PAN India direct drop-ship dispatch from KrishiGears Express Network",
      "24-48 hour dispatch with genuine replacement spare parts guarantee"
    ],
    "applications": [
      "Sugarcane",
      "Cotton",
      "Soybean",
      "Onion"
    ],
    "benefits": [
      "Saves significant manual labour",
      "Reduces operating cost over time",
      "FMTTI-tested durability",
      "Cuts inter-cultivation labor cost by up to 70% in Sugarcane fields",
      "High-torque de-weeding and soil aeration in Black Cotton Soil (Regur)",
      "Approved for state agricultural mechanization subsidies across Maharashtra and Gujarat"
    ],
    "warranty": "12 months manufacturer warranty + KrishiGears after-sales service network.",
    "video": "https://www.youtube.com/watch?v=KRJFfkK0eJM",
    "hsn": "8432",
    "gst": 12
  },
  {
    "slug": "rly-my-550g",
    "category": "power-weeders",
    "name": "KrishiGears MY-550G Upgraded Petrol Power Weeder | 212 CC, 4 KW",
    "model": "MY-550G",
    "brand": "KrishiGears",
    "badges": [
      "FMTTI Tested",
      "Commercial Grade",
      "Industrial Quality Standards"
    ],
    "price": 42000,
    "comparePrice": 49000,
    "images": [
      "/images/catalog/rly-my-550g.webp",
      "/images/catalog/rly-my-550g-1.webp",
      "/images/catalog/rly-my-550g-2.webp"
    ],
    "specs": {
      "Engine": "Petrol",
      "Power": "",
      "Fuel": "Petrol",
      "Start": "Recoil"
    },
    "features": [
      "Genuine KrishiGears branded product",
      "Backed by manufacturer warranty",
      "PAN India delivery from KrishiGears",
      "Genuine spare parts availability",
      "Genuine KrishiGears commercial agricultural machinery",
      "FMTTI-tested commercial durability standard",
      "Precision-engineered transmission case for tough Indian soil",
      "PAN India direct drop-ship dispatch from KrishiGears Express Network",
      "24-48 hour dispatch with genuine replacement spare parts guarantee"
    ],
    "applications": [
      "Sugarcane",
      "Cotton",
      "Soybean",
      "Onion"
    ],
    "benefits": [
      "Saves significant manual labour",
      "Reduces operating cost over time",
      "FMTTI-tested durability",
      "Cuts inter-cultivation labor cost by up to 70% in Sugarcane fields",
      "High-torque de-weeding and soil aeration in Black Cotton Soil (Regur)",
      "Approved for state agricultural mechanization subsidies across Maharashtra and Gujarat"
    ],
    "warranty": "12 months manufacturer warranty + KrishiGears after-sales service network.",
    "video": "https://www.youtube.com/watch?v=KRJFfkK0eJM",
    "hsn": "8432",
    "gst": 12
  },
  {
    "slug": "rly-my-470g-hl",
    "category": "power-weeders",
    "name": "KrishiGears MY-470G-HL Upgraded Petrol Power Weeder | 212 CC",
    "model": "MY-470G-HL",
    "brand": "KrishiGears",
    "badges": [
      "FMTTI Tested",
      "Commercial Grade",
      "Industrial Quality Standards"
    ],
    "price": 38000,
    "comparePrice": 45000,
    "images": [
      "/images/catalog/rly-my-470g-hl.webp",
      "/images/catalog/rly-my-470g-hl-1.webp",
      "/images/catalog/rly-my-470g-hl-2.webp",
      "/images/catalog/rly-my-470g-hl-3.webp"
    ],
    "specs": {
      "Engine": "Petrol",
      "Power": "",
      "Fuel": "Petrol",
      "Start": "Recoil"
    },
    "features": [
      "Genuine KrishiGears branded product",
      "Backed by manufacturer warranty",
      "PAN India delivery from KrishiGears",
      "Genuine spare parts availability",
      "Genuine KrishiGears commercial agricultural machinery",
      "FMTTI-tested commercial durability standard",
      "Precision-engineered transmission case for tough Indian soil",
      "PAN India direct drop-ship dispatch from KrishiGears Express Network",
      "24-48 hour dispatch with genuine replacement spare parts guarantee"
    ],
    "applications": [
      "Sugarcane",
      "Cotton",
      "Soybean",
      "Onion"
    ],
    "benefits": [
      "Saves significant manual labour",
      "Reduces operating cost over time",
      "FMTTI-tested durability",
      "Cuts inter-cultivation labor cost by up to 70% in Sugarcane fields",
      "High-torque de-weeding and soil aeration in Black Cotton Soil (Regur)",
      "Approved for state agricultural mechanization subsidies across Maharashtra and Gujarat"
    ],
    "warranty": "12 months manufacturer warranty + KrishiGears after-sales service network.",
    "video": "https://www.youtube.com/watch?v=KRJFfkK0eJM",
    "hsn": "8432",
    "gst": 12
  },
  {
    "slug": "rly-my-473d-upgraded",
    "category": "power-weeders",
    "name": "KrishiGears MY-473D Upgraded Diesel Power Weeder | 247 CC",
    "model": "MY-473D Upgraded",
    "brand": "KrishiGears",
    "badges": [
      "FMTTI Tested",
      "Commercial Grade",
      "Industrial Quality Standards"
    ],
    "price": 48000,
    "comparePrice": 56000,
    "images": [
      "/images/catalog/rly-my-473d-upgraded.webp",
      "/images/catalog/rly-my-473d-upgraded-1.webp",
      "/images/catalog/rly-my-473d-upgraded-2.webp",
      "/images/catalog/rly-my-473d-upgraded-3.webp"
    ],
    "specs": {
      "Model": "MY-473D Upgraded",
      "Engine Model": "173F",
      "Engine Type": "4 Stroke Diesel",
      "Displacement": "247 CC",
      "Maximum Power": "3.6 KW",
      "Transmission": "Gear Drive",
      "Blades": "32 Pcs",
      "Tyre": "5.0-8 Tubeless",
      "Handle": "Adjustable Handle",
      "Tilling Width": "1050 mm",
      "Tilling Depth": "100-300 mm",
      "Weight": "104 kg"
    },
    "features": [
      "Genuine KrishiGears branded product",
      "Backed by manufacturer warranty",
      "PAN India delivery from KrishiGears",
      "Genuine spare parts availability",
      "Genuine KrishiGears commercial agricultural machinery",
      "FMTTI-tested commercial durability standard",
      "Precision-engineered transmission case for tough Indian soil",
      "PAN India direct drop-ship dispatch from KrishiGears Express Network",
      "24-48 hour dispatch with genuine replacement spare parts guarantee"
    ],
    "applications": [
      "Sugarcane",
      "Cotton",
      "Soybean",
      "Onion"
    ],
    "benefits": [
      "Saves significant manual labour",
      "Reduces operating cost over time",
      "FMTTI-tested durability",
      "Cuts inter-cultivation labor cost by up to 70% in Sugarcane fields",
      "High-torque de-weeding and soil aeration in Black Cotton Soil (Regur)",
      "Approved for state agricultural mechanization subsidies across Maharashtra and Gujarat"
    ],
    "warranty": "12 months manufacturer warranty + KrishiGears after-sales service network.",
    "video": "https://www.youtube.com/watch?v=KRJFfkK0eJM",
    "hsn": "8432",
    "gst": 12
  },
  {
    "slug": "rly-my-800gh",
    "category": "power-weeders",
    "name": "KrishiGears MY-800GH Petrol Power Weeder | 212 CC",
    "model": "MY-800GH",
    "brand": "KrishiGears",
    "badges": [
      "FMTTI Tested",
      "Commercial Grade",
      "Industrial Quality Standards"
    ],
    "price": 48000,
    "comparePrice": 56000,
    "images": [
      "/images/catalog/rly-my-800gh.webp"
    ],
    "specs": {
      "Model": "MY-800GH",
      "Engine Model": "170F",
      "Fuel Type": "Petrol",
      "Engine Type": "4 Stroke",
      "Displacement": "212 CC",
      "Maximum Power": "4 KW / 3600 RPM",
      "Starting System": "Recoil",
      "Transmission": "Gear",
      "Handle Bar System": "Up / Down / Left / Right",
      "Tyre": "4.0 &#8211; 8",
      "Blades": "32 Pcs",
      "Packaging": "Wooden Box"
    },
    "features": [
      "Genuine KrishiGears branded product",
      "Backed by manufacturer warranty",
      "PAN India delivery from KrishiGears",
      "Genuine spare parts availability",
      "Genuine KrishiGears commercial agricultural machinery",
      "FMTTI-tested commercial durability standard",
      "Precision-engineered transmission case for tough Indian soil",
      "PAN India direct drop-ship dispatch from KrishiGears Express Network",
      "24-48 hour dispatch with genuine replacement spare parts guarantee"
    ],
    "applications": [
      "Sugarcane",
      "Cotton",
      "Soybean",
      "Onion"
    ],
    "benefits": [
      "Saves significant manual labour",
      "Reduces operating cost over time",
      "FMTTI-tested durability",
      "Cuts inter-cultivation labor cost by up to 70% in Sugarcane fields",
      "High-torque de-weeding and soil aeration in Black Cotton Soil (Regur)",
      "Approved for state agricultural mechanization subsidies across Maharashtra and Gujarat"
    ],
    "warranty": "12 months manufacturer warranty + KrishiGears after-sales service network.",
    "video": "https://www.youtube.com/watch?v=KRJFfkK0eJM",
    "hsn": "8432",
    "gst": 12
  },
  {
    "slug": "rly-rapl-rh-773d-premium",
    "category": "power-weeders",
    "name": "KrishiGears RAPL-RH-773D Premium Power Weeder | 247 CC Diesel",
    "model": "RAPL-RH-773D Premium",
    "brand": "KrishiGears",
    "badges": [
      "FMTTI Tested",
      "Commercial Grade",
      "Industrial Quality Standards"
    ],
    "price": 54000,
    "comparePrice": 64000,
    "images": [
      "/images/catalog/rly-rapl-rh-773d-premium.webp",
      "/images/catalog/rly-rapl-rh-773d-premium-1.webp",
      "/images/catalog/rly-rapl-rh-773d-premium-2.webp",
      "/images/catalog/rly-rapl-rh-773d-premium-3.webp"
    ],
    "specs": {
      "Model": "RAPL-RH-773D Premium",
      "Engine Model": "173F Engine",
      "Displacement / Fuel": "247 CC / Diesel",
      "Max Power / RPM": "4 KW / 3600 RPM",
      "Engine Type": "4-Stroke",
      "Starting System": "Recoil",
      "Transmission": "Gear",
      "Gear": "R, 0, 1, 2",
      "Handle Bar System": "Up / Down",
      "Tyre": "Radial 400-8",
      "Blades": "32 Pcs",
      "Accessories": "Easy Gear System, Side Disc, Adjustable Ridger Attachment"
    },
    "features": [
      "Genuine KrishiGears branded product",
      "Backed by manufacturer warranty",
      "PAN India delivery from KrishiGears",
      "Genuine spare parts availability",
      "Genuine KrishiGears commercial agricultural machinery",
      "FMTTI-tested commercial durability standard",
      "Precision-engineered transmission case for tough Indian soil",
      "PAN India direct drop-ship dispatch from KrishiGears Express Network",
      "24-48 hour dispatch with genuine replacement spare parts guarantee"
    ],
    "applications": [
      "Sugarcane",
      "Cotton",
      "Soybean",
      "Onion"
    ],
    "benefits": [
      "Saves significant manual labour",
      "Reduces operating cost over time",
      "FMTTI-tested durability",
      "Cuts inter-cultivation labor cost by up to 70% in Sugarcane fields",
      "High-torque de-weeding and soil aeration in Black Cotton Soil (Regur)",
      "Approved for state agricultural mechanization subsidies across Maharashtra and Gujarat"
    ],
    "warranty": "12 months manufacturer warranty + KrishiGears after-sales service network.",
    "video": "https://www.youtube.com/watch?v=KRJFfkK0eJM",
    "hsn": "8432",
    "gst": 12
  },
  {
    "slug": "rly-my-750gh",
    "category": "power-weeders",
    "name": "KrishiGears MY-750GH Petrol Power Weeder | 212 CC",
    "model": "MY-750GH",
    "brand": "KrishiGears",
    "badges": [
      "FMTTI Tested",
      "Commercial Grade",
      "Industrial Quality Standards"
    ],
    "price": 48000,
    "comparePrice": 56000,
    "images": [
      "/images/catalog/rly-my-750gh.webp"
    ],
    "specs": {
      "Model": "MY-750GH",
      "Engine Model": "170F &#8211; Petrol",
      "Engine Type": "4-Stroke",
      "Displacement": "212 CC",
      "Max Power / RPM": "4 KW / 3600 RPM",
      "Starting System": "Recoil",
      "Transmission": "Gear",
      "Gear": "R, 0, 1, 2",
      "Handle Bar System": "Up / Down / Left / Right",
      "Tyre": "4.0 &#8211; 8",
      "Blades": "32 Pcs",
      "Blade Configuration": "32 Blades with Disc",
      "Packaging": "Wooden Box"
    },
    "features": [
      "Genuine KrishiGears branded product",
      "Backed by manufacturer warranty",
      "PAN India delivery from KrishiGears",
      "Genuine spare parts availability",
      "Genuine KrishiGears commercial agricultural machinery",
      "FMTTI-tested commercial durability standard",
      "Precision-engineered transmission case for tough Indian soil",
      "PAN India direct drop-ship dispatch from KrishiGears Express Network",
      "24-48 hour dispatch with genuine replacement spare parts guarantee"
    ],
    "applications": [
      "Sugarcane",
      "Cotton",
      "Soybean",
      "Onion"
    ],
    "benefits": [
      "Saves significant manual labour",
      "Reduces operating cost over time",
      "FMTTI-tested durability",
      "Cuts inter-cultivation labor cost by up to 70% in Sugarcane fields",
      "High-torque de-weeding and soil aeration in Black Cotton Soil (Regur)",
      "Approved for state agricultural mechanization subsidies across Maharashtra and Gujarat"
    ],
    "warranty": "12 months manufacturer warranty + KrishiGears after-sales service network.",
    "video": "https://www.youtube.com/watch?v=KRJFfkK0eJM",
    "hsn": "8432",
    "gst": 12
  },
  {
    "slug": "rly-rapl-rh-700g",
    "category": "power-weeders",
    "name": "KrishiGears RAPL-RH-700G Petrol Power Weeder | 212 CC",
    "model": "RAPL-RH-700G",
    "brand": "KrishiGears",
    "badges": [
      "FMTTI Tested",
      "Commercial Grade",
      "Industrial Quality Standards"
    ],
    "price": 42000,
    "comparePrice": 49000,
    "images": [
      "/images/catalog/rly-rapl-rh-700g.webp",
      "/images/catalog/rly-rapl-rh-700g-1.webp",
      "/images/catalog/rly-rapl-rh-700g-2.webp",
      "/images/catalog/rly-rapl-rh-700g-3.webp"
    ],
    "specs": {
      "Model": "RAPL-RH-700G",
      "Engine": "170 Engine, 4 Stroke",
      "Displacement": "212 CC",
      "Maximum Power": "4 kW",
      "Blades": "32 Pcs",
      "Gear": "R, 0, 1, 2",
      "Handlebar": "Up / Down",
      "Tyre": "400-10 Radial",
      "Starting System": "Recoil",
      "Fuel": "Petrol"
    },
    "features": [
      "Genuine KrishiGears branded product",
      "Backed by manufacturer warranty",
      "PAN India delivery from KrishiGears",
      "Genuine spare parts availability",
      "Genuine KrishiGears commercial agricultural machinery",
      "FMTTI-tested commercial durability standard",
      "Precision-engineered transmission case for tough Indian soil",
      "PAN India direct drop-ship dispatch from KrishiGears Express Network",
      "24-48 hour dispatch with genuine replacement spare parts guarantee"
    ],
    "applications": [
      "Sugarcane",
      "Cotton",
      "Soybean",
      "Onion"
    ],
    "benefits": [
      "Saves significant manual labour",
      "Reduces operating cost over time",
      "FMTTI-tested durability",
      "Cuts inter-cultivation labor cost by up to 70% in Sugarcane fields",
      "High-torque de-weeding and soil aeration in Black Cotton Soil (Regur)",
      "Approved for state agricultural mechanization subsidies across Maharashtra and Gujarat"
    ],
    "warranty": "12 months manufacturer warranty + KrishiGears after-sales service network.",
    "video": "https://www.youtube.com/watch?v=KRJFfkK0eJM",
    "hsn": "8432",
    "gst": 12
  },
  {
    "slug": "rly-my-600g",
    "category": "power-weeders",
    "name": "KrishiGears MY-600G Power Weeder | Petrol Power Weeder",
    "model": "MY-600G",
    "brand": "KrishiGears",
    "badges": [
      "FMTTI Tested",
      "Commercial Grade",
      "Industrial Quality Standards"
    ],
    "price": 42000,
    "comparePrice": 49000,
    "images": [
      "/images/catalog/rly-my-600g.webp"
    ],
    "specs": {
      "Model": "MY-600G",
      "Engine Model": "170F Engine",
      "Fuel / Displacement": "Petrol / 212 CC",
      "Maximum Power / RPM": "4.2 kW / 3600 RPM",
      "Starting System": "Recoil",
      "Transmission": "Gear",
      "Gear": "R, 0, 1, 2",
      "Handlebar System": "Up / Down / Left / Right",
      "Tyre": "4.0 &#8211; 8 Tubeless",
      "Blades": "32 Pcs",
      "Tilling Depth": "100 &#8211; 300 mm"
    },
    "features": [
      "Genuine KrishiGears branded product",
      "Backed by manufacturer warranty",
      "PAN India delivery from KrishiGears",
      "Genuine spare parts availability",
      "Genuine KrishiGears commercial agricultural machinery",
      "FMTTI-tested commercial durability standard",
      "Precision-engineered transmission case for tough Indian soil",
      "PAN India direct drop-ship dispatch from KrishiGears Express Network",
      "24-48 hour dispatch with genuine replacement spare parts guarantee"
    ],
    "applications": [
      "Sugarcane",
      "Cotton",
      "Soybean",
      "Onion"
    ],
    "benefits": [
      "Saves significant manual labour",
      "Reduces operating cost over time",
      "FMTTI-tested durability",
      "Cuts inter-cultivation labor cost by up to 70% in Sugarcane fields",
      "High-torque de-weeding and soil aeration in Black Cotton Soil (Regur)",
      "Approved for state agricultural mechanization subsidies across Maharashtra and Gujarat"
    ],
    "warranty": "12 months manufacturer warranty + KrishiGears after-sales service network.",
    "video": "https://www.youtube.com/watch?v=KRJFfkK0eJM",
    "hsn": "8432",
    "gst": 12
  },
  {
    "slug": "rly-my-673d-kama-engine",
    "category": "power-weeders",
    "name": "KrishiGears MY-673D Power Weeder | Diesel Power Weeder",
    "model": "MY-673D KAMA Engine",
    "brand": "KrishiGears",
    "badges": [
      "FMTTI Tested",
      "Commercial Grade",
      "Industrial Quality Standards"
    ],
    "price": 54000,
    "comparePrice": 64000,
    "images": [
      "/images/catalog/rly-my-673d-kama-engine.webp",
      "/images/catalog/rly-my-673d-kama-engine-1.webp",
      "/images/catalog/rly-my-673d-kama-engine-2.webp",
      "/images/catalog/rly-my-673d-kama-engine-3.webp"
    ],
    "specs": {
      "Model": "MY-673D KAMA Engine",
      "Engine Model": "173F Engine",
      "Displacement / Fuel": "247 CC / Diesel",
      "Maximum Power / RPM": "4 kW / 3600 RPM",
      "Starting System": "Recoil",
      "Transmission": "Gear",
      "Gear": "R, 0, 1, 2",
      "Handle Bar System": "Up / Down",
      "Tyre": "4.0-8 Tubeless",
      "Blades": "32 Pcs"
    },
    "features": [
      "Genuine KrishiGears branded product",
      "Backed by manufacturer warranty",
      "PAN India delivery from KrishiGears",
      "Genuine spare parts availability",
      "Genuine KrishiGears commercial agricultural machinery",
      "FMTTI-tested commercial durability standard",
      "Precision-engineered transmission case for tough Indian soil",
      "PAN India direct drop-ship dispatch from KrishiGears Express Network",
      "24-48 hour dispatch with genuine replacement spare parts guarantee"
    ],
    "applications": [
      "Sugarcane",
      "Cotton",
      "Soybean",
      "Onion"
    ],
    "benefits": [
      "Saves significant manual labour",
      "Reduces operating cost over time",
      "FMTTI-tested durability",
      "Cuts inter-cultivation labor cost by up to 70% in Sugarcane fields",
      "High-torque de-weeding and soil aeration in Black Cotton Soil (Regur)",
      "Approved for state agricultural mechanization subsidies across Maharashtra and Gujarat"
    ],
    "warranty": "12 months manufacturer warranty + KrishiGears after-sales service network.",
    "video": "https://www.youtube.com/watch?v=KRJFfkK0eJM",
    "hsn": "8432",
    "gst": 12
  },
  {
    "slug": "rly-my-685d",
    "category": "power-weeders",
    "name": "KrishiGears MY-685D Power Weeder | 406 CC Diesel",
    "model": "MY-685D",
    "brand": "KrishiGears",
    "badges": [
      "FMTTI Tested",
      "Commercial Grade",
      "Industrial Quality Standards"
    ],
    "price": 56000,
    "comparePrice": 66000,
    "images": [
      "/images/catalog/rly-my-685d.webp",
      "/images/catalog/rly-my-685d-1.webp",
      "/images/catalog/rly-my-685d-2.webp",
      "/images/catalog/rly-my-685d-3.webp"
    ],
    "specs": {
      "Engine": "Diesel",
      "Power": "",
      "Fuel": "Diesel",
      "Start": "Recoil"
    },
    "features": [
      "Genuine KrishiGears branded product",
      "Backed by manufacturer warranty",
      "PAN India delivery from KrishiGears",
      "Genuine spare parts availability",
      "Genuine KrishiGears commercial agricultural machinery",
      "FMTTI-tested commercial durability standard",
      "Precision-engineered transmission case for tough Indian soil",
      "PAN India direct drop-ship dispatch from KrishiGears Express Network",
      "24-48 hour dispatch with genuine replacement spare parts guarantee"
    ],
    "applications": [
      "Sugarcane",
      "Cotton",
      "Soybean",
      "Onion"
    ],
    "benefits": [
      "Saves significant manual labour",
      "Reduces operating cost over time",
      "FMTTI-tested durability",
      "Cuts inter-cultivation labor cost by up to 70% in Sugarcane fields",
      "High-torque de-weeding and soil aeration in Black Cotton Soil (Regur)",
      "Approved for state agricultural mechanization subsidies across Maharashtra and Gujarat"
    ],
    "warranty": "12 months manufacturer warranty + KrishiGears after-sales service network.",
    "video": "https://www.youtube.com/watch?v=KRJFfkK0eJM",
    "hsn": "8432",
    "gst": 12
  },
  {
    "slug": "rly-my-685d-de-kama-engine",
    "category": "power-weeders",
    "name": "KrishiGears MY-685D-DE Power Weeder | 406 CC Diesel",
    "model": "MY-685D-DE KAMA Engine",
    "brand": "KrishiGears",
    "badges": [
      "FMTTI Tested",
      "Commercial Grade",
      "Industrial Quality Standards"
    ],
    "price": 88000,
    "comparePrice": 99000,
    "images": [
      "/images/catalog/rly-my-685d-de-kama-engine.webp"
    ],
    "specs": {
      "Model": "MY-685D-DE KAMA Engine",
      "Engine Model": "186F Engine",
      "Engine Type": "Diesel",
      "Displacement": "406 CC",
      "Maximum Power": "5.5 kW / 3600 RPM",
      "Starting System": "Recoil / Electric",
      "Transmission": "Gear",
      "Gear": "R, 0, 1, 2",
      "Handle Bar System": "Up / Down / Left / Right",
      "Tyre": "5.0 &#8211; 12",
      "Blades (Dry Land)": "40 Pcs",
      "Special Feature": "Adjustable Ridger Attachment"
    },
    "features": [
      "Genuine KrishiGears branded product",
      "Backed by manufacturer warranty",
      "PAN India delivery from KrishiGears",
      "Genuine spare parts availability",
      "Genuine KrishiGears commercial agricultural machinery",
      "FMTTI-tested commercial durability standard",
      "Precision-engineered transmission case for tough Indian soil",
      "PAN India direct drop-ship dispatch from KrishiGears Express Network",
      "24-48 hour dispatch with genuine replacement spare parts guarantee"
    ],
    "applications": [
      "Sugarcane",
      "Cotton",
      "Soybean",
      "Onion"
    ],
    "benefits": [
      "Saves significant manual labour",
      "Reduces operating cost over time",
      "FMTTI-tested durability",
      "Cuts inter-cultivation labor cost by up to 70% in Sugarcane fields",
      "High-torque de-weeding and soil aeration in Black Cotton Soil (Regur)",
      "Approved for state agricultural mechanization subsidies across Maharashtra and Gujarat"
    ],
    "warranty": "12 months manufacturer warranty + KrishiGears after-sales service network.",
    "video": "https://www.youtube.com/watch?v=KRJFfkK0eJM",
    "hsn": "8432",
    "gst": 12
  },
  {
    "slug": "rly-my-550g-167",
    "category": "power-weeders",
    "name": "KrishiGears MY-550G Power Weeder | 212 CC Petrol",
    "model": "MY-550G",
    "brand": "KrishiGears",
    "badges": [
      "FMTTI Tested",
      "Commercial Grade",
      "Industrial Quality Standards"
    ],
    "price": 42000,
    "comparePrice": 49000,
    "images": [
      "/images/catalog/rly-my-550g-167.webp",
      "/images/catalog/rly-my-550g-167-1.webp",
      "/images/catalog/rly-my-550g-167-2.webp",
      "/images/catalog/rly-my-550g-167-3.webp"
    ],
    "specs": {
      "Model": "MY-550G",
      "Engine Model": "170F Engine",
      "Fuel Type": "Petrol",
      "Displacement": "212 CC",
      "Maximum Power": "4 kW / 3600 RPM",
      "Starting System": "Recoil",
      "Transmission": "Gear",
      "Handlebar System": "Up / Down",
      "Tyre": "4.0-8",
      "Blades": "24 Pcs \u2013 Dry Land",
      "Gear": "R, 0, 1, 2",
      "Tilling Depth": "100\u2013300 mm",
      "Tilling Width": "800 mm"
    },
    "features": [
      "Genuine KrishiGears branded product",
      "Backed by manufacturer warranty",
      "PAN India delivery from KrishiGears",
      "Genuine spare parts availability",
      "Genuine KrishiGears commercial agricultural machinery",
      "FMTTI-tested commercial durability standard",
      "Precision-engineered transmission case for tough Indian soil",
      "PAN India direct drop-ship dispatch from KrishiGears Express Network",
      "24-48 hour dispatch with genuine replacement spare parts guarantee"
    ],
    "applications": [
      "Sugarcane",
      "Cotton",
      "Soybean",
      "Onion"
    ],
    "benefits": [
      "Saves significant manual labour",
      "Reduces operating cost over time",
      "FMTTI-tested durability",
      "Cuts inter-cultivation labor cost by up to 70% in Sugarcane fields",
      "High-torque de-weeding and soil aeration in Black Cotton Soil (Regur)",
      "Approved for state agricultural mechanization subsidies across Maharashtra and Gujarat"
    ],
    "warranty": "12 months manufacturer warranty + KrishiGears after-sales service network.",
    "video": "https://www.youtube.com/watch?v=KRJFfkK0eJM",
    "hsn": "8432",
    "gst": 12
  },
  {
    "slug": "rly-my-570g",
    "category": "power-weeders",
    "name": "KrishiGears MY-570G Power Weeder | 212 CC Petrol",
    "model": "MY-570G",
    "brand": "KrishiGears",
    "badges": [
      "FMTTI Tested",
      "Commercial Grade",
      "Industrial Quality Standards"
    ],
    "price": 39000,
    "comparePrice": 46000,
    "images": [
      "/images/catalog/rly-my-570g.webp",
      "/images/catalog/rly-my-570g-1.webp",
      "/images/catalog/rly-my-570g-2.webp",
      "/images/catalog/rly-my-570g-3.webp"
    ],
    "specs": {
      "Model": "MY-570G",
      "Engine Model": "170F Engine",
      "Fuel Type": "Petrol",
      "Displacement": "212 CC",
      "Maximum Power": "4 kW / 3600 RPM",
      "Starting System": "Recoil",
      "Transmission": "Gear",
      "Handlebar System": "Up / Down",
      "Tyre": "4.0-8 Rubber Tyre",
      "Blades": "32 Pcs \u2013 Dry Land",
      "Gear": "R, 0, 1, 2",
      "Tilling Depth": "100\u2013300 mm",
      "Tilling Width": "1050 mm"
    },
    "features": [
      "Genuine KrishiGears branded product",
      "Backed by manufacturer warranty",
      "PAN India delivery from KrishiGears",
      "Genuine spare parts availability",
      "Genuine KrishiGears commercial agricultural machinery",
      "FMTTI-tested commercial durability standard",
      "Precision-engineered transmission case for tough Indian soil",
      "PAN India direct drop-ship dispatch from KrishiGears Express Network",
      "24-48 hour dispatch with genuine replacement spare parts guarantee"
    ],
    "applications": [
      "Sugarcane",
      "Cotton",
      "Soybean",
      "Onion"
    ],
    "benefits": [
      "Saves significant manual labour",
      "Reduces operating cost over time",
      "FMTTI-tested durability",
      "Cuts inter-cultivation labor cost by up to 70% in Sugarcane fields",
      "High-torque de-weeding and soil aeration in Black Cotton Soil (Regur)",
      "Approved for state agricultural mechanization subsidies across Maharashtra and Gujarat"
    ],
    "warranty": "12 months manufacturer warranty + KrishiGears after-sales service network.",
    "video": "https://www.youtube.com/watch?v=KRJFfkK0eJM",
    "hsn": "8432",
    "gst": 12
  },
  {
    "slug": "kg-my-573d",
    "category": "power-weeders",
    "name": "KrishiGears KG-MY-573D Power Weeder | 247 CC Diesel",
    "model": "KG-MY-573D",
    "brand": "KrishiGears",
    "badges": [
      "FMTTI Tested",
      "Commercial Grade",
      "Industrial Quality Standards"
    ],
    "price": 54000,
    "comparePrice": 64000,
    "images": [
      "/images/catalog/kg-my-573d.webp",
      "/images/catalog/kg-my-573d-1.webp",
      "/images/catalog/kg-my-573d-2.webp",
      "/images/catalog/kg-my-573d-3.webp"
    ],
    "specs": {
      "Model": "KrishiGears MY-573D",
      "Machine Type": "Diesel Power Weeder",
      "Engine Model": "173F Engine",
      "Fuel": "Diesel",
      "Displacement": "247 CC",
      "Maximum Power": "4 kW @ 3600 RPM",
      "Starting System": "Recoil",
      "Transmission": "Gear",
      "Gear": "R, 0, 1, 2",
      "Handlebar System": "Up / Down",
      "Tyre": "4.0-8",
      "Blades": "32 PCS",
      "Tilling Depth": "100\u2013300 mm",
      "Tilling Width": "1050 mm"
    },
    "features": [
      "Genuine KrishiGears branded product",
      "Backed by manufacturer warranty",
      "PAN India delivery from KrishiGears",
      "Genuine spare parts availability",
      "Genuine KrishiGears commercial agricultural machinery",
      "FMTTI-tested commercial durability standard",
      "Precision-engineered transmission case for tough Indian soil",
      "PAN India direct drop-ship dispatch from KrishiGears Express Network",
      "24-48 hour dispatch with genuine replacement spare parts guarantee"
    ],
    "applications": [
      "Sugarcane",
      "Cotton",
      "Soybean",
      "Onion"
    ],
    "benefits": [
      "Saves significant manual labour",
      "Reduces operating cost over time",
      "FMTTI-tested durability",
      "Cuts inter-cultivation labor cost by up to 70% in Sugarcane fields",
      "High-torque de-weeding and soil aeration in Black Cotton Soil (Regur)",
      "Approved for state agricultural mechanization subsidies across Maharashtra and Gujarat"
    ],
    "warranty": "12 months manufacturer warranty + KrishiGears after-sales service network.",
    "video": "https://www.youtube.com/watch?v=KRJFfkK0eJM",
    "hsn": "8432",
    "gst": 12
  },
  {
    "slug": "rly-my-578d",
    "category": "power-weeders",
    "name": "KrishiGears MY-578D Diesel Power Weeder | 296cc, 32 Blades",
    "model": "MY-578D",
    "brand": "KrishiGears",
    "badges": [
      "FMTTI Tested",
      "Commercial Grade",
      "Industrial Quality Standards"
    ],
    "price": 39000,
    "comparePrice": 46000,
    "images": [
      "/images/catalog/rly-my-578d.webp",
      "/images/catalog/rly-my-578d-1.webp",
      "/images/catalog/rly-my-578d-2.webp",
      "/images/catalog/rly-my-578d-3.webp"
    ],
    "specs": {
      "Brand": "KrishiGears",
      "Model": "MY-578D",
      "Engine Model": "178F Engine",
      "Fuel Type": "Diesel",
      "Displacement": "296 cc",
      "Maximum Power": "4.4 kW @ 4000 RPM",
      "Starting System": "Recoil",
      "Transmission": "Gear",
      "Gear": "R, 0, 1, 2",
      "Handlebar System": "Up / Down / Left / Right",
      "Tyre": "5.0-12",
      "Blades": "32 Pcs",
      "Tilling Depth": "100\u2013300 mm",
      "Tilling Width": "1350 mm"
    },
    "features": [
      "Genuine KrishiGears branded product",
      "Backed by manufacturer warranty",
      "PAN India delivery from KrishiGears",
      "Genuine spare parts availability",
      "Genuine KrishiGears commercial agricultural machinery",
      "FMTTI-tested commercial durability standard",
      "Precision-engineered transmission case for tough Indian soil",
      "PAN India direct drop-ship dispatch from KrishiGears Express Network",
      "24-48 hour dispatch with genuine replacement spare parts guarantee"
    ],
    "applications": [
      "Sugarcane",
      "Cotton",
      "Soybean",
      "Onion"
    ],
    "benefits": [
      "Saves significant manual labour",
      "Reduces operating cost over time",
      "FMTTI-tested durability",
      "Cuts inter-cultivation labor cost by up to 70% in Sugarcane fields",
      "High-torque de-weeding and soil aeration in Black Cotton Soil (Regur)",
      "Approved for state agricultural mechanization subsidies across Maharashtra and Gujarat"
    ],
    "warranty": "12 months manufacturer warranty + KrishiGears after-sales service network.",
    "video": "https://www.youtube.com/watch?v=KRJFfkK0eJM",
    "hsn": "8432",
    "gst": 12
  },
  {
    "slug": "kg-my-585d",
    "category": "power-weeders",
    "name": "KrishiGears KG-MY-585D Diesel Power Weeder | 406cc, 40 Blades",
    "model": "KG-MY-585D",
    "brand": "KrishiGears",
    "badges": [
      "FMTTI Tested",
      "Commercial Grade",
      "Industrial Quality Standards"
    ],
    "price": 56000,
    "comparePrice": 66000,
    "images": [
      "/images/catalog/kg-my-585d.webp",
      "/images/catalog/kg-my-585d-1.webp",
      "/images/catalog/kg-my-585d-2.webp"
    ],
    "specs": {
      "Model": "KrishiGears MY-585D",
      "Engine": "186F Diesel Engine",
      "Displacement / Fuel": "406 cc / Diesel",
      "Maximum Power": "5.5 kW @ 3600 RPM",
      "Starting System": "Recoil",
      "Transmission": "Gear",
      "Gear": "R, 0, 1, 2",
      "Handlebar System": "Up / Down / Left / Right",
      "Tyre": "5.0-12",
      "Blades": "40 Pcs",
      "Tilling Depth": "100\u2013300 mm",
      "Tilling Width": "1350 mm"
    },
    "features": [
      "Genuine KrishiGears branded product",
      "Backed by manufacturer warranty",
      "PAN India delivery from KrishiGears",
      "Genuine spare parts availability",
      "Genuine KrishiGears commercial agricultural machinery",
      "FMTTI-tested commercial durability standard",
      "Precision-engineered transmission case for tough Indian soil",
      "PAN India direct drop-ship dispatch from KrishiGears Express Network",
      "24-48 hour dispatch with genuine replacement spare parts guarantee"
    ],
    "applications": [
      "Sugarcane",
      "Cotton",
      "Soybean",
      "Onion"
    ],
    "benefits": [
      "Saves significant manual labour",
      "Reduces operating cost over time",
      "FMTTI-tested durability",
      "Cuts inter-cultivation labor cost by up to 70% in Sugarcane fields",
      "High-torque de-weeding and soil aeration in Black Cotton Soil (Regur)",
      "Approved for state agricultural mechanization subsidies across Maharashtra and Gujarat"
    ],
    "warranty": "12 months manufacturer warranty + KrishiGears after-sales service network.",
    "video": "https://www.youtube.com/watch?v=KRJFfkK0eJM",
    "hsn": "8432",
    "gst": 12
  },
  {
    "slug": "rly-my-585d-de",
    "category": "power-weeders",
    "name": "KrishiGears MY-585D-DE Diesel Power Weeder | 406 CC, 5.5 kW",
    "model": "MY-585D-DE",
    "brand": "KrishiGears",
    "badges": [
      "FMTTI Tested",
      "Commercial Grade",
      "Industrial Quality Standards"
    ],
    "price": 62000,
    "comparePrice": 72000,
    "images": [
      "/images/catalog/rly-my-585d-de.webp",
      "/images/catalog/rly-my-585d-de-1.webp",
      "/images/catalog/rly-my-585d-de-2.webp",
      "/images/catalog/rly-my-585d-de-3.webp"
    ],
    "specs": {
      "Brand": "KrishiGears",
      "Model": "MY-585D-DE",
      "Product Type": "Diesel Power Weeder",
      "Engine Model": "186F Engine",
      "Fuel Type": "Diesel",
      "Engine Displacement": "406 CC",
      "Maximum Power": "5.5 kW",
      "Maximum RPM": "3600 RPM",
      "Starting System": "Recoil / Electric",
      "Transmission": "Gear",
      "Gear": "R, 0, 1, 2",
      "Handle Bar System": "Up / Down / Left / Right",
      "Tyre Size": "5.0-12",
      "Blades": "40 Pcs (Dry Land)",
      "Tilling Depth": "100\u2013300 mm",
      "Tilling Width": "1350 mm"
    },
    "features": [
      "Genuine KrishiGears branded product",
      "Backed by manufacturer warranty",
      "PAN India delivery from KrishiGears",
      "Genuine spare parts availability",
      "Genuine KrishiGears commercial agricultural machinery",
      "FMTTI-tested commercial durability standard",
      "Precision-engineered transmission case for tough Indian soil",
      "PAN India direct drop-ship dispatch from KrishiGears Express Network",
      "24-48 hour dispatch with genuine replacement spare parts guarantee"
    ],
    "applications": [
      "Sugarcane",
      "Cotton",
      "Soybean",
      "Onion"
    ],
    "benefits": [
      "Saves significant manual labour",
      "Reduces operating cost over time",
      "FMTTI-tested durability",
      "Cuts inter-cultivation labor cost by up to 70% in Sugarcane fields",
      "High-torque de-weeding and soil aeration in Black Cotton Soil (Regur)",
      "Approved for state agricultural mechanization subsidies across Maharashtra and Gujarat"
    ],
    "warranty": "12 months manufacturer warranty + KrishiGears after-sales service network.",
    "video": "https://www.youtube.com/watch?v=KRJFfkK0eJM",
    "hsn": "8432",
    "gst": 12
  },
  {
    "slug": "rly-my-470g-hl-173",
    "category": "power-weeders",
    "name": "KrishiGears MY-470G-HL Petrol Power Weeder | Premium Farm Machine",
    "model": "MY-470G-HL",
    "brand": "KrishiGears",
    "badges": [
      "FMTTI Tested",
      "Commercial Grade",
      "Industrial Quality Standards"
    ],
    "price": 38000,
    "comparePrice": 45000,
    "images": [
      "/images/catalog/rly-my-470g-hl-173.webp",
      "/images/catalog/rly-my-470g-hl-173-1.webp",
      "/images/catalog/rly-my-470g-hl-173-2.webp",
      "/images/catalog/rly-my-470g-hl-173-3.webp"
    ],
    "specs": {
      "Brand": "KrishiGears",
      "Model": "MY-470G-HL",
      "Product Type": "Petrol Power Weeder",
      "Engine Quality": "Premium",
      "Fuel Tank Capacity": "5 Litres",
      "Tyre Size": "5.0-8",
      "Fender": "Double",
      "Bumper": "Heavy-Duty",
      "Blade Weight": "350 gms",
      "Tool Bar": "Metal",
      "Handle Seat Design": "Improved",
      "Handle Seat Cover": "Yes",
      "Recoil Starter": "Improved",
      "Air Filter &#038; Muffler": "Improved",
      "Packing": "7 mm Wooden Box"
    },
    "features": [
      "Genuine KrishiGears branded product",
      "Backed by manufacturer warranty",
      "PAN India delivery from KrishiGears",
      "Genuine spare parts availability",
      "Genuine KrishiGears commercial agricultural machinery",
      "FMTTI-tested commercial durability standard",
      "Precision-engineered transmission case for tough Indian soil",
      "PAN India direct drop-ship dispatch from KrishiGears Express Network",
      "24-48 hour dispatch with genuine replacement spare parts guarantee"
    ],
    "applications": [
      "Sugarcane",
      "Cotton",
      "Soybean",
      "Onion"
    ],
    "benefits": [
      "Saves significant manual labour",
      "Reduces operating cost over time",
      "FMTTI-tested durability",
      "Cuts inter-cultivation labor cost by up to 70% in Sugarcane fields",
      "High-torque de-weeding and soil aeration in Black Cotton Soil (Regur)",
      "Approved for state agricultural mechanization subsidies across Maharashtra and Gujarat"
    ],
    "warranty": "12 months manufacturer warranty + KrishiGears after-sales service network.",
    "video": "https://www.youtube.com/watch?v=KRJFfkK0eJM",
    "hsn": "8432",
    "gst": 12
  },
  {
    "slug": "rly-my-480g",
    "category": "power-weeders",
    "name": "KrishiGears MY-480G Petrol Power Weeder | 212 CC, 4 kW",
    "model": "MY-480G",
    "brand": "KrishiGears",
    "badges": [
      "FMTTI Tested",
      "Commercial Grade",
      "Industrial Quality Standards"
    ],
    "price": 38000,
    "comparePrice": 45000,
    "images": [
      "/images/catalog/rly-my-480g.webp",
      "/images/catalog/rly-my-480g-1.webp",
      "/images/catalog/rly-my-480g-2.webp",
      "/images/catalog/rly-my-480g-3.webp"
    ],
    "specs": {
      "Brand": "KrishiGears",
      "Model": "MY-480G",
      "Product Type": "Petrol Power Weeder",
      "Engine Model": "170F / 4 Stroke",
      "Engine Displacement": "212 CC",
      "Engine Power": "4 kW",
      "Starting System": "Easy Start Technology",
      "Transmission": "Gear",
      "Handle Bar System": "Up / Down Adjustable",
      "Blades": "32 Pcs Heavy Duty",
      "Tilling Width": "1050 mm",
      "Tilling Depth": "100\u2013300 mm",
      "Tyre Size": "4.0-8"
    },
    "features": [
      "Genuine KrishiGears branded product",
      "Backed by manufacturer warranty",
      "PAN India delivery from KrishiGears",
      "Genuine spare parts availability",
      "Genuine KrishiGears commercial agricultural machinery",
      "FMTTI-tested commercial durability standard",
      "Precision-engineered transmission case for tough Indian soil",
      "PAN India direct drop-ship dispatch from KrishiGears Express Network",
      "24-48 hour dispatch with genuine replacement spare parts guarantee"
    ],
    "applications": [
      "Sugarcane",
      "Cotton",
      "Soybean",
      "Onion"
    ],
    "benefits": [
      "Saves significant manual labour",
      "Reduces operating cost over time",
      "FMTTI-tested durability",
      "Cuts inter-cultivation labor cost by up to 70% in Sugarcane fields",
      "High-torque de-weeding and soil aeration in Black Cotton Soil (Regur)",
      "Approved for state agricultural mechanization subsidies across Maharashtra and Gujarat"
    ],
    "warranty": "12 months manufacturer warranty + KrishiGears after-sales service network.",
    "video": "https://www.youtube.com/watch?v=KRJFfkK0eJM",
    "hsn": "8432",
    "gst": 12
  },
  {
    "slug": "rly-my-478d",
    "category": "power-weeders",
    "name": "KrishiGears MY-478D Diesel Power Weeder | 296CC Gear Drive",
    "model": "MY-478D",
    "brand": "KrishiGears",
    "badges": [
      "FMTTI Tested",
      "Commercial Grade",
      "Industrial Quality Standards"
    ],
    "price": 48000,
    "comparePrice": 56000,
    "images": [
      "/images/catalog/rly-my-478d.webp",
      "/images/catalog/rly-my-478d-1.webp",
      "/images/catalog/rly-my-478d-2.webp"
    ],
    "specs": {
      "Brand": "KrishiGears",
      "Model": "MY-478D",
      "Product Type": "Diesel Power Weeder",
      "Engine Model": "178F, 4-Stroke Diesel Engine",
      "Engine Capacity": "296 CC",
      "Maximum Power": "4.4 kW",
      "Fuel Type": "Diesel",
      "Starting System": "Recoil Start",
      "Transmission": "Gear Drive",
      "Handle Bar System": "Adjustable Up / Down &#038; Left / Right",
      "Blade Quantity": "32 Heavy-Duty Blades",
      "Tilling Width": "1050 mm",
      "Tilling Depth": "100\u2013300 mm",
      "Tyre Size": "4.0-8"
    },
    "features": [
      "Genuine KrishiGears branded product",
      "Backed by manufacturer warranty",
      "PAN India delivery from KrishiGears",
      "Genuine spare parts availability",
      "Genuine KrishiGears commercial agricultural machinery",
      "FMTTI-tested commercial durability standard",
      "Precision-engineered transmission case for tough Indian soil",
      "PAN India direct drop-ship dispatch from KrishiGears Express Network",
      "24-48 hour dispatch with genuine replacement spare parts guarantee"
    ],
    "applications": [
      "Sugarcane",
      "Cotton",
      "Soybean",
      "Onion"
    ],
    "benefits": [
      "Saves significant manual labour",
      "Reduces operating cost over time",
      "FMTTI-tested durability",
      "Cuts inter-cultivation labor cost by up to 70% in Sugarcane fields",
      "High-torque de-weeding and soil aeration in Black Cotton Soil (Regur)",
      "Approved for state agricultural mechanization subsidies across Maharashtra and Gujarat"
    ],
    "warranty": "12 months manufacturer warranty + KrishiGears after-sales service network.",
    "video": "https://www.youtube.com/watch?v=KRJFfkK0eJM",
    "hsn": "8432",
    "gst": 12
  },
  {
    "slug": "rly-my-473d",
    "category": "power-weeders",
    "name": "KrishiGears MY-473D Diesel Power Weeder | 247 CC Gear Drive",
    "model": "MY-473D",
    "brand": "KrishiGears",
    "badges": [
      "FMTTI Tested",
      "Commercial Grade",
      "Industrial Quality Standards"
    ],
    "price": 48000,
    "comparePrice": 56000,
    "images": [
      "/images/catalog/rly-my-473d.webp",
      "/images/catalog/rly-my-473d-1.webp",
      "/images/catalog/rly-my-473d-2.webp"
    ],
    "specs": {
      "Brand": "KrishiGears",
      "Model": "MY-473D",
      "Product Type": "Diesel Power Weeder",
      "Engine Model": "173F Diesel Engine",
      "Engine Capacity": "247 CC",
      "Fuel Type": "Diesel",
      "Maximum Power": "4 kW @ 3600 RPM",
      "Starting System": "Recoil Start",
      "Transmission": "Gear Drive",
      "Gear Selection": "Reverse, Neutral, 1 &amp; 2 Forward Gears",
      "Handle Bar System": "Up / Down Adjustable",
      "Tyre Size": "4.0-8 Rubber Tyres",
      "Blade Quantity": "32 Heavy-Duty Blades",
      "Additional Features": "Easy Gear System, Side Disc"
    },
    "features": [
      "Genuine KrishiGears branded product",
      "Backed by manufacturer warranty",
      "PAN India delivery from KrishiGears",
      "Genuine spare parts availability",
      "Genuine KrishiGears commercial agricultural machinery",
      "FMTTI-tested commercial durability standard",
      "Precision-engineered transmission case for tough Indian soil",
      "PAN India direct drop-ship dispatch from KrishiGears Express Network",
      "24-48 hour dispatch with genuine replacement spare parts guarantee"
    ],
    "applications": [
      "Sugarcane",
      "Cotton",
      "Soybean",
      "Onion"
    ],
    "benefits": [
      "Saves significant manual labour",
      "Reduces operating cost over time",
      "FMTTI-tested durability",
      "Cuts inter-cultivation labor cost by up to 70% in Sugarcane fields",
      "High-torque de-weeding and soil aeration in Black Cotton Soil (Regur)",
      "Approved for state agricultural mechanization subsidies across Maharashtra and Gujarat"
    ],
    "warranty": "12 months manufacturer warranty + KrishiGears after-sales service network.",
    "video": "https://www.youtube.com/watch?v=KRJFfkK0eJM",
    "hsn": "8432",
    "gst": 12
  },
  {
    "slug": "rly-my-470g",
    "category": "power-weeders",
    "name": "KrishiGears MY-470G Petrol Power Weeder | Heavy Duty Farm Machine",
    "model": "MY-470G",
    "brand": "KrishiGears",
    "badges": [
      "FMTTI Tested",
      "Commercial Grade",
      "Industrial Quality Standards"
    ],
    "price": 38000,
    "comparePrice": 45000,
    "images": [
      "/images/catalog/rly-my-470g.webp",
      "/images/catalog/rly-my-470g-1.webp",
      "/images/catalog/rly-my-470g-2.webp"
    ],
    "specs": {
      "Brand": "KrishiGears",
      "Model": "MY-470G",
      "Product Type": "Petrol Power Weeder",
      "Engine Quality": "Premium",
      "Fuel Tank Capacity": "5 Litres",
      "Tyre Size": "5.0-8",
      "Fender": "Double",
      "Bumper": "Heavy Duty",
      "Blade Weight": "350 gms",
      "Tool Bar": "Metal",
      "Gross Weight": "95 kg",
      "Handle Seat Design": "Improved",
      "Handle Seat Cover": "Yes",
      "Starting System": "Improved Recoil Starter",
      "Air Filter &#038; Muffler": "Improved",
      "Packing": "7 mm Wooden Box"
    },
    "features": [
      "Genuine KrishiGears branded product",
      "Backed by manufacturer warranty",
      "PAN India delivery from KrishiGears",
      "Genuine spare parts availability",
      "Genuine KrishiGears commercial agricultural machinery",
      "FMTTI-tested commercial durability standard",
      "Precision-engineered transmission case for tough Indian soil",
      "PAN India direct drop-ship dispatch from KrishiGears Express Network",
      "24-48 hour dispatch with genuine replacement spare parts guarantee"
    ],
    "applications": [
      "Sugarcane",
      "Cotton",
      "Soybean",
      "Onion"
    ],
    "benefits": [
      "Saves significant manual labour",
      "Reduces operating cost over time",
      "FMTTI-tested durability",
      "Cuts inter-cultivation labor cost by up to 70% in Sugarcane fields",
      "High-torque de-weeding and soil aeration in Black Cotton Soil (Regur)",
      "Approved for state agricultural mechanization subsidies across Maharashtra and Gujarat"
    ],
    "warranty": "12 months manufacturer warranty + KrishiGears after-sales service network.",
    "video": "https://www.youtube.com/watch?v=KRJFfkK0eJM",
    "hsn": "8432",
    "gst": 12
  },
  {
    "slug": "rly-my-450g",
    "category": "power-weeders",
    "name": "KrishiGears MY-450G Petrol Power Weeder | 212 CC Gear Drive Machine",
    "model": "MY-450G",
    "brand": "KrishiGears",
    "badges": [
      "FMTTI Tested",
      "Commercial Grade",
      "Industrial Quality Standards"
    ],
    "price": 38000,
    "comparePrice": 45000,
    "images": [
      "/images/catalog/rly-my-450g.webp",
      "/images/catalog/rly-my-450g-1.webp",
      "/images/catalog/rly-my-450g-2.webp",
      "/images/catalog/rly-my-450g-3.webp"
    ],
    "specs": {
      "Brand": "KrishiGears",
      "Model": "MY-450G",
      "Product Type": "Petrol Power Weeder",
      "Engine Model": "170F, 4-Stroke Petrol Engine",
      "Engine Capacity": "212 CC",
      "Power Output": "4 kW",
      "Starting System": "Recoil Start",
      "Transmission": "Gear Drive",
      "Handlebar System": "Adjustable (Up / Down)",
      "Tyre Size": "4.0\u20138",
      "Blade Quantity": "24 Heavy-Duty Blades",
      "Tilling Width": "800 mm",
      "Tilling Depth": "100\u2013300 mm"
    },
    "features": [
      "Genuine KrishiGears branded product",
      "Backed by manufacturer warranty",
      "PAN India delivery from KrishiGears",
      "Genuine spare parts availability",
      "Genuine KrishiGears commercial agricultural machinery",
      "FMTTI-tested commercial durability standard",
      "Precision-engineered transmission case for tough Indian soil",
      "PAN India direct drop-ship dispatch from KrishiGears Express Network",
      "24-48 hour dispatch with genuine replacement spare parts guarantee"
    ],
    "applications": [
      "Sugarcane",
      "Cotton",
      "Soybean",
      "Onion"
    ],
    "benefits": [
      "Saves significant manual labour",
      "Reduces operating cost over time",
      "FMTTI-tested durability",
      "Cuts inter-cultivation labor cost by up to 70% in Sugarcane fields",
      "High-torque de-weeding and soil aeration in Black Cotton Soil (Regur)",
      "Approved for state agricultural mechanization subsidies across Maharashtra and Gujarat"
    ],
    "warranty": "12 months manufacturer warranty + KrishiGears after-sales service network.",
    "video": "https://www.youtube.com/watch?v=KRJFfkK0eJM",
    "hsn": "8432",
    "gst": 12
  },
  {
    "slug": "rly-my-380g",
    "category": "power-weeders",
    "name": "KrishiGears MY-380G Petrol Power Weeder | 212 CC Gear Drive",
    "model": "MY-380G",
    "brand": "KrishiGears",
    "badges": [
      "FMTTI Tested",
      "Commercial Grade",
      "Industrial Quality Standards"
    ],
    "price": 39000,
    "comparePrice": 46000,
    "images": [
      "/images/catalog/rly-my-380g.webp",
      "/images/catalog/rly-my-380g-1.webp",
      "/images/catalog/rly-my-380g-2.webp"
    ],
    "specs": {
      "Brand": "KrishiGears",
      "Model": "MY-380G",
      "Product Type": "Petrol Power Weeder",
      "Engine Type": "170F 4-Stroke Petrol Engine",
      "Engine Capacity": "212 CC",
      "Power Output": "4 kW",
      "Transmission": "Gear Drive",
      "Tilling Width": "1050 mm",
      "Tilling Depth": "100\u2013300 mm",
      "Blade Quantity": "32 Blades",
      "Tyre Type": "ATV Tyre 19 \u00d7 7 \u00d7 8",
      "Suspension": "Double Shocker",
      "Handle": "Adjustable",
      "Suitable For": "Rotary Tillage, Trenching, Weeding, Ridging"
    },
    "features": [
      "Genuine KrishiGears branded product",
      "Backed by manufacturer warranty",
      "PAN India delivery from KrishiGears",
      "Genuine spare parts availability",
      "Genuine KrishiGears commercial agricultural machinery",
      "FMTTI-tested commercial durability standard",
      "Precision-engineered transmission case for tough Indian soil",
      "PAN India direct drop-ship dispatch from KrishiGears Express Network",
      "24-48 hour dispatch with genuine replacement spare parts guarantee"
    ],
    "applications": [
      "Sugarcane",
      "Cotton",
      "Soybean",
      "Onion"
    ],
    "benefits": [
      "Saves significant manual labour",
      "Reduces operating cost over time",
      "FMTTI-tested durability",
      "Cuts inter-cultivation labor cost by up to 70% in Sugarcane fields",
      "High-torque de-weeding and soil aeration in Black Cotton Soil (Regur)",
      "Approved for state agricultural mechanization subsidies across Maharashtra and Gujarat"
    ],
    "warranty": "12 months manufacturer warranty + KrishiGears after-sales service network.",
    "video": "https://www.youtube.com/watch?v=KRJFfkK0eJM",
    "hsn": "8432",
    "gst": 12
  },
  {
    "slug": "rly-my-370g",
    "category": "power-weeders",
    "name": "KrishiGears MY-370G Petrol Power Weeder | Agricultural Power Weeder",
    "model": "MY-370G",
    "brand": "KrishiGears",
    "badges": [
      "FMTTI Tested",
      "Commercial Grade",
      "Industrial Quality Standards"
    ],
    "price": 39000,
    "comparePrice": 46000,
    "images": [
      "/images/catalog/rly-my-370g.webp",
      "/images/catalog/rly-my-370g-1.webp",
      "/images/catalog/rly-my-370g-2.webp",
      "/images/catalog/rly-my-370g-3.webp"
    ],
    "specs": {
      "Model": "MY-370G",
      "Engine Model": "170F Petrol",
      "Engine Type": "4-Stroke",
      "Displacement": "212cc",
      "Maximum Speed": "3600 RPM",
      "Starting System": "Recoil",
      "Transmission": "Gear Driven",
      "Handlebar": "Up &amp; Down Adjustable",
      "Tyre Size": "4.00-8 Solid",
      "Blades": "32 PCS with Disc",
      "Packing": "Wooden Box"
    },
    "features": [
      "Genuine KrishiGears branded product",
      "Backed by manufacturer warranty",
      "PAN India delivery from KrishiGears",
      "Genuine spare parts availability",
      "Genuine KrishiGears commercial agricultural machinery",
      "FMTTI-tested commercial durability standard",
      "Precision-engineered transmission case for tough Indian soil",
      "PAN India direct drop-ship dispatch from KrishiGears Express Network",
      "24-48 hour dispatch with genuine replacement spare parts guarantee"
    ],
    "applications": [
      "Sugarcane",
      "Cotton",
      "Soybean",
      "Onion"
    ],
    "benefits": [
      "Saves significant manual labour",
      "Reduces operating cost over time",
      "FMTTI-tested durability",
      "Cuts inter-cultivation labor cost by up to 70% in Sugarcane fields",
      "High-torque de-weeding and soil aeration in Black Cotton Soil (Regur)",
      "Approved for state agricultural mechanization subsidies across Maharashtra and Gujarat"
    ],
    "warranty": "12 months manufacturer warranty + KrishiGears after-sales service network.",
    "video": "https://www.youtube.com/watch?v=KRJFfkK0eJM",
    "hsn": "8432",
    "gst": 12
  },
  {
    "slug": "rly-my-360g",
    "category": "power-weeders",
    "name": "KrishiGears Power Weeder MY-360G | 212 CC Petrol Weeder",
    "model": "MY-360G",
    "brand": "KrishiGears",
    "badges": [
      "FMTTI Tested",
      "Commercial Grade",
      "Industrial Quality Standards"
    ],
    "price": 39000,
    "comparePrice": 46000,
    "images": [
      "/images/catalog/rly-my-360g.webp"
    ],
    "specs": {
      "Brand": "KrishiGears",
      "Model": "MY-360G",
      "Product Type": "Petrol Power Weeder",
      "Engine Type": "170F, 4-Stroke Petrol Engine",
      "Engine Capacity": "212 CC",
      "Power Output": "4 kW",
      "Transmission": "Gear Drive",
      "Tilling Width": "1050 mm",
      "Tilling Depth": "100\u2013300 mm",
      "Blade Quantity": "32 Blades",
      "Tyre Size": "4.0\u20138 Solid",
      "Handle": "Adjustable",
      "Applications": "Rotary Tillage, Weeding, Trenching &amp; Ridging"
    },
    "features": [
      "Genuine KrishiGears branded product",
      "Backed by manufacturer warranty",
      "PAN India delivery from KrishiGears",
      "Genuine spare parts availability",
      "Genuine KrishiGears commercial agricultural machinery",
      "FMTTI-tested commercial durability standard",
      "Precision-engineered transmission case for tough Indian soil",
      "PAN India direct drop-ship dispatch from KrishiGears Express Network",
      "24-48 hour dispatch with genuine replacement spare parts guarantee"
    ],
    "applications": [
      "Sugarcane",
      "Cotton",
      "Soybean",
      "Onion"
    ],
    "benefits": [
      "Saves significant manual labour",
      "Reduces operating cost over time",
      "FMTTI-tested durability",
      "Cuts inter-cultivation labor cost by up to 70% in Sugarcane fields",
      "High-torque de-weeding and soil aeration in Black Cotton Soil (Regur)",
      "Approved for state agricultural mechanization subsidies across Maharashtra and Gujarat"
    ],
    "warranty": "12 months manufacturer warranty + KrishiGears after-sales service network.",
    "video": "https://www.youtube.com/watch?v=KRJFfkK0eJM",
    "hsn": "8432",
    "gst": 12
  },
  {
    "slug": "rly-my-373d",
    "category": "power-weeders",
    "name": "KrishiGears Power Weeder MY-373D | 173F Diesel Power Weeder",
    "model": "MY-373D",
    "brand": "KrishiGears",
    "badges": [
      "FMTTI Tested",
      "Commercial Grade",
      "Industrial Quality Standards"
    ],
    "price": 39000,
    "comparePrice": 46000,
    "images": [
      "/images/catalog/rly-my-373d.webp",
      "/images/catalog/rly-my-373d-1.webp",
      "/images/catalog/rly-my-373d-2.webp",
      "/images/catalog/rly-my-373d-3.webp"
    ],
    "specs": {
      "Model": "MY-373D",
      "Engine Model": "173F Diesel",
      "Engine Type": "4-Stroke",
      "Displacement": "247cc",
      "Maximum Speed": "3600 RPM",
      "Starting System": "Recoil Starter",
      "Transmission": "Gear Driven",
      "Handlebar": "Adjustable Up &amp; Down",
      "Tyre Size": "4.00-8 Solid Tyres",
      "Blades": "32 PCS Rotary Blades with Disc",
      "Packing": "Wooden Box"
    },
    "features": [
      "Genuine KrishiGears branded product",
      "Backed by manufacturer warranty",
      "PAN India delivery from KrishiGears",
      "Genuine spare parts availability",
      "Genuine KrishiGears commercial agricultural machinery",
      "FMTTI-tested commercial durability standard",
      "Precision-engineered transmission case for tough Indian soil",
      "PAN India direct drop-ship dispatch from KrishiGears Express Network",
      "24-48 hour dispatch with genuine replacement spare parts guarantee"
    ],
    "applications": [
      "Sugarcane",
      "Cotton",
      "Soybean",
      "Onion"
    ],
    "benefits": [
      "Saves significant manual labour",
      "Reduces operating cost over time",
      "FMTTI-tested durability",
      "Cuts inter-cultivation labor cost by up to 70% in Sugarcane fields",
      "High-torque de-weeding and soil aeration in Black Cotton Soil (Regur)",
      "Approved for state agricultural mechanization subsidies across Maharashtra and Gujarat"
    ],
    "warranty": "12 months manufacturer warranty + KrishiGears after-sales service network.",
    "video": "https://www.youtube.com/watch?v=KRJFfkK0eJM",
    "hsn": "8432",
    "gst": 12
  },
  {
    "slug": "rly-rapl-sm-g90",
    "category": "farm-machinery",
    "name": "KrishiGears Stubble Mower RAPL-SM-G90",
    "model": "RAPL-SM-G90",
    "brand": "KrishiGears",
    "badges": [
      "FMTTI Tested",
      "Commercial Grade",
      "Industrial Quality Standards"
    ],
    "price": 39000,
    "comparePrice": 46000,
    "images": [
      "/images/catalog/rly-rapl-sm-g90.webp"
    ],
    "specs": {
      "Engine": "Petrol",
      "Power": "",
      "Fuel": "Petrol",
      "Start": "Recoil"
    },
    "features": [
      "Genuine KrishiGears branded product",
      "Backed by manufacturer warranty",
      "PAN India delivery from KrishiGears",
      "Genuine spare parts availability",
      "Genuine KrishiGears commercial agricultural machinery",
      "FMTTI-tested commercial durability standard",
      "Precision-engineered transmission case for tough Indian soil",
      "PAN India direct drop-ship dispatch from KrishiGears Express Network",
      "24-48 hour dispatch with genuine replacement spare parts guarantee"
    ],
    "applications": [
      "Sugarcane",
      "Cotton",
      "Soybean",
      "Onion"
    ],
    "benefits": [
      "Saves significant manual labour",
      "Reduces operating cost over time",
      "FMTTI-tested durability",
      "Cuts inter-cultivation labor cost by up to 70% in Sugarcane fields",
      "High-torque de-weeding and soil aeration in Black Cotton Soil (Regur)",
      "Approved for state agricultural mechanization subsidies across Maharashtra and Gujarat"
    ],
    "warranty": "12 months manufacturer warranty + KrishiGears after-sales service network.",
    "video": "https://www.youtube.com/watch?v=KRJFfkK0eJM",
    "hsn": "8432",
    "gst": 12
  },
  {
    "slug": "rly-rapl-sm-g50",
    "category": "farm-machinery",
    "name": "KrishiGears Stubble Mower RAPL-SM-G50",
    "model": "RAPL-SM-G50",
    "brand": "KrishiGears",
    "badges": [
      "FMTTI Tested",
      "Commercial Grade",
      "Industrial Quality Standards"
    ],
    "price": 39000,
    "comparePrice": 46000,
    "images": [
      "/images/catalog/rly-rapl-sm-g50.webp",
      "/images/catalog/rly-rapl-sm-g50-1.webp",
      "/images/catalog/rly-rapl-sm-g50-2.webp",
      "/images/catalog/rly-rapl-sm-g50-3.webp"
    ],
    "specs": {
      "Engine": "Petrol",
      "Power": "",
      "Fuel": "Petrol",
      "Start": "Recoil"
    },
    "features": [
      "Genuine KrishiGears branded product",
      "Backed by manufacturer warranty",
      "PAN India delivery from KrishiGears",
      "Genuine spare parts availability",
      "Genuine KrishiGears commercial agricultural machinery",
      "FMTTI-tested commercial durability standard",
      "Precision-engineered transmission case for tough Indian soil",
      "PAN India direct drop-ship dispatch from KrishiGears Express Network",
      "24-48 hour dispatch with genuine replacement spare parts guarantee"
    ],
    "applications": [
      "Sugarcane",
      "Cotton",
      "Soybean",
      "Onion"
    ],
    "benefits": [
      "Saves significant manual labour",
      "Reduces operating cost over time",
      "FMTTI-tested durability",
      "Cuts inter-cultivation labor cost by up to 70% in Sugarcane fields",
      "High-torque de-weeding and soil aeration in Black Cotton Soil (Regur)",
      "Approved for state agricultural mechanization subsidies across Maharashtra and Gujarat"
    ],
    "warranty": "12 months manufacturer warranty + KrishiGears after-sales service network.",
    "video": "https://www.youtube.com/watch?v=KRJFfkK0eJM",
    "hsn": "8432",
    "gst": 12
  },
  {
    "slug": "rly-rapl-apw-7000d",
    "category": "power-weeders",
    "name": "KrishiGears Power Weeder Cum Stubble Mower RAPL-APW-7000D",
    "model": "RAPL-APW-7000D",
    "brand": "KrishiGears",
    "badges": [
      "FMTTI Tested",
      "Commercial Grade",
      "Industrial Quality Standards"
    ],
    "price": 85000,
    "comparePrice": 98000,
    "images": [
      "/images/catalog/rly-rapl-apw-7000d.webp",
      "/images/catalog/rly-rapl-apw-7000d-1.webp",
      "/images/catalog/rly-rapl-apw-7000d-2.webp",
      "/images/catalog/rly-rapl-apw-7000d-3.webp"
    ],
    "specs": {
      "Engine": "Diesel",
      "Power": "",
      "Fuel": "Diesel",
      "Start": "Recoil"
    },
    "features": [
      "Genuine KrishiGears branded product",
      "Backed by manufacturer warranty",
      "PAN India delivery from KrishiGears",
      "Genuine spare parts availability",
      "Genuine KrishiGears commercial agricultural machinery",
      "FMTTI-tested commercial durability standard",
      "Precision-engineered transmission case for tough Indian soil",
      "PAN India direct drop-ship dispatch from KrishiGears Express Network",
      "24-48 hour dispatch with genuine replacement spare parts guarantee"
    ],
    "applications": [
      "Sugarcane",
      "Cotton",
      "Soybean",
      "Onion"
    ],
    "benefits": [
      "Saves significant manual labour",
      "Reduces operating cost over time",
      "FMTTI-tested durability",
      "Cuts inter-cultivation labor cost by up to 70% in Sugarcane fields",
      "High-torque de-weeding and soil aeration in Black Cotton Soil (Regur)",
      "Approved for state agricultural mechanization subsidies across Maharashtra and Gujarat"
    ],
    "warranty": "12 months manufacturer warranty + KrishiGears after-sales service network.",
    "video": "https://www.youtube.com/watch?v=KRJFfkK0eJM",
    "hsn": "8432",
    "gst": 12
  },
  {
    "slug": "rly-rapl-apw-6000g",
    "category": "power-weeders",
    "name": "KrishiGears Power Weeder Cum Stubble Mower RAPL-APW-6000G",
    "model": "RAPL-APW-6000G",
    "brand": "KrishiGears",
    "badges": [
      "FMTTI Tested",
      "Commercial Grade",
      "Industrial Quality Standards"
    ],
    "price": 85000,
    "comparePrice": 98000,
    "images": [
      "/images/catalog/rly-rapl-apw-6000g.webp",
      "/images/catalog/rly-rapl-apw-6000g-1.webp",
      "/images/catalog/rly-rapl-apw-6000g-2.webp",
      "/images/catalog/rly-rapl-apw-6000g-3.webp"
    ],
    "specs": {
      "Engine": "Petrol",
      "Power": "",
      "Fuel": "Petrol",
      "Start": "Recoil"
    },
    "features": [
      "Genuine KrishiGears branded product",
      "Backed by manufacturer warranty",
      "PAN India delivery from KrishiGears",
      "Genuine spare parts availability",
      "Genuine KrishiGears commercial agricultural machinery",
      "FMTTI-tested commercial durability standard",
      "Precision-engineered transmission case for tough Indian soil",
      "PAN India direct drop-ship dispatch from KrishiGears Express Network",
      "24-48 hour dispatch with genuine replacement spare parts guarantee"
    ],
    "applications": [
      "Sugarcane",
      "Cotton",
      "Soybean",
      "Onion"
    ],
    "benefits": [
      "Saves significant manual labour",
      "Reduces operating cost over time",
      "FMTTI-tested durability",
      "Cuts inter-cultivation labor cost by up to 70% in Sugarcane fields",
      "High-torque de-weeding and soil aeration in Black Cotton Soil (Regur)",
      "Approved for state agricultural mechanization subsidies across Maharashtra and Gujarat"
    ],
    "warranty": "12 months manufacturer warranty + KrishiGears after-sales service network.",
    "video": "https://www.youtube.com/watch?v=KRJFfkK0eJM",
    "hsn": "8432",
    "gst": 12
  },
  {
    "slug": "rly-rapl-apw-5000g",
    "category": "power-weeders",
    "name": "KrishiGears Power Weeder Cum Stubble Mower RAPL-APW-5000G",
    "model": "RAPL-APW-5000G",
    "brand": "KrishiGears",
    "badges": [
      "FMTTI Tested",
      "Commercial Grade",
      "Industrial Quality Standards"
    ],
    "price": 85000,
    "comparePrice": 98000,
    "images": [
      "/images/catalog/rly-rapl-apw-5000g.webp",
      "/images/catalog/rly-rapl-apw-5000g-1.webp",
      "/images/catalog/rly-rapl-apw-5000g-2.webp",
      "/images/catalog/rly-rapl-apw-5000g-3.webp"
    ],
    "specs": {
      "Engine": "Petrol",
      "Power": "",
      "Fuel": "Petrol",
      "Start": "Recoil"
    },
    "features": [
      "Genuine KrishiGears branded product",
      "Backed by manufacturer warranty",
      "PAN India delivery from KrishiGears",
      "Genuine spare parts availability",
      "Genuine KrishiGears commercial agricultural machinery",
      "FMTTI-tested commercial durability standard",
      "Precision-engineered transmission case for tough Indian soil",
      "PAN India direct drop-ship dispatch from KrishiGears Express Network",
      "24-48 hour dispatch with genuine replacement spare parts guarantee"
    ],
    "applications": [
      "Sugarcane",
      "Cotton",
      "Soybean",
      "Onion"
    ],
    "benefits": [
      "Saves significant manual labour",
      "Reduces operating cost over time",
      "FMTTI-tested durability",
      "Cuts inter-cultivation labor cost by up to 70% in Sugarcane fields",
      "High-torque de-weeding and soil aeration in Black Cotton Soil (Regur)",
      "Approved for state agricultural mechanization subsidies across Maharashtra and Gujarat"
    ],
    "warranty": "12 months manufacturer warranty + KrishiGears after-sales service network.",
    "video": "https://www.youtube.com/watch?v=KRJFfkK0eJM",
    "hsn": "8432",
    "gst": 12
  },
  {
    "slug": "rly-my-573d",
    "category": "power-weeders",
    "name": "KrishiGears Power Weeder MY-573D",
    "model": "MY-573D",
    "brand": "KrishiGears",
    "badges": [
      "FMTTI Tested",
      "Commercial Grade",
      "Industrial Quality Standards"
    ],
    "price": 54000,
    "comparePrice": 64000,
    "images": [
      "/images/catalog/rly-my-573d.webp",
      "/images/catalog/rly-my-573d-1.webp",
      "/images/catalog/rly-my-573d-2.webp",
      "/images/catalog/rly-my-573d-3.webp"
    ],
    "specs": {
      "ENGINE": "173F DIESEL ENGINE",
      "DISPLACEMENT": "247CC ,4 STROKE",
      "TRANSMISSION": "GEAR DRIVE",
      "POWER": "4 KW",
      "BLADES": "32 PCS DRY LAND",
      "ATTACHMENTS": "SIDE DISC",
      "TYRE": "4-0-8",
      "START TYPE": "RECOIL START"
    },
    "features": [
      "Genuine KrishiGears branded product",
      "Backed by manufacturer warranty",
      "PAN India delivery from KrishiGears",
      "Genuine spare parts availability",
      "Genuine KrishiGears commercial agricultural machinery",
      "FMTTI-tested commercial durability standard",
      "Precision-engineered transmission case for tough Indian soil",
      "PAN India direct drop-ship dispatch from KrishiGears Express Network",
      "24-48 hour dispatch with genuine replacement spare parts guarantee"
    ],
    "applications": [
      "Sugarcane",
      "Cotton",
      "Soybean",
      "Onion"
    ],
    "benefits": [
      "Saves significant manual labour",
      "Reduces operating cost over time",
      "FMTTI-tested durability",
      "Cuts inter-cultivation labor cost by up to 70% in Sugarcane fields",
      "High-torque de-weeding and soil aeration in Black Cotton Soil (Regur)",
      "Approved for state agricultural mechanization subsidies across Maharashtra and Gujarat"
    ],
    "warranty": "12 months manufacturer warranty + KrishiGears after-sales service network.",
    "video": "https://www.youtube.com/watch?v=KRJFfkK0eJM",
    "hsn": "8432",
    "gst": 12
  },
  {
    "slug": "rly-my-470-gh",
    "category": "power-weeders",
    "name": "KrishiGears Power Weeder MY-470-GH",
    "model": "MY-470-GH",
    "brand": "KrishiGears",
    "badges": [
      "FMTTI Tested",
      "Commercial Grade",
      "Industrial Quality Standards"
    ],
    "price": 39000,
    "comparePrice": 46000,
    "images": [
      "/images/catalog/rly-my-470-gh.webp"
    ],
    "specs": {
      "ENGINE": "170F PETROL",
      "DISPLACEMENT": "212CC ,4 STROKE",
      "TRANSMISSION": "GEAR DRIVE",
      "POWER": "4 KW",
      "BLADES": "32 PCS DRY LAND",
      "ATTACHMENTS": "SIDE DISC",
      "TYRE": "4-0-8",
      "START TYPE": "RECOIL START WITH HEADLAMP"
    },
    "features": [
      "Genuine KrishiGears branded product",
      "Backed by manufacturer warranty",
      "PAN India delivery from KrishiGears",
      "Genuine spare parts availability",
      "Genuine KrishiGears commercial agricultural machinery",
      "FMTTI-tested commercial durability standard",
      "Precision-engineered transmission case for tough Indian soil",
      "PAN India direct drop-ship dispatch from KrishiGears Express Network",
      "24-48 hour dispatch with genuine replacement spare parts guarantee"
    ],
    "applications": [
      "Sugarcane",
      "Cotton",
      "Soybean",
      "Onion"
    ],
    "benefits": [
      "Saves significant manual labour",
      "Reduces operating cost over time",
      "FMTTI-tested durability",
      "Cuts inter-cultivation labor cost by up to 70% in Sugarcane fields",
      "High-torque de-weeding and soil aeration in Black Cotton Soil (Regur)",
      "Approved for state agricultural mechanization subsidies across Maharashtra and Gujarat"
    ],
    "warranty": "12 months manufacturer warranty + KrishiGears after-sales service network.",
    "video": "https://www.youtube.com/watch?v=KRJFfkK0eJM",
    "hsn": "8432",
    "gst": 12
  },
  {
    "slug": "rly-my-550g-es",
    "category": "power-weeders",
    "name": "KrishiGears Power Weeder \u2013 MY-550G-ES",
    "model": "MY-550G-ES",
    "brand": "KrishiGears",
    "badges": [
      "FMTTI Tested",
      "Commercial Grade",
      "Industrial Quality Standards"
    ],
    "price": 42000,
    "comparePrice": 49000,
    "images": [
      "/images/catalog/rly-my-550g-es.webp"
    ],
    "specs": {
      "ENGINE MODEL": "170F ENGINE",
      "DISPLACEMENT/FUEL": "212CC/PETROL",
      "MAX POWER/RPM": "4KW/3600RPM",
      "STARTING SYSTEM": "RECOIL/ELECTRIC",
      "TRANSMISSION": "GEAR",
      "HANDLE BAR SYSTEM": "UP/DOWN",
      "TYRE": "4. 0-8",
      "BLADES (DRY LAND)": "24 PCS",
      "GEAR": "R,0,1,2",
      "TILLING DEPTH (MM)": "100-300MM",
      "TILLING WIDTH (MM)": "800MM",
      "FUEL CONSUMPTION PER HOUR": "374G/KW. H"
    },
    "features": [
      "Genuine KrishiGears branded product",
      "Backed by manufacturer warranty",
      "PAN India delivery from KrishiGears",
      "Genuine spare parts availability",
      "Genuine KrishiGears commercial agricultural machinery",
      "FMTTI-tested commercial durability standard",
      "Precision-engineered transmission case for tough Indian soil",
      "PAN India direct drop-ship dispatch from KrishiGears Express Network",
      "24-48 hour dispatch with genuine replacement spare parts guarantee"
    ],
    "applications": [
      "Sugarcane",
      "Cotton",
      "Soybean",
      "Onion"
    ],
    "benefits": [
      "Saves significant manual labour",
      "Reduces operating cost over time",
      "FMTTI-tested durability",
      "Cuts inter-cultivation labor cost by up to 70% in Sugarcane fields",
      "High-torque de-weeding and soil aeration in Black Cotton Soil (Regur)",
      "Approved for state agricultural mechanization subsidies across Maharashtra and Gujarat"
    ],
    "warranty": "12 months manufacturer warranty + KrishiGears after-sales service network.",
    "video": "https://www.youtube.com/watch?v=KRJFfkK0eJM",
    "hsn": "8432",
    "gst": 12
  },
  {
    "slug": "rly-my-550g-191",
    "category": "power-weeders",
    "name": "KrishiGears Power Weeder \u2013 MY-550G",
    "model": "MY-550G",
    "brand": "KrishiGears",
    "badges": [
      "FMTTI Tested",
      "Commercial Grade",
      "Industrial Quality Standards"
    ],
    "price": 42000,
    "comparePrice": 49000,
    "images": [
      "/images/catalog/rly-my-550g-191.webp"
    ],
    "specs": {
      "ENGINE MODEL": "170F ENGINE",
      "DISPLACEMENT/FUEL": "212CC/PETROL",
      "MAX POWER/RPM": "4KW/3600RPM",
      "STARTING SYSTEM": "RECOIL",
      "TRANSMISSION": "GEAR",
      "HANDLE BAR SYSTEM": "UP/DOWN",
      "TYRE": "4. 0-8",
      "BLADES (DRY LAND)": "24 PCS",
      "GEAR": "R,0,1,2",
      "TILLING DEPTH (MM)": "100-300MM",
      "TILLING WIDTH (MM)": "800MM",
      "FUEL CONSUMPTION PER HOUR": "374G/KW. H"
    },
    "features": [
      "Genuine KrishiGears branded product",
      "Backed by manufacturer warranty",
      "PAN India delivery from KrishiGears",
      "Genuine spare parts availability",
      "Genuine KrishiGears commercial agricultural machinery",
      "FMTTI-tested commercial durability standard",
      "Precision-engineered transmission case for tough Indian soil",
      "PAN India direct drop-ship dispatch from KrishiGears Express Network",
      "24-48 hour dispatch with genuine replacement spare parts guarantee"
    ],
    "applications": [
      "Sugarcane",
      "Cotton",
      "Soybean",
      "Onion"
    ],
    "benefits": [
      "Saves significant manual labour",
      "Reduces operating cost over time",
      "FMTTI-tested durability",
      "Cuts inter-cultivation labor cost by up to 70% in Sugarcane fields",
      "High-torque de-weeding and soil aeration in Black Cotton Soil (Regur)",
      "Approved for state agricultural mechanization subsidies across Maharashtra and Gujarat"
    ],
    "warranty": "12 months manufacturer warranty + KrishiGears after-sales service network.",
    "video": "https://www.youtube.com/watch?v=KRJFfkK0eJM",
    "hsn": "8432",
    "gst": 12
  },
  {
    "slug": "rly-my-600g-192",
    "category": "power-weeders",
    "name": "KrishiGears Power Weeder \u2013 MY-600G",
    "model": "MY-600G",
    "brand": "KrishiGears",
    "badges": [
      "FMTTI Tested",
      "Commercial Grade",
      "Industrial Quality Standards"
    ],
    "price": 42000,
    "comparePrice": 49000,
    "images": [
      "/images/catalog/rly-my-600g-192.webp",
      "/images/catalog/rly-my-600g-192-1.webp"
    ],
    "specs": {
      "ENGINE MODEL": "170F ENGINE",
      "DISPLACEMENT/FUEL": "212CC/PETROL",
      "MAX POWER/RPM": "4KW/3600RPM",
      "STARTING SYSTEM": "RECOIL",
      "TRANSMISSION": "GEAR",
      "HANDLE BAR SYSTEM": "UP/DOWN LEFT/RIGHT",
      "TYRE": "4. 0-8 (TUBELESS)",
      "BLADES (DRY LAND)": "32 PCS",
      "GEAR": "R,0,1,2",
      "TILLING DEPTH (MM)": "100-300MM",
      "TILLING WIDTH (MM)": "1000MM",
      "FUEL CONSUMPTION PER HOUR": "374G/KW. H"
    },
    "features": [
      "Genuine KrishiGears branded product",
      "Backed by manufacturer warranty",
      "PAN India delivery from KrishiGears",
      "Genuine spare parts availability",
      "Genuine KrishiGears commercial agricultural machinery",
      "FMTTI-tested commercial durability standard",
      "Precision-engineered transmission case for tough Indian soil",
      "PAN India direct drop-ship dispatch from KrishiGears Express Network",
      "24-48 hour dispatch with genuine replacement spare parts guarantee"
    ],
    "applications": [
      "Sugarcane",
      "Cotton",
      "Soybean",
      "Onion"
    ],
    "benefits": [
      "Saves significant manual labour",
      "Reduces operating cost over time",
      "FMTTI-tested durability",
      "Cuts inter-cultivation labor cost by up to 70% in Sugarcane fields",
      "High-torque de-weeding and soil aeration in Black Cotton Soil (Regur)",
      "Approved for state agricultural mechanization subsidies across Maharashtra and Gujarat"
    ],
    "warranty": "12 months manufacturer warranty + KrishiGears after-sales service network.",
    "video": "https://www.youtube.com/watch?v=KRJFfkK0eJM",
    "hsn": "8432",
    "gst": 12
  },
  {
    "slug": "rly-my-673d",
    "category": "power-weeders",
    "name": "KrishiGears Power Weeder \u2013 MY-673D",
    "model": "MY-673D",
    "brand": "KrishiGears",
    "badges": [
      "FMTTI Tested",
      "Commercial Grade",
      "Industrial Quality Standards"
    ],
    "price": 54000,
    "comparePrice": 64000,
    "images": [
      "/images/catalog/rly-my-673d.webp"
    ],
    "specs": {
      "ENGINE MODEL": "173F KAMA ENGINE",
      "DISPLACEMENT/FUEL": "247CC/DIESEL",
      "MAX POWER/RPM": "4KW/3600RPM",
      "STARTING SYSTEM": "RECOIL",
      "TRANSMISSION": "GEAR",
      "HANDLE BAR SYSTEM": "UP/DOWN LEFT/RIGHT",
      "TYRE": "4. 0-8 (TUBELESS)",
      "BLADES (DRY LAND)": "32 PCS",
      "GEAR": "R,0,1,2",
      "TILLING DEPTH (MM)": "100-300MM",
      "TILLING WIDTH (MM)": "1000MM",
      "FUEL CONSUMPTION PER HOUR": "240G/KW. H"
    },
    "features": [
      "Genuine KrishiGears branded product",
      "Backed by manufacturer warranty",
      "PAN India delivery from KrishiGears",
      "Genuine spare parts availability",
      "Genuine KrishiGears commercial agricultural machinery",
      "FMTTI-tested commercial durability standard",
      "Precision-engineered transmission case for tough Indian soil",
      "PAN India direct drop-ship dispatch from KrishiGears Express Network",
      "24-48 hour dispatch with genuine replacement spare parts guarantee"
    ],
    "applications": [
      "Sugarcane",
      "Cotton",
      "Soybean",
      "Onion"
    ],
    "benefits": [
      "Saves significant manual labour",
      "Reduces operating cost over time",
      "FMTTI-tested durability",
      "Cuts inter-cultivation labor cost by up to 70% in Sugarcane fields",
      "High-torque de-weeding and soil aeration in Black Cotton Soil (Regur)",
      "Approved for state agricultural mechanization subsidies across Maharashtra and Gujarat"
    ],
    "warranty": "12 months manufacturer warranty + KrishiGears after-sales service network.",
    "video": "https://www.youtube.com/watch?v=KRJFfkK0eJM",
    "hsn": "8432",
    "gst": 12
  },
  {
    "slug": "rly-my-685d-194",
    "category": "power-weeders",
    "name": "KrishiGears Power Weeder \u2013 MY-685D",
    "model": "MY-685D",
    "brand": "KrishiGears",
    "badges": [
      "FMTTI Tested",
      "Commercial Grade",
      "Industrial Quality Standards"
    ],
    "price": 56000,
    "comparePrice": 66000,
    "images": [
      "/images/catalog/rly-my-685d-194.webp"
    ],
    "specs": {
      "ENGINE MODEL": "186F KAMA ENGINE",
      "DISPLACEMENT/FUEL": "406 CC/DIESEL",
      "MAX POWER/RPM": "5. 5KW/3600RPM",
      "STARTING SYSTEM": "RECOIL",
      "TRANSMISSION": "GEAR",
      "HANDLE BAR SYSTEM": "UP/DOWN LEFT/RIGHT",
      "TYRE": "4. 00*8 (TUBELESS)",
      "BLADES (DRY LAND)": "40 PCS",
      "GEAR": "R,0,1,2",
      "TILLING DEPTH (MM)": "100-300MM",
      "TILLING WIDTH (MM)": "1350MM",
      "FUEL CONSUMPTION PER HOUR": "280G/KW. H"
    },
    "features": [
      "Genuine KrishiGears branded product",
      "Backed by manufacturer warranty",
      "PAN India delivery from KrishiGears",
      "Genuine spare parts availability",
      "Genuine KrishiGears commercial agricultural machinery",
      "FMTTI-tested commercial durability standard",
      "Precision-engineered transmission case for tough Indian soil",
      "PAN India direct drop-ship dispatch from KrishiGears Express Network",
      "24-48 hour dispatch with genuine replacement spare parts guarantee"
    ],
    "applications": [
      "Sugarcane",
      "Cotton",
      "Soybean",
      "Onion"
    ],
    "benefits": [
      "Saves significant manual labour",
      "Reduces operating cost over time",
      "FMTTI-tested durability",
      "Cuts inter-cultivation labor cost by up to 70% in Sugarcane fields",
      "High-torque de-weeding and soil aeration in Black Cotton Soil (Regur)",
      "Approved for state agricultural mechanization subsidies across Maharashtra and Gujarat"
    ],
    "warranty": "12 months manufacturer warranty + KrishiGears after-sales service network.",
    "video": "https://www.youtube.com/watch?v=KRJFfkK0eJM",
    "hsn": "8432",
    "gst": 12
  },
  {
    "slug": "rly-my-450g-195",
    "category": "power-weeders",
    "name": "KrishiGears Power Weeder MY-450G",
    "model": "MY-450G",
    "brand": "KrishiGears",
    "badges": [
      "FMTTI Tested",
      "Commercial Grade",
      "Industrial Quality Standards"
    ],
    "price": 38000,
    "comparePrice": 45000,
    "images": [
      "/images/catalog/rly-my-450g-195.webp"
    ],
    "specs": {
      "ENGINE": "170F PETROL",
      "DIESEL": "212CC ,4 STROKE",
      "TRANSMISSION": "GEAR DRIVE",
      "POWER": "4 KW",
      "BLADES": "24 PCS DRY LAND",
      "ATTACHMENTS": "SIDE DISC",
      "TYRE": "4-0-8",
      "START TYPE": "RECOIL START"
    },
    "features": [
      "Genuine KrishiGears branded product",
      "Backed by manufacturer warranty",
      "PAN India delivery from KrishiGears",
      "Genuine spare parts availability",
      "Genuine KrishiGears commercial agricultural machinery",
      "FMTTI-tested commercial durability standard",
      "Precision-engineered transmission case for tough Indian soil",
      "PAN India direct drop-ship dispatch from KrishiGears Express Network",
      "24-48 hour dispatch with genuine replacement spare parts guarantee"
    ],
    "applications": [
      "Sugarcane",
      "Cotton",
      "Soybean",
      "Onion"
    ],
    "benefits": [
      "Saves significant manual labour",
      "Reduces operating cost over time",
      "FMTTI-tested durability",
      "Cuts inter-cultivation labor cost by up to 70% in Sugarcane fields",
      "High-torque de-weeding and soil aeration in Black Cotton Soil (Regur)",
      "Approved for state agricultural mechanization subsidies across Maharashtra and Gujarat"
    ],
    "warranty": "12 months manufacturer warranty + KrishiGears after-sales service network.",
    "video": "https://www.youtube.com/watch?v=KRJFfkK0eJM",
    "hsn": "8432",
    "gst": 12
  },
  {
    "slug": "rly-my-470g-196",
    "category": "power-weeders",
    "name": "KrishiGears Power Weeder MY-470G",
    "model": "MY-470G",
    "brand": "KrishiGears",
    "badges": [
      "FMTTI Tested",
      "Commercial Grade",
      "Industrial Quality Standards"
    ],
    "price": 38000,
    "comparePrice": 45000,
    "images": [
      "/images/catalog/rly-my-470g-196.webp"
    ],
    "specs": {
      "ENGINE": "170F PETROL",
      "DISPLACEMENT": "212CC ,4 STROKE",
      "TRANSMISSION": "GEAR DRIVE",
      "POWER": "4 KW",
      "BLADES": "32 PCS DRY LAND",
      "ATTACHMENTS": "SIDE DISC",
      "TYRE": "4-0-8",
      "START TYPE": "RECOIL START"
    },
    "features": [
      "Genuine KrishiGears branded product",
      "Backed by manufacturer warranty",
      "PAN India delivery from KrishiGears",
      "Genuine spare parts availability",
      "Genuine KrishiGears commercial agricultural machinery",
      "FMTTI-tested commercial durability standard",
      "Precision-engineered transmission case for tough Indian soil",
      "PAN India direct drop-ship dispatch from KrishiGears Express Network",
      "24-48 hour dispatch with genuine replacement spare parts guarantee"
    ],
    "applications": [
      "Sugarcane",
      "Cotton",
      "Soybean",
      "Onion"
    ],
    "benefits": [
      "Saves significant manual labour",
      "Reduces operating cost over time",
      "FMTTI-tested durability",
      "Cuts inter-cultivation labor cost by up to 70% in Sugarcane fields",
      "High-torque de-weeding and soil aeration in Black Cotton Soil (Regur)",
      "Approved for state agricultural mechanization subsidies across Maharashtra and Gujarat"
    ],
    "warranty": "12 months manufacturer warranty + KrishiGears after-sales service network.",
    "video": "https://www.youtube.com/watch?v=KRJFfkK0eJM",
    "hsn": "8432",
    "gst": 12
  },
  {
    "slug": "rly-my-480g-197",
    "category": "power-weeders",
    "name": "KrishiGears Power Weeder MY-480G",
    "model": "MY-480G",
    "brand": "KrishiGears",
    "badges": [
      "FMTTI Tested",
      "Commercial Grade",
      "Industrial Quality Standards"
    ],
    "price": 38000,
    "comparePrice": 45000,
    "images": [
      "/images/catalog/rly-my-480g-197.webp"
    ],
    "specs": {
      "ENGINE": "170F PETROL",
      "DISPLACEMENT": "212CC ,4 STROKE",
      "TRANSMISSION": "GEAR DRIVE",
      "POWER": "4 KW",
      "BLADES": "32 PCS DRY LAND",
      "ATTACHMENTS": "SIDE DISC",
      "TYRE": "4-0-8",
      "START TYPE": "RECOIL START WITH HEADLAMP"
    },
    "features": [
      "Genuine KrishiGears branded product",
      "Backed by manufacturer warranty",
      "PAN India delivery from KrishiGears",
      "Genuine spare parts availability",
      "Genuine KrishiGears commercial agricultural machinery",
      "FMTTI-tested commercial durability standard",
      "Precision-engineered transmission case for tough Indian soil",
      "PAN India direct drop-ship dispatch from KrishiGears Express Network",
      "24-48 hour dispatch with genuine replacement spare parts guarantee"
    ],
    "applications": [
      "Sugarcane",
      "Cotton",
      "Soybean",
      "Onion"
    ],
    "benefits": [
      "Saves significant manual labour",
      "Reduces operating cost over time",
      "FMTTI-tested durability",
      "Cuts inter-cultivation labor cost by up to 70% in Sugarcane fields",
      "High-torque de-weeding and soil aeration in Black Cotton Soil (Regur)",
      "Approved for state agricultural mechanization subsidies across Maharashtra and Gujarat"
    ],
    "warranty": "12 months manufacturer warranty + KrishiGears after-sales service network.",
    "video": "https://www.youtube.com/watch?v=KRJFfkK0eJM",
    "hsn": "8432",
    "gst": 12
  },
  {
    "slug": "rly-my-473d-198",
    "category": "power-weeders",
    "name": "KrishiGears Power Weeder MY-473D",
    "model": "MY-473D",
    "brand": "KrishiGears",
    "badges": [
      "FMTTI Tested",
      "Commercial Grade",
      "Industrial Quality Standards"
    ],
    "price": 48000,
    "comparePrice": 56000,
    "images": [
      "/images/catalog/rly-my-473d-198.webp"
    ],
    "specs": {
      "ENGINE": "173F DIESEL ENGINE",
      "DISPLACEMENT": "247CC ,4 STROKE",
      "TRANSMISSION": "GEAR DRIVE",
      "POWER": "4 KW",
      "BLADES": "32 PCS DRY LAND",
      "ATTACHMENTS": "SIDE DISC",
      "TYRE": "4-0-8",
      "START TYPE": "RECOIL START"
    },
    "features": [
      "Genuine KrishiGears branded product",
      "Backed by manufacturer warranty",
      "PAN India delivery from KrishiGears",
      "Genuine spare parts availability",
      "Genuine KrishiGears commercial agricultural machinery",
      "FMTTI-tested commercial durability standard",
      "Precision-engineered transmission case for tough Indian soil",
      "PAN India direct drop-ship dispatch from KrishiGears Express Network",
      "24-48 hour dispatch with genuine replacement spare parts guarantee"
    ],
    "applications": [
      "Sugarcane",
      "Cotton",
      "Soybean",
      "Onion"
    ],
    "benefits": [
      "Saves significant manual labour",
      "Reduces operating cost over time",
      "FMTTI-tested durability",
      "Cuts inter-cultivation labor cost by up to 70% in Sugarcane fields",
      "High-torque de-weeding and soil aeration in Black Cotton Soil (Regur)",
      "Approved for state agricultural mechanization subsidies across Maharashtra and Gujarat"
    ],
    "warranty": "12 months manufacturer warranty + KrishiGears after-sales service network.",
    "video": "https://www.youtube.com/watch?v=KRJFfkK0eJM",
    "hsn": "8432",
    "gst": 12
  },
  {
    "slug": "rly-my-478d-199",
    "category": "power-weeders",
    "name": "KrishiGears Power Weeder MY-478D",
    "model": "MY-478D",
    "brand": "KrishiGears",
    "badges": [
      "FMTTI Tested",
      "Commercial Grade",
      "Industrial Quality Standards"
    ],
    "price": 48000,
    "comparePrice": 56000,
    "images": [
      "/images/catalog/rly-my-478d-199.webp"
    ],
    "specs": {
      "ENGINE": "178F DIESEL ENGINE",
      "DISPLACEMENT": "296CC ,4 STROKE",
      "TRANSMISSION": "GEAR DRIVE",
      "POWER": "4.4 KW",
      "BLADES": "32 PCS DRY LAND",
      "ATTACHMENTS": "SIDE DISC",
      "TYRE": "4-0-8",
      "START TYPE": "RECOIL START"
    },
    "features": [
      "Genuine KrishiGears branded product",
      "Backed by manufacturer warranty",
      "PAN India delivery from KrishiGears",
      "Genuine spare parts availability",
      "Genuine KrishiGears commercial agricultural machinery",
      "FMTTI-tested commercial durability standard",
      "Precision-engineered transmission case for tough Indian soil",
      "PAN India direct drop-ship dispatch from KrishiGears Express Network",
      "24-48 hour dispatch with genuine replacement spare parts guarantee"
    ],
    "applications": [
      "Sugarcane",
      "Cotton",
      "Soybean",
      "Onion"
    ],
    "benefits": [
      "Saves significant manual labour",
      "Reduces operating cost over time",
      "FMTTI-tested durability",
      "Cuts inter-cultivation labor cost by up to 70% in Sugarcane fields",
      "High-torque de-weeding and soil aeration in Black Cotton Soil (Regur)",
      "Approved for state agricultural mechanization subsidies across Maharashtra and Gujarat"
    ],
    "warranty": "12 months manufacturer warranty + KrishiGears after-sales service network.",
    "video": "https://www.youtube.com/watch?v=KRJFfkK0eJM",
    "hsn": "8432",
    "gst": 12
  },
  {
    "slug": "rly-my-570g-200",
    "category": "power-weeders",
    "name": "KrishiGears Power Weeder MY-570G",
    "model": "MY-570G",
    "brand": "KrishiGears",
    "badges": [
      "FMTTI Tested",
      "Commercial Grade",
      "Industrial Quality Standards"
    ],
    "price": 39000,
    "comparePrice": 46000,
    "images": [
      "/images/catalog/rly-my-570g-200.webp"
    ],
    "specs": {
      "ENGINE": "170F PETROL",
      "DISPLACEMENT": "212CC ,4 STROKE",
      "TRANSMISSION": "GEAR DRIVE",
      "POWER": "4 KW",
      "BLADES": "32 PCS DRY LAND",
      "ATTACHMENTS": "SIDE DISC",
      "TYRE": "4-0-8",
      "START TYPE": "RECOIL START"
    },
    "features": [
      "Genuine KrishiGears branded product",
      "Backed by manufacturer warranty",
      "PAN India delivery from KrishiGears",
      "Genuine spare parts availability",
      "Genuine KrishiGears commercial agricultural machinery",
      "FMTTI-tested commercial durability standard",
      "Precision-engineered transmission case for tough Indian soil",
      "PAN India direct drop-ship dispatch from KrishiGears Express Network",
      "24-48 hour dispatch with genuine replacement spare parts guarantee"
    ],
    "applications": [
      "Sugarcane",
      "Cotton",
      "Soybean",
      "Onion"
    ],
    "benefits": [
      "Saves significant manual labour",
      "Reduces operating cost over time",
      "FMTTI-tested durability",
      "Cuts inter-cultivation labor cost by up to 70% in Sugarcane fields",
      "High-torque de-weeding and soil aeration in Black Cotton Soil (Regur)",
      "Approved for state agricultural mechanization subsidies across Maharashtra and Gujarat"
    ],
    "warranty": "12 months manufacturer warranty + KrishiGears after-sales service network.",
    "video": "https://www.youtube.com/watch?v=KRJFfkK0eJM",
    "hsn": "8432",
    "gst": 12
  },
  {
    "slug": "rly-my-578d-201",
    "category": "power-weeders",
    "name": "KrishiGears Power Weeder MY-578D",
    "model": "MY-578D",
    "brand": "KrishiGears",
    "badges": [
      "FMTTI Tested",
      "Commercial Grade",
      "Industrial Quality Standards"
    ],
    "price": 39000,
    "comparePrice": 46000,
    "images": [
      "/images/catalog/rly-my-578d-201.webp"
    ],
    "specs": {
      "ENGINE": "178F DIESEL ENGINE",
      "DISPLACEMENT": "296CC ,4 STROKE",
      "TRANSMISSION": "GEAR DRIVE",
      "POWER": "4.4 KW",
      "BLADES": "32 PCS DRY LAND",
      "ATTACHMENTS": "SIDE DISC",
      "TYRE": "5-0-12",
      "START TYPE": "RECOIL START"
    },
    "features": [
      "Genuine KrishiGears branded product",
      "Backed by manufacturer warranty",
      "PAN India delivery from KrishiGears",
      "Genuine spare parts availability",
      "Genuine KrishiGears commercial agricultural machinery",
      "FMTTI-tested commercial durability standard",
      "Precision-engineered transmission case for tough Indian soil",
      "PAN India direct drop-ship dispatch from KrishiGears Express Network",
      "24-48 hour dispatch with genuine replacement spare parts guarantee"
    ],
    "applications": [
      "Sugarcane",
      "Cotton",
      "Soybean",
      "Onion"
    ],
    "benefits": [
      "Saves significant manual labour",
      "Reduces operating cost over time",
      "FMTTI-tested durability",
      "Cuts inter-cultivation labor cost by up to 70% in Sugarcane fields",
      "High-torque de-weeding and soil aeration in Black Cotton Soil (Regur)",
      "Approved for state agricultural mechanization subsidies across Maharashtra and Gujarat"
    ],
    "warranty": "12 months manufacturer warranty + KrishiGears after-sales service network.",
    "video": "https://www.youtube.com/watch?v=KRJFfkK0eJM",
    "hsn": "8432",
    "gst": 12
  },
  {
    "slug": "rly-my-585d",
    "category": "power-weeders",
    "name": "KrishiGears Power Weeder MY-585D",
    "model": "MY-585D",
    "brand": "KrishiGears",
    "badges": [
      "FMTTI Tested",
      "Commercial Grade",
      "Industrial Quality Standards"
    ],
    "price": 56000,
    "comparePrice": 66000,
    "images": [
      "/images/catalog/rly-my-585d.webp"
    ],
    "specs": {
      "ENGINE": "186F DIESEL ENGINE",
      "DISPLACEMENT": "406CC ,4 STROKE",
      "TRANSMISSION": "GEAR DRIVE",
      "POWER": "5.5 KW",
      "BLADES": "40 PCS DRY LAND",
      "ATTACHMENTS": "SIDE DISC",
      "TYRE": "5-0-12",
      "START TYPE": "RECOIL START"
    },
    "features": [
      "Genuine KrishiGears branded product",
      "Backed by manufacturer warranty",
      "PAN India delivery from KrishiGears",
      "Genuine spare parts availability",
      "Genuine KrishiGears commercial agricultural machinery",
      "FMTTI-tested commercial durability standard",
      "Precision-engineered transmission case for tough Indian soil",
      "PAN India direct drop-ship dispatch from KrishiGears Express Network",
      "24-48 hour dispatch with genuine replacement spare parts guarantee"
    ],
    "applications": [
      "Sugarcane",
      "Cotton",
      "Soybean",
      "Onion"
    ],
    "benefits": [
      "Saves significant manual labour",
      "Reduces operating cost over time",
      "FMTTI-tested durability",
      "Cuts inter-cultivation labor cost by up to 70% in Sugarcane fields",
      "High-torque de-weeding and soil aeration in Black Cotton Soil (Regur)",
      "Approved for state agricultural mechanization subsidies across Maharashtra and Gujarat"
    ],
    "warranty": "12 months manufacturer warranty + KrishiGears after-sales service network.",
    "video": "https://www.youtube.com/watch?v=KRJFfkK0eJM",
    "hsn": "8432",
    "gst": 12
  },
  {
    "slug": "rly-my-585-de",
    "category": "power-weeders",
    "name": "KrishiGears Power Weeder MY-585-DE",
    "model": "MY-585-DE",
    "brand": "KrishiGears",
    "badges": [
      "FMTTI Tested",
      "Commercial Grade",
      "Industrial Quality Standards"
    ],
    "price": 39000,
    "comparePrice": 46000,
    "images": [
      "/images/catalog/rly-my-585-de.webp"
    ],
    "specs": {
      "ENGINE": "186F DIESEL ENGINE",
      "DISPLACEMENT": "406CC ,4 STROKE",
      "TRANSMISSION": "GEAR DRIVE",
      "POWER": "5.5 KW",
      "BLADES": "40 PCS DRY LAND",
      "ATTACHMENTS": "SIDE DISC",
      "TYRE": "5-0-12",
      "START TYPE": "SELF START (WITHOUT BATTERY )/RECOIL START"
    },
    "features": [
      "Genuine KrishiGears branded product",
      "Backed by manufacturer warranty",
      "PAN India delivery from KrishiGears",
      "Genuine spare parts availability",
      "Genuine KrishiGears commercial agricultural machinery",
      "FMTTI-tested commercial durability standard",
      "Precision-engineered transmission case for tough Indian soil",
      "PAN India direct drop-ship dispatch from KrishiGears Express Network",
      "24-48 hour dispatch with genuine replacement spare parts guarantee"
    ],
    "applications": [
      "Sugarcane",
      "Cotton",
      "Soybean",
      "Onion"
    ],
    "benefits": [
      "Saves significant manual labour",
      "Reduces operating cost over time",
      "FMTTI-tested durability",
      "Cuts inter-cultivation labor cost by up to 70% in Sugarcane fields",
      "High-torque de-weeding and soil aeration in Black Cotton Soil (Regur)",
      "Approved for state agricultural mechanization subsidies across Maharashtra and Gujarat"
    ],
    "warranty": "12 months manufacturer warranty + KrishiGears after-sales service network.",
    "video": "https://www.youtube.com/watch?v=KRJFfkK0eJM",
    "hsn": "8432",
    "gst": 12
  },
  {
    "slug": "rly-my-685d-de",
    "category": "power-weeders",
    "name": "KrishiGears Power Weeder \u2013 MY-685D-DE",
    "model": "MY-685D-DE",
    "brand": "KrishiGears",
    "badges": [
      "FMTTI Tested",
      "Commercial Grade",
      "Industrial Quality Standards"
    ],
    "price": 88000,
    "comparePrice": 99000,
    "images": [
      "/images/catalog/rly-my-685d-de.webp"
    ],
    "specs": {
      "ENGINE": "186F",
      "DIESEL": "KAMA",
      "DISPLACEMENT": "406CC ,4 STROKE",
      "TRANSMISSION": "GEAR DRIVE",
      "POWER": "5.5 KW",
      "BLADES": "40 PCS DRY LAND",
      "ATTACHMENTS": "SIDE DISC ,",
      "TYRE": "4-0-8 TUBELESS",
      "START TYPE": "SELF START (WITHOUT BATTERY )/RECOIL START ,WITH HEADLAMP"
    },
    "features": [
      "Genuine KrishiGears branded product",
      "Backed by manufacturer warranty",
      "PAN India delivery from KrishiGears",
      "Genuine spare parts availability",
      "Genuine KrishiGears commercial agricultural machinery",
      "FMTTI-tested commercial durability standard",
      "Precision-engineered transmission case for tough Indian soil",
      "PAN India direct drop-ship dispatch from KrishiGears Express Network",
      "24-48 hour dispatch with genuine replacement spare parts guarantee"
    ],
    "applications": [
      "Sugarcane",
      "Cotton",
      "Soybean",
      "Onion"
    ],
    "benefits": [
      "Saves significant manual labour",
      "Reduces operating cost over time",
      "FMTTI-tested durability",
      "Cuts inter-cultivation labor cost by up to 70% in Sugarcane fields",
      "High-torque de-weeding and soil aeration in Black Cotton Soil (Regur)",
      "Approved for state agricultural mechanization subsidies across Maharashtra and Gujarat"
    ],
    "warranty": "12 months manufacturer warranty + KrishiGears after-sales service network.",
    "video": "https://www.youtube.com/watch?v=KRJFfkK0eJM",
    "hsn": "8432",
    "gst": 12
  }
];

export const TESTIMONIALS = [
  { name: "Rameshwar Patel", role: "Patel Agro Agency, Kolhapur (Maharashtra)", text: "KG-ICP-UP170-SH back-rotary weeder aur KG-177F 9HP model sugarcane inter-row weeding ke liye hamare 120+ farmers ne liya hai. Direct factory dispatch aur spare parts support best hai.", rating: 5 },
  { name: "Suresh Choudhary", role: "Kisan Machinery Store, Alwar (Rajasthan)", text: "KrishiGears machines ki build quality aur FMTTI testing standards se farmers ko pura trust milta hai. Commercial grade durability hai.", rating: 5 },
  { name: "Venkat Rao", role: "Sri Lakshmi Agri Implements, Nizamabad (Telangana)", text: "KG-173F diesel model black cotton soil mein high torque deliver karta hai. Engine warranty claims aur carburetor spares 48 ghante mein Jaipur godown se dispatch ho jate hain.", rating: 5 },
  { name: "Manish Sharma", role: "Shree Ganesh Krishi Seva Kendra, Indore (MP)", text: "KrishiGears dealership lene ke baad hamari spare parts availability 100% ho gayi. Viton oil seals, recoil starters aur forged blades ki quality authentic OEM grade hai.", rating: 5 },
];

export const TRUST_BADGES = [
  { icon: "shield-check", label: "25% - 35% Factory Margin" },
  { icon: "zap", label: "24-Hour Express Spares (Jaipur Hub)" },
  { icon: "handshake", label: "Zero Dead-Stock (MOQ 2 Units)" },
  { icon: "shield", label: "FMTTI-tested commercial durability standard" },
  { icon: "truck", label: "PAN India Direct Logistics" },
  { icon: "badge-check", label: "FMTTI / SRFMTTI Tested Standards" },
  { icon: "wrench", label: "OEM Spare Part Distribution" },
  { icon: "headphones", label: "Direct WhatsApp Video Tech Support" },
];

export const SEO_PAGES = [
  { slug: "power-weeder-supplier-india", title: "Power Weeder Dealer Network & Bulk Supply", category: "power-weeders" },
  { slug: "power-weeder-spare-parts-supplier-india", title: "Power Weeder Spare Parts Distributor & OEM Supply", category: "power-weeder-spare-parts" }
];

export const SEO_PAGES_MAP = new Map(SEO_PAGES.map((p) => [p.slug, p]));
