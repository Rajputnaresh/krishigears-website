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

const blogPostsContent = fs.readFileSync(path.join(__dirname, 'frontend/src/data/blogPosts.ts'), 'utf-8');
const blogMatches = [...blogPostsContent.matchAll(/"([a-z0-9\-]+)": \{/g)];
const blogSlugs = Array.from(new Set(blogMatches.map(m => m[1])));

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
