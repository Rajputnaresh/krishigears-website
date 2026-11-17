import Page from "@/pages_temp/SpareParts.jsx";
import { clampDescription } from "@/lib/seo-metadata";

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const districtSlug = slug.includes("-in-") ? slug.split("-in-").pop()! : slug.replace(/^power-weeder-spare-parts-in-/, "").replace(/^power-weeder-spare-parts-/, "");
  const districtName = districtSlug ? districtSlug.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase()) : "India";
  const title = `Power Weeder Spare Parts in ${districtName} | Wholesale & Fitment`;
  const description = clampDescription(`Wholesale power weeder spare parts and fitment in ${districtName}. Genuine engine parts, carburetors, blades, and transmission spares procured per verified order.`, 155);

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
      images: [{ url: "/images/products/weeder.webp", width: 800, height: 600, alt: districtName }],
    }
  };
}

export default async function SparePartsPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const districtSlug = slug.includes("-in-") ? slug.split("-in-").pop()! : slug.replace(/^power-weeder-spare-parts-in-/, "").replace(/^power-weeder-spare-parts-/, "");
  const districtName = districtSlug ? districtSlug.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase()) : "India";

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
        "name": `${districtName} Spares`,
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
