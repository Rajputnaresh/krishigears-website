const fs = require('fs');

let content = fs.readFileSync('scripts/prerender-seo.js', 'utf8');

// Change main to async
content = content.replace('function main() {', 'async function main() {');

const oldLoop = `  const seen = new Set();
  for (const route of routes) {
    if (seen.has(route.path)) throw new Error(\`Duplicate prerender route: \${route.path}\`);
    seen.add(route.path);
    writeRoute(baseHtml, route);
  }`;

const newLoop = `  const seen = new Set();
  const chunkSize = 1000;
  for (let i = 0; i < routes.length; i += chunkSize) {
    const chunk = routes.slice(i, i + chunkSize);
    for (const route of chunk) {
      if (seen.has(route.path)) throw new Error(\`Duplicate prerender route: \${route.path}\`);
      seen.add(route.path);
      writeRoute(baseHtml, route);
    }
    console.log(\`Processed chunk \${Math.floor(i / chunkSize) + 1} of \${Math.ceil(routes.length / chunkSize)}\`);
    // Yield to event loop to prevent memory overflow and allow GC
    await new Promise(resolve => setTimeout(resolve, 0));
  }`;

content = content.replace(oldLoop, newLoop);
fs.writeFileSync('scripts/prerender-seo.js', content);
console.log("Patched prerender-seo.js");
