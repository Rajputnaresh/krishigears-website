// KrishiGears product catalog data
import {
  Tractor, Wrench, Scissors, Drill, SprayCan, Droplets,
  Trees, Sprout, Wheat, Cog, Settings, CircleDot, Package
} from "lucide-react";

export const LOGO_URL = "https://customer-assets.emergentagent.com/job_2f7e8e24-8a87-4e22-80ae-e4a8236f7388/artifacts/1qde0bgj_Screenshot%202026-05-31%20at%206.41.53%E2%80%AFPM.png";

export const HERO_BG = "https://static.prod-images.emergentagent.com/jobs/2f7e8e24-8a87-4e22-80ae-e4a8236f7388/images/9862aaeb293a349960ecdc460806fb8e845ef8f429f07916720d038ddd900a0c.png";
export const INDIA_MAP = "https://static.prod-images.emergentagent.com/jobs/2f7e8e24-8a87-4e22-80ae-e4a8236f7388/images/ff6f800948e74c34944cb1e852b7e44ed1b403d82f8a109308aa798d597de06e.png";
export const ABSTRACT_TERRAIN = "https://static.prod-images.emergentagent.com/jobs/2f7e8e24-8a87-4e22-80ae-e4a8236f7388/images/302977c3a18070a0158c2af9eb152ac221f3f38edc6076959ee3d8560900c403.png";

// Verified working Pexels images
const IMG = {
  tractor_field: "https://images.pexels.com/photos/2933243/pexels-photo-2933243.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
  farmer_paddy: "https://images.pexels.com/photos/29039798/pexels-photo-29039798.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
  wheat_harvest: "https://images.pexels.com/photos/235725/pexels-photo-235725.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
  cutter_field: "https://images.pexels.com/photos/4750274/pexels-photo-4750274.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
  spray_field: "https://images.pexels.com/photos/2255801/pexels-photo-2255801.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
  irrigation: "https://images.pexels.com/photos/2382665/pexels-photo-2382665.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
  forest_wood: "https://images.pexels.com/photos/167699/pexels-photo-167699.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
  small_farm: "https://images.pexels.com/photos/2933243/pexels-photo-2933243.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
  seeds_sowing: "https://images.pexels.com/photos/96417/pexels-photo-96417.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
  paddy_field: "https://images.pexels.com/photos/2362058/pexels-photo-2362058.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
  fodder: "https://images.pexels.com/photos/162801/wheat-grass-bread-spike-162801.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
  engine_parts: "https://images.pexels.com/photos/162553/keys-workshop-mechanic-tools-162553.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
  spare_parts: "https://images.pexels.com/photos/1409215/pexels-photo-1409215.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
  pump: "https://images.pexels.com/photos/2933243/pexels-photo-2933243.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
  tools: "https://images.pexels.com/photos/175039/pexels-photo-175039.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
};

export const FARMER_FIELD = IMG.farmer_paddy;
export const FIELD_TRACTOR = IMG.tractor_field;
export const PLOWING = IMG.tractor_field;

export const COMPANY = {
  name: "KrishiGears",
  tagline: "For the Farmers, With the Farmer, To the Farmer, HAMESHA",
  website: "KrishiGears.in",
  email: "sales@krishigears.com",
  support: "service@krishigears.com",
  accounts: "accounts@krishigears.com",
  dealers: "dealers@krishigears.com",
  phone: "+91 60060 78815",
  whatsapp: "916006078815",
  address: "Jaipur, Rajasthan, India",
  gst: "08EQLPD7160R1Z2",
};

