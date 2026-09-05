const fs = require("fs");
const path = require("path");

const rootDir = path.resolve(__dirname, "..");
const buildDir = path.join(rootDir, "build");
const indexPath = path.join(buildDir, "index.html");
const catalogPath = path.join(rootDir, "src", "data", "catalog.js");
const routeSeoPath = path.join(rootDir, "src", "components", "RouteSEO.jsx");
const seedBlogPath = path.resolve(rootDir, "..", "backend", "seed_blog.py");
const geoSeoPath = path.join(rootDir, "scripts", "geoSeoComprehensive.js");

const SITE = (process.env.REACT_APP_SITE_URL || process.env.NEXT_PUBLIC_SITE_URL || "https://krishigears.in").replace(/\/$/, "");
const FARMINGTOOLS_URL = (process.env.REACT_APP_FARMINGTOOLS_URL || process.env.NEXT_PUBLIC_FARMINGTOOLS_URL || "https://farmingtools.in").replace(/\/$/, "");
const DEFAULT_OG_IMAGE = `${SITE}/splash-1200.jpg`;
const DEFAULT_ROBOTS = "index, follow, max-image-preview:large";

const STATIC_META = {
  "/": {
    title: "B2B Farm Machinery Brand, Dealer Network & Bulk Supply",
    description:
      "KrishiGears is a B2B agricultural machinery brand for dealers, bulk buyers, OEM partners, FPOs and institutional supply across India. Retail buying is handled through FarmingTools.in.",
  },
  "/about": {
    title: "About KrishiGears",
    description:
      "Learn about KrishiGears, a GST-registered agricultural machinery brand serving dealer, distributor, OEM and institutional supply requirements across India.",
  },
  "/products": {
    title: "Products We Supply",
    description:
      "Explore KrishiGears agricultural machinery supplied for dealers, bulk orders, institutions and OEM distribution. Retail demand is routed to FarmingTools.in.",
  },
  "/dealer-network": {
    title: "Dealer Network",
    description:
      "KrishiGears supports agricultural machinery dealers with product range, spare parts supply, training, warranty support and district-level growth opportunities.",
  },
  "/become-a-dealer": {
    title: "Become a KrishiGears Dealer",
    description:
      "Apply to become a KrishiGears authorized dealer or distributor for farm machinery, genuine spare parts and institutional agricultural equipment supply.",
  },
  "/bulk-order": {
    title: "Bulk Order & Institutional Supply",
    description:
      "Request bulk order, FPO, contractor, institutional and government tender supply quotes for KrishiGears agricultural machinery with GST invoicing.",
  },
  "/contact": {
    title: "Contact KrishiGears",
    description:
      "Contact KrishiGears for dealer applications, bulk order enquiries, institutional supply, OEM distribution and agricultural machinery support.",
  },
  "/warranty-and-support": {
    title: "Warranty & Support",
    description:
      "Register product warranty and get KrishiGears support for agricultural machinery, genuine spare parts and dealer service coordination.",
  },
    "/locations": {
    title: "All Supply Locations & Dealer Network Across India",
    description: "Explore KrishiGears dealer network, machinery supply, and spare parts across thousands of agricultural regions in India.",
  },
  "/blog": {
    title: "Agricultural Machinery Blog",
    description:
      "KrishiGears articles for dealers, farmers, contractors and institutions on farm machinery selection, maintenance, subsidies and procurement.",
  },
};

function read(filePath) {
  return fs.readFileSync(filePath, "utf8");
}

function section(source, start, end) {
  const startIndex = source.indexOf(start);
  if (startIndex === -1) throw new Error(`Section start not found: ${start}`);
  const endIndex = source.indexOf(end, startIndex);
  if (endIndex === -1) throw new Error(`Section end not found: ${end}`);
  return source.slice(startIndex, endIndex);
}

