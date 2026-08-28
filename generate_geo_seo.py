import json

CITIES = [
    # Rajasthan (15)
    ("Jaipur", "Rajasthan"), ("Jodhpur", "Rajasthan"), ("Udaipur", "Rajasthan"), ("Kota", "Rajasthan"),
    ("Sri Ganganagar", "Rajasthan"), ("Bikaner", "Rajasthan"), ("Sikar", "Rajasthan"), ("Alwar", "Rajasthan"),
    ("Bhilwara", "Rajasthan"), ("Ajmer", "Rajasthan"), ("Bharatpur", "Rajasthan"), ("Pali", "Rajasthan"),
    ("Hanumangarh", "Rajasthan"), ("Churu", "Rajasthan"), ("Barmer", "Rajasthan"),
    
    # Maharashtra (25)
    ("Pune", "Maharashtra"), ("Nashik", "Maharashtra"), ("Nagpur", "Maharashtra"), ("Ahmednagar", "Maharashtra"),
    ("Solapur", "Maharashtra"), ("Kolhapur", "Maharashtra"), ("Aurangabad", "Maharashtra"), ("Satara", "Maharashtra"),
    ("Sangli", "Maharashtra"), ("Baramati", "Maharashtra"), ("Jalgaon", "Maharashtra"), ("Latur", "Maharashtra"),
    ("Osmanabad", "Maharashtra"), ("Nanded", "Maharashtra"), ("Amravati", "Maharashtra"), ("Akola", "Maharashtra"),
    ("Chandrapur", "Maharashtra"), ("Dhule", "Maharashtra"), ("Jalna", "Maharashtra"), ("Parbhani", "Maharashtra"),
    ("Beed", "Maharashtra"), ("Yavatmal", "Maharashtra"), ("Wardha", "Maharashtra"), ("Ratnagiri", "Maharashtra"), ("Sindhudurg", "Maharashtra"),

    # Punjab (15)
    ("Ludhiana", "Punjab"), ("Jalandhar", "Punjab"), ("Amritsar", "Punjab"), ("Patiala", "Punjab"),
    ("Bhatinda", "Punjab"), ("Moga", "Punjab"), ("Sangrur", "Punjab"), ("Ferozepur", "Punjab"),
    ("Hoshiarpur", "Punjab"), ("Gurdaspur", "Punjab"), ("Bathinda", "Punjab"), ("Muktsar", "Punjab"),
    ("Fazilka", "Punjab"), ("Barnala", "Punjab"), ("Kapurthala", "Punjab"),

    # Haryana (15)
    ("Karnal", "Haryana"), ("Hisar", "Haryana"), ("Rohtak", "Haryana"), ("Ambala", "Haryana"),
    ("Sirsa", "Haryana"), ("Jind", "Haryana"), ("Kaithal", "Haryana"), ("Kurukshetra", "Haryana"),
    ("Panipat", "Haryana"), ("Sonipat", "Haryana"), ("Yamunanagar", "Haryana"), ("Bhiwani", "Haryana"),
    ("Fatehabad", "Haryana"), ("Palwal", "Haryana"), ("Rewari", "Haryana"),

    # Gujarat (20)
    ("Ahmedabad", "Gujarat"), ("Rajkot", "Gujarat"), ("Surat", "Gujarat"), ("Vadodara", "Gujarat"),
    ("Bhavnagar", "Gujarat"), ("Junagadh", "Gujarat"), ("Jamnagar", "Gujarat"), ("Amreli", "Gujarat"),
    ("Mehsana", "Gujarat"), ("Banaskantha", "Gujarat"), ("Palanpur", "Gujarat"), ("Sabarkantha", "Gujarat"),
    ("Anand", "Gujarat"), ("Kheda", "Gujarat"), ("Navsari", "Gujarat"), ("Valsad", "Gujarat"),
    ("Surendranagar", "Gujarat"), ("Morbi", "Gujarat"), ("Kutch", "Gujarat"), ("Patan", "Gujarat"),

    # Madhya Pradesh (20)
    ("Bhopal", "Madhya Pradesh"), ("Indore", "Madhya Pradesh"), ("Jabalpur", "Madhya Pradesh"), ("Ujjain", "Madhya Pradesh"),
    ("Gwalior", "Madhya Pradesh"), ("Sagar", "Madhya Pradesh"), ("Dewas", "Madhya Pradesh"), ("Satna", "Madhya Pradesh"),
    ("Ratlam", "Madhya Pradesh"), ("Rewa", "Madhya Pradesh"), ("Murwara", "Madhya Pradesh"), ("Singrauli", "Madhya Pradesh"),
    ("Burhanpur", "Madhya Pradesh"), ("Khandwa", "Madhya Pradesh"), ("Bhind", "Madhya Pradesh"), ("Chhindwara", "Madhya Pradesh"),
    ("Guna", "Madhya Pradesh"), ("Shivpuri", "Madhya Pradesh"), ("Vidisha", "Madhya Pradesh"), ("Mandsaur", "Madhya Pradesh"),

    # Uttar Pradesh (30)
    ("Lucknow", "Uttar Pradesh"), ("Kanpur", "Uttar Pradesh"), ("Varanasi", "Uttar Pradesh"), ("Agra", "Uttar Pradesh"),
    ("Meerut", "Uttar Pradesh"), ("Allahabad", "Uttar Pradesh"), ("Prayagraj", "Uttar Pradesh"), ("Bareilly", "Uttar Pradesh"),
    ("Aligarh", "Uttar Pradesh"), ("Moradabad", "Uttar Pradesh"), ("Saharanpur", "Uttar Pradesh"), ("Gorakhpur", "Uttar Pradesh"),
    ("Noida", "Uttar Pradesh"), ("Firozabad", "Uttar Pradesh"), ("Jhansi", "Uttar Pradesh"), ("Muzaffarnagar", "Uttar Pradesh"),
    ("Mathura", "Uttar Pradesh"), ("Budaun", "Uttar Pradesh"), ("Rampur", "Uttar Pradesh"), ("Shahjahanpur", "Uttar Pradesh"),
    ("Farrukhabad", "Uttar Pradesh"), ("Maunath Bhanjan", "Uttar Pradesh"), ("Hapur", "Uttar Pradesh"), ("Faizabad", "Uttar Pradesh"),
    ("Ayodhya", "Uttar Pradesh"), ("Etawah", "Uttar Pradesh"), ("Mirzapur", "Uttar Pradesh"), ("Bulandshahr", "Uttar Pradesh"),
    ("Sambhal", "Uttar Pradesh"), ("Amroha", "Uttar Pradesh"), ("Hardoi", "Uttar Pradesh"),

    # Bihar (15)
    ("Patna", "Bihar"), ("Gaya", "Bihar"), ("Muzaffarpur", "Bihar"), ("Bhagalpur", "Bihar"),
    ("Darbhanga", "Bihar"), ("Purnia", "Bihar"), ("Bihar Sharif", "Bihar"), ("Arrah", "Bihar"),
    ("Begusarai", "Bihar"), ("Katihar", "Bihar"), ("Munger", "Bihar"), ("Chhapra", "Bihar"),
    ("Danapur", "Bihar"), ("Bettiah", "Bihar"), ("Saharsa", "Bihar"),

    # Tamil Nadu (15)
    ("Coimbatore", "Tamil Nadu"), ("Madurai", "Tamil Nadu"), ("Tiruchirappalli", "Tamil Nadu"), ("Salem", "Tamil Nadu"),
    ("Tirunelveli", "Tamil Nadu"), ("Tiruppur", "Tamil Nadu"), ("Erode", "Tamil Nadu"), ("Vellore", "Tamil Nadu"),
    ("Thanjavur", "Tamil Nadu"), ("Dindigul", "Tamil Nadu"), ("Ranipet", "Tamil Nadu"), ("Sivakasi", "Tamil Nadu"),
    ("Karur", "Tamil Nadu"), ("Udhagamandalam", "Tamil Nadu"), ("Cuddalore", "Tamil Nadu"),

    # Karnataka (15)
    ("Bangalore", "Karnataka"), ("Hubli", "Karnataka"), ("Mysore", "Karnataka"), ("Gulbarga", "Karnataka"),
    ("Belgaum", "Karnataka"), ("Mangalore", "Karnataka"), ("Davanagere", "Karnataka"), ("Bellary", "Karnataka"),
    ("Bijapur", "Karnataka"), ("Shimoga", "Karnataka"), ("Tumkur", "Karnataka"), ("Raichur", "Karnataka"),
    ("Bidar", "Karnataka"), ("Hospet", "Karnataka"), ("Hassan", "Karnataka"),

    # Andhra Pradesh & Telangana (15)
    ("Hyderabad", "Andhra Pradesh"), ("Visakhapatnam", "Andhra Pradesh"), ("Vijayawada", "Andhra Pradesh"), ("Warangal", "Andhra Pradesh"),
    ("Guntur", "Andhra Pradesh"), ("Nellore", "Andhra Pradesh"), ("Kurnool", "Andhra Pradesh"), ("Rajahmundry", "Andhra Pradesh"),
    ("Nizamabad", "Andhra Pradesh"), ("Karimnagar", "Andhra Pradesh"), ("Ramagundam", "Andhra Pradesh"), ("Khammam", "Andhra Pradesh"),
    ("Kadapa", "Andhra Pradesh"), ("Anantapur", "Andhra Pradesh"),

    # West Bengal & Odisha (15)
    ("Kolkata", "West Bengal"), ("Howrah", "West Bengal"), ("Durgapur", "West Bengal"), ("Asansol", "West Bengal"),
    ("Siliguri", "West Bengal"), ("Bardhaman", "West Bengal"), ("Malda", "West Bengal"), ("Baharampur", "West Bengal"),
    ("Bhubaneswar", "Odisha"), ("Cuttack", "Odisha"), ("Rourkela", "Odisha"), ("Berhampur", "Odisha"),
    ("Sambalpur", "Odisha"), ("Puri", "Odisha"), ("Balasore", "Odisha")
]

