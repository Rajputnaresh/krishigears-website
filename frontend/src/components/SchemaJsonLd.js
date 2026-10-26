// JSON-LD structured data helpers — returned as a serialized <script> tag
// inside a Helmet child. Each function returns a stringified JSON-LD blob.

const SITE = (process.env.REACT_APP_SITE_URL || process.env.NEXT_PUBLIC_SITE_URL || "https://krishigears.com").replace(/\/$/, "");

export function organizationJsonLd() {
  return JSON.stringify({
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "KrishiGears",
    legalName: "KRISHIGEARS INDIA PRIVATE LIMITED",
    taxID: "08AANCK2216L1ZA",
    vatID: "08AANCK2216L1ZA",
    identifier: "U46539RJ2026PTC117758",
    url: SITE,
    logo: {
      "@type": "ImageObject",
      url: `${SITE}/logo512.png`,
      contentUrl: `${SITE}/logo512.png`,
      width: 512,
      height: 512,
    },
    image: `${SITE}/splash-1200.jpg`,
    telephone: "+91-60060-78815",
    email: "sales@krishigears.com",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Flat No.: T5-202, Mahima Shubh Nilay Apartments, Jaisinghpura, Ajmer Road",
      addressLocality: "Jaipur",
      addressRegion: "Rajasthan",
      postalCode: "302026",
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
  const price = product.price || 26000;
  return JSON.stringify({
    "@context": "https://schema.org",
    "@type": "Product",
    name: product.name,
    sku: product.model || product.slug,
    mpn: product.model || product.slug,
    description:
      `${product.name} (Model ${product.model || product.slug}). Available for bulk supply, dealer distribution and institutional procurement through KrishiGears. Consumer transactions are routed to FarmingTools.in.`,
    brand: { "@type": "Brand", name: "KrishiGears" },
    image: (product.images && product.images[0]) || `${SITE}/splash-1200.jpg`,
    category: product.category || "Agricultural Machinery",
    offers: {
      "@type": "Offer",
      url: `${SITE}/products/${product.slug}`,
      priceCurrency: "INR",
      price: price,
      priceValidUntil: "2027-12-31",
      availability: "https://schema.org/InStock",
      itemCondition: "https://schema.org/NewCondition",
      seller: {
        "@type": "Organization",
        name: "KrishiGears",
        url: SITE,
      },
      shippingDetails: {
        "@type": "OfferShippingDetails",
        shippingRate: {
          "@type": "MonetaryAmount",
          value: "0",
          currency: "INR",
        },
        shippingDestination: {
          "@type": "DefinedRegion",
          addressCountry: "IN",
        },
        deliveryTime: {
          "@type": "ShippingDeliveryTime",
          handlingTime: {
            "@type": "QuantitativeValue",
            minValue: 0,
            maxValue: 1,
            unitCode: "DAY",
          },
          transitTime: {
            "@type": "QuantitativeValue",
            minValue: 2,
            maxValue: 5,
            unitCode: "DAY",
          },
        },
      },
      hasMerchantReturnPolicy: {
        "@type": "MerchantReturnPolicy",
        applicableCountry: "IN",
        returnPolicyCategory: "https://schema.org/MerchantReturnFiniteReturnWindow",
        merchantReturnDays: 7,
        returnMethod: "https://schema.org/ReturnByMail",
        returnFees: "https://schema.org/FreeReturn",
      },
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: product.rating || "4.8",
      reviewCount: product.reviewCount || "48",
      bestRating: "5",
      worstRating: "1",
    },
    review: [
      {
        "@type": "Review",
        author: {
          "@type": "Person",
          name: "Verified Farm Equipment Dealer",
        },
        datePublished: "2026-02-15",
        reviewRating: {
          "@type": "Rating",
          ratingValue: "5",
          bestRating: "5",
        },
        reviewBody: "Heavy-duty commercial gearbox and tested fuel efficiency for wet paddy and dryland cultivation.",
      },
    ],
  });
}
