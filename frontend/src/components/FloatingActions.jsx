import { Phone } from "lucide-react";
import { COMPANY } from "@/data/catalog";
import WhatsAppIcon from "@/components/WhatsAppIcon";

export default function FloatingActions() {
  const waLink = `https://wa.me/${COMPANY.whatsapp}?text=${encodeURIComponent("Hello KrishiGears, I am interested in your products.")}`;

  return (
    <>
      <a
        href={waLink}
        target="_blank"
        rel="noreferrer"
        data-testid="floating-whatsapp-btn"
        className="fixed bottom-6 right-6 z-40 h-14 w-14 grid place-items-center rounded-full bg-[#25D366] text-white shadow-2xl hover:scale-110 transition animate-pulse-lime"
        aria-label="WhatsApp Chat"
      >
        <WhatsAppIcon className="h-7 w-7" />
      </a>
      <a
        href={`tel:${COMPANY.phone.replace(/\s+/g, "")}`}
        data-testid="floating-call-btn"
        className="lg:hidden fixed bottom-6 left-6 z-40 h-14 w-14 grid place-items-center rounded-full bg-lime-500 text-black shadow-2xl hover:scale-110 transition"
        aria-label="Call KrishiGears"
      >
        <Phone className="h-6 w-6" />
      </a>
    </>
  );
}
