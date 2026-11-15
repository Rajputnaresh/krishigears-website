import { productSpecifications } from "@/lib/product-specifications.mjs";
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

  const gstRate = (product as { gst?: number }).gst ?? 5;
  const title = `${product.name} Wholesale & Dealership Price`;
  const description = `${product.name} (Model: ${product.model || product.slug}). Compare catalogue specifications and request a supplier-confirmed quotation, availability and dispatch timing. ${gstRate}% GST.`;

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

  const productJsonLd: Record<string, unknown> = {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": product.name,
    "@id": `https://krishigears.com/products/${product.slug}#product`,
    "url": `https://krishigears.com/products/${product.slug}`,
    "additionalProperty": productSpecifications(product),
    "image": product.images?.[0] ? (product.images[0].startsWith("http") ? product.images[0] : `https://krishigears.com${product.images[0]}`) : "https://krishigears.com/images/products/weeder.webp",
    "description": `${product.name} engineered for high-durability Indian farming operations. Model: ${product.model || product.slug}. Available for wholesale dealer supply and single-unit order via FarmingTools.in.`,
    "sku": product.model || product.slug,
    "mpn": product.model || product.slug,
    "brand": {
      "@type": "Brand",
      "name": product.brand || "KrishiGears"
    },

  };

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
