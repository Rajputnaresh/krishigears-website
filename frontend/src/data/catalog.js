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
  "name": "KrishiGears",
  "legalName": "KRISHIGEARS INDIA PRIVATE LIMITED",
  "tagline": "For the Farmers, With the Farmer, To the Farmer, HAMESHA",
  "website": "KrishiGears.com",
  "email": "sales@krishigears.com",
  "contact": "sales@krishigears.com",
  "support": "support@krishigears.com",
  "service": "support@krishigears.com",
  "accounts": "billing@krishigears.com",
  "dealers": "dealers@krishigears.com",
  "phone": "+91 60060 78815",
  "whatsapp": "916006078815",
  "address": "Flat No.: T5-202, Mahima Shubh Nilay Apartments, Jaisinghpura, Ajmer Road, Jaipur, Rajasthan 302026",
  "city": "Jaipur",
  "state": "Rajasthan",
  "pincode": "302026",
  "gst": "08AANCK2216L1ZA",
  "cin": "U46539RJ2026PTC117758",
  "pan": "AANCK2216L",
  "tan": "JPRK10437A",
  "retailBrand": "FarmingTools.in",
  "retailWebsite": "https://farmingtools.in",
  "billing": "billing@krishigears.com"
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
  "kg-170f": "kg-stg-mecstroke-mswp35-8170ff2d",
  "bi-750-pto-kibao": "stg-krishigears-kg-stg-x1-750-pto-kibao",
  "bi-750-pro-series-orange": "stg-krishigears-kg-stg-x1-750-pto-kibao",
  "bi-750-pro-series-yellow": "stg-krishigears-kg-stg-x1-750-pto-kibao",
  "bi-850-series": "stg-krishigears-kg-stg-x1-850-series",
  "bi-950-series": "stg-krishigears-kg-stg-x1-950-series",
  "kg-1000d-kibao": "stg-krishigears-kg-stg-x1-x1-1000d",
  "bi-bi-1000": "stg-krishigears-kg-stg-x1-x1-1000d",
  "kg-1050d-kibao": "stg-krishigears-kg-stg-x1-x1p-1050d",
  "kg-188d-recoil": "stg-krishigears-x1-188d-diesel",
  "kg-188d-electric": "stg-krishigears-x1-188d-diesel",
  "bi-1250-pro": "stg-krishigears-kg-stg-x1-1250-pro",
  "bi-1250": "stg-krishigears-kg-stg-x1-1250-pro",
  "kg-750p-diesel": "stg-krishigears-kg-stg-x1-x1-750p",
  "kg-tr15d-trencher": "kg-stg-tr15d-portable-trencher",
  "kg-ea70": "kg-stg-x1-power-x1-ea70-3de94fe1",
  "kg-186-backrotary": "krishigears-kg-186-back-rotary-diesel-weeder",
  "kg-1350-4wd": "stg-krishigears-kg-stg-x1-x1-1350-4wd",
  "bi-bi-600": "kg-stg-mitsuyama-my-hpw-1600-e8a7a3fc",
  "bi-bi-600p-h-l": "stg-krishigears-kg-stg-x1-bi-600p-h-l",
  "kg-mw-70-mini": "stg-krishigears-sun-6n40",
  "leo-ba-021-2486": "krishigears-ba-021-petrol-power-weeder",
  "ri-kpe-1000-17-2343": "stg-krishigears-kg-stg-x1-x1-1000d",
  "ri-no-kpd-1350-2352": "stg-krishigears-kg-stg-kat-kpd-1350-e",
  "ri-kpe-1000-2342": "stg-krishigears-kg-stg-x1-x1-1000d",
  "ri-kp-750-2344": "stg-krishigears-kg-stg-x1-750-pto-kibao",
  "ri-kpd-1000-2347": "stg-krishigears-kg-stg-kat-kpd-1000",
  "ri-kpde-1000-2348": "stg-krishigears-kg-stg-kat-kpde-1000",
  "ri-kpd-1350-2349": "stg-krishigears-kg-stg-kat-kpd-1350-e",
  "ri-kp-1050-ae-2350": "stg-krishigears-kg-stg-ri-kp-1050-ae",
  "ri-kpe-1050-a-2351": "stg-krishigears-kg-stg-x1-x1p-1050d",
  "ri-sc-820-6698": "stg-krishigears-kg-stg-kat-sc-820",
  "ri-sc-55-6691": "stg-krishigears-kg-stg-kat-sc-55",
  "ri-model-no-kp-2341": "stg-krishigears-kg-stg-x1-x1-1000d",
  "ri-sc-1150-6699": "stg-krishigears-kg-stg-ri-sc-1150",
  "ri-kpd-1350-e-2356": "stg-krishigears-kg-stg-kat-kpd-1350-e",
  "ri-sc-1000-d-4542": "stg-krishigears-kg-stg-ri-sc-1000-d",
  "ri-kp-1050-a-e-5777": "stg-krishigears-kg-stg-ri-kp-1050-ae",
  "ri-kp-500-2346": "stg-krishigears-kg-stg-ri-kp-500",
  "ri-sc-800-6692": "stg-krishigears-kg-stg-kat-sc-800",
  "ri-fj-1200-0927": "stg-krishigears-kg-stg-ri-fj-1200",
  "ri-fj-600-ho-2081": "kg-stg-mitsuyama-my-hpw-1600-e8a7a3fc",
  "ri-gx-160-2719": "stg-krishigears-kg-stg-ri-gx-160",
  "ri-sc-1000-8480": "stg-krishigears-kg-stg-ri-sc-1000-d",
  "ri-sc-1000-s-7307": "stg-krishigears-kg-stg-ri-sc-1000-s",
  "ri-kp-1250-8465": "stg-krishigears-kg-stg-ri-kp-1250",
  "ri-cg-530-0002": "stg-krishigears-kg-stg-ri-cg-530",
  "ri-sc-1000-z-e-3146": "stg-krishigears-kg-stg-ri-sc-1000-z-e",
  "ri-cg-600-3322": "stg-krishigears-kg-stg-ri-cg-600",
  "leo-cg-520-4521": "stg-krishigears-kg-stg-leo-cg-520-cg-530",
  "leo-cg-680-0294": "stg-krishigears-kg-stg-leo-cg-680",
  "leo-rover-850-sp-1843": "stg-krishigears-kg-stg-x1-850-series",
  "leo-wp-15-2557": "kg-stg-x1-power-x1-wp15-5c528ade",
  "leo-392-9514": "kg-stg-x1-power-x1-6200-3e3923a8",
  "leo-393-9876": "stg-krishigears-kg-stg-ra-rapl-ks-3935",
  "leo-0378-1872": "stg-krishigears-kg-stg-leo-0378",
  "leo-chain-saw-sh-6799": "kg-stg-x1-power-x1-5900-587b6f13",
  "leo-303454205-4205": "kg-stg-mecstroke-sm-ht23-d53be687",
  "leo-397-9478": "stg-krishigears-kg-stg-kat-397",
  "leo-391-7692": "stg-krishigears-kg-stg-kat-391",
  "leo-395-9215": "stg-krishigears-kg-stg-kat-395",
  "leo-zf-6123-4367": "stg-krishigears-kg-stg-kat-zf-6123",
  "leo-376-8052": "stg-krishigears-kg-stg-leo-376",
  "leo-0382-18-inc-2366": "stg-krishigears-kg-stg-leo-0382",
  "leo-376-in-22-in-5239": "stg-krishigears-kg-stg-ri-376",
  "ri-394-8942": "stg-krishigears-kg-stg-leo-394",
  "leo-376-in-17-7094": "stg-krishigears-kg-stg-ri-376",
  "leo-0385-8277": "stg-krishigears-kg-stg-leo-0385",
  "leo-390-7210": "stg-krishigears-kg-stg-kat-390",
  "leo-pro-cut-910-3461": "kg-stg-sun-6n100-sasfm3-66756afd",
  "leo-zf-6124-1571": "stg-krishigears-kg-stg-leo-zf-6124",
  "ri-bkr-ri-1800-3962": "stg-krishigears-kg-stg-mit-my-hpw-1800",
  "leo-pro-cut-910-8493": "kg-stg-sun-6n100-sasfm3-66756afd",
  "leo-model-rover-9908": "stg-krishigears-kg-stg-x1-850-series",
  "ri-376-in-17-2952": "stg-krishigears-kg-stg-ri-376",
  "ri-376-in-22-in-6681": "stg-krishigears-kg-stg-ri-376",
  "ri-392-7363": "kg-stg-x1-power-x1-6200-3e3923a8",
  "leo-386-9195": "stg-krishigears-kg-stg-leo-386",
  "leo-382-8975": "stg-krishigears-kg-stg-leo-382",
  "leo-258558586-8586": "kg-stg-mecstroke-sm-68hp-18fab2c0",
  "leo-model-pro-cu-0732": "kg-stg-sun-6n100-sasfm3-66756afd",
  "leo-pro-cut-950-4145": "kg-stg-sun-6n100-sasfm3-66756afd",
  "leo-model-rover-7967": "stg-krishigears-kg-stg-kat-sc-820",
  "leo-375-3993": "kg-stg-sun-sa-msfm-ba375ffb",
  "leo-386-8522": "stg-krishigears-kg-stg-leo-386",
  "leo-zf6127-leo-e-3513": "kg-stg-x1-power-x1-lmp-212-9794abfa",
  "leo-cg-530-9160": "stg-krishigears-kg-stg-ri-cg-530",
  "leo-cg-530-8458": "stg-krishigears-kg-stg-ri-cg-530",
  "leo-297263000-3000": "kg-stg-x1-power-x1-gx50lt-1e1c9186",
  "leo-re-1400-6087": "stg-krishigears-kg-stg-kat-re-1400",
  "leo-re-2200-9709": "stg-krishigears-kg-stg-leo-re-2200",
  "leo-253009174-9174": "stg-krishigears-kg-stg-ri-cg-530",
  "leo-297280912-0912": "kg-stg-x1-power-x1-gx35lt-d69636d2",
  "leo-295837771-7771": "stg-krishigears-ra-wp-52g",
  "leo-gx-35-2041": "kg-stg-x1-power-x1-gx35lt-d69636d2",
  "leo-297262606-2606": "kg-stg-x1-power-x1-gx50lt-1e1c9186",
  "leo-297262381-2381": "kg-stg-x1-power-x1-gx35lt-d69636d2",
  "leo-gx-35-8104": "kg-stg-x1-power-x1-gx35lt-d69636d2",
  "rly-170f": "kg-stg-mecstroke-mswp35-8170ff2d",
  "rly-cr-r50-b": "stg-krishigears-kg-stg-ra-cr-r50-b",
  "rly-cr-r52-b": "stg-krishigears-kg-stg-ra-cr-r52-b",
  "rly-cr-r52-s": "stg-krishigears-kg-stg-ra-cr-r52-s",
  "rly-cr-r35-b": "stg-krishigears-kg-stg-ra-cr-r35-b",
  "rly-cr-r35-s": "stg-krishigears-kg-stg-ra-cr-r35-s",
  "rly-cr-r50-s": "stg-krishigears-kg-stg-ra-cr-r50-s",
  "rly-rapl-tb-52": "stg-krishigears-kg-stg-ra-rapl-tb-52",
  "rly-m-52": "stg-krishigears-kg-stg-mec-sm-52sp",
  "rly-m-35s": "stg-krishigears-kg-stg-mit-m-35s",
  "vardhman-2fp": "kg-stg-reaper-2fp",
  "vardhman-2fd": "stg-krishigears-kg-stg-var-2fd",
  "vardhman-3fd": "stg-krishigears-var-3fd",
  "rly-rh-3800d-sp": "stg-krishigears-kg-stg-ra-rh-3800d-sp",
  "rly-rh-3800d": "stg-krishigears-kg-stg-ra-rh-3800d-sp",
  "rly-rh-3800g-sp": "stg-krishigears-kg-stg-ra-rh-3800g-sp",
  "rly-rh-3800g": "stg-krishigears-kg-stg-ra-rh-3800g-sp",
  "rly-rh-2600": "stg-krishigears-kg-stg-ra-rh-2600",
  "rly-rh-2000": "stg-krishigears-kg-stg-ra-rh-2000",
  "rly-rap-l-rh-6301": "stg-krishigears-kg-stg-ra-rap-l-rh-6301",
  "rly-my-300g": "stg-krishigears-kg-stg-mit-my-300g",
  "rly-my-573d-upgraded": "stg-krishigears-kg-stg-ra-my-573d-upgraded",
  "rly-my-550g": "stg-krishigears-kg-stg-ra-my-550g-upgraded",
  "rly-my-470g-hl": "stg-krishigears-kg-stg-ra-my-470g-hl-upgraded",
  "rly-my-473d-upgraded": "stg-krishigears-kg-stg-ra-my-473d-upgraded",
  "rly-my-800gh": "stg-krishigears-kg-stg-mit-my-800gh",
  "rly-rapl-rh-773d-premium": "stg-krishigears-kg-stg-ra-rapl-rh-773d-premium",
  "rly-my-750gh": "stg-krishigears-kg-stg-mit-my-750gh",
  "rly-rapl-rh-700g": "stg-krishigears-kg-stg-ra-rapl-rh-700g",
  "rly-my-600g": "stg-krishigears-kg-stg-mit-my-600g",
  "rly-my-673d-kama-engine": "stg-krishigears-kg-stg-mit-my-673d-kama-engine",
  "rly-my-685d": "stg-krishigears-kg-stg-ra-my-685d-de-rt",
  "rly-my-685d-de-kama-engine": "stg-krishigears-kg-stg-mit-my-685d-de-kama-engine",
  "rly-my-570g": "stg-krishigears-kg-stg-mit-my-570g",
  "kg-my-573d": "stg-krishigears-kg-my-573d",
  "rly-my-578d": "stg-krishigears-kg-stg-mit-my-578d",
  "kg-my-585d": "stg-krishigears-kg-my-585d",
  "rly-my-585d-de": "stg-krishigears-kg-my-585d",
  "rly-my-480g": "stg-krishigears-kg-stg-mit-my-480g",
  "rly-my-478d": "stg-krishigears-kg-stg-mit-my-478d",
  "rly-my-473d": "stg-krishigears-kg-stg-ra-my-473d-upgraded",
  "rly-my-470g": "stg-krishigears-kg-stg-ra-my-470g-hl-upgraded",
  "rly-my-450g": "stg-krishigears-kg-stg-mit-my-450g",
  "rly-my-380g": "stg-krishigears-kg-stg-ra-my-380g",
  "rly-my-370g": "stg-krishigears-kg-stg-ra-my-370g",
  "rly-my-360g": "stg-krishigears-kg-stg-ra-my-360g",
  "rly-my-373d": "stg-krishigears-kg-stg-ra-my-373d",
  "rly-rapl-sm-g90": "stg-krishigears-kg-stg-ra-rapl-sm-g90",
  "rly-rapl-sm-g50": "stg-krishigears-kg-stg-ra-rapl-sm-g50",
  "rly-rapl-apw-7000d": "stg-krishigears-kg-stg-ra-rapl-apw-7000d",
  "rly-rapl-apw-6000g": "stg-krishigears-kg-stg-ra-rapl-apw-6000g",
  "rly-rapl-apw-5000g": "stg-krishigears-kg-stg-ra-rapl-apw-5000g",
  "rly-my-573d": "stg-krishigears-kg-stg-ra-my-573d-upgraded",
  "rly-my-470-gh": "stg-krishigears-kg-stg-ra-my-470g-hl-upgraded",
  "rly-my-550g-es": "stg-krishigears-kg-stg-mit-my-550g-es",
  "rly-my-585d": "stg-krishigears-kg-my-585d",
  "rly-my-585-de": "stg-krishigears-kg-stg-mit-my-585-de"
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
      "Cotton & Sugarcane inter-cultivation",
      "Vegetable row de-weeding & aeration",
      "Paddy wetland preparation (with cage wheels)",
      "Orchard basin tillage & fertilizer incorporation"
    ],
    "benefits": [
      "Cuts inter-cultivation labor cost by up to 70% in row crops",
      "High-torque de-weeding and soil aeration in tough Indian soils",
      "FMTTI / SRFMTTI compliant durability standard with full spare parts support"
    ],
    "warranty": "12 months manufacturer warranty + KrishiGears after-sales service network.",
    "hsn": "8432",
    "gst": 5
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
      "Cotton & Sugarcane inter-cultivation",
      "Vegetable row de-weeding & aeration",
      "Paddy wetland preparation (with cage wheels)",
      "Orchard basin tillage & fertilizer incorporation"
    ],
    "benefits": [
      "Cuts inter-cultivation labor cost by up to 70% in row crops",
      "High-torque de-weeding and soil aeration in tough Indian soils",
      "FMTTI / SRFMTTI compliant durability standard with full spare parts support"
    ],
    "warranty": "12 months manufacturer warranty + KrishiGears after-sales service network.",
    "hsn": "8432",
    "gst": 5
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
      "Cotton & Sugarcane inter-cultivation",
      "Vegetable row de-weeding & aeration",
      "Paddy wetland preparation (with cage wheels)",
      "Orchard basin tillage & fertilizer incorporation"
    ],
    "benefits": [
      "Cuts inter-cultivation labor cost by up to 70% in row crops",
      "High-torque de-weeding and soil aeration in tough Indian soils",
      "FMTTI / SRFMTTI compliant durability standard with full spare parts support"
    ],
    "warranty": "12 months manufacturer warranty + KrishiGears after-sales service network.",
    "hsn": "8432",
    "gst": 5
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
      "Cotton & Sugarcane inter-cultivation",
      "Vegetable row de-weeding & aeration",
      "Paddy wetland preparation (with cage wheels)",
      "Orchard basin tillage & fertilizer incorporation"
    ],
    "benefits": [
      "Cuts inter-cultivation labor cost by up to 70% in row crops",
      "High-torque de-weeding and soil aeration in tough Indian soils",
      "FMTTI / SRFMTTI compliant durability standard with full spare parts support"
    ],
    "warranty": "12 months manufacturer warranty + KrishiGears after-sales service network.",
    "hsn": "8432",
    "gst": 5
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
      "Cotton & Sugarcane inter-cultivation",
      "Vegetable row de-weeding & aeration",
      "Paddy wetland preparation (with cage wheels)",
      "Orchard basin tillage & fertilizer incorporation"
    ],
    "benefits": [
      "Cuts inter-cultivation labor cost by up to 70% in row crops",
      "High-torque de-weeding and soil aeration in tough Indian soils",
      "FMTTI / SRFMTTI compliant durability standard with full spare parts support"
    ],
    "warranty": "12 months manufacturer warranty + KrishiGears after-sales service network.",
    "hsn": "8432",
    "gst": 5
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
      "Cotton & Sugarcane inter-cultivation",
      "Vegetable row de-weeding & aeration",
      "Paddy wetland preparation (with cage wheels)",
      "Orchard basin tillage & fertilizer incorporation"
    ],
    "benefits": [
      "Cuts inter-cultivation labor cost by up to 70% in row crops",
      "High-torque de-weeding and soil aeration in tough Indian soils",
      "FMTTI / SRFMTTI compliant durability standard with full spare parts support"
    ],
    "warranty": "12 months manufacturer warranty + KrishiGears after-sales service network.",
    "hsn": "8432",
    "gst": 5
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
      "Cotton & Sugarcane inter-cultivation",
      "Vegetable row de-weeding & aeration",
      "Paddy wetland preparation (with cage wheels)",
      "Orchard basin tillage & fertilizer incorporation"
    ],
    "benefits": [
      "Cuts inter-cultivation labor cost by up to 70% in row crops",
      "High-torque de-weeding and soil aeration in tough Indian soils",
      "FMTTI / SRFMTTI compliant durability standard with full spare parts support"
    ],
    "warranty": "12 months manufacturer warranty + KrishiGears after-sales service network.",
    "hsn": "8432",
    "gst": 5
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
      "Routine seasonal maintenance & overhaul",
      "Field breakdown repair & component replacement"
    ],
    "benefits": [
      "OEM dimensional specifications; verify measurements on your existing part before ordering",
      "High-carbon and heat-treated metallurgy for extended operating life",
      "Genuine replacement spare parts procured per order"
    ],
    "warranty": "3 months replacement on manufacturing defects",
    "hsn": "8407",
    "gst": 18
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
      "Routine seasonal maintenance & overhaul",
      "Field breakdown repair & component replacement"
    ],
    "benefits": [
      "OEM dimensional specifications; verify measurements on your existing part before ordering",
      "High-carbon and heat-treated metallurgy for extended operating life",
      "Genuine replacement spare parts procured per order"
    ],
    "warranty": "3 months replacement on manufacturing defects",
    "hsn": "8407",
    "gst": 18
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
      "Routine seasonal maintenance & overhaul",
      "Field breakdown repair & component replacement"
    ],
    "benefits": [
      "OEM dimensional specifications; verify measurements on your existing part before ordering",
      "High-carbon and heat-treated metallurgy for extended operating life",
      "Genuine replacement spare parts procured per order"
    ],
    "warranty": "3 months replacement on manufacturing defects",
    "hsn": "8407",
    "gst": 18
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
      "Routine seasonal maintenance & overhaul",
      "Field breakdown repair & component replacement"
    ],
    "benefits": [
      "OEM dimensional specifications; verify measurements on your existing part before ordering",
      "High-carbon and heat-treated metallurgy for extended operating life",
      "Genuine replacement spare parts procured per order"
    ],
    "warranty": "Covered against physical transit damage when reported upon delivery",
    "hsn": "8432",
    "gst": 5
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
      "Genuine OEM-spec replacement spare parts procured per order"
    ],
    "applications": [
      "Cotton & Sugarcane inter-cultivation",
      "Vegetable row de-weeding & aeration",
      "Paddy wetland preparation (with cage wheels)",
      "Orchard basin tillage & fertilizer incorporation"
    ],
    "benefits": [
      "Cuts inter-cultivation labor cost by up to 70% in row crops",
      "High-torque de-weeding and soil aeration in tough Indian soils",
      "FMTTI / SRFMTTI compliant durability standard with full spare parts support"
    ],
    "warranty": "12 months manufacturer warranty + KrishiGears after-sales service network.",
    "video": null,
    "hsn": "8432",
    "gst": 5
  },
  {
    "slug": "bi-750-pro-series-orange",
    "category": "power-weeders",
    "name": "KrishiGears 750 Pro Series – Orange (7.0 HP max, Petrol / 4 Litre)",
    "model": "750 Pro Series – Orange",
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
      "Genuine OEM-spec replacement spare parts procured per order"
    ],
    "applications": [
      "Cotton & Sugarcane inter-cultivation",
      "Vegetable row de-weeding & aeration",
      "Paddy wetland preparation (with cage wheels)",
      "Orchard basin tillage & fertilizer incorporation"
    ],
    "benefits": [
      "Cuts inter-cultivation labor cost by up to 70% in row crops",
      "High-torque de-weeding and soil aeration in tough Indian soils",
      "FMTTI / SRFMTTI compliant durability standard with full spare parts support"
    ],
    "warranty": "12 months manufacturer warranty + KrishiGears after-sales service network.",
    "video": null,
    "hsn": "8432",
    "gst": 5
  },
  {
    "slug": "bi-750-pro-series-yellow",
    "category": "power-weeders",
    "name": "KrishiGears 750 Pro Series – Yellow (7.0 HP max, Petrol / 4 Litre)",
    "model": "750 Pro Series – Yellow",
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
      "Genuine OEM-spec replacement spare parts procured per order"
    ],
    "applications": [
      "Cotton & Sugarcane inter-cultivation",
      "Vegetable row de-weeding & aeration",
      "Paddy wetland preparation (with cage wheels)",
      "Orchard basin tillage & fertilizer incorporation"
    ],
    "benefits": [
      "Cuts inter-cultivation labor cost by up to 70% in row crops",
      "High-torque de-weeding and soil aeration in tough Indian soils",
      "FMTTI / SRFMTTI compliant durability standard with full spare parts support"
    ],
    "warranty": "12 months manufacturer warranty + KrishiGears after-sales service network.",
    "video": null,
    "hsn": "8432",
    "gst": 5
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
      "Genuine OEM-spec replacement spare parts procured per order"
    ],
    "applications": [
      "Cotton & Sugarcane inter-cultivation",
      "Vegetable row de-weeding & aeration",
      "Paddy wetland preparation (with cage wheels)",
      "Orchard basin tillage & fertilizer incorporation"
    ],
    "benefits": [
      "Cuts inter-cultivation labor cost by up to 70% in row crops",
      "High-torque de-weeding and soil aeration in tough Indian soils",
      "FMTTI / SRFMTTI compliant durability standard with full spare parts support"
    ],
    "warranty": "12 months manufacturer warranty + KrishiGears after-sales service network.",
    "video": null,
    "hsn": "8432",
    "gst": 5
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
      "Genuine OEM-spec replacement spare parts procured per order"
    ],
    "applications": [
      "Cotton & Sugarcane inter-cultivation",
      "Vegetable row de-weeding & aeration",
      "Paddy wetland preparation (with cage wheels)",
      "Orchard basin tillage & fertilizer incorporation"
    ],
    "benefits": [
      "Cuts inter-cultivation labor cost by up to 70% in row crops",
      "High-torque de-weeding and soil aeration in tough Indian soils",
      "FMTTI / SRFMTTI compliant durability standard with full spare parts support"
    ],
    "warranty": "12 months manufacturer warranty + KrishiGears after-sales service network.",
    "video": null,
    "hsn": "8432",
    "gst": 5
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
      "Genuine OEM-spec replacement spare parts procured per order"
    ],
    "applications": [
      "Cotton & Sugarcane inter-cultivation",
      "Vegetable row de-weeding & aeration",
      "Paddy wetland preparation (with cage wheels)",
      "Orchard basin tillage & fertilizer incorporation"
    ],
    "benefits": [
      "Cuts inter-cultivation labor cost by up to 70% in row crops",
      "High-torque de-weeding and soil aeration in tough Indian soils",
      "FMTTI / SRFMTTI compliant durability standard with full spare parts support"
    ],
    "warranty": "12 months manufacturer warranty + KrishiGears after-sales service network.",
    "video": null,
    "hsn": "8432",
    "gst": 5
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
      "Genuine OEM-spec replacement spare parts procured per order"
    ],
    "applications": [
      "Cotton & Sugarcane inter-cultivation",
      "Vegetable row de-weeding & aeration",
      "Paddy wetland preparation (with cage wheels)",
      "Orchard basin tillage & fertilizer incorporation"
    ],
    "benefits": [
      "Cuts inter-cultivation labor cost by up to 70% in row crops",
      "High-torque de-weeding and soil aeration in tough Indian soils",
      "FMTTI / SRFMTTI compliant durability standard with full spare parts support"
    ],
    "warranty": "12 months manufacturer warranty + KrishiGears after-sales service network.",
    "video": null,
    "hsn": "8432",
    "gst": 5
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
      "Genuine OEM-spec replacement spare parts procured per order"
    ],
    "applications": [
      "Cotton & Sugarcane inter-cultivation",
      "Vegetable row de-weeding & aeration",
      "Paddy wetland preparation (with cage wheels)",
      "Orchard basin tillage & fertilizer incorporation"
    ],
    "benefits": [
      "Cuts inter-cultivation labor cost by up to 70% in row crops",
      "High-torque de-weeding and soil aeration in tough Indian soils",
      "FMTTI / SRFMTTI compliant durability standard with full spare parts support"
    ],
    "warranty": "12 months manufacturer warranty + KrishiGears after-sales service network.",
    "video": null,
    "hsn": "8432",
    "gst": 5
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
      "Genuine OEM-spec replacement spare parts procured per order"
    ],
    "applications": [
      "Cotton & Sugarcane inter-cultivation",
      "Vegetable row de-weeding & aeration",
      "Paddy wetland preparation (with cage wheels)",
      "Orchard basin tillage & fertilizer incorporation"
    ],
    "benefits": [
      "Cuts inter-cultivation labor cost by up to 70% in row crops",
      "High-torque de-weeding and soil aeration in tough Indian soils",
      "FMTTI / SRFMTTI compliant durability standard with full spare parts support"
    ],
    "warranty": "12 months manufacturer warranty + KrishiGears after-sales service network.",
    "video": null,
    "hsn": "8432",
    "gst": 5
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
      "Genuine OEM-spec replacement spare parts procured per order"
    ],
    "applications": [
      "Cotton & Sugarcane inter-cultivation",
      "Vegetable row de-weeding & aeration",
      "Paddy wetland preparation (with cage wheels)",
      "Orchard basin tillage & fertilizer incorporation"
    ],
    "benefits": [
      "Cuts inter-cultivation labor cost by up to 70% in row crops",
      "High-torque de-weeding and soil aeration in tough Indian soils",
      "FMTTI / SRFMTTI compliant durability standard with full spare parts support"
    ],
    "warranty": "12 months manufacturer warranty + KrishiGears after-sales service network.",
    "video": null,
    "hsn": "8432",
    "gst": 5
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
      "Genuine OEM-spec replacement spare parts procured per order"
    ],
    "applications": [
      "Cotton & Sugarcane inter-cultivation",
      "Vegetable row de-weeding & aeration",
      "Paddy wetland preparation (with cage wheels)",
      "Orchard basin tillage & fertilizer incorporation"
    ],
    "benefits": [
      "Cuts inter-cultivation labor cost by up to 70% in row crops",
      "High-torque de-weeding and soil aeration in tough Indian soils",
      "FMTTI / SRFMTTI compliant durability standard with full spare parts support"
    ],
    "warranty": "12 months manufacturer warranty + KrishiGears after-sales service network.",
    "video": null,
    "hsn": "8432",
    "gst": 5
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
      "Genuine OEM-spec replacement spare parts procured per order"
    ],
    "applications": [
      "Cotton & Sugarcane inter-cultivation",
      "Vegetable row de-weeding & aeration",
      "Paddy wetland preparation (with cage wheels)",
      "Orchard basin tillage & fertilizer incorporation"
    ],
    "benefits": [
      "Cuts inter-cultivation labor cost by up to 70% in row crops",
      "High-torque de-weeding and soil aeration in tough Indian soils",
      "FMTTI / SRFMTTI compliant durability standard with full spare parts support"
    ],
    "warranty": "12 months manufacturer warranty + KrishiGears after-sales service network.",
    "video": null,
    "hsn": "8432",
    "gst": 5
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
      "Genuine OEM-spec replacement spare parts procured per order"
    ],
    "applications": [
      "Cotton & Sugarcane inter-cultivation",
      "Vegetable row de-weeding & aeration",
      "Paddy wetland preparation (with cage wheels)",
      "Orchard basin tillage & fertilizer incorporation"
    ],
    "benefits": [
      "Cuts inter-cultivation labor cost by up to 70% in row crops",
      "High-torque de-weeding and soil aeration in tough Indian soils",
      "FMTTI / SRFMTTI compliant durability standard with full spare parts support"
    ],
    "warranty": "12 months manufacturer warranty + KrishiGears after-sales service network.",
    "video": null,
    "hsn": "8432",
    "gst": 5
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
      "Genuine OEM-spec replacement spare parts procured per order"
    ],
    "applications": [
      "Cotton & Sugarcane inter-cultivation",
      "Vegetable row de-weeding & aeration",
      "Paddy wetland preparation (with cage wheels)",
      "Orchard basin tillage & fertilizer incorporation"
    ],
    "benefits": [
      "Cuts inter-cultivation labor cost by up to 70% in row crops",
      "High-torque de-weeding and soil aeration in tough Indian soils",
      "FMTTI / SRFMTTI compliant durability standard with full spare parts support"
    ],
    "warranty": "12 months manufacturer warranty + KrishiGears after-sales service network.",
    "video": null,
    "hsn": "8432",
    "gst": 5
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
      "Genuine OEM-spec replacement spare parts procured per order"
    ],
    "applications": [
      "Cotton & Sugarcane inter-cultivation",
      "Vegetable row de-weeding & aeration",
      "Paddy wetland preparation (with cage wheels)",
      "Orchard basin tillage & fertilizer incorporation"
    ],
    "benefits": [
      "Cuts inter-cultivation labor cost by up to 70% in row crops",
      "High-torque de-weeding and soil aeration in tough Indian soils",
      "FMTTI / SRFMTTI compliant durability standard with full spare parts support"
    ],
    "warranty": "12 months manufacturer warranty + KrishiGears after-sales service network.",
    "video": null,
    "hsn": "8432",
    "gst": 5
  },
    {
    "slug": "kg-tr15d-trencher",
    "category": "commercial-contractor-fleet",
    "name": "KrishiGears KG-TR15D 15 HP Commercial Chain Trencher (Self-Propelled)",
    "model": "KG-TR15D",
    "brand": "KrishiGears",
    "badges": [
      "15 HP Petrol",
      "Self-Propelled",
      "Tungsten Chain",
      "Contractor Grade"
    ],
    "price": 185000,
    "comparePrice": 220000,
    "images": [
      "https://cdn.shopify.com/s/files/1/0776/7028/5470/files/kg_tr15d_trencher.jpg"
    ],
    "specs": {
      "Engine": "15 HP / 420cc Commercial 4-Stroke Petrol",
      "Excavation Speed": "60 Meters/Hour in Hardpan Soil",
      "Trench Dimensions": "100mm Width x 600mm Adjustable Depth",
      "Chain Teeth": "27 Tungsten Carbide Rock & Soil Cutters",
      "Drive System": "Self-Propelled Heavy-Duty Roller Chain Drive",
      "Applications": "Drip Irrigation, Optical Fiber & Electrical Conduits"
    },
    "features": [
      "Genuine KrishiGears commercial heavy-duty machinery",
      "10x faster than manual trenching crews",
      "High-tensile alloy digging chain with heat-treated sprockets",
      "PAN India delivery with verified GST tax invoice",
      "12-month commercial warranty with OEM replacement chain spares"
    ],
    "applications": [
      "Agricultural drip sub-main pipeline installation",
      "Solar farm electrical cabling and earthing channels",
      "Telecom fiber-optic conduit trenching",
      "Civil drainage and municipal conduit trenching"
    ],
    "benefits": [
      "Reduces manual excavation labor by 90%",
      "Consistent 600mm depth prevents pipe crushing and damage",
      "Self-propelled operation allows single-operator deployment"
    ],
    "warranty": "12 months manufacturer warranty + KrishiGears PAN-India spare parts support.",
    "video": null,
    "hsn": "8432",
    "gst": 18
  },
  {
    "slug": "kg-ea70",
    "category": "earth-augers",
    "name": "KrishiGears KG-EA70 3.5 HP (70cc) Commercial Earth Auger with Drill Bit",
    "model": "KG-EA70",
    "brand": "KrishiGears",
    "badges": [
      "3.5 HP 70cc",
      "Planetary Gear",
      "Earthing Specialist",
      "Commercial Grade"
    ],
    "price": 15400,
    "comparePrice": 18500,
    "images": [
      "https://cdn.shopify.com/s/files/1/0776/7028/5470/files/kg_ea70_earth_auger.jpg"
    ],
    "specs": {
      "Engine": "3.5 HP / 70cc High-Torque 2-Stroke Petrol",
      "Reduction Gear": "Commercial Heavy-Duty Planetary Gearbox",
      "Boring Speed": "45 Seconds per 3-Foot Hole in Hard Soil",
      "Bit Compatibility": "6-inch, 8-inch, 10-inch, 12-inch Earth Drill Bits",
      "Frame": "Dual-Operator Anti-Vibration Heavy Steel Frame"
    },
    "features": [
      "Genuine KrishiGears high-output earth boring equipment",
      "High reduction planetary gear delivers extreme digging torque",
      "Includes double-spiral tungsten tipped ground drill bit",
      "PAN India delivery with full GST tax input credit invoice"
    ],
    "applications": [
      "Solar park chemical earthing pits and grounding rods",
      "Highway and agricultural boundary fencing pole erection",
      "Horticulture sapling plantation and orchard pit preparation"
    ],
    "benefits": [
      "Bores 300+ holes per day with a two-person crew",
      "Eliminates manual digging fatigue in rocky and compacted clays"
    ],
    "warranty": "12 months manufacturer warranty + KrishiGears replacement parts support.",
    "video": null,
    "hsn": "8432",
    "gst": 12
  },
{
    "slug": "kg-186-backrotary",
    "category": "power-weeders",
    "name": "KrishiGears KG-186 10 HP Back Rotary Diesel Power Weeder (PTO Rotavator)",
    "model": "KG-186 Back Rotary",
    "brand": "KrishiGears",
    "badges": [
      "10 HP Diesel",
      "FMTTI Tested",
      "Rear Rotary PTO",
      "Contractor Grade"
    ],
    "price": 74900,
    "comparePrice": 89900,
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
      "Genuine OEM-spec replacement spare parts procured per order"
    ],
    "applications": [
      "Cotton & Sugarcane inter-cultivation",
      "Vegetable row de-weeding & aeration",
      "Paddy wetland preparation (with cage wheels)",
      "Orchard basin tillage & fertilizer incorporation"
    ],
    "benefits": [
      "Cuts inter-cultivation labor cost by up to 70% in row crops",
      "High-torque de-weeding and soil aeration in tough Indian soils",
      "FMTTI / SRFMTTI compliant durability standard with full spare parts support"
    ],
    "warranty": "12 months manufacturer warranty + KrishiGears after-sales service network.",
    "video": null,
    "hsn": "8432",
    "gst": 5
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
      "Genuine OEM-spec replacement spare parts procured per order"
    ],
    "applications": [
      "Cotton & Sugarcane inter-cultivation",
      "Vegetable row de-weeding & aeration",
      "Paddy wetland preparation (with cage wheels)",
      "Orchard basin tillage & fertilizer incorporation"
    ],
    "benefits": [
      "Cuts inter-cultivation labor cost by up to 70% in row crops",
      "High-torque de-weeding and soil aeration in tough Indian soils",
      "FMTTI / SRFMTTI compliant durability standard with full spare parts support"
    ],
    "warranty": "12 months manufacturer warranty + KrishiGears after-sales service network.",
    "video": null,
    "hsn": "8432",
    "gst": 5
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
      "Genuine OEM-spec replacement spare parts procured per order"
    ],
    "applications": [
      "Cotton & Sugarcane inter-cultivation",
      "Vegetable row de-weeding & aeration",
      "Paddy wetland preparation (with cage wheels)",
      "Orchard basin tillage & fertilizer incorporation"
    ],
    "benefits": [
      "Cuts inter-cultivation labor cost by up to 70% in row crops",
      "High-torque de-weeding and soil aeration in tough Indian soils",
      "FMTTI / SRFMTTI compliant durability standard with full spare parts support"
    ],
    "warranty": "12 months manufacturer warranty + KrishiGears after-sales service network.",
    "video": null,
    "hsn": "8432",
    "gst": 5
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
      "Genuine OEM-spec replacement spare parts procured per order"
    ],
    "applications": [
      "Cotton & Sugarcane inter-cultivation",
      "Vegetable row de-weeding & aeration",
      "Paddy wetland preparation (with cage wheels)",
      "Orchard basin tillage & fertilizer incorporation"
    ],
    "benefits": [
      "Cuts inter-cultivation labor cost by up to 70% in row crops",
      "High-torque de-weeding and soil aeration in tough Indian soils",
      "FMTTI / SRFMTTI compliant durability standard with full spare parts support"
    ],
    "warranty": "12 months manufacturer warranty + KrishiGears after-sales service network.",
    "video": null,
    "hsn": "8432",
    "gst": 5
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
      "Genuine OEM-spec replacement spare parts procured per order"
    ],
    "applications": [
      "Cotton & Sugarcane inter-cultivation",
      "Vegetable row de-weeding & aeration",
      "Paddy wetland preparation (with cage wheels)",
      "Orchard basin tillage & fertilizer incorporation"
    ],
    "benefits": [
      "Cuts inter-cultivation labor cost by up to 70% in row crops",
      "High-torque de-weeding and soil aeration in tough Indian soils",
      "FMTTI / SRFMTTI compliant durability standard with full spare parts support"
    ],
    "warranty": "12 months manufacturer warranty + KrishiGears after-sales service network.",
    "video": null,
    "hsn": "8432",
    "gst": 5
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
      "Genuine OEM-spec replacement spare parts procured per order"
    ],
    "applications": [
      "Cotton & Sugarcane inter-cultivation",
      "Vegetable row de-weeding & aeration",
      "Paddy wetland preparation (with cage wheels)",
      "Orchard basin tillage & fertilizer incorporation"
    ],
    "benefits": [
      "Cuts inter-cultivation labor cost by up to 70% in row crops",
      "High-torque de-weeding and soil aeration in tough Indian soils",
      "FMTTI / SRFMTTI compliant durability standard with full spare parts support"
    ],
    "warranty": "12 months manufacturer warranty + KrishiGears after-sales service network.",
    "video": "https://www.youtube.com/watch?v=XErTJ11jW2o",
    "hsn": "8432",
    "gst": 5
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
      "Genuine OEM-spec replacement spare parts procured per order"
    ],
    "applications": [
      "Cotton & Sugarcane inter-cultivation",
      "Vegetable row de-weeding & aeration",
      "Paddy wetland preparation (with cage wheels)",
      "Orchard basin tillage & fertilizer incorporation"
    ],
    "benefits": [
      "Cuts inter-cultivation labor cost by up to 70% in row crops",
      "High-torque de-weeding and soil aeration in tough Indian soils",
      "FMTTI / SRFMTTI compliant durability standard with full spare parts support"
    ],
    "warranty": "12 months manufacturer warranty + KrishiGears after-sales service network.",
    "video": "https://www.youtube.com/watch?v=XErTJ11jW2o",
    "hsn": "8432",
    "gst": 5
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
      "Genuine OEM-spec replacement spare parts procured per order"
    ],
    "applications": [
      "Cotton & Sugarcane inter-cultivation",
      "Vegetable row de-weeding & aeration",
      "Paddy wetland preparation (with cage wheels)",
      "Orchard basin tillage & fertilizer incorporation"
    ],
    "benefits": [
      "Cuts inter-cultivation labor cost by up to 70% in row crops",
      "High-torque de-weeding and soil aeration in tough Indian soils",
      "FMTTI / SRFMTTI compliant durability standard with full spare parts support"
    ],
    "warranty": "12 months manufacturer warranty + KrishiGears after-sales service network.",
    "video": "https://www.youtube.com/watch?v=XErTJ11jW2o",
    "hsn": "8432",
    "gst": 5
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
      "Genuine OEM-spec replacement spare parts procured per order"
    ],
    "applications": [
      "Cotton & Sugarcane inter-cultivation",
      "Vegetable row de-weeding & aeration",
      "Paddy wetland preparation (with cage wheels)",
      "Orchard basin tillage & fertilizer incorporation"
    ],
    "benefits": [
      "Cuts inter-cultivation labor cost by up to 70% in row crops",
      "High-torque de-weeding and soil aeration in tough Indian soils",
      "FMTTI / SRFMTTI compliant durability standard with full spare parts support"
    ],
    "warranty": "12 months manufacturer warranty + KrishiGears after-sales service network.",
    "video": "https://www.youtube.com/watch?v=XErTJ11jW2o",
    "hsn": "8432",
    "gst": 5
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
      "Genuine OEM-spec replacement spare parts procured per order"
    ],
    "applications": [
      "Cotton & Sugarcane inter-cultivation",
      "Vegetable row de-weeding & aeration",
      "Paddy wetland preparation (with cage wheels)",
      "Orchard basin tillage & fertilizer incorporation"
    ],
    "benefits": [
      "Cuts inter-cultivation labor cost by up to 70% in row crops",
      "High-torque de-weeding and soil aeration in tough Indian soils",
      "FMTTI / SRFMTTI compliant durability standard with full spare parts support"
    ],
    "warranty": "12 months manufacturer warranty + KrishiGears after-sales service network.",
    "video": "https://www.youtube.com/watch?v=XErTJ11jW2o",
    "hsn": "8432",
    "gst": 5
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
      "Genuine OEM-spec replacement spare parts procured per order"
    ],
    "applications": [
      "Cotton & Sugarcane inter-cultivation",
      "Vegetable row de-weeding & aeration",
      "Paddy wetland preparation (with cage wheels)",
      "Orchard basin tillage & fertilizer incorporation"
    ],
    "benefits": [
      "Cuts inter-cultivation labor cost by up to 70% in row crops",
      "High-torque de-weeding and soil aeration in tough Indian soils",
      "FMTTI / SRFMTTI compliant durability standard with full spare parts support"
    ],
    "warranty": "12 months manufacturer warranty + KrishiGears after-sales service network.",
    "video": "https://www.youtube.com/watch?v=XErTJ11jW2o",
    "hsn": "8432",
    "gst": 5
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
      "Genuine OEM-spec replacement spare parts procured per order"
    ],
    "applications": [
      "Cotton & Sugarcane inter-cultivation",
      "Vegetable row de-weeding & aeration",
      "Paddy wetland preparation (with cage wheels)",
      "Orchard basin tillage & fertilizer incorporation"
    ],
    "benefits": [
      "Cuts inter-cultivation labor cost by up to 70% in row crops",
      "High-torque de-weeding and soil aeration in tough Indian soils",
      "FMTTI / SRFMTTI compliant durability standard with full spare parts support"
    ],
    "warranty": "12 months manufacturer warranty + KrishiGears after-sales service network.",
    "video": "https://www.youtube.com/watch?v=XErTJ11jW2o",
    "hsn": "8432",
    "gst": 5
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
      "Genuine OEM-spec replacement spare parts procured per order"
    ],
    "applications": [
      "Cotton & Sugarcane inter-cultivation",
      "Vegetable row de-weeding & aeration",
      "Paddy wetland preparation (with cage wheels)",
      "Orchard basin tillage & fertilizer incorporation"
    ],
    "benefits": [
      "Cuts inter-cultivation labor cost by up to 70% in row crops",
      "High-torque de-weeding and soil aeration in tough Indian soils",
      "FMTTI / SRFMTTI compliant durability standard with full spare parts support"
    ],
    "warranty": "12 months manufacturer warranty + KrishiGears after-sales service network.",
    "video": "https://www.youtube.com/watch?v=XErTJ11jW2o",
    "hsn": "8432",
    "gst": 5
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
      "Genuine OEM-spec replacement spare parts procured per order"
    ],
    "applications": [
      "Cotton & Sugarcane inter-cultivation",
      "Vegetable row de-weeding & aeration",
      "Paddy wetland preparation (with cage wheels)",
      "Orchard basin tillage & fertilizer incorporation"
    ],
    "benefits": [
      "Cuts inter-cultivation labor cost by up to 70% in row crops",
      "High-torque de-weeding and soil aeration in tough Indian soils",
      "FMTTI / SRFMTTI compliant durability standard with full spare parts support"
    ],
    "warranty": "12 months manufacturer warranty + KrishiGears after-sales service network.",
    "video": "https://www.youtube.com/watch?v=XErTJ11jW2o",
    "hsn": "8432",
    "gst": 5
  },
  {
    "slug": "ri-kp-1050-ae-2350",
    "category": "power-weeders",
    "name": "KrishiGears Power Weeder Model KP-1050 AE (9 HP) - Petrol",
    "model": "KP-1050-AE",
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
      "Genuine OEM-spec replacement spare parts procured per order"
    ],
    "applications": [
      "Cotton & Sugarcane inter-cultivation",
      "Vegetable row de-weeding & aeration",
      "Paddy wetland preparation (with cage wheels)",
      "Orchard basin tillage & fertilizer incorporation"
    ],
    "benefits": [
      "Cuts inter-cultivation labor cost by up to 70% in row crops",
      "High-torque de-weeding and soil aeration in tough Indian soils",
      "FMTTI / SRFMTTI compliant durability standard with full spare parts support"
    ],
    "warranty": "12 months manufacturer warranty + KrishiGears after-sales service network.",
    "video": "https://www.youtube.com/watch?v=XErTJ11jW2o",
    "hsn": "8432",
    "gst": 5
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
      "Genuine OEM-spec replacement spare parts procured per order"
    ],
    "applications": [
      "Cotton & Sugarcane inter-cultivation",
      "Vegetable row de-weeding & aeration",
      "Paddy wetland preparation (with cage wheels)",
      "Orchard basin tillage & fertilizer incorporation"
    ],
    "benefits": [
      "Cuts inter-cultivation labor cost by up to 70% in row crops",
      "High-torque de-weeding and soil aeration in tough Indian soils",
      "FMTTI / SRFMTTI compliant durability standard with full spare parts support"
    ],
    "warranty": "12 months manufacturer warranty + KrishiGears after-sales service network.",
    "video": "https://www.youtube.com/watch?v=XErTJ11jW2o",
    "hsn": "8432",
    "gst": 5
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
      "Genuine OEM-spec replacement spare parts procured per order"
    ],
    "applications": [
      "Cotton & Sugarcane inter-cultivation",
      "Vegetable row de-weeding & aeration",
      "Paddy wetland preparation (with cage wheels)",
      "Orchard basin tillage & fertilizer incorporation"
    ],
    "benefits": [
      "Cuts inter-cultivation labor cost by up to 70% in row crops",
      "High-torque de-weeding and soil aeration in tough Indian soils",
      "FMTTI / SRFMTTI compliant durability standard with full spare parts support"
    ],
    "warranty": "12 months manufacturer warranty + KrishiGears after-sales service network.",
    "video": "https://www.youtube.com/watch?v=XErTJ11jW2o",
    "hsn": "8432",
    "gst": 5
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
      "Genuine OEM-spec replacement spare parts procured per order"
    ],
    "applications": [
      "Cotton & Sugarcane inter-cultivation",
      "Vegetable row de-weeding & aeration",
      "Paddy wetland preparation (with cage wheels)",
      "Orchard basin tillage & fertilizer incorporation"
    ],
    "benefits": [
      "Cuts inter-cultivation labor cost by up to 70% in row crops",
      "High-torque de-weeding and soil aeration in tough Indian soils",
      "FMTTI / SRFMTTI compliant durability standard with full spare parts support"
    ],
    "warranty": "12 months manufacturer warranty + KrishiGears after-sales service network.",
    "video": "https://www.youtube.com/watch?v=XErTJ11jW2o",
    "hsn": "8432",
    "gst": 5
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
      "Genuine OEM-spec replacement spare parts procured per order"
    ],
    "applications": [
      "Cotton & Sugarcane inter-cultivation",
      "Vegetable row de-weeding & aeration",
      "Paddy wetland preparation (with cage wheels)",
      "Orchard basin tillage & fertilizer incorporation"
    ],
    "benefits": [
      "Cuts inter-cultivation labor cost by up to 70% in row crops",
      "High-torque de-weeding and soil aeration in tough Indian soils",
      "FMTTI / SRFMTTI compliant durability standard with full spare parts support"
    ],
    "warranty": "12 months manufacturer warranty + KrishiGears after-sales service network.",
    "video": "https://www.youtube.com/watch?v=XErTJ11jW2o",
    "hsn": "8432",
    "gst": 5
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
      "Genuine OEM-spec replacement spare parts procured per order"
    ],
    "applications": [
      "Cotton & Sugarcane inter-cultivation",
      "Vegetable row de-weeding & aeration",
      "Paddy wetland preparation (with cage wheels)",
      "Orchard basin tillage & fertilizer incorporation"
    ],
    "benefits": [
      "Cuts inter-cultivation labor cost by up to 70% in row crops",
      "High-torque de-weeding and soil aeration in tough Indian soils",
      "FMTTI / SRFMTTI compliant durability standard with full spare parts support"
    ],
    "warranty": "12 months manufacturer warranty + KrishiGears after-sales service network.",
    "video": "https://www.youtube.com/watch?v=XErTJ11jW2o",
    "hsn": "8432",
    "gst": 5
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
      "Genuine OEM-spec replacement spare parts procured per order"
    ],
    "applications": [
      "Cotton & Sugarcane inter-cultivation",
      "Vegetable row de-weeding & aeration",
      "Paddy wetland preparation (with cage wheels)",
      "Orchard basin tillage & fertilizer incorporation"
    ],
    "benefits": [
      "Cuts inter-cultivation labor cost by up to 70% in row crops",
      "High-torque de-weeding and soil aeration in tough Indian soils",
      "FMTTI / SRFMTTI compliant durability standard with full spare parts support"
    ],
    "warranty": "12 months manufacturer warranty + KrishiGears after-sales service network.",
    "video": "https://www.youtube.com/watch?v=XErTJ11jW2o",
    "hsn": "8432",
    "gst": 5
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
      "Genuine OEM-spec replacement spare parts procured per order"
    ],
    "applications": [
      "Cotton & Sugarcane inter-cultivation",
      "Vegetable row de-weeding & aeration",
      "Paddy wetland preparation (with cage wheels)",
      "Orchard basin tillage & fertilizer incorporation"
    ],
    "benefits": [
      "Cuts inter-cultivation labor cost by up to 70% in row crops",
      "High-torque de-weeding and soil aeration in tough Indian soils",
      "FMTTI / SRFMTTI compliant durability standard with full spare parts support"
    ],
    "warranty": "12 months manufacturer warranty + KrishiGears after-sales service network.",
    "video": "https://www.youtube.com/watch?v=XErTJ11jW2o",
    "hsn": "8432",
    "gst": 5
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
      "Genuine OEM-spec replacement spare parts procured per order"
    ],
    "applications": [
      "Cotton & Sugarcane inter-cultivation",
      "Vegetable row de-weeding & aeration",
      "Paddy wetland preparation (with cage wheels)",
      "Orchard basin tillage & fertilizer incorporation"
    ],
    "benefits": [
      "Cuts inter-cultivation labor cost by up to 70% in row crops",
      "High-torque de-weeding and soil aeration in tough Indian soils",
      "FMTTI / SRFMTTI compliant durability standard with full spare parts support"
    ],
    "warranty": "12 months manufacturer warranty + KrishiGears after-sales service network.",
    "video": "https://www.youtube.com/watch?v=XErTJ11jW2o",
    "hsn": "8432",
    "gst": 5
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
      "Genuine OEM-spec replacement spare parts procured per order"
    ],
    "applications": [
      "Cotton & Sugarcane inter-cultivation",
      "Vegetable row de-weeding & aeration",
      "Paddy wetland preparation (with cage wheels)",
      "Orchard basin tillage & fertilizer incorporation"
    ],
    "benefits": [
      "Cuts inter-cultivation labor cost by up to 70% in row crops",
      "High-torque de-weeding and soil aeration in tough Indian soils",
      "FMTTI / SRFMTTI compliant durability standard with full spare parts support"
    ],
    "warranty": "12 months manufacturer warranty + KrishiGears after-sales service network.",
    "video": "https://www.youtube.com/watch?v=XErTJ11jW2o",
    "hsn": "8432",
    "gst": 5
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
      "Genuine OEM-spec replacement spare parts procured per order"
    ],
    "applications": [
      "Cotton & Sugarcane inter-cultivation",
      "Vegetable row de-weeding & aeration",
      "Paddy wetland preparation (with cage wheels)",
      "Orchard basin tillage & fertilizer incorporation"
    ],
    "benefits": [
      "Cuts inter-cultivation labor cost by up to 70% in row crops",
      "High-torque de-weeding and soil aeration in tough Indian soils",
      "FMTTI / SRFMTTI compliant durability standard with full spare parts support"
    ],
    "warranty": "12 months manufacturer warranty + KrishiGears after-sales service network.",
    "video": "https://www.youtube.com/watch?v=XErTJ11jW2o",
    "hsn": "8432",
    "gst": 5
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
      "Genuine OEM-spec replacement spare parts procured per order"
    ],
    "applications": [
      "Cotton & Sugarcane inter-cultivation",
      "Vegetable row de-weeding & aeration",
      "Paddy wetland preparation (with cage wheels)",
      "Orchard basin tillage & fertilizer incorporation"
    ],
    "benefits": [
      "Cuts inter-cultivation labor cost by up to 70% in row crops",
      "High-torque de-weeding and soil aeration in tough Indian soils",
      "FMTTI / SRFMTTI compliant durability standard with full spare parts support"
    ],
    "warranty": "12 months manufacturer warranty + KrishiGears after-sales service network.",
    "video": "https://www.youtube.com/watch?v=XErTJ11jW2o",
    "hsn": "8432",
    "gst": 5
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
      "Genuine OEM-spec replacement spare parts procured per order"
    ],
    "applications": [
      "Cotton & Sugarcane inter-cultivation",
      "Vegetable row de-weeding & aeration",
      "Paddy wetland preparation (with cage wheels)",
      "Orchard basin tillage & fertilizer incorporation"
    ],
    "benefits": [
      "Cuts inter-cultivation labor cost by up to 70% in row crops",
      "High-torque de-weeding and soil aeration in tough Indian soils",
      "FMTTI / SRFMTTI compliant durability standard with full spare parts support"
    ],
    "warranty": "12 months manufacturer warranty + KrishiGears after-sales service network.",
    "video": "https://www.youtube.com/watch?v=XErTJ11jW2o",
    "hsn": "8432",
    "gst": 5
  },
  {
    "slug": "ri-254022073-2073",
    "category": "power-weeders",
    "name": "KrishiGears Power Tiller Sc -90 7hp - 4 Stroke",
    "model": "KG-PT-SC90",
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
      "Genuine OEM-spec replacement spare parts procured per order"
    ],
    "applications": [
      "Cotton & Sugarcane inter-cultivation",
      "Vegetable row de-weeding & aeration",
      "Paddy wetland preparation (with cage wheels)",
      "Orchard basin tillage & fertilizer incorporation"
    ],
    "benefits": [
      "Cuts inter-cultivation labor cost by up to 70% in row crops",
      "High-torque de-weeding and soil aeration in tough Indian soils",
      "FMTTI / SRFMTTI compliant durability standard with full spare parts support"
    ],
    "warranty": "12 months manufacturer warranty + KrishiGears after-sales service network.",
    "video": "https://www.youtube.com/watch?v=Dk8QFoE-h2k",
    "hsn": "8432",
    "gst": 5
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
      "Genuine OEM-spec replacement spare parts procured per order"
    ],
    "applications": [
      "Cotton & Sugarcane inter-cultivation",
      "Vegetable row de-weeding & aeration",
      "Paddy wetland preparation (with cage wheels)",
      "Orchard basin tillage & fertilizer incorporation"
    ],
    "benefits": [
      "Cuts inter-cultivation labor cost by up to 70% in row crops",
      "High-torque de-weeding and soil aeration in tough Indian soils",
      "FMTTI / SRFMTTI compliant durability standard with full spare parts support"
    ],
    "warranty": "12 months manufacturer warranty + KrishiGears after-sales service network.",
    "video": "https://www.youtube.com/watch?v=XErTJ11jW2o",
    "hsn": "8432",
    "gst": 5
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
      "Genuine OEM-spec replacement spare parts procured per order"
    ],
    "applications": [
      "Cotton & Sugarcane inter-cultivation",
      "Vegetable row de-weeding & aeration",
      "Paddy wetland preparation (with cage wheels)",
      "Orchard basin tillage & fertilizer incorporation"
    ],
    "benefits": [
      "Cuts inter-cultivation labor cost by up to 70% in row crops",
      "High-torque de-weeding and soil aeration in tough Indian soils",
      "FMTTI / SRFMTTI compliant durability standard with full spare parts support"
    ],
    "warranty": "12 months manufacturer warranty + KrishiGears after-sales service network.",
    "video": "https://www.youtube.com/watch?v=XErTJ11jW2o",
    "hsn": "8432",
    "gst": 5
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
      "Genuine OEM-spec replacement spare parts procured per order"
    ],
    "applications": [
      "Cotton & Sugarcane inter-cultivation",
      "Vegetable row de-weeding & aeration",
      "Paddy wetland preparation (with cage wheels)",
      "Orchard basin tillage & fertilizer incorporation"
    ],
    "benefits": [
      "Cuts inter-cultivation labor cost by up to 70% in row crops",
      "High-torque de-weeding and soil aeration in tough Indian soils",
      "FMTTI / SRFMTTI compliant durability standard with full spare parts support"
    ],
    "warranty": "12 months manufacturer warranty + KrishiGears after-sales service network.",
    "video": "https://www.youtube.com/watch?v=XErTJ11jW2o",
    "hsn": "8432",
    "gst": 5
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
      "Genuine OEM-spec replacement spare parts procured per order"
    ],
    "applications": [
      "Cotton & Sugarcane inter-cultivation",
      "Vegetable row de-weeding & aeration",
      "Paddy wetland preparation (with cage wheels)",
      "Orchard basin tillage & fertilizer incorporation"
    ],
    "benefits": [
      "Cuts inter-cultivation labor cost by up to 70% in row crops",
      "High-torque de-weeding and soil aeration in tough Indian soils",
      "FMTTI / SRFMTTI compliant durability standard with full spare parts support"
    ],
    "warranty": "12 months manufacturer warranty + KrishiGears after-sales service network.",
    "video": "https://www.youtube.com/watch?v=XErTJ11jW2o",
    "hsn": "8432",
    "gst": 5
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
      "Genuine OEM-spec replacement spare parts procured per order"
    ],
    "applications": [
      "Cotton & Sugarcane inter-cultivation",
      "Vegetable row de-weeding & aeration",
      "Paddy wetland preparation (with cage wheels)",
      "Orchard basin tillage & fertilizer incorporation"
    ],
    "benefits": [
      "Cuts inter-cultivation labor cost by up to 70% in row crops",
      "High-torque de-weeding and soil aeration in tough Indian soils",
      "FMTTI / SRFMTTI compliant durability standard with full spare parts support"
    ],
    "warranty": "12 months manufacturer warranty + KrishiGears after-sales service network.",
    "video": "https://www.youtube.com/watch?v=XErTJ11jW2o",
    "hsn": "8432",
    "gst": 5
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
      "Genuine OEM-spec replacement spare parts procured per order"
    ],
    "applications": [
      "Cotton & Sugarcane inter-cultivation",
      "Vegetable row de-weeding & aeration",
      "Paddy wetland preparation (with cage wheels)",
      "Orchard basin tillage & fertilizer incorporation"
    ],
    "benefits": [
      "Cuts inter-cultivation labor cost by up to 70% in row crops",
      "High-torque de-weeding and soil aeration in tough Indian soils",
      "FMTTI / SRFMTTI compliant durability standard with full spare parts support"
    ],
    "warranty": "12 months manufacturer warranty + KrishiGears after-sales service network.",
    "video": "https://www.youtube.com/watch?v=XErTJ11jW2o",
    "hsn": "8432",
    "gst": 5
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
      "Genuine OEM-spec replacement spare parts procured per order"
    ],
    "applications": [
      "Cotton & Sugarcane inter-cultivation",
      "Vegetable row de-weeding & aeration",
      "Paddy wetland preparation (with cage wheels)",
      "Orchard basin tillage & fertilizer incorporation"
    ],
    "benefits": [
      "Cuts inter-cultivation labor cost by up to 70% in row crops",
      "High-torque de-weeding and soil aeration in tough Indian soils",
      "FMTTI / SRFMTTI compliant durability standard with full spare parts support"
    ],
    "warranty": "12 months manufacturer warranty + KrishiGears after-sales service network.",
    "video": "https://www.youtube.com/watch?v=XErTJ11jW2o",
    "hsn": "8432",
    "gst": 5
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
      "Genuine OEM-spec replacement spare parts procured per order"
    ],
    "applications": [
      "Cotton & Sugarcane inter-cultivation",
      "Vegetable row de-weeding & aeration",
      "Paddy wetland preparation (with cage wheels)",
      "Orchard basin tillage & fertilizer incorporation"
    ],
    "benefits": [
      "Cuts inter-cultivation labor cost by up to 70% in row crops",
      "High-torque de-weeding and soil aeration in tough Indian soils",
      "FMTTI / SRFMTTI compliant durability standard with full spare parts support"
    ],
    "warranty": "12 months manufacturer warranty + KrishiGears after-sales service network.",
    "video": "https://www.youtube.com/watch?v=EsLWgk1cdIE",
    "hsn": "8432",
    "gst": 5
  },
  {
    "slug": "leo-295837443-7443",
    "category": "brush-cutters",
    "name": "KrishiGears Side Pack Brushcutter CG-530 (2.4 HP) - 2 Stroke",
    "model": "KG-BC-CG530-SP",
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
      "Genuine OEM-spec replacement spare parts procured per order"
    ],
    "applications": [
      "Crop harvesting (Wheat, Paddy, Mustard)",
      "Orchard grass & weed trimming",
      "Fodder and green grass cutting",
      "Field border & bund clearing"
    ],
    "benefits": [
      "Replaces 6 to 8 manual farm laborers during harvesting season",
      "Interchangeable blade attachments (2T, 3T, 80T carbide, tap-n-go)",
      "Ergonomic backpack / shoulder harness reduces operator fatigue"
    ],
    "warranty": "12 months manufacturer warranty + KrishiGears after-sales service network.",
    "video": "https://www.youtube.com/watch?v=EsLWgk1cdIE",
    "hsn": "8467",
    "gst": 18
  },
  {
    "slug": "leo-cg-680-0294",
    "category": "power-weeders",
    "name": "KrishiGears Mini Tiller - Model CG-680 - 2-Stroke",
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
      "Genuine OEM-spec replacement spare parts procured per order"
    ],
    "applications": [
      "Cotton & Sugarcane inter-cultivation",
      "Vegetable row de-weeding & aeration",
      "Paddy wetland preparation (with cage wheels)",
      "Orchard basin tillage & fertilizer incorporation"
    ],
    "benefits": [
      "Cuts inter-cultivation labor cost by up to 70% in row crops",
      "High-torque de-weeding and soil aeration in tough Indian soils",
      "FMTTI / SRFMTTI compliant durability standard with full spare parts support"
    ],
    "warranty": "12 months manufacturer warranty + KrishiGears after-sales service network.",
    "video": "https://www.youtube.com/watch?v=EsLWgk1cdIE",
    "hsn": "8432",
    "gst": 5
  },
  {
    "slug": "leo-253407350-7350",
    "category": "farm-machinery",
    "name": "KrishiGears Chain Saw 62 Cc 2 Stroke (2.2 kW)",
    "model": "KG-CS-62CC",
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
      "Genuine OEM-spec replacement spare parts procured per order"
    ],
    "applications": [
      "Orchard tree pruning & thinning",
      "Firewood & timber cutting",
      "Farm boundary tree maintenance"
    ],
    "benefits": [
      "High-torque engine for fast, clean wood cutting",
      "Inertia-activated chain brake for operator safety",
      "Automated chain lubrication system"
    ],
    "warranty": "12 months manufacturer warranty + KrishiGears after-sales service network.",
    "video": "https://www.youtube.com/watch?v=EsLWgk1cdIE",
    "hsn": "8467",
    "gst": 18
  },
  {
    "slug": "leo-rover-850-sp-1843",
    "category": "lawn-mowers",
    "name": "KrishiGears Walk Behind Mowers Model ROVER-850 SP (5.5 HP)",
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
      "Genuine OEM-spec replacement spare parts procured per order"
    ],
    "applications": [
      "Estate & farmhouse lawn maintenance",
      "Commercial sports grounds & turf care",
      "Resort landscaping & orchard pathways",
      "Park vegetation & grass management"
    ],
    "benefits": [
      "Even turf clipping with multi-stage height adjustment",
      "Heavy-gauge steel cutting deck engineered for rugged continuous operation",
      "High-capacity grass collector reduces manual bagging toil"
    ],
    "warranty": "12 months manufacturer warranty + KrishiGears after-sales service network.",
    "video": "",
    "hsn": "8433",
    "gst": 5
  },
  {
    "slug": "leo-254165680-5680",
    "category": "farm-machinery",
    "name": "KrishiGears Earth Auger Wheel Type 3.5hp / 68cc",
    "model": "KG-EA-68CC",
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
      "Genuine OEM-spec replacement spare parts procured per order"
    ],
    "applications": [
      "Fencing post hole drilling",
      "Tree plantation & orchard pitting",
      "Soil sampling & pole foundation holes"
    ],
    "benefits": [
      "Digs 2.5–3 ft deep post holes in under 60 seconds",
      "High-torque gear reduction for stony & hard-crust soils",
      "Dual-operator safety handle bars with emergency throttle stop"
    ],
    "warranty": "12 months manufacturer warranty + KrishiGears after-sales service network.",
    "video": "https://www.youtube.com/watch?v=EsLWgk1cdIE",
    "hsn": "8432",
    "gst": 5
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
      "Genuine OEM-spec replacement spare parts procured per order"
    ],
    "applications": [
      "Agricultural field irrigation",
      "Well and canal water lifting",
      "Emergency field de-watering & construction drainage"
    ],
    "benefits": [
      "High discharge volume with robust fuel-efficient engine",
      "Corrosion-resistant aluminium pump casing",
      "Compact carry frame for easy field mobility"
    ],
    "warranty": "12 months manufacturer warranty + KrishiGears after-sales service network.",
    "video": "https://www.youtube.com/watch?v=EsLWgk1cdIE",
    "hsn": "8413",
    "gst": 18
  },
  {
    "slug": "leo-303454139-4139",
    "category": "brush-cutters",
    "name": "KrishiGears Rotary Slasher Shrub Master (10 hp) - Petrol",
    "model": "KG-RS-10HP",
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
      "Genuine OEM-spec replacement spare parts procured per order"
    ],
    "applications": [
      "Crop harvesting (Wheat, Paddy, Mustard)",
      "Orchard grass & weed trimming",
      "Fodder and green grass cutting",
      "Field border & bund clearing"
    ],
    "benefits": [
      "Replaces 6 to 8 manual farm laborers during harvesting season",
      "Interchangeable blade attachments (2T, 3T, 80T carbide, tap-n-go)",
      "Ergonomic backpack / shoulder harness reduces operator fatigue"
    ],
    "warranty": "12 months manufacturer warranty + KrishiGears after-sales service network.",
    "video": "",
    "hsn": "8433",
    "gst": 5
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
      "Genuine OEM-spec replacement spare parts procured per order"
    ],
    "applications": [
      "Estate & farmhouse lawn maintenance",
      "Commercial sports grounds & turf care",
      "Resort landscaping & orchard pathways",
      "Park vegetation & grass management"
    ],
    "benefits": [
      "Even turf clipping with multi-stage height adjustment",
      "Heavy-gauge steel cutting deck engineered for rugged continuous operation",
      "High-capacity grass collector reduces manual bagging toil"
    ],
    "warranty": "12 months manufacturer warranty + KrishiGears after-sales service network.",
    "video": "https://www.youtube.com/watch?v=EsLWgk1cdIE",
    "hsn": "8433",
    "gst": 5
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
      "Genuine OEM-spec replacement spare parts procured per order"
    ],
    "applications": [
      "Estate & farmhouse lawn maintenance",
      "Commercial sports grounds & turf care",
      "Resort landscaping & orchard pathways",
      "Park vegetation & grass management"
    ],
    "benefits": [
      "Even turf clipping with multi-stage height adjustment",
      "Heavy-gauge steel cutting deck engineered for rugged continuous operation",
      "High-capacity grass collector reduces manual bagging toil"
    ],
    "warranty": "12 months manufacturer warranty + KrishiGears after-sales service network.",
    "video": "https://www.youtube.com/watch?v=EsLWgk1cdIE",
    "hsn": "8433",
    "gst": 5
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
      "Genuine OEM-spec replacement spare parts procured per order"
    ],
    "applications": [
      "Estate & farmhouse lawn maintenance",
      "Commercial sports grounds & turf care",
      "Resort landscaping & orchard pathways",
      "Park vegetation & grass management"
    ],
    "benefits": [
      "Even turf clipping with multi-stage height adjustment",
      "Heavy-gauge steel cutting deck engineered for rugged continuous operation",
      "High-capacity grass collector reduces manual bagging toil"
    ],
    "warranty": "12 months manufacturer warranty + KrishiGears after-sales service network.",
    "video": "https://www.youtube.com/watch?v=EsLWgk1cdIE",
    "hsn": "8433",
    "gst": 5
  },
  {
    "slug": "leo-297634235-4235",
    "category": "farm-machinery",
    "name": "KrishiGears Chaff Cutter Machine - Electric",
    "model": "KG-CC-ELEC",
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
      "Genuine OEM-spec replacement spare parts procured per order"
    ],
    "applications": [
      "Dairy farm cattle fodder preparation",
      "Dry and green crop residue chopping",
      "Silage preparation for livestock"
    ],
    "benefits": [
      "High output capacity for dairy herds of 10 to 50 cattle",
      "Tempered high-carbon cutting blades for uniform fodder size",
      "Heavy-duty vibration-free steel frame"
    ],
    "warranty": "12 months manufacturer warranty + KrishiGears after-sales service network.",
    "video": "https://www.youtube.com/watch?v=EsLWgk1cdIE",
    "hsn": "8436",
    "gst": 5
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
      "Genuine OEM-spec replacement spare parts procured per order"
    ],
    "applications": [
      "Routine seasonal maintenance & overhaul",
      "Field breakdown repair & component replacement"
    ],
    "benefits": [
      "OEM dimensional specifications; verify measurements on your existing part before ordering",
      "High-carbon and heat-treated metallurgy for extended operating life",
      "Genuine replacement spare parts procured per order"
    ],
    "warranty": "12 months manufacturer warranty + KrishiGears after-sales service network.",
    "video": "https://www.youtube.com/watch?v=EsLWgk1cdIE",
    "hsn": "8467",
    "gst": 18
  },
  {
    "slug": "leo-34586930-6930",
    "category": "power-weeder-spare-parts",
    "name": "KrishiGears Cast Iron Clutch Brush Cutter - Petrol/Diesel",
    "model": "KG-SP-CLUTCH-BC",
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
      "Genuine OEM-spec replacement spare parts procured per order"
    ],
    "applications": [
      "Routine seasonal maintenance & overhaul",
      "Field breakdown repair & component replacement"
    ],
    "benefits": [
      "OEM dimensional specifications; verify measurements on your existing part before ordering",
      "High-carbon and heat-treated metallurgy for extended operating life",
      "Genuine replacement spare parts procured per order"
    ],
    "warranty": "12 months manufacturer warranty + KrishiGears after-sales service network.",
    "video": "",
    "hsn": "8407",
    "gst": 18
  },
  {
    "slug": "leo-34586928-6928",
    "category": "power-weeder-spare-parts",
    "name": "KrishiGears Carburetor For Brush Cutter Parts",
    "model": "KG-SP-CARB-BC",
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
      "Power Source": "Petrol / 2-Stroke",
      "Material": "Aluminium",
      "Usage/Application": "Brush Cutter",
      "Displacement": "25.4 cc",
      "Engine": "2-stroke / 4-stroke",
      "Pack Type": "Box",
      "Engine Compatibility": "43cc / 52cc 2-Stroke Engines"
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
      "Genuine OEM-spec replacement spare parts procured per order"
    ],
    "applications": [
      "Routine seasonal maintenance & overhaul",
      "Field breakdown repair & component replacement"
    ],
    "benefits": [
      "OEM dimensional specifications; verify measurements on your existing part before ordering",
      "High-carbon and heat-treated metallurgy for extended operating life",
      "Genuine replacement spare parts procured per order"
    ],
    "warranty": "12 months manufacturer warranty + KrishiGears after-sales service network.",
    "video": "",
    "hsn": "8407",
    "gst": 18
  },
  {
    "slug": "leo-34586965-6965",
    "category": "power-weeder-spare-parts",
    "name": "KrishiGears Tap N GO Brush Cutter - Petrol/Diesel",
    "model": "KG-SP-TAPNGO",
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
      "Genuine OEM-spec replacement spare parts procured per order"
    ],
    "applications": [
      "Routine seasonal maintenance & overhaul",
      "Field breakdown repair & component replacement"
    ],
    "benefits": [
      "OEM dimensional specifications; verify measurements on your existing part before ordering",
      "High-carbon and heat-treated metallurgy for extended operating life",
      "Genuine replacement spare parts procured per order"
    ],
    "warranty": "12 months manufacturer warranty + KrishiGears after-sales service network.",
    "video": "",
    "hsn": "8467",
    "gst": 18
  },
  {
    "slug": "leo-303454205-4205",
    "category": "power-weeder-spare-parts",
    "name": "KrishiGears Brush Cutter Trimmer Line",
    "model": "KG-SP-TRIM-LINE",
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
      "Genuine OEM-spec replacement spare parts procured per order"
    ],
    "applications": [
      "Routine seasonal maintenance & overhaul",
      "Field breakdown repair & component replacement"
    ],
    "benefits": [
      "OEM dimensional specifications; verify measurements on your existing part before ordering",
      "High-carbon and heat-treated metallurgy for extended operating life",
      "Genuine replacement spare parts procured per order"
    ],
    "warranty": "12 months manufacturer warranty + KrishiGears after-sales service network.",
    "video": "",
    "hsn": "8467",
    "gst": 18
  },
  {
    "slug": "leo-34586948-6948",
    "category": "power-weeder-spare-parts",
    "name": "KrishiGears Cast Iron Spark Plug Cap For Brush Cutter",
    "model": "KG-SP-SPARK-CAP",
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
      "Weight": "1.6 ounces",
      "Engine Compatibility": "Brush Cutter & Power Weeder Petrol Engines"
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
      "Genuine OEM-spec replacement spare parts procured per order"
    ],
    "applications": [
      "Routine seasonal maintenance & overhaul",
      "Field breakdown repair & component replacement"
    ],
    "benefits": [
      "OEM dimensional specifications; verify measurements on your existing part before ordering",
      "High-carbon and heat-treated metallurgy for extended operating life",
      "Genuine replacement spare parts procured per order"
    ],
    "warranty": "12 months manufacturer warranty + KrishiGears after-sales service network.",
    "video": "",
    "hsn": "8407",
    "gst": 18
  },
  {
    "slug": "leo-26277631-7631",
    "category": "power-weeder-spare-parts",
    "name": "KrishiGears Brush Cutter Spare Parts",
    "model": "KG-SP-BC-PARTS",
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
      "Genuine OEM-spec replacement spare parts procured per order"
    ],
    "applications": [
      "Routine seasonal maintenance & overhaul",
      "Field breakdown repair & component replacement"
    ],
    "benefits": [
      "OEM dimensional specifications; verify measurements on your existing part before ordering",
      "High-carbon and heat-treated metallurgy for extended operating life",
      "Genuine replacement spare parts procured per order"
    ],
    "warranty": "12 months manufacturer warranty + KrishiGears after-sales service network.",
    "video": "",
    "hsn": "8467",
    "gst": 18
  },
  {
    "slug": "leo-34586968-6968",
    "category": "power-weeder-spare-parts",
    "name": "KrishiGears 5 INCH 2 Tooth Brush Cutter Blade",
    "model": "KG-SP-BLD-2T",
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
      "Pack Type": "Box",
      "Compatibility": "Universal 20mm/25.4mm Arbor (Petrol & Cordless Trimmers)"
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
      "Genuine OEM-spec replacement spare parts procured per order"
    ],
    "applications": [
      "Routine seasonal maintenance & overhaul",
      "Field breakdown repair & component replacement"
    ],
    "benefits": [
      "OEM dimensional specifications; verify measurements on your existing part before ordering",
      "High-carbon and heat-treated metallurgy for extended operating life",
      "Genuine replacement spare parts procured per order"
    ],
    "warranty": "12 months manufacturer warranty + KrishiGears after-sales service network.",
    "video": "",
    "hsn": "8202",
    "gst": 18
  },
  {
    "slug": "leo-34586974-6974",
    "category": "power-weeder-spare-parts",
    "name": "KrishiGears 10 INCH HSS Brush Cutter Blades",
    "model": "KG-SP-BLD-10HSS",
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
      "Genuine OEM-spec replacement spare parts procured per order"
    ],
    "applications": [
      "Routine seasonal maintenance & overhaul",
      "Field breakdown repair & component replacement"
    ],
    "benefits": [
      "OEM dimensional specifications; verify measurements on your existing part before ordering",
      "High-carbon and heat-treated metallurgy for extended operating life",
      "Genuine replacement spare parts procured per order"
    ],
    "warranty": "12 months manufacturer warranty + KrishiGears after-sales service network.",
    "video": "",
    "hsn": "8202",
    "gst": 18
  },
  {
    "slug": "leo-34586983-6983",
    "category": "power-weeder-spare-parts",
    "name": "KrishiGears 10 INCH Silver 100 T Brush Cutter Blade",
    "model": "KG-SP-BLD-100T",
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
      "Genuine OEM-spec replacement spare parts procured per order"
    ],
    "applications": [
      "Routine seasonal maintenance & overhaul",
      "Field breakdown repair & component replacement"
    ],
    "benefits": [
      "OEM dimensional specifications; verify measurements on your existing part before ordering",
      "High-carbon and heat-treated metallurgy for extended operating life",
      "Genuine replacement spare parts procured per order"
    ],
    "warranty": "12 months manufacturer warranty + KrishiGears after-sales service network.",
    "video": "",
    "hsn": "8202",
    "gst": 18
  },
  {
    "slug": "leo-34586972-6972",
    "category": "power-weeder-spare-parts",
    "name": "KrishiGears 2 Tooth Brush Cutter Blade",
    "model": "KG-SP-BLD-2T-STD",
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
      "Genuine OEM-spec replacement spare parts procured per order"
    ],
    "applications": [
      "Routine seasonal maintenance & overhaul",
      "Field breakdown repair & component replacement"
    ],
    "benefits": [
      "OEM dimensional specifications; verify measurements on your existing part before ordering",
      "High-carbon and heat-treated metallurgy for extended operating life",
      "Genuine replacement spare parts procured per order"
    ],
    "warranty": "12 months manufacturer warranty + KrishiGears after-sales service network.",
    "video": "",
    "hsn": "8202",
    "gst": 18
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
      "Genuine OEM-spec replacement spare parts procured per order"
    ],
    "applications": [
      "Estate & farmhouse lawn maintenance",
      "Commercial sports grounds & turf care",
      "Resort landscaping & orchard pathways",
      "Park vegetation & grass management"
    ],
    "benefits": [
      "Even turf clipping with multi-stage height adjustment",
      "Heavy-gauge steel cutting deck engineered for rugged continuous operation",
      "High-capacity grass collector reduces manual bagging toil"
    ],
    "warranty": "12 months manufacturer warranty + KrishiGears after-sales service network.",
    "video": "https://www.youtube.com/watch?v=EsLWgk1cdIE",
    "hsn": "8433",
    "gst": 5
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
      "Genuine OEM-spec replacement spare parts procured per order"
    ],
    "applications": [
      "Estate & farmhouse lawn maintenance",
      "Commercial sports grounds & turf care",
      "Resort landscaping & orchard pathways",
      "Park vegetation & grass management"
    ],
    "benefits": [
      "Even turf clipping with multi-stage height adjustment",
      "Heavy-gauge steel cutting deck engineered for rugged continuous operation",
      "High-capacity grass collector reduces manual bagging toil"
    ],
    "warranty": "12 months manufacturer warranty + KrishiGears after-sales service network.",
    "video": "https://www.youtube.com/watch?v=EsLWgk1cdIE",
    "hsn": "8433",
    "gst": 5
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
      "Genuine OEM-spec replacement spare parts procured per order"
    ],
    "applications": [
      "Estate & farmhouse lawn maintenance",
      "Commercial sports grounds & turf care",
      "Resort landscaping & orchard pathways",
      "Park vegetation & grass management"
    ],
    "benefits": [
      "Even turf clipping with multi-stage height adjustment",
      "Heavy-gauge steel cutting deck engineered for rugged continuous operation",
      "High-capacity grass collector reduces manual bagging toil"
    ],
    "warranty": "12 months manufacturer warranty + KrishiGears after-sales service network.",
    "video": "https://www.youtube.com/watch?v=EsLWgk1cdIE",
    "hsn": "8433",
    "gst": 5
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
      "Genuine OEM-spec replacement spare parts procured per order"
    ],
    "applications": [
      "Estate & farmhouse lawn maintenance",
      "Commercial sports grounds & turf care",
      "Resort landscaping & orchard pathways",
      "Park vegetation & grass management"
    ],
    "benefits": [
      "Even turf clipping with multi-stage height adjustment",
      "Heavy-gauge steel cutting deck engineered for rugged continuous operation",
      "High-capacity grass collector reduces manual bagging toil"
    ],
    "warranty": "12 months manufacturer warranty + KrishiGears after-sales service network.",
    "video": "https://www.youtube.com/watch?v=EsLWgk1cdIE",
    "hsn": "8433",
    "gst": 5
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
      "Genuine OEM-spec replacement spare parts procured per order"
    ],
    "applications": [
      "Estate & farmhouse lawn maintenance",
      "Commercial sports grounds & turf care",
      "Resort landscaping & orchard pathways",
      "Park vegetation & grass management"
    ],
    "benefits": [
      "Even turf clipping with multi-stage height adjustment",
      "Heavy-gauge steel cutting deck engineered for rugged continuous operation",
      "High-capacity grass collector reduces manual bagging toil"
    ],
    "warranty": "12 months manufacturer warranty + KrishiGears after-sales service network.",
    "video": "https://www.youtube.com/watch?v=EsLWgk1cdIE",
    "hsn": "8433",
    "gst": 5
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
      "Genuine OEM-spec replacement spare parts procured per order"
    ],
    "applications": [
      "Estate & farmhouse lawn maintenance",
      "Commercial sports grounds & turf care",
      "Resort landscaping & orchard pathways",
      "Park vegetation & grass management"
    ],
    "benefits": [
      "Even turf clipping with multi-stage height adjustment",
      "Heavy-gauge steel cutting deck engineered for rugged continuous operation",
      "High-capacity grass collector reduces manual bagging toil"
    ],
    "warranty": "12 months manufacturer warranty + KrishiGears after-sales service network.",
    "video": "https://www.youtube.com/watch?v=EsLWgk1cdIE",
    "hsn": "8433",
    "gst": 5
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
      "Genuine OEM-spec replacement spare parts procured per order"
    ],
    "applications": [
      "Estate & farmhouse lawn maintenance",
      "Commercial sports grounds & turf care",
      "Resort landscaping & orchard pathways",
      "Park vegetation & grass management"
    ],
    "benefits": [
      "Even turf clipping with multi-stage height adjustment",
      "Heavy-gauge steel cutting deck engineered for rugged continuous operation",
      "High-capacity grass collector reduces manual bagging toil"
    ],
    "warranty": "12 months manufacturer warranty + KrishiGears after-sales service network.",
    "video": "https://www.youtube.com/watch?v=EsLWgk1cdIE",
    "hsn": "8433",
    "gst": 5
  },
  {
    "slug": "ri-394-8942",
    "category": "lawn-mowers",
    "name": "KrishiGears Rotary Lawn Mower Model 394 - Petrol",
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
      "Genuine OEM-spec replacement spare parts procured per order"
    ],
    "applications": [
      "Estate & farmhouse lawn maintenance",
      "Commercial sports grounds & turf care",
      "Resort landscaping & orchard pathways",
      "Park vegetation & grass management"
    ],
    "benefits": [
      "Even turf clipping with multi-stage height adjustment",
      "Heavy-gauge steel cutting deck engineered for rugged continuous operation",
      "High-capacity grass collector reduces manual bagging toil"
    ],
    "warranty": "12 months manufacturer warranty + KrishiGears after-sales service network.",
    "video": "https://www.youtube.com/watch?v=EsLWgk1cdIE",
    "hsn": "8433",
    "gst": 5
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
      "Genuine OEM-spec replacement spare parts procured per order"
    ],
    "applications": [
      "Estate & farmhouse lawn maintenance",
      "Commercial sports grounds & turf care",
      "Resort landscaping & orchard pathways",
      "Park vegetation & grass management"
    ],
    "benefits": [
      "Even turf clipping with multi-stage height adjustment",
      "Heavy-gauge steel cutting deck engineered for rugged continuous operation",
      "High-capacity grass collector reduces manual bagging toil"
    ],
    "warranty": "12 months manufacturer warranty + KrishiGears after-sales service network.",
    "video": "https://www.youtube.com/watch?v=EsLWgk1cdIE",
    "hsn": "8433",
    "gst": 5
  },
  {
    "slug": "leo-0385-8277",
    "category": "lawn-mowers",
    "name": "KrishiGears Power Lawn Mower Model 0385",
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
      "Genuine OEM-spec replacement spare parts procured per order"
    ],
    "applications": [
      "Estate & farmhouse lawn maintenance",
      "Commercial sports grounds & turf care",
      "Resort landscaping & orchard pathways",
      "Park vegetation & grass management"
    ],
    "benefits": [
      "Even turf clipping with multi-stage height adjustment",
      "Heavy-gauge steel cutting deck engineered for rugged continuous operation",
      "High-capacity grass collector reduces manual bagging toil"
    ],
    "warranty": "12 months manufacturer warranty + KrishiGears after-sales service network.",
    "video": "https://www.youtube.com/watch?v=EsLWgk1cdIE",
    "hsn": "8433",
    "gst": 5
  },
  {
    "slug": "ri-332541464-1464",
    "category": "lawn-mowers",
    "name": "KrishiGears Rotary Lawn Mower (7 HP) - Petrol",
    "model": "KG-LM-7HP-PETROL",
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
      "Genuine OEM-spec replacement spare parts procured per order"
    ],
    "applications": [
      "Estate & farmhouse lawn maintenance",
      "Commercial sports grounds & turf care",
      "Resort landscaping & orchard pathways",
      "Park vegetation & grass management"
    ],
    "benefits": [
      "Even turf clipping with multi-stage height adjustment",
      "Heavy-gauge steel cutting deck engineered for rugged continuous operation",
      "High-capacity grass collector reduces manual bagging toil"
    ],
    "warranty": "12 months manufacturer warranty + KrishiGears after-sales service network.",
    "video": "",
    "hsn": "8433",
    "gst": 5
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
      "Genuine OEM-spec replacement spare parts procured per order"
    ],
    "applications": [
      "Estate & farmhouse lawn maintenance",
      "Commercial sports grounds & turf care",
      "Resort landscaping & orchard pathways",
      "Park vegetation & grass management"
    ],
    "benefits": [
      "Even turf clipping with multi-stage height adjustment",
      "Heavy-gauge steel cutting deck engineered for rugged continuous operation",
      "High-capacity grass collector reduces manual bagging toil"
    ],
    "warranty": "12 months manufacturer warranty + KrishiGears after-sales service network.",
    "video": "https://www.youtube.com/watch?v=EsLWgk1cdIE",
    "hsn": "8433",
    "gst": 5
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
      "Genuine OEM-spec replacement spare parts procured per order"
    ],
    "applications": [
      "Estate & farmhouse lawn maintenance",
      "Commercial sports grounds & turf care",
      "Resort landscaping & orchard pathways",
      "Park vegetation & grass management"
    ],
    "benefits": [
      "Even turf clipping with multi-stage height adjustment",
      "Heavy-gauge steel cutting deck engineered for rugged continuous operation",
      "High-capacity grass collector reduces manual bagging toil"
    ],
    "warranty": "12 months manufacturer warranty + KrishiGears after-sales service network.",
    "video": "",
    "hsn": "8433",
    "gst": 5
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
      "Genuine OEM-spec replacement spare parts procured per order"
    ],
    "applications": [
      "Estate & farmhouse lawn maintenance",
      "Commercial sports grounds & turf care",
      "Resort landscaping & orchard pathways",
      "Park vegetation & grass management"
    ],
    "benefits": [
      "Even turf clipping with multi-stage height adjustment",
      "Heavy-gauge steel cutting deck engineered for rugged continuous operation",
      "High-capacity grass collector reduces manual bagging toil"
    ],
    "warranty": "12 months manufacturer warranty + KrishiGears after-sales service network.",
    "video": "https://www.youtube.com/watch?v=EsLWgk1cdIE",
    "hsn": "8433",
    "gst": 5
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
      "Genuine OEM-spec replacement spare parts procured per order"
    ],
    "applications": [
      "Estate & farmhouse lawn maintenance",
      "Commercial sports grounds & turf care",
      "Resort landscaping & orchard pathways",
      "Park vegetation & grass management"
    ],
    "benefits": [
      "Even turf clipping with multi-stage height adjustment",
      "Heavy-gauge steel cutting deck engineered for rugged continuous operation",
      "High-capacity grass collector reduces manual bagging toil"
    ],
    "warranty": "12 months manufacturer warranty + KrishiGears after-sales service network.",
    "video": "https://www.youtube.com/watch?v=EsLWgk1cdIE",
    "hsn": "8433",
    "gst": 5
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
      "Genuine OEM-spec replacement spare parts procured per order"
    ],
    "applications": [
      "Estate & farmhouse lawn maintenance",
      "Commercial sports grounds & turf care",
      "Resort landscaping & orchard pathways",
      "Park vegetation & grass management"
    ],
    "benefits": [
      "Even turf clipping with multi-stage height adjustment",
      "Heavy-gauge steel cutting deck engineered for rugged continuous operation",
      "High-capacity grass collector reduces manual bagging toil"
    ],
    "warranty": "12 months manufacturer warranty + KrishiGears after-sales service network.",
    "video": "https://www.youtube.com/watch?v=EsLWgk1cdIE",
    "hsn": "8433",
    "gst": 5
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
      "Genuine OEM-spec replacement spare parts procured per order"
    ],
    "applications": [
      "Estate & farmhouse lawn maintenance",
      "Commercial sports grounds & turf care",
      "Resort landscaping & orchard pathways",
      "Park vegetation & grass management"
    ],
    "benefits": [
      "Even turf clipping with multi-stage height adjustment",
      "Heavy-gauge steel cutting deck engineered for rugged continuous operation",
      "High-capacity grass collector reduces manual bagging toil"
    ],
    "warranty": "12 months manufacturer warranty + KrishiGears after-sales service network.",
    "video": "",
    "hsn": "8433",
    "gst": 5
  },
  {
    "slug": "ri-332551977-1977",
    "category": "lawn-mowers",
    "name": "KrishiGears 45cm 10mm Manual Cutting Lawn Mower (1 HP)",
    "model": "KG-LM-MANUAL-1HP",
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
      "Genuine OEM-spec replacement spare parts procured per order"
    ],
    "applications": [
      "Estate & farmhouse lawn maintenance",
      "Commercial sports grounds & turf care",
      "Resort landscaping & orchard pathways",
      "Park vegetation & grass management"
    ],
    "benefits": [
      "Even turf clipping with multi-stage height adjustment",
      "Heavy-gauge steel cutting deck engineered for rugged continuous operation",
      "High-capacity grass collector reduces manual bagging toil"
    ],
    "warranty": "12 months manufacturer warranty + KrishiGears after-sales service network.",
    "video": "",
    "hsn": "8433",
    "gst": 5
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
      "Genuine OEM-spec replacement spare parts procured per order"
    ],
    "applications": [
      "Estate & farmhouse lawn maintenance",
      "Commercial sports grounds & turf care",
      "Resort landscaping & orchard pathways",
      "Park vegetation & grass management"
    ],
    "benefits": [
      "Even turf clipping with multi-stage height adjustment",
      "Heavy-gauge steel cutting deck engineered for rugged continuous operation",
      "High-capacity grass collector reduces manual bagging toil"
    ],
    "warranty": "12 months manufacturer warranty + KrishiGears after-sales service network.",
    "video": "",
    "hsn": "8433",
    "gst": 5
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
      "Genuine OEM-spec replacement spare parts procured per order"
    ],
    "applications": [
      "Estate & farmhouse lawn maintenance",
      "Commercial sports grounds & turf care",
      "Resort landscaping & orchard pathways",
      "Park vegetation & grass management"
    ],
    "benefits": [
      "Even turf clipping with multi-stage height adjustment",
      "Heavy-gauge steel cutting deck engineered for rugged continuous operation",
      "High-capacity grass collector reduces manual bagging toil"
    ],
    "warranty": "12 months manufacturer warranty + KrishiGears after-sales service network.",
    "video": "",
    "hsn": "8433",
    "gst": 5
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
      "Genuine OEM-spec replacement spare parts procured per order"
    ],
    "applications": [
      "Estate & farmhouse lawn maintenance",
      "Commercial sports grounds & turf care",
      "Resort landscaping & orchard pathways",
      "Park vegetation & grass management"
    ],
    "benefits": [
      "Even turf clipping with multi-stage height adjustment",
      "Heavy-gauge steel cutting deck engineered for rugged continuous operation",
      "High-capacity grass collector reduces manual bagging toil"
    ],
    "warranty": "12 months manufacturer warranty + KrishiGears after-sales service network.",
    "video": "",
    "hsn": "8433",
    "gst": 5
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
      "Genuine OEM-spec replacement spare parts procured per order"
    ],
    "applications": [
      "Estate & farmhouse lawn maintenance",
      "Commercial sports grounds & turf care",
      "Resort landscaping & orchard pathways",
      "Park vegetation & grass management"
    ],
    "benefits": [
      "Even turf clipping with multi-stage height adjustment",
      "Heavy-gauge steel cutting deck engineered for rugged continuous operation",
      "High-capacity grass collector reduces manual bagging toil"
    ],
    "warranty": "12 months manufacturer warranty + KrishiGears after-sales service network.",
    "video": "",
    "hsn": "8433",
    "gst": 5
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
      "Genuine OEM-spec replacement spare parts procured per order"
    ],
    "applications": [
      "Estate & farmhouse lawn maintenance",
      "Commercial sports grounds & turf care",
      "Resort landscaping & orchard pathways",
      "Park vegetation & grass management"
    ],
    "benefits": [
      "Even turf clipping with multi-stage height adjustment",
      "Heavy-gauge steel cutting deck engineered for rugged continuous operation",
      "High-capacity grass collector reduces manual bagging toil"
    ],
    "warranty": "12 months manufacturer warranty + KrishiGears after-sales service network.",
    "video": "https://www.youtube.com/watch?v=EsLWgk1cdIE",
    "hsn": "8433",
    "gst": 5
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
      "Genuine OEM-spec replacement spare parts procured per order"
    ],
    "applications": [
      "Estate & farmhouse lawn maintenance",
      "Commercial sports grounds & turf care",
      "Resort landscaping & orchard pathways",
      "Park vegetation & grass management"
    ],
    "benefits": [
      "Even turf clipping with multi-stage height adjustment",
      "Heavy-gauge steel cutting deck engineered for rugged continuous operation",
      "High-capacity grass collector reduces manual bagging toil"
    ],
    "warranty": "12 months manufacturer warranty + KrishiGears after-sales service network.",
    "video": "https://www.youtube.com/watch?v=EsLWgk1cdIE",
    "hsn": "8433",
    "gst": 5
  },
  {
    "slug": "leo-20402307-2307",
    "category": "farm-machinery",
    "name": "KrishiGears Garden Roller",
    "model": "KG-GR-ROLLER",
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
      "Genuine OEM-spec replacement spare parts procured per order"
    ],
    "applications": [
      "Commercial farm maintenance",
      "Post-harvest residue management",
      "Rural enterprise machinery operations"
    ],
    "benefits": [
      "Heavy-duty commercial durability",
      "Direct factory wholesale pricing with GST billing",
      "Readily available OEM replacement spare parts"
    ],
    "warranty": "12 months manufacturer warranty + KrishiGears after-sales service network.",
    "video": "https://www.youtube.com/watch?v=EsLWgk1cdIE",
    "hsn": "8432",
    "gst": 5
  },
  {
    "slug": "leo-382-8975",
    "category": "lawn-mowers",
    "name": "KrishiGears Roller Type Petrol Lawn Mower Model - 382",
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
      "Genuine OEM-spec replacement spare parts procured per order"
    ],
    "applications": [
      "Estate & farmhouse lawn maintenance",
      "Commercial sports grounds & turf care",
      "Resort landscaping & orchard pathways",
      "Park vegetation & grass management"
    ],
    "benefits": [
      "Even turf clipping with multi-stage height adjustment",
      "Heavy-gauge steel cutting deck engineered for rugged continuous operation",
      "High-capacity grass collector reduces manual bagging toil"
    ],
    "warranty": "12 months manufacturer warranty + KrishiGears after-sales service network.",
    "video": "https://www.youtube.com/watch?v=EsLWgk1cdIE",
    "hsn": "8433",
    "gst": 5
  },
  {
    "slug": "leo-258558586-8586",
    "category": "lawn-mowers",
    "name": "KrishiGears Cub Cadet - Lx46 Fab Lawn Mower (20 HP)",
    "model": "KG-LM-LX46-FAB",
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
      "Genuine OEM-spec replacement spare parts procured per order"
    ],
    "applications": [
      "Estate & farmhouse lawn maintenance",
      "Commercial sports grounds & turf care",
      "Resort landscaping & orchard pathways",
      "Park vegetation & grass management"
    ],
    "benefits": [
      "Even turf clipping with multi-stage height adjustment",
      "Heavy-gauge steel cutting deck engineered for rugged continuous operation",
      "High-capacity grass collector reduces manual bagging toil"
    ],
    "warranty": "12 months manufacturer warranty + KrishiGears after-sales service network.",
    "video": "",
    "hsn": "8433",
    "gst": 5
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
      "Genuine OEM-spec replacement spare parts procured per order"
    ],
    "applications": [
      "Estate & farmhouse lawn maintenance",
      "Commercial sports grounds & turf care",
      "Resort landscaping & orchard pathways",
      "Park vegetation & grass management"
    ],
    "benefits": [
      "Even turf clipping with multi-stage height adjustment",
      "Heavy-gauge steel cutting deck engineered for rugged continuous operation",
      "High-capacity grass collector reduces manual bagging toil"
    ],
    "warranty": "12 months manufacturer warranty + KrishiGears after-sales service network.",
    "video": "https://www.youtube.com/watch?v=EsLWgk1cdIE",
    "hsn": "8433",
    "gst": 5
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
      "Genuine OEM-spec replacement spare parts procured per order"
    ],
    "applications": [
      "Estate & farmhouse lawn maintenance",
      "Commercial sports grounds & turf care",
      "Resort landscaping & orchard pathways",
      "Park vegetation & grass management"
    ],
    "benefits": [
      "Even turf clipping with multi-stage height adjustment",
      "Heavy-gauge steel cutting deck engineered for rugged continuous operation",
      "High-capacity grass collector reduces manual bagging toil"
    ],
    "warranty": "12 months manufacturer warranty + KrishiGears after-sales service network.",
    "video": "",
    "hsn": "8433",
    "gst": 5
  },
  {
    "slug": "leo-296052269-2269",
    "category": "brush-cutters",
    "name": "KrishiGears Wheel String Trimmer (1.0 kW) - Petrol",
    "model": "KG-ST-1KW-PETROL",
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
      "Genuine OEM-spec replacement spare parts procured per order"
    ],
    "applications": [
      "Crop harvesting (Wheat, Paddy, Mustard)",
      "Orchard grass & weed trimming",
      "Fodder and green grass cutting",
      "Field border & bund clearing"
    ],
    "benefits": [
      "Replaces 6 to 8 manual farm laborers during harvesting season",
      "Interchangeable blade attachments (2T, 3T, 80T carbide, tap-n-go)",
      "Ergonomic backpack / shoulder harness reduces operator fatigue"
    ],
    "warranty": "12 months manufacturer warranty + KrishiGears after-sales service network.",
    "video": "https://www.youtube.com/watch?v=EsLWgk1cdIE",
    "hsn": "8467",
    "gst": 18
  },
  {
    "slug": "leo-297386313-6313",
    "category": "lawn-mowers",
    "name": "KrishiGears Rotary Mower Self Propelled 225cc",
    "model": "KG-LM-SP-225CC",
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
      "Genuine OEM-spec replacement spare parts procured per order"
    ],
    "applications": [
      "Estate & farmhouse lawn maintenance",
      "Commercial sports grounds & turf care",
      "Resort landscaping & orchard pathways",
      "Park vegetation & grass management"
    ],
    "benefits": [
      "Even turf clipping with multi-stage height adjustment",
      "Heavy-gauge steel cutting deck engineered for rugged continuous operation",
      "High-capacity grass collector reduces manual bagging toil"
    ],
    "warranty": "12 months manufacturer warranty + KrishiGears after-sales service network.",
    "video": "https://www.youtube.com/watch?v=EsLWgk1cdIE",
    "hsn": "8433",
    "gst": 5
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
    "price": 135000,
    "comparePrice": 155000,
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
      "Genuine OEM-spec replacement spare parts procured per order"
    ],
    "applications": [
      "Estate & farmhouse lawn maintenance",
      "Commercial sports grounds & turf care",
      "Resort landscaping & orchard pathways",
      "Park vegetation & grass management"
    ],
    "benefits": [
      "Even turf clipping with multi-stage height adjustment",
      "Heavy-gauge steel cutting deck engineered for rugged continuous operation",
      "High-capacity grass collector reduces manual bagging toil"
    ],
    "warranty": "12 months manufacturer warranty + KrishiGears after-sales service network.",
    "video": "https://www.youtube.com/watch?v=EsLWgk1cdIE",
    "hsn": "8433",
    "gst": 5
  },
  {
    "slug": "leo-pro-cut-950-4145",
    "category": "lawn-mowers",
    "name": "KrishiGears 15 Mm Model Pro Cut-950 Walk Behind Mowers (2.24 HP)",
    "model": "Pro Cut-950 Walk Behind Mowers",
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
      "Genuine OEM-spec replacement spare parts procured per order"
    ],
    "applications": [
      "Estate & farmhouse lawn maintenance",
      "Commercial sports grounds & turf care",
      "Resort landscaping & orchard pathways",
      "Park vegetation & grass management"
    ],
    "benefits": [
      "Even turf clipping with multi-stage height adjustment",
      "Heavy-gauge steel cutting deck engineered for rugged continuous operation",
      "High-capacity grass collector reduces manual bagging toil"
    ],
    "warranty": "12 months manufacturer warranty + KrishiGears after-sales service network.",
    "video": "",
    "hsn": "8433",
    "gst": 5
  },
  {
    "slug": "leo-model-rover-7967",
    "category": "lawn-mowers",
    "name": "KrishiGears 18 INCH Model ROVER-820 Petrol Walk Behind Mowers",
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
      "Genuine OEM-spec replacement spare parts procured per order"
    ],
    "applications": [
      "Estate & farmhouse lawn maintenance",
      "Commercial sports grounds & turf care",
      "Resort landscaping & orchard pathways",
      "Park vegetation & grass management"
    ],
    "benefits": [
      "Even turf clipping with multi-stage height adjustment",
      "Heavy-gauge steel cutting deck engineered for rugged continuous operation",
      "High-capacity grass collector reduces manual bagging toil"
    ],
    "warranty": "12 months manufacturer warranty + KrishiGears after-sales service network.",
    "video": "",
    "hsn": "8433",
    "gst": 5
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
      "Genuine OEM-spec replacement spare parts procured per order"
    ],
    "applications": [
      "Estate & farmhouse lawn maintenance",
      "Commercial sports grounds & turf care",
      "Resort landscaping & orchard pathways",
      "Park vegetation & grass management"
    ],
    "benefits": [
      "Even turf clipping with multi-stage height adjustment",
      "Heavy-gauge steel cutting deck engineered for rugged continuous operation",
      "High-capacity grass collector reduces manual bagging toil"
    ],
    "warranty": "12 months manufacturer warranty + KrishiGears after-sales service network.",
    "video": "https://www.youtube.com/watch?v=EsLWgk1cdIE",
    "hsn": "8433",
    "gst": 5
  },
  {
    "slug": "leo-322540525-0525",
    "category": "brush-cutters",
    "name": "KrishiGears Wheeled String Trimmer (4.5 kW) - Petrol",
    "model": "KG-ST-4500P",
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
      "Power Output": "4.5 kW",
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
      "Genuine OEM-spec replacement spare parts procured per order"
    ],
    "applications": [
      "Crop harvesting (Wheat, Paddy, Mustard)",
      "Orchard grass & weed trimming",
      "Fodder and green grass cutting",
      "Field border & bund clearing"
    ],
    "benefits": [
      "Replaces 6 to 8 manual farm laborers during harvesting season",
      "Interchangeable blade attachments (2T, 3T, 80T carbide, tap-n-go)",
      "Ergonomic backpack / shoulder harness reduces operator fatigue"
    ],
    "warranty": "12 months manufacturer warranty + KrishiGears after-sales service network.",
    "video": "https://www.youtube.com/watch?v=EsLWgk1cdIE",
    "hsn": "8467",
    "gst": 18
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
      "Genuine OEM-spec replacement spare parts procured per order"
    ],
    "applications": [
      "Estate & farmhouse lawn maintenance",
      "Commercial sports grounds & turf care",
      "Resort landscaping & orchard pathways",
      "Park vegetation & grass management"
    ],
    "benefits": [
      "Even turf clipping with multi-stage height adjustment",
      "Heavy-gauge steel cutting deck engineered for rugged continuous operation",
      "High-capacity grass collector reduces manual bagging toil"
    ],
    "warranty": "12 months manufacturer warranty + KrishiGears after-sales service network.",
    "video": "https://www.youtube.com/watch?v=EsLWgk1cdIE",
    "hsn": "8433",
    "gst": 5
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
      "Genuine OEM-spec replacement spare parts procured per order"
    ],
    "applications": [
      "Estate & farmhouse lawn maintenance",
      "Commercial sports grounds & turf care",
      "Resort landscaping & orchard pathways",
      "Park vegetation & grass management"
    ],
    "benefits": [
      "Even turf clipping with multi-stage height adjustment",
      "Heavy-gauge steel cutting deck engineered for rugged continuous operation",
      "High-capacity grass collector reduces manual bagging toil"
    ],
    "warranty": "12 months manufacturer warranty + KrishiGears after-sales service network.",
    "video": "https://www.youtube.com/watch?v=EsLWgk1cdIE",
    "hsn": "8433",
    "gst": 5
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
      "Genuine OEM-spec replacement spare parts procured per order"
    ],
    "applications": [
      "Estate & farmhouse lawn maintenance",
      "Commercial sports grounds & turf care",
      "Resort landscaping & orchard pathways",
      "Park vegetation & grass management"
    ],
    "benefits": [
      "Even turf clipping with multi-stage height adjustment",
      "Heavy-gauge steel cutting deck engineered for rugged continuous operation",
      "High-capacity grass collector reduces manual bagging toil"
    ],
    "warranty": "12 months manufacturer warranty + KrishiGears after-sales service network.",
    "video": "https://www.youtube.com/watch?v=EsLWgk1cdIE",
    "hsn": "8433",
    "gst": 5
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
      "Genuine OEM-spec replacement spare parts procured per order"
    ],
    "applications": [
      "Crop harvesting (Wheat, Paddy, Mustard)",
      "Orchard grass & weed trimming",
      "Fodder and green grass cutting",
      "Field border & bund clearing"
    ],
    "benefits": [
      "Replaces 6 to 8 manual farm laborers during harvesting season",
      "Interchangeable blade attachments (2T, 3T, 80T carbide, tap-n-go)",
      "Ergonomic backpack / shoulder harness reduces operator fatigue"
    ],
    "warranty": "12 months manufacturer warranty + KrishiGears after-sales service network.",
    "video": "https://www.youtube.com/watch?v=EsLWgk1cdIE",
    "hsn": "8467",
    "gst": 18
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
      "Genuine OEM-spec replacement spare parts procured per order"
    ],
    "applications": [
      "Crop harvesting (Wheat, Paddy, Mustard)",
      "Orchard grass & weed trimming",
      "Fodder and green grass cutting",
      "Field border & bund clearing"
    ],
    "benefits": [
      "Replaces 6 to 8 manual farm laborers during harvesting season",
      "Interchangeable blade attachments (2T, 3T, 80T carbide, tap-n-go)",
      "Ergonomic backpack / shoulder harness reduces operator fatigue"
    ],
    "warranty": "12 months manufacturer warranty + KrishiGears after-sales service network.",
    "video": "https://www.youtube.com/watch?v=EsLWgk1cdIE",
    "hsn": "8467",
    "gst": 18
  },
  {
    "slug": "leo-297263000-3000",
    "category": "brush-cutters",
    "name": "KrishiGears Back Pack Brushcutter Gx- 50 (2.0 kW) - 4 stroke",
    "model": "KG-BC-GX50-BP",
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
      "Genuine OEM-spec replacement spare parts procured per order"
    ],
    "applications": [
      "Crop harvesting (Wheat, Paddy, Mustard)",
      "Orchard grass & weed trimming",
      "Fodder and green grass cutting",
      "Field border & bund clearing"
    ],
    "benefits": [
      "Replaces 6 to 8 manual farm laborers during harvesting season",
      "Interchangeable blade attachments (2T, 3T, 80T carbide, tap-n-go)",
      "Ergonomic backpack / shoulder harness reduces operator fatigue"
    ],
    "warranty": "12 months manufacturer warranty + KrishiGears after-sales service network.",
    "video": "https://www.youtube.com/watch?v=EsLWgk1cdIE",
    "hsn": "8467",
    "gst": 18
  },
  {
    "slug": "leo-297380561-0561",
    "category": "brush-cutters",
    "name": "KrishiGears Cordless Brush Cutter (1.5 HP) - battery operated",
    "model": "KG-BC-CORDLESS-15",
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
      "Genuine OEM-spec replacement spare parts procured per order"
    ],
    "applications": [
      "Crop harvesting (Wheat, Paddy, Mustard)",
      "Orchard grass & weed trimming",
      "Fodder and green grass cutting",
      "Field border & bund clearing"
    ],
    "benefits": [
      "Replaces 6 to 8 manual farm laborers during harvesting season",
      "Interchangeable blade attachments (2T, 3T, 80T carbide, tap-n-go)",
      "Ergonomic backpack / shoulder harness reduces operator fatigue"
    ],
    "warranty": "12 months manufacturer warranty + KrishiGears after-sales service network.",
    "video": "https://www.youtube.com/watch?v=EsLWgk1cdIE",
    "hsn": "8467",
    "gst": 18
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
      "Genuine OEM-spec replacement spare parts procured per order"
    ],
    "applications": [
      "Crop harvesting (Wheat, Paddy, Mustard)",
      "Orchard grass & weed trimming",
      "Fodder and green grass cutting",
      "Field border & bund clearing"
    ],
    "benefits": [
      "Replaces 6 to 8 manual farm laborers during harvesting season",
      "Interchangeable blade attachments (2T, 3T, 80T carbide, tap-n-go)",
      "Ergonomic backpack / shoulder harness reduces operator fatigue"
    ],
    "warranty": "12 months manufacturer warranty + KrishiGears after-sales service network.",
    "video": "https://www.youtube.com/watch?v=EsLWgk1cdIE",
    "hsn": "8467",
    "gst": 18
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
      "Genuine OEM-spec replacement spare parts procured per order"
    ],
    "applications": [
      "Crop harvesting (Wheat, Paddy, Mustard)",
      "Orchard grass & weed trimming",
      "Fodder and green grass cutting",
      "Field border & bund clearing"
    ],
    "benefits": [
      "Replaces 6 to 8 manual farm laborers during harvesting season",
      "Interchangeable blade attachments (2T, 3T, 80T carbide, tap-n-go)",
      "Ergonomic backpack / shoulder harness reduces operator fatigue"
    ],
    "warranty": "12 months manufacturer warranty + KrishiGears after-sales service network.",
    "video": "https://www.youtube.com/watch?v=EsLWgk1cdIE",
    "hsn": "8467",
    "gst": 18
  },
  {
    "slug": "leo-297279169-9169",
    "category": "brush-cutters",
    "name": "KrishiGears Mitsubishi Powered Brushcutter - Tu-43 (2.1hp) - 2 Stroke",
    "model": "KG-BC-TU43-SP",
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
      "Genuine OEM-spec replacement spare parts procured per order"
    ],
    "applications": [
      "Crop harvesting (Wheat, Paddy, Mustard)",
      "Orchard grass & weed trimming",
      "Fodder and green grass cutting",
      "Field border & bund clearing"
    ],
    "benefits": [
      "Replaces 6 to 8 manual farm laborers during harvesting season",
      "Interchangeable blade attachments (2T, 3T, 80T carbide, tap-n-go)",
      "Ergonomic backpack / shoulder harness reduces operator fatigue"
    ],
    "warranty": "12 months manufacturer warranty + KrishiGears after-sales service network.",
    "video": "",
    "hsn": "8467",
    "gst": 18
  },
  {
    "slug": "leo-332557074-7074",
    "category": "brush-cutters",
    "name": "KrishiGears Wheeled String Trimmer (4.5 kW) - Petrol",
    "model": "KG-WST-4500P",
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
      "Power Output": "4.5 kW",
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
      "Genuine OEM-spec replacement spare parts procured per order"
    ],
    "applications": [
      "Crop harvesting (Wheat, Paddy, Mustard)",
      "Orchard grass & weed trimming",
      "Fodder and green grass cutting",
      "Field border & bund clearing"
    ],
    "benefits": [
      "Replaces 6 to 8 manual farm laborers during harvesting season",
      "Interchangeable blade attachments (2T, 3T, 80T carbide, tap-n-go)",
      "Ergonomic backpack / shoulder harness reduces operator fatigue"
    ],
    "warranty": "12 months manufacturer warranty + KrishiGears after-sales service network.",
    "video": "",
    "hsn": "8467",
    "gst": 18
  },
  {
    "slug": "leo-253009174-9174",
    "category": "brush-cutters",
    "name": "KrishiGears Wheel Type Brushcutter Cg - 530 (2.4 HP) - 2 Stroke",
    "model": "KG-BC-WHEEL-530",
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
      "Genuine OEM-spec replacement spare parts procured per order"
    ],
    "applications": [
      "Crop harvesting (Wheat, Paddy, Mustard)",
      "Orchard grass & weed trimming",
      "Fodder and green grass cutting",
      "Field border & bund clearing"
    ],
    "benefits": [
      "Replaces 6 to 8 manual farm laborers during harvesting season",
      "Interchangeable blade attachments (2T, 3T, 80T carbide, tap-n-go)",
      "Ergonomic backpack / shoulder harness reduces operator fatigue"
    ],
    "warranty": "12 months manufacturer warranty + KrishiGears after-sales service network.",
    "video": "https://www.youtube.com/watch?v=EsLWgk1cdIE",
    "hsn": "8467",
    "gst": 18
  },
  {
    "slug": "leo-34586937-6937",
    "category": "brush-cutters",
    "name": "KrishiGears Ignition Coil For Brush Cutter",
    "model": "KG-SP-IGN-COIL",
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
      "Genuine OEM-spec replacement spare parts procured per order"
    ],
    "applications": [
      "Crop harvesting (Wheat, Paddy, Mustard)",
      "Orchard grass & weed trimming",
      "Fodder and green grass cutting",
      "Field border & bund clearing"
    ],
    "benefits": [
      "Replaces 6 to 8 manual farm laborers during harvesting season",
      "Interchangeable blade attachments (2T, 3T, 80T carbide, tap-n-go)",
      "Ergonomic backpack / shoulder harness reduces operator fatigue"
    ],
    "warranty": "12 months manufacturer warranty + KrishiGears after-sales service network.",
    "video": "",
    "hsn": "8467",
    "gst": 18
  },
  {
    "slug": "leo-94097441-7441",
    "category": "brush-cutters",
    "name": "KrishiGears Side Pack Brushcutter Cg-530 (2.4 HP) - 2 stroke",
    "model": "KG-BC-CG530-SP2",
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
      "Genuine OEM-spec replacement spare parts procured per order"
    ],
    "applications": [
      "Crop harvesting (Wheat, Paddy, Mustard)",
      "Orchard grass & weed trimming",
      "Fodder and green grass cutting",
      "Field border & bund clearing"
    ],
    "benefits": [
      "Replaces 6 to 8 manual farm laborers during harvesting season",
      "Interchangeable blade attachments (2T, 3T, 80T carbide, tap-n-go)",
      "Ergonomic backpack / shoulder harness reduces operator fatigue"
    ],
    "warranty": "12 months manufacturer warranty + KrishiGears after-sales service network.",
    "video": "https://www.youtube.com/watch?v=EsLWgk1cdIE",
    "hsn": "8467",
    "gst": 18
  },
  {
    "slug": "leo-297280912-0912",
    "category": "brush-cutters",
    "name": "KrishiGears Wheel Type Brushcutter Gx-35 (1.3 HP) - 4 Stroke",
    "model": "KG-BC-GX35-WHEEL",
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
      "Genuine OEM-spec replacement spare parts procured per order"
    ],
    "applications": [
      "Crop harvesting (Wheat, Paddy, Mustard)",
      "Orchard grass & weed trimming",
      "Fodder and green grass cutting",
      "Field border & bund clearing"
    ],
    "benefits": [
      "Replaces 6 to 8 manual farm laborers during harvesting season",
      "Interchangeable blade attachments (2T, 3T, 80T carbide, tap-n-go)",
      "Ergonomic backpack / shoulder harness reduces operator fatigue"
    ],
    "warranty": "12 months manufacturer warranty + KrishiGears after-sales service network.",
    "video": "https://www.youtube.com/watch?v=EsLWgk1cdIE",
    "hsn": "8467",
    "gst": 18
  },
  {
    "slug": "leo-252814707-4707",
    "category": "brush-cutters",
    "name": "KrishiGears Back Pack Brushcutter Cg-530 (2.4 HP) - 2 Stroke",
    "model": "KG-BC-CG530-BP",
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
      "Genuine OEM-spec replacement spare parts procured per order"
    ],
    "applications": [
      "Crop harvesting (Wheat, Paddy, Mustard)",
      "Orchard grass & weed trimming",
      "Fodder and green grass cutting",
      "Field border & bund clearing"
    ],
    "benefits": [
      "Replaces 6 to 8 manual farm laborers during harvesting season",
      "Interchangeable blade attachments (2T, 3T, 80T carbide, tap-n-go)",
      "Ergonomic backpack / shoulder harness reduces operator fatigue"
    ],
    "warranty": "12 months manufacturer warranty + KrishiGears after-sales service network.",
    "video": "https://www.youtube.com/watch?v=EsLWgk1cdIE",
    "hsn": "8467",
    "gst": 18
  },
  {
    "slug": "leo-295837771-7771",
    "category": "brush-cutters",
    "name": "KrishiGears Back Pack Brushcutter CG-530 (52cc) - 2 Stroke",
    "model": "KG-BC-CG530-52CC",
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
      "Genuine OEM-spec replacement spare parts procured per order"
    ],
    "applications": [
      "Crop harvesting (Wheat, Paddy, Mustard)",
      "Orchard grass & weed trimming",
      "Fodder and green grass cutting",
      "Field border & bund clearing"
    ],
    "benefits": [
      "Replaces 6 to 8 manual farm laborers during harvesting season",
      "Interchangeable blade attachments (2T, 3T, 80T carbide, tap-n-go)",
      "Ergonomic backpack / shoulder harness reduces operator fatigue"
    ],
    "warranty": "12 months manufacturer warranty + KrishiGears after-sales service network.",
    "video": "https://www.youtube.com/watch?v=EsLWgk1cdIE",
    "hsn": "8467",
    "gst": 18
  },
  {
    "slug": "ri-297272678-2678",
    "category": "brush-cutters",
    "name": "KrishiGears Side Pack Brush cutter Cg-400 (2.6 HP 56 cc) - 2 Stroke",
    "model": "KG-BC-CG400-SP",
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
      "Genuine OEM-spec replacement spare parts procured per order"
    ],
    "applications": [
      "Crop harvesting (Wheat, Paddy, Mustard)",
      "Orchard grass & weed trimming",
      "Fodder and green grass cutting",
      "Field border & bund clearing"
    ],
    "benefits": [
      "Replaces 6 to 8 manual farm laborers during harvesting season",
      "Interchangeable blade attachments (2T, 3T, 80T carbide, tap-n-go)",
      "Ergonomic backpack / shoulder harness reduces operator fatigue"
    ],
    "warranty": "12 months manufacturer warranty + KrishiGears after-sales service network.",
    "video": "",
    "hsn": "8467",
    "gst": 18
  },
  {
    "slug": "leo-297381357-1357",
    "category": "brush-cutters",
    "name": "KrishiGears 20v Cordless Multi Tool Brush Cutter",
    "model": "KG-BC-20V-CORDLESS",
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
      "Genuine OEM-spec replacement spare parts procured per order"
    ],
    "applications": [
      "Crop harvesting (Wheat, Paddy, Mustard)",
      "Orchard grass & weed trimming",
      "Fodder and green grass cutting",
      "Field border & bund clearing"
    ],
    "benefits": [
      "Replaces 6 to 8 manual farm laborers during harvesting season",
      "Interchangeable blade attachments (2T, 3T, 80T carbide, tap-n-go)",
      "Ergonomic backpack / shoulder harness reduces operator fatigue"
    ],
    "warranty": "12 months manufacturer warranty + KrishiGears after-sales service network.",
    "video": "https://www.youtube.com/watch?v=EsLWgk1cdIE",
    "hsn": "8467",
    "gst": 18
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
      "Genuine OEM-spec replacement spare parts procured per order"
    ],
    "applications": [
      "Crop harvesting (Wheat, Paddy, Mustard)",
      "Orchard grass & weed trimming",
      "Fodder and green grass cutting",
      "Field border & bund clearing"
    ],
    "benefits": [
      "Replaces 6 to 8 manual farm laborers during harvesting season",
      "Interchangeable blade attachments (2T, 3T, 80T carbide, tap-n-go)",
      "Ergonomic backpack / shoulder harness reduces operator fatigue"
    ],
    "warranty": "12 months manufacturer warranty + KrishiGears after-sales service network.",
    "video": "https://www.youtube.com/watch?v=EsLWgk1cdIE",
    "hsn": "8467",
    "gst": 18
  },
  {
    "slug": "leo-296052723-2723",
    "category": "brush-cutters",
    "name": "KrishiGears Back Pack Brushcutter Cg-530 (2.4 HP) - 2 Stroke",
    "model": "KG-BC-CG530-BP2",
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
      "Genuine OEM-spec replacement spare parts procured per order"
    ],
    "applications": [
      "Crop harvesting (Wheat, Paddy, Mustard)",
      "Orchard grass & weed trimming",
      "Fodder and green grass cutting",
      "Field border & bund clearing"
    ],
    "benefits": [
      "Replaces 6 to 8 manual farm laborers during harvesting season",
      "Interchangeable blade attachments (2T, 3T, 80T carbide, tap-n-go)",
      "Ergonomic backpack / shoulder harness reduces operator fatigue"
    ],
    "warranty": "12 months manufacturer warranty + KrishiGears after-sales service network.",
    "video": "https://www.youtube.com/watch?v=EsLWgk1cdIE",
    "hsn": "8467",
    "gst": 18
  },
  {
    "slug": "leo-297262606-2606",
    "category": "brush-cutters",
    "name": "KrishiGears Side Pack Brushcutter Gx-50 (2 HP) - 4 Stroke",
    "model": "KG-BC-GX50-SP",
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
      "Genuine OEM-spec replacement spare parts procured per order"
    ],
    "applications": [
      "Crop harvesting (Wheat, Paddy, Mustard)",
      "Orchard grass & weed trimming",
      "Fodder and green grass cutting",
      "Field border & bund clearing"
    ],
    "benefits": [
      "Replaces 6 to 8 manual farm laborers during harvesting season",
      "Interchangeable blade attachments (2T, 3T, 80T carbide, tap-n-go)",
      "Ergonomic backpack / shoulder harness reduces operator fatigue"
    ],
    "warranty": "12 months manufacturer warranty + KrishiGears after-sales service network.",
    "video": "https://www.youtube.com/watch?v=EsLWgk1cdIE",
    "hsn": "8467",
    "gst": 18
  },
  {
    "slug": "leo-297262381-2381",
    "category": "brush-cutters",
    "name": "KrishiGears Back Pack Brushcutter Gx-35 (1.3 HP) - 4 Stroke",
    "model": "KG-BC-GX35-BP",
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
      "Genuine OEM-spec replacement spare parts procured per order"
    ],
    "applications": [
      "Crop harvesting (Wheat, Paddy, Mustard)",
      "Orchard grass & weed trimming",
      "Fodder and green grass cutting",
      "Field border & bund clearing"
    ],
    "benefits": [
      "Replaces 6 to 8 manual farm laborers during harvesting season",
      "Interchangeable blade attachments (2T, 3T, 80T carbide, tap-n-go)",
      "Ergonomic backpack / shoulder harness reduces operator fatigue"
    ],
    "warranty": "12 months manufacturer warranty + KrishiGears after-sales service network.",
    "video": "https://www.youtube.com/watch?v=EsLWgk1cdIE",
    "hsn": "8467",
    "gst": 18
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
      "Genuine OEM-spec replacement spare parts procured per order"
    ],
    "applications": [
      "Crop harvesting (Wheat, Paddy, Mustard)",
      "Orchard grass & weed trimming",
      "Fodder and green grass cutting",
      "Field border & bund clearing"
    ],
    "benefits": [
      "Replaces 6 to 8 manual farm laborers during harvesting season",
      "Interchangeable blade attachments (2T, 3T, 80T carbide, tap-n-go)",
      "Ergonomic backpack / shoulder harness reduces operator fatigue"
    ],
    "warranty": "12 months manufacturer warranty + KrishiGears after-sales service network.",
    "video": "https://www.youtube.com/watch?v=EsLWgk1cdIE",
    "hsn": "8467",
    "gst": 18
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
      "Genuine OEM-spec replacement spare parts procured per order"
    ],
    "applications": [
      "Cotton & Sugarcane inter-cultivation",
      "Vegetable row de-weeding & aeration",
      "Paddy wetland preparation (with cage wheels)",
      "Orchard basin tillage & fertilizer incorporation"
    ],
    "benefits": [
      "Cuts inter-cultivation labor cost by up to 70% in row crops",
      "High-torque de-weeding and soil aeration in tough Indian soils",
      "FMTTI / SRFMTTI compliant durability standard with full spare parts support"
    ],
    "warranty": "12 months manufacturer warranty + KrishiGears after-sales service network.",
    "video": "https://www.youtube.com/watch?v=KRJFfkK0eJM",
    "hsn": "8432",
    "gst": 5
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
      "Genuine OEM-spec replacement spare parts procured per order"
    ],
    "applications": [
      "Cotton & Sugarcane inter-cultivation",
      "Vegetable row de-weeding & aeration",
      "Paddy wetland preparation (with cage wheels)",
      "Orchard basin tillage & fertilizer incorporation"
    ],
    "benefits": [
      "Cuts inter-cultivation labor cost by up to 70% in row crops",
      "High-torque de-weeding and soil aeration in tough Indian soils",
      "FMTTI / SRFMTTI compliant durability standard with full spare parts support"
    ],
    "warranty": "12 months manufacturer warranty + KrishiGears after-sales service network.",
    "video": "https://www.youtube.com/watch?v=KRJFfkK0eJM",
    "hsn": "8432",
    "gst": 5
  },
  {
    "slug": "rly-cr-r50-b",
    "category": "crop-reapers",
    "name": "KrishiGears CR-R50-B Baffle Crop Reaper | 50cc 4-Stroke Petrol Paddy Harvester",
    "model": "CR-R50-B",
    "brand": "KrishiGears",
    "badges": [
      "Indicative Base Price",
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
      "Genuine OEM-spec replacement spare parts procured per order"
    ],
    "applications": [
      "Paddy (Rice) harvesting",
      "Wheat harvesting",
      "Soybean & mustard harvesting",
      "Fodder crop cutting"
    ],
    "benefits": [
      "Clean cutting with conveyor baffle system to eliminate grain loss",
      "Harvests up to 1 acre in under 2 hours",
      "Significant reduction in harvesting labor costs during peak season"
    ],
    "warranty": "12 months manufacturer warranty + KrishiGears after-sales service network.",
    "video": "https://www.youtube.com/watch?v=KRJFfkK0eJM",
    "hsn": "8433",
    "gst": 5,
    "priceNotice": "Indicative base price: confirmed quotation subject to cutter bar width and tractor/engine mounting specs."
  },
  {
    "slug": "rly-cr-r52-b",
    "category": "crop-reapers",
    "name": "KrishiGears CR-R52-B Baffle Crop Reaper | 52cc 2-Stroke Backpack Paddy Harvester",
    "model": "CR-R52-B",
    "brand": "KrishiGears",
    "badges": [
      "Indicative Base Price",
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
      "Genuine OEM-spec replacement spare parts procured per order"
    ],
    "applications": [
      "Paddy (Rice) harvesting",
      "Wheat harvesting",
      "Soybean & mustard harvesting",
      "Fodder crop cutting"
    ],
    "benefits": [
      "Clean cutting with conveyor baffle system to eliminate grain loss",
      "Harvests up to 1 acre in under 2 hours",
      "Significant reduction in harvesting labor costs during peak season"
    ],
    "warranty": "12 months manufacturer warranty + KrishiGears after-sales service network.",
    "video": "https://www.youtube.com/watch?v=KRJFfkK0eJM",
    "hsn": "8433",
    "gst": 5,
    "priceNotice": "Indicative base price: confirmed quotation subject to cutter bar width and tractor/engine mounting specs."
  },
  {
    "slug": "rly-cr-r52-s",
    "category": "crop-reapers",
    "name": "KrishiGears CR-R52-S Baffle Crop Reaper | 52cc 2-Stroke Petrol Paddy Harvester",
    "model": "CR-R52-S",
    "brand": "KrishiGears",
    "badges": [
      "Indicative Base Price",
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
      "Genuine OEM-spec replacement spare parts procured per order"
    ],
    "applications": [
      "Paddy (Rice) harvesting",
      "Wheat harvesting",
      "Soybean & mustard harvesting",
      "Fodder crop cutting"
    ],
    "benefits": [
      "Clean cutting with conveyor baffle system to eliminate grain loss",
      "Harvests up to 1 acre in under 2 hours",
      "Significant reduction in harvesting labor costs during peak season"
    ],
    "warranty": "12 months manufacturer warranty + KrishiGears after-sales service network.",
    "video": "https://www.youtube.com/watch?v=KRJFfkK0eJM",
    "hsn": "8433",
    "gst": 5,
    "priceNotice": "Indicative base price: confirmed quotation subject to cutter bar width and tractor/engine mounting specs."
  },
  {
    "slug": "rly-cr-r35-b",
    "category": "crop-reapers",
    "name": "KrishiGears CR-R35-B Baffle Crop Reaper | 35cc 4-Stroke Petrol Paddy Harvester",
    "model": "CR-R35-B",
    "brand": "KrishiGears",
    "badges": [
      "Indicative Base Price",
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
      "Genuine OEM-spec replacement spare parts procured per order"
    ],
    "applications": [
      "Paddy (Rice) harvesting",
      "Wheat harvesting",
      "Soybean & mustard harvesting",
      "Fodder crop cutting"
    ],
    "benefits": [
      "Clean cutting with conveyor baffle system to eliminate grain loss",
      "Harvests up to 1 acre in under 2 hours",
      "Significant reduction in harvesting labor costs during peak season"
    ],
    "warranty": "12 months manufacturer warranty + KrishiGears after-sales service network.",
    "video": "https://www.youtube.com/watch?v=KRJFfkK0eJM",
    "hsn": "8433",
    "gst": 5,
    "priceNotice": "Indicative base price: confirmed quotation subject to cutter bar width and tractor/engine mounting specs."
  },
  {
    "slug": "rly-cr-r35-s",
    "category": "crop-reapers",
    "name": "KrishiGears CR-R35-S Baffle Crop Reaper | 35cc 4-Stroke Petrol",
    "model": "CR-R35-S",
    "brand": "KrishiGears",
    "badges": [
      "Indicative Base Price",
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
      "Genuine OEM-spec replacement spare parts procured per order"
    ],
    "applications": [
      "Paddy (Rice) harvesting",
      "Wheat harvesting",
      "Soybean & mustard harvesting",
      "Fodder crop cutting"
    ],
    "benefits": [
      "Clean cutting with conveyor baffle system to eliminate grain loss",
      "Harvests up to 1 acre in under 2 hours",
      "Significant reduction in harvesting labor costs during peak season"
    ],
    "warranty": "12 months manufacturer warranty + KrishiGears after-sales service network.",
    "video": "https://www.youtube.com/watch?v=KRJFfkK0eJM",
    "hsn": "8433",
    "gst": 5,
    "priceNotice": "Indicative base price: confirmed quotation subject to cutter bar width and tractor/engine mounting specs."
  },
  {
    "slug": "rly-1e40f-2",
    "category": "crop-reapers",
    "name": "KrishiGears CR-R43W-S Baffle Crop Reaper | 43cc 2-Stroke Agricultural Cutter",
    "model": "1E40F-2",
    "brand": "KrishiGears",
    "badges": [
      "Indicative Base Price",
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
      "Genuine OEM-spec replacement spare parts procured per order"
    ],
    "applications": [
      "Paddy (Rice) harvesting",
      "Wheat harvesting",
      "Soybean & mustard harvesting",
      "Fodder crop cutting"
    ],
    "benefits": [
      "Clean cutting with conveyor baffle system to eliminate grain loss",
      "Harvests up to 1 acre in under 2 hours",
      "Significant reduction in harvesting labor costs during peak season"
    ],
    "warranty": "12 months manufacturer warranty + KrishiGears after-sales service network.",
    "video": "https://www.youtube.com/watch?v=KRJFfkK0eJM",
    "hsn": "8433",
    "gst": 5,
    "priceNotice": "Indicative base price: confirmed quotation subject to cutter bar width and tractor/engine mounting specs."
  },
  {
    "slug": "rly-cr-r50-s",
    "category": "crop-reapers",
    "name": "KrishiGears CR-R50-S Baffle Crop Reaper | 50 CC",
    "model": "CR-R50-S",
    "brand": "KrishiGears",
    "badges": [
      "Indicative Base Price",
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
      "Genuine OEM-spec replacement spare parts procured per order"
    ],
    "applications": [
      "Paddy (Rice) harvesting",
      "Wheat harvesting",
      "Soybean & mustard harvesting",
      "Fodder crop cutting"
    ],
    "benefits": [
      "Clean cutting with conveyor baffle system to eliminate grain loss",
      "Harvests up to 1 acre in under 2 hours",
      "Significant reduction in harvesting labor costs during peak season"
    ],
    "warranty": "12 months manufacturer warranty + KrishiGears after-sales service network.",
    "video": "https://www.youtube.com/watch?v=KRJFfkK0eJM",
    "hsn": "8433",
    "gst": 5,
    "priceNotice": "Indicative base price: confirmed quotation subject to cutter bar width and tractor/engine mounting specs."
  },
  {
    "slug": "rly-rapl-tb-52",
    "category": "crop-reapers",
    "name": "KrishiGears RAPL-TB-52 Wheel Type Baffle Crop Reaper | 52 CC",
    "model": "RAPL-TB-52",
    "brand": "KrishiGears",
    "badges": [
      "Indicative Base Price",
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
      "Genuine OEM-spec replacement spare parts procured per order"
    ],
    "applications": [
      "Paddy (Rice) harvesting",
      "Wheat harvesting",
      "Soybean & mustard harvesting",
      "Fodder crop cutting"
    ],
    "benefits": [
      "Clean cutting with conveyor baffle system to eliminate grain loss",
      "Harvests up to 1 acre in under 2 hours",
      "Significant reduction in harvesting labor costs during peak season"
    ],
    "warranty": "12 months manufacturer warranty + KrishiGears after-sales service network.",
    "video": "https://www.youtube.com/watch?v=KRJFfkK0eJM",
    "hsn": "8433",
    "gst": 5,
    "priceNotice": "Indicative base price: confirmed quotation subject to cutter bar width and tractor/engine mounting specs."
  },
  {
    "slug": "rly-m-52",
    "category": "crop-reapers",
    "name": "KrishiGears M-52 Baffle Crop Reaper | 52 CC 2 HP",
    "model": "M-52",
    "brand": "KrishiGears",
    "badges": [
      "Indicative Base Price",
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
      "Genuine OEM-spec replacement spare parts procured per order"
    ],
    "applications": [
      "Paddy (Rice) harvesting",
      "Wheat harvesting",
      "Soybean & mustard harvesting",
      "Fodder crop cutting"
    ],
    "benefits": [
      "Clean cutting with conveyor baffle system to eliminate grain loss",
      "Harvests up to 1 acre in under 2 hours",
      "Significant reduction in harvesting labor costs during peak season"
    ],
    "warranty": "12 months manufacturer warranty + KrishiGears after-sales service network.",
    "video": "https://www.youtube.com/watch?v=KRJFfkK0eJM",
    "hsn": "8433",
    "gst": 5,
    "priceNotice": "Indicative base price: confirmed quotation subject to cutter bar width and tractor/engine mounting specs."
  },
  {
    "slug": "rly-m-35s",
    "category": "crop-reapers",
    "name": "KrishiGears M-35S Baffle Crop Reaper | 35 CC 4-Stroke",
    "model": "M-35S",
    "brand": "KrishiGears",
    "badges": [
      "Indicative Base Price",
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
      "Genuine OEM-spec replacement spare parts procured per order"
    ],
    "applications": [
      "Paddy (Rice) harvesting",
      "Wheat harvesting",
      "Soybean & mustard harvesting",
      "Fodder crop cutting"
    ],
    "benefits": [
      "Clean cutting with conveyor baffle system to eliminate grain loss",
      "Harvests up to 1 acre in under 2 hours",
      "Significant reduction in harvesting labor costs during peak season"
    ],
    "warranty": "12 months manufacturer warranty + KrishiGears after-sales service network.",
    "video": "https://www.youtube.com/watch?v=KRJFfkK0eJM",
    "hsn": "8433",
    "gst": 5,
    "priceNotice": "Indicative base price: confirmed quotation subject to cutter bar width and tractor/engine mounting specs."
  },
  {
    "slug": "vardhman-2fp",
    "category": "crop-reapers",
    "name": "Vardhman 2FP 5HP Petrol Walk-Behind Multi-Crop Reaper",
    "model": "2FP",
    "brand": "Vardhman",
    "badges": [
      "Quotation on Request",
      "5.0 HP Petrol",
      "Self-Propelled",
      "Paddy & Wheat Harvester"
    ],
    "price": 110000,
    "comparePrice": 125000,
    "images": [
      "/images/products/vardhman/vardhman-2fp.webp"
    ],
    "specs": {
      "Brand": "Vardhman",
      "Model": "2FP",
      "Product Type": "Self-Propelled Walk-Behind Crop Reaper",
      "Engine Power": "5.0 HP (GX200 type, 4-Stroke OHV)",
      "Fuel Type": "Petrol",
      "Fuel Tank Capacity": "3.5 Litres",
      "Cutting Width": "1200 mm (4 Feet)",
      "Cutting Height": "50 mm - 100 mm (Adjustable)",
      "Working Capacity": "1 to 1.5 Acres / Hour",
      "Fuel Consumption": "800 - 1000 ml / Hour",
      "Weight": "130 kg",
      "Drive System": "Gear / Belt Transmission"
    },
    "features": [
      "Heavy-duty 5.0 HP petrol engine delivering consistent harvesting torque",
      "Dual-conveyor star-wheel mechanism engineered for tangle-free crop conveyance",
      "1200 mm cutter bar engineered for wheat, paddy, soybean, and fodder harvesting",
      "Self-propelled walk-behind design reducing operator fatigue on multi-acre farms",
      "Direct factory supply with verified manufacturer warranty & pan-India spares"
    ],
    "applications": [
      "Paddy (Rice) harvesting",
      "Wheat harvesting",
      "Soybean harvesting",
      "Mustard & cereal crop cutting"
    ],
    "benefits": [
      "Replaces 12-15 manual laborers per acre, completing harvesting in ~1 hour",
      "Clean cutting mechanism eliminates shattering and grain loss during harvest",
      "Protected dealer margins with full GST invoice and institutional financing support"
    ],
    "warranty": "12 months manufacturer warranty + KrishiGears dealer after-sales support.",
    "hsn": "8433",
    "gst": 5
  },
  {
    "slug": "vardhman-2fd",
    "category": "crop-reapers",
    "name": "Vardhman 2FD 5HP Diesel Heavy-Duty Soybean & Crop Reaper",
    "model": "2FD",
    "brand": "Vardhman",
    "badges": [
      "Quotation on Request",
      "5.0 HP Diesel",
      "High Fuel Efficiency",
      "Soybean Specialist"
    ],
    "price": 125000,
    "comparePrice": 145000,
    "images": [
      "/images/products/vardhman/vardhman-2fd.webp"
    ],
    "specs": {
      "Brand": "Vardhman",
      "Model": "2FD",
      "Product Type": "Self-Propelled Walk-Behind Diesel Crop Reaper",
      "Engine Power": "5.0 HP Air-Cooled Diesel Engine",
      "Fuel Type": "Diesel",
      "Fuel Tank Capacity": "5.0 Litres",
      "Cutting Width": "1200 mm (4 Feet)",
      "Cutting Height": "50 mm - 100 mm (Adjustable)",
      "Working Capacity": "1 to 1.5 Acres / Hour",
      "Fuel Consumption": "700 - 900 ml / Hour",
      "Weight": "145 kg",
      "Drive System": "Heavy-Duty Oil-Bath Gearbox"
    },
    "features": [
      "Fuel-efficient 5.0 HP diesel engine providing maximum torque for dense and tough stalks",
      "Low running cost per acre making it ideal for custom hiring centres (CHCs) and contractors",
      "Mild steel reinforced chassis built for uneven Indian paddy and soybean fields",
      "High-capacity 5.0-litre fuel tank enabling extended field shifts without refuelling",
      "Official Vardhman manufacturer warranty backed by KrishiGears spares network"
    ],
    "applications": [
      "Soybean harvesting specialist",
      "Paddy (Rice) harvesting",
      "Wheat & barley harvesting",
      "Fodder and pulse cutting"
    ],
    "benefits": [
      "Extreme diesel fuel economy: harvests 1 acre on less than 1 litre of diesel",
      "Robust cutting blade engineered for hard crop stems and low-cut soybean harvesting",
      "Wholesale quotation support with fast door-step logistics across India"
    ],
    "warranty": "12 months manufacturer warranty + KrishiGears dealer after-sales support.",
    "hsn": "8433",
    "gst": 5
  },
  {
    "slug": "vardhman-2fpc",
    "category": "crop-reapers",
    "name": "Vardhman 2FPC 5HP Compact Petrol Multi-Crop Reaper",
    "model": "2FPC",
    "brand": "Vardhman",
    "badges": [
      "Quotation on Request",
      "5.0 HP Petrol",
      "Compact & Agile",
      "Terraced Field Specialist"
    ],
    "price": 105000,
    "comparePrice": 120000,
    "images": [
      "/images/products/vardhman/vardhman-2fpc.webp"
    ],
    "specs": {
      "Brand": "Vardhman",
      "Model": "2FPC",
      "Product Type": "Compact Self-Propelled Multi-Crop Reaper",
      "Engine Power": "5.0 HP Petrol Engine",
      "Fuel Type": "Petrol",
      "Fuel Tank Capacity": "3.5 Litres",
      "Cutting Width": "1000 mm / 1200 mm",
      "Weight": "135 kg",
      "Drive System": "Gear Transmission"
    },
    "features": [
      "Compact chassis designed specifically for smallholders, narrow bunds, and terraced plots",
      "Lightweight 135 kg construction allowing easy loading onto pick-up trucks and field transfer",
      "Precision cutter bar delivering clean cuts without lodging grain heads",
      "Ergonomic handle controls for effortless tight-radius turning at field borders"
    ],
    "applications": [
      "Terraced & smallholder paddy harvesting",
      "Wheat harvesting in bounded plots",
      "Millets & pulse harvesting"
    ],
    "benefits": [
      "High agility in small, fragmented Indian landholdings where full-size harvesters cannot enter",
      "Quick field deployment with zero setup time",
      "Wholesale supply with dealer territorial exclusivity options"
    ],
    "warranty": "12 months manufacturer warranty + KrishiGears dealer after-sales support.",
    "hsn": "8433",
    "gst": 5
  },
  {
    "slug": "vardhman-3fd",
    "category": "crop-reapers",
    "name": "Vardhman 3FD 5HP 3-Conveyor Diesel Heavy-Duty Crop Reaper",
    "model": "3FD",
    "brand": "Vardhman",
    "badges": [
      "Quotation on Request",
      "5.0 HP Diesel",
      "3-Conveyor System",
      "Walk-Behind & Ride-On Seat"
    ],
    "price": 145000,
    "comparePrice": 170000,
    "images": [
      "/images/products/vardhman/vardhman-3fd.webp"
    ],
    "specs": {
      "Brand": "Vardhman",
      "Model": "3FD",
      "Product Type": "Heavy-Duty 3-Conveyor Diesel Crop Reaper",
      "Engine Power": "5.0 HP Diesel Engine",
      "Fuel Type": "Diesel",
      "Fuel Tank Capacity": "5.0 Litres",
      "Conveyor System": "3-Star Wheel / 3-Belt Conveyor System",
      "Cutting Width": "1200 mm (4 Feet)",
      "Working Capacity": "1 to 1.5 Acres / Hour",
      "Configurations": "Walk-Behind Handles & Operator Ride-On Seat Attachment",
      "Drive System": "Heavy-Duty Multi-Speed Transmission"
    },
    "features": [
      "3-conveyor star-wheel system engineered specifically for tall-stem crops like mustard, wheat, and Sudan grass",
      "Prevents tall crop stems from tangling or clogging during continuous cutting",
      "Available with comfortable operator ride-on seat attachment for large-scale contract harvesting",
      "5.0 HP air-cooled industrial diesel engine built for high-duty continuous harvesting cycles"
    ],
    "applications": [
      "Tall crop harvesting (Mustard, Sudan Grass, Jowar, Bajra)",
      "High-yield wheat & paddy harvesting",
      "Commercial contract harvesting operations"
    ],
    "benefits": [
      "Tri-conveyor design completely stops crop backfall and ensures uniform row windrowing",
      "Optional ride-on seat allows operators to harvest 8-10 acres a day without physical fatigue",
      "Direct factory supply with genuine OEM conveyor belts and blade sets"
    ],
    "warranty": "12 months manufacturer warranty + KrishiGears dealer after-sales support.",
    "hsn": "8433",
    "gst": 5
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
      "Genuine OEM-spec replacement spare parts procured per order"
    ],
    "applications": [
      "Cotton & Sugarcane inter-cultivation",
      "Vegetable row de-weeding & aeration",
      "Paddy wetland preparation (with cage wheels)",
      "Orchard basin tillage & fertilizer incorporation"
    ],
    "benefits": [
      "Cuts inter-cultivation labor cost by up to 70% in row crops",
      "High-torque de-weeding and soil aeration in tough Indian soils",
      "FMTTI / SRFMTTI compliant durability standard with full spare parts support"
    ],
    "warranty": "12 months manufacturer warranty + KrishiGears after-sales service network.",
    "video": "https://www.youtube.com/watch?v=KRJFfkK0eJM",
    "hsn": "8432",
    "gst": 5
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
      "Genuine OEM-spec replacement spare parts procured per order"
    ],
    "applications": [
      "Cotton & Sugarcane inter-cultivation",
      "Vegetable row de-weeding & aeration",
      "Paddy wetland preparation (with cage wheels)",
      "Orchard basin tillage & fertilizer incorporation"
    ],
    "benefits": [
      "Cuts inter-cultivation labor cost by up to 70% in row crops",
      "High-torque de-weeding and soil aeration in tough Indian soils",
      "FMTTI / SRFMTTI compliant durability standard with full spare parts support"
    ],
    "warranty": "12 months manufacturer warranty + KrishiGears after-sales service network.",
    "video": "https://www.youtube.com/watch?v=KRJFfkK0eJM",
    "hsn": "8432",
    "gst": 5
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
      "Genuine OEM-spec replacement spare parts procured per order"
    ],
    "applications": [
      "Cotton & Sugarcane inter-cultivation",
      "Vegetable row de-weeding & aeration",
      "Paddy wetland preparation (with cage wheels)",
      "Orchard basin tillage & fertilizer incorporation"
    ],
    "benefits": [
      "Cuts inter-cultivation labor cost by up to 70% in row crops",
      "High-torque de-weeding and soil aeration in tough Indian soils",
      "FMTTI / SRFMTTI compliant durability standard with full spare parts support"
    ],
    "warranty": "12 months manufacturer warranty + KrishiGears after-sales service network.",
    "video": "https://www.youtube.com/watch?v=KRJFfkK0eJM",
    "hsn": "8432",
    "gst": 5
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
      "Genuine OEM-spec replacement spare parts procured per order"
    ],
    "applications": [
      "Cotton & Sugarcane inter-cultivation",
      "Vegetable row de-weeding & aeration",
      "Paddy wetland preparation (with cage wheels)",
      "Orchard basin tillage & fertilizer incorporation"
    ],
    "benefits": [
      "Cuts inter-cultivation labor cost by up to 70% in row crops",
      "High-torque de-weeding and soil aeration in tough Indian soils",
      "FMTTI / SRFMTTI compliant durability standard with full spare parts support"
    ],
    "warranty": "12 months manufacturer warranty + KrishiGears after-sales service network.",
    "video": "https://www.youtube.com/watch?v=KRJFfkK0eJM",
    "hsn": "8432",
    "gst": 5
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
      "Genuine OEM-spec replacement spare parts procured per order"
    ],
    "applications": [
      "Cotton & Sugarcane inter-cultivation",
      "Vegetable row de-weeding & aeration",
      "Paddy wetland preparation (with cage wheels)",
      "Orchard basin tillage & fertilizer incorporation"
    ],
    "benefits": [
      "Cuts inter-cultivation labor cost by up to 70% in row crops",
      "High-torque de-weeding and soil aeration in tough Indian soils",
      "FMTTI / SRFMTTI compliant durability standard with full spare parts support"
    ],
    "warranty": "12 months manufacturer warranty + KrishiGears after-sales service network.",
    "video": "https://www.youtube.com/watch?v=KRJFfkK0eJM",
    "hsn": "8432",
    "gst": 5
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
      "Genuine OEM-spec replacement spare parts procured per order"
    ],
    "applications": [
      "Cotton & Sugarcane inter-cultivation",
      "Vegetable row de-weeding & aeration",
      "Paddy wetland preparation (with cage wheels)",
      "Orchard basin tillage & fertilizer incorporation"
    ],
    "benefits": [
      "Cuts inter-cultivation labor cost by up to 70% in row crops",
      "High-torque de-weeding and soil aeration in tough Indian soils",
      "FMTTI / SRFMTTI compliant durability standard with full spare parts support"
    ],
    "warranty": "12 months manufacturer warranty + KrishiGears after-sales service network.",
    "video": "https://www.youtube.com/watch?v=KRJFfkK0eJM",
    "hsn": "8432",
    "gst": 5
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
      "Genuine OEM-spec replacement spare parts procured per order"
    ],
    "applications": [
      "Cotton & Sugarcane inter-cultivation",
      "Vegetable row de-weeding & aeration",
      "Paddy wetland preparation (with cage wheels)",
      "Orchard basin tillage & fertilizer incorporation"
    ],
    "benefits": [
      "Cuts inter-cultivation labor cost by up to 70% in row crops",
      "High-torque de-weeding and soil aeration in tough Indian soils",
      "FMTTI / SRFMTTI compliant durability standard with full spare parts support"
    ],
    "warranty": "12 months manufacturer warranty + KrishiGears after-sales service network.",
    "video": "https://www.youtube.com/watch?v=KRJFfkK0eJM",
    "hsn": "8432",
    "gst": 5
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
      "Genuine OEM-spec replacement spare parts procured per order"
    ],
    "applications": [
      "Cotton & Sugarcane inter-cultivation",
      "Vegetable row de-weeding & aeration",
      "Paddy wetland preparation (with cage wheels)",
      "Orchard basin tillage & fertilizer incorporation"
    ],
    "benefits": [
      "Cuts inter-cultivation labor cost by up to 70% in row crops",
      "High-torque de-weeding and soil aeration in tough Indian soils",
      "FMTTI / SRFMTTI compliant durability standard with full spare parts support"
    ],
    "warranty": "12 months manufacturer warranty + KrishiGears after-sales service network.",
    "video": "https://www.youtube.com/watch?v=KRJFfkK0eJM",
    "hsn": "8432",
    "gst": 5
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
      "Genuine OEM-spec replacement spare parts procured per order"
    ],
    "applications": [
      "Cotton & Sugarcane inter-cultivation",
      "Vegetable row de-weeding & aeration",
      "Paddy wetland preparation (with cage wheels)",
      "Orchard basin tillage & fertilizer incorporation"
    ],
    "benefits": [
      "Cuts inter-cultivation labor cost by up to 70% in row crops",
      "High-torque de-weeding and soil aeration in tough Indian soils",
      "FMTTI / SRFMTTI compliant durability standard with full spare parts support"
    ],
    "warranty": "12 months manufacturer warranty + KrishiGears after-sales service network.",
    "video": "https://www.youtube.com/watch?v=KRJFfkK0eJM",
    "hsn": "8432",
    "gst": 5
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
      "Genuine OEM-spec replacement spare parts procured per order"
    ],
    "applications": [
      "Cotton & Sugarcane inter-cultivation",
      "Vegetable row de-weeding & aeration",
      "Paddy wetland preparation (with cage wheels)",
      "Orchard basin tillage & fertilizer incorporation"
    ],
    "benefits": [
      "Cuts inter-cultivation labor cost by up to 70% in row crops",
      "High-torque de-weeding and soil aeration in tough Indian soils",
      "FMTTI / SRFMTTI compliant durability standard with full spare parts support"
    ],
    "warranty": "12 months manufacturer warranty + KrishiGears after-sales service network.",
    "video": "https://www.youtube.com/watch?v=KRJFfkK0eJM",
    "hsn": "8432",
    "gst": 5
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
      "Genuine OEM-spec replacement spare parts procured per order"
    ],
    "applications": [
      "Cotton & Sugarcane inter-cultivation",
      "Vegetable row de-weeding & aeration",
      "Paddy wetland preparation (with cage wheels)",
      "Orchard basin tillage & fertilizer incorporation"
    ],
    "benefits": [
      "Cuts inter-cultivation labor cost by up to 70% in row crops",
      "High-torque de-weeding and soil aeration in tough Indian soils",
      "FMTTI / SRFMTTI compliant durability standard with full spare parts support"
    ],
    "warranty": "12 months manufacturer warranty + KrishiGears after-sales service network.",
    "video": "https://www.youtube.com/watch?v=KRJFfkK0eJM",
    "hsn": "8432",
    "gst": 5
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
      "Genuine OEM-spec replacement spare parts procured per order"
    ],
    "applications": [
      "Cotton & Sugarcane inter-cultivation",
      "Vegetable row de-weeding & aeration",
      "Paddy wetland preparation (with cage wheels)",
      "Orchard basin tillage & fertilizer incorporation"
    ],
    "benefits": [
      "Cuts inter-cultivation labor cost by up to 70% in row crops",
      "High-torque de-weeding and soil aeration in tough Indian soils",
      "FMTTI / SRFMTTI compliant durability standard with full spare parts support"
    ],
    "warranty": "12 months manufacturer warranty + KrishiGears after-sales service network.",
    "video": "https://www.youtube.com/watch?v=KRJFfkK0eJM",
    "hsn": "8432",
    "gst": 5
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
      "Genuine OEM-spec replacement spare parts procured per order"
    ],
    "applications": [
      "Cotton & Sugarcane inter-cultivation",
      "Vegetable row de-weeding & aeration",
      "Paddy wetland preparation (with cage wheels)",
      "Orchard basin tillage & fertilizer incorporation"
    ],
    "benefits": [
      "Cuts inter-cultivation labor cost by up to 70% in row crops",
      "High-torque de-weeding and soil aeration in tough Indian soils",
      "FMTTI / SRFMTTI compliant durability standard with full spare parts support"
    ],
    "warranty": "12 months manufacturer warranty + KrishiGears after-sales service network.",
    "video": "https://www.youtube.com/watch?v=KRJFfkK0eJM",
    "hsn": "8432",
    "gst": 5
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
      "Genuine OEM-spec replacement spare parts procured per order"
    ],
    "applications": [
      "Cotton & Sugarcane inter-cultivation",
      "Vegetable row de-weeding & aeration",
      "Paddy wetland preparation (with cage wheels)",
      "Orchard basin tillage & fertilizer incorporation"
    ],
    "benefits": [
      "Cuts inter-cultivation labor cost by up to 70% in row crops",
      "High-torque de-weeding and soil aeration in tough Indian soils",
      "FMTTI / SRFMTTI compliant durability standard with full spare parts support"
    ],
    "warranty": "12 months manufacturer warranty + KrishiGears after-sales service network.",
    "video": "https://www.youtube.com/watch?v=KRJFfkK0eJM",
    "hsn": "8432",
    "gst": 5
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
      "Genuine OEM-spec replacement spare parts procured per order"
    ],
    "applications": [
      "Cotton & Sugarcane inter-cultivation",
      "Vegetable row de-weeding & aeration",
      "Paddy wetland preparation (with cage wheels)",
      "Orchard basin tillage & fertilizer incorporation"
    ],
    "benefits": [
      "Cuts inter-cultivation labor cost by up to 70% in row crops",
      "High-torque de-weeding and soil aeration in tough Indian soils",
      "FMTTI / SRFMTTI compliant durability standard with full spare parts support"
    ],
    "warranty": "12 months manufacturer warranty + KrishiGears after-sales service network.",
    "video": "https://www.youtube.com/watch?v=KRJFfkK0eJM",
    "hsn": "8432",
    "gst": 5
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
      "Genuine OEM-spec replacement spare parts procured per order"
    ],
    "applications": [
      "Cotton & Sugarcane inter-cultivation",
      "Vegetable row de-weeding & aeration",
      "Paddy wetland preparation (with cage wheels)",
      "Orchard basin tillage & fertilizer incorporation"
    ],
    "benefits": [
      "Cuts inter-cultivation labor cost by up to 70% in row crops",
      "High-torque de-weeding and soil aeration in tough Indian soils",
      "FMTTI / SRFMTTI compliant durability standard with full spare parts support"
    ],
    "warranty": "12 months manufacturer warranty + KrishiGears after-sales service network.",
    "video": "https://www.youtube.com/watch?v=KRJFfkK0eJM",
    "hsn": "8432",
    "gst": 5
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
      "Genuine OEM-spec replacement spare parts procured per order"
    ],
    "applications": [
      "Cotton & Sugarcane inter-cultivation",
      "Vegetable row de-weeding & aeration",
      "Paddy wetland preparation (with cage wheels)",
      "Orchard basin tillage & fertilizer incorporation"
    ],
    "benefits": [
      "Cuts inter-cultivation labor cost by up to 70% in row crops",
      "High-torque de-weeding and soil aeration in tough Indian soils",
      "FMTTI / SRFMTTI compliant durability standard with full spare parts support"
    ],
    "warranty": "12 months manufacturer warranty + KrishiGears after-sales service network.",
    "video": "https://www.youtube.com/watch?v=KRJFfkK0eJM",
    "hsn": "8432",
    "gst": 5
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
      "Genuine OEM-spec replacement spare parts procured per order"
    ],
    "applications": [
      "Cotton & Sugarcane inter-cultivation",
      "Vegetable row de-weeding & aeration",
      "Paddy wetland preparation (with cage wheels)",
      "Orchard basin tillage & fertilizer incorporation"
    ],
    "benefits": [
      "Cuts inter-cultivation labor cost by up to 70% in row crops",
      "High-torque de-weeding and soil aeration in tough Indian soils",
      "FMTTI / SRFMTTI compliant durability standard with full spare parts support"
    ],
    "warranty": "12 months manufacturer warranty + KrishiGears after-sales service network.",
    "video": "https://www.youtube.com/watch?v=KRJFfkK0eJM",
    "hsn": "8432",
    "gst": 5
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
      "Genuine OEM-spec replacement spare parts procured per order"
    ],
    "applications": [
      "Cotton & Sugarcane inter-cultivation",
      "Vegetable row de-weeding & aeration",
      "Paddy wetland preparation (with cage wheels)",
      "Orchard basin tillage & fertilizer incorporation"
    ],
    "benefits": [
      "Cuts inter-cultivation labor cost by up to 70% in row crops",
      "High-torque de-weeding and soil aeration in tough Indian soils",
      "FMTTI / SRFMTTI compliant durability standard with full spare parts support"
    ],
    "warranty": "12 months manufacturer warranty + KrishiGears after-sales service network.",
    "video": "https://www.youtube.com/watch?v=KRJFfkK0eJM",
    "hsn": "8432",
    "gst": 5
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
      "Genuine OEM-spec replacement spare parts procured per order"
    ],
    "applications": [
      "Cotton & Sugarcane inter-cultivation",
      "Vegetable row de-weeding & aeration",
      "Paddy wetland preparation (with cage wheels)",
      "Orchard basin tillage & fertilizer incorporation"
    ],
    "benefits": [
      "Cuts inter-cultivation labor cost by up to 70% in row crops",
      "High-torque de-weeding and soil aeration in tough Indian soils",
      "FMTTI / SRFMTTI compliant durability standard with full spare parts support"
    ],
    "warranty": "12 months manufacturer warranty + KrishiGears after-sales service network.",
    "video": "https://www.youtube.com/watch?v=KRJFfkK0eJM",
    "hsn": "8432",
    "gst": 5
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
      "Blades": "32 Pcs – Dry Land",
      "Gear": "R, 0, 1, 2",
      "Tilling Depth": "100–300 mm",
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
      "Genuine OEM-spec replacement spare parts procured per order"
    ],
    "applications": [
      "Cotton & Sugarcane inter-cultivation",
      "Vegetable row de-weeding & aeration",
      "Paddy wetland preparation (with cage wheels)",
      "Orchard basin tillage & fertilizer incorporation"
    ],
    "benefits": [
      "Cuts inter-cultivation labor cost by up to 70% in row crops",
      "High-torque de-weeding and soil aeration in tough Indian soils",
      "FMTTI / SRFMTTI compliant durability standard with full spare parts support"
    ],
    "warranty": "12 months manufacturer warranty + KrishiGears after-sales service network.",
    "video": "https://www.youtube.com/watch?v=KRJFfkK0eJM",
    "hsn": "8432",
    "gst": 5
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
      "Tilling Depth": "100–300 mm",
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
      "Genuine OEM-spec replacement spare parts procured per order"
    ],
    "applications": [
      "Cotton & Sugarcane inter-cultivation",
      "Vegetable row de-weeding & aeration",
      "Paddy wetland preparation (with cage wheels)",
      "Orchard basin tillage & fertilizer incorporation"
    ],
    "benefits": [
      "Cuts inter-cultivation labor cost by up to 70% in row crops",
      "High-torque de-weeding and soil aeration in tough Indian soils",
      "FMTTI / SRFMTTI compliant durability standard with full spare parts support"
    ],
    "warranty": "12 months manufacturer warranty + KrishiGears after-sales service network.",
    "video": "https://www.youtube.com/watch?v=KRJFfkK0eJM",
    "hsn": "8432",
    "gst": 5
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
      "Tilling Depth": "100–300 mm",
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
      "Genuine OEM-spec replacement spare parts procured per order"
    ],
    "applications": [
      "Cotton & Sugarcane inter-cultivation",
      "Vegetable row de-weeding & aeration",
      "Paddy wetland preparation (with cage wheels)",
      "Orchard basin tillage & fertilizer incorporation"
    ],
    "benefits": [
      "Cuts inter-cultivation labor cost by up to 70% in row crops",
      "High-torque de-weeding and soil aeration in tough Indian soils",
      "FMTTI / SRFMTTI compliant durability standard with full spare parts support"
    ],
    "warranty": "12 months manufacturer warranty + KrishiGears after-sales service network.",
    "video": "https://www.youtube.com/watch?v=KRJFfkK0eJM",
    "hsn": "8432",
    "gst": 5
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
      "Tilling Depth": "100–300 mm",
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
      "Genuine OEM-spec replacement spare parts procured per order"
    ],
    "applications": [
      "Cotton & Sugarcane inter-cultivation",
      "Vegetable row de-weeding & aeration",
      "Paddy wetland preparation (with cage wheels)",
      "Orchard basin tillage & fertilizer incorporation"
    ],
    "benefits": [
      "Cuts inter-cultivation labor cost by up to 70% in row crops",
      "High-torque de-weeding and soil aeration in tough Indian soils",
      "FMTTI / SRFMTTI compliant durability standard with full spare parts support"
    ],
    "warranty": "12 months manufacturer warranty + KrishiGears after-sales service network.",
    "video": "https://www.youtube.com/watch?v=KRJFfkK0eJM",
    "hsn": "8432",
    "gst": 5
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
      "Tilling Depth": "100–300 mm",
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
      "Genuine OEM-spec replacement spare parts procured per order"
    ],
    "applications": [
      "Cotton & Sugarcane inter-cultivation",
      "Vegetable row de-weeding & aeration",
      "Paddy wetland preparation (with cage wheels)",
      "Orchard basin tillage & fertilizer incorporation"
    ],
    "benefits": [
      "Cuts inter-cultivation labor cost by up to 70% in row crops",
      "High-torque de-weeding and soil aeration in tough Indian soils",
      "FMTTI / SRFMTTI compliant durability standard with full spare parts support"
    ],
    "warranty": "12 months manufacturer warranty + KrishiGears after-sales service network.",
    "video": "https://www.youtube.com/watch?v=KRJFfkK0eJM",
    "hsn": "8432",
    "gst": 5
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
      "Tilling Depth": "100–300 mm",
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
      "Genuine OEM-spec replacement spare parts procured per order"
    ],
    "applications": [
      "Cotton & Sugarcane inter-cultivation",
      "Vegetable row de-weeding & aeration",
      "Paddy wetland preparation (with cage wheels)",
      "Orchard basin tillage & fertilizer incorporation"
    ],
    "benefits": [
      "Cuts inter-cultivation labor cost by up to 70% in row crops",
      "High-torque de-weeding and soil aeration in tough Indian soils",
      "FMTTI / SRFMTTI compliant durability standard with full spare parts support"
    ],
    "warranty": "12 months manufacturer warranty + KrishiGears after-sales service network.",
    "video": "https://www.youtube.com/watch?v=KRJFfkK0eJM",
    "hsn": "8432",
    "gst": 5
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
      "Tilling Depth": "100–300 mm",
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
      "Genuine OEM-spec replacement spare parts procured per order"
    ],
    "applications": [
      "Cotton & Sugarcane inter-cultivation",
      "Vegetable row de-weeding & aeration",
      "Paddy wetland preparation (with cage wheels)",
      "Orchard basin tillage & fertilizer incorporation"
    ],
    "benefits": [
      "Cuts inter-cultivation labor cost by up to 70% in row crops",
      "High-torque de-weeding and soil aeration in tough Indian soils",
      "FMTTI / SRFMTTI compliant durability standard with full spare parts support"
    ],
    "warranty": "12 months manufacturer warranty + KrishiGears after-sales service network.",
    "video": "https://www.youtube.com/watch?v=KRJFfkK0eJM",
    "hsn": "8432",
    "gst": 5
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
      "Genuine OEM-spec replacement spare parts procured per order"
    ],
    "applications": [
      "Cotton & Sugarcane inter-cultivation",
      "Vegetable row de-weeding & aeration",
      "Paddy wetland preparation (with cage wheels)",
      "Orchard basin tillage & fertilizer incorporation"
    ],
    "benefits": [
      "Cuts inter-cultivation labor cost by up to 70% in row crops",
      "High-torque de-weeding and soil aeration in tough Indian soils",
      "FMTTI / SRFMTTI compliant durability standard with full spare parts support"
    ],
    "warranty": "12 months manufacturer warranty + KrishiGears after-sales service network.",
    "video": "https://www.youtube.com/watch?v=KRJFfkK0eJM",
    "hsn": "8432",
    "gst": 5
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
      "Genuine OEM-spec replacement spare parts procured per order"
    ],
    "applications": [
      "Cotton & Sugarcane inter-cultivation",
      "Vegetable row de-weeding & aeration",
      "Paddy wetland preparation (with cage wheels)",
      "Orchard basin tillage & fertilizer incorporation"
    ],
    "benefits": [
      "Cuts inter-cultivation labor cost by up to 70% in row crops",
      "High-torque de-weeding and soil aeration in tough Indian soils",
      "FMTTI / SRFMTTI compliant durability standard with full spare parts support"
    ],
    "warranty": "12 months manufacturer warranty + KrishiGears after-sales service network.",
    "video": "https://www.youtube.com/watch?v=KRJFfkK0eJM",
    "hsn": "8432",
    "gst": 5
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
      "Tyre Size": "4.0–8",
      "Blade Quantity": "24 Heavy-Duty Blades",
      "Tilling Width": "800 mm",
      "Tilling Depth": "100–300 mm"
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
      "Genuine OEM-spec replacement spare parts procured per order"
    ],
    "applications": [
      "Cotton & Sugarcane inter-cultivation",
      "Vegetable row de-weeding & aeration",
      "Paddy wetland preparation (with cage wheels)",
      "Orchard basin tillage & fertilizer incorporation"
    ],
    "benefits": [
      "Cuts inter-cultivation labor cost by up to 70% in row crops",
      "High-torque de-weeding and soil aeration in tough Indian soils",
      "FMTTI / SRFMTTI compliant durability standard with full spare parts support"
    ],
    "warranty": "12 months manufacturer warranty + KrishiGears after-sales service network.",
    "video": "https://www.youtube.com/watch?v=KRJFfkK0eJM",
    "hsn": "8432",
    "gst": 5
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
      "Tilling Depth": "100–300 mm",
      "Blade Quantity": "32 Blades",
      "Tyre Type": "ATV Tyre 19 × 7 × 8",
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
      "Genuine OEM-spec replacement spare parts procured per order"
    ],
    "applications": [
      "Cotton & Sugarcane inter-cultivation",
      "Vegetable row de-weeding & aeration",
      "Paddy wetland preparation (with cage wheels)",
      "Orchard basin tillage & fertilizer incorporation"
    ],
    "benefits": [
      "Cuts inter-cultivation labor cost by up to 70% in row crops",
      "High-torque de-weeding and soil aeration in tough Indian soils",
      "FMTTI / SRFMTTI compliant durability standard with full spare parts support"
    ],
    "warranty": "12 months manufacturer warranty + KrishiGears after-sales service network.",
    "video": "https://www.youtube.com/watch?v=KRJFfkK0eJM",
    "hsn": "8432",
    "gst": 5
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
      "Genuine OEM-spec replacement spare parts procured per order"
    ],
    "applications": [
      "Cotton & Sugarcane inter-cultivation",
      "Vegetable row de-weeding & aeration",
      "Paddy wetland preparation (with cage wheels)",
      "Orchard basin tillage & fertilizer incorporation"
    ],
    "benefits": [
      "Cuts inter-cultivation labor cost by up to 70% in row crops",
      "High-torque de-weeding and soil aeration in tough Indian soils",
      "FMTTI / SRFMTTI compliant durability standard with full spare parts support"
    ],
    "warranty": "12 months manufacturer warranty + KrishiGears after-sales service network.",
    "video": "https://www.youtube.com/watch?v=KRJFfkK0eJM",
    "hsn": "8432",
    "gst": 5
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
      "Tilling Depth": "100–300 mm",
      "Blade Quantity": "32 Blades",
      "Tyre Size": "4.0–8 Solid",
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
      "Genuine OEM-spec replacement spare parts procured per order"
    ],
    "applications": [
      "Cotton & Sugarcane inter-cultivation",
      "Vegetable row de-weeding & aeration",
      "Paddy wetland preparation (with cage wheels)",
      "Orchard basin tillage & fertilizer incorporation"
    ],
    "benefits": [
      "Cuts inter-cultivation labor cost by up to 70% in row crops",
      "High-torque de-weeding and soil aeration in tough Indian soils",
      "FMTTI / SRFMTTI compliant durability standard with full spare parts support"
    ],
    "warranty": "12 months manufacturer warranty + KrishiGears after-sales service network.",
    "video": "https://www.youtube.com/watch?v=KRJFfkK0eJM",
    "hsn": "8432",
    "gst": 5
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
      "Genuine OEM-spec replacement spare parts procured per order"
    ],
    "applications": [
      "Cotton & Sugarcane inter-cultivation",
      "Vegetable row de-weeding & aeration",
      "Paddy wetland preparation (with cage wheels)",
      "Orchard basin tillage & fertilizer incorporation"
    ],
    "benefits": [
      "Cuts inter-cultivation labor cost by up to 70% in row crops",
      "High-torque de-weeding and soil aeration in tough Indian soils",
      "FMTTI / SRFMTTI compliant durability standard with full spare parts support"
    ],
    "warranty": "12 months manufacturer warranty + KrishiGears after-sales service network.",
    "video": "https://www.youtube.com/watch?v=KRJFfkK0eJM",
    "hsn": "8432",
    "gst": 5
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
      "Genuine OEM-spec replacement spare parts procured per order"
    ],
    "applications": [
      "Commercial farm maintenance",
      "Post-harvest residue management",
      "Rural enterprise machinery operations"
    ],
    "benefits": [
      "Heavy-duty commercial durability",
      "Direct factory wholesale pricing with GST billing",
      "Readily available OEM replacement spare parts"
    ],
    "warranty": "12 months manufacturer warranty + KrishiGears after-sales service network.",
    "video": "https://www.youtube.com/watch?v=KRJFfkK0eJM",
    "hsn": "8433",
    "gst": 5
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
      "Genuine OEM-spec replacement spare parts procured per order"
    ],
    "applications": [
      "Commercial farm maintenance",
      "Post-harvest residue management",
      "Rural enterprise machinery operations"
    ],
    "benefits": [
      "Heavy-duty commercial durability",
      "Direct factory wholesale pricing with GST billing",
      "Readily available OEM replacement spare parts"
    ],
    "warranty": "12 months manufacturer warranty + KrishiGears after-sales service network.",
    "video": "https://www.youtube.com/watch?v=KRJFfkK0eJM",
    "hsn": "8433",
    "gst": 5
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
      "Genuine OEM-spec replacement spare parts procured per order"
    ],
    "applications": [
      "Cotton & Sugarcane inter-cultivation",
      "Vegetable row de-weeding & aeration",
      "Paddy wetland preparation (with cage wheels)",
      "Orchard basin tillage & fertilizer incorporation"
    ],
    "benefits": [
      "Cuts inter-cultivation labor cost by up to 70% in row crops",
      "High-torque de-weeding and soil aeration in tough Indian soils",
      "FMTTI / SRFMTTI compliant durability standard with full spare parts support"
    ],
    "warranty": "12 months manufacturer warranty + KrishiGears after-sales service network.",
    "video": "https://www.youtube.com/watch?v=KRJFfkK0eJM",
    "hsn": "8432",
    "gst": 5
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
      "Genuine OEM-spec replacement spare parts procured per order"
    ],
    "applications": [
      "Cotton & Sugarcane inter-cultivation",
      "Vegetable row de-weeding & aeration",
      "Paddy wetland preparation (with cage wheels)",
      "Orchard basin tillage & fertilizer incorporation"
    ],
    "benefits": [
      "Cuts inter-cultivation labor cost by up to 70% in row crops",
      "High-torque de-weeding and soil aeration in tough Indian soils",
      "FMTTI / SRFMTTI compliant durability standard with full spare parts support"
    ],
    "warranty": "12 months manufacturer warranty + KrishiGears after-sales service network.",
    "video": "https://www.youtube.com/watch?v=KRJFfkK0eJM",
    "hsn": "8432",
    "gst": 5
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
      "Genuine OEM-spec replacement spare parts procured per order"
    ],
    "applications": [
      "Cotton & Sugarcane inter-cultivation",
      "Vegetable row de-weeding & aeration",
      "Paddy wetland preparation (with cage wheels)",
      "Orchard basin tillage & fertilizer incorporation"
    ],
    "benefits": [
      "Cuts inter-cultivation labor cost by up to 70% in row crops",
      "High-torque de-weeding and soil aeration in tough Indian soils",
      "FMTTI / SRFMTTI compliant durability standard with full spare parts support"
    ],
    "warranty": "12 months manufacturer warranty + KrishiGears after-sales service network.",
    "video": "https://www.youtube.com/watch?v=KRJFfkK0eJM",
    "hsn": "8432",
    "gst": 5
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
      "Genuine OEM-spec replacement spare parts procured per order"
    ],
    "applications": [
      "Cotton & Sugarcane inter-cultivation",
      "Vegetable row de-weeding & aeration",
      "Paddy wetland preparation (with cage wheels)",
      "Orchard basin tillage & fertilizer incorporation"
    ],
    "benefits": [
      "Cuts inter-cultivation labor cost by up to 70% in row crops",
      "High-torque de-weeding and soil aeration in tough Indian soils",
      "FMTTI / SRFMTTI compliant durability standard with full spare parts support"
    ],
    "warranty": "12 months manufacturer warranty + KrishiGears after-sales service network.",
    "video": "https://www.youtube.com/watch?v=KRJFfkK0eJM",
    "hsn": "8432",
    "gst": 5
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
      "Genuine OEM-spec replacement spare parts procured per order"
    ],
    "applications": [
      "Cotton & Sugarcane inter-cultivation",
      "Vegetable row de-weeding & aeration",
      "Paddy wetland preparation (with cage wheels)",
      "Orchard basin tillage & fertilizer incorporation"
    ],
    "benefits": [
      "Cuts inter-cultivation labor cost by up to 70% in row crops",
      "High-torque de-weeding and soil aeration in tough Indian soils",
      "FMTTI / SRFMTTI compliant durability standard with full spare parts support"
    ],
    "warranty": "12 months manufacturer warranty + KrishiGears after-sales service network.",
    "video": "https://www.youtube.com/watch?v=KRJFfkK0eJM",
    "hsn": "8432",
    "gst": 5
  },
  {
    "slug": "rly-my-550g-es",
    "category": "power-weeders",
    "name": "KrishiGears Power Weeder – MY-550G-ES",
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
      "Genuine OEM-spec replacement spare parts procured per order"
    ],
    "applications": [
      "Cotton & Sugarcane inter-cultivation",
      "Vegetable row de-weeding & aeration",
      "Paddy wetland preparation (with cage wheels)",
      "Orchard basin tillage & fertilizer incorporation"
    ],
    "benefits": [
      "Cuts inter-cultivation labor cost by up to 70% in row crops",
      "High-torque de-weeding and soil aeration in tough Indian soils",
      "FMTTI / SRFMTTI compliant durability standard with full spare parts support"
    ],
    "warranty": "12 months manufacturer warranty + KrishiGears after-sales service network.",
    "video": "https://www.youtube.com/watch?v=KRJFfkK0eJM",
    "hsn": "8432",
    "gst": 5
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
      "Genuine OEM-spec replacement spare parts procured per order"
    ],
    "applications": [
      "Cotton & Sugarcane inter-cultivation",
      "Vegetable row de-weeding & aeration",
      "Paddy wetland preparation (with cage wheels)",
      "Orchard basin tillage & fertilizer incorporation"
    ],
    "benefits": [
      "Cuts inter-cultivation labor cost by up to 70% in row crops",
      "High-torque de-weeding and soil aeration in tough Indian soils",
      "FMTTI / SRFMTTI compliant durability standard with full spare parts support"
    ],
    "warranty": "12 months manufacturer warranty + KrishiGears after-sales service network.",
    "video": "https://www.youtube.com/watch?v=KRJFfkK0eJM",
    "hsn": "8432",
    "gst": 5
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
      "Genuine OEM-spec replacement spare parts procured per order"
    ],
    "applications": [
      "Cotton & Sugarcane inter-cultivation",
      "Vegetable row de-weeding & aeration",
      "Paddy wetland preparation (with cage wheels)",
      "Orchard basin tillage & fertilizer incorporation"
    ],
    "benefits": [
      "Cuts inter-cultivation labor cost by up to 70% in row crops",
      "High-torque de-weeding and soil aeration in tough Indian soils",
      "FMTTI / SRFMTTI compliant durability standard with full spare parts support"
    ],
    "warranty": "12 months manufacturer warranty + KrishiGears after-sales service network.",
    "video": "https://www.youtube.com/watch?v=KRJFfkK0eJM",
    "hsn": "8432",
    "gst": 5
  }
];

