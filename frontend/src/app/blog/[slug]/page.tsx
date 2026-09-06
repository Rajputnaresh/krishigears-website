import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { BLOG_POSTS, BLOG_POSTS_ARRAY } from '@/data/blogPosts';
import BlogPostClient from '@/pages_temp/BlogPost.jsx';

export async function generateStaticParams() {
  return BLOG_POSTS_ARRAY.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const post = BLOG_POSTS[slug];

  if (!post) {
    return {
      title: 'Guide Not Found | KrishiGears',
    };
  }

  const vernacularKeywords = [
    ...post.tags,
    "power weeder repair guide",
    "कृषि यंत्र रिपेयर",
    "पावर वीडर समस्या समाधान",
    "शेती अवजारे दुरुस्ती",
    "KrishiGears service hub",
    "krishi yantra troubleshooting"
  ];

  return {
    title: `${post.title} | KrishiGears Engineering & Service Hub`,
    description: `${post.excerpt} - KrishiGears official machinery repair and field service guide (हिंदी / मराठी उपलब्ध).`,
    keywords: vernacularKeywords,
    alternates: {
      canonical: `https://krishigears.com/blog/${slug}`,
    },
    openGraph: {
      title: post.title,
      description: post.excerpt,
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
      title: post.title,
      description: post.excerpt,
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

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'TechArticle',
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
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <BlogPostClient initialPost={post} />
    </>
  );
}
