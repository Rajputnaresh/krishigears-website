import { Helmet } from "react-helmet-async";

const SITE = (process.env.REACT_APP_SITE_URL || process.env.NEXT_PUBLIC_SITE_URL || "https://krishigears.in").replace(/\/$/, "");
const DEFAULT_OG_IMAGE = `${SITE}/splash-1200.jpg`;
const DEFAULT_DESC =
  "KrishiGears — premium agricultural machinery brand. Bulk supply, dealer network, OEM distribution and institutional procurement of power tillers, weeders, brush cutters & farm tools across India.";

// Centralized SEO component. Every page passes title + description + path.
// Falls back to safe defaults so we never ship an unset tag.
export default function SEO({
  title,
  description = DEFAULT_DESC,
  path = "/",
  image = DEFAULT_OG_IMAGE,
  type = "website",
  noindex = false,
  canonicalUrl,
  robots,
  children,
}) {
  const cleanPath = path === "/" ? "/" : `/${path.replace(/^\/+|\/+$/g, "")}`;
  const url = `${SITE}${cleanPath}`;
  const canonicalHref = canonicalUrl || url;
  const fullTitle = title ? `${title} | KrishiGears` : "KrishiGears — Bulk Supply, Dealer Network & OEM Distribution of Farm Machinery";
  const robotsContent = robots || (noindex ? "noindex, follow" : "index, follow, max-image-preview:large");

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={canonicalHref} />
      {robotsContent && <meta name="robots" content={robotsContent} />}

      {/* Open Graph */}
      <meta property="og:type" content={type} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url} />
      <meta property="og:image" content={image} />
      <meta property="og:site_name" content="KrishiGears" />
      <meta property="og:locale" content="en_IN" />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />

      {children}
    </Helmet>
  );
}
