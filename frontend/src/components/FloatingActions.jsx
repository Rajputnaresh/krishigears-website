"use client";
import { Phone } from "lucide-react";
import { COMPANY } from "@/data/catalog";
import WhatsAppIcon from "@/components/WhatsAppIcon";
import { trackWhatsAppClick, trackPhoneClick } from "@/lib/analytics";

export default function FloatingActions() {
  const waLink = `https://wa.me/${COMPANY.whatsapp}?text=${encodeURIComponent("Hello KrishiGears, I am interested in your products.")}`;

  return (
    <>
      {/* Desktop floating WhatsApp */}
      <a
        href={waLink}
        target="_blank"
        rel="noreferrer"
        onClick={() => trackWhatsAppClick("floating_button")}
        data-testid="floating-whatsapp-btn"
        className="hidden md:grid fixed bottom-6 right-6 z-40 h-14 w-14 place-items-center rounded-full bg-whatsapp text-white shadow-2xl hover:scale-110 transition animate-pulse-lime"
        aria-label="WhatsApp Chat"
      >
        <WhatsAppIcon className="h-7 w-7" />
      </a>

      {/* Mobile docked bottom action bar */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 z-50 bg-black/95 backdrop-blur border-t border-zinc-800 p-2.5 flex items-center gap-2">
        <a
          href={`tel:${COMPANY.phone.replace(/\s+/g, "")}`}
          onClick={() => trackPhoneClick("floating_button")}
          data-testid="floating-call-btn"
          className="flex-1 flex items-center justify-center gap-2 py-3 bg-zinc-900 border border-zinc-700 text-zinc-100 font-bold text-xs rounded-md uppercase tracking-wider active:scale-95"
        >
          <Phone className="h-4 w-4 text-lime-400" />
          <span>Call Desk</span>
        </a>
        <a
          href={waLink}
          target="_blank"
          rel="noreferrer"
          onClick={() => trackWhatsAppClick("floating_button")}
          data-testid="floating-whatsapp-mobile-btn"
          className="flex-1 flex items-center justify-center gap-2 py-3 bg-emerald-600 hover:bg-emerald-500 text-white font-black text-xs rounded-md uppercase tracking-wider shadow-lg active:scale-95"
        >
          <WhatsAppIcon className="h-4 w-4 fill-white" />
          <span>WhatsApp Quote</span>
        </a>
      </div>
    </>
  );
}
