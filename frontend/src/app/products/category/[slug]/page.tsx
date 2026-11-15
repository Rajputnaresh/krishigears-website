import { productSpecifications, POWER_WEEDER_FAQS, CATEGORY_FAQS } from "@/lib/product-specifications.mjs";
import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Page from "@/pages_temp/CategoryPage.jsx";
import { CATEGORIES, PRODUCTS } from "@/data/catalog";


export async function generateStaticParams() {
  return CATEGORIES.map((category) => ({
    slug: category.slug,
  }));
}

export async function generateMetadata({

  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const category = CATEGORIES.find((c) => c.slug === slug);

  if (!category) {
    return {
      title: "Category Not Found",
      robots: { index: false, follow: false },
    };
  }

  const isSpareParts = slug === "power-weeder-spare-parts";
  // No brand inside the title: the layout template appends " | KrishiGears",
  // so embedding it here produced "… | KrishiGears | KrishiGears".
  const title = isSpareParts
    ? "Power Weeder Spare Parts Wholesale Suppliers & Price List"
    : `${category.name} B2B Factory Price & Wholesale Dealership`;
  const description = slug === "power-weeders"
    ? "Compare power weeder engine, HP, displacement, transmission and tilling dimensions. Supplier-confirmed quotations for dealer and bulk orders across India."
    : isSpareParts
    ? "Wholesale supplier of genuine OEM power weeder and tiller spare parts: carburetors, recoil starters, Viton oil seals and gearboxes. Mixed MOQ, 24-48h dispatch."
    : `Direct factory supply of KrishiGears ${category.name} at wholesale prices. FMTTI-tested durability, genuine OEM parts and protected dealer margins.`;

  return {
    title,
    description,
    keywords: isSpareParts ? [
      "power weeder spare parts wholesale",
      "power weeder spare parts suppliers",
      "power tiller spare parts price list pdf",
      "agricultural machinery spare parts suppliers",
      "power weeder attachments wholesale",
      "brush cutter spare parts wholesale"
    ] : undefined,
    alternates: {
      canonical: `https://krishigears.com/products/category/${slug}`,
    },
    openGraph: {
      title,
      description,
      url: `https://krishigears.com/products/category/${slug}`,
      siteName: "KrishiGears",
      images: [
        {
          url: category.image || "/images/products/weeder.webp",
          width: 1200,
          height: 630,
          alt: category.name,
        },
      ],
    },
  };
}

export default async function CategoryDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const isSpareParts = slug === "power-weeder-spare-parts";
  const category = CATEGORIES.find((c) => c.slug === slug);

  // Only two categories exist in the catalog. Without this, an unknown slug
  // rendered a "Category not found" page that still returned 200, which reads
  // to a crawler as a real page with very little content.
  if (!category) notFound();

  const items = PRODUCTS.filter((p) => p.category === slug);

  const categoryJsonLd = category ? {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "name": `${category.name} - KrishiGears B2B`,
    "description": `Commercial supply catalog for ${category.name}.`,
    "url": `https://krishigears.com/products/category/${slug}`,
    "mainEntity": {
      "@type": "ItemList",
      "numberOfItems": items.length,
      "itemListElement": items.map((prod, idx) => ({
        "@type": "ListItem",
        "position": idx + 1,
        "name": prod.name,
        "url": `https://krishigears.com/products/${prod.slug}`,
        "item": {
          "@type": "Product",
          "@id": `https://krishigears.com/products/${prod.slug}#product`,
          "name": prod.name,
          "url": `https://krishigears.com/products/${prod.slug}`,
          "model": prod.model || prod.slug,
          "additionalProperty": productSpecifications(prod),
        },
        "image": prod.images?.[0] ? (prod.images[0].startsWith("http") ? prod.images[0] : `https://krishigears.com${prod.images[0]}`) : "https://krishigears.com/images/products/weeder.webp",
      }))
    }
  } : null;

  const categoryFaqList = (CATEGORY_FAQS as Record<string, Array<{ question: string; answer: string }>>)[slug] || CATEGORY_FAQS["power-weeders"] || [];
  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": categoryFaqList.map(({ question, answer }) => ({
      "@type": "Question",
      "name": question,
      "acceptedAnswer": { "@type": "Answer", "text": answer },
    })),
  };

  return (
    <>
      {categoryJsonLd && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(categoryJsonLd).replace(/</g, "\\u003c") }}
        />
      )}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd).replace(/</g, "\\u003c") }}
      />
      <Page />
    </>
  );
}

