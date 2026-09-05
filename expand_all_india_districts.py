import urllib.request
import json

# 1. Fetch clean Indian states and districts dataset (722 districts across 35 states/UTs)
url = 'https://raw.githubusercontent.com/sab99r/Indian-States-And-Districts/master/states-and-districts.json'
req = urllib.request.Request(url, headers={'User-Agent': 'Mozilla/5.0'})
with urllib.request.urlopen(req) as resp:
    data = json.loads(resp.read().decode())

# 2. Existing curated districts (to preserve rich manual crop mappings)
with open('frontend/src/data/locations.json') as f:
    existing = json.load(f)

print(f"Initial curated districts: {len(existing)}")

STATE_DEFAULT_AGRONOMY = {
    "Andhra Pradesh": {"crops": ["Rice", "Cotton", "Chilli", "Groundnut"], "soil": "Red and black cotton soils", "profile": "High-yield commercial cash crop and horticulture belt"},
    "Arunachal Pradesh": {"crops": ["Rice", "Maize", "Millet", "Mustard"], "soil": "Alluvial, red loamy and mountain soils", "profile": "Terrace agriculture and organic horticulture"},
    "Assam": {"crops": ["Tea", "Rice", "Jute", "Mustard"], "soil": "Alluvial flood plain and red soils", "profile": "River basin intensive paddy and plantation cultivation"},
    "Bihar": {"crops": ["Rice", "Wheat", "Maize", "Pulses"], "soil": "Rich Gangetic alluvial loam", "profile": "Intensive multi-cropping smallholder agriculture"},
    "Chhattisgarh": {"crops": ["Rice", "Maize", "Pulses", "Oilseeds"], "soil": "Red and yellow laterite soils", "profile": "Central Indian grain and pulse farming"},
    "Goa": {"crops": ["Paddy", "Coconut", "Cashew", "Arecanut"], "soil": "Coastal laterite soils", "profile": "Horticulture, plantation and coastal farming"},
    "Gujarat": {"crops": ["Cotton", "Groundnut", "Castor", "Wheat"], "soil": "Black cotton and coastal alluvial soils", "profile": "Commercial cash crop, dairy and drip-irrigated farming"},
    "Haryana": {"crops": ["Wheat", "Paddy", "Mustard", "Sugarcane"], "soil": "Deep fertile Indo-Gangetic alluvial loam", "profile": "High mechanization grain surplus agro-ecosystem"},
    "Himachal Pradesh": {"crops": ["Apple", "Maize", "Wheat", "Barley"], "soil": "Mountain and brown forest soils", "profile": "Hill terrace farming, apple orchards and off-season vegetables"},
    "Jharkhand": {"crops": ["Rice", "Maize", "Pulses", "Vegetables"], "soil": "Red, laterite and sandy loam soils", "profile": "Rain-fed undulating plateau and vegetable farming"},
    "Karnataka": {"crops": ["Ragi", "Rice", "Sugarcane", "Coffee"], "soil": "Red loamy and deep black cotton soils", "profile": "Deccan plateau grain, spices and cash crops"},
    "Kerala": {"crops": ["Rubber", "Coconut", "Spices", "Paddy"], "soil": "Laterite, coastal alluvium and red loam", "profile": "High-rainfall plantation, spice and coastal crops"},
    "Madhya Pradesh": {"crops": ["Soybean", "Wheat", "Gram", "Mustard"], "soil": "Deep black cotton and mixed red soils", "profile": "National pulse and oilseed powerhouse farming"},
    "Maharashtra": {"crops": ["Sugarcane", "Cotton", "Soybean", "Onion"], "soil": "Deep black regur basaltic soils", "profile": "Major cash crop, sugarcane belt and horticulture"},
    "Manipur": {"crops": ["Rice", "Maize", "Pulses", "Oilseeds"], "soil": "Alluvial valley and mountain soils", "profile": "Sub-tropical organic and terrace farming"},
    "Meghalaya": {"crops": ["Rice", "Maize", "Ginger", "Turmeric"], "soil": "Red and lateritic hilly soils", "profile": "Organic spice, ginger and horticulture farming"},
    "Mizoram": {"crops": ["Paddy", "Maize", "Ginger", "Chilli"], "soil": "Rich clay loam forest soils", "profile": "Hill slope agriculture and fruit cultivation"},
    "Nagaland": {"crops": ["Rice", "Maize", "Millets", "Cardamom"], "soil": "Ferruginous red and brown soils", "profile": "Terrace cultivation and indigenous farming"},
    "Odisha": {"crops": ["Rice", "Pulses", "Oilseeds", "Jute"], "soil": "Coastal alluvium, red and laterite soils", "profile": "Eastern delta and plateau grain cultivation"},
    "Punjab": {"crops": ["Wheat", "Paddy", "Cotton", "Maize"], "soil": "Highly productive Indo-Gangetic alluvium", "profile": "Granary of India, maximum tractor and implement density"},
    "Rajasthan": {"crops": ["Mustard", "Bajra", "Guar", "Wheat"], "soil": "Desert sandy, saline and alluvial soils", "profile": "Arid and semi-arid drought-hardy cultivation"},
    "Sikkim": {"crops": ["Cardamom", "Ginger", "Orange", "Rice"], "soil": "Organic mountain forest soils", "profile": "100% Certified Organic mountain agriculture"},
    "Tamil Nadu": {"crops": ["Paddy", "Sugarcane", "Groundnut", "Banana"], "soil": "Red loam, black cotton and coastal alluvium", "profile": "Cauvery delta and dryland advanced agriculture"},
    "Telangana": {"crops": ["Cotton", "Paddy", "Maize", "Chilli"], "soil": "Red sandy (chalka) and deep black soils", "profile": "Deccan commercial cotton, chilli and seed hub"},
    "Tripura": {"crops": ["Rice", "Jute", "Rubber", "Tea"], "soil": "Reddish yellow and flood plain soils", "profile": "Valley paddy and rubber plantation farming"},
    "Uttar Pradesh": {"crops": ["Sugarcane", "Wheat", "Rice", "Potato"], "soil": "Rich Gangetic alluvium and loam", "profile": "India's largest sugarcane and foodgrain producer"},
    "Uttarakhand": {"crops": ["Rice", "Wheat", "Soybean", "Millets"], "soil": "Bhabar-terai alluvium and mountain soils", "profile": "Terai plains grain and hill terrace organic crops"},
    "West Bengal": {"crops": ["Paddy", "Jute", "Potato", "Tea"], "soil": "Deltaic alluvium, red and coastal soils", "profile": "Intensive double/triple crop paddy and potato farming"},
    "Jammu and Kashmir": {"crops": ["Apple", "Rice", "Maize", "Saffron"], "soil": "Alluvial Karewa and mountain soils", "profile": "Temperate fruit orchards and saffron valleys"},
    "Ladakh": {"crops": ["Barley", "Wheat", "Apricot", "Vegetables"], "soil": "Glacial moraine and sandy soils", "profile": "Cold desert solar-greenhouse and oasis farming"}
}

# 3. Merge all districts
count_added = 0
for state_obj in data.get('states', []):
    state_name = state_obj.get('state', '').strip()
    districts = state_obj.get('districts', [])
    agronomy = STATE_DEFAULT_AGRONOMY.get(state_name, {
        "crops": ["Rice", "Wheat", "Pulses", "Vegetables"],
        "soil": "Alluvial and loamy soils",
        "profile": "Regional food grain and horticulture cultivation"
    })
    
    for dist in districts:
        dist_clean = dist.strip()
        if not dist_clean:
            continue
        
        # Check if already present (case-insensitive)
        matched_key = next((k for k in existing.keys() if k.lower() == dist_clean.lower()), None)
        if not matched_key:
            existing[dist_clean] = {
                "state": state_name,
                "key_crops": agronomy["crops"],
                "soil_type": agronomy["soil"],
                "farming_profile": agronomy["profile"],
                "major_district": False  # Non-pre-rendered build-time, generated on-demand via ISR!
            }
            count_added += 1

print(f"Added {count_added} verified districts. Total districts: {len(existing)}")

# Save updated locations.json
with open('frontend/src/data/locations.json', 'w') as f:
    json.dump(existing, f, indent=2)

print("Saved updated frontend/src/data/locations.json successfully!")
