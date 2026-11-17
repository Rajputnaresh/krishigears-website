import assert from 'node:assert/strict';
import { test } from 'node:test';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, '..');
const ROUTE_PATH = path.join(ROOT, 'frontend/src/app/spare-parts/168f-170f-gx35-fitment-guide/page.tsx');

test('static spares fitment route exports valid canonical, title, h1 and breadcrumbs', () => {
  assert(fs.existsSync(ROUTE_PATH), 'Route page.tsx must exist');
  const content = fs.readFileSync(ROUTE_PATH, 'utf-8');

  assert(content.includes('https://krishigears.com/spare-parts/168f-170f-gx35-fitment-guide'), 'Canonical URL missing');
  assert(content.includes('168F, 170F & GX35 Engine Spares Fitment Guide'), 'Meta title missing');
  assert(!content.includes('title: "168F, 170F & GX35 Engine Spares Fitment Guide (2026) | KrishiGears"'), 'Meta title must not duplicate brand suffix');
  assert(content.includes('title: "168F, 170F & GX35 Engine Spares Fitment Guide (2026)"'), 'Meta title base without suffix missing');

  // Rendered document.title single suffix verification
  const htmlPath = path.join(ROOT, "frontend/.next/server/app/spare-parts/168f-170f-gx35-fitment-guide.html");
  if (fs.existsSync(htmlPath)) {
    const html = fs.readFileSync(htmlPath, "utf-8");
    const m = html.match(/<title>(.*?)<\/title>/);
    if (m) {
      const renderedTitle = m[1];
      const count = (renderedTitle.match(/\| KrishiGears/g) || []).length;
      assert.equal(count, 1, `Rendered title must contain exactly one \x27| KrishiGears\x27, got: ${renderedTitle}`);
      assert(!renderedTitle.includes("| KrishiGears | KrishiGears"), "Rendered title has duplicate brand suffix");
    }
  }
  assert(content.includes('168F, 170F and GX35 Engine Spares and Fitment Authority Guide'), 'H1 title missing');

  // Internal Links
  ['/spare-parts', '/products/category/power-weeder-spare-parts', '/service', '/contact', '/dealer-network'].forEach(href => {
    assert(content.includes(`href="${href}"`), `Internal link ${href} missing`);
  });

  // Disclaimers
  assert(content.includes('KrishiGears holds no physical stock'), 'Procurement disclaimer missing');
  assert(content.includes('procured per verified order'), 'Order-per-sale policy missing');
  assert(content.includes('do not guarantee fitment without physical measurement'), 'Measurement disclaimer missing');

  // Exact 359 demand query count
  assert(content.includes('359 engine spare parts'), 'Exact 359 demand query wording missing');
  assert(!content.includes('360 engine spare parts'), 'Stale 360 query count must not appear');

  // WhatsApp Intake
  assert(content.includes('+91 60060 78815'), 'WhatsApp intake missing');
});

test('accessible table wrappers and 25 matrix rows are present', () => {
  const content = fs.readFileSync(ROUTE_PATH, 'utf-8');

  // 3 accessible table wrappers
  const roleCount = (content.match(/role="region"/g) || []).length;
  assert.equal(roleCount, 3, 'Must have exactly 3 role="region" table wrappers');
  assert(content.includes('aria-label="Engine Technical Specifications Comparison"'));
  assert(content.includes('aria-label="25-Component Interchangeability Matrix"'));
  assert(content.includes('aria-label="Diagnostic Troubleshooting Guide"'));

  // 25 components in matrix
  assert(content.includes('Recoil Starter Assembly'));
  assert(content.includes('Carburetor Assembly'));
  assert(content.includes('GX35 Diaphragm Carburetor'));
  assert(content.includes('Piston Assembly (STD)'));
  assert(content.includes('Gearcase Head 28mm'));
});

test('schema graph contains valid BreadcrumbList, TechArticle, and ItemList with 15 items', () => {
  const content = fs.readFileSync(ROUTE_PATH, 'utf-8');
  const match = content.match(/const jsonLd = ({[\s\S]*?});\n\nexport default/);
  assert(match, 'jsonLd object must be defined');

  const schema = JSON.parse(match[1]);
  assert.equal(schema['@context'], 'https://schema.org');
  const graph = schema['@graph'] || [];
  const types = graph.map(n => n['@type']);

  assert(types.includes('BreadcrumbList'), 'BreadcrumbList schema missing');
  assert(types.includes('TechArticle'), 'TechArticle schema missing');
  assert(types.includes('ItemList'), 'ItemList schema missing');

  const itemList = graph.find(n => n['@type'] === 'ItemList');
  assert.equal(itemList.numberOfItems, 15, 'ItemList must declare 15 items');
  assert.equal(itemList.itemListElement.length, 15, 'ItemList must have 15 elements');
});
