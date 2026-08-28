import { GEO_SEO_PAGES } from "./geoSeo";
// KrishiGears product catalog — premium agricultural machinery range.
// Authentic farming equipment built to FMTTI / SRFMTTI standards, sold PAN India.

import {
  Tractor, Wrench, Scissors, Drill, SprayCan, Droplets,
  Trees, Sprout, Wheat, Cog, Settings, CircleDot, Package
} from "lucide-react";

export const LOGO_URL = "/logo512.png";
export const HERO_BG = "/assets/brand/hero-bg.jpg";
export const INDIA_MAP = "/assets/brand/india-map.jpg";
export const ABSTRACT_TERRAIN = "/assets/brand/abstract-terrain.jpg";

const RKA = "https://royalkissanagro.com/wp-content/uploads";

// Category cover images (from royalkissanagro homepage)
const COVER = {
  weeder: `${RKA}/2025/10/weeder-1.webp`,
  brushCutter: `${RKA}/2025/10/brush-cutter.webp`,
  chainsaw: `${RKA}/2025/10/chainsaw.webp`,
  earthAuger: `${RKA}/2025/10/earth-auger.webp`,
  waterPump: `${RKA}/2025/10/water-pump.webp`,
  hosePipe: `${RKA}/2025/10/hosepipe.webp`,
  engine: `${RKA}/2025/10/engine.webp`,
  sprayer: `${RKA}/2025/10/sprayer.webp`,
  chaffCutter: `${RKA}/2025/10/chaff-cuter.webp`,
  maizeThresher: `${RKA}/2025/10/maize-trasher.webp`,
  reaper: `${RKA}/2025/11/reaper.webp`,
  grassMower: `${RKA}/2025/10/Grass-Stubble-Mower.webp`,
  miniInter: `${RKA}/2025/10/Mini-Intercultivator.webp`,
  babyWeeder: `${RKA}/2025/10/baby-weeder.webp`,
  seeder: `${RKA}/2025/10/seeders.webp`,
  crankshaft: `${RKA}/2025/10/Crankshaft.webp`,
  piston: `${RKA}/2025/10/Piston-and-Ring.webp`,
  carburetor: `${RKA}/2025/10/Carburetor.webp`,
  recoil: `${RKA}/2025/10/recoil-starter-assembly.webp`,
};

export const FARMER_FIELD = "https://images.pexels.com/photos/29039798/pexels-photo-29039798.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940";
export const FIELD_TRACTOR = "https://images.pexels.com/photos/2933243/pexels-photo-2933243.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940";
export const PLOWING = FIELD_TRACTOR;

