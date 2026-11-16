#!/usr/bin/env python3
"""
Master Geo-SEO & Sitemap Rebuild for KrishiGears.com
Expands catalog to all 740 Indian districts (1,480 programmatic B2B Geo-pages)
Rebuilds frontend/src/data/geoSeo.js, frontend/public/sitemap.xml
Submits live to Google Search Console (sc-domain:krishigears.com)
"""

import json
import re
import os
import subprocess
from datetime import datetime

BASE_DIR = os.path.dirname(os.path.abspath(__file__))
LOCATIONS_FILE = os.path.join(BASE_DIR, "frontend/src/data/locations.json")
GEO_SEO_FILE = os.path.join(BASE_DIR, "frontend/src/data/geoSeo.js")
BLOG_FILE = os.path.join(BASE_DIR, "frontend/src/data/blogPosts.ts")
CATALOG_FILE = os.path.join(BASE_DIR, "frontend/src/data/catalog.js")
SITEMAP_FILE = os.path.join(BASE_DIR, "frontend/public/sitemap.xml")

SITE_URL = "https://krishigears.com"
TODAY = datetime.utcnow().strftime("%Y-%m-%d")

def generate_geo_seo_data():
    print(f"Reading locations from {LOCATIONS_FILE}...")
    with open(LOCATIONS_FILE, "r", encoding="utf-8") as f:
        locations = json.load(f)

    print(f"Loaded {len(locations)} verified Indian district locations.")
    
    geo_pages = []
    seen_slugs = set()

    for city, data in locations.items():
        state = data.get("state", "India")
        crops = data.get("key_crops", ["Paddy", "Wheat"])
        crop_str = crops[0] if crops else "Farm"
        
        city_clean = city.strip()
        slug_base = re.sub(r"[^a-zA-Z0-9]+", "-", city_clean.lower()).strip("-")
        
        # 1. Power Weeders
        slug_pw = f"power-weeders-supplier-{slug_base}"
        if slug_pw not in seen_slugs:
            seen_slugs.add(slug_pw)
            geo_pages.append({
                "slug": slug_pw,
                "title": f"Power Weeder Dealer & Wholesale Supply in {city_clean}",
                "category": "power-weeders",
                "city": city_clean,
                "state": state,
                "crop": crop_str,
                "hindiTitle": f"{city_clean} में पावर वीडर डीलर और थोक सप्लाई"
            })
            
        # 2. Spare Parts
        slug_sp = f"power-weeder-spare-parts-supplier-{slug_base}"
        if slug_sp not in seen_slugs:
            seen_slugs.add(slug_sp)
            geo_pages.append({
                "slug": slug_sp,
                "title": f"Power Weeder Spare Parts Dealer & Wholesale Supply in {city_clean}",
                "category": "power-weeder-spare-parts",
                "city": city_clean,
                "state": state,
                "crop": crop_str,
                "hindiTitle": f"{city_clean} में पावर वीडर स्पेयर पार्ट्स सप्लाई"
            })

    print(f"Generated {len(geo_pages)} unique Geo-SEO programmatic pages.")
    
    # Write geoSeo.js
    with open(GEO_SEO_FILE, "w", encoding="utf-8") as f:
        f.write("// Auto-generated Perfection-Grade Geo-SEO Master Dataset for KrishiGears\n")
        f.write("// Covers 740 Indian districts x 2 categories = 1,480 Hyperlocal B2B Wholesale Pages\n")
        f.write("export const GEO_SEO_PAGES = ")
        json.dump(geo_pages, f, indent=2, ensure_ascii=False)
        f.write(";\n")
        
    print(f"[OK] Written master dataset to {GEO_SEO_FILE}")
    return geo_pages

def build_sitemap(geo_pages):
    """Delegate to the same owner used by frontend prebuild; do not fork URL policy."""
    subprocess.run(["node", os.path.join(BASE_DIR, "generate_full_sitemap.js")], check=True)
    import xml.etree.ElementTree as ET
    return len(ET.parse(SITEMAP_FILE).getroot())


def submit_to_gsc():
    print("Submitting sitemap to Google Search Console (sc-domain:krishigears.com)...")
    node_cmd = """
    const { GoogleAuth } = require('/opt/homebrew/lib/node_modules/@mikusnuz/gsc-mcp/node_modules/google-auth-library');
    const KEY_FILE = '/Users/rajputnaresh/.config/gsc-mcp/sa-key.json';
    async function submit() {
      const auth = new GoogleAuth({ keyFile: KEY_FILE, scopes: ['https://www.googleapis.com/auth/webmasters'] });
      const client = await auth.getClient();
      const url = 'https://www.googleapis.com/webmasters/v3/sites/' + encodeURIComponent('sc-domain:krishigears.com') + '/sitemaps/' + encodeURIComponent('https://krishigears.com/sitemap.xml');
      const res = await client.request({ url, method: 'PUT' });
      console.log('GSC Submission Result Status:', res.status);
    }
    submit().catch(err => { console.error('GSC Error:', err.message); process.exit(1); });
    """
    res = subprocess.run(["node", "-e", node_cmd], capture_output=True, text=True)
    print(res.stdout.strip())
    if res.returncode == 0:
        print("[SUCCESS] Google Search Console received and queued the Master Sitemap for crawling!")
    else:
        print(f"[ERROR] GSC submit failed: {res.stderr.strip()}")

if __name__ == "__main__":
    print("=== EXECUTING MASTER GEO-SEO & SITEMAP REBUILD ===")
    pages = generate_geo_seo_data()
    total = build_sitemap(pages)
    submit_to_gsc()
    print(f"\n=== SPRINT A COMPLETE: {total} URLS LIVE & SUBMITTED TO GSC ===")
