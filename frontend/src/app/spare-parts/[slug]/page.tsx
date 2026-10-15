import Page from "@/pages_temp/SpareParts.jsx";
import { clampDescription } from "@/app/layout";

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const readable = slug.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase());
  const title = `${readable} Spares & OEM Fitment`;
  const description = clampDescription(`Direct factory wholesale supply of ${readable.toLowerCase()} and OEM machinery components. Get genuine replacement parts, carburetors, and gearboxes with 24-48h dispatch.`, 155);

  return {
    title,
    description,
    alternates: {
      canonical: `https://krishigears.com/spare-parts/${slug}`
    },
    openGraph: {
      title,
      description,
      url: `https://krishigears.com/spare-parts/${slug}`,
      siteName: "KrishiGears",
      images: [{ url: "/images/products/weeder.webp", width: 800, height: 600, alt: readable }],
    }
  };
}

export default async function SparePartsPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const readable = slug.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase());

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://krishigears.com"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Spare Parts",
        "item": "https://krishigears.com/products/category/power-weeder-spare-parts"
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": readable,
        "item": `https://krishigears.com/spare-parts/${slug}`
      }
    ]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <Page />
    </>
  );
}
