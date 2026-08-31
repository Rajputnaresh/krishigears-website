const fs = require('fs');
let content = fs.readFileSync('craco.config.js', 'utf8');

if (!content.includes('externals: {')) {
  content = content.replace('configure: (webpackConfig) => {', `configure: (webpackConfig) => {
      // Externalize the massive geoSeoComprehensive data to prevent bundle bloat
      webpackConfig.externals = {
        ...(webpackConfig.externals || {}),
        '@/data/geoSeoComprehensive': 'geoSeoData'
      };`);
  fs.writeFileSync('craco.config.js', content);
  console.log("Updated craco.config.js");
}