export const CATEGORIES = [
  { slug: "power-tillers", name: "Power Tillers", icon: Tractor, image: IMG.tractor_field, short: "Heavy-duty tillers for paddy, wheat & vegetable cultivation.", featured: true },
  { slug: "power-weeders", name: "Power Weeders", icon: Sprout, image: IMG.small_farm, short: "Compact weeders for row crops, orchards and gardens.", featured: true },
  { slug: "brush-cutters", name: "Brush Cutters", icon: Scissors, image: IMG.cutter_field, short: "Powerful 2-stroke and 4-stroke brush cutters for grass & bushes.", featured: true },
  { slug: "earth-augers", name: "Earth Augers", icon: Drill, image: IMG.seeds_sowing, short: "Single & double-man earth augers for planting and fencing.", featured: true },
  { slug: "battery-sprayers", name: "Battery Sprayers", icon: SprayCan, image: IMG.spray_field, short: "12V & 16L battery knapsack sprayers — silent & efficient." },
  { slug: "power-sprayers", name: "Power Sprayers", icon: SprayCan, image: IMG.spray_field, short: "High-pressure power sprayers for plantations & large farms." },
  { slug: "water-pumps", name: "Water Pumps", icon: Droplets, image: IMG.irrigation, short: "Petrol/diesel water pump sets for irrigation & drainage." },
  { slug: "chain-saws", name: "Chain Saws", icon: Trees, image: IMG.forest_wood, short: "Professional chain saws for cutting wood and pruning." },
  { slug: "mini-cultivators", name: "Mini Cultivators", icon: Tractor, image: IMG.small_farm, short: "Lightweight mini cultivators for kitchen gardens & polyhouses." },
  { slug: "seeders", name: "Seeders", icon: Sprout, image: IMG.seeds_sowing, short: "Manual & power seeders for precision sowing." },
  { slug: "reapers", name: "Reapers", icon: Wheat, image: IMG.wheat_harvest, short: "Self-propelled paddy & wheat reapers for fast harvest." },
  { slug: "chaff-cutters", name: "Chaff Cutters", icon: Scissors, image: IMG.fodder, short: "Electric & engine-driven chaff cutters for fodder preparation." },
  { slug: "agricultural-engines", name: "Agricultural Engines", icon: Cog, image: IMG.engine_parts, short: "Reliable kerosene, diesel & petrol agricultural engines." },
  { slug: "agricultural-spare-parts", name: "Agricultural Spare Parts", icon: Settings, image: IMG.spare_parts, short: "Genuine spare parts for all major machinery brands." },
  { slug: "power-weeder-spare-parts", name: "Power Weeder Spare Parts", icon: Settings, image: IMG.spare_parts, short: "OEM-grade replacement parts for power weeders." },
  { slug: "brush-cutter-spare-parts", name: "Brush Cutter Spare Parts", icon: Wrench, image: IMG.engine_parts, short: "Blades, harnesses, coils, nylon heads & complete kits." },
  { slug: "htp-pumps", name: "HTP Pumps", icon: Droplets, image: IMG.pump, short: "High Triplex pumps for high-pressure spraying needs." },
  { slug: "rotavator-blades", name: "Rotavator Blades", icon: CircleDot, image: IMG.tools, short: "Hardened L & C-type rotavator blades — long-lasting edge." },
  { slug: "agricultural-accessories", name: "Agricultural Accessories", icon: Package, image: IMG.tools, short: "Tool kits, fuel cans, safety gear & farm essentials." },
];

