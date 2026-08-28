import urllib.parse

RKA = "https://raw.githubusercontent.com/Rajputnaresh/krishigears-website/main/assets"
WARRANTY_STD = "1 Year Manufacturer Warranty"
WARRANTY_6 = "6 Months Manufacturer Warranty"
WARRANTY_SPARE = "3 Months replacement on manufacturing defects"

COVER = {
    "weeder": f"{RKA}/2025/11/RK-ICP-UP170-SH-Back-Rotary.webp",
    "babyWeeder": f"{RKA}/2025/11/Baby-Weeder.webp",
    "crankshaft": f"{RKA}/2025/10/Crankshaft.webp",
    "piston": f"{RKA}/2025/10/Piston-and-Ring.webp",
    "recoil": f"{RKA}/2025/10/recoil-starter-assembly.webp",
}

def _features(extra=None):
    base = [
        "Genuine KrishiGears branded product",
        "Backed by manufacturer warranty",
        "PAN India delivery from KrishiGears",
        "Genuine spare parts availability"
    ]
    return base + (extra or [])

def _benefits(extra=None):
    base = [
        "Saves significant manual labour",
        "Reduces operating cost over time",
        "FMTTI-tested durability"
    ]
    return base + (extra or [])

PRODUCTS = [
  {
    "slug": "rk-170f", "category": "power-weeders",
    "name": "RK-170F Petrol Power Weeder (7 HP)",
    "model": "RK-170F", "badges": ["Bestseller", "FMTTI Tested"],
    "images": [COVER["weeder"]],
    "specs": { "Engine": "4 Stroke Petrol", "Power": "7 HP / 212cc", "Start": "Recoil", "Blades": "32 Dryland", "PTO": "Yes" },
    "features": _features(["Heavy-duty rotary attachment", "Adjustable handlebar", "Deep tilling capability"]),
    "applications": ["Sugarcane", "Cotton", "Vegetable inter-cultivation"],
    "benefits": _benefits(["Cuts labor costs by 70%", "Perfect for hard soil"]),
    "warranty": WARRANTY_STD,
  },
  {
    "slug": "rk-173f-diesel", "category": "power-weeders",
    "name": "RK-173F Diesel Power Weeder (5.5 HP)",
    "model": "RK-173F", "badges": ["High Torque"],
    "images": [COVER["weeder"]],
    "specs": { "Engine": "4 Stroke Diesel", "Power": "5.5 HP", "Start": "Recoil", "WorkingWidth": "3.5 Feet" },
    "features": _features(["High torque at low RPM", "Fuel efficient diesel engine", "Rugged transmission"]),
    "applications": ["Heavy clay soil", "Orchards", "Large farms"],
    "benefits": _benefits(["Low running cost", "Excellent for deep plowing"]),
    "warranty": WARRANTY_STD,
  },
  {
    "slug": "rk-177f-wolf", "category": "power-weeders",
    "name": "RK-177F WOLF Petrol Weeder (9 HP)",
    "model": "RK-177F", "badges": ["Heavy Duty"],
    "images": [COVER["weeder"]],
    "specs": { "Engine": "4 Stroke Petrol", "Power": "9 HP / 270cc", "Start": "Recoil", "WorkingDepth": "8-10 inches" },
    "features": _features(["9 HP massive power", "Direct drive transmission", "Wide tilling span"]),
    "applications": ["Commercial farming", "Hard terrain cultivation"],
    "benefits": _benefits(["Replaces tractor for mid-size farms", "High acreage coverage"]),
    "warranty": WARRANTY_STD,
  },
  {
    "slug": "rk-icp-p170-lde", "category": "power-weeders",
    "name": "RK-ICP-P170-LDE Electric Start Weeder",
    "model": "RK-ICP-P170-LDE", "badges": ["Premium", "Self Start"],
    "images": [COVER["weeder"]],
    "specs": { "Engine": "Petrol", "Power": "7 HP", "Start": "Key / Electric Start", "Weight": "85 kg" },
    "features": _features(["Electric Key Start", "LED Headlight for night work", "Anti-vibration mount"]),
    "applications": ["All crops", "Night operations"],
    "benefits": _benefits(["Zero effort starting", "Highly comfortable operation"]),
    "warranty": WARRANTY_STD,
  },
  {
    "slug": "rk-icp-up170-sh", "category": "power-weeders",
    "name": "RK-ICP-UP170-SH Back-Rotary Weeder",
    "model": "RK-ICP-UP170-SH", "badges": ["Back Rotary"],
    "images": [COVER["weeder"]],
    "specs": { "Engine": "Petrol", "Power": "7 HP", "Start": "Recoil", "Transmission": "Gear Drive" },
    "features": _features(["Active back rotary action", "Perfectly balanced center of gravity"]),
    "applications": ["Weed control in narrow rows", "Soft soil tilling"],
    "benefits": _benefits(["Leaves finely milled soil", "Operator fatigue reduced by 50%"]),
    "warranty": WARRANTY_STD,
  },
  {
    "slug": "rk-icd-up186-sh", "category": "power-weeders",
    "name": "RK-ICD-UP186-SH Diesel (10 HP)",
    "model": "RK-ICD-UP186-SH", "badges": ["Professional", "10 HP"],
    "images": [COVER["weeder"]],
    "specs": { "Engine": "Diesel", "Power": "10 HP", "Start": "Recoil / Electric", "PTO": "Dual PTO" },
    "features": _features(["Massive 10 HP diesel engine", "Multi-attachment ready (Reaper, Water Pump)"]),
    "applications": ["Contract farming", "Rental services", "Large estates"],
    "benefits": _benefits(["Industrial grade durability", "Can power water pumps directly"]),
    "warranty": WARRANTY_STD,
  },
  {
    "slug": "rk-baby-weeder", "category": "power-weeders",
    "name": "RK Baby Weeder (Lightweight)",
    "model": "RK-BW", "badges": ["Compact"],
    "images": [COVER["babyWeeder"]],
    "specs": { "Type": "Compact Baby Weeder", "Weight": "Ultra Light" },
    "features": _features(["Lightweight & maneuverable", "Easy for women & senior farmers"]),
    "applications": ["Rice paddy", "Small kitchen gardens", "Greenhouses"],
    "benefits": _benefits(["80% weed reduction in tight spaces"]),
    "warranty": WARRANTY_STD,
  },
  {
    "slug": "rk-crankshaft", "category": "power-weeder-spare-parts",
    "name": "Crankshaft Assembly (7 HP / 9 HP)",
    "model": "RK-CRANK-WEEDER", "badges": ["Spare Part"],
    "images": [COVER["crankshaft"]],
    "specs": { "Type": "Crankshaft", "Grade": "OEM", "Compatibility": "RK-170F, RK-177F" },
    "features": _features(["Genuine OEM grade forged steel", "Precision machined"]),
    "applications": ["Engine overhaul", "Service center stock"],
    "benefits": _benefits(["Restores factory engine performance"]),
    "warranty": WARRANTY_SPARE,
  },
  {
    "slug": "rk-piston-ring", "category": "power-weeder-spare-parts",
    "name": "Piston & Ring Set (Standard & Oversize)",
    "model": "RK-PISTON-WEEDER", "badges": ["Spare Part"],
    "images": [COVER["piston"]],
    "specs": { "Type": "Piston & Ring", "Grade": "OEM", "Compatibility": "All Petrol Weeders" },
    "features": _features(["Low friction alloy", "Heat resistant rings"]),
    "applications": ["Engine rebuilds", "Compression loss repair"],
    "benefits": _benefits(["Eliminates oil burning", "Restores full compression"]),
    "warranty": WARRANTY_SPARE,
  },
  {
    "slug": "rk-recoil-starter", "category": "power-weeder-spare-parts",
    "name": "Recoil Starter Assembly (Pull Cord)",
    "model": "RK-RECOIL-WEEDER", "badges": ["Spare Part"],
    "images": [COVER["recoil"]],
    "specs": { "Type": "Recoil Starter Assembly", "Compatibility": "RK-170F, RK-173F" },
    "features": _features(["Easy-pull ratcheting mechanism", "Heavy duty nylon cord"]),
    "applications": ["Broken pull cord repair"],
    "benefits": _benefits(["Quick field replacement"]),
    "warranty": WARRANTY_SPARE,
  }
]