function valuesFromSet(source, name) {
  const match = source.match(new RegExp(`const ${name} = new Set\\(\\[([\\s\\S]*?)\\]\\);`));
  if (!match) throw new Error(`Set not found: ${name}`);
  return new Set([...match[1].matchAll(/"([^"]+)"/g)].map((item) => item[1]));
}

function mapFromObject(source, name) {
  const match = source.match(new RegExp(`const ${name} = \\{([\\s\\S]*?)\\n\\};`));
  if (!match) throw new Error(`Object map not found: ${name}`);
  return Object.fromEntries([...match[1].matchAll(/"([^"]+)":\s*"([^"]+)"/g)].map((item) => [item[1], item[2]]));
}

function titleFromSlug(slug) {
  return slug
    .split("-")
    .filter(Boolean)
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
    .join(" ");
}

function htmlEscape(value) {
  return String(value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

function pageUrl(routePath) {
  return routePath === "/" ? `${SITE}/` : `${SITE}${routePath}`;
}

function fullTitle(title) {
  return title ? `${title} | KrishiGears` : "KrishiGears - Bulk Supply, Dealer Network & OEM Distribution of Farm Machinery";
}

function parseCategories(catalogSource) {
  const body = section(catalogSource, "export const CATEGORIES = [", "];\n\n// ----------- Spec helpers -----------");
  return [...body.matchAll(/\{ slug: "([^"]+)",\s*name: "([^"]+)"/g)].map((match) => ({
    slug: match[1],
    name: match[2],
  }));
}

function parseProducts(catalogSource) {
  const match = catalogSource.match(/export const PRODUCTS = \[([\s\S]*?)\n\];/);
  if (!match) throw new Error("PRODUCTS array not found");
  return [...match[1].matchAll(/slug:\s*"([^"]+)",\s*category:\s*"([^"]+)",\s*\n\s*name:\s*"([^"]+)"(?:,\s*\n?\s*model:\s*"([^"]+)")?/g)].map((item) => ({
    slug: item[1],
    category: item[2],
    name: item[3],
    model: item[4] || "",
  }));
}

function parseSeoPages(catalogSource) {
  const body = section(catalogSource, "export const SEO_PAGES = [", "];");
  return [...body.matchAll(/\{ slug: "([^"]+)", title: "([^"]+)"/g)].map((match) => ({
    slug: match[1],
    title: match[2],
  }));
}

function parseBlogSlugs(seedBlogSource) {
  return [...seedBlogSource.matchAll(/"slug":\s*"([^"]+)"/g)].map((match) => match[1]);
}

function parseGeoSeoData(geoSeoSource) {
  const body = section(geoSeoSource, "export const geoSeoData = [", "];");
  return [...body.matchAll(/slug:\s*"([^"]+)",\s*\n\s*title:\s*"([^"]+)"/g)].map((match) => ({
    slug: match[1],
    title: match[2],
  }));
}

function farmingtoolsProductUrl(slug, category, productHandles, collectionHandles) {
  const productHandle = productHandles[slug];
  if (productHandle) return `${FARMINGTOOLS_URL}/products/${productHandle}`;

  const collectionHandle = collectionHandles[category] || category;
  return collectionHandle ? `${FARMINGTOOLS_URL}/collections/${collectionHandle}` : FARMINGTOOLS_URL;
}

function routeFile(routePath) {
  if (routePath === "/") return indexPath;
  return path.join(buildDir, routePath.replace(/^\/+/, ""), "index.html");
}

function renderHeadTags(meta) {
  const canonical = meta.canonicalUrl || pageUrl(meta.path);
  const url = pageUrl(meta.path);
  const title = fullTitle(meta.title);
  const robots = meta.robots || (meta.noindex ? "noindex, follow" : DEFAULT_ROBOTS);
  const image = meta.image || DEFAULT_OG_IMAGE;
  const type = meta.type || "website";

  return [
    `<meta name="description" content="${htmlEscape(meta.description)}" />`,
    `<link rel="canonical" href="${htmlEscape(canonical)}" />`,
    `<meta name="robots" content="${htmlEscape(robots)}" />`,
    `<meta property="og:type" content="${htmlEscape(type)}" />`,
    `<meta property="og:title" content="${htmlEscape(title)}" />`,
    `<meta property="og:description" content="${htmlEscape(meta.description)}" />`,
    `<meta property="og:url" content="${htmlEscape(url)}" />`,
    `<meta property="og:image" content="${htmlEscape(image)}" />`,
    `<meta property="og:site_name" content="KrishiGears" />`,
    `<meta property="og:locale" content="en_IN" />`,
    `<meta name="twitter:card" content="summary_large_image" />`,
    `<meta name="twitter:title" content="${htmlEscape(title)}" />`,
    `<meta name="twitter:description" content="${htmlEscape(meta.description)}" />`,
    `<meta name="twitter:image" content="${htmlEscape(image)}" />`,
  ].join("\n        ");
}

function renderHtml(baseHtml, meta) {
  const title = fullTitle(meta.title);
  const headTags = renderHeadTags(meta);
  return baseHtml
    .replace(/<meta name="description"[^>]*>\s*/gi, "")
    .replace(/<meta name="robots"[^>]*>\s*/gi, "")
    .replace(/<meta property="og:[^"]+"[^>]*>\s*/gi, "")
    .replace(/<meta name="twitter:[^"]+"[^>]*>\s*/gi, "")
    .replace(/<link rel="canonical"[^>]*>\s*/gi, "")
    .replace(/<title>[\s\S]*?<\/title>/i, `${headTags}\n        <title>${htmlEscape(title)}</title>`);
}

function writeRoute(baseHtml, meta) {
  const outputPath = routeFile(meta.path);
  try {
    fs.mkdirSync(path.dirname(outputPath), { recursive: true });
  } catch (err) {
    if (err.code !== 'EEXIST') throw err;
  }
  fs.writeFileSync(outputPath, renderHtml(baseHtml, meta));
}

async function main() {
  if (!fs.existsSync(indexPath)) throw new Error("Build index.html not found. Run craco build first.");

  const baseHtml = read(indexPath);
  const catalogSource = read(catalogPath);
  const routeSeoSource = read(routeSeoPath);
  const seedBlogSource = fs.existsSync(seedBlogPath) ? read(seedBlogPath) : "";

  const geoSeoSource = fs.existsSync(geoSeoPath) ? read(geoSeoPath) : "";
  const geoSeoPages = geoSeoSource ? parseGeoSeoData(geoSeoSource) : [];

  const categories = parseCategories(catalogSource);
  const products = parseProducts(catalogSource);
  const seoPages = parseSeoPages(catalogSource);
  const blogSlugs = parseBlogSlugs(seedBlogSource);
  const productHandles = mapFromObject(catalogSource, "FARMINGTOOLS_PRODUCT_HANDLES");
  const collectionHandles = mapFromObject(catalogSource, "FARMINGTOOLS_COLLECTION_HANDLES");
  const canonicalProductSlugs = valuesFromSet(routeSeoSource, "FARMINGTOOLS_CANONICAL_PRODUCT_SLUGS");
  const noindexProductSlugs = valuesFromSet(routeSeoSource, "NOINDEX_PRODUCT_SLUGS");

  const routes = [];

  for (const [routePath, meta] of Object.entries(STATIC_META)) {
    routes.push({ path: routePath, ...meta });
  }

  for (const category of categories) {
    routes.push({
      path: `/products/category/${category.slug}`,
      title: `${category.name} Supply Category`,
      description: `${category.name} supply category for KrishiGears dealers, distributors, FPOs, contractors, OEM partners and institutional procurement teams across India.`,
    });
  }

  for (const product of products) {
    routes.push({
      path: `/products/${product.slug}`,
      title: `${product.name}${product.model ? ` ${product.model}` : ""}`,
      description: `${product.name} from KrishiGears for dealer, bulk order, distributor and institutional agricultural machinery supply. Consumer transactions are routed to FarmingTools.in.`,
      type: "product",
      canonicalUrl: canonicalProductSlugs.has(product.slug)
        ? farmingtoolsProductUrl(product.slug, product.category, productHandles, collectionHandles)
        : undefined,
      noindex: noindexProductSlugs.has(product.slug),
    });
  }

  for (const page of seoPages) {
    routes.push({
      path: `/seo/${page.slug}`,
      title: page.title,
      description: `${page.title} through KrishiGears for dealer onboarding, distributor programs, OEM partnerships, FPO supply, government requirements and institutional procurement.`,
    });
  }

  for (const geo of geoSeoPages) {
    routes.push({
      path: `/seo/${geo.slug}`,
      title: geo.title,
      description: geo.title + " — KrishiGears authorized dealer and supplier network.",
    });
  }

  for (const slug of blogSlugs) {
    routes.push({
      path: `/blog/${slug}`,
      title: titleFromSlug(slug),
      description: "KrishiGears agricultural machinery guide for dealers, farmers, contractors, FPOs and institutional buyers.",
      type: "article",
    });
  }

  const seen = new Set();
  const chunkSize = 1000;
  for (let i = 0; i < routes.length; i += chunkSize) {
    const chunk = routes.slice(i, i + chunkSize);
    for (const route of chunk) {
      if (seen.has(route.path)) throw new Error(`Duplicate prerender route: ${route.path}`);
      seen.add(route.path);
      writeRoute(baseHtml, route);
    }
    console.log(`Processed chunk ${Math.floor(i / chunkSize) + 1} of ${Math.ceil(routes.length / chunkSize)}`);
    // Yield to event loop to prevent memory overflow and allow GC
    await new Promise(resolve => setTimeout(resolve, 0));
  }

  const canonicalCount = products.filter((product) => canonicalProductSlugs.has(product.slug)).length;
  const noindexCount = products.filter((product) => noindexProductSlugs.has(product.slug)).length;
  console.log(
    `Prerendered SEO metadata for ${routes.length} public routes ` +
      `(${products.length} products, ${categories.length} categories, ${seoPages.length} SEO pages, ${geoSeoPages.length} geo-SEO pages, ${blogSlugs.length} blog posts; ` +
      `${canonicalCount} product canonicals, ${noindexCount} noindex products).`
  );
}

main().catch(e => { console.error(e); process.exit(1); });
