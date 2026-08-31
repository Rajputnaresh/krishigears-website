const fs = require('fs');
const path = require('path');

const srcPath = path.join(__dirname, '../src/data/geoSeoComprehensive.js');
if (!fs.existsSync(srcPath)) {
  console.log("No geoSeoComprehensive.js found, skipping.");
  process.exit(0);
}

const src = fs.readFileSync(srcPath, 'utf8');
const code = src.replace('export const geoSeoData = ', 'return ');
const func = new Function(code);
const geoSeoData = func();

const outputDir = path.join(__dirname, '../public/seo-data');
if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

let count = 0;
for (const item of geoSeoData) {
  if (item.slug) {
    fs.writeFileSync(
      path.join(outputDir, `${item.slug}.json`),
      JSON.stringify(item)
    );
    count++;
  }
}
console.log(`Successfully generated ${count} individual SEO JSON files.`);
