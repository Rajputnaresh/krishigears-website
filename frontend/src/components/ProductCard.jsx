import { Link } from "react-router-dom";
import { ArrowRight, MessageCircle, BadgeCheck } from "lucide-react";
import { CATEGORIES, COMPANY } from "@/data/catalog";

export default function ProductCard({ product }) {
  const category = CATEGORIES.find((c) => c.slug === product.category);
  const waMsg = encodeURIComponent(
    `Hello KrishiGears, I'm interested in ${product.name}${product.model ? ` (${product.model})` : ""}. Please share price & availability.`
  );
  const waHref = `https://wa.me/${COMPANY.whatsapp}?text=${waMsg}`;

  return (
    <div data-testid={`product-card-${product.slug}`} className="kg-card overflow-hidden flex flex-col relative group">
      <a
        href={waHref}
        target="_blank"
        rel="noreferrer"
        onClick={(e) => e.stopPropagation()}
        data-testid={`product-card-whatsapp-${product.slug}`}
        title={`WhatsApp enquiry for ${product.name}`}
        aria-label={`WhatsApp enquiry for ${product.name}`}
        className="absolute top-3 right-3 z-10 h-10 w-10 grid place-items-center bg-[#25D366] hover:bg-[#1ebe57] text-white rounded-full shadow-lg hover:scale-110 transition"
      >
        <MessageCircle className="h-5 w-5 fill-white" />
      </a>

      {product.badges?.length > 0 && (
        <div className="absolute top-3 left-3 z-10 flex flex-wrap gap-1.5 max-w-[60%]">
          {product.badges.slice(0, 2).map((b) => (
            <span key={b} className="text-[9px] font-bold tracking-wider uppercase px-2 py-1 bg-black/80 text-lime-400 border border-lime-500/40 backdrop-blur">
              {b}
            </span>
          ))}
        </div>
      )}

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
            <span className="text-zinc-500 text-xs uppercase tracking-wider">Request Price</span>
            <ArrowRight className="h-4 w-4 text-lime-500" />
          </div>
        </div>
      </Link>
    </div>
  );
}
