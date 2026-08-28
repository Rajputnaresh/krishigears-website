import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { Check, ChevronRight, ShieldCheck } from "lucide-react";
import { CATEGORIES, COMPANY, farmingtoolsProductUrl } from "@/data/catalog";
import EnquiryDialog from "@/components/EnquiryDialog";
import WhatsAppIcon from "@/components/WhatsAppIcon";
import { apiClient } from "@/lib/api";
import { trackWhatsAppClick } from "@/lib/analytics";

export default function ProductDetail() {
  const { slug } = useParams();
  const [active, setActive] = useState(0);
  const [product, setProduct] = useState(null);
  const [notFound, setNotFound] = useState(false);

  useEffect(() => {
    setProduct(null);
    setNotFound(false);
    setActive(0);
    apiClient.get(`/products/${slug}`)
      .then((res) => {
        if (res.data && typeof res.data === "object" && !Array.isArray(res.data)) {
          setProduct(res.data);
        } else {
          setNotFound(true);
        }
      })
      .catch(() => setNotFound(true));
  }, [slug]);

  if (notFound) {
    return (
      <div className="kg-section text-center">
        <h1 className="kg-h2">Product not found</h1>
        <Link to="/products" className="mt-6 inline-flex items-center gap-2 text-lime-500"><ChevronRight className="h-4 w-4"/> All products</Link>
      </div>
    );
  }
  if (!product) return <div className="kg-section text-center text-zinc-500 dark:text-zinc-500">Loading product…</div>;

  const category = CATEGORIES.find((c) => c.slug === product.category);
  const waMsg = encodeURIComponent(`Hello KrishiGears, I'm interested in ${product.name}${product.model ? ` (${product.model})` : ""} for bulk/dealer/institutional supply. Please share details.`);
  const retailUrl = farmingtoolsProductUrl(product);

  return (
    <div data-testid="product-detail-page" className="kg-section">
      <div className="max-w-[1400px] mx-auto">
        {/* Breadcrumbs */}
        <div className="flex items-center gap-2 text-xs text-zinc-500 dark:text-zinc-500 mb-8 flex-wrap">
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
            <div className="aspect-square overflow-hidden border border-zinc-200 dark:border-zinc-800 bg-white">
              <img src={product.images[active]} alt={product.name} className="w-full h-full object-contain p-4" />
            </div>
            {product.images.length > 1 && (
              <div className="grid grid-cols-5 gap-2 mt-3">
                {product.images.map((src, i) => (
                  <button
                    key={src}
                    onClick={() => setActive(i)}
                    data-testid={`product-thumb-${i}`}
                    className={`aspect-square overflow-hidden border ${active === i ? "border-lime-500" : "border-zinc-200 dark:border-zinc-800"}`}
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
            {product.model && (
              <div className="mt-3 inline-flex items-center gap-2 text-zinc-600 dark:text-zinc-400 font-mono text-sm">
                <span className="text-zinc-500 dark:text-zinc-500">Model:</span> <span className="text-zinc-900 dark:text-white">{product.model}</span>
              </div>
            )}
            {product.badges?.length > 0 && (
              <div className="mt-4 flex flex-wrap gap-2">
                {product.badges.map((b) => (
                  <span key={b} className="text-xs font-bold tracking-wider uppercase px-3 py-1 bg-lime-500/10 text-lime-400 border border-lime-500/40">
                    {b}
                  </span>
                ))}
              </div>
            )}
            <div className="mt-4 inline-flex items-center gap-2 text-lime-500 font-bold">
              <ShieldCheck className="h-4 w-4" /> Genuine KrishiGears Product
            </div>
            <p className="text-zinc-600 dark:text-zinc-400 mt-5 leading-relaxed">{product.warranty}</p>

            <div className="mt-7 flex flex-wrap gap-3">
              <EnquiryDialog product={product.name} trigger={
                <button data-testid="product-enquiry-btn" className="bg-lime-500 hover:bg-lime-400 text-zinc-50 dark:text-black font-bold px-6 py-3.5 rounded-md">Bulk / Dealer Inquiry</button>
              } />
              <Link to="/become-a-dealer" data-testid="product-dealer-btn" className="border border-zinc-300 dark:border-zinc-700 hover:border-lime-500 hover:text-lime-500 px-6 py-3.5 font-bold rounded-md">
                Become Dealer
              </Link>
              <Link to="/bulk-order" data-testid="product-institutional-btn" className="border border-zinc-300 dark:border-zinc-700 hover:border-lime-500 hover:text-lime-500 px-6 py-3.5 font-bold rounded-md">
                Institutional Supply
              </Link>
              <a
                href={retailUrl}
                target="_blank"
                rel="noreferrer"
                data-testid="product-buy-online-btn"
                className="border border-zinc-300 dark:border-zinc-700 hover:border-lime-500 hover:text-lime-500 px-6 py-3.5 font-bold rounded-md"
              >
                Buy Online at FarmingTools
              </a>
              <a
                href={`https://wa.me/${COMPANY.whatsapp}?text=${waMsg}`}
                target="_blank"
                rel="noreferrer"
                onClick={() => trackWhatsAppClick("product_detail", product.slug)}
                data-testid="product-whatsapp-btn"
                className="border border-zinc-300 dark:border-zinc-700 hover:border-lime-500 hover:text-lime-500 px-6 py-3.5 font-bold rounded-md inline-flex items-center gap-2"
              >
                <WhatsAppIcon className="h-4 w-4"/> WhatsApp Supply Enquiry
              </a>
            </div>

            {/* Features */}
            <div className="mt-10">
              <div className="kg-eyebrow mb-4">Key Features</div>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {product.features.map((f, i) => (
                  <li key={`feat-${i}-${f.slice(0, 30)}`} className="flex items-start gap-2 text-sm text-zinc-700 dark:text-zinc-300">
                    <Check className="h-4 w-4 text-lime-500 mt-0.5 shrink-0" /> {f}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Specifications */}
        <div className="mt-20">
          <div className="kg-eyebrow">B2B Reference Specs</div>
          <h2 className="kg-h2 mt-3">Technical <span className="text-lime-500">Specifications.</span></h2>
          <div className="mt-8 border border-zinc-200 dark:border-zinc-800">
            <div className="grid grid-cols-1 md:grid-cols-2">
              {Object.entries(product.specs).map(([k, v], i) => (
                <div key={k} className={`p-5 border-b border-zinc-200 dark:border-zinc-800 ${i % 2 === 0 ? "md:border-r" : ""}`}>
                  <div className="text-[10px] tracking-[0.25em] uppercase text-zinc-500 dark:text-zinc-500 font-bold">{k.replace(/_/g, " ")}</div>
                  <div className="text-zinc-900 dark:text-white font-bold mt-1">{v}</div>
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
                <li key={`app-${i}-${a.slice(0, 30)}`} className="flex items-start gap-2 text-zinc-700 dark:text-zinc-300 text-sm"><div className="h-1.5 w-1.5 bg-lime-500 mt-2"></div>{a}</li>
              ))}
            </ul>
          </div>
          <div className="kg-card p-7">
            <div className="kg-eyebrow">Benefits</div>
            <ul className="mt-4 space-y-3">
              {product.benefits.map((b, i) => (
                <li key={`ben-${i}-${b.slice(0, 30)}`} className="flex items-start gap-2 text-zinc-700 dark:text-zinc-300 text-sm"><Check className="h-4 w-4 text-lime-500 mt-0.5 shrink-0" />{b}</li>
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
              <button data-testid="product-warranty-enquiry" className="bg-lime-500 hover:bg-lime-400 text-zinc-50 dark:text-black font-bold px-6 py-3.5 rounded-md">Get B2B Quote</button>
            } />
            <Link to="/bulk-order" data-testid="product-bulk-link" className="border border-zinc-300 dark:border-zinc-700 hover:border-lime-500 hover:text-lime-500 px-6 py-3.5 font-bold rounded-md">Bulk Order Inquiry</Link>
          </div>
        </div>
      </div>
    </div>
  );
}
