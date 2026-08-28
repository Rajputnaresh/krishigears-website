import re

with open("frontend/src/data/catalog.js", "r") as f:
    text = f.read()

# Replace CATEGORIES
new_categories = """export const CATEGORIES = [
  { slug: "power-weeders", name: "Power Weeders", icon: Tractor, image: COVER.weeder },
  { slug: "power-weeder-spare-parts", name: "Power Weeder Spare Parts", icon: Wrench, image: COVER.crankshaft },
];"""
text = re.sub(r"export const CATEGORIES = \[.*?\];", new_categories, text, flags=re.DOTALL)


# Replace PRODUCTS
# I will use a regex to capture everything from `export const PRODUCTS = [` up to the next `export const TESTIMONIALS`
new_products = """export const PRODUCTS = [
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
];"""
text = re.sub(r"export const PRODUCTS = \[.*?\];", new_products, text, flags=re.DOTALL)


# Replace SEO_PAGES
new_seo_pages = """export const SEO_PAGES = [...GEO_SEO_PAGES, 
  { slug: "power-weeder-supplier-india", title: "Power Weeder Dealer Network & Bulk Supply", category: "power-weeders" },
  { slug: "power-weeder-spare-parts-supplier-india", title: "Power Weeder Spare Parts Distributor & OEM Supply", category: "power-weeder-spare-parts" }
];"""
text = re.sub(r"export const SEO_PAGES = \[.*?\];", new_seo_pages, text, flags=re.DOTALL)

with open("frontend/src/data/catalog.js", "w") as f:
    f.write(text)

