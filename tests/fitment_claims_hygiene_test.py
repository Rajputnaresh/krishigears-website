"""
Regression test suite for:
1. Static Next.js spares fitment route (/spare-parts/168f-170f-gx35-fitment-guide)
2. Canonical, H1, Breadcrumbs, accessible mobile tables, and 15-item ItemList schema
3. Exact 359 demand query wording and physical-measurement / order-per-sale disclaimers
4. Negative repository claims hygiene distinguishing commercial promises from legitimate policy deadlines
"""

import os
import re
import json
import subprocess
import unittest

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
ROUTE_PATH = os.path.join(ROOT, "frontend/src/app/spare-parts/168f-170f-gx35-fitment-guide/page.tsx")

class TestFitmentGuideAndClaimsHygiene(unittest.TestCase):

    def test_static_route_metadata_and_structure(self):
        self.assertTrue(os.path.exists(ROUTE_PATH), f"Route file missing: {ROUTE_PATH}")
        with open(ROUTE_PATH, "r", encoding="utf-8") as f:
            content = f.read()

        # Canonical & Title
        self.assertIn("https://krishigears.com/spare-parts/168f-170f-gx35-fitment-guide", content)
        self.assertIn("168F, 170F & GX35 Engine Spares Fitment Guide", content)
        self.assertIn("168F, 170F and GX35 Engine Spares and Fitment Authority Guide", content)

        # Internal Links
        for href in ["/spare-parts", "/products/category/power-weeder-spare-parts", "/service", "/contact", "/dealer-network"]:
            self.assertIn(f'href="{href}"', content)

        # Disclaimers
        self.assertIn("KrishiGears holds no physical stock", content)
        self.assertIn("procured per verified order", content)
        self.assertIn("do not guarantee fitment without physical measurement", content)

        # Exact Demand Query Count Wording (359, not 360)
        self.assertIn("359 engine spare parts", content)
        self.assertNotIn("360 engine spare parts", content)

        # WhatsApp Intake
        self.assertIn("+91 60060 78815", content)
        self.assertIn("wa.me/916006078815", content)

    def test_accessible_tables_and_matrix_components(self):
        with open(ROUTE_PATH, "r", encoding="utf-8") as f:
            content = f.read()

        # All table wrappers must have role="region", aria-label, and tabIndex
        self.assertEqual(content.count('role="region"'), 3)
        self.assertIn('aria-label="Engine Technical Specifications Comparison"', content)
        self.assertIn('aria-label="25-Component Interchangeability Matrix"', content)
        self.assertIn('aria-label="Diagnostic Troubleshooting Guide"', content)
        self.assertEqual(content.count("tabIndex={0}"), 3)

        # Key components from 25-item matrix
        self.assertIn("Recoil Starter Assembly", content)
        self.assertIn("Carburetor Assembly", content)
        self.assertIn("GX35 Diaphragm Carburetor", content)
        self.assertIn("Piston Assembly (STD)", content)
        self.assertIn("Gearcase Head 28mm", content)

    def test_schema_org_structure(self):
        with open(ROUTE_PATH, "r", encoding="utf-8") as f:
            content = f.read()

        # Extract JSON-LD graph
        m = re.search(r"const jsonLd = ({[\s\S]*?});\n\nexport default", content)
        self.assertTrue(m, "Could not locate jsonLd object in route file")
        schema = json.loads(m.group(1))

        self.assertEqual(schema.get("@context"), "https://schema.org")
        graph = schema.get("@graph", [])
        types = [node.get("@type") for node in graph]

        self.assertIn("BreadcrumbList", types)
        self.assertIn("TechArticle", types)
        self.assertIn("ItemList", types)

        item_list = next(node for node in graph if node.get("@type") == "ItemList")
        self.assertEqual(item_list.get("numberOfItems"), 15)
        self.assertEqual(len(item_list.get("itemListElement", [])), 15)

    def test_negative_claims_hygiene_across_repository(self):
        out = subprocess.check_output(["git", "ls-files"], cwd=ROOT).decode("utf-8")
        tracked = [f.strip() for f in out.splitlines() if f.strip()]
        text_extensions = {".ts", ".tsx", ".js", ".jsx", ".json", ".md", ".txt", ".html", ".py"}

        patterns = [
            (r"24\s*(to|[–-])\s*48\s*h(ours?)?(\s*dispatch|\s*express|\s*delivery)?", "24-48h dispatch"),
            (r"48\s*hours?", "48 hours"),
            (r"same-day(\s*dispatch|\s*spare|\s*shipping)?", "same-day"),
            (r"central\s*(warehouse|depot|godown)", "central warehouse"),
            (r"regional\s*(warehouse|depot)", "regional warehouse"),
            (r"100%\s*(guaranteed\s*)?fitment", "100% fitment"),
            (r"guaranteed\s*fitment", "guaranteed fitment"),
            (r"\b500\+\b", "500+"),
            (r"\b1000\+\b", "1000+"),
            (r"\b48h\b", "48h")
        ]
        compiled = [(re.compile(p, re.IGNORECASE), label) for p, label in patterns]

        unresolved = []
        legal_found = []

        for rel in tracked:
            ext = os.path.splitext(rel)[1].lower()
            if ext not in text_extensions:
                continue
            full = os.path.join(ROOT, rel)
            with open(full, "r", encoding="utf-8", errors="ignore") as f:
                for idx, line in enumerate(f, 1):
                    for regex, label in compiled:
                        if regex.search(line):
                            is_legal = False
                            # Distinguish legitimate legal/application deadlines from commercial promises
                            if "cancellation-policy" in rel or "refund-policy" in rel or "terms-and-conditions" in rel:
                                is_legal = True
                                legal_found.append((rel, idx, line.strip()))
                            elif "tests/" in rel:
                                is_legal = True
                            elif "BecomeDealer.jsx" in rel and "Applications reviewed within 48 hours" in line:
                                is_legal = True
                            elif "DealerState.jsx" in rel and "Applications reviewed within 48 hours" in line:
                                is_legal = True
                            elif "BecomeDealer.jsx" in rel and "dealer team will contact you within 48 hours" in line:
                                is_legal = True

                            if not is_legal:
                                unresolved.append((rel, idx, label, line.strip()))
                            break

        self.assertEqual(len(unresolved), 0, f"Found {len(unresolved)} unresolved promotional claims: {unresolved}")
        # Confirm legal deadlines were preserved
        self.assertTrue(any("cancellation-policy" in r[0] for r in legal_found), "Cancellation policy 24-48h window missing")
        self.assertTrue(any("refund-policy" in r[0] for r in legal_found), "Refund policy 48h damage window missing")
        self.assertTrue(any("terms-and-conditions" in r[0] for r in legal_found), "Terms grievance 48h SLA missing")


if __name__ == "__main__":
    unittest.main(verbosity=2)
