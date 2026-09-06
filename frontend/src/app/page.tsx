"use client";

import Link from "next/link";
import {
  ShieldCheck, Truck, BadgeCheck, Wrench, Shield, Zap, Headphones,
  Handshake, ArrowRight, MapPin, Star, Quote, Play, ChevronRight, Search, X, FileText
} from "lucide-react";
import { CATEGORIES, COMPANY, HERO_BG, INDIA_MAP, ABSTRACT_TERRAIN, FARMER_FIELD, TESTIMONIALS, TRUST_BADGES, FARMINGTOOLS_URL, PRODUCTS } from "@/data/catalog";
import locationsData from "@/data/locations.json";
import ProductCard from "@/components/ProductCard";
import WhatsAppIcon from "@/components/WhatsAppIcon";
import EnquiryDialog from "@/components/EnquiryDialog";
import { useEffect, useState, useMemo } from "react";
import { useTranslation } from "react-i18next";
import { apiClient, formatApiError } from "@/lib/api";
import { toast } from "sonner";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";

const ICONS: Record<string, any> = { 
  "shield-check": ShieldCheck, 
  truck: Truck, 
  "badge-check": BadgeCheck, 
  wrench: Wrench, 
  shield: Shield, 
  zap: Zap, 
  headphones: Headphones, 
  handshake: Handshake 
};

