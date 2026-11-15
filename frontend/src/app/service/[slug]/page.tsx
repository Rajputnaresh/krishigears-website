import Page from "@/pages_temp/ServiceProblems.jsx";
import { REPAIR_FAQS } from "@/lib/service-support.mjs";
import { clampDescription } from "@/app/layout";

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const readable = slug.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase());
  const title = `${readable} Troubleshooting & Service`;
  const description = clampDescription(`Troubleshooting and repair enquiries for ${readable.toLowerCase()}. Supplier or partner routing, coverage, charges and timing require confirmation.`, 155);

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
      images: [{ url: "/images/products/weeder.webp", width: 800, height: 600, alt: readable }],
    }
  };
}

export default async function ServiceProblemsPage({ params }: { params: Promise<{ slug: string }> }) {
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
        "name": "Service support",
        "item": "https://krishigears.com/service"
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": readable,
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
