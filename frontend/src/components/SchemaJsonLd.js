// JSON-LD structured data helpers — returned as a serialized <script> tag
// inside a Helmet child. Each function returns a stringified JSON-LD blob.

const SITE = "https://krishigears.in";

export function organizationJsonLd() {
  return JSON.stringify({
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "KrishiGears",
    legalName: "KrishiGears",
    url: SITE,
    logo: `${SITE}/logo512.png`,
    image: `${SITE}/splash-1200.jpg`,
    telephone: "+91-60060-78815",
    email: "sales@krishigears.com",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Jaipur",
      addressRegion: "Rajasthan",
      addressCountry: "IN",
    },
    sameAs: [
      "https://www.facebook.com/krishigears",
      "https://www.instagram.com/krishigears",
      "https://www.youtube.com/@krishigears",
    ],
    description:
      "KrishiGears is a B2B agricultural machinery brand serving dealers, OEM partners, institutions, FPOs and government tenders across India. Retail purchases are fulfilled through our sister site FarmingTools.in.",
  });
}

export function websiteJsonLd() {
  return JSON.stringify({
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "KrishiGears",
    url: SITE,
    potentialAction: {
      "@type": "SearchAction",
      target: `${SITE}/products?q={search_term_string}`,
      "query-input": "required name=search_term_string",
    },
  });
}

export function breadcrumbJsonLd(items) {
  // items: [{ name, path }]
  return JSON.stringify({
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((it, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: it.name,
      item: `${SITE}${it.path}`,
    })),
  });
}

export function faqJsonLd(faqs) {
  // faqs: [{ q, a }]
  return JSON.stringify({
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  });
}

export function productJsonLd(product) {
  // KrishiGears product pages are B2B reference only.
  // We expose Product schema with brand info; price/availability live on FarmingTools.
  return JSON.stringify({
    "@context": "https://schema.org",
    "@type": "Product",
    name: product.name,
    sku: product.model || product.slug,
    description:
      `${product.name} (Model ${product.model || product.slug}). Available for bulk supply, dealer distribution and institutional procurement through KrishiGears. For retail purchase visit FarmingTools.in.`,
    brand: { "@type": "Brand", name: "KrishiGears" },
    image: (product.images && product.images[0]) || `${SITE}/splash-1200.jpg`,
    category: product.category,
  });
}
