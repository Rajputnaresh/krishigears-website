import ReactMarkdown from "react-markdown";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { Calendar, ArrowLeft, Tag } from "lucide-react";
import { apiClient } from "@/lib/api";
import { FARMER_FIELD, FIELD_TRACTOR, PLOWING } from "@/data/catalog";

const SAMPLE = {
  "power-weeder-buying-guide-2026": {
    title: "Power Weeder Buying Guide 2026: Petrol vs Diesel vs Electric Start",
    cover_image: "https://royalkissanagro.com/wp-content/uploads/2025/10/weeder-1.webp",
    created_at: "2026-01-15T10:00:00Z",
    tags: ["Power Weeder", "Buying Guide", "B2B Procurement"],
    content: `Choosing the right power weeder is critical for Indian FPOs (Farmer Producer Organizations) and agri-dealers to ensure long-term ROI and minimal maintenance costs. In 2026, the power weeder market is dominated by three main categories: Petrol, Diesel, and Electric-Start models.

## 1. Petrol Power Weeders (7 HP to 9 HP)
Petrol models, such as the **RK-170F** and **RK-177F WOLF**, are the most popular choice for small-to-medium landholdings. 
- **Pros:** Lightweight, highly maneuverable, and extremely easy to start. They vibrate less than diesel engines.
- **Ideal for:** Inter-cultivation in horticulture, vegetable farming, and orchards.
- **Maintenance:** Requires regular spark plug cleaning and carburetor checks.

## 2. Diesel Power Weeders (5.5 HP to 10 HP)
Diesel engines (like the **RK-173F** and **RK-ICD-UP186-SH**) are heavy-duty workhorses designed for tough, sun-baked clay soils.
- **Pros:** Higher torque at lower RPMs, unmatched fuel economy, and better longevity for contract farming.
- **Ideal for:** Sugarcane, cotton, and heavy paddy cultivation.
- **Maintenance:** Injector cleaning and fuel filter replacements are critical.

## 3. Electric Start Models
Many 9 HP and 10 HP diesel models now come with a key-start (Electric Start) option. While this adds to the initial procurement cost, it dramatically reduces operator fatigue.
- **Recommendation:** If you run a Custom Hiring Center (CHC) or rental business, electric start is highly recommended to prevent starter recoil rope breakages from inexperienced operators.

### B2B Procurement Strategy
When planning inventory for the Kharif season, dealers should maintain a **70:30 ratio** of Petrol to Diesel models in Central India, whereas Southern states with heavier soils often demand a **40:60** ratio favoring Diesel.`,
  },
  "rk-170f-vs-177f-vs-173f-comparison": {
    title: "RK-170F vs RK-177F vs RK-173F: Which Power Weeder is Right for You?",
    cover_image: "https://royalkissanagro.com/wp-content/uploads/2025/10/baby-weeder.webp",
    created_at: "2026-01-10T10:00:00Z",
    tags: ["Comparison", "Power Weeder", "Specs"],
    content: `When agricultural dealers stock KrishiGears machinery, selecting the right model mix is crucial. Here is a definitive commercial and technical breakdown of our three top-selling units.

## RK-170F (7 HP Petrol)
The **RK-170F** is the undisputed entry-level champion for Indian horticulture.
* **Engine:** 212cc, 4-Stroke OHV
* **Tilling Width:** Up to 3.5 feet
* **Best For:** Vegetable farmers, narrow-row crops, and terraced farming.
* **Dealer Advantage:** Highest volume mover. Easy to service with universally available spare parts.

## RK-177F WOLF (9 HP Petrol)
The **RK-177F WOLF** is the high-performance upgrade. It combines the lightweight agility of a petrol engine with the raw tilling power of a heavy-duty chassis.
* **Engine:** 270cc, 4-Stroke OHV
* **Tilling Depth:** Up to 8 inches in hardened soil.
* **Best For:** Orchards, banana plantations, and wide-row inter-cultivation.
* **Dealer Advantage:** Premium margins with excellent customer satisfaction due to zero bog-down in wet conditions.

## RK-173F (5.5 HP Diesel)
Do not let the 5.5 HP rating fool you—the **RK-173F** outputs massive torque comparable to a 9 HP petrol engine.
* **Engine:** 247cc Air-Cooled Diesel
* **Transmission:** Direct Gear Drive (No belts)
* **Best For:** Sugarcane, heavy clay soils, and commercial custom hiring.
* **Dealer Advantage:** Appeals to institutional buyers and FPOs prioritizing diesel fuel economy.

### Summary Verdict
For dryland horticulture, push the **RK-170F**. For maximum petrol performance, stock the **RK-177F WOLF**. For institutional/heavy soil markets, the **RK-173F** diesel is mandatory.`,
  },
  "power-weeder-government-subsidy-dbt-guide": {
    title: "Power Weeder Government Subsidy: How Dealers & FPOs Can Apply via DBT",
    cover_image: "https://royalkissanagro.com/wp-content/uploads/2025/10/weeder-1.webp",
    created_at: "2026-01-05T10:00:00Z",
    tags: ["Subsidy", "Government", "DBT Portal"],
    content: `Government subsidies drive over 40% of small agricultural machinery sales in India. For dealers and FPOs (Farmer Producer Organizations), mastering the Direct Benefit Transfer (DBT) portal is non-negotiable.

## Sub-Mission on Agricultural Mechanization (SMAM)
The SMAM scheme is the primary vehicle for power weeder subsidies.
* **Individual Farmers:** Eligible for 40% to 50% subsidy on the base price.
* **SC/ST/Women/Small & Marginal Farmers:** Generally qualify for the upper 50% slab.
* **Custom Hiring Centers (CHCs):** FPOs setting up CHCs can avail up to 80% project cost subsidy (up to ₹10 Lakhs).

## State-Level DBT Portals
Every state implements SMAM through its own DBT portal:
1. **MahaDBT (Maharashtra):** Requires farmers to upload 7/12 extracts and Aadhaar linkages.
2. **UP Agriculture:** Focuses heavily on first-come, first-serve token generation.
3. **e-Rupi / MP DBT:** Rapidly adopting digital voucher systems for direct dealer redemption.

## Dealer Compliance Checklist
To process subsidy sales, KrishiGears dealers must ensure:
1. **FMTTI Test Reports:** All KrishiGears machines hold valid Government testing certificates from institutions like Budni or Hisar. You must provide these to the farmer.
2. **GST Billing:** The invoice must exactly match the farmer's Aadhaar and 7/12 name.
3. **Geo-Tagged Photos:** Most inspectors require a photo of the farmer with the machine and the engraved chassis number.

By proactively helping farmers navigate the DBT portal, dealers can increase their conversion rates by over 60%.`,
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
