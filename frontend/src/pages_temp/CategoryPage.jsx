import { useEffect, useState } from "react";
import Link from "next/link";
import { useParams } from "next/navigation";
import { ChevronRight } from "lucide-react";
import { CATEGORIES, COMPANY, farmingtoolsCategoryUrl } from "@/data/catalog";
import EnquiryDialog from "@/components/EnquiryDialog";
import ProductCard from "@/components/ProductCard";
import WhatsAppIcon from "@/components/WhatsAppIcon";
import { apiClient } from "@/lib/api";
import { trackWhatsAppClick } from "@/lib/analytics";

export default function CategoryPage() {
  const { slug } = useParams();
  const [items, setItems] = useState(null);
  const category = CATEGORIES.find((c) => c.slug === slug);

  useEffect(() => {
    if (!category) return;
    setItems(null);
    apiClient.get(`/products?category=${slug}`)
      .then((res) => setItems(Array.isArray(res.data) ? res.data : []))
      .catch(() => setItems([]));
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
        <div className="flex items-center gap-2 text-xs text-zinc-500 dark:text-zinc-500 mb-8">
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
            <p className="text-zinc-600 dark:text-zinc-400 mt-5 leading-relaxed max-w-xl">{category.short}</p>
            <div className="mt-5 flex flex-wrap gap-2">
              {supplySignals.map((signal) => (
                <span key={signal} className="text-xs font-bold tracking-wider uppercase px-3 py-1.5 border border-zinc-200 dark:border-zinc-800 text-zinc-700 dark:text-zinc-300 bg-black/30">
                  {signal}
                </span>
              ))}
            </div>
            <div className="mt-6 flex flex-wrap gap-3">
              <EnquiryDialog product={category.name} trigger={
                <button data-testid="cat-enquiry-btn" className="bg-lime-500 hover:bg-lime-400 text-black dark:text-black font-bold px-6 py-3.5 rounded-md">Bulk / Dealer Inquiry</button>
              } />
              <Link href="/become-a-dealer" data-testid="cat-dealer-btn" className="border border-zinc-300 dark:border-zinc-700 hover:border-lime-500 hover:text-lime-500 px-6 py-3.5 font-bold rounded-md">
                Become Dealer
              </Link>
              <Link href="/bulk-order" data-testid="cat-institutional-btn" className="border border-zinc-300 dark:border-zinc-700 hover:border-lime-500 hover:text-lime-500 px-6 py-3.5 font-bold rounded-md">
                Institutional Supply
              </Link>
              <a
                href={farmingtoolsCategoryUrl(category.slug)}
                target="_blank"
                rel="noreferrer"
                data-testid="cat-buy-online-btn"
                className="border border-zinc-300 dark:border-zinc-700 hover:border-lime-500 hover:text-lime-500 px-6 py-3.5 font-bold rounded-md"
              >
                Buy Online at FarmingTools
              </a>
              <a
                href={`https://wa.me/${COMPANY.whatsapp}?text=${waMsg}`}
                target="_blank"
                rel="noreferrer"
                onClick={() => trackWhatsAppClick("category_page", slug)}
                data-testid="cat-whatsapp-btn"
                className="border border-zinc-300 dark:border-zinc-700 hover:border-lime-500 hover:text-lime-500 px-6 py-3.5 font-bold rounded-md inline-flex items-center gap-2"
              >
                <WhatsAppIcon className="h-4 w-4"/> WhatsApp Enquiry
              </a>
            </div>
          </div>
          <div className="lg:col-span-5">
            <div className="aspect-[4/3] overflow-hidden border border-zinc-200 dark:border-zinc-800 bg-white">
              <img src={category.image} alt={category.name} loading="lazy" className="w-full h-full object-contain p-4" />
            </div>
          </div>
        </div>

        <ModelsSection items={items} category={category} />
      </div>
    </div>
  );
}

function ModelsSection({ items, category }) {
  if (items === null) {
    return <div className="text-center text-zinc-500 dark:text-zinc-500 py-12">Loading models…</div>;
  }
  if (items.length === 0) {
    return (
      <div className="border border-zinc-200 dark:border-zinc-800 bg-surface-dark p-10 text-center">
        <p className="text-zinc-700 dark:text-zinc-300">Multiple supply models are available in this category. Request the B2B catalogue and our team will share dealer, distributor, bulk and institutional supply details.</p>
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