export default function Home() {
  const { t } = useTranslation();
  const featured = CATEGORIES.filter((c) => c.featured);
  const [featuredProducts, setFeaturedProducts] = useState<any[]>(PRODUCTS.slice(0, 6));

  useEffect(() => {
    Promise.all([
      apiClient.get("/products?featured=true"),
      apiClient.get("/products"),
    ])
      .then(([feat, all]) => {
        const featList = Array.isArray(feat.data) ? feat.data : [];
        const allList = Array.isArray(all.data) ? all.data : [];
        if (featList.length > 0 || allList.length > 0) {
          const ids = new Set(featList.map((p: any) => p.slug));
          const fillers = allList.filter((p: any) => !ids.has(p.slug));
          setFeaturedProducts([...featList, ...fillers].slice(0, 6));
        }
      })
      .catch(() => {
        setFeaturedProducts(PRODUCTS.slice(0, 6));
      });
  }, []);

  const [videos, setVideos] = useState<any[]>([]);
  const [reviews, setReviews] = useState<any[]>([]);

  useEffect(() => {
    apiClient.get("/videos").then((r) => setVideos(Array.isArray(r.data) ? r.data : [])).catch(() => setVideos([]));
    apiClient.get("/reviews").then((r) => setReviews(Array.isArray(r.data) ? r.data : [])).catch(() => setReviews([]));
  }, []);

  const organizationJsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": "https://krishigears.com/#organization",
        "name": "KrishiGears",
        "legalName": "KrishiGears",
        "url": "https://krishigears.com",
        "logo": "https://krishigears.com/logo512.png",
        "taxID": "08EQLPD7160R1Z2",
        "email": "sales@krishigears.com",
        "telephone": "+916006078815",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "202, Mahima Shubh Nilay, Jaisinghpura",
          "addressLocality": "Jaipur",
          "addressRegion": "Rajasthan",
          "postalCode": "302026",
          "addressCountry": "IN"
        },
        "sameAs": [
          "https://farmingtools.in"
        ]
      },
      {
        "@type": "WebSite",
        "@id": "https://krishigears.com/#website",
        "url": "https://krishigears.com",
        "name": "KrishiGears",
        "publisher": {
          "@id": "https://krishigears.com/#organization"
        }
      }
    ]
  };

  return (
    <div className="bg-background text-foreground pb-24 md:pb-12">
      {/* ========== HERO ========== */}
      <section data-testid="hero-section" className="relative min-h-[88vh] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={HERO_BG}
            alt="KrishiGears Farm Machinery"
            fetchPriority="high"
            decoding="async"
            width={1280}
            height={896}
            className="w-full h-full object-cover opacity-45"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/70 to-black"></div>
          <div className="absolute inset-0 bg-grid-pattern bg-grid opacity-30"></div>
        </div>

        <div className="relative max-w-[1400px] mx-auto px-4 sm:px-6 md:px-12 py-10 sm:py-16 lg:py-24 grid lg:grid-cols-12 gap-8 lg:gap-10 items-center">
          <div className="lg:col-span-8 animate-fade-up">
            <div className="inline-flex items-center gap-2 border border-lime-500/40 bg-lime-500/10 px-2.5 py-1 sm:px-3 sm:py-1.5 text-[10px] sm:text-xs tracking-[0.15em] sm:tracking-[0.2em] uppercase text-lime-400 font-bold rounded-sm">
              <span className="h-1.5 w-1.5 bg-lime-500 rounded-full animate-pulse"></span> {t('hero.badge', 'Premium Agricultural Machinery · GST Registered')}
            </div>
            <h1 className="kg-h1 mt-4 sm:mt-6 text-balance text-zinc-50">
              {t('hero.titleLine1', 'For the')} <span className="text-lime-400">{t('hero.farmers', 'Farmers,')}</span><br/>
              {t('hero.titleLine2', 'With the')} <span className="text-lime-400">{t('hero.farmer', 'Farmer,')}</span><br/>
              {t('hero.titleLine3', 'To the')} <span className="text-lime-400">{t('hero.farmer', 'Farmer.')}</span>
              <span className="block text-zinc-200 mt-1 sm:mt-2 text-xl sm:text-3xl lg:text-4xl tracking-[0.2em] sm:tracking-[0.25em]">{t('hero.hamesha', 'HAMESHA.')}</span>
            </h1>
            <h2 className="sr-only">B2B Agricultural Machinery Supply, Dealer Network & OEM Distribution in India</h2>
            <p className="mt-4 sm:mt-6 text-zinc-100 text-sm sm:text-base md:text-lg max-w-2xl leading-relaxed font-normal">
              {t('hero.subtitle', 'सीधे फैक्ट्री से कृषि मशीनरी और स्पेयर पार्ट्स सप्लाई। Direct factory dispatch for dealers, FPOs, contractors, and machinery showrooms across India.')}
            </p>
            {/* Prioritized CTA Hierarchy: 1 Primary High-Contrast Action + 1 Secondary Action */}
            <div className="mt-10 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <a
                href={`https://wa.me/${COMPANY.whatsapp}?text=${encodeURIComponent("नमस्ते KrishiGears, मुझे कृषि मशीनरी और डीलरशिप की पूरी जानकारी चाहिए।")}&utm_source=website&utm_medium=whatsapp&utm_campaign=kg_hero_primary`}
                target="_blank"
                rel="noopener noreferrer"
                data-testid="hero-primary-whatsapp-btn"
                className="group inline-flex items-center justify-center gap-3 bg-lime-500 hover:bg-lime-400 text-black font-extrabold px-8 py-4 min-h-[52px] rounded-md transition shadow-xl shadow-lime-500/25 active:scale-95 text-base border-2 border-lime-400"
              >
                <WhatsAppIcon className="h-5 w-5 text-black fill-black" />
                <span>{t('hero.whatsappCta', 'WhatsApp Wholesale Quote')}</span>
                <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition" />
              </a>
              <Link
                href="/become-a-dealer"
                data-testid="hero-dealer-btn"
                className="inline-flex items-center justify-center gap-2 text-zinc-100 hover:text-lime-400 text-sm font-semibold transition border border-zinc-700 bg-zinc-900/90 hover:border-lime-500/60 px-6 py-4 min-h-[52px] rounded-md shadow-md"
              >
                {t('hero.dealerCta', 'Become a Dealer')}
              </Link>
            </div>

            {/* Quick Secondary Utility Links */}
            <div className="mt-4 flex flex-wrap items-center gap-3 text-xs">
              <Link
                href="/products"
                data-testid="hero-explore-products"
                className="inline-flex items-center gap-1.5 text-zinc-300 hover:text-white transition px-3 py-1.5 rounded-full border border-zinc-800 bg-zinc-950/60 hover:border-zinc-700"
              >
                <span>{t('hero.exploreProducts', 'Explore 19 Categories →')}</span>
              </Link>
              <EnquiryDialog
                product="Wholesale B2B Machinery Catalog 2026"
                trigger={
                  <button
                    data-testid="hero-catalog-modal-btn"
                    className="inline-flex items-center gap-1.5 text-zinc-300 hover:text-lime-400 transition px-3 py-1.5 rounded-full border border-zinc-800 bg-zinc-950/60 hover:border-zinc-700"
                  >
                    <FileText className="h-3.5 w-3.5 text-lime-400" />
                    <span>{t('hero.downloadCatalog', 'Download Catalog (PDF)')}</span>
                  </button>
                }
              />
            </div>

            {/* Clear retail handoff note */}
            <div className="mt-5 sm:mt-6 inline-flex flex-wrap items-center gap-1.5 sm:gap-2 text-[11px] sm:text-xs text-zinc-300 bg-zinc-950/80 border border-zinc-800 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full shadow-inner">
              <span className="text-zinc-400">{t('hero.retailPrompt', '1 मशीन व्यक्तिगत किसान के लिए? (Retail for 1 Machine):')}</span>
              <a
                href={FARMINGTOOLS_URL}
                target="_blank"
                rel="noopener noreferrer"
                data-testid="hero-buy-online"
                className="text-lime-400 hover:text-lime-300 font-bold inline-flex items-center gap-1 underline underline-offset-2"
              >
                {t('hero.retailLink', 'FarmingTools.in पर खरीदें')} <ArrowRight className="h-3 w-3" />
              </a>
            </div>

            {/* Quick stats - High contrast sunlight ready */}
            <div className="mt-8 sm:mt-12 md:mt-16 grid grid-cols-3 gap-3 sm:gap-6 max-w-2xl">
              {[
                { v: "7+", l: t('hero.statsWeeders', 'Power Weeder Models') },
                { v: "PAN India", l: t('hero.statsNetwork', 'Supply Network') },
                { v: "100%", l: t('hero.statsSpares', 'Genuine OEM Parts') },
              ].map((s) => (
                <div key={s.l} className="border-l-2 border-lime-500 pl-2.5 sm:pl-4 bg-zinc-950/40 py-1.5 sm:py-2">
                  <div className="font-display font-black text-xl sm:text-3xl text-zinc-50">{s.v}</div>
                  <div className="text-[10px] sm:text-xs uppercase tracking-wider text-zinc-300 mt-0.5 sm:mt-1 font-medium">{s.l}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom marquee */}
        <div className="hidden sm:block absolute bottom-0 left-0 right-0 border-t border-zinc-800 bg-black/80 backdrop-blur-md py-3 overflow-hidden">
          <div className="flex gap-12 whitespace-nowrap animate-marquee hover:[animation-play-state:paused]">
            {[...TRUST_BADGES, ...TRUST_BADGES].map((b, i) => {
              const Icon = ICONS[b.icon] || ShieldCheck;
              return (
                <div key={`marquee-${i}-${b.icon}`} className="flex items-center gap-2 text-zinc-200 text-sm">
                  <Icon className="h-4 w-4 text-lime-500"/> <span className="tracking-wider uppercase text-xs font-semibold">{b.label}</span>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ========== CATEGORY GRID (Bento) ========== */}
      <section data-testid="categories-section" className="kg-section">
        <div className="max-w-[1400px] mx-auto">
          <div className="flex items-end justify-between flex-wrap gap-4 mb-10">
            <div>
              <div className="kg-eyebrow">{t('categories.eyebrow', 'Our Range')}</div>
              <h2 className="kg-h2 mt-3 text-zinc-100">
                {t('categories.title', 'Built for every')} <span className="text-lime-500">{t('categories.titleHighlight', 'Indian farm.')}</span>
              </h2>
            </div>
            <Link href="/products" data-testid="all-products-link" className="text-sm text-lime-400 hover:text-lime-300 flex items-center gap-1 font-bold">
              {t('categories.viewAll', 'View all products')} <ChevronRight className="h-4 w-4" />
            </Link>
          </div>

          {/* Bento grid */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-3 sm:gap-4">
            {/* Featured large cards */}
            {featured.map((c, idx) => {
              const Icon = c.icon;
              const big = idx === 0;
              return (
                <Link
                  key={c.slug}
                  href={`/products/category/${c.slug}`}
                  data-testid={`cat-card-${c.slug}`}
                  className={`relative group overflow-hidden border border-zinc-700 bg-surface hover:border-lime-500/60 transition-all duration-500 rounded-lg ${big ? "md:col-span-7 md:row-span-2 min-h-[360px] sm:min-h-[480px]" : "md:col-span-5 min-h-[200px] sm:min-h-[230px]"}`}
                >
                  <img src={c.image} alt={c.name} loading="lazy" className="absolute inset-0 w-full h-full object-cover opacity-35 group-hover:opacity-55 group-hover:scale-105 transition-all duration-700" />
                  <div className="absolute inset-0 bg-gradient-to-tr from-black via-black/80 to-transparent"></div>
                  <div className="relative h-full p-5 sm:p-7 flex flex-col justify-between">
                    <div className="h-10 w-10 sm:h-12 sm:w-12 grid place-items-center bg-lime-500/10 border border-lime-500/40 text-lime-500 rounded-md">
                      <Icon className="h-5 w-5 sm:h-6 sm:w-6" />
                    </div>
                    <div>
                      <div className="text-[10px] sm:text-xs tracking-[0.2em] sm:tracking-[0.25em] uppercase text-lime-400 font-bold">Category</div>
                      <h3 className="font-display font-black text-xl sm:text-2xl md:text-3xl mt-1.5 sm:mt-2 text-zinc-50">{c.name}</h3>
                      <p className="text-zinc-200 text-xs sm:text-sm mt-1.5 sm:mt-2 max-w-md leading-relaxed">{c.short}</p>
                      <div className="mt-3.5 sm:mt-5 inline-flex items-center gap-1.5 sm:gap-2 text-xs sm:text-sm font-bold text-zinc-100 group-hover:text-lime-400 transition">
                        {t('categories.browseRange', 'Browse Range')} <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition" />
                      </div>
                    </div>
                  </div>
                </Link>
              );
            })}

            {/* Rest as compact tiles */}
            {CATEGORIES.filter((c) => !c.featured).map((c) => {
              const Icon = c.icon;
              return (
                <Link
                  key={c.slug}
                  href={`/products/category/${c.slug}`}
                  data-testid={`cat-tile-${c.slug}`}
                  className="md:col-span-3 p-4 sm:p-5 border border-zinc-700 bg-surface-dark hover:bg-surface hover:border-lime-500/40 hover:-translate-y-1 transition-all rounded-lg"
                >
                  <Icon className="h-5 w-5 text-lime-500 mb-2 sm:mb-3" />
                  <div className="font-display font-bold text-sm sm:text-base leading-tight text-zinc-100">{c.name}</div>
                  <div className="mt-1.5 sm:mt-2 text-[11px] sm:text-xs text-lime-400 font-semibold">{t('categories.viewRange', 'View Range →')}</div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* ========== TRUST SIGNALS BAR ========== */}
      <section className="bg-surface border-y border-zinc-800 py-6 sm:py-8">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-8">
          <div className="flex flex-col items-center text-center gap-2 sm:gap-3 p-2">
            <ShieldCheck className="h-6 w-6 sm:h-8 sm:w-8 text-lime-500" />
            <div>
              <div className="font-bold text-xs sm:text-sm text-zinc-100">FMTTI Tested</div>
              <div className="text-[10px] sm:text-[11px] text-zinc-300 uppercase tracking-wider font-semibold">{t('trust.tested', 'Quality Assured')}</div>
            </div>
          </div>
          <div className="flex flex-col items-center text-center gap-2 sm:gap-3 p-2">
            <Truck className="h-6 w-6 sm:h-8 sm:w-8 text-lime-500" />
            <div>
              <div className="font-bold text-xs sm:text-sm text-zinc-100">PAN India Delivery</div>
              <div className="text-[10px] sm:text-[11px] text-zinc-300 uppercase tracking-wider font-semibold">{t('trust.delivery', 'Fast Logistics')}</div>
            </div>
          </div>
          <div className="flex flex-col items-center text-center gap-2 sm:gap-3 p-2">
            <BadgeCheck className="h-6 w-6 sm:h-8 sm:w-8 text-lime-500" />
            <div>
              <div className="font-bold text-xs sm:text-sm text-zinc-100">Genuine OEM</div>
              <div className="text-[10px] sm:text-[11px] text-zinc-300 uppercase tracking-wider font-semibold">{t('trust.spares', 'Original Spares')}</div>
            </div>
          </div>
          <div className="flex flex-col items-center text-center gap-2 sm:gap-3 p-2">
            <Headphones className="h-6 w-6 sm:h-8 sm:w-8 text-lime-500" />
            <div>
              <div className="font-bold text-xs sm:text-sm text-zinc-100">24x7 Support</div>
              <div className="text-[10px] sm:text-[11px] text-zinc-300 uppercase tracking-wider font-semibold">{t('trust.support', 'Expert Help')}</div>
            </div>
          </div>
        </div>
      </section>

      {/* ========== FEATURED PRODUCTS ========== */}
      <section data-testid="featured-products-section" className="kg-section bg-surface-darker border-y border-zinc-900">
        <div className="max-w-[1400px] mx-auto">
          <div className="flex items-end justify-between flex-wrap gap-4 mb-10">
            <div>
              <div className="kg-eyebrow">{t('products.eyebrow', 'Products We Supply')}</div>
              <h2 className="kg-h2 mt-3 text-zinc-100">{t('products.title', 'Featured B2B equipment.')}</h2>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {featuredProducts.map((p) => (
              <ProductCard key={p.slug} product={p} />
            ))}
          </div>
        </div>
      </section>

      {/* ========== ABOUT KRISHIGEARS ========== */}
      <section data-testid="about-section" className="kg-section">
        <div className="max-w-[1400px] mx-auto grid lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6 relative">
            <div className="aspect-[4/5] overflow-hidden border border-zinc-800 relative">
              <img src={FARMER_FIELD} alt="Indian farmer" loading="lazy" className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent"></div>
            </div>
            <div className="absolute -bottom-6 -right-6 hidden md:block bg-lime-500 text-black dark:text-black p-6 max-w-xs lime-glow">
              <div className="font-display font-black text-4xl">10K+</div>
              <div className="text-sm font-bold uppercase tracking-wider mt-1">Farmers Served Across India</div>
            </div>
          </div>
          <div className="lg:col-span-6">
            <div className="kg-eyebrow">{t('about.eyebrow', 'About KrishiGears')}</div>
            <h2 className="kg-h2 mt-3 text-balance text-zinc-100">
              {t('about.title', 'Built by farmers.')} <span className="text-lime-500">{t('about.titleHighlight', 'For farmers.')}</span>
            </h2>
            <p className="text-zinc-200 mt-6 leading-relaxed">
              {t('about.p1', "KrishiGears is India's trusted B2B agricultural machinery brand for dealers, distributors, FPOs, contractors, institutions and OEM partners. Our range is built for rugged field use and backed by genuine warranty support.")}
            </p>
            <p className="text-zinc-200 mt-4 leading-relaxed">
              {t('about.p2', 'We support serious procurement with GST invoicing, bulk dispatch coordination, genuine spare parts and dealer enablement. Retail orders are fulfilled through FarmingTools.in.')}
            </p>
            <div className="mt-8 grid grid-cols-2 gap-4">
              {[
                { v: "GST", l: t('about.gst', 'Registered Business') },
                { v: "PAN India", l: t('about.deliverySupport', 'Delivery & Support') },
                { v: "FMTTI", l: t('about.testedEquipment', 'Tested Equipment') },
                { v: "Genuine", l: t('about.sparesOnly', 'Spare Parts Only') },
              ].map((b) => (
                <div key={b.l} className="border border-zinc-700/80 p-4 bg-surface-dark">
                  <div className="text-lime-400 font-display font-black text-lg">{b.v}</div>
                  <div className="text-xs uppercase tracking-wider text-zinc-200 mt-1 font-semibold">{b.l}</div>
                </div>
              ))}
            </div>
            <Link href="/about" data-testid="about-learn-more" className="mt-8 inline-flex items-center gap-2 text-lime-400 font-bold hover:gap-3 transition-all">
              {t('about.learnMore', 'Learn more about us')} <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* ========== DISTRICT DEALER & SERVICE LOCATOR ========== */}
      <DistrictLocator />

      {/* ========== VIDEO GALLERY ========== */}
      <VideoGallery videos={videos} />

      {/* ========== TESTIMONIALS ========== */}
      <TestimonialsSection reviews={reviews} />

      {/* ========== DEALER OPPORTUNITY ========== */}
      <section data-testid="dealer-cta-section" className="kg-section relative overflow-hidden">
        <div className="absolute inset-0">
          <img src={INDIA_MAP} alt="" loading="lazy" className="w-full h-full object-cover opacity-30" />
          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-transparent"></div>
        </div>
        <div className="max-w-[1400px] mx-auto relative grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="kg-eyebrow">{t('dealerCta.eyebrow', 'Dealer Opportunity')}</div>
            <h2 className="kg-h2 mt-3 text-balance text-zinc-100">
              {t('dealerCta.title', 'Become a KrishiGears dealer')} <span className="text-lime-500">{t('dealerCta.titleHighlight', 'in your district.')}</span>
            </h2>
            <p className="text-zinc-200 mt-6 max-w-xl leading-relaxed">
              {t('dealerCta.subtitle', "Strong margins, dedicated dealer support, fast dispatch and authorized warranty — partner with India's most trusted agricultural machinery distributor and grow with us.")}
            </p>
            <ul className="mt-6 space-y-2.5">
              {[
                t('dealerCta.benefit1', 'Attractive dealer margins'),
                t('dealerCta.benefit2', 'Co-branded marketing support'),
                t('dealerCta.benefit3', 'Free dealer training'),
                t('dealerCta.benefit4', 'Priority spare parts supply')
              ].map((b) => (
                <li key={b} className="flex items-center gap-3 text-zinc-100 text-sm font-medium">
                  <div className="h-1.5 w-1.5 bg-lime-500 rounded-full"></div>{b}
                </li>
              ))}
            </ul>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link href="/become-a-dealer" data-testid="dealer-cta-apply" className="bg-lime-500 hover:bg-lime-400 text-black dark:text-black font-bold px-7 py-4 rounded-md transition inline-flex items-center gap-2">
                {t('dealerCta.applyBtn', 'Apply as Dealer')} <ArrowRight className="h-4 w-4" />
              </Link>
              <Link href="/dealer-network" data-testid="dealer-cta-network" className="border border-zinc-600 hover:border-lime-500 hover:text-lime-400 text-zinc-100 px-7 py-4 font-bold rounded-md transition inline-flex items-center gap-2">
                {t('dealerCta.networkBtn', 'View Network')}
              </Link>
            </div>
          </div>
          <div className="hidden lg:block">
            <div className="grid grid-cols-2 gap-4">
              {[
                { v: "28+", l: "States Covered" },
                { v: "500+", l: "Dealer Network" },
                { v: "1000+", l: "Pin Codes" },
                { v: "48h", l: "Fast Dispatch" },
              ].map((s) => (
                <div key={s.l} className="border border-lime-500/30 bg-black/80 backdrop-blur p-6">
                  <div className="font-display font-black text-4xl text-lime-400">{s.v}</div>
                  <div className="text-xs uppercase tracking-[0.15em] text-zinc-300 mt-2 font-semibold">{s.l}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ========== CONTACT FORM ========== */}
      <ContactStrip />
    </div>
  );
}

function ContactStrip() {
  const { t } = useTranslation();
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);
  const [form, setForm] = useState({ name: "", phone: "", category: "Power Weeders", message: "" });
  const update = (k: string) => (e: any) => setForm((f) => ({ ...f, [k]: e.target.value }));
  const submit = async (e: any) => {
    e.preventDefault();
    setErrorMsg(null);
    const cleanPhone = form.phone.replace(/\D/g, "");
    if (!form.name.trim()) {
      toast.error("Please enter your name");
      return;
    }
    if (cleanPhone.length < 10) {
      toast.error("Please enter a valid 10-digit mobile number");
      return;
    }
    setLoading(true);
    try {
      await apiClient.post("/leads/contact", {
        name: form.name,
        phone: form.phone,
        subject: `Quick Inquiry: ${form.category}`,
        message: form.message.trim() || `Inquiry for ${form.category}`
      });
      toast.success("Inquiry received! Our team will call or WhatsApp you shortly.");
      setForm({ name: "", phone: "", category: "Power Weeders", message: "" });
    } catch (err) {
      setErrorMsg(formatApiError(err));
    } finally {
      setLoading(false);
    }
  };

  return (
    <section data-testid="home-contact-section" className="kg-section bg-surface-darker border-t border-zinc-800">
      <div className="max-w-[1400px] mx-auto grid lg:grid-cols-2 gap-12 items-center">
        <div>
          <div className="kg-eyebrow">{t('contact.eyebrow', 'Quick Inquiry & WhatsApp Quote')}</div>
          <h2 className="kg-h2 mt-3 text-balance text-zinc-100">
            {t('contact.title', 'Get pricing & specs')} <span className="text-lime-500">{t('contact.titleHighlight', 'on WhatsApp.')}</span>
          </h2>
          <p className="text-zinc-200 mt-6 leading-relaxed max-w-md text-base">
            {t('contact.subtitle', 'Looking for wholesale supply, dealership rates, or machine fitment details? Enter your details for a quick quote within minutes.')}
          </p>
          <div className="mt-8 space-y-4">
            <div className="flex items-start gap-4">
              <MapPin className="h-5 w-5 text-lime-500 mt-0.5 shrink-0" />
              <div>
                <div className="text-xs uppercase tracking-wider text-zinc-300 font-semibold">{t('contact.headOffice', 'Head Office · PAN India Supply')}</div>
                <div className="text-sm text-zinc-100 mt-0.5">{COMPANY.address}</div>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <Headphones className="h-5 w-5 text-lime-500 mt-0.5 shrink-0" />
              <div>
                <div className="text-xs uppercase tracking-wider text-zinc-300 font-semibold">{t('contact.desk', 'Instant Phone / WhatsApp Desk')}</div>
                <div className="text-sm text-zinc-100 mt-0.5">{COMPANY.phone}</div>
              </div>
            </div>
          </div>
        </div>

        <form onSubmit={submit} className="border border-zinc-700 bg-surface-dark p-6 md:p-8 space-y-4 rounded-xl shadow-2xl">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div>
              <Label htmlFor="contact-name" className="text-xs uppercase tracking-wider text-zinc-200 font-semibold">{t('contact.nameLabel', 'Your Name*')}</Label>
              <Input id="contact-name" name="name" placeholder={t('contact.namePlaceholder', 'e.g. Ramesh Patel')} required minLength={2} data-testid="home-contact-name" value={form.name} onChange={update("name")} className="bg-zinc-950 border-zinc-700 text-zinc-100 mt-1.5" />
            </div>
            <div>
              <Label htmlFor="contact-phone" className="text-xs uppercase tracking-wider text-zinc-200 font-semibold">{t('contact.phoneLabel', 'Mobile Number (WhatsApp)*')}</Label>
              <Input id="contact-phone" type="tel" name="phone" placeholder={t('contact.phonePlaceholder', '10-digit number')} required pattern="[0-9\+\-\s]{10,15}" data-testid="home-contact-phone" value={form.phone} onChange={update("phone")} className="bg-zinc-950 border-zinc-700 text-zinc-100 mt-1.5" />
            </div>
          </div>

          <div>
            <Label htmlFor="contact-category" className="text-xs uppercase tracking-wider text-zinc-200 font-semibold">{t('contact.categoryLabel', 'Machinery / Parts Needed')}</Label>
            <select
              id="contact-category"
              value={form.category}
              onChange={update("category")}
              className="w-full mt-1.5 px-3 py-2.5 bg-zinc-950 border border-zinc-700 rounded-md text-sm text-zinc-100 focus:outline-none focus:border-lime-500"
            >
              {CATEGORIES.map((c) => (
                <option key={c.slug} value={c.name} className="bg-zinc-950 text-zinc-100">{c.name}</option>
              ))}
            </select>
          </div>

          <div>
            <Label htmlFor="contact-message" className="text-xs uppercase tracking-wider text-zinc-200 font-semibold">{t('contact.messageLabel', 'District / Details (Optional)')}</Label>
            <Textarea id="contact-message" name="message" placeholder={t('contact.messagePlaceholder', 'e.g. Need 5 units in Kolhapur, Maharashtra')} data-testid="home-contact-message" rows={2} value={form.message} onChange={update("message")} className="bg-zinc-950 border-zinc-700 text-zinc-100 mt-1.5" />
          </div>

          {errorMsg && (
            <div className="bg-red-500/10 border border-red-500/50 text-red-400 p-3 rounded-md flex items-center justify-between text-xs">
              <span>{errorMsg}</span>
              <button type="button" onClick={submit} className="font-bold underline">Retry</button>
            </div>
          )}

          <div className="space-y-2 pt-1">
            <button
              type="submit"
              disabled={loading}
              data-testid="home-contact-submit"
              className="w-full min-h-[48px] bg-lime-500 hover:bg-lime-400 text-black font-bold py-3 rounded-md transition shadow-lg shadow-lime-500/20 disabled:opacity-50 text-sm tracking-wide active:scale-[0.99]"
            >
              {loading ? t('contact.submitting', 'Sending...') : t('contact.submitBtn', 'Request Price & Specs')}
            </button>
            <div className="relative flex py-1 items-center">
              <div className="flex-grow border-t border-zinc-800"></div>
              <span className="flex-shrink mx-3 text-[10px] uppercase font-bold text-zinc-400 tracking-wider">{t('contact.orWhatsapp', 'Or on WhatsApp')}</span>
              <div className="flex-grow border-t border-zinc-800"></div>
            </div>
            <a
              href={`https://wa.me/${COMPANY.whatsapp}?text=${encodeURIComponent("नमस्ते KrishiGears, मुझे कृषि मशीनरी और स्पेयर पार्ट्स की थोक कीमत / डीलरशिप जानकारी चाहिए।")}&utm_source=website&utm_medium=whatsapp&utm_campaign=kg_catalog`}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="1-Tap WhatsApp Quotation Desk"
              onClick={() => trackWhatsAppClick("contact_strip_quick")}
              className="w-full min-h-[48px] border border-zinc-700 bg-zinc-900/90 hover:border-[#25D366] text-[#25D366] hover:bg-[#25D366]/10 font-bold py-3 rounded-md transition flex items-center justify-center gap-2 text-sm tracking-wide"
            >
              <WhatsAppIcon className="h-4 w-4" /> {t('contact.whatsappDirect', '1-Tap WhatsApp Quotation Desk')}
            </a>
          </div>
        </form>
      </div>
    </section>
  );
}

function getYoutubeEmbed(url: string) {
  if (!url) return null;
  const m = url.match(/(?:youtube\.com\/(?:[^/]+\/.+\/|(?:v|e(?:mbed)?)\/|.*[?&]v=)|youtu\.be\/)([^"&?/\s]{11})/);
  return m ? `https://www.youtube.com/embed/${m[1]}` : null;
}

function VideoGallery({ videos }: { videos: any[] }) {
  if (!videos || videos.length === 0) return null;
  return (
    <section data-testid="video-section" className="kg-section">
      <div className="max-w-[1400px] mx-auto">
        <div className="kg-eyebrow">In Action</div>
        <h2 className="kg-h2 mt-3 text-zinc-100">Watch our equipment <span className="text-lime-500">at work.</span></h2>
        <div className="mt-10 grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {videos.slice(0, 6).map((v) => <VideoCard key={v.id} video={v} />)}
        </div>
      </div>
    </section>
  );
}

function DistrictLocator() {
  const { t } = useTranslation();
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedState, setSelectedState] = useState<string>("All");

  const locationEntries = useMemo(() => {
    return Object.entries(locationsData as Record<string, any>);
  }, []);

  const states = useMemo(() => {
    const s = new Set<string>();
    locationEntries.forEach(([_, data]) => {
      if (data.state) s.add(data.state);
    });
    return Array.from(s).sort();
  }, [locationEntries]);

  const filteredDistricts = useMemo(() => {
    const q = searchTerm.toLowerCase().trim();
    return locationEntries.filter(([districtName, data]) => {
      const matchState = selectedState === "All" || data.state === selectedState;
      if (!matchState) return false;
      if (!q) return data.major_district;
      return (
        districtName.toLowerCase().includes(q) ||
        (data.state && data.state.toLowerCase().includes(q)) ||
        (data.key_crops && data.key_crops.some((c: string) => c.toLowerCase().includes(q)))
      );
    }).slice(0, 8);
  }, [locationEntries, searchTerm, selectedState]);

  return (
    <section data-testid="district-locator-section" className="kg-section bg-surface-dark border-t border-zinc-800">
      <div className="max-w-[1400px] mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-8">
          <div>
            <div className="kg-eyebrow">{t('locator.eyebrow', 'Availability & Network')}</div>
            <h2 className="kg-h2 mt-3 text-zinc-100">
              {t('locator.title', 'Find Machinery & Dealers')} <span className="text-lime-500">{t('locator.titleHighlight', 'in your District.')}</span>
            </h2>
            <p className="text-zinc-300 text-sm mt-2 max-w-xl">
              {t('locator.subtitle', 'Check localized equipment fitment, crops supported, and fast delivery timelines for your farming hub.')}
            </p>
          </div>
          <div className="flex flex-wrap sm:flex-nowrap gap-3 w-full md:w-auto">
            <div className="relative flex-1 sm:w-64">
              <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-zinc-400" />
              <input
                type="text"
                placeholder={t('locator.searchPlaceholder', 'Search district or crop...')}
                aria-label={t('locator.searchPlaceholder', 'Search district or crop...')}
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2.5 bg-zinc-950 border border-zinc-700 rounded-md text-sm text-zinc-100 placeholder-zinc-500 focus:outline-none focus:border-lime-500"
              />
              {searchTerm && (
                <button
                  onClick={() => setSearchTerm("")}
                  aria-label="Clear search"
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-zinc-400 hover:text-zinc-100"
                >
                  <X className="h-4 w-4" />
                </button>
              )}
            </div>
            <select
              value={selectedState}
              aria-label="Filter by State or Zone"
              onChange={(e) => setSelectedState(e.target.value)}
              className="px-4 py-2.5 bg-zinc-950 border border-zinc-700 hover:border-lime-500/50 rounded-md text-sm font-semibold text-zinc-100 focus:outline-none focus:border-lime-500 transition-colors"
            >
              <option value="All">{t('locator.allStates', '🔍 All India States')}</option>
              <optgroup label="Active B2B Agri Zones">
                {states.map((st) => (
                  <option key={st} value={st} className="bg-zinc-950 text-zinc-100">
                    {st}
                  </option>
                ))}
              </optgroup>
            </select>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {filteredDistricts.map(([districtName, data]) => {
            const districtSlug = districtName.toLowerCase().replace(/ /g, "-").replace(/[()]/g, "");
            return (
              <div
                key={districtName}
                className="p-5 border border-zinc-800 bg-zinc-950 hover:border-lime-500/50 rounded-lg flex flex-col justify-between transition-all duration-300 group"
              >
                <div>
                  <div className="flex items-center justify-between">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-lime-400">
                      {data.state}
                    </span>
                    <span className="inline-flex items-center px-1.5 py-0.5 rounded text-[10px] font-semibold bg-lime-500/10 text-lime-400 border border-lime-500/20">
                      {t('locator.activeHub', 'Active Hub')}
                    </span>
                  </div>
                  <h3 className="font-display font-bold text-lg text-zinc-100 mt-2 group-hover:text-lime-400 transition-colors">
                    {districtName}
                  </h3>
                  <div className="mt-2 text-xs text-zinc-300 line-clamp-2">
                    {data.farming_profile || data.soil_type}
                  </div>
                  {data.key_crops && (
                    <div className="mt-3 flex flex-wrap gap-1.5">
                      {data.key_crops.slice(0, 3).map((crop: string) => (
                        <span
                          key={crop}
                          className="px-2 py-0.5 text-[11px] font-medium bg-zinc-900 border border-zinc-700 text-zinc-200 rounded"
                        >
                          {crop}
                        </span>
                      ))}
                    </div>
                  )}
                </div>

                <div className="mt-5 pt-3 border-t border-zinc-800 flex items-center justify-between">
                  <Link
                    href={`/power-weeders-in-${districtSlug}`}
                    className="text-xs font-bold text-lime-400 hover:text-lime-300 inline-flex items-center gap-1"
                  >
                    {t('locator.viewMachinery', 'View Machinery')} <ChevronRight className="h-3.5 w-3.5" />
                  </Link>
                  <Link
                    href={`/dealer/${data.state ? data.state.toLowerCase().replace(/ /g, "-") : "all"}`}
                    className="text-xs font-semibold text-zinc-300 hover:text-lime-400 transition-colors"
                  >
                    {t('locator.dealerInfo', 'Dealer Info →')}
                  </Link>
                </div>
              </div>
            );
          })}
        </div>

        {filteredDistricts.length === 0 && (
          <div className="text-center py-12 border border-zinc-800 rounded-lg bg-zinc-950">
            <p className="text-zinc-300 text-sm">{t('locator.noResults', 'No districts matched your search. KrishiGears delivers PAN India.')}</p>
            <Link
              href="/dealer-network"
              className="mt-3 inline-block text-xs text-lime-400 font-bold hover:underline"
            >
              {t('locator.exploreStates', 'Explore Full State Dealer Directory →')}
            </Link>
          </div>
        )}
      </div>
    </section>
  );
}

function VideoCard({ video }: { video: any }) {
  const youtubeEmbed = getYoutubeEmbed(video.url);
  const [playing, setPlaying] = useState(false);

  if (youtubeEmbed && playing) {
    return (
      <div className="relative aspect-video overflow-hidden border border-zinc-800 bg-black rounded-lg">
        <button
          onClick={() => setPlaying(false)}
          className="absolute top-2 right-2 z-10 p-1.5 bg-black/80 hover:bg-black text-zinc-200 hover:text-white rounded-full border border-zinc-700 transition"
          aria-label="Close video"
        >
          <X className="h-4 w-4" />
        </button>
        <iframe
          src={`${youtubeEmbed}?autoplay=1`}
          title={video.title}
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className="w-full h-full"
        />
      </div>
    );
  }

  const thumb = video.thumbnail || (youtubeEmbed ? `https://img.youtube.com/vi/${youtubeEmbed.split("/embed/")[1]}/hqdefault.jpg` : "");
  const onClick = (e: any) => {
    if (youtubeEmbed) { e.preventDefault(); setPlaying(true); }
  };

  const videoJsonLd = {
    "@context": "https://schema.org",
    "@type": "VideoObject",
    "name": video.title,
    "description": `${video.title} - KrishiGears agricultural machinery demonstration.`,
    "thumbnailUrl": [thumb || "https://krishigears.com/images/products/weeder.webp"],
    "uploadDate": "2026-01-15T08:00:00+05:30",
    "contentUrl": video.url,
    "embedUrl": youtubeEmbed || video.url
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(videoJsonLd) }}
      />
      <a
        href={video.url}
        target={youtubeEmbed ? "_self" : "_blank"}
        rel="noreferrer"
        onClick={onClick}
        data-testid={`home-video-${video.id}`}
        className="relative aspect-video overflow-hidden border border-zinc-700 group cursor-pointer block bg-zinc-900 rounded-lg"
      >
        {thumb && <img src={thumb} alt={video.title} loading="lazy" className="w-full h-full object-cover opacity-75 group-hover:opacity-90 transition"/>}
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent"/>
        <div className="absolute inset-0 grid place-items-center">
          <div className="h-16 w-16 grid place-items-center bg-lime-500 text-black dark:text-black rounded-full group-hover:scale-110 transition shadow-lg shadow-lime-500/20">
            <Play className="h-6 w-6 fill-black ml-1" />
          </div>
        </div>
        <div className="absolute bottom-3 left-3 right-3">
          <div className="text-[10px] tracking-[0.25em] uppercase text-lime-400 font-bold">{video.source}</div>
          <div className="text-zinc-50 font-bold text-sm leading-tight mt-1 line-clamp-2">{video.title}</div>
        </div>
      </a>
    </>
  );
}

function TestimonialsSection({ reviews }: { reviews: any[] }) {
  const list = reviews && reviews.length > 0 ? reviews : TESTIMONIALS;
  return (
    <section data-testid="testimonials-section" className="kg-section bg-surface-darker border-y border-zinc-900">
      <div className="max-w-[1400px] mx-auto">
        <div className="kg-eyebrow">Voices from the field</div>
        <h2 className="kg-h2 mt-3 max-w-2xl text-zinc-100">What our <span className="text-lime-500">farmers & dealers</span> say.</h2>
        <div className="mt-10 grid md:grid-cols-2 lg:grid-cols-4 gap-5">
          {list.slice(0, 8).map((t: any, i: number) => (
            <div key={t.id || `t-${i}`} data-testid={`testimonial-${i}`} className="kg-card p-6 border-zinc-700">
              {t.photo_url && (
                <div className="h-14 w-14 overflow-hidden border border-zinc-700 mb-4 bg-white rounded-full">
                  <img src={t.photo_url} alt={t.name} loading="lazy" className="w-full h-full object-cover"/>
                </div>
              )}
              {!t.photo_url && <Quote className="h-6 w-6 text-lime-400 mb-4" />}
              <p className="text-zinc-200 text-sm leading-relaxed">{t.text}</p>
              <div className="mt-5 flex items-center gap-1">
                {Array.from({ length: t.rating || 5 }).map((_, j) => (
                  <Star key={`star-${j}`} className="h-3.5 w-3.5 fill-lime-400 text-lime-400" />
                ))}
              </div>
              <div className="mt-4 pt-4 border-t border-zinc-700">
                <div className="font-bold text-sm text-zinc-100">{t.name}</div>
                <div className="text-xs text-zinc-300 font-medium">{[t.role, t.location].filter(Boolean).join(" · ")}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
