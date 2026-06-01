import { Link } from "react-router-dom";
import { ArrowRight, MessageCircle } from "lucide-react";
import { CATEGORIES, COMPANY } from "@/data/catalog";

export default function ProductCard({ product }) {
  const category = CATEGORIES.find((c) => c.slug === product.category);
  const waMsg = encodeURIComponent(
    `Hello KrishiGears, I'm interested in ${product.name}. Please share price & availability.`
  );
  const waHref = `https://wa.me/${COMPANY.whatsapp}?text=${waMsg}`;

  return (
    <div data-testid={`product-card-${product.slug}`} className="kg-card overflow-hidden flex flex-col relative group">
      {/* WhatsApp overlay */}
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

      <Link to={`/products/${product.slug}`} className="flex flex-col flex-1">
        <div className="aspect-[4/3] bg-zinc-900 overflow-hidden">
          <img
            src={product.images[0]}
            alt={product.name}
            className="w-full h-full object-cover group-hover:scale-105 transition duration-700"
          />
        </div>
        <div className="p-5 flex-1 flex flex-col">
          <div className="text-[10px] tracking-[0.25em] uppercase text-lime-500 font-bold">
            {category?.name}
          </div>
          <h3 className="font-display font-bold text-lg mt-2">{product.name}</h3>
          <div className="mt-4 flex items-center justify-between">
            <span className="text-zinc-500 text-sm">Request Price</span>
            <ArrowRight className="h-4 w-4 text-lime-500" />
          </div>
        </div>
      </Link>
    </div>
  );
}
