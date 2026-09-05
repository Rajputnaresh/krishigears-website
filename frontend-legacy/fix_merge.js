const fs = require('fs');
let code = fs.readFileSync('src/pages/SeoLanding.jsx', 'utf8');

const target = '  const category = page.category ? CATEGORIES.find((c) => c.slug === page.category) : null;';
const replacement = `
  if (fetchedPage) {
    page = { ...page, ...fetchedPage };
  }

  const category = page.category ? CATEGORIES.find((c) => c.slug === page.category) : null;
`;

code = code.replace(target, replacement);
fs.writeFileSync('src/pages/SeoLanding.jsx', code);
