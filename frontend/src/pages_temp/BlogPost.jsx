import ReactMarkdown from "react-markdown";
import { useEffect, useState } from "react";
import Link from "next/link";
import { useParams } from "next/navigation";
import { Calendar, ArrowLeft, Tag } from "lucide-react";
import { apiClient } from "@/lib/api";
import { FARMER_FIELD, FIELD_TRACTOR, PLOWING } from "@/data/catalog";
import { BLOG_POSTS } from "@/data/blogPosts";

export default function BlogPost() {
  const { slug } = useParams();
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function load() {
      if (!slug) return;
      const slugStr = Array.isArray(slug) ? slug[0] : slug;
      try {
        const res = await apiClient.get(`/blog/${slugStr}`);
        setPost(res.data);
      } catch (err) {
        if (BLOG_POSTS[slugStr]) setPost(BLOG_POSTS[slugStr]);
      }
      setLoading(false);
    }
    load();
  }, [slug]);

  if (!loading && !post) {
    return (
      <div className="kg-section text-center">
        <h1 className="kg-h2">Article not found</h1>
        <Link href="/blog" className="mt-6 inline-flex items-center gap-2 text-lime-500"><ArrowLeft className="h-4 w-4"/> Back to Blog</Link>
      </div>
    );
  }
  if (loading) return <div className="kg-section text-center text-zinc-400">Loading…</div>;

  return (
    <article data-testid="blog-post-page" className="kg-section">
      <div className="max-w-[800px] mx-auto">
        <Link href="/blog" className="inline-flex items-center gap-2 text-sm text-zinc-300 hover:text-lime-500"><ArrowLeft className="h-4 w-4"/> All articles</Link>
        <div className="mt-8 text-xs text-zinc-400 flex items-center gap-2">
          <Calendar className="h-3.5 w-3.5"/> {new Date(post.created_at).toLocaleDateString("en-IN", { day: "numeric", month: "long", year: "numeric" })}
        </div>
        <h1 className="kg-h1 mt-4 text-balance">{post.title}</h1>
        {post.tags?.length > 0 && (
          <div className="mt-5 flex flex-wrap gap-2">
            {post.tags.map((t) => (
              <span key={t} className="text-xs px-3 py-1 border border-zinc-800 text-zinc-300 inline-flex items-center gap-1"><Tag className="h-3 w-3"/>{t}</span>
            ))}
          </div>
        )}
        <div className="mt-10 aspect-[16/9] overflow-hidden border border-zinc-800">
          <img src={post.cover_image} alt={post.title} loading="lazy" className="w-full h-full object-cover" />
        </div>
        <div className="mt-10 prose prose-invert max-w-none prose-lime prose-img:rounded-lg">
          <ReactMarkdown>{post.content}</ReactMarkdown>
        </div>
      </div>
    </article>
  );
}
