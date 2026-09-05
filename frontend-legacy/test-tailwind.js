const fs = require('fs');
let code = fs.readFileSync('tailwind.config.js', 'utf8');
code = code.replace('"./src/**/*.{js,jsx,ts,tsx}"', '"./src/components/**/*.{js,jsx}", "./src/pages/**/*.{js,jsx}"');
fs.writeFileSync('tailwind.config.js', code);