export const TESTIMONIALS = [
  {
    "name": "Rameshwar Patel",
    "role": "Patel Agro Agency, Kolhapur (Maharashtra)",
    "text": "KG-ICP-UP170-SH back-rotary weeder aur KG-177F 9HP model sugarcane inter-row weeding ke liye hamare 120+ farmers ne liya hai. Direct factory dispatch aur spare parts support best hai.",
    "rating": 5
  },
  {
    "name": "Suresh Choudhary",
    "role": "Kisan Machinery Store, Alwar (Rajasthan)",
    "text": "KrishiGears machines ki build quality aur FMTTI testing standards se farmers ko pura trust milta hai. Commercial grade durability hai.",
    "rating": 5
  },
  {
    "name": "Venkat Rao",
    "role": "Sri Lakshmi Agri Implements, Nizamabad (Telangana)",
    "text": "KG-173F diesel model black cotton soil mein high torque deliver karta hai. Engine warranty claims aur fuel injector & gearbox spares 48 ghante mein Jaipur godown se dispatch ho jate hain.",
    "rating": 5
  },
  {
    "name": "Manish Sharma",
    "role": "Shree Ganesh Krishi Seva Kendra, Indore (MP)",
    "text": "KrishiGears dealership lene ke baad hamari spare parts availability 100% ho gayi. Viton oil seals, recoil starters aur forged blades ki quality authentic OEM grade hai.",
    "rating": 5
  }
];

