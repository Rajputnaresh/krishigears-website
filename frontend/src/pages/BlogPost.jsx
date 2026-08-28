import ReactMarkdown from "react-markdown";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { Calendar, ArrowLeft, Tag } from "lucide-react";
import { apiClient } from "@/lib/api";
import { FARMER_FIELD, FIELD_TRACTOR, PLOWING } from "@/data/catalog";

const PROCUREMENT_POST = {
  title: "Power Tiller Dealer Procurement Checklist",
  cover_image: FIELD_TRACTOR,
  created_at: "2026-01-15T10:00:00Z",
  tags: ["Power Tiller", "Dealer Supply"],
  content: `Power tiller procurement for dealers, FPOs and institutions needs more than a model list. A workable supply plan should cover demand clusters, documentation, warranty process, spare-part readiness and training.

## 1. Define territory demand
Map crop clusters, soil conditions, service coverage and seasonal demand before committing inventory to a district or institutional program.

## 2. Plan model mix
Keep separate ranges for compact plots, paddy use, contractor use and heavier institutional demand so the dealer team can quote consistently.

## 3. Confirm documentation
Maintain GST, warranty, serial number, subsidy and tender documentation before dispatch so downstream support remains clean.

## 4. Prepare service support
Align spare parts, trained technicians, warranty intake and customer education before supply starts in a new region.

## 5. Coordinate dispatch
For dealer, FPO and institutional requirements, confirm dispatch schedule, packaging, service contact and escalation process before the first delivery.

Need a dealer or institutional supply plan? Share the territory, expected volume and service requirements with KrishiGears.`,
};

const SAMPLE = {
  "power-tiller-dealer-procurement-checklist": PROCUREMENT_POST,
  "power-tiller-buying-guide-india-2026": PROCUREMENT_POST,
  "power-weeder-maintenance-checklist": {
    title: "Power Weeder Maintenance: A 10-Point Checklist for Long Life",
    cover_image: PLOWING,
    created_at: "2026-01-10T10:00:00Z",
    tags: ["Power Weeder", "Maintenance"],
    content: `Brush cutters work hard in harsh conditions. Proper maintenance can extend life by 3x. Here is our 10-point routine:

1. Use fresh 2T oil-petrol mix in the right ratio (typically 1:25 or 1:50 per manual)
2. Clean the air filter every 10 hours of use
3. Replace the spark plug every 100 hours
4. Check and tighten the blade bolt before each use
5. Inspect the harness and anti-vibration mounts monthly
6. Grease the gearbox at the cutter head every 25 hours
7. Drain fuel during off-season storage
8. Store the unit in a dry, dust-free place
9. Replace the trimmer line spool when frayed
10. Service the carburetor annually by an authorized technician

Following this routine keeps your cutter running like new.`,
  },
  "agri-machinery-subsidy-states-india": {
    title: "State-Wise Agricultural Machinery Subsidies in India",
    cover_image: FARMER_FIELD,
    created_at: "2026-01-05T10:00:00Z",
    tags: ["Subsidy", "Government"],
    content: `Most Indian states offer 40-50% subsidy on small farm machinery under various central and state schemes such as SMAM, RKVY and state-specific programs.

## How to apply
- Register on your state's agriculture department portal
- Upload Aadhaar, land records, bank details
- Choose a listed implement and authorized supplier
- Wait for approval, then purchase from the dealer

## Documents typically required
- Aadhaar card
- 7/12 extract / Khasra / land record
- Bank passbook
- Caste certificate (if claiming SC/ST/OBC quota)
- Self-declaration

KrishiGears is an authorized supplier for several state schemes. Contact us with your state and product interest to check eligibility.`,
  },
};

function normalizePost(slug, post) {
  return SAMPLE[slug] ? { ...post, ...SAMPLE[slug] } : post;
}

export default function BlogPost() {
  const { slug } = useParams();
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function load() {
      if (!slug) return;
      try {
        const res = await apiClient.get(`/blog/${slug}`);
        setPost(res.data);
      } catch (err) {
        if (SAMPLE[slug]) setPost(SAMPLE[slug]);
      }
      setLoading(false);
    }
    load();
  }, [slug]);

  if (!loading && !post) {
    return (
      <div className="kg-section text-center">
        <h1 className="kg-h2">Article not found</h1>
        <Link to="/blog" className="mt-6 inline-flex items-center gap-2 text-lime-500"><ArrowLeft className="h-4 w-4"/> Back to Blog</Link>
      </div>
    );
  }
  if (loading) return <div className="kg-section text-center text-zinc-500 dark:text-zinc-500">Loading…</div>;

  return (
    <article data-testid="blog-post-page" className="kg-section">
      <div className="max-w-[800px] mx-auto">
        <Link to="/blog" className="inline-flex items-center gap-2 text-sm text-zinc-600 dark:text-zinc-400 hover:text-lime-500"><ArrowLeft className="h-4 w-4"/> All articles</Link>
        <div className="mt-8 text-xs text-zinc-500 dark:text-zinc-500 flex items-center gap-2">
          <Calendar className="h-3.5 w-3.5"/> {new Date(post.created_at).toLocaleDateString("en-IN", { day: "numeric", month: "long", year: "numeric" })}
        </div>
        <h1 className="kg-h1 mt-4 text-balance">{post.title}</h1>
        {post.tags?.length > 0 && (
          <div className="mt-5 flex flex-wrap gap-2">
            {post.tags.map((t) => (
              <span key={t} className="text-xs px-3 py-1 border border-zinc-200 dark:border-zinc-800 text-zinc-600 dark:text-zinc-400 inline-flex items-center gap-1"><Tag className="h-3 w-3"/>{t}</span>
            ))}
          </div>
        )}
        <div className="mt-10 aspect-[16/9] overflow-hidden border border-zinc-200 dark:border-zinc-800">
          <img src={post.cover_image} alt={post.title} className="w-full h-full object-cover" />
        </div>
        <div className="mt-10 prose prose-invert max-w-none prose-lime prose-img:rounded-lg">
          <ReactMarkdown>{post.content}</ReactMarkdown>
        </div>
      </div>
    </article>
  );
}
