import urllib.request
import json
import os
import sys

# 1. Fetch States and Cities (Tehsils/Towns)
try:
    print("Fetching States...", flush=True)
    req = urllib.request.Request("https://raw.githubusercontent.com/hiiamrohit/Countries-States-Cities-database/master/states.json", headers={'User-Agent': 'Mozilla/5.0'})
    with urllib.request.urlopen(req) as response:
        states_data = json.loads(response.read().decode())['states']
    india_states = {s['id']: s['name'] for s in states_data if s['country_id'] == '101'}

    print("Fetching Cities/Tehsils...", flush=True)
    req = urllib.request.Request("https://raw.githubusercontent.com/hiiamrohit/Countries-States-Cities-database/master/cities.json", headers={'User-Agent': 'Mozilla/5.0'})
    with urllib.request.urlopen(req) as response:
        cities_data = json.loads(response.read().decode())['cities']
    
    indian_cities = []
    seen = set()
    for c in cities_data:
        if c['state_id'] in india_states:
            city_name = c['name'].strip()
            state_name = india_states[c['state_id']].replace(" and ", " & ") # standardizing
            key = f"{city_name}-{state_name}".lower()
            if key not in seen:
                seen.add(key)
                indian_cities.append((city_name, state_name))

except Exception as e:
    print(f"Error fetching data: {e}")
    sys.exit(1)

print(f"Total Unique Indian Cities/Tehsils loaded: {len(indian_cities)}")

CATEGORIES = [
    {"id": "power-weeders", "name": "Power Weeder"},
    {"id": "power-weeder-spare-parts", "name": "Power Weeder Spare Parts"}
]

STATE_CROPS = {
    "Maharashtra": "Sugarcane", "Gujarat": "Cotton", "Rajasthan": "Mustard",
    "Punjab": "Wheat", "Haryana": "Wheat", "Uttar Pradesh": "Sugarcane",
    "Madhya Pradesh": "Soybean", "Tamil Nadu": "Rice", "Karnataka": "Coconut",
    "Andhra Pradesh": "Rice", "Telangana": "Rice", "Bihar": "Rice",
    "West Bengal": "Rice", "Odisha": "Rice", "Chhattisgarh": "Rice",
    "Jharkhand": "Rice", "Kerala": "Coconut", "Assam": "Tea", "Uttarakhand": "Sugarcane"
}

HINDI = {
    "Power Weeder": "पावर वीडर", "Spare Parts": "स्पेयर पार्ट्स",
    "dealer": "डीलर", "wholesale": "थोक", "supply": "सप्लाई"
}

geo_pages = []
service_pages = []
spare_parts_pages = []
urls = []

print("Generating localized pages...", flush=True)

for city, state in indian_cities:
    city_slug = city.lower().replace(" ", "-").replace("'", "").replace(".", "")
    
    # 1. Geo SEO Pages (Dealer & Wholesale + Crops)
    for cat in CATEGORIES:
        slug = f"{cat['id']}-supplier-{city_slug}"
        title = f"{cat['name']} Dealer & Wholesale Supply in {city}"
        hindi_title = f"{city} में {HINDI['Power Weeder']} {HINDI['dealer']} और {HINDI['wholesale']} {HINDI['supply']}" if cat['id'] == 'power-weeders' else f"{city} में {HINDI['Power Weeder']} {HINDI['Spare Parts']} {HINDI['supply']}"
        
        geo_pages.append({
            "slug": slug, "title": title, "category": cat["id"],
            "city": city, "state": state, "hindiTitle": hindi_title
        })
        urls.append(f"https://krishigears.com/seo/{slug}")
        
    # Crop pages
    crop = STATE_CROPS.get(state) or STATE_CROPS.get(state.replace(" & ", " and "))
    if crop:
        slug = f"power-weeder-{crop.lower().replace(' ', '-')}-{city_slug}"
        title = f"Best Power Weeder for {crop} Farming in {city}"
        hindi_title = f"{city} में {crop} खेती के लिए सबसे अच्छा {HINDI['Power Weeder']}"
        
        geo_pages.append({
            "slug": slug, "title": title, "category": "power-weeders",
            "city": city, "state": state, "crop": crop, "hindiTitle": hindi_title
        })
        urls.append(f"https://krishigears.com/seo/{slug}")

    # 2. Service Pages
    srv_slug = f"power-weeder-repair-service-in-{city_slug}"
    service_pages.append({
        "slug": srv_slug, "city": city, "state": state,
        "title": f"Power Weeder Repair & Service Center in {city}, {state}"
    })
    urls.append(f"https://krishigears.com/service/{srv_slug}")

    # 3. Spare Parts Pages
    sp_slug = f"power-weeder-spare-parts-in-{city_slug}"
    spare_parts_pages.append({
        "slug": sp_slug, "city": city, "state": state,
        "title": f"Power Weeder Spare Parts in {city}, {state} - OEM Supply"
    })
    urls.append(f"https://krishigears.com/spare-parts/{sp_slug}")

