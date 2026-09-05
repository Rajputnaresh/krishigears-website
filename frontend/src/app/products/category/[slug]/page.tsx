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

  const title = `${category.name} | B2B Factory Price & Wholesale Dealership — KrishiGears`;
  const description = `Direct factory supply of KrishiGears ${category.name} at wholesale prices. FMTTI-tested durability, genuine OEM parts, protected dealer margins, and 24-48h dispatch across India.`;

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

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": `What is the wholesale power weeder price in India for ${category?.name || "machinery"}?`,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Wholesale dealer prices for commercial power weeders range between ₹18,000 to ₹38,000 depending on horsepower (7HP petrol vs 9HP/12HP diesel) and transmission gearbox configuration. Contact KrishiGears for tier-based bulk container pricing."
        }
      },
      {
        "@type": "Question",
        "name": "Are KrishiGears power weeders eligible for DBT agriculture subsidy?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes. KrishiGears equipment meets FMTTI / SRFMTTI test compliance standards. Authorized dealers receive complete documentation including test reports and HSN-coded GST tax invoices for 40% to 50% DBT / SMAM state subsidies."
        }
      },
      {
        "@type": "Question",
        "name": "What is the minimum order quantity (MOQ) for dealers?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Introductory dealer MOQ starts from as few as 2 units per order, minimizing working capital risks for rural machinery dealers."
        }
      },
      {
        "@type": "Question",
        "name": "How fast can spare parts be delivered to remote districts?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "All critical wear-and-tear parts are stocked at our Jaipur central warehouse and dispatched within 24 to 48 hours via express logistics across PAN India."
        }
      }
    ]
  };

  return (
    <>
      {categoryJsonLd && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(categoryJsonLd) }}
        />
      )}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <Page />
    </>
  );
}

