// KrishiGears product catalog data
import {
  Tractor, Wrench, Scissors, Drill, SprayCan, Droplets,
  Trees, Sprout, Wheat, Cog, Settings, Hammer, CircleDot, Package, Zap
} from "lucide-react";

export const LOGO_URL = "https://customer-assets.emergentagent.com/job_2f7e8e24-8a87-4e22-80ae-e4a8236f7388/artifacts/1qde0bgj_Screenshot%202026-05-31%20at%206.41.53%E2%80%AFPM.png";

export const HERO_BG = "https://static.prod-images.emergentagent.com/jobs/2f7e8e24-8a87-4e22-80ae-e4a8236f7388/images/9862aaeb293a349960ecdc460806fb8e845ef8f429f07916720d038ddd900a0c.png";
export const INDIA_MAP = "https://static.prod-images.emergentagent.com/jobs/2f7e8e24-8a87-4e22-80ae-e4a8236f7388/images/ff6f800948e74c34944cb1e852b7e44ed1b403d82f8a109308aa798d597de06e.png";
export const ABSTRACT_TERRAIN = "https://static.prod-images.emergentagent.com/jobs/2f7e8e24-8a87-4e22-80ae-e4a8236f7388/images/302977c3a18070a0158c2af9eb152ac221f3f38edc6076959ee3d8560900c403.png";
export const FARMER_FIELD = "https://images.pexels.com/photos/29039798/pexels-photo-29039798.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940";
export const FIELD_TRACTOR = "https://images.unsplash.com/photo-1606739211185-2c846d734a6d?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2NzV8MHwxfHNlYXJjaHwzfHxtb2Rlcm4lMjBhZ3JpY3VsdHVyYWwlMjBtYWNoaW5lcnklMjB0cmFjdG9yJTIwZmllbGR8ZW58MHx8fHwxNzgwMzI0NzgxfDA&ixlib=rb-4.1.0&q=85";
export const PLOWING = "https://images.pexels.com/photos/2933243/pexels-photo-2933243.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940";

export const COMPANY = {
  name: "KrishiGears",
  tagline: "For the Farmers, With the Farmer, To the Farmer, HAMESHA",
  website: "KrishiGears.in",
  email: "sales@krishigears.com",
  support: "support@krishigears.com",
  phone: "+91 98765 43210",
  whatsapp: "919876543210",
  address: "PAN India Supply & Service Network",
};

