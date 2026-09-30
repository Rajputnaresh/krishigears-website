import Page from "@/pages_temp/SeoLanding.jsx";
import { GEO_SEO_PAGES } from "@/data/geoSeo";
import { SEO_PAGES } from "@/data/catalog";
import { Metadata } from "next";
import { notFound } from "next/navigation";
import { clampTitle, clampDescription } from "@/app/layout";

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
    // The city name is the term these 374 pages rank for, so it must survive
    // truncation. Clamping the whole string chopped the city off ("...Supply
    // in"), so shorten the descriptive prefix to fit the budget instead and
    // always append the city, state intact.
    const cityPart = `${geoPage.city}, ${geoPage.state}`;
    const budget = 46 - cityPart.length - 4; // room for " in " + brand suffix
    const longPrefix = geoPage.crop
      ? `Best Power Weeder for ${geoPage.crop} Farming in`
      : "Power Weeder Dealer & Wholesale Supply in";
    const shortPrefix = longPrefix.length > budget ? "Power Weeder Supply in" : longPrefix;
    title = `${shortPrefix} ${cityPart}`;

    const rawDesc = `Authorized KrishiGears wholesale supplier in ${geoPage.city}, ${geoPage.state}. Best pricing for ${geoPage.category.replace(/-/g, " ")}. ${geoPage.hindiTitle}`;
    description = clampDescription(rawDesc, 152);
  } else {
    const natPage = SEO_PAGES.find(p => p.slug === slug);
    if (natPage) {
      title = clampTitle(natPage.title, 44);
      description = clampDescription(natPage.description || description, 152);
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

// An unknown slug must 404, not render a page with the default title. Before
// this, /seo/undefined returned 200 with the homepage title, so a canonical
// pointing at it read as a valid duplicate rather than an obvious mistake.
export default async function SeoLandingPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const isKnown =
    SEO_PAGES.some((page) => page.slug === slug) ||
    GEO_SEO_PAGES.some((page) => page.slug === slug);

  if (!isKnown) notFound();

  return <Page />;
}
