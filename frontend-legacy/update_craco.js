const fs = require('fs');
let code = fs.readFileSync('craco.config.js', 'utf8');
code = code.replace(/webpackConfig\.externals = \{[\s\S]*?\};/, '');
fs.writeFileSync('craco.config.js', code);
