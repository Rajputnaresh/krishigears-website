"""Dealer destination claims in a production-served page (same port as service tests)."""
import json
import re
import unittest
import urllib.request
from html.parser import HTMLParser

BASE = 'http://127.0.0.1:18116'


class DealerPage(HTMLParser):
    def __init__(self, html):
        super().__init__()
        self.text, self.schemas, self.meta, self.links = [], [], {}, []
        self.script = None
        self.in_script = False
        self.canonical = None
        self.feed(html)

    def handle_starttag(self, tag, attrs):
        attrs = dict(attrs)
        if tag == 'script':
            self.in_script = True
            self.script = '' if attrs.get('type') == 'application/ld+json' else None
        if tag == 'meta':
            self.meta[attrs.get('name', attrs.get('property'))] = attrs.get('content', '')
        if tag == 'link' and attrs.get('rel') == 'canonical':
            self.canonical = attrs['href']
        if tag == 'a':
            self.links.append(attrs.get('href'))

    def handle_data(self, data):
        if self.in_script:
            if self.script is not None:
                self.script += data
        else:
            self.text.append(data)

    def handle_endtag(self, tag):
        if tag == 'script':
            if self.script is not None:
                self.schemas.append(json.loads(self.script))
            self.in_script, self.script = False, None


class DealerClaims(unittest.TestCase):
    def test_served_claims_metadata_and_schema(self):
        with urllib.request.urlopen(BASE + '/dealer-network', timeout=60) as response:
            self.assertEqual(response.status, 200)
            page = DealerPage(response.read().decode())
        visible = ' '.join(page.text)
        self.assertEqual(page.canonical, 'https://krishigears.com/dealer-network')
        self.assertIn('KrishiGears holds no stock.', visible)
        self.assertIn('procured from suppliers per sale', visible)
        self.assertIn('These state links are enquiry routes, not a verified dealer directory.', visible)
        self.assertIn('before you order', visible)
        for key in ['description', 'og:description']:
            self.assertIn('per sale', page.meta[key])
            self.assertIn('dispatch timing', page.meta[key])
        for href in ['/become-a-dealer', '/contact', '/dealer/rajasthan']:
            self.assertIn(href, page.links)
        self.assertTrue(page.schemas)
        nodes = [node for schema in page.schemas for node in schema.get('@graph', [schema])]
        office = next(node for node in nodes if node.get('@type') == 'LocalBusiness')
        self.assertIn('holds no stock', office['description'])
        self.assertIn('procured per sale', office['description'])
        breadcrumb = next(node for node in nodes if node.get('@type') == 'BreadcrumbList')
        self.assertEqual(breadcrumb['itemListElement'][-1]['item'], page.canonical)
        claims = visible + json.dumps(page.schemas) + json.dumps(page.meta)
        for pattern in [r'48[- ]?hour', r'48h', r'500\+', r'1000\+', r'28\+',
                        r'regional warehouses', r'Active Dealers', r'States Covered',
                        r'every corner', r'certified KrishiGears', r'service stockists',
                        r'network guarantees', r'authorized service network']:
            self.assertIsNone(re.search(pattern, claims, re.I), pattern)


if __name__ == '__main__':
    unittest.main(verbosity=2)
