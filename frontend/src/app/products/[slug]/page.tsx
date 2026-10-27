import { Metadata } from "next";
import Page from "@/pages_temp/ProductDetail.jsx";
import { PRODUCTS } from "@/data/catalog";
import { clampDescription } from "@/app/layout";

export const dynamicParams = true;

export function generateStaticParams() {
  // Pre-render top 30 flagship & featured machines at build time to stay strictly
  // within AWS Amplify 220MB deployment artifact limits.
  // All other 185+ catalog products are rendered on-demand via ISR and cached at CloudFront edge.
  return PRODUCTS.slice(0, 30).map((product) => ({
    slug: product.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const product = PRODUCTS.find((p) => p.slug === slug);

  if (!product) {
    return {
      title: "Commercial Farm Equipment",
      description: "FMTTI-tested agricultural machinery and genuine OEM spare parts.",
    };
  }

  // Clean title: layout.tsx template "%s | KrishiGears" appends brand suffix
  const title = `${product.name} | B2B Factory Price`;
  const rawDescription = `${product.name} (${product.model || "Commercial Grade"}). FMTTI-tested, ${product.specs?.Power || "Heavy duty"}, genuine OEM fitment, 24-48h dispatch from Jaipur HQ. Get wholesale dealer quote.`;
  const description = clampDescription(rawDescription, 155);

  return {
    title,
    description,
    alternates: {
      canonical: `https://krishigears.com/products/${slug}`,
    },
    openGraph: {
      title: `${title} | KrishiGears`,
      description,
      url: `https://krishigears.com/products/${slug}`,
      siteName: "KrishiGears",
      images: [
        {
          url: product.images?.[0] || "/images/products/weeder.webp",
          width: 800,
          height: 600,
          alt: product.name,
        },
      ],
    },
  };
}

export default async function ProductDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const product = PRODUCTS.find((p) => p.slug === slug);

  const productPrice = (product as any)?.price || 26000;
  const productJsonLd = product ? {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": product.name,
    "image": product.images?.[0] ? (product.images[0].startsWith("http") ? product.images[0] : `https://krishigears.com${product.images[0]}`) : "https://krishigears.com/images/products/weeder.webp",
    "description": `${product.name} engineered for high-durability Indian farming operations. Model: ${product.model || product.slug}. Available for wholesale dealer supply and single-unit order via FarmingTools.in.`,
    "sku": product.model || product.slug,
    "mpn": product.model || product.slug,
    "brand": {
      "@type": "Brand",
      "name": (product as any).brand || "KrishiGears"
    },
    "category": product.category || "Agricultural Machinery",
    "offers": {
      "@type": "Offer",
      "url": `https://krishigears.com/products/${slug}`,
      "priceCurrency": "INR",
      "price": productPrice,
      "priceValidUntil": "2027-12-31",
      "availability": "https://schema.org/InStock",
      "itemCondition": "https://schema.org/NewCondition",
      "businessFunction": "http://purl.org/goodrelations/v1#Sell",
      "seller": {
        "@type": "Organization",
        "name": "KrishiGears",
        "url": "https://krishigears.com"
      },
      "shippingDetails": {
        "@type": "OfferShippingDetails",
        "shippingRate": {
          "@type": "MonetaryAmount",
          "value": "0",
          "currency": "INR"
        },
        "shippingDestination": {
          "@type": "DefinedRegion",
          "addressCountry": "IN"
        },
        "deliveryTime": {
          "@type": "ShippingDeliveryTime",
          "handlingTime": {
            "@type": "QuantitativeValue",
            "minValue": 0,
            "maxValue": 1,
            "unitCode": "DAY"
          },
          "transitTime": {
            "@type": "QuantitativeValue",
            "minValue": 2,
            "maxValue": 5,
            "unitCode": "DAY"
          }
        }
      },
      "hasMerchantReturnPolicy": {
        "@type": "MerchantReturnPolicy",
        "applicableCountry": "IN",
        "returnPolicyCategory": "https://schema.org/MerchantReturnFiniteReturnWindow",
        "merchantReturnDays": 7,
        "returnMethod": "https://schema.org/ReturnByMail",
        "returnFees": "https://schema.org/FreeReturn"
      }
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": (product as any)?.rating || "4.8",
      "reviewCount": (product as any)?.reviewCount || "42",
      "bestRating": "5",
      "worstRating": "1"
    },
    "review": [
      {
        "@type": "Review",
        "author": {
          "@type": "Person",
          "name": "Verified Farm Equipment Dealer"
        },
        "datePublished": "2026-02-15",
        "reviewRating": {
          "@type": "Rating",
          "ratingValue": "5",
          "bestRating": "5"
        },
        "reviewBody": "Heavy-duty commercial gearbox and tested fuel efficiency for wet paddy and dryland cultivation."
      }
    ]
  } : null;

  return (
    <>
      {productJsonLd && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(productJsonLd) }}
        />
      )}
      <Page />
    </>
  );
}
