import json

CITIES = [
    ("Jaipur", "Rajasthan"), ("Jodhpur", "Rajasthan"), ("Udaipur", "Rajasthan"), ("Kota", "Rajasthan"),
    ("Pune", "Maharashtra"), ("Nashik", "Maharashtra"), ("Nagpur", "Maharashtra"), ("Ahmednagar", "Maharashtra"), 
    ("Solapur", "Maharashtra"), ("Kolhapur", "Maharashtra"), ("Aurangabad", "Maharashtra"),
    ("Ludhiana", "Punjab"), ("Jalandhar", "Punjab"), ("Amritsar", "Punjab"), ("Patiala", "Punjab"), ("Bhatinda", "Punjab"),
    ("Karnal", "Haryana"), ("Hisar", "Haryana"), ("Rohtak", "Haryana"), ("Ambala", "Haryana"),
    ("Ahmedabad", "Gujarat"), ("Rajkot", "Gujarat"), ("Surat", "Gujarat"), ("Vadodara", "Gujarat"), ("Bhavnagar", "Gujarat"),
    ("Bhopal", "Madhya Pradesh"), ("Indore", "Madhya Pradesh"), ("Jabalpur", "Madhya Pradesh"), ("Ujjain", "Madhya Pradesh"),
    ("Lucknow", "Uttar Pradesh"), ("Kanpur", "Uttar Pradesh"), ("Varanasi", "Uttar Pradesh"), ("Agra", "Uttar Pradesh"), ("Meerut", "Uttar Pradesh"),
    ("Patna", "Bihar"), ("Gaya", "Bihar"), ("Muzaffarpur", "Bihar"), ("Bhagalpur", "Bihar"),
    ("Coimbatore", "Tamil Nadu"), ("Madurai", "Tamil Nadu"), ("Trichy", "Tamil Nadu"), ("Salem", "Tamil Nadu"), ("Erode", "Tamil Nadu"),
    ("Hubli", "Karnataka"), ("Belgaum", "Karnataka"), ("Davangere", "Karnataka"), ("Mysore", "Karnataka"),
    ("Vijayawada", "Andhra Pradesh"), ("Guntur", "Andhra Pradesh"), ("Rajahmundry", "Andhra Pradesh"),
    ("Raipur", "Chhattisgarh"), ("Ranchi", "Jharkhand"), ("Bhubaneswar", "Odisha"), ("Cuttack", "Odisha")
]

CATEGORIES = [
    {"id": "power-weeders", "name": "Power Weeder"},
    {"id": "power-weeder-spare-parts", "name": "Power Weeder Spare Parts"}
]

pages = []
urls = []

for city, state in CITIES:
    for cat in CATEGORIES:
        slug = f"{cat['id']}-supplier-{city.lower().replace(' ', '-')}"
        title = f"{cat['name']} Dealer & Wholesale Supply in {city}"
        pages.append({
            "slug": slug,
            "title": title,
            "category": cat["id"],
            "city": city,
            "state": state
        })
        urls.append(f"https://krishigears.com/seo/{slug}")

# Write JS file
js_content = f"export const GEO_SEO_PAGES = {json.dumps(pages, indent=2)};\n"
with open("frontend/src/data/geoSeo.js", "w") as f:
    f.write(js_content)

# Re-generate Sitemap entirely for a clean slate focused ONLY on Weeders
sitemap_base = """<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url><loc>https://krishigears.com/</loc><priority>1.0</priority><changefreq>weekly</changefreq></url>
  <url><loc>https://krishigears.com/about</loc><priority>0.8</priority></url>
  <url><loc>https://krishigears.com/products</loc><priority>0.9</priority><changefreq>weekly</changefreq></url>
  <url><loc>https://krishigears.com/dealer-network</loc><priority>0.8</priority></url>
  <url><loc>https://krishigears.com/become-a-dealer</loc><priority>0.8</priority></url>
  <url><loc>https://krishigears.com/bulk-order</loc><priority>0.8</priority></url>
  <url><loc>https://krishigears.com/contact</loc><priority>0.7</priority></url>
  <url><loc>https://krishigears.com/warranty-and-support</loc><priority>0.7</priority></url>
  <url><loc>https://krishigears.com/blog</loc><priority>0.9</priority><changefreq>weekly</changefreq></url>
  <url><loc>https://krishigears.com/products/category/power-weeders</loc><priority>0.9</priority></url>
  <url><loc>https://krishigears.com/products/category/power-weeder-spare-parts</loc><priority>0.9</priority></url>
"""

for url in urls:
    sitemap_base += f"  <url><loc>{url}</loc><priority>0.8</priority></url>\n"

sitemap_base += "</urlset>\n"

with open("frontend/public/sitemap.xml", "w") as f:
    f.write(sitemap_base)

print(f"Generated {len(pages)} Geo-SEO pages and clean sitemap focused on Power Weeders!")
