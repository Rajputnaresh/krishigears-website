import { Link, useParams, Navigate } from "react-router-dom";
import { Check, ArrowRight, MapPin } from "lucide-react";
import { CATEGORIES, SEO_PAGES, COMPANY, HERO_BG, INDIA_MAP } from "@/data/catalog";
import EnquiryDialog from "@/components/EnquiryDialog";

export default function SeoLanding() {
  const { slug } = useParams();
  const page = SEO_PAGES.find((p) => p.slug === slug);
  if (!page) return <Navigate to="/" replace />;
  const category = page.category ? CATEGORIES.find((c) => c.slug === page.category) : null;

  return (
    <div data-testid="seo-landing-page">
      {/* Hero */}
      <section className="relative kg-section overflow-hidden">
        <div className="absolute inset-0">
          <img src={category?.image || HERO_BG} alt="" className="w-full h-full object-cover opacity-30" />
          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/70 to-transparent"></div>
        </div>
        <div className="max-w-[1200px] mx-auto relative">
          <div className="kg-eyebrow">{COMPANY.name} · {page.title}</div>
          <h1 className="kg-h1 mt-4 text-balance max-w-3xl">{page.title} — <span className="text-lime-500">trusted by farmers nationwide.</span></h1>
          <p className="text-zinc-300 mt-6 max-w-2xl leading-relaxed text-lg">
            KrishiGears is a leading {page.title.toLowerCase()} with PAN India dispatch, genuine warranty support and competitive pricing for dealers, FPOs, contractors and institutional buyers.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <EnquiryDialog product={category?.name || page.title} trigger={
              <button data-testid="seo-enquiry-btn" className="bg-lime-500 hover:bg-lime-400 text-black font-bold px-7 py-4 rounded-md">Request Price</button>
            } />
            <a href={`https://wa.me/${COMPANY.whatsapp}`} target="_blank" rel="noreferrer" data-testid="seo-whatsapp-btn" className="border border-zinc-700 hover:border-lime-500 hover:text-lime-500 px-7 py-4 font-bold rounded-md">WhatsApp Us</a>
          </div>
        </div>
      </section>

      {/* Why KrishiGears */}
      <section className="kg-section bg-[#080808] border-y border-zinc-900">
        <div className="max-w-[1200px] mx-auto">
          <div className="kg-eyebrow">Why Choose KrishiGears</div>
          <h2 className="kg-h2 mt-3 max-w-3xl">India's preferred {page.title.replace(" in India", "").toLowerCase()} <span className="text-lime-500">— and counting.</span></h2>
          <div className="mt-10 grid md:grid-cols-2 gap-4">
            {[
              "Premium KrishiGears branded products",
              "GST-registered supplier with proper invoicing",
              "PAN India delivery to 1000+ pin codes",
              "Genuine warranty support and service network",
              "Competitive pricing for dealers, FPOs, contractors",
              "Government tender & subsidy support",
              "Free product training and after-sales support",
              "Genuine spare parts available year-round",
            ].map((b, i) => (
              <div key={i} className="flex items-start gap-3 text-zinc-300">
                <Check className="h-5 w-5 text-lime-500 mt-0.5 shrink-0" />{b}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Coverage */}
      <section className="kg-section relative overflow-hidden">
        <div className="absolute inset-0 opacity-20" style={{ backgroundImage: `url(${INDIA_MAP})`, backgroundSize: "cover" }}/>
        <div className="max-w-[1200px] mx-auto relative">
          <div className="kg-eyebrow">PAN India Coverage</div>
          <h2 className="kg-h2 mt-3">We supply <span className="text-lime-500">across India.</span></h2>
          <div className="mt-8 flex flex-wrap gap-2">
            {["Maharashtra","Karnataka","Tamil Nadu","Andhra Pradesh","Telangana","Kerala","Gujarat","Madhya Pradesh","Uttar Pradesh","Punjab","Haryana","Rajasthan","West Bengal","Bihar","Odisha","Assam","Chhattisgarh"].map((s) => (
              <span key={s} className="text-sm px-4 py-2 border border-zinc-800 text-zinc-300 hover:border-lime-500 hover:text-lime-500 transition cursor-default inline-flex items-center gap-1.5">
                <MapPin className="h-3 w-3"/>{s}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="kg-section bg-[#080808] border-y border-zinc-900">
        <div className="max-w-[1100px] mx-auto text-center">
          <h2 className="kg-h2 max-w-2xl mx-auto text-balance">Get the best price on <span className="text-lime-500">{(category?.name || "agricultural machinery").toLowerCase()}</span> today.</h2>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            {category && (
              <Link to={`/products/category/${category.slug}`} data-testid="seo-view-products" className="bg-lime-500 hover:bg-lime-400 text-black font-bold px-7 py-4 rounded-md inline-flex items-center gap-2">View Products <ArrowRight className="h-4 w-4"/></Link>
            )}
            <Link to="/bulk-order" data-testid="seo-bulk-link" className="border border-zinc-700 hover:border-lime-500 hover:text-lime-500 px-7 py-4 font-bold rounded-md">Bulk Order</Link>
          </div>
        </div>
      </section>
    </div>
  );
}
