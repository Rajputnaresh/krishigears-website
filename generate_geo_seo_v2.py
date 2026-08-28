import json

# ===== TIER 1: Major Agricultural Hubs (already had 54, now expanding) =====
CITIES = [
    # Rajasthan
    ("Jaipur", "Rajasthan"), ("Jodhpur", "Rajasthan"), ("Udaipur", "Rajasthan"), ("Kota", "Rajasthan"),
    ("Sri Ganganagar", "Rajasthan"), ("Bikaner", "Rajasthan"), ("Sikar", "Rajasthan"), ("Alwar", "Rajasthan"),
    # Maharashtra  
    ("Pune", "Maharashtra"), ("Nashik", "Maharashtra"), ("Nagpur", "Maharashtra"), ("Ahmednagar", "Maharashtra"),
    ("Solapur", "Maharashtra"), ("Kolhapur", "Maharashtra"), ("Aurangabad", "Maharashtra"),
    ("Satara", "Maharashtra"), ("Sangli", "Maharashtra"), ("Baramati", "Maharashtra"), ("Jalgaon", "Maharashtra"),
    ("Latur", "Maharashtra"), ("Osmanabad", "Maharashtra"), ("Nanded", "Maharashtra"),
    # Punjab
    ("Ludhiana", "Punjab"), ("Jalandhar", "Punjab"), ("Amritsar", "Punjab"), ("Patiala", "Punjab"),
    ("Bhatinda", "Punjab"), ("Moga", "Punjab"), ("Sangrur", "Punjab"), ("Ferozepur", "Punjab"),
    # Haryana
    ("Karnal", "Haryana"), ("Hisar", "Haryana"), ("Rohtak", "Haryana"), ("Ambala", "Haryana"),
    ("Sirsa", "Haryana"), ("Sonipat", "Haryana"), ("Panipat", "Haryana"), ("Kurukshetra", "Haryana"),
    # Gujarat
    ("Ahmedabad", "Gujarat"), ("Rajkot", "Gujarat"), ("Surat", "Gujarat"), ("Vadodara", "Gujarat"),
    ("Bhavnagar", "Gujarat"), ("Junagadh", "Gujarat"), ("Mehsana", "Gujarat"), ("Anand", "Gujarat"),
    # Madhya Pradesh
    ("Bhopal", "Madhya Pradesh"), ("Indore", "Madhya Pradesh"), ("Jabalpur", "Madhya Pradesh"),
    ("Ujjain", "Madhya Pradesh"), ("Sagar", "Madhya Pradesh"), ("Rewa", "Madhya Pradesh"),
    ("Gwalior", "Madhya Pradesh"), ("Dewas", "Madhya Pradesh"),
    # Uttar Pradesh
    ("Lucknow", "Uttar Pradesh"), ("Kanpur", "Uttar Pradesh"), ("Varanasi", "Uttar Pradesh"),
    ("Agra", "Uttar Pradesh"), ("Meerut", "Uttar Pradesh"), ("Gorakhpur", "Uttar Pradesh"),
    ("Bareilly", "Uttar Pradesh"), ("Allahabad", "Uttar Pradesh"), ("Moradabad", "Uttar Pradesh"),
    ("Jhansi", "Uttar Pradesh"), ("Mathura", "Uttar Pradesh"),
    # Bihar
    ("Patna", "Bihar"), ("Gaya", "Bihar"), ("Muzaffarpur", "Bihar"), ("Bhagalpur", "Bihar"),
    ("Darbhanga", "Bihar"), ("Purnea", "Bihar"), ("Samastipur", "Bihar"),
    # Tamil Nadu
    ("Coimbatore", "Tamil Nadu"), ("Madurai", "Tamil Nadu"), ("Trichy", "Tamil Nadu"),
    ("Salem", "Tamil Nadu"), ("Erode", "Tamil Nadu"), ("Thanjavur", "Tamil Nadu"),
    ("Tirunelveli", "Tamil Nadu"), ("Dindigul", "Tamil Nadu"),
    # Karnataka
    ("Hubli", "Karnataka"), ("Belgaum", "Karnataka"), ("Davangere", "Karnataka"), ("Mysore", "Karnataka"),
    ("Shimoga", "Karnataka"), ("Tumkur", "Karnataka"), ("Mandya", "Karnataka"), ("Hassan", "Karnataka"),
    # Andhra Pradesh
    ("Vijayawada", "Andhra Pradesh"), ("Guntur", "Andhra Pradesh"), ("Rajahmundry", "Andhra Pradesh"),
    ("Kurnool", "Andhra Pradesh"), ("Nellore", "Andhra Pradesh"), ("Kadapa", "Andhra Pradesh"),
    # Telangana
    ("Hyderabad", "Telangana"), ("Warangal", "Telangana"), ("Karimnagar", "Telangana"),
    ("Nizamabad", "Telangana"), ("Khammam", "Telangana"),
    # Chhattisgarh
    ("Raipur", "Chhattisgarh"), ("Bilaspur", "Chhattisgarh"), ("Durg", "Chhattisgarh"),
    # Jharkhand
    ("Ranchi", "Jharkhand"), ("Jamshedpur", "Jharkhand"), ("Dhanbad", "Jharkhand"),
    # Odisha
    ("Bhubaneswar", "Odisha"), ("Cuttack", "Odisha"), ("Berhampur", "Odisha"), ("Sambalpur", "Odisha"),
    # West Bengal
    ("Kolkata", "West Bengal"), ("Siliguri", "West Bengal"), ("Burdwan", "West Bengal"),
    ("Malda", "West Bengal"), ("Bankura", "West Bengal"),
    # Kerala
    ("Thrissur", "Kerala"), ("Palakkad", "Kerala"), ("Kottayam", "Kerala"), ("Ernakulam", "Kerala"),
    # Assam
    ("Guwahati", "Assam"), ("Jorhat", "Assam"), ("Dibrugarh", "Assam"),
    # Uttarakhand
    ("Dehradun", "Uttarakhand"), ("Haridwar", "Uttarakhand"), ("Udham Singh Nagar", "Uttarakhand"),
]