// Sample products
export const PRODUCTS = [
  { slug: "kg-pt-15hp", category: "power-tillers", name: "KG Power Tiller 15 HP", price_request: true, images: [IMG.tractor_field, IMG.paddy_field], specs: { Engine: "Diesel 15 HP, 4-stroke", "Fuel Tank": "5.5 L", Transmission: "6F + 2R", Weight: "395 kg", Tilling_Width: "1200 mm", Rotor_Speed: "260 RPM" }, features: ["Heavy-duty cast iron gearbox", "Double-shift gear", "Self-start option", "Adjustable handle", "Wide tilling coverage"], applications: ["Paddy fields", "Wheat fields", "Vegetable cultivation", "Horticulture"], benefits: ["Reduces ploughing time by 60%", "Low maintenance cost", "Fuel efficient"], warranty: "12 months manufacturer warranty + free service" },
  { slug: "kg-pt-9hp", category: "power-tillers", name: "KG Mini Power Tiller 9 HP", price_request: true, images: [IMG.small_farm], specs: { Engine: "Petrol 9 HP", Transmission: "3F + 1R", Weight: "180 kg", Tilling_Width: "850 mm" }, features: ["Compact design", "Easy maneuver", "Low fuel consumption"], applications: ["Kitchen gardens", "Polyhouses", "Small farms"], benefits: ["Affordable entry-level tiller", "Easy to transport"], warranty: "12 months warranty" },
  { slug: "kg-pw-6hp", category: "power-weeders", name: "KG Power Weeder 6 HP", price_request: true, images: [IMG.small_farm], specs: { Engine: "Petrol/Kerosene 6 HP", Width: "600 mm", Weight: "78 kg", Speed: "3F + 1R" }, features: ["Recoil start", "Adjustable depth", "Hardened tines"], applications: ["Inter-row weeding", "Orchard maintenance"], benefits: ["Saves manual labor", "Quick operation"], warranty: "12 months warranty" },
  { slug: "kg-bc-43cc", category: "brush-cutters", name: "KG Brush Cutter 43cc", price_request: true, images: [IMG.cutter_field], specs: { Engine: "2-stroke, 43cc", Power: "1.7 kW", Fuel_Tank: "1.1 L", Weight: "8.5 kg" }, features: ["Anti-vibration handle", "Easy-start system", "Metal blade + nylon trimmer"], applications: ["Grass cutting", "Bush trimming", "Paddy stubble"], benefits: ["Lightweight", "High RPM cutting"], warranty: "6 months warranty" },
  { slug: "kg-ea-52cc", category: "earth-augers", name: "KG Earth Auger 52cc", price_request: true, images: [IMG.seeds_sowing], specs: { Engine: "2-stroke 52cc", Power: "2.2 kW", Bit_Sizes: "4\", 6\", 8\", 10\", 12\"", Weight: "9 kg" }, features: ["Quick-fit bits", "Anti-kickback clutch", "Solo operation"], applications: ["Fence post holes", "Tree planting", "Soil sampling"], benefits: ["Digs holes in 30 seconds", "Saves significant labor"], warranty: "6 months warranty" },
];

export const TESTIMONIALS = [
  { name: "Ramesh Patil", role: "Farmer, Maharashtra", text: "KrishiGears ka power tiller liya — diesel kam khaata hai aur kaam zyada karta hai. Service bhi turant milti hai.", rating: 5 },
  { name: "Suresh Reddy", role: "Dealer, Andhra Pradesh", text: "We've been distributing KrishiGears equipment for 2 years. Quality is consistent and demand is strong across districts.", rating: 5 },
  { name: "Manjeet Singh", role: "Contractor, Punjab", text: "Brush cutters and reapers are champion — paddy harvesting season mein super reliable. Highly recommended.", rating: 5 },
  { name: "Anita Devi", role: "FPO President, Bihar", text: "Bulk order delivered on time to our farmer group. Genuine warranty and proper invoicing — fully trustworthy.", rating: 5 },
];

export const TRUST_BADGES = [
  { icon: "shield-check", label: "GST Registered Business" },
  { icon: "truck", label: "PAN India Delivery" },
  { icon: "badge-check", label: "Genuine Products" },
  { icon: "wrench", label: "Genuine Spare Parts" },
  { icon: "shield", label: "Warranty Support" },
  { icon: "zap", label: "Fast Dispatch" },
  { icon: "headphones", label: "Customer Service" },
  { icon: "handshake", label: "Dealer Assistance" },
];

export const SEO_PAGES = [
  { slug: "power-weeder-supplier-india", title: "Power Weeder Supplier in India", category: "power-weeders" },
  { slug: "power-tiller-supplier-india", title: "Power Tiller Supplier in India", category: "power-tillers" },
  { slug: "brush-cutter-supplier-india", title: "Brush Cutter Supplier in India", category: "brush-cutters" },
  { slug: "earth-auger-supplier-india", title: "Earth Auger Supplier in India", category: "earth-augers" },
  { slug: "agricultural-machinery-supplier-india", title: "Agricultural Machinery Supplier in India", category: null },
  { slug: "farming-equipment-supplier-india", title: "Farming Equipment Supplier in India", category: null },
];
