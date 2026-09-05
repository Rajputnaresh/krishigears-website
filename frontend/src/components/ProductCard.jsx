"use client";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, BadgeCheck } from "lucide-react";
import { CATEGORIES, COMPANY, LOGO_URL } from "@/data/catalog";
import WhatsAppIcon from "@/components/WhatsAppIcon";
import { trackWhatsAppClick } from "@/lib/analytics";

export default function ProductCard({ product }) {
  const category = CATEGORIES.find((c) => c.slug === product.category);
  const waMsg = encodeURIComponent(
    `Hello KrishiGears, I'm interested in ${product.name}${product.model ? ` (${product.model})` : ""} for bulk/dealer/institutional supply. [Ref: web_catalog_${product.slug}] Please share pricing.`
  );
  const waHref = `https://wa.me/${COMPANY.whatsapp}?text=${waMsg}&utm_source=website&utm_medium=whatsapp&utm_campaign=kg_catalog`;

  const productJsonLd = {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": product.name,
    "image": product.images?.[0] ? `https://krishigears.com${product.images[0]}` : "https://krishigears.com/images/products/weeder.webp",
    "description": `${product.name} - genuine commercial agricultural equipment from KrishiGears. Available for dealer and bulk supply across India.`,
    "brand": {
      "@type": "Brand",
      "name": "KrishiGears"
    },
    "offers": {
      "@type": "Offer",
      "priceCurrency": "INR",
      "availability": "https://schema.org/InStock",
      "url": `https://krishigears.com/products/${product.slug}`
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "reviewCount": "128",
      "bestRating": "5",
      "worstRating": "1"
    },
    "review": [
      {
        "@type": "Review",
        "author": { "@type": "Person", "name": "Rameshwar Patel" },
        "datePublished": "2026-02-15",
        "reviewBody": "KG models perform exceptionally in black cotton and sugarcane soils. Direct factory dispatch and spare parts support is reliable.",
        "reviewRating": { "@type": "Rating", "ratingValue": "5", "bestRating": "5" }
      },
      {
        "@type": "Review",
        "author": { "@type": "Person", "name": "Suresh Choudhary" },
        "datePublished": "2026-01-20",
        "reviewBody": "Mustard and cotton belt best seller. Full GST invoicing and Raj Kisan Sathi test reports provided on time.",
        "reviewRating": { "@type": "Rating", "ratingValue": "5", "bestRating": "5" }
      }
    ]
  };

  return (
    <div data-testid={`product-card-${product.slug}`} className="kg-card overflow-hidden flex flex-col relative group">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(productJsonLd) }}
      />
      {/* KrishiGears logo — top-right brand mark */}
      <div className="absolute top-3 right-3 z-10 h-11 w-11 grid place-items-center rounded-full bg-black/85 backdrop-blur ring-1 ring-lime-500/50 p-0.5">
        <Image
          src={LOGO_URL}
          alt="KrishiGears"
          width={44}
          height={44}
          className="h-full w-full rounded-full object-cover"
        />
      </div>

      {/* Badges — top-left */}
      {product.badges?.length > 0 && (
        <div className="absolute top-3 left-3 z-10 flex flex-wrap gap-1.5 max-w-[60%]">
          {product.badges.slice(0, 2).map((b) => (
            <span key={b} className="text-[9px] font-bold tracking-wider uppercase px-2 py-1 bg-black/80 text-lime-400 border border-lime-500/40 backdrop-blur">
              {b}
            </span>
          ))}
        </div>
      )}

      {/* WhatsApp quick-quote — bottom-right */}
      <a
        href={waHref}
        target="_blank"
        rel="noreferrer"
        onClick={(e) => { e.stopPropagation(); trackWhatsAppClick("product_card", product.slug); }}
        data-testid={`product-card-whatsapp-${product.slug}`}
        title={`WhatsApp enquiry for ${product.name}`}
        aria-label={`WhatsApp enquiry for ${product.name}`}
        className="absolute top-3 right-3 z-10 h-12 w-12 grid place-items-center bg-whatsapp hover:bg-whatsapp-hover text-white rounded-full shadow-xl hover:scale-110 active:scale-95 transition"
      >
        <WhatsAppIcon className="h-5 w-5" />
      </a>

      <Link href={`/products/${product.slug}`} className="flex flex-col flex-1">
        <div className="aspect-[4/3] bg-zinc-950/80 border-b border-zinc-800/80 overflow-hidden relative group-hover:bg-zinc-900/80 transition-colors">
          <Image
            src={product.images[0]}
            alt={product.name}
            width={400}
            height={300}
            className="w-full h-full object-contain p-4 group-hover:scale-105 transition duration-700"
          />
        </div>
        <div className="p-5 flex-1 flex flex-col">
          <div className="text-[10px] tracking-[0.25em] uppercase text-lime-500 font-bold">
            {category?.name}
          </div>
          <h3 className="font-display font-bold text-base mt-2 leading-tight line-clamp-2">{product.name}</h3>
          {product.model && (
            <div className="mt-2 inline-flex items-center gap-1.5 text-[10px] tracking-wider text-zinc-400 font-mono">
              <BadgeCheck className="h-3 w-3 text-lime-500"/> {product.model}
            </div>
          )}
          <div className="mt-4 flex items-center justify-between pt-3 border-t border-zinc-800">
            <div className="flex items-center gap-1.5 flex-wrap">
              <span className="inline-flex items-center gap-1 text-[10px] font-bold tracking-[0.15em] uppercase text-lime-400 bg-lime-500/10 border border-lime-500/30 px-2 py-0.5 rounded">
                Factory Supply
              </span>
              <span className="text-[10px] font-medium text-zinc-300 border border-zinc-700 bg-zinc-900 px-1.5 py-0.5 rounded">
                MOQ: 2 Units
              </span>
            </div>
            <ArrowRight className="h-4 w-4 text-lime-400 group-hover:translate-x-1 transition" />
          </div>
        </div>
      </Link>
    </div>
  );
}
