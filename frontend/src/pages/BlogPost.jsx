import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { Calendar, ArrowLeft, Tag } from "lucide-react";
import { apiClient } from "@/lib/api";
import { FARMER_FIELD, FIELD_TRACTOR, PLOWING } from "@/data/catalog";

const SAMPLE = {
  "power-tiller-buying-guide-india-2026": {
    title: "Power Tiller Buying Guide: Choosing the Right Model for Indian Farms (2026)",
    cover_image: FIELD_TRACTOR,
    created_at: "2026-01-15T10:00:00Z",
    tags: ["Power Tiller", "Buying Guide"],
    content: `Choosing the right power tiller can transform farm productivity — but with engine options from 9HP to 15HP, diesel vs petrol fuel choices, and tilling widths varying from 600mm to 1200mm, the decision is rarely straightforward.

## 1. Match HP to your farm size
For farms under 2 acres, a 9HP petrol tiller is usually sufficient. For 2–5 acres, opt for a 12HP. For larger farms or paddy-wheat double cropping, go for a 15HP diesel tiller for fuel efficiency and long-run durability.

## 2. Diesel vs petrol
Diesel engines have higher torque, better fuel efficiency at full load and longer service life — ideal for heavy continuous use. Petrol engines start easier in cold weather and have lower initial cost.

## 3. Tilling width
A wider tilling width covers more ground per pass but requires more HP. Match width to HP — a 1200mm rotor with a 9HP engine will struggle in hard soil.

## 4. Transmission
6-forward + 2-reverse gear options give you flexibility across paddy, wheat and dry-soil tilling. Avoid 3-speed tillers for serious commercial use.

## 5. After-sales matters more than price
A great machine with poor spare parts availability becomes a paperweight. Always buy from authorized dealers who stock genuine spares and offer warranty repair.

Need help choosing? WhatsApp us your farm size and crops — we'll recommend the right model.`,
  },
  "brush-cutter-maintenance-checklist": {
    title: "Brush Cutter Maintenance: A 10-Point Checklist for Long Life",
    cover_image: PLOWING,
    created_at: "2026-01-10T10:00:00Z",
    tags: ["Brush Cutter", "Maintenance"],
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

export default function BlogPost() {
  const { slug } = useParams();
  const [post, setPost] = useState(null);
  const [notFound, setNotFound] = useState(false);

  useEffect(() => {
    apiClient.get(`/blog/${slug}`)
      .then((res) => {
        if (res.data && typeof res.data === "object" && !Array.isArray(res.data)) {
          setPost(res.data);
        } else if (SAMPLE[slug]) {
          setPost(SAMPLE[slug]);
        } else {
          setNotFound(true);
        }
      })
      .catch(() => {
        if (SAMPLE[slug]) setPost(SAMPLE[slug]);
        else setNotFound(true);
      });
  }, [slug]);

  if (notFound) {
    return (
      <div className="kg-section text-center">
        <h1 className="kg-h2">Article not found</h1>
        <Link to="/blog" className="mt-6 inline-flex items-center gap-2 text-lime-500"><ArrowLeft className="h-4 w-4"/> Back to Blog</Link>
      </div>
    );
  }
  if (!post) return <div className="kg-section text-center text-zinc-500">Loading…</div>;

  return (
    <article data-testid="blog-post-page" className="kg-section">
      <div className="max-w-[800px] mx-auto">
        <Link to="/blog" className="inline-flex items-center gap-2 text-sm text-zinc-400 hover:text-lime-500"><ArrowLeft className="h-4 w-4"/> All articles</Link>
        <div className="mt-8 text-xs text-zinc-500 flex items-center gap-2">
          <Calendar className="h-3.5 w-3.5"/> {new Date(post.created_at).toLocaleDateString("en-IN", { day: "numeric", month: "long", year: "numeric" })}
        </div>
        <h1 className="kg-h1 mt-4 text-balance">{post.title}</h1>
        {post.tags?.length > 0 && (
          <div className="mt-5 flex flex-wrap gap-2">
            {post.tags.map((t) => (
              <span key={t} className="text-xs px-3 py-1 border border-zinc-800 text-zinc-400 inline-flex items-center gap-1"><Tag className="h-3 w-3"/>{t}</span>
            ))}
          </div>
        )}
        <div className="mt-10 aspect-[16/9] overflow-hidden border border-zinc-800">
          <img src={post.cover_image} alt={post.title} className="w-full h-full object-cover" />
        </div>
        <div className="mt-10 prose prose-invert max-w-none">
          {post.content.split("\n").map((line, i) => {
            const key = `${i}-${line.slice(0, 20)}`;
            if (line.startsWith("## ")) return <h2 key={key} className="font-display font-bold text-2xl mt-10 mb-3">{line.slice(3)}</h2>;
            if (line.match(/^\d+\./)) return <p key={key} className="text-zinc-300 leading-relaxed">{line}</p>;
            if (!line.trim()) return null;
            return <p key={key} className="text-zinc-300 leading-relaxed mt-4">{line}</p>;
          })}
        </div>
      </div>
    </article>
  );
}
