import { Link } from "react-router-dom";
import { ArrowRight, BadgeCheck } from "lucide-react";
import { CATEGORIES, COMPANY, LOGO_URL } from "@/data/catalog";
import WhatsAppIcon from "@/components/WhatsAppIcon";
import { trackWhatsAppClick } from "@/lib/analytics";

export default function ProductCard({ product }) {
  const category = CATEGORIES.find((c) => c.slug === product.category);
  const waMsg = encodeURIComponent(
    `Hello KrishiGears, I'm interested in ${product.name}${product.model ? ` (${product.model})` : ""}. Please share price & availability.`
  );
  const waHref = `https://wa.me/${COMPANY.whatsapp}?text=${waMsg}`;

  return (
    <div data-testid={`product-card-${product.slug}`} className="kg-card overflow-hidden flex flex-col relative group">
      {/* KrishiGears logo — top-right brand mark */}
      <div className="absolute top-3 right-3 z-10 h-11 w-11 grid place-items-center rounded-full bg-black/85 backdrop-blur ring-1 ring-lime-500/50 p-0.5">
        <img src={LOGO_URL} alt="KrishiGears" className="h-full w-full rounded-full object-cover" />
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
        className="absolute bottom-[110px] right-3 z-10 h-11 w-11 grid place-items-center bg-[#25D366] hover:bg-[#1ebe57] text-white rounded-full shadow-xl hover:scale-110 transition"
      >
        <WhatsAppIcon className="h-5 w-5" />
      </a>

      <Link to={`/products/${product.slug}`} className="flex flex-col flex-1">
        <div className="aspect-[4/3] bg-white overflow-hidden">
          <img
            src={product.images[0]}
            alt={product.name}
            loading="lazy"
            className="w-full h-full object-contain p-3 group-hover:scale-105 transition duration-700"
          />
        </div>
        <div className="p-5 flex-1 flex flex-col border-t border-zinc-800">
          <div className="text-[10px] tracking-[0.25em] uppercase text-lime-500 font-bold">
            {category?.name}
          </div>
          <h3 className="font-display font-bold text-base mt-2 leading-tight line-clamp-2">{product.name}</h3>
          {product.model && (
            <div className="mt-2 inline-flex items-center gap-1.5 text-[10px] tracking-wider text-zinc-500 font-mono">
              <BadgeCheck className="h-3 w-3 text-lime-500"/> {product.model}
            </div>
          )}
          <div className="mt-4 flex items-center justify-between pt-3 border-t border-zinc-900">
            <span className="inline-flex items-center gap-1.5 text-[10px] font-bold tracking-[0.2em] uppercase text-lime-400 bg-lime-500/10 border border-lime-500/30 px-2.5 py-1">
              Price on Request
            </span>
            <ArrowRight className="h-4 w-4 text-lime-500" />
          </div>
        </div>
      </Link>
    </div>
  );
}