export const TRUST_BADGES = [
  {
    "icon": "shield-check",
    "label": "15% - 25% Machine Margin (Up to 35% Spares)"
  },
  {
    "icon": "zap",
    "label": "24-Hour Express Spares (Jaipur Hub)"
  },
  {
    "icon": "handshake",
    "label": "Zero Dead-Stock (Starter MOQ: 2 Units)"
  },
  {
    "icon": "shield",
    "label": "FMTTI-tested commercial durability standard"
  },
  {
    "icon": "truck",
    "label": "PAN India Direct Logistics"
  },
  {
    "icon": "badge-check",
    "label": "FMTTI / SRFMTTI Tested Standards"
  },
  {
    "icon": "wrench",
    "label": "OEM Spare Part Distribution"
  },
  {
    "icon": "headphones",
    "label": "Direct WhatsApp Video Tech Support"
  }
];

export const SEO_PAGES = [
  {
    "slug": "power-weeder-supplier-india",
    "title": "Power Weeder Dealer Network & Bulk Supply",
    "category": "power-weeders"
  },
  {
    "slug": "power-weeder-spare-parts-supplier-india",
    "title": "Power Weeder Spare Parts Distributor & OEM Supply",
    "category": "power-weeder-spare-parts"
  }
];

export const SEO_PAGES_MAP = new Map(SEO_PAGES.map((p) => [p.slug, p]));
