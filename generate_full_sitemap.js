const fs = require('fs');
const path = require('path');

const locs = require('./frontend/src/data/locations.json');
const SITE_URL = 'https://krishigears.com';

const staticRoutes = [
  { path: '', prio: '1.0', freq: 'daily' },
  { path: '/about', prio: '0.8', freq: 'monthly' },
  { path: '/dealer-network', prio: '0.9', freq: 'weekly' },
  { path: '/become-a-dealer', prio: '0.9', freq: 'weekly' },
  { path: '/bulk-order', prio: '0.9', freq: 'weekly' },
  { path: '/products', prio: '0.9', freq: 'weekly' },
  { path: '/locations', prio: '0.8', freq: 'weekly' },
  { path: '/warranty-and-support', prio: '0.8', freq: 'monthly' },
  { path: '/blog', prio: '0.8', freq: 'weekly' },
  { path: '/glossary', prio: '0.85', freq: 'weekly' },
  { path: '/contact', prio: '0.8', freq: 'monthly' },
  { path: '/seo/power-weeder-supplier-india', prio: '0.9', freq: 'weekly' },
  { path: '/seo/power-weeder-spare-parts-supplier-india', prio: '0.9', freq: 'weekly' }
];

const products = [
  'kg-170f',
  'kg-173f-diesel',
  'kg-177f-wolf',
  'kg-icp-p170-lde',
  'kg-icp-up170-sh',
  'kg-icd-up186-sh',
  'kg-baby-weeder',
  'kg-crankshaft',
  'kg-piston-ring',
  'kg-recoil-starter',
  'kg-rotary-blades'
];

const categories = [
  'power-weeders',
  'power-weeder-spare-parts'
];

const states = [
  'andhra-pradesh', 'assam', 'bihar', 'chhattisgarh', 'goa', 'gujarat',
  'haryana', 'himachal-pradesh', 'jharkhand', 'karnataka', 'kerala',
  'madhya-pradesh', 'maharashtra', 'odisha', 'punjab', 'rajasthan',
  'tamil-nadu', 'telangana', 'uttar-pradesh', 'uttarakhand', 'west-bengal'
];

const blogSlugs = [
  'power-weeder-buying-guide-2026',
  'rk-170f-vs-177f-vs-173f-comparison',
  'power-weeder-government-subsidy-dbt-guide',
  'power-weeder-maintenance-spare-parts-guide',
  'best-power-weeder-sugarcane-maharashtra',
  'best-power-weeder-rice-paddy-tamil-nadu',
  'power-weeder-rental-business-india',
  'power-weeder-vs-power-tiller',
  '10-hp-diesel-power-weeder-upgrade-guide',
  'power-weeder-blade-replacement-guide',
  'power-weeder-crankshaft-failure-diagnosis',
  'power-weeder-recoil-starter-fix',
  'best-power-weeder-cotton-farming-gujarat',
  'power-weeder-coconut-arecanut-karnataka',
  'fpo-bulk-order-power-weeder-subsidy',
  'power-weeder-price-in-india-2026-b2b-dealer-wholesale-guide',
  '2-stroke-brush-cutter-petrol-oil-ratio-calculator',
  'smam-subsidy-portal-registration-power-weeder-guide',
  'power-weeder-subsidy-karnataka-2026',
  'power-weeder-subsidy-uttar-pradesh-2026',
  'power-weeder-subsidy-gujarat-2026',
  'power-weeder-not-starting-recoil-pull-troubleshooting',
  'diesel-weeder-engine-hunting-rpm-fluctuation',
  'power-weeder-gearbox-oil-leaking-axle-oil-seal-replacement',
  'power-weeder-blade-types-j-blades-vs-c-blades',
  'htp-sprayer-pump-pressure-unloader-valve-adjustment',
  'battery-sprayer-pump-pressure-drop-diaphragm-repair',
  'agri-machinery-dealer-operations-88-profitability'
];

const geoCategories = [
  'power-weeders',
  'power-weeder-spare-parts',
  'brush-cutters',
  'earth-augers'
];

let xml = '<?xml version="1.0" encoding="UTF-8"?>\n';
xml += '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n';

staticRoutes.forEach(r => {
  xml += `  <url><loc>${SITE_URL}${r.path}</loc><changefreq>${r.freq}</changefreq><priority>${r.prio}</priority></url>\n`;
});

products.forEach(p => {
  xml += `  <url><loc>${SITE_URL}/products/${p}</loc><changefreq>weekly</changefreq><priority>0.9</priority></url>\n`;
});

categories.forEach(c => {
  xml += `  <url><loc>${SITE_URL}/products/category/${c}</loc><changefreq>weekly</changefreq><priority>0.8</priority></url>\n`;
});

states.forEach(s => {
  xml += `  <url><loc>${SITE_URL}/dealer/${s}</loc><changefreq>weekly</changefreq><priority>0.8</priority></url>\n`;
  xml += `  <url><loc>${SITE_URL}/become-a-dealer/${s}</loc><changefreq>weekly</changefreq><priority>0.8</priority></url>\n`;
});

blogSlugs.forEach(b => {
  xml += `  <url><loc>${SITE_URL}/blog/${b}</loc><changefreq>monthly</changefreq><priority>0.8</priority></url>\n`;
});

let geoCount = 0;
Object.keys(locs).forEach(name => {
  const slug = name
    .toLowerCase()
    .replace(/&amp;/g, 'and')
    .replace(/&/g, 'and')
    .replace(/ /g, '-')
    .replace(/[()]/g, '')
    .replace(/-+/g, '-');
  geoCategories.forEach(cat => {
    xml += `  <url><loc>${SITE_URL}/${cat}-in-${slug}</loc><changefreq>weekly</changefreq><priority>0.7</priority></url>\n`;
    geoCount++;
  });
});

xml += '</urlset>\n';

const outPath = path.join(__dirname, 'frontend/public/sitemap.xml');
fs.writeFileSync(outPath, xml);
console.log(`Generated sitemap with ${staticRoutes.length + products.length + categories.length + states.length*2 + blogSlugs.length + geoCount} URLs to ${outPath}`);
