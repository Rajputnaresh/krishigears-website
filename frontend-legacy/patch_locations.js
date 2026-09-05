const fs = require('fs');

let content = fs.readFileSync('scripts/prerender-seo.js', 'utf8');

const newMeta = `  "/locations": {
    title: "All Supply Locations & Dealer Network Across India",
    description: "Explore KrishiGears dealer network, machinery supply, and spare parts across thousands of agricultural regions in India.",
  },`;

if (!content.includes('"/locations": {')) {
  content = content.replace('"/blog": {', newMeta + '\n  "/blog": {');
  fs.writeFileSync('scripts/prerender-seo.js', content);
  console.log("Added /locations to STATIC_META");
}
