import { Metadata } from "next";
import Page from "@/pages_temp/ProductDetail.jsx";
import { PRODUCTS } from "@/data/catalog";

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
  const description = `${product.name} (${product.model || "Commercial Grade"}). FMTTI-tested, ${product.specs?.Power || "Heavy duty"}, genuine OEM fitment, 24-48h dispatch from Jaipur HQ. Get wholesale dealer quote.`;

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

  // Clean schema: stripped fake aggregateRating / unverified reviews (Google manual action risk)
  // Offer without price: B2B RFQ model - no published prices (Merchant-listing errors are Shopping-feature only, not organic)
  const productJsonLd = product ? {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": product.name,
    "image": product.images?.[0] ? `https://krishigears.com${product.images[0]}` : "https://krishigears.com/images/products/weeder.webp",
    "description": `${product.name} engineered for high-durability Indian farming operations. Model: ${product.model || product.slug}.`,
    "sku": product.model || product.slug,
    "mpn": product.model || product.slug,
    "brand": {
      "@type": "Brand",
      "name": "KrishiGears"
    },
    "category": product.category || "Agricultural Machinery",
    "offers": {
      "@type": "Offer",
      "url": `https://krishigears.com/products/${slug}`,
      "priceCurrency": "INR",
      "availability": "https://schema.org/InStock",
      "itemCondition": "https://schema.org/NewCondition",
      "businessFunction": "http://purl.org/goodrelations/v1#Sell",
      "seller": {
        "@type": "Organization",
        "name": "KrishiGears"
      }
    }
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
