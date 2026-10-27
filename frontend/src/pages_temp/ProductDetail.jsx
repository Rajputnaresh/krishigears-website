"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import { useParams } from "next/navigation";
import { Check, ChevronRight, ShieldCheck, Award, Truck, Wrench, Phone, FileText, Play, Video, ExternalLink } from "lucide-react";
import { CATEGORIES, COMPANY, PRODUCTS, farmingtoolsProductUrl } from "@/data/catalog";
import EnquiryDialog from "@/components/EnquiryDialog";
import WhatsAppIcon from "@/components/WhatsAppIcon";
import { apiClient } from "@/lib/api";
import { trackWhatsAppClick } from "@/lib/analytics";
import { Skeleton } from "@/components/ui/skeleton";

function getYouTubeId(url) {
  if (!url) return null;
  const match = url.match(/(?:youtu\.be\/|youtube\.com\/(?:embed\/|v\/|watch\?v=|watch\?.+&v=))([\w-]{11})/);
  return match ? match[1] : null;
}

export default function ProductDetail() {
  const { slug } = useParams();
  const [active, setActive] = useState(0);
  const localInitial = PRODUCTS.find((p) => p.slug === slug) || null;
  const [product, setProduct] = useState(localInitial);
  const [notFound, setNotFound] = useState(false);
  const [relatedProducts, setRelatedProducts] = useState(
    localInitial ? PRODUCTS.filter((p) => p.category === localInitial.category && p.slug !== slug).slice(0, 3) : []
  );

  useEffect(() => {
    const localProd = PRODUCTS.find((p) => p.slug === slug);
    if (!localProd) {
      setProduct(null);
    } else {
      setProduct(localProd);
    }
    setNotFound(false);
    setActive(0);

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
              .catch(() => {
                const localRelated = PRODUCTS.filter((p) => p.category === res.data.category && p.slug !== slug);
                setRelatedProducts(localRelated.slice(0, 3));
              });
          }
        } else if (localProd) {
          setProduct(localProd);
          const localRelated = PRODUCTS.filter((p) => p.category === localProd.category && p.slug !== slug);
          setRelatedProducts(localRelated.slice(0, 3));
        } else {
          setNotFound(true);
        }
      })
      .catch(() => {
        if (localProd) {
          setProduct(localProd);
          const localRelated = PRODUCTS.filter((p) => p.category === localProd.category && p.slug !== slug);
          setRelatedProducts(localRelated.slice(0, 3));
        } else {
          setNotFound(true);
        }
      });
  }, [slug]);

  if (notFound) {
    return (
      <div className="kg-section text-center">
        <h1 className="kg-h2">Product not found</h1>
        <p className="text-zinc-400 mt-3">The product you're looking for doesn't exist or has been moved.</p>
        <Link href="/products" className="mt-6 inline-flex items-center gap-2 text-lime-500 font-bold">
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
  const isMachine = product.category === "power-weeders" || product.category === "power-tillers";
  const compatibleSpares = isMachine
    ? PRODUCTS.filter((p) => p.category === "power-weeder-spare-parts").slice(0, 4)
    : [];
  const ytVideoId = product.video ? getYouTubeId(product.video) : null;

  return (
    <div data-testid="product-detail-page" className="kg-section">
      <div className="max-w-[1400px] mx-auto">
        {/* Breadcrumbs */}
        <div className="flex items-center gap-2 text-xs text-zinc-400 mb-8 flex-wrap">
          <Link href="/" className="hover:text-lime-500">Home</Link>
          <ChevronRight className="h-3 w-3" />
          <Link href="/products" className="hover:text-lime-500">Products</Link>
          <ChevronRight className="h-3 w-3" />
          <Link href={`/products/category/${category?.slug || ""}`} className="hover:text-lime-500">{category?.name || "Category"}</Link>
          <ChevronRight className="h-3 w-3" />
          <span className="text-lime-500">{product.name}</span>
        </div>

        {/* Gallery + Info */}
        <div className="grid lg:grid-cols-12 gap-10">
          <div className="lg:col-span-6">
            <div className="aspect-square overflow-hidden border border-zinc-800 bg-white">
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
                    className={`aspect-square overflow-hidden rounded-lg border-2 transition-all duration-200 active:scale-95 cursor-pointer ${active === i ? "border-lime-500 shadow-md ring-2 ring-lime-500/30" : "border-zinc-800 hover:border-zinc-700"}`}
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
              <div className="mt-3 inline-flex items-center gap-2 text-zinc-300 font-mono text-sm">
                <span className="text-zinc-400">Model:</span>
                <span className="text-white">{product.model}</span>
              </div>
            )}
            {product.badges && product.badges.length > 0 && (
              <div className="mt-4 flex flex-wrap gap-2">
                {product.badges.map((b) => (
                  <span
                    key={b}
                    className="text-xs font-bold tracking-wider uppercase px-3 py-1 bg-lime-500/10 text-lime-400 border border-lime-500/40 rounded"
                  >
                    {b}
                  </span>
                ))}
              </div>
            )}
            <div className="mt-4 inline-flex items-center gap-2 text-lime-500 font-bold">
              <ShieldCheck className="h-4 w-4" /> Genuine KrishiGears Product
            </div>
            <p className="text-zinc-300 mt-5 leading-relaxed">{product.warranty}</p>

            {/* Primary B2B Action Cluster (Max 3 clear choices) */}
            <div className="mt-7 flex flex-wrap items-center gap-3">
              <a
                href={`https://api.whatsapp.com/send?phone=${COMPANY.whatsapp}&text=${waMsg}&utm_source=website&utm_medium=whatsapp&utm_campaign=kg_catalog`}
                target="_blank"
                rel="noreferrer"
                aria-label={`WhatsApp Wholesale Quote for ${product.name}`}
                onClick={() => trackWhatsAppClick("product_detail", product.slug)}
                data-testid="product-whatsapp-btn"
                className="bg-lime-500 hover:bg-lime-400 text-black font-extrabold px-6 py-3.5 rounded-lg inline-flex items-center gap-2 active:scale-95 transition-transform duration-100 shadow-lg shadow-lime-500/20"
              >
                <WhatsAppIcon className="h-5 w-5" /> WhatsApp Wholesale Quote
              </a>
              <EnquiryDialog
                product={product.name}
                trigger={
                  <button data-testid="product-enquiry-btn" className="border border-zinc-700 hover:border-lime-500 hover:text-lime-400 text-zinc-100 font-bold px-6 py-3.5 rounded-lg active:scale-95 transition-all duration-100 bg-zinc-900/60">
                    Submit RFQ / Inquiry
                  </button>
                }
              />
              <Link href="/become-a-dealer" data-testid="product-dealer-btn" className="border border-zinc-800 hover:border-zinc-700 text-zinc-300 hover:text-white px-5 py-3.5 font-semibold text-sm rounded-lg active:scale-95 transition-all duration-100">
                Become a Dealer →
              </Link>
            </div>

            {/* Separated Consumer Retail Card (Prevents B2B Hick's Law dilution) */}
            <div className="mt-5 p-4 rounded-xl border border-emerald-500/30 bg-emerald-950/20 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              <div>
                <div className="flex items-center gap-2">
                  <span className="text-[11px] font-bold text-emerald-400 uppercase tracking-wider">Farmer Retail Purchase</span>
                  <span className="text-[10px] font-semibold bg-amber-500/20 text-amber-300 px-2 py-0.5 rounded border border-amber-500/30">₹1,500 Token • Open-Box Godown Inspection</span>
                </div>
                <p className="text-xs text-zinc-300 mt-1">Need a single machine for your farm? Flat ₹28,500 all-inclusive (GST + freight) with free 32-blade rotary & ridger bundle.</p>
              </div>
              <a
                href={retailUrl}
                target="_blank"
                rel="noreferrer"
                data-testid="product-buy-online-btn"
                className="shrink-0 px-4 py-2 bg-emerald-700 hover:bg-emerald-600 text-white text-xs font-bold rounded-lg border border-emerald-600 hover:border-lime-400 transition inline-flex items-center justify-center gap-1.5 shadow-md shadow-emerald-950/40"
              >
                Buy on FarmingTools.in →
              </a>
            </div>

            {/* Features */}
            <div className="mt-10">
              <div className="kg-eyebrow mb-4">Key Features</div>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {product.features && product.features.map((f, i) => (
                  <li key={`feat-${i}-${f.slice(0, 30)}`} className="flex items-start gap-2 text-sm text-zinc-200">
                    <Check className="h-4 w-4 text-lime-500 mt-0.5 shrink-0" /> {f}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Specifications */}
        <div className="mt-20">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <div>
              <div className="kg-eyebrow">B2B Reference Specs</div>
              <h2 className="kg-h2 mt-3">
                Technical <span className="text-lime-500">Specifications.</span>
              </h2>
            </div>
            <div className="flex flex-wrap items-center gap-2">
              <button
                onClick={() => window.print()}
                className="px-4 py-2.5 bg-zinc-900 hover:bg-zinc-800 text-lime-400 border border-zinc-700 hover:border-lime-500/50 rounded-md text-xs font-bold uppercase tracking-wider inline-flex items-center gap-2 transition shrink-0"
                title="Print or Save as PDF Spec Sheet"
              >
                <FileText className="h-4 w-4" /> Download Tech Spec PDF
              </button>
              <a
                href={`https://api.whatsapp.com/send?phone=${COMPANY.whatsapp}&text=${encodeURIComponent(`Hello KrishiGears, please share the FMTTI / SRFMTTI Test Compliance Certificate copy for ${product.name} for tender/subsidy verification.`)}&utm_source=krishigears_web&utm_medium=fmtti_cert_btn`}
                target="_blank"
                rel="noreferrer"
                className="px-4 py-2.5 bg-zinc-900 hover:bg-zinc-800 text-zinc-200 border border-zinc-700 hover:border-zinc-500 rounded-md text-xs font-bold uppercase tracking-wider inline-flex items-center gap-2 transition shrink-0"
                title="Request FMTTI Test Certificate for Tenders"
              >
                <Award className="h-4 w-4 text-lime-400" /> FMTTI Certificate Copy
              </a>
            </div>
          </div>
          <div className="mt-8 border border-zinc-800">
            <div className="grid grid-cols-1 md:grid-cols-2">
              {product.specs &&
                Object.entries(product.specs).map(([k, v], i) => (
                  <div
                    key={k}
                    className={`p-5 border-b border-zinc-800 ${i % 2 === 0 ? "md:border-r" : ""}`}
                  >
                    <div className="text-xs tracking-[0.25em] uppercase text-zinc-400 font-bold">
                      {k.replace(/_/g, " ")}
                    </div>
                    <div className="text-white font-bold mt-1">{v}</div>
                  </div>
                ))}
            </div>
          </div>
        </div>

        {/* Video & Machinery Field Demonstration */}
        {product.video && (
          <div className="mt-16 bg-zinc-950/80 border border-zinc-800 p-6 md:p-8 rounded-xl">
            <div className="flex items-center gap-3 mb-4">
              <div className="h-10 w-10 grid place-items-center bg-red-600/20 text-red-500 rounded-lg border border-red-500/30">
                <Video className="h-5 w-5" />
              </div>
              <div>
                <div className="text-xs uppercase tracking-widest text-lime-400 font-bold">Field Verification & Working Footage</div>
                <h3 className="font-display font-bold text-xl text-white">Machinery Operation Demo</h3>
              </div>
            </div>
            {ytVideoId ? (
              <div className="aspect-video w-full rounded-lg overflow-hidden border border-zinc-800 bg-black mt-4">
                <iframe
                  src={`https://www.youtube.com/embed/${ytVideoId}`}
                  title={`${product.name} Video Demonstration`}
                  className="w-full h-full border-0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
            ) : (
              <div className="mt-4 p-6 rounded-lg bg-zinc-900/60 border border-zinc-800 flex flex-col sm:flex-row items-center justify-between gap-4">
                <div className="flex items-center gap-4">
                  <div className="h-14 w-14 shrink-0 rounded-full bg-red-600/10 border border-red-500/30 flex items-center justify-center text-red-500">
                    <Play className="h-7 w-7 fill-current ml-0.5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-white text-base">Watch Official Field Operations & Tiller Demo</h4>
                    <p className="text-xs text-zinc-400 mt-1">
                      Verified supplier footage showing real soil cultivation, gearbox testing, and recoil starting for {product.name}.
                    </p>
                  </div>
                </div>
                <a
                  href={product.video}
                  target="_blank"
                  rel="noreferrer"
                  className="shrink-0 px-5 py-3 bg-red-600 hover:bg-red-500 text-white font-bold text-xs uppercase tracking-wider rounded-lg inline-flex items-center gap-2 transition active:scale-95 shadow-lg shadow-red-950/40"
                >
                  <ExternalLink className="h-4 w-4" /> Watch On YouTube →
                </a>
              </div>
            )}
          </div>
        )}

        {/* Compatible Attachments & OEM Spares */}
        {compatibleSpares.length > 0 && (
          <div className="mt-16">
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
              <div>
                <div className="kg-eyebrow">Genuine OEM Fitment</div>
                <h2 className="kg-h2 mt-3">
                  Compatible <span className="text-lime-500">Attachments & Spares.</span>
                </h2>
              </div>
              <Link href="/products/category/power-weeder-spare-parts" className="text-lime-500 hover:text-lime-400 text-xs font-bold uppercase tracking-wider inline-flex items-center gap-1.5">
                View All Spares Catalog →
              </Link>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
              {compatibleSpares.map((spare) => (
                <div key={spare.slug} className="group border border-zinc-800 bg-zinc-900/40 hover:border-lime-500/60 transition p-4 rounded-lg flex flex-col justify-between">
                  <Link href={`/products/${spare.slug}`}>
                    <div className="aspect-square bg-zinc-950/80 rounded-md p-3 flex items-center justify-center border border-zinc-800/40 mb-3 overflow-hidden">
                      <img src={spare.images?.[0] || "/images/products/weeder.webp"} alt={spare.name} loading="lazy" className="w-full h-full object-contain group-hover:scale-105 transition" />
                    </div>
                    <div className="text-[10px] uppercase font-bold text-lime-400 mb-1">{spare.category === "power-weeder-spare-parts" ? "OEM Spare Part" : "Attachment"}</div>
                    <h4 className="font-bold text-sm text-zinc-100 group-hover:text-lime-400 line-clamp-2 leading-tight">{spare.name}</h4>
                  </Link>
                  <div className="mt-4 pt-3 border-t border-zinc-800 flex items-center justify-between">
                    <span className="font-mono text-xs font-bold text-white">₹{spare.price.toLocaleString("en-IN")}</span>
                    <a
                      href={`https://api.whatsapp.com/send?phone=${COMPANY.whatsapp}&text=${encodeURIComponent(`Hello KrishiGears, I need the ${spare.name} compatible with ${product.name}. Please share availability.`)}&utm_source=krishigears_web&utm_medium=spares_crossell`}
                      target="_blank"
                      rel="noreferrer"
                      className="text-xs bg-zinc-800 hover:bg-lime-500 hover:text-black font-bold p-1.5 rounded text-zinc-300 transition"
                      title="Inquire via WhatsApp"
                    >
                      Order Spare →
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Applications + Benefits */}
        <div className="mt-16 grid md:grid-cols-2 gap-6">
          <div className="kg-card p-7">
            <div className="kg-eyebrow">Applications</div>
            <ul className="mt-4 space-y-3">
              {product.applications &&
                product.applications.map((a, i) => (
                  <li key={`app-${i}-${a.slice(0, 30)}`} className="flex items-start gap-2 text-zinc-200 text-sm">
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
                  <li key={`ben-${i}-${b.slice(0, 30)}`} className="flex items-start gap-2 text-zinc-200 text-sm">
                    <Check className="h-4 w-4 text-lime-500 mt-0.5 shrink-0" />
                    {b}
                  </li>
                ))}
            </ul>
          </div>
        </div>

        {/* Enhanced Trust Signals Bar */}
        <div className="mt-16 border-y border-zinc-800 py-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div className="flex flex-col items-center gap-2">
              <ShieldCheck className="h-8 w-8 text-lime-500" />
              <div className="text-sm font-bold text-white">Genuine Warranty</div>
              <div className="text-xs text-zinc-400">FMTTI Tested</div>
            </div>
            <div className="flex flex-col items-center gap-2">
              <Truck className="h-8 w-8 text-lime-500" />
              <div className="text-sm font-bold text-white">PAN India Delivery</div>
              <div className="text-xs text-zinc-400">Fast Dispatch</div>
            </div>
            <div className="flex flex-col items-center gap-2">
              <Award className="h-8 w-8 text-lime-500" />
              <div className="text-sm font-bold text-white">Authorized Dealer</div>
              <div className="text-xs text-zinc-400">Spares Guaranteed</div>
            </div>
            <div className="flex flex-col items-center gap-2">
              <Phone className="h-8 w-8 text-lime-500" />
              <div className="text-sm font-bold text-white">24x7 Support</div>
              <div className="text-xs text-zinc-400">Service Network</div>
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
                    href={`/products/${p.slug}`}
                    data-testid={`related-product-${p.slug}`}
                    className="group border border-zinc-800 bg-surface hover:border-lime-500/60 transition-all duration-300 overflow-hidden flex flex-col"
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
                      <h3 className="font-display font-black text-lg text-white group-hover:text-lime-500 transition mb-2 line-clamp-1">
                        {p.name}
                      </h3>
                      <div className="mt-auto text-xs text-zinc-400 font-mono">
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
          <p className="text-zinc-300 max-w-2xl mx-auto mb-6">
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
        <div className="flex items-center gap-2 text-xs text-zinc-400 mb-8">
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
          <div className="border border-zinc-800">
            <div className="grid grid-cols-1 md:grid-cols-2">
              {[1, 2, 3, 4, 5, 6].map((i) => (
                <div
                  key={i}
                  className={`p-5 border-b border-zinc-800 ${i % 2 === 0 ? "md:border-r" : ""}`}
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
