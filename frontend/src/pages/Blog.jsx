import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Calendar, ArrowRight } from "lucide-react";
import { apiClient } from "@/lib/api";
import { FARMER_FIELD, FIELD_TRACTOR, PLOWING } from "@/data/catalog";

// Static fallback sample posts (used only when DB is empty)
const SAMPLE_POSTS = [
  {
    slug: "power-tiller-buying-guide-india-2026",
    title: "Power Tiller Buying Guide: Choosing the Right Model for Indian Farms (2026)",
    excerpt: "Diesel vs petrol, 9HP vs 15HP, tilling width and gear options — a complete buying guide for Indian farmers.",
    cover_image: FIELD_TRACTOR,
    created_at: "2026-01-15T10:00:00Z",
    tags: ["Power Tiller", "Buying Guide"],
  },
  {
    slug: "brush-cutter-maintenance-checklist",
    title: "Brush Cutter Maintenance: A 10-Point Checklist for Long Life",
    excerpt: "Keep your brush cutter running smoothly season after season with this 10-point maintenance routine.",
    cover_image: PLOWING,
    created_at: "2026-01-10T10:00:00Z",
    tags: ["Brush Cutter", "Maintenance"],
  },
  {
    slug: "agri-machinery-subsidy-states-india",
    title: "State-Wise Agricultural Machinery Subsidies in India",
    excerpt: "A quick reference for state-level subsidies on power tillers, weeders and sprayers.",
    cover_image: FARMER_FIELD,
    created_at: "2026-01-05T10:00:00Z",
    tags: ["Subsidy", "Government"],
  },
];

export default function Blog() {
  const [posts, setPosts] = useState(null);

  useEffect(() => {
    apiClient.get("/blog")
      .then((res) => {
        const list = Array.isArray(res.data) ? res.data : [];
        setPosts(list.length ? list : SAMPLE_POSTS);
      })
      .catch(() => setPosts(SAMPLE_POSTS));
  }, []);

  if (posts === null) {
    return <div className="kg-section text-zinc-500 text-center">Loading articles…</div>;
  }

  return (
    <div data-testid="blog-page" className="kg-section">
      <div className="max-w-[1300px] mx-auto">
        <div className="kg-eyebrow">From the Field</div>
        <h1 className="kg-h1 mt-4 text-balance">Stories, guides & <span className="text-lime-500">expert advice.</span></h1>
        <p className="text-zinc-400 mt-6 max-w-2xl leading-relaxed">
          Practical articles for farmers, dealers and institutional buyers — covering machinery selection, maintenance, subsidies and farm productivity.
        </p>

        <div className="mt-12 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {posts.map((p) => (
            <Link
              key={p.slug}
              to={`/blog/${p.slug}`}
              data-testid={`blog-card-${p.slug}`}
              className="kg-card overflow-hidden flex flex-col"
            >
              <div className="aspect-[5/3] overflow-hidden">
                <img src={p.cover_image} alt={p.title} className="w-full h-full object-cover hover:scale-105 transition duration-700" />
              </div>
              <div className="p-6 flex-1 flex flex-col">
                <div className="text-xs text-zinc-500 flex items-center gap-2">
                  <Calendar className="h-3.5 w-3.5"/> {new Date(p.created_at).toLocaleDateString("en-IN", { day: "numeric", month: "long", year: "numeric" })}
                </div>
                <h3 className="font-display font-bold text-lg mt-3 leading-tight">{p.title}</h3>
                <p className="text-zinc-400 text-sm mt-3 leading-relaxed flex-1">{p.excerpt}</p>
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
