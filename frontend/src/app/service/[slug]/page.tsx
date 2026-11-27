import Page from "@/pages_temp/ServiceProblems.jsx";
import { REPAIR_FAQS } from "@/lib/service-support.mjs";
import { clampDescription } from "@/lib/seo-metadata";

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const districtSlug = slug.includes("-in-") ? slug.split("-in-").pop()! : slug.replace(/^power-weeder-repair-service-in-/, "").replace(/^power-weeder-repair-service-/, "");
  const districtName = districtSlug ? districtSlug.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase()) : "India";
  const title = `Power Weeder Repair in ${districtName}`;
  const description = clampDescription(`Expert power weeder repair, troubleshooting guide and spare parts support for ${districtName}. Technical guidance for engine, clutch, and transmission maintenance.`, 155);

  return {
    title,
    description,
    alternates: {
      canonical: `https://krishigears.com/service/${slug}`
    },
    openGraph: {
      title,
      description,
      url: `https://krishigears.com/service/${slug}`,
      siteName: "KrishiGears",
      images: [{ url: "/images/products/weeder.webp", width: 800, height: 600, alt: districtName }],
    }
  };
}

export default async function ServiceProblemsPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const districtSlug = slug.includes("-in-") ? slug.split("-in-").pop()! : slug.replace(/^power-weeder-repair-service-in-/, "").replace(/^power-weeder-repair-service-/, "");
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
        "name": "Service support",
        "item": "https://krishigears.com/service"
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": `${districtName} Service`,
        "item": `https://krishigears.com/service/${slug}`
      }
    ]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd).replace(/</g, "\\u003c") }}
      />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org", "@type": "FAQPage",
        mainEntity: REPAIR_FAQS.map(({ question, answer }) => ({ "@type": "Question", name: question, acceptedAnswer: { "@type": "Answer", text: answer } })),
      }).replace(/</g, "\\u003c") }} />
      <Page />
    </>
  );
}
