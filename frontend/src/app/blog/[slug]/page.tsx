import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { BLOG_POSTS, BLOG_POSTS_ARRAY } from '@/data/blogPosts';
import { clampTitle, clampDescription } from '@/app/layout';
import BlogPostClient from '@/pages_temp/BlogPost.jsx';

export async function generateStaticParams() {
  return BLOG_POSTS_ARRAY.map((post) => ({
    slug: post.slug,
  }));
}

function extractFaqs(raw: string): Array<{ question: string; answer: string }> {
  if (!raw) return [];
  const text = raw.replace(/\\n/g, '\n');
  const faqs: Array<{ question: string; answer: string }> = [];
  const regex = /###\s*Q:\s*(.+?)\n\*\*Expert Resolution:\*\*\s*([\s\S]+?)(?=\n###\s*Q:|\n---\s*|$)/g;
  let match;
  while ((match = regex.exec(text)) !== null) {
    faqs.push({
      question: match[1].trim(),
      answer: match[2].trim().replace(/\n+/g, ' '),
    });
  }
  return faqs;
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const post = BLOG_POSTS[slug];

  if (!post) {
    return {
      title: 'Guide Not Found | KrishiGears',
    };
  }

  const rawTitle = (post as any).meta_title || post.title;
  const rawDesc = (post as any).meta_description || post.excerpt;

  const vernacularKeywords = [
    ...post.tags,
    "power weeder repair guide",
    "कृषि यंत्र रिपेयर",
    "पावर वीडर समस्या समाधान",
    "शेती अवजारे दुरुस्ती",
    "KrishiGears service hub",
    "krishi yantra troubleshooting"
  ];

  const metaTitle = clampTitle(rawTitle, 44);
  const metaDescription = clampDescription(rawDesc, 155);

  return {
    title: metaTitle,
    description: metaDescription,
    keywords: vernacularKeywords,
    alternates: {
      canonical: `https://krishigears.com/blog/${slug}`,
    },
    openGraph: {
      title: metaTitle,
      description: metaDescription,
      url: `https://krishigears.com/blog/${slug}`,
      siteName: 'KrishiGears',
      images: [
        {
          url: post.cover_image,
          width: 1200,
          height: 675,
          alt: post.title,
        },
      ],
      type: 'article',
      publishedTime: post.created_at,
    },
    twitter: {
      card: 'summary_large_image',
      title: metaTitle,
      description: metaDescription,
      images: [post.cover_image],
    },
  };
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = BLOG_POSTS[slug];

  if (!post) {
    notFound();
  }

  const faqs = extractFaqs(post.content);

  const jsonLdGraph = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'TechArticle',
        '@id': `https://krishigears.com/blog/${slug}#article`,
        headline: post.title,
        description: post.excerpt,
        image: [post.cover_image],
        datePublished: post.created_at,
        dateModified: post.created_at,
        inLanguage: ["en-IN", "hi-IN", "mr-IN"],
        author: {
          '@type': 'Organization',
          name: 'KrishiGears Engineering Desk',
          url: 'https://krishigears.com',
        },
        publisher: {
          '@type': 'Organization',
          name: 'KrishiGears',
          url: 'https://krishigears.com',
          logo: {
            '@type': 'ImageObject',
            url: 'https://krishigears.com/logo512.png',
          },
        },
        mainEntityOfPage: {
          '@type': 'WebPage',
          '@id': `https://krishigears.com/blog/${slug}`,
        },
        keywords: [...post.tags, "कृषि यंत्र रिपेयर", "पावर वीडर समस्या"].join(', '),
      },
      {
        '@type': 'BreadcrumbList',
        '@id': `https://krishigears.com/blog/${slug}#breadcrumb`,
        itemListElement: [
          {
            '@type': 'ListItem',
            position: 1,
            name: 'Home',
            item: 'https://krishigears.com',
          },
          {
            '@type': 'ListItem',
            position: 2,
            name: 'Field Service Guides',
            item: 'https://krishigears.com/blog',
          },
          {
            '@type': 'ListItem',
            position: 3,
            name: post.title,
            item: `https://krishigears.com/blog/${slug}`,
          },
        ],
      },
      ...(faqs.length > 0
        ? [
            {
              '@type': 'FAQPage',
              '@id': `https://krishigears.com/blog/${slug}#faq`,
              mainEntity: faqs.map((f) => ({
                '@type': 'Question',
                name: f.question,
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: f.answer,
                },
              })),
            },
          ]
        : []),
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdGraph) }}
      />
      <BlogPostClient initialPost={post} />
    </>
  );
}
