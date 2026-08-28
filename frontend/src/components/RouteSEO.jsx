import { useLocation } from "react-router-dom";
import SEO from "@/components/SEO";
import { CATEGORIES, PRODUCTS, SEO_PAGES, farmingtoolsProductUrl } from "@/data/catalog";

const STATIC_META = {
  "/": {
    title: "B2B Farm Machinery Brand, Dealer Network & Bulk Supply",
    description:
      "KrishiGears is a B2B agricultural machinery brand for dealers, bulk buyers, OEM partners, FPOs and institutional supply across India. Retail buying is handled through FarmingTools.in.",
  },
  "/about": {
    title: "About KrishiGears",
    description:
      "Learn about KrishiGears, a GST-registered agricultural machinery brand serving dealer, distributor, OEM and institutional supply requirements across India.",
  },
  "/products": {
    title: "Products We Supply",
    description:
      "Explore KrishiGears agricultural machinery supplied for dealers, bulk orders, institutions and OEM distribution. Retail demand is routed to FarmingTools.in.",
  },
  "/dealer-network": {
    title: "Dealer Network",
    description:
      "KrishiGears supports agricultural machinery dealers with product range, spare parts supply, training, warranty support and district-level growth opportunities.",
  },
  "/become-a-dealer": {
    title: "Become a KrishiGears Dealer",
    description:
      "Apply to become a KrishiGears authorized dealer or distributor for farm machinery, genuine spare parts and institutional agricultural equipment supply.",
  },
  "/bulk-order": {
    title: "Bulk Order & Institutional Supply",
    description:
      "Request bulk order, FPO, contractor, institutional and government tender supply quotes for KrishiGears agricultural machinery with GST invoicing.",
  },
  "/contact": {
    title: "Contact KrishiGears",
    description:
      "Contact KrishiGears for dealer applications, bulk order enquiries, institutional supply, OEM distribution and agricultural machinery support.",
  },
  "/warranty-and-support": {
    title: "Warranty & Support",
    description:
      "Register product warranty and get KrishiGears support for agricultural machinery, genuine spare parts and dealer service coordination.",
  },
  "/blog": {
    title: "Agricultural Machinery Blog",
    description:
      "KrishiGears articles for dealers, farmers, contractors and institutions on farm machinery selection, maintenance, subsidies and procurement.",
  },
};

function normalizePath(pathname) {
  if (!pathname || pathname === "/") return "/";
  return pathname.replace(/\/+$/, "");
}

function titleFromSlug(slug) {
  return slug
    .split("-")
    .filter(Boolean)
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
    .join(" ");
}

const FARMINGTOOLS_CANONICAL_PRODUCT_SLUGS = new Set([
  "nsm-bc-c35",
  "nsm-bc-c43",
  "nsm-bc-c52",
  "rk-bc-p50",
  "rk-bc-up35",
  "rk-bc-up43",
  "rk-bc-up52",
  "nsm-csp-c58",
  "rk-csp-up58",
  "rk-csp-up63",
  "nsm-ea-p52",
  "nsm-ea-p55",
  "nsm-ea-p68",
  "rk-ea-p52",
  "rk-ea-p68",
  "nb-icd-c186",
  "np-icp-c177",
  "rk-170f",
  "rk-173f-diesel",
  "rk-177f-wolf",
  "rk-icd-up186-sh",
  "rk-icp-p170-lde",
  "rk-icp-p177-lde",
  "rk-icp-up170-sh",
  "rk-pw-wp-d80",
  "rk-pw-wp-p80",
  "rk-su80",
  "rk-wp-p02",
  "rk-wp-p03",
  "rk-wp-p1-5",
  "rk-wp-up3",
  "wqd10-11-075a",
  "wqd15-10-11a",
  "wqd15-15-15fa",
]);

const NOINDEX_PRODUCT_SLUGS = new Set([
  "rk-hose-pipe",
  "rk-engine",
  "rk-maize-thresher",
  "rk-crankshaft",
  "rk-piston-ring",
  "rk-sprayer-battery",
  "rk-carburetor",
  "rk-grass-mower",
  "rk-mini-inter",
  "rk-sprayer-power",
  "rk-recoil-starter",
  "rk-reaper",
  "rk-seeder",
]);

export default function RouteSEO() {
  const { pathname } = useLocation();
  const path = normalizePath(pathname);

  if (path.startsWith("/admin")) {
    return (
      <SEO
        title="KrishiGears Admin"
        description="KrishiGears private admin area."
        path={path}
        noindex
        robots="noindex, nofollow"
      />
    );
  }

  if (STATIC_META[path]) {
    return <SEO {...STATIC_META[path]} path={path} />;
  }

  if (path.startsWith("/products/category/")) {
    const slug = path.replace("/products/category/", "");
    const category = CATEGORIES.find((item) => item.slug === slug);
    if (category) {
      return (
        <SEO
          title={`${category.name} Supply Category`}
          description={`${category.name} supply category for KrishiGears dealers, distributors, FPOs, contractors, OEM partners and institutional procurement teams across India.`}
          path={path}
          image={category.image}
        />
      );
    }
  }

  if (path.startsWith("/products/")) {
    const slug = path.replace("/products/", "");
    const product = PRODUCTS.find((item) => item.slug === slug);
    if (product) {
      const canonicalUrl = FARMINGTOOLS_CANONICAL_PRODUCT_SLUGS.has(slug)
        ? farmingtoolsProductUrl(product)
        : undefined;
      const noindex = NOINDEX_PRODUCT_SLUGS.has(slug);

      return (
        <SEO
          title={`${product.name}${product.model ? ` ${product.model}` : ""}`}
          description={`${product.name} from KrishiGears for dealer, bulk order, distributor and institutional agricultural machinery supply. Consumer transactions are routed to FarmingTools.in.`}
          path={path}
          image={product.images?.[0]}
          type="product"
          canonicalUrl={canonicalUrl}
          noindex={noindex}
        />
      );
    }
  }

  if (path.startsWith("/seo/")) {
    const slug = path.replace("/seo/", "");
    const page = SEO_PAGES.find((item) => item.slug === slug);
    if (page) {
      const geoSuffix = page.city ? ` in ${page.city}, ${page.state}` : "";
      return (
        <SEO
          title={page.title}
          description={`${page.title} through KrishiGears${geoSuffix} for dealer onboarding, distributor programs, OEM partnerships, FPO supply, government requirements and institutional procurement.`}
          path={path}
        />
      );
    }
  }

  if (path.startsWith("/blog/")) {
    return (
      <SEO
        title={titleFromSlug(path.replace("/blog/", ""))}
        description="KrishiGears agricultural machinery guide for dealers, farmers, contractors, FPOs and institutional buyers."
        path={path}
        type="article"
      />
    );
  }

  return (
    <SEO
      title="KrishiGears"
      description="KrishiGears B2B agricultural machinery brand for dealer network, bulk order, OEM and institutional supply."
      path={path}
    />
  );
}
