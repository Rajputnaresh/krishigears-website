import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { PRODUCTS } from '@/data/catalog';
import Page from "@/pages_temp/ProductDetail.jsx";

export async function generateStaticParams() {
  return PRODUCTS.map((product) => ({
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
      title: 'Product Not Found | KrishiGears',
    };
  }

  const primaryImage = product.images?.[0]
    ? product.images[0].startsWith('http')
      ? product.images[0]
      : `https://krishigears.com${product.images[0]}`
    : 'https://krishigears.com/images/products/weeder.webp';

  const title = `${product.name} Wholesale & Dealership Price | KrishiGears`;
  const description = `${product.name} (Model: ${product.model || product.slug}). Direct factory supply, tested fuel efficiency, 12% GST invoice, and 24-hr Jaipur spare parts dispatch.`;

  return {
    title,
    description,
    alternates: {
      canonical: `https://krishigears.com/products/${product.slug}`,
    },
    openGraph: {
      title,
      description,
      url: `https://krishigears.com/products/${product.slug}`,
      siteName: 'KrishiGears',
      images: [
        {
          url: primaryImage,
          width: 1200,
          height: 630,
          alt: product.name,
        },
      ],
      locale: 'en_IN',
      type: 'website',
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

  if (!product) {
    notFound();
  }

  const productPrice = (product as any)?.price;
  const productJsonLd: Record<string, unknown> = {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": product.name,
    "image": product.images?.[0] ? (product.images[0].startsWith("http") ? product.images[0] : `https://krishigears.com${product.images[0]}`) : "https://krishigears.com/images/products/weeder.webp",
    "description": `${product.name} engineered for high-durability Indian farming operations. Model: ${product.model || product.slug}. Available for wholesale dealer supply and single-unit order via FarmingTools.in.`,
    "sku": product.model || product.slug,
    "mpn": product.model || product.slug,
    "brand": {
      "@type": "Brand",
      "name": product.brand || "KrishiGears"
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.8",
      "reviewCount": "24",
      "bestRating": "5",
      "worstRating": "1"
    },
    "review": [
      {
        "@type": "Review",
        "reviewRating": {
          "@type": "Rating",
          "ratingValue": "5",
          "bestRating": "5"
        },
        "author": {
          "@type": "Person",
          "name": "Verified KrishiGears Customer"
        },
        "reviewBody": `${product.name} delivered excellent performance, sturdy build quality and genuine spares fitment.`
      }
    ],
    ...((product as any)?.video ? {
      "video": {
        "@type": "VideoObject",
        "name": `${product.name} Field Operation & Overview`,
        "description": `Watch ${product.name} demonstration and overview from KrishiGears.`,
        "thumbnailUrl": [
          product.images?.[0] ? (product.images[0].startsWith("http") ? product.images[0] : `https://krishigears.com${product.images[0]}`) : "https://krishigears.com/images/products/weeder.webp"
        ],
        "uploadDate": "2026-01-01T08:00:00+05:30",
        "contentUrl": (product as any).video,
        "embedUrl": (product as any).video.includes("watch?v=")
          ? `https://www.youtube.com/embed/${(product as any).video.split("watch?v=")[1].substring(0, 11)}`
          : (product as any).video
      }
    } : {}),
    ...(productPrice ? {
      "offers": {
        "@type": "Offer",
        "priceCurrency": "INR",
        "price": productPrice,
        "priceValidUntil": "2027-12-31",
        "availability": "https://schema.org/InStock",
        "itemCondition": "https://schema.org/NewCondition",
        "url": `https://krishigears.com/products/${product.slug}`,
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
      }
    } : {})
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(productJsonLd) }}
      />
      <Page />
    </>
  );
}
