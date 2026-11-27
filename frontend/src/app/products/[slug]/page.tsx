import { productSpecifications, getProductGSTRate } from "@/lib/product-specifications.mjs";
import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { PRODUCTS } from '@/data/catalog';
import Page from "@/pages_temp/ProductDetail.jsx";
import { clampTitle, clampDescription } from "@/lib/seo-metadata";

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
      title: 'Product Not Found',
    };
  }

  const primaryImage = product.images?.[0]
    ? product.images[0].startsWith('http')
      ? product.images[0]
      : `https://krishigears.com${product.images[0]}`
    : 'https://krishigears.com/images/products/weeder.webp';

  const gstRate = getProductGSTRate(product);
  const title = clampTitle(`${product.name} Wholesale Price`, 44);
  const description = clampDescription(`${product.name} (Model: ${product.model || product.slug}). Compare specifications, ${gstRate}% GST, and request a supplier-confirmed quotation with fast dispatch.`, 155);

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

  const rawPrice = Number((product as any).price);
  const hasValidPrice = Number.isFinite(rawPrice) && rawPrice > 0;
  const productJsonLd: Record<string, unknown> = {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": product.name,
    "@id": `https://krishigears.com/products/${product.slug}#product`,
    "url": `https://krishigears.com/products/${product.slug}`,
    "additionalProperty": productSpecifications(product),
    "image": product.images?.[0] ? (product.images[0].startsWith("http") ? product.images[0] : `https://krishigears.com${product.images[0]}`) : "https://krishigears.com/images/products/weeder.webp",
    "description": `${product.name} catalogue specifications. Model: ${product.model || product.slug}. Commercial farm machinery and genuine spare parts direct dispatch PAN India.`,
    "sku": product.model || product.slug,
    "mpn": product.model || product.slug,
    "brand": {
      "@type": "Brand",
      "name": product.brand || "KrishiGears"
    },
    "category": product.category || "Agricultural Machinery",
  };

  if (hasValidPrice) {
    productJsonLd.offers = {
      "@type": "Offer",
      "url": `https://krishigears.com/products/${product.slug}`,
      "priceCurrency": "INR",
      "price": rawPrice,
      "priceValidUntil": "2027-12-31",
      "availability": "https://schema.org/InStock",
      "itemCondition": "https://schema.org/NewCondition",
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
            "maxValue": 2,
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
    };
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(productJsonLd).replace(/</g, "\\u003c") }}
      />
      <Page key={slug} />
    </>
  );
}
