"""Regression checks for sitemap ownership and served service/legacy-dealer behavior.
Run: python3 tests/service-seo.test.py (local Next server on port 18116).
"""
import importlib.util
import json
from pathlib import Path
import subprocess
import unittest
import urllib.request
import urllib.error
import xml.etree.ElementTree as ET
from html.parser import HTMLParser

ROOT = Path(__file__).resolve().parents[1]
NS = {'s': 'http://www.sitemaps.org/schemas/sitemap/0.9'}
BASE = 'http://127.0.0.1:18116'

class Page(HTMLParser):
    def __init__(self, html):
        super().__init__(); self.scripts = []; self.text = []; self.current = None; self.canonical = None
        self.feed(html)
    def handle_starttag(self, tag, attrs):
        a = dict(attrs)
        if tag == 'script': self.current = '' if a.get('type') == 'application/ld+json' else None
        if tag == 'link' and a.get('rel') == 'canonical': self.canonical = a['href']
    def handle_data(self, data):
        if self.current is not None: self.current += data
        else: self.text.append(data)
    def handle_endtag(self, tag):
        if tag == 'script' and self.current is not None:
            self.scripts.append(json.loads(self.current)); self.current = None

class NoRedirect(urllib.request.HTTPRedirectHandler):
    def redirect_request(self, *args): return None

class SEO(unittest.TestCase):
    def test_sitemap_single_owner_rebuilds_without_losing_urls(self):
        p = ROOT/'frontend/public/sitemap.xml'
        before = p.read_bytes()
        subprocess.run(['npm', 'run', 'prebuild'], cwd=ROOT/'frontend', check=True)
        self.assertEqual(before, p.read_bytes())
        spec = importlib.util.spec_from_file_location('legacy', ROOT/'build_and_deploy_master_geo_sitemap.py')
        module = importlib.util.module_from_spec(spec); spec.loader.exec_module(module)
        self.assertEqual(module.build_sitemap([]), 3052)
        self.assertEqual(before, p.read_bytes())
        self.assertFalse((ROOT/'frontend/src/app/sitemap.ts').exists())
        urls = [e.text for e in ET.fromstring(before).findall('s:url/s:loc', NS)]
        self.assertEqual(len(urls), len(set(urls)))
        for path in ['/service', '/service/power-weeder-repair-service-in-jaipur', '/dealer-network', '/spare-parts/168f-170f-gx35-fitment-guide']:
            self.assertEqual(urls.count('https://krishigears.com'+path), 1)
        self.assertNotIn('https://krishigears.com/dealers', urls)
        with urllib.request.urlopen(BASE+'/sitemap.xml', timeout=60) as r:
            self.assertEqual(r.status, 200); self.assertEqual(r.read(), before)

    def test_service_schema_and_visible_office_disclaimer(self):
        with urllib.request.urlopen(BASE+'/service', timeout=90) as r:
            self.assertEqual(r.status, 200); page = Page(r.read().decode())
        self.assertEqual(page.canonical, 'https://krishigears.com/service')
        nodes = [node for script in page.scripts for node in script.get('@graph', [script])]
        office = next(n for n in nodes if n.get('@type') == 'LocalBusiness')
        self.assertEqual(office['name'], 'KRISHIGEARS INDIA PRIVATE LIMITED — Jaipur Registered Office')
        self.assertEqual(office['address']['addressLocality'], 'Jaipur')
        self.assertIn('No walk-in workshop or stocked warehouse', office['description'])
        self.assertNotIn('openingHoursSpecification', office)
        self.assertIn('Our Jaipur registered office is not a walk-in workshop or stocked warehouse.', ' '.join(page.text))
        self.assertNotIn('Central Machinery & Spares Depot', json.dumps(page.scripts))
        self.assertNotIn('24–48h', ' '.join(page.text))
        self.assertNotIn('OEM Assembly Depot Dispatch', ' '.join(page.text))

    def test_dealers_permanent_redirect_preserves_query_and_final_canonical(self):
        opener = urllib.request.build_opener(NoRedirect())
        with self.assertRaises(urllib.error.HTTPError) as error:
            opener.open(BASE+'/dealers?source=legacy', timeout=60)
        self.assertEqual(error.exception.code, 308)
        self.assertEqual(error.exception.headers['Location'], '/dealer-network?source=legacy')
        # Python 3.9 urllib does not follow 308 automatically; follow the verified Location.
        with urllib.request.urlopen(BASE+error.exception.headers['Location'], timeout=90) as r:
            self.assertEqual(r.status, 200)
            self.assertEqual(r.url, BASE+'/dealer-network?source=legacy')
            self.assertEqual(Page(r.read().decode()).canonical, 'https://krishigears.com/dealer-network')

if __name__ == '__main__': unittest.main(verbosity=2)
