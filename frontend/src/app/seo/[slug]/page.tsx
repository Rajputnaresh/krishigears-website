import Page from "@/pages_temp/SeoLanding.jsx";
import { GEO_SEO_PAGES } from "@/data/geoSeo";
import { SEO_PAGES } from "@/data/catalog";
import { Metadata } from "next";

export async function generateStaticParams() {
  const params = [];
  
  // National pages
  SEO_PAGES.forEach((page) => {
    params.push({ slug: page.slug });
  });

  // Geo pages
  GEO_SEO_PAGES.forEach((page) => {
    params.push({ slug: page.slug });
  });

  return params;
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;

  let title = "Agricultural Machinery Dealer";
  let description = "Wholesale supply of Power Weeders and Agricultural Machinery.";

  const geoPage = GEO_SEO_PAGES.find(p => p.slug === slug);
  if (geoPage) {
    // Truncate title cleanly to 45 chars so it fits with " | KrishiGears" under 60
    title = geoPage.title;
    if (title.length > 42) {
      title = title.substring(0, 42).trim() + "...";
    }

    // Truncate description cleanly to 150 chars
    let rawDesc = `Authorized KrishiGears wholesale supplier in ${geoPage.city}, ${geoPage.state}. Get the best pricing for ${geoPage.category.replace("-", " ")}. ${geoPage.hindiTitle}`;
    if (rawDesc.length > 150) {
      description = rawDesc.substring(0, 147).trim() + "...";
    } else {
      description = rawDesc;
    }
  } else {
    const natPage = SEO_PAGES.find(p => p.slug === slug);
    if (natPage) {
      title = natPage.title;
      description = natPage.description || description;
    }
  }

  return {
    title,
    description,
    alternates: {
      canonical: `https://krishigears.com/seo/${slug}`
    }
  };
}

export default function SeoLandingPage() {
  return <Page />;
}
