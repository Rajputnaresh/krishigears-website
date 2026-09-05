const fs = require('fs');
let code = fs.readFileSync('scripts/prerender-seo.js', 'utf8');
code = code.replace(
  'const geoSeoPath = path.join(rootDir, "src", "data", "geoSeoComprehensive.js");',
  'const geoSeoPath = path.join(rootDir, "scripts", "geoSeoComprehensive.js");'
);
fs.writeFileSync('scripts/prerender-seo.js', code);
