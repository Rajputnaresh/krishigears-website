"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import { useParams } from "next/navigation";
import { ChevronRight } from "lucide-react";
import { CATEGORIES, COMPANY, PRODUCTS, farmingtoolsCategoryUrl } from "@/data/catalog";
import EnquiryDialog from "@/components/EnquiryDialog";
import ProductCard from "@/components/ProductCard";
import WhatsAppIcon from "@/components/WhatsAppIcon";
import { apiClient } from "@/lib/api";
import { trackWhatsAppClick } from "@/lib/analytics";

export default function CategoryPage() {
  const { slug } = useParams();
  const category = CATEGORIES.find((c) => c.slug === slug);
  const localMatches = category ? PRODUCTS.filter((p) => p.category === slug) : [];
  const [items, setItems] = useState(localMatches);

  useEffect(() => {
    if (!category) return;
    const matches = PRODUCTS.filter((p) => p.category === slug);
    setItems(matches);
  }, [slug, category]);

  if (!category) {
    return (
      <div className="kg-section text-center">
        <h1 className="kg-h2">Category not found</h1>
        <Link href="/products" className="mt-6 inline-flex items-center gap-2 text-lime-500"><ChevronRight className="h-4 w-4"/> All products</Link>
      </div>
    );
  }

  const Icon = category.icon;
  const waMsg = encodeURIComponent(`Hello KrishiGears, I am interested in ${category.name} for bulk/dealer/institutional supply. Please share details.`);
  const supplySignals = ["Dealer supply", "Bulk procurement", "Institutional orders", "Service support"];

  return (
    <div data-testid="category-page" className="kg-section">
      <div className="max-w-[1400px] mx-auto">
        <div className="flex items-center gap-2 text-xs text-zinc-400 mb-8">
          <Link href="/" className="hover:text-lime-500">Home</Link>
          <ChevronRight className="h-3 w-3" />
          <Link href="/products" className="hover:text-lime-500">Products</Link>
          <ChevronRight className="h-3 w-3" />
          <span className="text-lime-500">{category.name}</span>
        </div>

        <div className="grid lg:grid-cols-12 gap-10 items-center mb-12">
          <div className="lg:col-span-7">
            <div className="inline-flex items-center gap-3 mb-4">
              <div className="h-12 w-12 grid place-items-center bg-lime-500/10 border border-lime-500/40 text-lime-500">
                <Icon className="h-6 w-6" />
              </div>
              <div className="kg-eyebrow">Supply Category</div>
            </div>
            <h1 className="kg-h1">{category.name} Supply Category</h1>
            <p className="text-zinc-300 mt-5 leading-relaxed max-w-xl">{category.short}</p>
            <div className="mt-5 flex flex-wrap gap-2">
              {supplySignals.map((signal) => (
                <span key={signal} className="text-xs font-bold tracking-wider uppercase px-3 py-1.5 border border-zinc-800 text-zinc-200 bg-black/30">
                  {signal}
                </span>
              ))}
            </div>
            <div className="mt-6 flex flex-wrap gap-3">
              <EnquiryDialog product={category.name} trigger={
                <button data-testid="cat-enquiry-btn" className="bg-lime-500 hover:bg-lime-400 text-black dark:text-black font-bold px-6 py-3.5 rounded-md">Bulk / Dealer Inquiry</button>
              } />
              <Link href="/become-a-dealer" data-testid="cat-dealer-btn" className="border border-zinc-700 hover:border-lime-500 hover:text-lime-500 px-6 py-3.5 font-bold rounded-md">
                Become Dealer
              </Link>
              <Link href="/bulk-order" data-testid="cat-institutional-btn" className="border border-zinc-700 hover:border-lime-500 hover:text-lime-500 px-6 py-3.5 font-bold rounded-md">
                Institutional Supply
              </Link>
              <a
                href={farmingtoolsCategoryUrl(category.slug)}
                target="_blank"
                rel="noreferrer"
                data-testid="cat-buy-online-btn"
                className="border border-zinc-700 hover:border-lime-500 hover:text-lime-500 px-6 py-3.5 font-bold rounded-md"
              >
                Buy Online at FarmingTools
              </a>
              <a
                href={`https://wa.me/${COMPANY.whatsapp}?text=${waMsg}&utm_source=website&utm_medium=whatsapp&utm_campaign=kg_catalog`}
                target="_blank"
                rel="noreferrer"
                aria-label={`WhatsApp Enquiry for ${category.name}`}
                onClick={() => trackWhatsAppClick("category_page", slug)}
                data-testid="cat-whatsapp-btn"
                className="border border-zinc-700 hover:border-lime-500 hover:text-lime-500 px-6 py-3.5 font-bold rounded-md inline-flex items-center gap-2"
              >
                <WhatsAppIcon className="h-4 w-4"/> WhatsApp Enquiry
              </a>
            </div>
          </div>
          <div className="lg:col-span-5">
            <div className="aspect-[4/3] overflow-hidden border border-zinc-800 bg-white">
              <img src={category.image} alt={category.name} loading="lazy" className="w-full h-full object-contain p-4" />
            </div>
          </div>
        </div>

        <ModelsSection items={items} category={category} />

        {/* B2B Wholesale Commercial Guide & FAQ Section (>300 words SEO Content) */}
        <div className="mt-16 pt-12 border-t border-zinc-800 space-y-12">
          <div className="grid lg:grid-cols-12 gap-8 items-start">
            <div className="lg:col-span-7 space-y-4">
              <span className="text-xs font-bold text-lime-400 uppercase tracking-widest">
                Procurement & Dealer Guide
              </span>
              <h2 className="text-2xl md:text-3xl font-display font-black text-white">
                {category.name} Wholesale Supply & Dealership in India
              </h2>
              <p className="text-zinc-300 leading-relaxed text-sm">
                KrishiGears supplies commercial-grade <strong className="text-white">{category.name}</strong> engineered specifically for intensive Indian agricultural soils and multi-crop farming operations. Every machine and component in our catalog adheres to strict FMTTI / SRFMTTI testing guidelines, guaranteeing true rated brake horsepower, reinforced transmission gearboxes, and heavy-gauge forged steel tines.
              </p>
              <p className="text-zinc-300 leading-relaxed text-sm">
                Whether you are a machinery dealer looking for exclusive territorial rights, a regional distributor outfitting local service centers, or an FPO executing DBT / SMAM subsidy schemes, KrishiGears delivers transparent factory-gate pricing, zero dead-stock consignment policies, and guaranteed 24 to 48-hour parts dispatch from our central Jaipur logistics facility.
              </p>
            </div>
            <div className="lg:col-span-5 bg-zinc-900/60 border border-zinc-800 rounded-lg p-6 space-y-4">
              <h3 className="font-display font-bold text-white text-base flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-lime-400" />
                Wholesale Dealer Advantages
              </h3>
              <ul className="space-y-2.5 text-xs text-zinc-300">
                <li className="flex items-start gap-2">
                  <span className="text-lime-400 font-bold">✓</span>
                  <span><strong>15% – 22% Protected Margin:</strong> Standardized wholesale pricing protects your local territory from undercutting.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-lime-400 font-bold">✓</span>
                  <span><strong>Subsidy Invoicing:</strong> Full GST invoices with matching engine/chassis serials for state DBT & SMAM portals.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-lime-400 font-bold">✓</span>
                  <span><strong>100% Genuine OEM Spares:</strong> Direct availability of carburetors, recoil starters, and tiller gears.</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Category FAQs */}
          <div className="bg-zinc-950 border border-zinc-800 rounded-xl p-6 md:p-8 space-y-6">
            <div className="space-y-1">
              <h3 className="text-xl md:text-2xl font-display font-bold text-white">
                Frequently Asked Questions — {category.name} Price & Supply
              </h3>
              <p className="text-xs text-zinc-400">
                Common dealer and institutional queries regarding procurement, pricing, and subsidy verification.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="border border-zinc-850 bg-zinc-900/30 rounded-lg p-5 space-y-2">
                <h4 className="font-bold text-sm text-white flex items-center gap-2">
                  <span className="text-lime-400">Q:</span>
                  What is the wholesale power weeder price in India?
                </h4>
                <p className="text-xs text-zinc-300 leading-relaxed">
                  Wholesale dealer prices for commercial power weeders range between ₹18,000 to ₹38,000 depending on horsepower (7HP petrol vs 9HP/12HP diesel), gearbox configuration (gear-driven vs belt-driven), and included attachments (dryland vs wetland puddle tines). Contact our sales desk for bulk container and multi-unit tiered pricing.
                </p>
              </div>

              <div className="border border-zinc-850 bg-zinc-900/30 rounded-lg p-5 space-y-2">
                <h4 className="font-bold text-sm text-white flex items-center gap-2">
                  <span className="text-lime-400">Q:</span>
                  Are KrishiGears power weeders eligible for DBT agriculture subsidy?
                </h4>
                <p className="text-xs text-zinc-300 leading-relaxed">
                  Yes. KrishiGears equipment meets FMTTI / SRFMTTI test compliance standards. Authorized dealers receive complete documentation — including commercial test report numbers, stamped engine certificates, and HSN-coded GST tax invoices — allowing registered farmers to claim 40% to 50% DBT / SMAM state subsidies.
                </p>
              </div>

              <div className="border border-zinc-850 bg-zinc-900/30 rounded-lg p-5 space-y-2">
                <h4 className="font-bold text-sm text-white flex items-center gap-2">
                  <span className="text-lime-400">Q:</span>
                  What is the minimum order quantity (MOQ) for dealers?
                </h4>
                <p className="text-xs text-zinc-300 leading-relaxed">
                  Our introductory dealer MOQ starts from as few as 2 units per order. This allows rural machinery dealers and agri-retailers to evaluate local demand without locking up working capital in heavy inventory.
                </p>
              </div>

              <div className="border border-zinc-850 bg-zinc-900/30 rounded-lg p-5 space-y-2">
                <h4 className="font-bold text-sm text-white flex items-center gap-2">
                  <span className="text-lime-400">Q:</span>
                  How fast can spare parts be delivered to remote districts?
                </h4>
                <p className="text-xs text-zinc-300 leading-relaxed">
                  All critical wear-and-tear parts (rotary blades, carburetors, clutch cables, worm gears, and piston rings) are stocked at our Jaipur central warehouse and dispatched within 24 to 48 hours via express logistics across PAN India.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function ModelsSection({ items, category }) {
  if (items === null) {
    return <div className="text-center text-zinc-400 py-12">Loading models…</div>;
  }
  if (items.length === 0) {
    return (
      <div className="border border-zinc-800 bg-surface-dark p-10 text-center">
        <p className="text-zinc-200">Multiple supply models are available in this category. Request the B2B catalogue and our team will share dealer, distributor, bulk and institutional supply details.</p>
        <div className="mt-6">
          <EnquiryDialog product={category.name} trigger={
            <button data-testid="cat-empty-enquiry-btn" className="bg-lime-500 hover:bg-lime-400 text-black dark:text-black font-bold px-7 py-4 rounded-md">Request Catalogue</button>
          } />
        </div>
      </div>
    );
  }
  return (
    <>
      <h2 className="kg-h2 mb-6">Supply <span className="text-lime-500">Models ({items.length})</span></h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {items.map((p) => (
          <ProductCard key={p.slug} product={p} />
        ))}
      </div>
    </>
  );
}
