import Page from "@/pages_temp/SpareParts.jsx";

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const readable = slug.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase());
  return {
    title: `${readable} - KrishiGears B2B`,
    description: `Direct factory wholesale supply of ${readable.toLowerCase()} and OEM machinery components. Get genuine replacement parts, carburetors, and gearboxes with 24-48h dispatch.`,
    alternates: {
      canonical: `https://krishigears.com/spare-parts/${slug}`
    }
  };
}

export default function SparePartsPage() {
  return <Page />;
}