export const COMPANY = {
  name: "KrishiGears",
  tagline: "For the Farmers, With the Farmer, To the Farmer, HAMESHA",
  website: "KrishiGears.com",
  email: "sales@krishigears.com",
  support: "service@krishigears.com",
  accounts: "accounts@krishigears.com",
  dealers: "dealers@krishigears.com",
  phone: "+91 60060 78815",
  whatsapp: "916006078815",
  address: "Jaipur, Rajasthan, India",
  gst: "08EQLPD7160R1Z2",
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
  "rk-170f": "royal-kissan-nb-icp-c170-lce",
  "rk-173f-diesel": "royal-kissan-rk-173f",
  "rk-177f-wolf": "royal-kissan-rk-170f",
  "rk-baby-weeder": "royal-kissan-rk-bw-p63",
  "rk-bc-p50": "royal-kissan-rk-bc-p50-sp",
  "rk-bc-up35": "royal-kissan-rk-bc-up35-bp-sp",
  "rk-bc-up43": "royal-kissan-rk-bc-up43-sp",
  "rk-bc-up52": "royal-kissan-rk-bc-up52-sp-bp",
  "rk-chaff-cutter": "royal-kissan-rk-cc-3-2",
  "rk-csp-up58": "royal-kissan-rk-csp-up58-18-22",
  "rk-csp-up63": "royal-kissan-rk-csp-up63-18-22",
  "rk-ea-p52": "royal-kissan-rk-ea-p52",
  "rk-ea-p68": "royal-kissan-rk-ea-p68",
  "rk-icd-up186-sh": "royal-kissan-rk-icd-up186-sh",
  "rk-icp-p170-lde": "royal-kissan-rk-icp-p170-lde",
  "rk-icp-p177-lde": "royal-kissan-rk-icp-p177-lde",
  "rk-icp-up170-sh": "royal-kissan-rk-icp-up170-sh-ultra-premium",
  "rk-pw-wp-d80": "royal-kissan-rk-pw-wp-d80",
  "rk-pw-wp-p80": "royal-kissan-rk-pw-wp-p80",
  "rk-su80": "royal-kissan-rk-su80",
  "rk-wp-p02": "royal-kissan-rk-wp-p02",
  "rk-wp-p03": "royal-kissan-rk-wp-p03",
  "rk-wp-p1-5": "royal-kissan-rk-wp-p1-5",
  "rk-wp-up3": "royal-kissan-rk-wp-up3",
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
  { slug: "power-weeders", name: "Power Weeders", icon: Tractor, image: COVER.weeder },
  { slug: "power-weeder-spare-parts", name: "Power Weeder Spare Parts", icon: Wrench, image: COVER.crankshaft },
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
    slug: "rk-170f", category: "power-weeders",
    name: "RK-170F Petrol Power Weeder (7 HP)",
    model: "RK-170F", badges: ["Bestseller", "FMTTI Tested"],
    images: [COVER.weeder],
    specs: { Engine: "4 Stroke Petrol", Power: "7 HP / 212cc", Start: "Recoil", Blades: "32 Dryland", PTO: "Yes" },
    features: baseFeatures(["Heavy-duty rotary attachment", "Adjustable handlebar", "Deep tilling capability"]),
    applications: baseApps(["Sugarcane", "Cotton", "Vegetable inter-cultivation"]),
    benefits: baseBenefits(["Cuts labor costs by 70%", "Perfect for hard soil"]),
    warranty: warrantyStd,
  },
  {
    slug: "rk-173f-diesel", category: "power-weeders",
    name: "RK-173F Diesel Power Weeder (5.5 HP)",
    model: "RK-173F", badges: ["High Torque"],
    images: [COVER.weeder],
    specs: { Engine: "4 Stroke Diesel", Power: "5.5 HP", Start: "Recoil", WorkingWidth: "3.5 Feet" },
    features: baseFeatures(["High torque at low RPM", "Fuel efficient diesel engine", "Rugged transmission"]),
    applications: baseApps(["Heavy clay soil", "Orchards", "Large farms"]),
    benefits: baseBenefits(["Low running cost", "Excellent for deep plowing"]),
    warranty: warrantyStd,
  },
  {
    slug: "rk-177f-wolf", category: "power-weeders",
    name: "RK-177F WOLF Petrol Weeder (9 HP)",
    model: "RK-177F", badges: ["Heavy Duty"],
    images: [COVER.weeder],
    specs: { Engine: "4 Stroke Petrol", Power: "9 HP / 270cc", Start: "Recoil", WorkingDepth: "8-10 inches" },
    features: baseFeatures(["9 HP massive power", "Direct drive transmission", "Wide tilling span"]),
    applications: baseApps(["Commercial farming", "Hard terrain cultivation"]),
    benefits: baseBenefits(["Replaces tractor for mid-size farms", "High acreage coverage"]),
    warranty: warrantyStd,
  },
  {
    slug: "rk-icp-p170-lde", category: "power-weeders",
    name: "RK-ICP-P170-LDE Electric Start Weeder",
    model: "RK-ICP-P170-LDE", badges: ["Premium", "Self Start"],
    images: [COVER.weeder],
    specs: { Engine: "Petrol", Power: "7 HP", Start: "Key / Electric Start", Weight: "85 kg" },
    features: baseFeatures(["Electric Key Start", "LED Headlight for night work", "Anti-vibration mount"]),
    applications: baseApps(["All crops", "Night operations"]),
    benefits: baseBenefits(["Zero effort starting", "Highly comfortable operation"]),
    warranty: warrantyStd,
  },
  {
    slug: "rk-icp-up170-sh", category: "power-weeders",
    name: "RK-ICP-UP170-SH Back-Rotary Weeder",
    model: "RK-ICP-UP170-SH", badges: ["Back Rotary"],
    images: [COVER.weeder],
    specs: { Engine: "Petrol", Power: "7 HP", Start: "Recoil", Transmission: "Gear Drive" },
    features: baseFeatures(["Active back rotary action", "Perfectly balanced center of gravity"]),
    applications: baseApps(["Weed control in narrow rows", "Soft soil tilling"]),
    benefits: baseBenefits(["Leaves finely milled soil", "Operator fatigue reduced by 50%"]),
    warranty: warrantyStd,
  },
  {
    slug: "rk-icd-up186-sh", category: "power-weeders",
    name: "RK-ICD-UP186-SH Diesel (10 HP)",
    model: "RK-ICD-UP186-SH", badges: ["Professional", "10 HP"],
    images: [COVER.weeder],
    specs: { Engine: "Diesel", Power: "10 HP", Start: "Recoil / Electric", PTO: "Dual PTO" },
    features: baseFeatures(["Massive 10 HP diesel engine", "Multi-attachment ready (Reaper, Water Pump)"]),
    applications: baseApps(["Contract farming", "Rental services", "Large estates"]),
    benefits: baseBenefits(["Industrial grade durability", "Can power water pumps directly"]),
    warranty: warrantyStd,
  },
  {
    slug: "rk-baby-weeder", category: "power-weeders",
    name: "RK Baby Weeder (Lightweight)",
    model: "RK-BW", badges: ["Compact"],
    images: [COVER.babyWeeder],
    specs: { Type: "Compact Baby Weeder", Weight: "Ultra Light" },
    features: baseFeatures(["Lightweight & maneuverable", "Easy for women & senior farmers"]),
    applications: baseApps(["Rice paddy", "Small kitchen gardens", "Greenhouses"]),
    benefits: baseBenefits(["80% weed reduction in tight spaces"]),
    warranty: warrantyStd,
  },
  {
    slug: "rk-crankshaft", category: "power-weeder-spare-parts",
    name: "Crankshaft Assembly (7 HP / 9 HP)",
    model: "RK-CRANK-WEEDER", badges: ["Spare Part"],
    images: [COVER.crankshaft],
    specs: { Type: "Crankshaft", Grade: "OEM", Compatibility: "RK-170F, RK-177F" },
    features: baseFeatures(["Genuine OEM grade forged steel", "Precision machined"]),
    applications: baseApps(["Engine overhaul", "Service center stock"]),
    benefits: baseBenefits(["Restores factory engine performance"]),
    warranty: "3 months replacement on manufacturing defects",
  },
  {
    slug: "rk-piston-ring", category: "power-weeder-spare-parts",
    name: "Piston & Ring Set (Standard & Oversize)",
    model: "RK-PISTON-WEEDER", badges: ["Spare Part"],
    images: [COVER.piston],
    specs: { Type: "Piston & Ring", Grade: "OEM", Compatibility: "All Petrol Weeders" },
    features: baseFeatures(["Low friction alloy", "Heat resistant rings"]),
    applications: baseApps(["Engine rebuilds", "Compression loss repair"]),
    benefits: baseBenefits(["Eliminates oil burning", "Restores full compression"]),
    warranty: "3 months replacement on manufacturing defects",
  },
  {
    slug: "rk-recoil-starter", category: "power-weeder-spare-parts",
    name: "Recoil Starter Assembly (Pull Cord)",
    model: "RK-RECOIL-WEEDER", badges: ["Spare Part"],
    images: [COVER.recoil],
    specs: { Type: "Recoil Starter Assembly", Compatibility: "RK-170F, RK-173F" },
    features: baseFeatures(["Easy-pull ratcheting mechanism", "Heavy duty nylon cord"]),
    applications: baseApps(["Broken pull cord repair"]),
    benefits: baseBenefits(["Quick field replacement"]),
    warranty: "3 months replacement on manufacturing defects",
  },
  {
    slug: "rk-rotary-blades", category: "power-weeder-spare-parts",
    name: "Dryland / Wetland Tiller Blades (Set of 32)",
    model: "RK-BLADES-32", badges: ["Fast Moving Spare"],
    images: [COVER.weeder],
    specs: { Type: "Rotary Tine", Material: "High Carbon Steel", Hardness: "HRC 45+" },
    features: baseFeatures(["Self-sharpening edge", "Rust resistant coating"]),
    applications: baseApps(["Regular blade replacement"]),
    benefits: baseBenefits(["Deeper cut with less engine strain"]),
    warranty: "Guaranteed against breakage during transit",
  },
];