# Remove duplicates
seen = set()
unique_cities = []
for city, state in CITIES:
    key = f"{city}-{state}"
    if key not in seen:
        seen.add(key)
        unique_cities.append((city, state))

# Core categories
CATEGORIES = [
    {"id": "power-weeders", "name": "Power Weeder"},
    {"id": "power-weeder-spare-parts", "name": "Power Weeder Spare Parts"},
]

# Crop matrix (state -> primary crops where power weeders are used)
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
    "Uttarakhand": ["Sugarcane", "Rice", "Vegetables"],
}

# Hindi translations for key terms
HINDI = {
    "Power Weeder": "पावर वीडर",
    "Spare Parts": "स्पेयर पार्ट्स",
    "dealer": "डीलर",
    "wholesale": "थोक",
    "supply": "सप्लाई",
}

pages = []
urls = []

# 1. City × Category pages
for city, state in unique_cities:
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

# 2. Crop × City pages (top crop per state for key cities)
for city, state in unique_cities:
    crops = STATE_CROPS.get(state, [])
    if crops:
        primary_crop = crops[0]  # Use the #1 crop per state
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

# Write JS file
js_content = f"export const GEO_SEO_PAGES = {json.dumps(pages, indent=2, ensure_ascii=False)};\n"
with open("frontend/src/data/geoSeo.js", "w", encoding="utf-8") as f:
    f.write(js_content)

# Rebuild sitemap completely
sitemap = '<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n'

# Core pages
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

# National SEO pages
sitemap += '  <url><loc>https://krishigears.com/seo/power-weeder-supplier-india</loc><priority>0.9</priority></url>\n'
sitemap += '  <url><loc>https://krishigears.com/seo/power-weeder-spare-parts-supplier-india</loc><priority>0.9</priority></url>\n'

# Geo pages
for url in urls:
    sitemap += f"  <url><loc>{url}</loc><priority>0.7</priority></url>\n"

sitemap += "</urlset>\n"

with open("frontend/public/sitemap.xml", "w") as f:
    f.write(sitemap)

print(f"Generated {len(pages)} Geo+Crop SEO pages across {len(unique_cities)} cities")
print(f"Sitemap has {len(urls) + len(core) + 2} total URLs")
