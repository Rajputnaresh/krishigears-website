import urllib.request
import json
import os

# 1. Fetch complete India states and districts data
url = "https://raw.githubusercontent.com/sab99r/Indian-States-And-Districts/master/states-and-districts.json"
try:
    req = urllib.request.Request(url, headers={'User-Agent': 'Mozilla/5.0'})
    with urllib.request.urlopen(req) as response:
        data = json.loads(response.read().decode())
except Exception as e:
    print(f"Error fetching data: {e}")
    # Fallback to a hardcoded subset if network fails
    data = {"states": [{"state": "Maharashtra", "districts": ["Pune", "Nagpur", "Mumbai", "Nashik", "Aurangabad", "Solapur", "Amravati"]}]}

CATEGORIES = [
    {"id": "power-weeders", "name": "Power Weeder"},
    {"id": "power-weeder-spare-parts", "name": "Power Weeder Spare Parts"}
]

STATE_CROPS = {
    "Maharashtra": ["Sugarcane", "Cotton", "Soybean"],
    "Gujarat": ["Cotton", "Groundnut", "Castor"],
    "Rajasthan": ["Mustard", "Cotton", "Bajra"],
    "Punjab": ["Wheat", "Sugarcane", "Maize"],
    "Haryana": ["Wheat", "Sugarcane", "Mustard"],
    "Uttar Pradesh": ["Sugarcane", "Wheat", "Rice"],
    "Madhya Pradesh": ["Soybean", "Wheat", "Cotton"],
    "Tamil Nadu": ["Rice", "Sugarcane", "Coconut"],
    "Karnataka": ["Coconut", "Arecanut", "Sugarcane"],
    "Andhra Pradesh": ["Rice", "Cotton", "Chilli"],
    "Telangana": ["Rice", "Cotton", "Turmeric"],
    "Bihar": ["Rice", "Wheat", "Maize"],
    "West Bengal": ["Rice", "Jute", "Vegetables"],
    "Odisha": ["Rice", "Vegetables", "Sugarcane"],
    "Chhattisgarh": ["Rice", "Soybean", "Maize"],
    "Jharkhand": ["Rice", "Vegetables", "Maize"],
    "Kerala": ["Coconut", "Rubber", "Arecanut"],
    "Assam": ["Tea", "Rice", "Jute"],
    "Uttarakhand": ["Sugarcane", "Rice", "Vegetables"]
}

HINDI = {
    "Power Weeder": "पावर वीडर",
    "Spare Parts": "स्पेयर पार्ट्स",
    "dealer": "डीलर",
    "wholesale": "थोक",
    "supply": "सप्लाई"
}

pages = []
urls = []
total_districts = 0

for state_obj in data.get("states", []):
    state = state_obj.get("state", "")
    districts = state_obj.get("districts", [])
    
    for city in districts:
        total_districts += 1
        # 1. Category x City pages
        for cat in CATEGORIES:
            slug = f"{cat['id']}-supplier-{city.lower().replace(' ', '-')}"
            title = f"{cat['name']} Dealer & Wholesale Supply in {city}"
            hindi_title = f"{city} में {HINDI['Power Weeder']} {HINDI['dealer']} और {HINDI['wholesale']} {HINDI['supply']}" if cat['id'] == 'power-weeders' else f"{city} में {HINDI['Power Weeder']} {HINDI['Spare Parts']} {HINDI['supply']}"
            
            pages.append({
                "slug": slug,
                "title": title,
                "category": cat["id"],
                "city": city,
                "state": state,
                "hindiTitle": hindi_title
            })
            urls.append(f"https://krishigears.com/seo/{slug}")
            
        # 2. Crop x City pages (top crop per state)
        crops = STATE_CROPS.get(state, [])
        if crops:
            primary_crop = crops[0]
            slug = f"power-weeder-{primary_crop.lower().replace(' ', '-')}-{city.lower().replace(' ', '-')}"
            title = f"Best Power Weeder for {primary_crop} Farming in {city}"
            hindi_title = f"{city} में {primary_crop} खेती के लिए सबसे अच्छा {HINDI['Power Weeder']}"
            
            pages.append({
                "slug": slug,
                "title": title,
                "category": "power-weeders",
                "city": city,
                "state": state,
                "crop": primary_crop,
                "hindiTitle": hindi_title
            })
            urls.append(f"https://krishigears.com/seo/{slug}")

# Generate JS file
js_content = "export const GEO_SEO_PAGES = " + json.dumps(pages, ensure_ascii=False) + ";\n"
with open("frontend/src/data/geoSeo.js", "w", encoding="utf-8") as f:
    f.write(js_content)

# Rebuild sitemap
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

# Add Blog URLs
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

# Add Geo URLs
for url in urls:
    sitemap += f"  <url><loc>{url}</loc><priority>0.7</priority></url>\n"

sitemap += "</urlset>\n"

with open("frontend/public/sitemap.xml", "w", encoding="utf-8") as f:
    f.write(sitemap)

print(f"Generated {len(pages)} Geo-SEO pages across {total_districts} districts.")
print(f"Sitemap updated with {len(urls) + len(core) + len(blog_slugs) + 2} URLs.")

