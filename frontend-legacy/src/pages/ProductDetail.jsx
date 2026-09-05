import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { Check, ChevronRight, ShieldCheck, Award, Truck, Wrench, Phone, FileText } from "lucide-react";
import { CATEGORIES, COMPANY, farmingtoolsProductUrl } from "@/data/catalog";
import EnquiryDialog from "@/components/EnquiryDialog";
import WhatsAppIcon from "@/components/WhatsAppIcon";
import { apiClient } from "@/lib/api";
import { trackWhatsAppClick } from "@/lib/analytics";
import { Skeleton } from "@/components/ui/skeleton";

export default function ProductDetail() {
  const { slug } = useParams();
  const [active, setActive] = useState(0);
  const [product, setProduct] = useState(null);
  const [notFound, setNotFound] = useState(false);
  const [relatedProducts, setRelatedProducts] = useState([]);

  useEffect(() => {
    setProduct(null);
    setNotFound(false);
    setActive(0);
    setRelatedProducts([]);
    apiClient.get(`/products/${slug}`)
      .then((res) => {
        if (res.data && typeof res.data === "object" && !Array.isArray(res.data)) {
          setProduct(res.data);
          if (res.data.category) {
            apiClient.get(`/products?category=${res.data.category}&limit=4`)
              .then((r) => {
                const list = Array.isArray(r.data) ? r.data : [];
                setRelatedProducts(list.filter((p) => p.slug !== slug).slice(0, 3));
              })
              .catch(() => setRelatedProducts([]));
          }
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
        <p className="text-zinc-500 mt-3">The product you're looking for doesn't exist or has been moved.</p>
        <Link to="/products" className="mt-6 inline-flex items-center gap-2 text-lime-500 font-bold">
          <ChevronRight className="h-4 w-4" /> Browse all products
        </Link>
      </div>
    );
  }

  if (!product) return <ProductDetailSkeleton />;

  const category = CATEGORIES.find((c) => c.slug === product.category);
  const waMsg = encodeURIComponent(
    `Hello KrishiGears, I'm interested in ${product.name}${product.model ? ` (${product.model})` : ""} for bulk/dealer/institutional supply. Please share details.`
  );
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
          <Link to={`/products/category/${category?.slug || ""}`} className="hover:text-lime-500">{category?.name || "Category"}</Link>
          <ChevronRight className="h-3 w-3" />
          <span className="text-lime-500">{product.name}</span>
        </div>

        {/* Gallery + Info */}
        <div className="grid lg:grid-cols-12 gap-10">
          <div className="lg:col-span-6">
            <div className="aspect-square overflow-hidden border border-zinc-200 dark:border-zinc-800 bg-white">
              <img
                src={product.images?.[active]}
                alt={product.name}
                loading="lazy"
                className="w-full h-full object-contain p-4"
              />
            </div>
            {product.images && product.images.length > 1 && (
              <div className="grid grid-cols-5 gap-2 mt-3">
                {product.images.map((src, i) => (
                  <button
                    key={`thumb-${i}-${src}`}
                    onClick={() => setActive(i)}
                    data-testid={`product-thumb-${i}`}
                    className={`aspect-square overflow-hidden border ${active === i ? "border-lime-500" : "border-zinc-200 dark:border-zinc-800"}`}
                  >
                    <img src={src} alt="" loading="lazy" className="w-full h-full object-cover" />
                  </button>
                ))}
              </div>
            )}
          </div>

          <div className="lg:col-span-6">
            <div className="kg-eyebrow">{category?.name || "Equipment"}</div>
            <h1 className="font-display font-black text-3xl md:text-4xl lg:text-5xl tracking-tight mt-3">
              {product.name}
            </h1>
            {product.model && (
              <div className="mt-3 inline-flex items-center gap-2 text-zinc-600 dark:text-zinc-400 font-mono text-sm">
                <span className="text-zinc-500 dark:text-zinc-500">Model:</span>
                <span className="text-zinc-900 dark:text-white">{product.model}</span>
              </div>
            )}
            {product.badges && product.badges.length > 0 && (
              <div className="mt-4 flex flex-wrap gap-2">
                {product.badges.map((b) => (
                  <span
                    key={b}
                    className="text-xs font-bold tracking-wider uppercase px-3 py-1 bg-lime-500/10 text-lime-400 border border-lime-500/40"
                  >
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
              <EnquiryDialog
                product={product.name}
                trigger={
                  <button data-testid="product-enquiry-btn" className="bg-lime-500 hover:bg-lime-400 text-black dark:text-black font-bold px-6 py-3.5 rounded-md">
                    Bulk / Dealer Inquiry
                  </button>
                }
              />
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
                <WhatsAppIcon className="h-4 w-4" /> WhatsApp Supply Enquiry
              </a>
            </div>

            {/* Features */}
            <div className="mt-10">
              <div className="kg-eyebrow mb-4">Key Features</div>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {product.features && product.features.map((f, i) => (
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
          <h2 className="kg-h2 mt-3">
            Technical <span className="text-lime-500">Specifications.</span>
          </h2>
          <div className="mt-8 border border-zinc-200 dark:border-zinc-800">
            <div className="grid grid-cols-1 md:grid-cols-2">
              {product.specs &&
                Object.entries(product.specs).map(([k, v], i) => (
                  <div
                    key={k}
                    className={`p-5 border-b border-zinc-200 dark:border-zinc-800 ${i % 2 === 0 ? "md:border-r" : ""}`}
                  >
                    <div className="text-[10px] tracking-[0.25em] uppercase text-zinc-500 dark:text-zinc-500 font-bold">
                      {k.replace(/_/g, " ")}
                    </div>
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
              {product.applications &&
                product.applications.map((a, i) => (
                  <li key={`app-${i}-${a.slice(0, 30)}`} className="flex items-start gap-2 text-zinc-700 dark:text-zinc-300 text-sm">
                    <div className="h-1.5 w-1.5 bg-lime-500 mt-2" />
                    {a}
                  </li>
                ))}
            </ul>
          </div>
          <div className="kg-card p-7">
            <div className="kg-eyebrow">Benefits</div>
            <ul className="mt-4 space-y-3">
              {product.benefits &&
                product.benefits.map((b, i) => (
                  <li key={`ben-${i}-${b.slice(0, 30)}`} className="flex items-start gap-2 text-zinc-700 dark:text-zinc-300 text-sm">
                    <Check className="h-4 w-4 text-lime-500 mt-0.5 shrink-0" />
                    {b}
                  </li>
                ))}
            </ul>
          </div>
        </div>

        {/* Enhanced Trust Signals Bar */}
        <div className="mt-16 border-y border-zinc-200 dark:border-zinc-800 py-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div className="flex flex-col items-center gap-2">
              <ShieldCheck className="h-8 w-8 text-lime-500" />
              <div className="text-sm font-bold text-zinc-900 dark:text-white">Genuine Warranty</div>
              <div className="text-xs text-zinc-500 dark:text-zinc-500">FMTTI Tested</div>
            </div>
            <div className="flex flex-col items-center gap-2">
              <Truck className="h-8 w-8 text-lime-500" />
              <div className="text-sm font-bold text-zinc-900 dark:text-white">PAN India Delivery</div>
              <div className="text-xs text-zinc-500 dark:text-zinc-500">Fast Dispatch</div>
            </div>
            <div className="flex flex-col items-center gap-2">
              <Award className="h-8 w-8 text-lime-500" />
              <div className="text-sm font-bold text-zinc-900 dark:text-white">Authorized Dealer</div>
              <div className="text-xs text-zinc-500 dark:text-zinc-500">Spares Guaranteed</div>
            </div>
            <div className="flex flex-col items-center gap-2">
              <Phone className="h-8 w-8 text-lime-500" />
              <div className="text-sm font-bold text-zinc-900 dark:text-white">24x7 Support</div>
              <div className="text-xs text-zinc-500 dark:text-zinc-500">Service Network</div>
            </div>
          </div>
        </div>

        {/* Related Products */}
        {relatedProducts.length > 0 && (
          <div className="mt-16">
            <div className="kg-eyebrow">You May Also Like</div>
            <h2 className="kg-h2 mt-3">
              Related <span className="text-lime-500">equipment.</span>
            </h2>
            <div className="grid md:grid-cols-3 gap-6 mt-8">
              {relatedProducts.map((p) => {
                const relCat = CATEGORIES.find((c) => c.slug === p.category);
                return (
                  <Link
                    key={p.slug}
                    to={`/products/${p.slug}`}
                    data-testid={`related-product-${p.slug}`}
                    className="group border border-zinc-200 dark:border-zinc-800 bg-surface hover:border-lime-500/60 transition-all duration-300 overflow-hidden flex flex-col"
                  >
                    <div className="aspect-square bg-surface-darker flex items-center justify-center p-4">
                      <img
                        src={p.images?.[0] || "/placeholder.png"}
                        alt={p.name}
                        loading="lazy"
                        className="max-h-48 w-full object-contain group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    <div className="p-5 flex-1 flex flex-col">
                      <div className="text-xs uppercase tracking-[0.25em] text-lime-400 font-bold mb-2">
                        {relCat?.name || "Equipment"}
                      </div>
                      <h3 className="font-display font-black text-lg text-zinc-900 dark:text-white group-hover:text-lime-500 transition mb-2 line-clamp-1">
                        {p.name}
                      </h3>
                      <div className="mt-auto text-xs text-zinc-500 dark:text-zinc-500 font-mono">
                        {p.model && `Model: ${p.model}`}
                      </div>
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>
        )}

        {/* Comparison CTA */}
        <div className="mt-16 border border-lime-500/30 bg-lime-500/5 p-8 text-center">
          <Wrench className="h-8 w-8 text-lime-500 mx-auto mb-3" />
          <h3 className="font-display font-bold text-xl mb-2">Not sure which model is right for you?</h3>
          <p className="text-zinc-600 dark:text-zinc-400 max-w-2xl mx-auto mb-6">
            Our agronomists and equipment specialists can help you compare specifications,
            pricing, and compatibility for your specific farming needs.
          </p>
          <EnquiryDialog
            product={product.name}
            variant="compare"
            trigger={
              <button className="bg-lime-500 hover:bg-lime-400 text-black font-bold px-8 py-3.5 rounded-md transition inline-flex items-center gap-2">
                <FileText className="h-4 w-4" /> Get Expert Comparison Advice
              </button>
            }
          />
        </div>
      </div>
    </div>
  );
}

// Enhanced Skeleton Loader
function ProductDetailSkeleton() {
  return (
    <div data-testid="product-detail-skeleton" className="kg-section">
      <div className="max-w-[1400px] mx-auto">
        {/* Breadcrumb skeleton */}
        <div className="flex items-center gap-2 text-xs text-zinc-500 mb-8">
          <Skeleton className="h-3 w-12 bg-zinc-200 dark:bg-zinc-700" />
          <ChevronRight className="h-3 w-3 text-zinc-300" />
          <Skeleton className="h-3 w-16 bg-zinc-200 dark:bg-zinc-700" />
          <ChevronRight className="h-3 w-3 text-zinc-300" />
          <Skeleton className="h-3 w-24 bg-zinc-200 dark:bg-zinc-700" />
        </div>

        <div className="grid lg:grid-cols-12 gap-10">
          {/* Gallery skeleton */}
          <div className="lg:col-span-6">
            <Skeleton className="aspect-square w-full bg-zinc-200 dark:bg-zinc-700" />
            <div className="grid grid-cols-5 gap-2 mt-3">
              {[1, 2, 3, 4, 5].map((i) => (
                <Skeleton key={i} className="aspect-square w-full bg-zinc-200 dark:bg-zinc-700" />
              ))}
            </div>
          </div>

          {/* Info skeleton */}
          <div className="lg:col-span-6 space-y-4">
            <Skeleton className="h-4 w-20 bg-zinc-200 dark:bg-zinc-700" />
            <Skeleton className="h-10 w-3/4 bg-zinc-200 dark:bg-zinc-700" />
            <Skeleton className="h-5 w-1/2 bg-zinc-200 dark:bg-zinc-700" />
            <Skeleton className="h-5 w-1/4 bg-zinc-200 dark:bg-zinc-700" />
            <div className="flex gap-2 mt-4">
              <Skeleton className="h-6 w-16 bg-zinc-200 dark:bg-zinc-700" />
              <Skeleton className="h-6 w-16 bg-zinc-200 dark:bg-zinc-700" />
            </div>
            <Skeleton className="h-5 w-full bg-zinc-200 dark:bg-zinc-700 mt-2" />
            <div className="mt-6 flex flex-wrap gap-3">
              {[1, 2, 3, 4].map((i) => (
                <Skeleton key={i} className="h-12 w-full sm:w-[calc(50%-12px)] bg-zinc-200 dark:bg-zinc-700" />
              ))}
            </div>
            <div className="mt-8 space-y-2">
              {[1, 2, 3, 4, 5, 6].map((i) => (
                <Skeleton key={i} className="h-4 w-full bg-zinc-200 dark:bg-zinc-700" />
              ))}
            </div>
          </div>
        </div>

        {/* Specs skeleton */}
        <div className="mt-20">
          <Skeleton className="h-4 w-32 bg-zinc-200 dark:bg-zinc-700" />
          <Skeleton className="h-8 w-2/3 bg-zinc-200 dark:bg-zinc-700 mt-3 mb-8" />
          <div className="border border-zinc-200 dark:border-zinc-800">
            <div className="grid grid-cols-1 md:grid-cols-2">
              {[1, 2, 3, 4, 5, 6].map((i) => (
                <div
                  key={i}
                  className={`p-5 border-b border-zinc-200 dark:border-zinc-800 ${i % 2 === 0 ? "md:border-r" : ""}`}
                >
                  <Skeleton className="h-3 w-20 bg-zinc-200 dark:bg-zinc-700 mb-2" />
                  <Skeleton className="h-5 w-3/4 bg-zinc-200 dark:bg-zinc-700" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
