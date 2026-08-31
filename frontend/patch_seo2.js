const fs = require('fs');
let content = fs.readFileSync('src/pages/SeoLanding.jsx', 'utf8');

const target = 'if (!page) {\n    return <Navigate to="/locations" replace />;\n  }';
const replacement = `if (fetchedPage) {
    page = { ...page, ...fetchedPage };
  }

  if (!page) {
    return <Navigate to="/locations" replace />;
  }`;

// Use regex to ignore exact whitespace
content = content.replace(/if \(!page\) \{\s*return <Navigate to="\/locations" replace \/>;\s*\}/, replacement);

fs.writeFileSync('src/pages/SeoLanding.jsx', content);
console.log("Patched Navigate");
