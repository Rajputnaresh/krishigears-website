"use client";
import { useState, useEffect } from "react";
import { Phone, ArrowUp } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { COMPANY } from "@/data/catalog";
import WhatsAppIcon from "@/components/WhatsAppIcon";
import WhatsAppLeadModal from "@/components/WhatsAppLeadModal";
import { trackPhoneClick } from "@/lib/analytics";

export default function FloatingActions() {
  const [showTop, setShowTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowTop(window.scrollY > 400);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      {/* Scroll to top button with Apple spring scale */}
      <AnimatePresence>
        {showTop && (
          <motion.button
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0, opacity: 0 }}
            transition={{ type: "spring", stiffness: 400, damping: 25 }}
            whileTap={{ scale: 0.92 }}
            onClick={scrollToTop}
            aria-label="Scroll back to top"
            className="fixed bottom-24 md:bottom-24 right-5 z-40 h-10 w-10 grid place-items-center rounded-full bg-zinc-900/90 border border-zinc-700 text-lime-400 hover:text-white hover:bg-zinc-800 shadow-xl cursor-pointer"
          >
            <ArrowUp className="h-4 w-4" />
          </motion.button>
        )}
      </AnimatePresence>

      {/* Desktop floating WhatsApp with Interactive Pre-flight Modal & Spring feedback */}
      <WhatsAppLeadModal
        source="floating_desktop"
        defaultProduct="Power Weeder & Spare Parts"
        trigger={
          <motion.button
            data-testid="floating-whatsapp-btn"
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.94 }}
            transition={{ type: "spring", stiffness: 450, damping: 25 }}
            className="hidden md:grid fixed bottom-6 right-6 z-40 h-14 w-14 place-items-center rounded-full bg-whatsapp text-white shadow-2xl animate-pulse-lime cursor-pointer"
            aria-label="Instant WhatsApp Quote Desk"
          >
            <WhatsAppIcon className="h-7 w-7" />
          </motion.button>
        }
      />

      {/* Mobile docked bottom action bar */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 z-50 bg-black/85 backdrop-blur-xl backdrop-saturate-[180%] border-t border-zinc-800/80 p-2.5 flex items-center gap-2">
        <a
          href={`tel:${COMPANY.phone.replace(/\s+/g, "")}`}
          onClick={() => trackPhoneClick("floating_button")}
          data-testid="floating-call-btn"
          className="flex-1 flex items-center justify-center gap-2 py-3.5 min-h-[48px] bg-zinc-900 border border-zinc-700 text-zinc-100 font-bold text-xs rounded-md uppercase tracking-wider active:scale-95"
        >
          <Phone className="h-4 w-4 text-lime-400" />
          <span>Call Desk</span>
        </a>
        <WhatsAppLeadModal
          source="floating_mobile"
          defaultProduct="Power Weeder & Spare Parts"
          trigger={
            <button
              data-testid="floating-whatsapp-mobile-btn"
              className="flex-1 flex items-center justify-center gap-2 py-3.5 min-h-[48px] bg-emerald-600 hover:bg-emerald-500 text-white font-black text-xs rounded-md uppercase tracking-wider shadow-lg active:scale-95 cursor-pointer"
            >
              <WhatsAppIcon className="h-4 w-4 fill-white" />
              <span>WhatsApp Quote</span>
            </button>
          }
        />
      </div>
    </>
  );
}
