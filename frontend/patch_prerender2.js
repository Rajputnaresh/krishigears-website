const fs = require('fs');
let content = fs.readFileSync('scripts/prerender-seo.js', 'utf8');
if (content.includes('main();\n')) {
  content = content.replace('main();\n', 'main().catch(e => { console.error(e); process.exit(1); });\n');
  fs.writeFileSync('scripts/prerender-seo.js', content);
  console.log("Patched main()");
}
