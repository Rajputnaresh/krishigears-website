const fs = require('fs');
const files = [
  'frontend/src/pages/SeoLanding.jsx',
  'frontend/src/pages/ServiceProblems.jsx',
  'frontend/src/pages/SpareParts.jsx',
  'frontend/src/components/RouteSEO.jsx',
  'frontend/src/data/catalog.js'
];
let errs = 0;
files.forEach(f => {
  const code = fs.readFileSync(f, 'utf8');
  if (code.includes('import { CITY_STATE_MAP }') && !code.includes('cityStateMap')) {
    console.log("Missing cityStateMap import in " + f);
  }
});
console.log("Done checking.");
