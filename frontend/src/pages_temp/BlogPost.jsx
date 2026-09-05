import ReactMarkdown from "react-markdown";
import { useEffect, useState } from "react";
import Link from "next/link";
import { useParams } from "next/navigation";
import { Calendar, ArrowLeft, Tag, Clock, Wrench, ShieldCheck } from "lucide-react";
import { apiClient } from "@/lib/api";
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
      <div className="kg-section text-center py-24">
        <h1 className="kg-h2">Article not found</h1>
        <p className="text-zinc-400 mt-3">The guide you are looking for does not exist or has been relocated.</p>
        <Link href="/blog" className="mt-6 inline-flex items-center gap-2 text-lime-400 font-bold hover:underline">
          <ArrowLeft className="h-4 w-4"/> Back to Knowledge Hub
        </Link>
      </div>
    );
  }

  if (loading) {
    return (
      <div className="kg-section py-24 text-center">
        <div className="inline-block animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-lime-500 mb-4"></div>
        <p className="text-zinc-400 text-sm">Loading field guide…</p>
      </div>
    );
  }

  return (
    <article data-testid="blog-post-page" className="py-12 md:py-16 px-5 sm:px-8 max-w-4xl mx-auto">
      {/* Back navigation */}
      <div className="flex items-center justify-between gap-4 pb-6 border-b border-zinc-800/80">
        <Link 
          href="/blog" 
          className="inline-flex items-center gap-2 text-xs uppercase font-bold tracking-wider text-zinc-400 hover:text-lime-400 transition-colors"
        >
          <ArrowLeft className="h-3.5 w-3.5"/> All Field Guides
        </Link>
        <div className="flex items-center gap-2 text-xs text-zinc-500">
          <Clock className="h-3.5 w-3.5 text-zinc-400" />
          <span>4 min practical read</span>
        </div>
      </div>

      {/* Article Header */}
      <header className="mt-8">
        <div className="flex flex-wrap items-center gap-3">
          <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded text-[11px] font-semibold uppercase tracking-wider bg-lime-500/10 text-lime-400 border border-lime-500/30">
            <Wrench className="h-3 w-3" /> Field Service Guide
          </span>
          <div className="text-xs text-zinc-400 flex items-center gap-1.5">
            <Calendar className="h-3.5 w-3.5 text-zinc-500"/> 
            {new Date(post.created_at).toLocaleDateString("en-IN", { day: "numeric", month: "long", year: "numeric" })}
          </div>
        </div>

        <h1 className="font-display font-extrabold text-2xl sm:text-3xl md:text-4xl text-zinc-100 tracking-tight leading-snug sm:leading-tight mt-4 text-balance">
          {post.title}
        </h1>

        {post.excerpt && (
          <p className="mt-4 text-base sm:text-lg text-zinc-300 leading-relaxed font-normal">
            {post.excerpt}
          </p>
        )}

        {/* Tags */}
        {post.tags?.length > 0 && (
          <div className="mt-5 flex flex-wrap gap-1.5">
            {post.tags.map((t) => (
              <span 
                key={t} 
                className="text-[11px] font-medium px-2.5 py-1 rounded bg-zinc-900/90 border border-zinc-800 text-zinc-300 inline-flex items-center gap-1"
              >
                <Tag className="h-2.5 w-2.5 text-lime-400"/>
                {t}
              </span>
            ))}
          </div>
        )}
      </header>

      {/* Photo Frame - Controlled dimensions, framed with subtle background */}
      {post.cover_image && (
        <div className="my-8 rounded-xl overflow-hidden border border-zinc-800/90 bg-zinc-950 max-w-xl mx-auto shadow-xl">
          <div className="h-64 sm:h-80 w-full relative bg-zinc-900/50 flex items-center justify-center p-4">
            <img 
              src={post.cover_image} 
              alt={post.title} 
              loading="eager" 
              className="max-h-full max-w-full object-contain rounded" 
            />
          </div>
          <div className="px-4 py-2 bg-zinc-900/80 border-t border-zinc-800/80 text-[11px] text-zinc-400 flex items-center justify-between">
            <span>Genuine KrishiGears machinery & spare parts fitment</span>
            <span className="text-lime-400 font-mono">B2B Standard</span>
          </div>
        </div>
      )}

      {/* Main Formatted Content - Clean typography, generous line-height, distinct headers */}
      <div className="mt-10 border-t border-zinc-800/80 pt-8">
        <div className="text-zinc-200 text-base leading-relaxed space-y-6">
          <ReactMarkdown
            components={{
              h2: ({ node, ...props }) => (
                <h2 className="font-display font-bold text-xl sm:text-2xl text-lime-400 mt-10 mb-4 pb-2 border-b border-zinc-800 flex items-center gap-2" {...props} />
              ),
              h3: ({ node, ...props }) => (
                <h3 className="font-display font-semibold text-lg text-white mt-8 mb-3" {...props} />
              ),
              p: ({ node, ...props }) => (
                <p className="text-zinc-200 text-[15px] sm:text-base leading-relaxed my-4" {...props} />
              ),
              ul: ({ node, ...props }) => (
                <ul className="space-y-3 my-5 pl-2 list-none" {...props} />
              ),
              ol: ({ node, ...props }) => (
                <ol className="space-y-3 my-5 pl-5 list-decimal text-zinc-200" {...props} />
              ),
              li: ({ node, children, ...props }) => (
                <li className="text-zinc-200 text-[15px] sm:text-base leading-relaxed flex items-start gap-2.5" {...props}>
                  <span className="text-lime-400 text-base mt-0.5 leading-none shrink-0">•</span>
                  <span className="flex-1">{children}</span>
                </li>
              ),
              strong: ({ node, ...props }) => (
                <strong className="font-semibold text-white tracking-wide" {...props} />
              ),
              code: ({ node, ...props }) => (
                <code className="text-xs font-mono bg-zinc-900 text-lime-400 px-1.5 py-0.5 rounded border border-zinc-800" {...props} />
              ),
              blockquote: ({ node, ...props }) => (
                <blockquote className="my-6 p-4 rounded-r-lg bg-lime-500/5 border-l-4 border-lime-500 text-zinc-300 italic text-sm" {...props} />
              )
            }}
          >
            {post.content}
          </ReactMarkdown>
        </div>
      </div>

      {/* Dealer & Machinery Helpline Callout */}
      <div className="mt-14 p-6 sm:p-8 rounded-xl bg-gradient-to-br from-zinc-900 to-zinc-950 border border-zinc-800 shadow-xl relative overflow-hidden">
        <div className="absolute top-0 right-0 w-32 h-32 bg-lime-500/10 blur-3xl rounded-full"></div>
        <div className="relative z-10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
          <div>
            <div className="inline-flex items-center gap-1.5 text-xs font-bold text-lime-400 uppercase tracking-wider mb-2">
              <ShieldCheck className="h-4 w-4" /> Need Spare Parts or Technical Support?
            </div>
            <h4 className="font-display font-bold text-lg text-white">
              Direct B2B Dispatch & Fitment Confirmation
            </h4>
            <p className="text-zinc-400 text-xs sm:text-sm mt-1 max-w-lg">
              Contact our engineering and dispatch desk in Jaipur for original carburetor jets, recoil assemblies, blade sets, and gearbox components.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto shrink-0">
            <Link
              href="/contact"
              className="px-5 py-2.5 rounded-lg bg-lime-500 hover:bg-lime-400 text-black font-bold text-xs uppercase tracking-wider text-center transition-all shadow-md shadow-lime-500/20"
            >
              Contact Support
            </Link>
            <Link
              href="/products"
              className="px-5 py-2.5 rounded-lg bg-zinc-800 hover:bg-zinc-700 text-white font-medium text-xs uppercase tracking-wider text-center border border-zinc-700 transition-all"
            >
              View Catalog
            </Link>
          </div>
        </div>
      </div>
    </article>
  );
}
