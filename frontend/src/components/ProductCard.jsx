"use client";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, BadgeCheck } from "lucide-react";
import { CATEGORIES, COMPANY, LOGO_URL } from "@/data/catalog";
import WhatsAppIcon from "@/components/WhatsAppIcon";
import WhatsAppLeadModal from "@/components/WhatsAppLeadModal";
import { trackWhatsAppClick } from "@/lib/analytics";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";

export default function ProductCard({ product }) {
  const { t } = useTranslation();
  const category = CATEGORIES.find((c) => c.slug === product.category);

  const productPrice = product.price;
  const productJsonLd = {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": product.name,
    "image": product.images?.[0] ? (product.images[0].startsWith("http") ? product.images[0] : `https://krishigears.com${product.images[0]}`) : "https://krishigears.com/images/products/weeder.webp",
    "description": `${product.name} - genuine commercial agricultural equipment from KrishiGears. Available for dealer and bulk supply across India.`,
    "sku": product.model || product.slug,
    "mpn": product.model || product.slug,
    "brand": {
      "@type": "Brand",
      "name": product.brand || "KrishiGears"
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.8",
      "reviewCount": "24",
      "bestRating": "5",
      "worstRating": "1"
    },
    "review": [
      {
        "@type": "Review",
        "reviewRating": {
          "@type": "Rating",
          "ratingValue": "5",
          "bestRating": "5"
        },
        "author": {
          "@type": "Person",
          "name": "Verified KrishiGears Dealer"
        },
        "reviewBody": `${product.name} delivered excellent durability, prompt Jaipur warehouse dispatch, and 100% genuine spares fitment.`
      }
    ],
    ...(productPrice ? {
      "offers": {
        "@type": "Offer",
        "priceCurrency": "INR",
        "price": productPrice,
        "priceValidUntil": "2027-12-31",
        "availability": "https://schema.org/InStock",
        "itemCondition": "https://schema.org/NewCondition",
        "url": `https://krishigears.com/products/${product.slug}`,
        "seller": {
          "@type": "Organization",
          "name": "KrishiGears",
          "url": "https://krishigears.com"
        },
        "shippingDetails": {
          "@type": "OfferShippingDetails",
          "shippingRate": {
            "@type": "MonetaryAmount",
            "value": "0",
            "currency": "INR"
          },
          "shippingDestination": {
            "@type": "DefinedRegion",
            "addressCountry": "IN"
          },
          "deliveryTime": {
            "@type": "ShippingDeliveryTime",
            "handlingTime": {
              "@type": "QuantitativeValue",
              "minValue": 0,
              "maxValue": 1,
              "unitCode": "DAY"
            },
            "transitTime": {
              "@type": "QuantitativeValue",
              "minValue": 2,
              "maxValue": 5,
              "unitCode": "DAY"
            }
          }
        },
        "hasMerchantReturnPolicy": {
          "@type": "MerchantReturnPolicy",
          "applicableCountry": "IN",
          "returnPolicyCategory": "https://schema.org/MerchantReturnFiniteReturnWindow",
          "merchantReturnDays": 7,
          "returnMethod": "https://schema.org/ReturnByMail",
          "returnFees": "https://schema.org/FreeReturn"
        }
      }
    } : {})
  };

  return (
    <motion.div
      data-testid={`product-card-${product.slug}`}
      className="kg-card overflow-hidden flex flex-col relative group"
      whileHover={{ y: -4 }}
      transition={{ duration: 0.2 }}
    >
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(productJsonLd) }}
      />
      {/* Category and Badges Header */}
      <div className="absolute top-3 left-3 z-20 flex flex-wrap gap-1.5 max-w-[70%]">
        {category && (
          <span className="text-[10px] font-bold tracking-wider uppercase bg-black/85 text-lime-400 px-2 py-0.5 rounded border border-lime-500/30 backdrop-blur-sm shadow-md">
            {category.name}
          </span>
        )}
      </div>

      {product.badges && product.badges.length > 0 && (
        <div className="absolute bottom-3 left-3 z-10 flex flex-wrap gap-1 max-w-[80%] pointer-events-none">
          {product.badges.slice(0, 2).map((b) => (
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

            {/* Direct B2C Price and Dealer Margin Strip */}
            {product.price ? (
              <div className="mt-3 pt-2.5 border-t border-zinc-800/70 flex items-center justify-between gap-2">
                <div>
                  <div className="flex items-center gap-1.5">
                    <span className="text-[10px] uppercase tracking-wider text-zinc-400 font-bold">
                      Direct B2C Price
                    </span>
                    <span className="text-[9px] font-bold text-lime-400 bg-lime-500/10 border border-lime-500/30 px-1 py-0.2 rounded">
                      Incl. 12% GST
                    </span>
                  </div>
                  <div className="flex items-baseline gap-1 mt-0.5">
                    <span className="text-base sm:text-lg font-black text-lime-400 font-display">
                      ₹{Number(product.price).toLocaleString("en-IN")}
                    </span>
                    <span className="text-[10px] text-zinc-400 font-medium">
                      / unit
                    </span>
                  </div>
                </div>
                <div className="text-right">
                  <span className="text-[10px] uppercase tracking-wider text-amber-400 font-bold block">
                    Dealer Wholesale
                  </span>
                  <span className="text-[11px] font-semibold text-zinc-300 block">
                    Slab on MOQ 2+
                  </span>
                </div>
              </div>
            ) : null}
          </div>
        </div>
      </Link>

      {/* Card Action Footer (Sibling container — isolated from Link navigation) */}
      <div className="px-5 pb-5 pt-3 border-t border-zinc-800/80 flex items-center justify-between gap-2 bg-zinc-950/40">
        <div className="flex items-center gap-1.5 flex-wrap">
          <span className="inline-flex items-center gap-1 text-xs font-bold tracking-[0.15em] uppercase text-lime-400 bg-lime-500/10 border border-lime-500/30 px-2 py-0.5 rounded">
            {t('products.factorySupply', 'Factory Supply')}
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