export const CATEGORIES = [
  { slug: "power-tillers", name: "Power Tillers", icon: Tractor, image: "https://images.unsplash.com/photo-1717774070207-7afbb9f30d59?w=900&q=80&auto=format&fit=crop", short: "Heavy-duty tillers for paddy, wheat & vegetable cultivation.", featured: true },
  { slug: "power-weeders", name: "Power Weeders", icon: Sprout, image: "https://images.unsplash.com/photo-1592982537447-7440770faae2?w=900&q=80&auto=format&fit=crop", short: "Compact weeders for row crops, orchards and gardens.", featured: true },
  { slug: "brush-cutters", name: "Brush Cutters", icon: Scissors, image: "https://images.unsplash.com/photo-1505471768190-275e2ad7b3f9?w=900&q=80&auto=format&fit=crop", short: "Powerful 2-stroke and 4-stroke brush cutters for grass & bushes.", featured: true },
  { slug: "earth-augers", name: "Earth Augers", icon: Drill, image: "https://images.unsplash.com/photo-1581094488379-6b6a3a3c3c8d?w=900&q=80&auto=format&fit=crop", short: "Single & double-man earth augers for planting and fencing.", featured: true },
  { slug: "battery-sprayers", name: "Battery Sprayers", icon: SprayCan, image: "https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=900&q=80&auto=format&fit=crop", short: "12V & 16L battery knapsack sprayers — silent & efficient." },
  { slug: "power-sprayers", name: "Power Sprayers", icon: SprayCan, image: "https://images.unsplash.com/photo-1576502200916-3808e07386a5?w=900&q=80&auto=format&fit=crop", short: "High-pressure power sprayers for plantations & large farms." },
  { slug: "water-pumps", name: "Water Pumps", icon: Droplets, image: "https://images.unsplash.com/photo-1473773508845-188df298d2d1?w=900&q=80&auto=format&fit=crop", short: "Petrol/diesel water pump sets for irrigation & drainage." },
  { slug: "chain-saws", name: "Chain Saws", icon: Trees, image: "https://images.unsplash.com/photo-1611273426858-450d8e3c9fce?w=900&q=80&auto=format&fit=crop", short: "Professional chain saws for cutting wood and pruning." },
  { slug: "mini-cultivators", name: "Mini Cultivators", icon: Tractor, image: "https://images.unsplash.com/photo-1623211000022-da014f2ce62d?w=900&q=80&auto=format&fit=crop", short: "Lightweight mini cultivators for kitchen gardens & polyhouses." },
  { slug: "seeders", name: "Seeders", icon: Sprout, image: "https://images.unsplash.com/photo-1592982537447-7440770faae2?w=900&q=80&auto=format&fit=crop", short: "Manual & power seeders for precision sowing." },
  { slug: "reapers", name: "Reapers", icon: Wheat, image: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=900&q=80&auto=format&fit=crop", short: "Self-propelled paddy & wheat reapers for fast harvest." },
  { slug: "chaff-cutters", name: "Chaff Cutters", icon: Scissors, image: "https://images.unsplash.com/photo-1500076656116-558758c991c1?w=900&q=80&auto=format&fit=crop", short: "Electric & engine-driven chaff cutters for fodder preparation." },
  { slug: "agricultural-engines", name: "Agricultural Engines", icon: Cog, image: "https://images.unsplash.com/photo-1486006920555-c77dcf18193c?w=900&q=80&auto=format&fit=crop", short: "Reliable kerosene, diesel & petrol agricultural engines." },
  { slug: "agricultural-spare-parts", name: "Agricultural Spare Parts", icon: Settings, image: "https://images.unsplash.com/photo-1581094288338-2314dddb7ece?w=900&q=80&auto=format&fit=crop", short: "Genuine spare parts for all major machinery brands." },
  { slug: "power-weeder-spare-parts", name: "Power Weeder Spare Parts", icon: Settings, image: "https://images.unsplash.com/photo-1593941707882-a5bba14938c7?w=900&q=80&auto=format&fit=crop", short: "OEM-grade replacement parts for power weeders." },
  { slug: "brush-cutter-spare-parts", name: "Brush Cutter Spare Parts", icon: Wrench, image: "https://images.unsplash.com/photo-1581094488379-6b6a3a3c3c8d?w=900&q=80&auto=format&fit=crop", short: "Blades, harnesses, coils, nylon heads & complete kits." },
  { slug: "htp-pumps", name: "HTP Pumps", icon: Droplets, image: "https://images.unsplash.com/photo-1565193566173-7a0ee3dbe261?w=900&q=80&auto=format&fit=crop", short: "High Triplex pumps for high-pressure spraying needs." },
  { slug: "rotavator-blades", name: "Rotavator Blades", icon: CircleDot, image: "https://images.unsplash.com/photo-1592982537447-7440770faae2?w=900&q=80&auto=format&fit=crop", short: "Hardened L & C-type rotavator blades — long-lasting edge." },
  { slug: "agricultural-accessories", name: "Agricultural Accessories", icon: Package, image: "https://images.unsplash.com/photo-1574943320219-553eb213f72d?w=900&q=80&auto=format&fit=crop", short: "Tool kits, fuel cans, safety gear & farm essentials." },
];

// Sample products (3 per featured category)
export const PRODUCTS = [
  // Power Tillers
  { slug: "kg-pt-15hp", category: "power-tillers", name: "KG Power Tiller 15 HP", price_request: true, images: ["https://images.unsplash.com/photo-1717774070207-7afbb9f30d59?w=1200&q=80&auto=format&fit=crop", "https://images.unsplash.com/photo-1592982537447-7440770faae2?w=1200&q=80&auto=format&fit=crop"], specs: { Engine: "Diesel 15 HP, 4-stroke", "Fuel Tank": "5.5 L", Transmission: "6F + 2R", Weight: "395 kg", Tilling_Width: "1200 mm", Rotor_Speed: "260 RPM" }, features: ["Heavy-duty cast iron gearbox", "Double-shift gear", "Self-start option", "Adjustable handle", "Wide tilling coverage"], applications: ["Paddy fields", "Wheat fields", "Vegetable cultivation", "Horticulture"], benefits: ["Reduces ploughing time by 60%", "Low maintenance cost", "Fuel efficient"], warranty: "12 months manufacturer warranty + free service" },
  { slug: "kg-pt-9hp", category: "power-tillers", name: "KG Mini Power Tiller 9 HP", price_request: true, images: ["https://images.unsplash.com/photo-1623211000022-da014f2ce62d?w=1200&q=80&auto=format&fit=crop"], specs: { Engine: "Petrol 9 HP", Transmission: "3F + 1R", Weight: "180 kg", Tilling_Width: "850 mm" }, features: ["Compact design", "Easy maneuver", "Low fuel consumption"], applications: ["Kitchen gardens", "Polyhouses", "Small farms"], benefits: ["Affordable entry-level tiller", "Easy to transport"], warranty: "12 months warranty" },
  // Power Weeders
  { slug: "kg-pw-6hp", category: "power-weeders", name: "KG Power Weeder 6 HP", price_request: true, images: ["https://images.unsplash.com/photo-1592982537447-7440770faae2?w=1200&q=80&auto=format&fit=crop"], specs: { Engine: "Petrol/Kerosene 6 HP", Width: "600 mm", Weight: "78 kg", Speed: "3F + 1R" }, features: ["Recoil start", "Adjustable depth", "Hardened tines"], applications: ["Inter-row weeding", "Orchard maintenance"], benefits: ["Saves manual labor", "Quick operation"], warranty: "12 months warranty" },
  // Brush Cutters
  { slug: "kg-bc-43cc", category: "brush-cutters", name: "KG Brush Cutter 43cc", price_request: true, images: ["https://images.unsplash.com/photo-1505471768190-275e2ad7b3f9?w=1200&q=80&auto=format&fit=crop"], specs: { Engine: "2-stroke, 43cc", Power: "1.7 kW", Fuel_Tank: "1.1 L", Weight: "8.5 kg" }, features: ["Anti-vibration handle", "Easy-start system", "Metal blade + nylon trimmer"], applications: ["Grass cutting", "Bush trimming", "Paddy stubble"], benefits: ["Lightweight", "High RPM cutting"], warranty: "6 months warranty" },
  // Earth Augers
  { slug: "kg-ea-52cc", category: "earth-augers", name: "KG Earth Auger 52cc", price_request: true, images: ["https://images.unsplash.com/photo-1581094288338-2314dddb7ece?w=1200&q=80&auto=format&fit=crop"], specs: { Engine: "2-stroke 52cc", Power: "2.2 kW", Bit_Sizes: "4\", 6\", 8\", 10\", 12\"", Weight: "9 kg" }, features: ["Quick-fit bits", "Anti-kickback clutch", "Solo operation"], applications: ["Fence post holes", "Tree planting", "Soil sampling"], benefits: ["Digs holes in 30 seconds", "Saves significant labor"], warranty: "6 months warranty" },
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
