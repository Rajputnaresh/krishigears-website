import Page from "@/pages_temp/ServiceProblems.jsx";

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const readable = slug.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase());
  return {
    title: `${readable} - KrishiGears B2B`,
    description: `Authorized dealer service packages and troubleshooting for ${readable.toLowerCase()}. Book field technician visits or find genuine engine repair centers in your district.`,
    alternates: {
      canonical: `https://krishigears.com/service/${slug}`
    }
  };
}

export default function ServiceProblemsPage() {
  return <Page />;
}
