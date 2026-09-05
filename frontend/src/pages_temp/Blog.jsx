import { useEffect, useState } from "react";
import Link from "next/link";
import { Calendar, ArrowRight } from "lucide-react";
import { apiClient } from "@/lib/api";
import { FARMER_FIELD, FIELD_TRACTOR, PLOWING } from "@/data/catalog";
import { BLOG_POSTS_ARRAY } from "@/data/blogPosts";

const POST_OVERRIDES = {};

function normalizePost(post) {
  return { ...post, ...(POST_OVERRIDES[post.slug] || {}) };
}

export default function Blog() {
  const [posts, setPosts] = useState(null);

  useEffect(() => {
    apiClient.get("/blog")
      .then((res) => {
        const list = Array.isArray(res.data) ? res.data : [];
        setPosts((list.length ? list : BLOG_POSTS_ARRAY).map(normalizePost));
      })
      .catch(() => setPosts(BLOG_POSTS_ARRAY.map(normalizePost)));
  }, []);

  if (posts === null) {
    return <div className="kg-section text-zinc-400 text-center">Loading articles…</div>;
  }

  return (
    <div data-testid="blog-page" className="kg-section">
      <div className="max-w-[1300px] mx-auto">
        <div className="kg-eyebrow">B2B Knowledge Hub</div>
        <h1 className="kg-h1 mt-4 text-balance">Dealer, service & <span className="text-lime-500">procurement notes.</span></h1>
        <p className="text-zinc-300 mt-6 max-w-2xl leading-relaxed">
          Practical notes for dealers, distributors, FPOs and institutional buyers covering supply planning, maintenance readiness, subsidies and procurement documentation.
        </p>

        <div className="mt-12 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {posts.map((p) => (
            <Link
              key={p.slug}
              href={`/blog/${p.slug}`}
              data-testid={`blog-card-${p.slug}`}
              className="kg-card overflow-hidden flex flex-col"
            >
              <div className="aspect-[5/3] overflow-hidden">
                <img src={p.cover_image} alt={p.title} loading="lazy" className="w-full h-full object-cover hover:scale-105 transition duration-700" />
              </div>
              <div className="p-6 flex-1 flex flex-col">
                <div className="text-xs text-zinc-400 flex items-center gap-2">
                  <Calendar className="h-3.5 w-3.5"/> {new Date(p.created_at).toLocaleDateString("en-IN", { day: "numeric", month: "long", year: "numeric" })}
                </div>
                <h3 className="font-display font-bold text-lg mt-3 leading-tight">{p.title}</h3>
                <p className="text-zinc-300 text-sm mt-3 leading-relaxed flex-1">{p.excerpt}</p>
                <div className="mt-5 inline-flex items-center gap-2 text-lime-500 text-sm font-bold">
                  Read article <ArrowRight className="h-4 w-4" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