print("Writing JS data files...", flush=True)

def write_js_file(filename, var_name, map_name, data):
    with open(filename, "w", encoding="utf-8") as f:
        f.write(f"export const {var_name} = {json.dumps(data, ensure_ascii=False)};\n")
        f.write(f"export const {map_name} = new Map({var_name}.map(p => [p.slug, p]));\n")

write_js_file("frontend/src/data/geoSeo.js", "GEO_SEO_PAGES", "SEO_PAGES_MAP", geo_pages)
write_js_file("frontend/src/data/serviceSeo.js", "SERVICE_PAGES", "SERVICE_MAP", service_pages)
write_js_file("frontend/src/data/sparePartsSeo.js", "SPARE_PARTS_PAGES", "SPARE_PARTS_MAP", spare_parts_pages)

print("Writing sitemap.xml...", flush=True)

DEALER_STATES = [
  "andhra-pradesh", "assam", "bihar", "chhattisgarh", "goa", "gujarat", 
  "haryana", "himachal-pradesh", "jharkhand", "karnataka", "kerala", 
  "madhya-pradesh", "maharashtra", "manipur", "meghalaya", "mizoram", 
  "nagaland", "odisha", "punjab", "rajasthan", "tamil-nadu", "telangana", 
  "tripura", "uttar-pradesh", "uttarakhand", "west-bengal"
]

sitemap = '<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n'
core = [
    ("/", "1.0", "weekly"), ("/about", "0.8", None), ("/products", "0.9", "weekly"),
    ("/dealer-network", "0.8", None), ("/become-a-dealer", "0.8", None),
    ("/bulk-order", "0.8", None), ("/contact", "0.7", None),
    ("/warranty-and-support", "0.7", None), ("/blog", "0.9", "weekly"),
    ("/products/category/power-weeders", "0.9", None),
    ("/products/category/power-weeder-spare-parts", "0.9", None),
]
for path, prio, freq in core:
    freq_tag = f"<changefreq>{freq}</changefreq>" if freq else ""
    sitemap += f"  <url><loc>https://krishigears.com{path}</loc><priority>{prio}</priority>{freq_tag}</url>\n"

sitemap += '  <url><loc>https://krishigears.com/seo/power-weeder-supplier-india</loc><priority>0.9</priority></url>\n'
sitemap += '  <url><loc>https://krishigears.com/seo/power-weeder-spare-parts-supplier-india</loc><priority>0.9</priority></url>\n'

blog_slugs = [
    "power-weeder-buying-guide-2026", "rk-170f-vs-177f-vs-173f-comparison", "power-weeder-government-subsidy-dbt-guide",
    "power-weeder-maintenance-spare-parts-guide", "best-power-weeder-sugarcane-maharashtra",
    "best-power-weeder-rice-paddy-tamil-nadu", "power-weeder-rental-business-india",
    "power-weeder-vs-power-tiller", "10-hp-diesel-power-weeder-upgrade-guide", "power-weeder-blade-replacement-guide",
    "power-weeder-crankshaft-failure-diagnosis", "power-weeder-recoil-starter-fix",
    "best-power-weeder-cotton-farming-gujarat", "power-weeder-coconut-arecanut-karnataka", "fpo-bulk-order-power-weeder-subsidy"
]
for slug in blog_slugs:
    sitemap += f'  <url><loc>https://krishigears.com/blog/{slug}</loc><priority>0.8</priority></url>\n'

for state in DEALER_STATES:
    sitemap += f"  <url><loc>https://krishigears.com/dealer/{state}</loc><priority>0.8</priority></url>\n"
    sitemap += f"  <url><loc>https://krishigears.com/become-a-dealer/{state}</loc><priority>0.8</priority></url>\n"

# Add the 20k+ Geo, Service, Spare Parts URLs
for url in urls:
    sitemap += f"  <url><loc>{url}</loc><priority>0.7</priority></url>\n"

sitemap += "</urlset>\n"

with open("frontend/public/sitemap.xml", "w", encoding="utf-8") as f:
    f.write(sitemap)

print(f"DONE! Generated {len(urls)} localized URLs (Geo + Service + Spares) for {len(indian_cities)} cities/tehsils.")
print(f"Total Sitemap URLs: {len(core) + 2 + len(blog_slugs) + len(DEALER_STATES)*2 + len(urls)}")
