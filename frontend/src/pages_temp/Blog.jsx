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
  const [query, setQuery] = useState("");
  const [selectedTag, setSelectedTag] = useState("All");

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

  const tags = ["All", "Power Weeder", "Troubleshooting", "Engine", "Diesel Engine", "Brush Cutter", "Earth Auger", "Maintenance", "Subsidy", "Dealership"];

  const filteredPosts = posts.filter((p) => {
    const matchTag = selectedTag === "All" || (p.tags && p.tags.includes(selectedTag));
    const q = query.toLowerCase().trim();
    if (!q) return matchTag;
    const matchQuery =
      p.title.toLowerCase().includes(q) ||
      p.excerpt.toLowerCase().includes(q) ||
      (p.tags && p.tags.some((t) => t.toLowerCase().includes(q)));
    return matchTag && matchQuery;
  });

  return (
    <div data-testid="blog-page" className="kg-section">
      <div className="max-w-[1300px] mx-auto">
        <div className="kg-eyebrow">B2B & Farmer Knowledge Hub</div>
        <h1 className="kg-h1 mt-4 text-balance">Troubleshooting, Service & <span className="text-lime-500">Field Repair Guides.</span></h1>
        <p className="text-zinc-300 mt-6 max-w-3xl leading-relaxed">
          100 practical field guides covering mechanical troubleshooting, fuel line bleeding, carburetor tuning, blade fitment, oil grades, and dealership economics for Indian agriculture.
        </p>

        {/* Search & Tag Filter Bar */}
        <div className="mt-8 flex flex-col md:flex-row md:items-center justify-between gap-4">
          <input
            type="text"
            placeholder="Search issue, crop, or machine part (e.g. carburetor, oil grade, vibration)..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="w-full md:max-w-md px-4 py-2.5 bg-zinc-950 border border-zinc-700 rounded-md text-sm text-zinc-100 placeholder-zinc-500 focus:outline-none focus:border-lime-500"
          />
          <div className="text-xs font-semibold text-zinc-400">
            Showing {filteredPosts.length} of {posts.length} Guides
          </div>
        </div>

        <div className="mt-4 flex flex-wrap gap-2">
          {tags.map((tag) => (
            <button
              key={tag}
              onClick={() => setSelectedTag(tag)}
              className={`px-3 py-1.5 text-xs font-semibold rounded-md transition ${
                selectedTag === tag
                  ? "bg-lime-500 text-black font-bold"
                  : "bg-zinc-900 border border-zinc-700 text-zinc-300 hover:text-white"
              }`}
            >
              {tag}
            </button>
          ))}
        </div>

        <div className="mt-10 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredPosts.map((p) => (
            <Link
              key={p.slug}
              href={`/blog/${p.slug}`}
              data-testid={`blog-card-${p.slug}`}
              className="kg-card overflow-hidden flex flex-col border border-zinc-800 hover:border-lime-500/60 transition duration-300 rounded-lg bg-surface"
            >
              <div className="aspect-[5/3] overflow-hidden">
                <img src={p.cover_image} alt={p.title} loading="lazy" className="w-full h-full object-cover hover:scale-105 transition duration-700" />
              </div>
              <div className="p-6 flex-1 flex flex-col">
                <div className="flex items-center justify-between text-xs text-zinc-400">
                  <span className="flex items-center gap-1.5"><Calendar className="h-3.5 w-3.5 text-lime-400"/> {new Date(p.created_at).toLocaleDateString("en-IN", { day: "numeric", month: "short", year: "numeric" })}</span>
                  {p.tags?.[0] && <span className="text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 bg-lime-500/10 text-lime-400 border border-lime-500/30 rounded">{p.tags[0]}</span>}
                </div>
                <h3 className="font-display font-bold text-base mt-3 leading-snug text-zinc-100 line-clamp-2">{p.title}</h3>
                <p className="text-zinc-300 text-xs mt-3 leading-relaxed flex-1 line-clamp-3">{p.excerpt}</p>
                <div className="mt-5 inline-flex items-center gap-2 text-lime-400 text-xs font-bold pt-3 border-t border-zinc-800">
                  Read complete guide <ArrowRight className="h-3.5 w-3.5" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
