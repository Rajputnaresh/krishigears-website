import { productSpecifications, POWER_WEEDER_FAQS, CATEGORY_FAQS } from "@/lib/product-specifications.mjs";
import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Page from "@/pages_temp/CategoryPage.jsx";
import { CATEGORIES, PRODUCTS } from "@/data/catalog";
import equipmentEnquiries from "@/data/equipmentEnquiries.json";
import Link from "next/link";


export async function generateStaticParams() {
  return [...CATEGORIES, ...equipmentEnquiries].map((category) => ({
    slug: category.slug,
  }));
}

export async function generateMetadata({

  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const enquiry = equipmentEnquiries.find((entry) => entry.slug === slug);
  if (enquiry) {
    return {
      title: enquiry.title,
      description: enquiry.description,
      alternates: { canonical: `https://krishigears.com/products/category/${slug}` },
    };
  }
  const category = CATEGORIES.find((c) => c.slug === slug);

  if (!category) {
    return {
      title: "Category Not Found",
      robots: { index: false, follow: false },
    };
  }

  const isSpareParts = slug === "power-weeder-spare-parts";
  // No brand inside the title: the layout template appends " | KrishiGears",
  // so embedding it here produced "… | KrishiGears | KrishiGears".
  const title = isSpareParts
    ? "Power Weeder Spare Parts Wholesale Suppliers & Price List"
    : `${category.name} B2B Factory Price & Wholesale Dealership`;
  const description = slug === "power-weeders"
    ? "Compare power weeder engine, HP, displacement, transmission and tilling dimensions. Supplier-confirmed quotations for dealer and bulk orders across India."
    : isSpareParts
    ? "Wholesale supplier of genuine OEM power weeder and tiller spare parts: carburetors, recoil starters, Viton oil seals and gearboxes. Mixed MOQ, order-per-sale procurement."
    : `Direct factory supply of KrishiGears ${category.name} at wholesale prices. FMTTI-tested durability, genuine OEM parts and protected dealer margins.`;

  return {
    title,
    description,
    keywords: isSpareParts ? [
      "power weeder spare parts wholesale",
      "power weeder spare parts suppliers",
      "power tiller spare parts price list pdf",
      "agricultural machinery spare parts suppliers",
      "power weeder attachments wholesale",
      "brush cutter spare parts wholesale"
    ] : undefined,
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
  const enquiry = equipmentEnquiries.find((entry) => entry.slug === slug);
  if (enquiry) {
    return (
      <main className="mx-auto max-w-4xl space-y-10 px-5 py-16">
        <header className="space-y-4">
          <Link href="/products" className="underline">Equipment catalogue</Link>
          <h1 className="text-4xl font-bold">{enquiry.name}</h1>
          <p className="font-semibold">{enquiry.audience}</p>
          <p>{enquiry.intro}</p>
          <Link href="/bulk-order" className="inline-flex min-h-11 items-center rounded bg-emerald-700 px-5 font-semibold text-white">Request a quote</Link>
        </header>
        <section className="space-y-3">
          <h2 className="text-2xl font-semibold">{enquiry.contextTitle}</h2>
          <p>{enquiry.context}</p>
          <dl className="space-y-3">
            {enquiry.checklist.map(({ label, detail }) => (
              <div key={label}><dt className="font-semibold">{label}</dt><dd>{detail}</dd></div>
            ))}
          </dl>
        </section>
        {enquiry.examples.length > 0 && (
          <section className="space-y-3">
            <h2 className="text-2xl font-semibold">Supplier catalogue references</h2>
            <ul className="space-y-3">
              {enquiry.examples.map(({ name, attributes, source }) => (
                <li key={name}><a className="font-semibold underline" href={source}>{name}</a><p>{attributes}</p></li>
              ))}
            </ul>
            <p>{enquiry.exampleNote}</p>
          </section>
        )}
        <section className="space-y-3">
          <h2 className="text-2xl font-semibold">{enquiry.safetyTitle}</h2>
          <p>{enquiry.safety}</p>
          <ul className="space-y-2">
            {enquiry.sources.map(({ label, url }) => (
              <li key={url}><a className="underline" href={url}>{label}</a></li>
            ))}
          </ul>
        </section>
        <section className="space-y-3">
          <h2 className="text-2xl font-semibold">Common questions</h2>
          {enquiry.faqs.map(({ question, answer }) => (
            <details key={question} className="rounded border p-4">
              <summary className="cursor-pointer font-semibold">{question}</summary>
              <p className="mt-2">{answer}</p>
            </details>
          ))}
          <p>{enquiry.request}</p>
          <Link href={enquiry.relatedHref} className="underline">{enquiry.relatedTitle}</Link>
          <p>{enquiry.relatedNote}</p>
        </section>
      </main>
    );
  }
  const isSpareParts = slug === "power-weeder-spare-parts";
  const category = CATEGORIES.find((c) => c.slug === slug);

  // Only two categories exist in the catalog. Without this, an unknown slug
  // rendered a "Category not found" page that still returned 200, which reads
  // to a crawler as a real page with very little content.
  if (!category) notFound();

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
        "item": {
          "@type": "Product",
          "@id": `https://krishigears.com/products/${prod.slug}#product`,
          "name": prod.name,
          "url": `https://krishigears.com/products/${prod.slug}`,
          "model": prod.model || prod.slug,
          "additionalProperty": productSpecifications(prod),
        },
        "image": prod.images?.[0] ? (prod.images[0].startsWith("http") ? prod.images[0] : `https://krishigears.com${prod.images[0]}`) : "https://krishigears.com/images/products/weeder.webp",
      }))
    }
  } : null;

  const categoryFaqList = slug === "power-weeders" ? POWER_WEEDER_FAQS : (CATEGORY_FAQS as Record<string, Array<{ question: string; answer: string }>>)[slug] || [];
  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": categoryFaqList.map(({ question, answer }) => ({
      "@type": "Question",
      "name": question,
      "acceptedAnswer": { "@type": "Answer", "text": answer },
    })),
  };

  return (
    <>
      {categoryJsonLd && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(categoryJsonLd).replace(/</g, "\\u003c") }}
        />
      )}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd).replace(/</g, "\\u003c") }}
      />
      <Page />
    </>
  );
}

