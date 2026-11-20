"use client";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { CATEGORIES } from "@/data/catalog";
import WhatsAppIcon from "@/components/WhatsAppIcon";
import WhatsAppLeadModal from "@/components/WhatsAppLeadModal";
import { useTranslation } from "react-i18next";
import { productCopyItems } from "@/lib/product-specifications.mjs";
import { motion } from "framer-motion";

export default function ProductCard({ product }) {
  const { t } = useTranslation();
  const category = CATEGORIES.find((c) => c.slug === product.category);

  const badges = productCopyItems(product.badges);

  return (
    <motion.div
      data-testid={`product-card-${product.slug}`}
      className="kg-card overflow-hidden flex flex-col relative group"
      whileHover={{ y: -4 }}
      transition={{ duration: 0.2 }}
    >
      {/* Category and Badges Header */}
      <div className="absolute top-3 left-3 z-20 flex flex-wrap gap-1.5 max-w-[70%]">
        {category && (
          <span className="text-[10px] font-bold tracking-wider uppercase bg-black/85 text-lime-400 px-2 py-0.5 rounded border border-lime-500/30 backdrop-blur-sm shadow-md">
            {category.name}
          </span>
        )}
      </div>

      {badges.length > 0 && (
        <div className="absolute bottom-3 left-3 z-10 flex flex-wrap gap-1 max-w-[80%] pointer-events-none">
          {badges.slice(0, 2).map((b) => (
            <span
              key={b}
              className="text-[9px] font-bold bg-zinc-950/90 text-zinc-300 border border-zinc-800 px-1.5 py-0.5 rounded backdrop-blur-sm"
            >
              {b}
            </span>
          ))}
        </div>
      )}

      {/* WhatsApp quick-quote top-right float button (with committed preflight intake) */}
      <div className="absolute top-3 right-3 z-20">
        <WhatsAppLeadModal
          source="product_card"
          defaultProduct={product.name}
          trigger={
            <button
              type="button"
              data-testid={`product-card-whatsapp-${product.slug}`}
              title={`WhatsApp enquiry for ${product.name}`}
              aria-label={`WhatsApp enquiry for ${product.name}`}
              className="h-12 w-12 min-h-[48px] min-w-[48px] grid place-items-center bg-whatsapp hover:bg-whatsapp-hover text-white rounded-full shadow-xl hover:scale-110 active:scale-95 transition cursor-pointer"
            >
              <WhatsAppIcon className="h-5 w-5" />
            </button>
          }
        />
      </div>

      {/* Primary Product Card Link (navigates to PDP) */}
      <Link
        href={`/products/${product.slug}`}
        className="flex flex-col flex-1 focus:outline-none focus:ring-2 focus:ring-lime-500 rounded-t-lg"
      >
        <div className="aspect-[4/3] bg-zinc-900/40 border-b border-zinc-800/80 overflow-hidden relative group-hover:bg-zinc-850/60 transition-colors">
          <div className="w-full h-full p-3 flex items-center justify-center">
            <div className="w-full h-full rounded-md bg-zinc-950/70 p-2 flex items-center justify-center border border-zinc-800/40">
              <Image
                src={product.images[0]}
                alt={product.name}
                width={320}
                height={240}
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                className="max-h-full max-w-full object-contain group-hover:scale-105 transition-transform duration-300"
                loading="lazy"
              />
            </div>
          </div>
        </div>

        <div className="p-5 flex-1 flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between gap-2 mb-1.5">
              <span className="text-xs font-mono font-bold text-lime-400 bg-lime-950/40 border border-lime-800/50 px-1.5 py-0.5 rounded">
                {product.model || product.slug.toUpperCase()}
              </span>
              {product.power && (
                <span className="text-xs font-semibold text-zinc-300 border border-zinc-800 bg-zinc-900 px-2 py-0.5 rounded">
                  {product.power}
                </span>
              )}
            </div>

            <h3 className="font-display font-bold text-base sm:text-lg text-white group-hover:text-lime-400 transition-colors line-clamp-2">
              {product.name}
            </h3>

            {/* Key Specs Pills */}
            <div className="mt-3 flex flex-wrap gap-1.5">
              {product.engine && (
                <span className="text-[11px] font-medium text-zinc-300 bg-zinc-900/80 border border-zinc-800 px-2 py-0.5 rounded">
                  {product.engine}
                </span>
              )}
              {product.drive && (
                <span className="text-[11px] font-medium text-zinc-300 bg-zinc-900/80 border border-zinc-800 px-2 py-0.5 rounded">
                  {product.drive}
                </span>
              )}
              {product.gear && (
                <span className="text-[11px] font-medium text-zinc-300 bg-zinc-900/80 border border-zinc-800 px-2 py-0.5 rounded">
                  {product.gear}
                </span>
              )}
              {product.tillingWidth && (
                <span className="text-[11px] font-medium text-zinc-300 bg-zinc-900/80 border border-zinc-800 px-2 py-0.5 rounded">
                  Width: {product.tillingWidth}
                </span>
              )}
            </div>

            <div className="mt-3 pt-2.5 border-t border-zinc-800/70 text-sm font-semibold text-lime-400">Wholesale quotation on request</div>
          </div>
        </div>
      </Link>

      {/* Card Action Footer (Sibling container — isolated from Link navigation) */}
      <div className="px-5 pb-5 pt-3 border-t border-zinc-800/80 flex items-center justify-between gap-2 bg-zinc-950/40">
        <div className="flex items-center gap-1.5 flex-wrap">
          <span className="inline-flex items-center gap-1 text-xs font-bold tracking-[0.15em] uppercase text-lime-400 bg-lime-500/10 border border-lime-500/30 px-2 py-0.5 rounded">
            {product.brand || "Catalogue model"}
          </span>
          <span className="text-xs font-semibold text-zinc-300 border border-zinc-700 bg-zinc-900 px-1.5 py-0.5 rounded">
            {t('products.moq', 'MOQ: 2 Units')}
          </span>
        </div>

        <Link
          href={`/products/${product.slug}`}
          data-testid={`product-card-cta-${product.slug}`}
          aria-label={`View full specifications and quotation for ${product.name}`}
          className="text-xs font-bold text-lime-400 hover:text-lime-300 inline-flex items-center gap-1 group-hover:translate-x-0.5 transition-transform min-h-[36px] py-1 pl-2"
        >
          <span>{t('products.specsCta', 'Specs & Quote')}</span>
          <ArrowRight className="h-3.5 w-3.5" />
        </Link>
      </div>
    </motion.div>
  );
}
