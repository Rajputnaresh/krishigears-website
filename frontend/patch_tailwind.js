const fs = require('fs');
let content = fs.readFileSync('tailwind.config.js', 'utf8');
content = content.replace(
  'plugins: [require("tailwindcss-animate")],',
  'plugins: [require("tailwindcss-animate"), require("@tailwindcss/typography")],'
);
fs.writeFileSync('tailwind.config.js', content);
