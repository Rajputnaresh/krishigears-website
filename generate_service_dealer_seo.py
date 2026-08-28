import json

# Load the states from DealerState.jsx statically
DEALER_STATES = [
  "andhra-pradesh", "assam", "bihar", "chhattisgarh", "goa", "gujarat", 
  "haryana", "himachal-pradesh", "jharkhand", "karnataka", "kerala", 
  "madhya-pradesh", "maharashtra", "manipur", "meghalaya", "mizoram", 
  "nagaland", "odisha", "punjab", "rajasthan", "tamil-nadu", "telangana", 
  "tripura", "uttar-pradesh", "uttarakhand", "west-bengal"
]

# Read the existing geoSeo.js to extract all 722 districts
with open("frontend/src/data/geoSeo.js", "r", encoding="utf-8") as f:
    content = f.read()
    # Extract the JSON array string
    json_str = content[content.find('['):content.rfind(']')+1]
    geo_pages = json.loads(json_str)

# We want unique cities (districts)
cities = {}
for page in geo_pages:
    if page['city'] not in cities:
        cities[page['city']] = page['state']

service_pages = []
spare_parts_pages = []

for city, state in cities.items():
    city_slug = city.lower().replace(" ", "-")
    
    # Spare parts slug
    sp_slug = f"power-weeder-spare-parts-in-{city_slug}"
    spare_parts_pages.append({
        "slug": sp_slug,
        "city": city,
        "state": state,
        "title": f"Power Weeder Spare Parts in {city}, {state} - OEM Supply"
    })
    
    # Service slug
    srv_slug = f"power-weeder-repair-service-in-{city_slug}"
    service_pages.append({
        "slug": srv_slug,
        "city": city,
        "state": state,
        "title": f"Power Weeder Repair & Service Center in {city}, {state}"
    })

# Write to JS files
sp_content = "export const SPARE_PARTS_PAGES = " + json.dumps(spare_parts_pages, ensure_ascii=False) + ";\n"
sp_content += "export const SPARE_PARTS_MAP = new Map(SPARE_PARTS_PAGES.map(p => [p.slug, p]));\n"
with open("frontend/src/data/sparePartsSeo.js", "w", encoding="utf-8") as f:
    f.write(sp_content)

srv_content = "export const SERVICE_PAGES = " + json.dumps(service_pages, ensure_ascii=False) + ";\n"
srv_content += "export const SERVICE_MAP = new Map(SERVICE_PAGES.map(p => [p.slug, p]));\n"
with open("frontend/src/data/serviceSeo.js", "w", encoding="utf-8") as f:
    f.write(srv_content)

print(f"Generated {len(spare_parts_pages)} Spare Parts pages and {len(service_pages)} Service pages.")

# Now update sitemap.xml
with open("frontend/public/sitemap.xml", "r", encoding="utf-8") as f:
    sitemap = f.read()

# Remove closing tag to append
sitemap = sitemap.replace("</urlset>\n", "")

# Add dealer pages
for state in DEALER_STATES:
    sitemap += f"  <url><loc>https://krishigears.com/dealer/{state}</loc><priority>0.8</priority></url>\n"
    sitemap += f"  <url><loc>https://krishigears.com/become-a-dealer/{state}</loc><priority>0.8</priority></url>\n"

# Add Spare parts pages
for page in spare_parts_pages:
    sitemap += f"  <url><loc>https://krishigears.com/spare-parts/{page['slug']}</loc><priority>0.7</priority></url>\n"

# Add Service pages
for page in service_pages:
    sitemap += f"  <url><loc>https://krishigears.com/service/{page['slug']}</loc><priority>0.7</priority></url>\n"

sitemap += "</urlset>\n"

with open("frontend/public/sitemap.xml", "w", encoding="utf-8") as f:
    f.write(sitemap)

print(f"Added {len(DEALER_STATES)*2 + len(spare_parts_pages) + len(service_pages)} new URLs to sitemap.")