export const TESTIMONIALS = [
  { name: "Maharashtra Farmer", role: "Sugarcane Grower", text: "RK-ICP-UP170-SH aur RK-177F-WOLF — sugarcane mein kamaal. 170F aur 177F engines smooth chalte hain.", rating: 5 },
  { name: "Kerala Farmer", role: "Paddy / Vegetables", text: "RK-ICD-UP186-SH diesel weeder fuel-efficient hai aur electric start ke saath safe. Kerala ke moisture-rich farms ke liye perfect.", rating: 5 },
  { name: "Telangana Farmer", role: "Paddy", text: "RK-173F diesel monsoon paddy mein 4 kW @ 3200 RPM deliver karta hai — strong torque aur reliable.", rating: 5 },
  { name: "Tamil Nadu Farmer", role: "Vegetable Grower", text: "RK-ICP-P170-LDE ki electric start women & senior farmers ke liye easy hai. 4L tank, narrow rows mein perfect.", rating: 5 },
];

export const TRUST_BADGES = [
  { icon: "shield-check", label: "GST Registered Business" },
  { icon: "truck", label: "PAN India Delivery" },
  { icon: "badge-check", label: "Genuine Products" },
  { icon: "wrench", label: "Genuine Spare Parts" },
  { icon: "shield", label: "FMTTI / SRFMTTI Tested" },
  { icon: "zap", label: "Fast Dispatch" },
  { icon: "headphones", label: "Customer Service" },
  { icon: "handshake", label: "Dealer Assistance" },
];

export const SEO_PAGES = [...GEO_SEO_PAGES, 
  { slug: "power-weeder-supplier-india", title: "Power Weeder Dealer Network & Bulk Supply", category: "power-weeders" },
  { slug: "power-weeder-spare-parts-supplier-india", title: "Power Weeder Spare Parts Distributor & OEM Supply", category: "power-weeder-spare-parts" }
];
