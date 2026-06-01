import { Link, useParams, Navigate } from "react-router-dom";
import { ArrowRight, ChevronRight } from "lucide-react";
import { CATEGORIES, PRODUCTS, COMPANY } from "@/data/catalog";
import EnquiryDialog from "@/components/EnquiryDialog";
import ProductCard from "@/components/ProductCard";

export default function CategoryPage() {
  const { slug } = useParams();
  const category = CATEGORIES.find((c) => c.slug === slug);
  if (!category) return <Navigate to="/products" replace />;

  const items = PRODUCTS.filter((p) => p.category === slug);
  const Icon = category.icon;
  const waMsg = encodeURIComponent(`Hello KrishiGears, I am interested in ${category.name}. Please share details.`);

  return (
    <div data-testid="category-page" className="kg-section">
      <div className="max-w-[1400px] mx-auto">
        {/* Breadcrumbs */}
        <div className="flex items-center gap-2 text-xs text-zinc-500 mb-8">
          <Link to="/" className="hover:text-lime-500">Home</Link>
          <ChevronRight className="h-3 w-3" />
          <Link to="/products" className="hover:text-lime-500">Products</Link>
          <ChevronRight className="h-3 w-3" />
          <span className="text-lime-500">{category.name}</span>
        </div>

        {/* Header */}
        <div className="grid lg:grid-cols-12 gap-10 items-center mb-12">
          <div className="lg:col-span-7">
            <div className="inline-flex items-center gap-3 mb-4">
              <div className="h-12 w-12 grid place-items-center bg-lime-500/10 border border-lime-500/40 text-lime-500">
                <Icon className="h-6 w-6" />
              </div>
              <div className="kg-eyebrow">Category</div>
            </div>
            <h1 className="kg-h1">{category.name}</h1>
            <p className="text-zinc-400 mt-5 leading-relaxed max-w-xl">{category.short}</p>
            <div className="mt-6 flex flex-wrap gap-3">
              <EnquiryDialog product={category.name} trigger={
                <button data-testid="cat-enquiry-btn" className="bg-lime-500 hover:bg-lime-400 text-black font-bold px-6 py-3.5 rounded-md">Request Price</button>
              } />
              <a
                href={`https://wa.me/${COMPANY.whatsapp}?text=${waMsg}`}
                target="_blank"
                rel="noreferrer"
                data-testid="cat-whatsapp-btn"
                className="border border-zinc-700 hover:border-lime-500 hover:text-lime-500 px-6 py-3.5 font-bold rounded-md"
              >
                WhatsApp Enquiry
              </a>
            </div>
          </div>
          <div className="lg:col-span-5">
            <div className="aspect-[4/3] overflow-hidden border border-zinc-800">
              <img src={category.image} alt={category.name} className="w-full h-full object-cover" />
            </div>
          </div>
        </div>

        {/* Products */}
        {items.length > 0 ? (
          <>
            <h2 className="kg-h2 mb-6">Available <span className="text-lime-500">Models</span></h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
              {items.map((p) => (
                <ProductCard key={p.slug} product={p} />
              ))}
            </div>
          </>
        ) : (
          <div className="border border-zinc-800 bg-[#0F0F0F] p-10 text-center">
            <p className="text-zinc-300">Multiple models available in this category. Please request a quote and we'll share the full catalogue with prices.</p>
            <div className="mt-6">
              <EnquiryDialog product={category.name} trigger={
                <button data-testid="cat-empty-enquiry-btn" className="bg-lime-500 hover:bg-lime-400 text-black font-bold px-7 py-4 rounded-md">Request Catalogue</button>
              } />
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