# Map states/regions to key crops
STATE_CROPS = {
    "Maharashtra": ["Sugarcane", "Cotton", "Soybean", "Turmeric"],
    "Punjab": ["Wheat", "Paddy", "Cotton", "Maize"],
    "Haryana": ["Wheat", "Paddy", "Cotton", "Mustard"],
    "Gujarat": ["Cotton", "Groundnut", "Cumin", "Castor"],
    "Madhya Pradesh": ["Soybean", "Wheat", "Paddy", "Chana"],
    "Uttar Pradesh": ["Sugarcane", "Wheat", "Paddy", "Potato"],
    "Bihar": ["Paddy", "Maize", "Wheat", "Sugarcane"],
    "Tamil Nadu": ["Rice Paddy", "Sugarcane", "Coconut", "Banana"],
    "Karnataka": ["Arecanut", "Coconut", "Paddy", "Maize"],
    "Andhra Pradesh": ["Paddy", "Cotton", "Chilli", "Groundnut"],
    "Rajasthan": ["Mustard", "Wheat", "Bajra", "Cotton"],
    "West Bengal": ["Rice Paddy", "Jute", "Potato", "Vegetables"],
    "Odisha": ["Rice Paddy", "Vegetables", "Pulses", "Coconut"]
}

CATEGORIES = [
    {"id": "power-weeders", "name": "Power Weeder"},
    {"id": "power-weeder-spare-parts", "name": "Power Weeder Spare Parts"}
]

pages = []
urls = []

for city, state in CITIES:
    crops = STATE_CROPS.get(state, ["General Crops", "Vegetables"])
    for cat in CATEGORIES:
        slug = f"{cat['id']}-supplier-{city.lower().replace(' ', '-')}"
        title = f"{cat['name']} Dealer & Wholesale Supply in {city}"
        hindi_title = f"{city} में {cat['name']} डीलर और थोक सप्लाई"
        pages.append({
            "slug": slug,
            "title": title,
            "category": cat["id"],
            "city": city,
            "state": state,
            "crops": crops,
            "hindiTitle": hindi_title
        })
        urls.append(f"https://krishigears.com/seo/{slug}")

# Write JS file
js_content = f"export const GEO_SEO_PAGES = {json.dumps(pages, indent=2)};\n"
with open("frontend/src/data/geoSeo.js", "w") as f:
    f.write(js_content)

# Re-generate Sitemap entirely
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

print(f"Successfully generated {len(pages)} Geo-SEO pages across {len(CITIES)} cities with Crop Matrix!")
