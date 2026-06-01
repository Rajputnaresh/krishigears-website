import { useState } from "react";
import { Link, useParams, Navigate } from "react-router-dom";
import { Check, ChevronRight, MessageCircle, ShieldCheck } from "lucide-react";
import { CATEGORIES, PRODUCTS, COMPANY } from "@/data/catalog";
import EnquiryDialog from "@/components/EnquiryDialog";

export default function ProductDetail() {
  const { slug } = useParams();
  const [active, setActive] = useState(0);
  const product = PRODUCTS.find((p) => p.slug === slug);
  if (!product) return <Navigate to="/products" replace />;

  const category = CATEGORIES.find((c) => c.slug === product.category);
  const waMsg = encodeURIComponent(`Hello KrishiGears, I'm interested in ${product.name}. Please share price & availability.`);

  return (
    <div data-testid="product-detail-page" className="kg-section">
      <div className="max-w-[1400px] mx-auto">
        {/* Breadcrumbs */}
        <div className="flex items-center gap-2 text-xs text-zinc-500 mb-8 flex-wrap">
          <Link to="/" className="hover:text-lime-500">Home</Link>
          <ChevronRight className="h-3 w-3" />
          <Link to="/products" className="hover:text-lime-500">Products</Link>
          <ChevronRight className="h-3 w-3" />
          <Link to={`/products/category/${category.slug}`} className="hover:text-lime-500">{category.name}</Link>
          <ChevronRight className="h-3 w-3" />
          <span className="text-lime-500">{product.name}</span>
        </div>

        {/* Gallery + Info */}
        <div className="grid lg:grid-cols-12 gap-10">
          <div className="lg:col-span-6">
            <div className="aspect-square overflow-hidden border border-zinc-800 bg-[#0F0F0F]">
              <img src={product.images[active]} alt={product.name} className="w-full h-full object-cover" />
            </div>
            {product.images.length > 1 && (
              <div className="grid grid-cols-5 gap-2 mt-3">
                {product.images.map((src, i) => (
                  <button
                    key={i}
                    onClick={() => setActive(i)}
                    data-testid={`product-thumb-${i}`}
                    className={`aspect-square overflow-hidden border ${active === i ? "border-lime-500" : "border-zinc-800"}`}
                  >
                    <img src={src} alt="" className="w-full h-full object-cover" />
                  </button>
                ))}
              </div>
            )}
          </div>

          <div className="lg:col-span-6">
            <div className="kg-eyebrow">{category.name}</div>
            <h1 className="font-display font-black text-3xl md:text-4xl lg:text-5xl tracking-tight mt-3">{product.name}</h1>
            <div className="mt-4 inline-flex items-center gap-2 text-lime-500 font-bold">
              <ShieldCheck className="h-4 w-4" /> Authorized Royal Kissan Agro Product
            </div>
            <p className="text-zinc-400 mt-5 leading-relaxed">{product.warranty}</p>

            <div className="mt-7 flex flex-wrap gap-3">
              <EnquiryDialog product={product.name} trigger={
                <button data-testid="product-enquiry-btn" className="bg-lime-500 hover:bg-lime-400 text-black font-bold px-6 py-3.5 rounded-md">Request Price</button>
              } />
              <a
                href={`https://wa.me/${COMPANY.whatsapp}?text=${waMsg}`}
                target="_blank"
                rel="noreferrer"
                data-testid="product-whatsapp-btn"
                className="border border-zinc-700 hover:border-lime-500 hover:text-lime-500 px-6 py-3.5 font-bold rounded-md inline-flex items-center gap-2"
              >
                <MessageCircle className="h-4 w-4"/> WhatsApp Enquiry
              </a>
            </div>

            {/* Features */}
            <div className="mt-10">
              <div className="kg-eyebrow mb-4">Key Features</div>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {product.features.map((f, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-zinc-300">
                    <Check className="h-4 w-4 text-lime-500 mt-0.5 shrink-0" /> {f}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Specifications */}
        <div className="mt-20">
          <div className="kg-eyebrow">Command Center</div>
          <h2 className="kg-h2 mt-3">Technical <span className="text-lime-500">Specifications.</span></h2>
          <div className="mt-8 border border-zinc-800">
            <div className="grid grid-cols-1 md:grid-cols-2">
              {Object.entries(product.specs).map(([k, v], i) => (
                <div key={k} className={`p-5 border-b border-zinc-800 ${i % 2 === 0 ? "md:border-r" : ""}`}>
                  <div className="text-[10px] tracking-[0.25em] uppercase text-zinc-500 font-bold">{k.replace(/_/g, " ")}</div>
                  <div className="text-white font-bold mt-1">{v}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Applications + Benefits */}
        <div className="mt-16 grid md:grid-cols-2 gap-6">
          <div className="kg-card p-7">
            <div className="kg-eyebrow">Applications</div>
            <ul className="mt-4 space-y-3">
              {product.applications.map((a, i) => (
                <li key={i} className="flex items-start gap-2 text-zinc-300 text-sm"><div className="h-1.5 w-1.5 bg-lime-500 mt-2"></div>{a}</li>
              ))}
            </ul>
          </div>
          <div className="kg-card p-7">
            <div className="kg-eyebrow">Benefits</div>
            <ul className="mt-4 space-y-3">
              {product.benefits.map((b, i) => (
                <li key={i} className="flex items-start gap-2 text-zinc-300 text-sm"><Check className="h-4 w-4 text-lime-500 mt-0.5 shrink-0" />{b}</li>
              ))}
            </ul>
          </div>
        </div>

        {/* Warranty bar */}
        <div className="mt-16 border border-lime-500/30 bg-lime-500/5 p-8 grid md:grid-cols-2 gap-6 items-center">
          <div>
            <div className="kg-eyebrow">Warranty</div>
            <div className="font-display font-bold text-xl mt-2">{product.warranty}</div>
          </div>
          <div className="flex flex-wrap gap-3 md:justify-end">
            <EnquiryDialog product={product.name} trigger={
              <button data-testid="product-warranty-enquiry" className="bg-lime-500 hover:bg-lime-400 text-black font-bold px-6 py-3.5 rounded-md">Get Quote</button>
            } />
            <Link to="/bulk-order" data-testid="product-bulk-link" className="border border-zinc-700 hover:border-lime-500 hover:text-lime-500 px-6 py-3.5 font-bold rounded-md">Bulk Order</Link>
          </div>
        </div>
      </div>
    </div>
  );
}
