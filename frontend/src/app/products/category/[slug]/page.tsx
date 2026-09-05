import { Metadata } from "next";
import Page from "@/pages_temp/CategoryPage.jsx";
import { CATEGORIES, PRODUCTS } from "@/data/catalog";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const category = CATEGORIES.find((c) => c.slug === slug);

  if (!category) {
    return {
      title: "Commercial Farm Equipment Category | KrishiGears",
      description: "FMTTI-tested agricultural machinery and genuine OEM spare parts.",
    };
  }

  const title = `${category.name} Wholesale Supply & Dealership | KrishiGears`;
  const description = `Direct factory supply of KrishiGears ${category.name}. FMTTI-tested durability, genuine OEM parts, protected dealer margins, and 24-48h dispatch across India.`;

  return {
    title,
    description,
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
  const category = CATEGORIES.find((c) => c.slug === slug);
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
        "image": prod.images?.[0] ? `https://krishigears.com${prod.images[0]}` : "https://krishigears.com/images/products/weeder.webp",
      }))
    }
  } : null;

  return (
    <>
      {categoryJsonLd && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(categoryJsonLd) }}
        />
      )}
      <Page />
    </>
  );
}

