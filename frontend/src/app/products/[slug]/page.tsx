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
      title: "Commercial Farm Equipment | KrishiGears",
      description: "FMTTI-tested agricultural machinery and genuine OEM spare parts.",
    };
  }

  const title = `${product.name} | B2B Factory Price — KrishiGears`;
  const description = `${product.name} (${product.model || "Commercial Grade"}). FMTTI-tested, ${product.specs?.Power || "Heavy duty"}, genuine OEM fitment, 24-48h dispatch from Jaipur HQ. Get wholesale dealer quote.`;

  return {
    title,
    description,
    alternates: {
      canonical: `https://krishigears.com/products/${slug}`,
    },
    openGraph: {
      title,
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

  const productJsonLd = product ? {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": product.name,
    "image": product.images?.[0] ? `https://krishigears.com${product.images[0]}` : "https://krishigears.com/images/products/weeder.webp",
    "description": `${product.name} engineered for high-durability Indian farming operations. Model: ${product.model}.`,
    "sku": product.model || product.slug,
    "mpn": product.model || product.slug,
    "brand": {
      "@type": "Brand",
      "name": "KrishiGears"
    },
    "offers": {
      "@type": "Offer",
      "url": `https://krishigears.com/products/${slug}`,
      "priceCurrency": "INR",
      "availability": "https://schema.org/InStock",
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

