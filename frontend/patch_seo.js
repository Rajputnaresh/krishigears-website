const fs = require('fs');
let content = fs.readFileSync('src/pages/SeoLanding.jsx', 'utf8');

// 1. Add imports
content = content.replace(
  'import { Link, useParams, Navigate } from "react-router-dom";',
  'import { Link, useParams, Navigate } from "react-router-dom";\nimport { useState, useEffect } from "react";\nimport ReactMarkdown from "react-markdown";'
);

// 2. Add state and fetch
const stateAndFetch = `
  const { slug } = useParams();
  const [fetchedPage, setFetchedPage] = useState(null);

  useEffect(() => {
    fetch(\`/seo-data/\${slug}.json\`)
      .then(res => res.json())
      .then(data => setFetchedPage(data))
      .catch(e => console.log('No extra SEO data found for', slug));
  }, [slug]);
`;
content = content.replace('  const { slug } = useParams();', stateAndFetch);

// 3. Merge fetched data
content = content.replace(
  '  if (!page) {\n    return <Navigate to="/locations" replace />;\n  }',
  `  if (fetchedPage) {
    page = { ...page, ...fetchedPage };
  }

  if (!page) {
    return <Navigate to="/locations" replace />;
  }`
);

// 4. Render Markdown Content
const markdownRender = `
      {/* Rich Markdown SEO Content */}
      {page.content && (
        <section className="kg-section bg-white dark:bg-black border-y border-zinc-100 dark:border-zinc-900">
          <div className="max-w-[1000px] mx-auto prose prose-zinc dark:prose-invert prose-lg px-6">
            <ReactMarkdown>{page.content}</ReactMarkdown>
          </div>
        </section>
      )}

      {/* Why KrishiGears */}
`;
content = content.replace('      {/* Why KrishiGears */}', markdownRender);

fs.writeFileSync('src/pages/SeoLanding.jsx', content);
console.log("Patched SeoLanding.jsx");
