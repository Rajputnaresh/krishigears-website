import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Calendar, ArrowRight } from "lucide-react";
import { apiClient } from "@/lib/api";
import { FARMER_FIELD, FIELD_TRACTOR, PLOWING } from "@/data/catalog";

// Static fallback sample posts (used only when DB is empty)
const SAMPLE_POSTS = [
  {
    slug: "power-tiller-dealer-procurement-checklist",
    title: "Power Tiller Dealer Procurement Checklist",
    excerpt: "Dealer, FPO and institutional checklist for range planning, documentation, warranty support and spare-part readiness.",
    cover_image: FIELD_TRACTOR,
    created_at: "2026-01-15T10:00:00Z",
    tags: ["Power Tiller", "Dealer Supply"],
  },
  {
    slug: "power-weeder-maintenance-checklist",
    title: "Power Weeder Maintenance: A 10-Point Checklist for Long Life",
    excerpt: "Keep your power weeder running smoothly season after season with this 10-point maintenance routine.",
    cover_image: PLOWING,
    created_at: "2026-01-10T10:00:00Z",
    tags: ["Power Weeder", "Maintenance"],
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

const POST_OVERRIDES = {
  "power-tiller-buying-guide-india-2026": {
    slug: "power-tiller-dealer-procurement-checklist",
    title: "Power Tiller Dealer Procurement Checklist",
    excerpt: "Dealer, FPO and institutional checklist for range planning, documentation, warranty support and spare-part readiness.",
    tags: ["Power Tiller", "Dealer Supply"],
  },
};

function normalizePost(post) {
  return { ...post, ...(POST_OVERRIDES[post.slug] || {}) };
}

export default function Blog() {
  const [posts, setPosts] = useState(null);

  useEffect(() => {
    apiClient.get("/blog")
      .then((res) => {
        const list = Array.isArray(res.data) ? res.data : [];
        setPosts((list.length ? list : SAMPLE_POSTS).map(normalizePost));
      })
      .catch(() => setPosts(SAMPLE_POSTS.map(normalizePost)));
  }, []);

  if (posts === null) {
    return <div className="kg-section text-zinc-500 text-center">Loading articles…</div>;
  }

  return (
    <div data-testid="blog-page" className="kg-section">
      <div className="max-w-[1300px] mx-auto">
        <div className="kg-eyebrow">B2B Knowledge Hub</div>
        <h1 className="kg-h1 mt-4 text-balance">Dealer, service & <span className="text-lime-500">procurement notes.</span></h1>
        <p className="text-zinc-400 mt-6 max-w-2xl leading-relaxed">
          Practical notes for dealers, distributors, FPOs and institutional buyers covering supply planning, maintenance readiness, subsidies and procurement documentation.
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
