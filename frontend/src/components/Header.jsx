"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter, usePathname } from "next/navigation";
import { Menu, X, Phone, ChevronDown, Globe, Headphones, Sun } from "lucide-react";
import { useTranslation } from "react-i18next";
import WhatsAppIcon from "@/components/WhatsAppIcon";
import { LOGO_URL, COMPANY, CATEGORIES } from "@/data/catalog";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import {
  DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger
} from "@/components/ui/dropdown-menu";
import { trackWhatsAppClick, trackPhoneClick } from "@/lib/analytics";

const NAV = [
  { to: "/", labelKey: "nav.home" },
  { to: "/about", labelKey: "nav.aboutUs" },
  { to: "/dealer-network", labelKey: "nav.dealerNetwork" },
  { to: "/locations", labelKey: "nav.locations", fallback: "Locations" },
  { to: "/blog", labelKey: "nav.blog" },
  { to: "/warranty-and-support", labelKey: "nav.warranty" },
  { to: "/contact", labelKey: "nav.contactUs" },
];

export default function Header() {
  const { t, i18n } = useTranslation();
  const navigate = useRouter();
  const location = { pathname: usePathname(), search: "" };
  const [open, setOpen] = useState(false);
  const [sunlight, setSunlight] = useState(false);

  useEffect(() => {
    const isSun = localStorage.getItem("kg_sunlight_mode") === "true";
    if (isSun) {
      setSunlight(true);
      document.documentElement.classList.add("sunlight");
    }
  }, []);

  const toggleSunlight = () => {
    const next = !sunlight;
    setSunlight(next);
    if (next) {
      document.documentElement.classList.add("sunlight");
      localStorage.setItem("kg_sunlight_mode", "true");
    } else {
      document.documentElement.classList.remove("sunlight");
      localStorage.setItem("kg_sunlight_mode", "false");
    }
  };

  const switchLanguage = (langCode) => {
    const currentPath = location.pathname;
    const parts = currentPath.split('/').filter(Boolean);
    
    if (parts.length > 0 && ['hi', 'mr'].includes(parts[0])) {
      if (langCode === 'en') {
         navigate('/' + parts.slice(1).join('/') + location.search);
      } else {
         navigate('/' + langCode + '/' + parts.slice(1).join('/') + location.search);
      }
    } else {
      if (langCode !== 'en') {
         navigate('/' + langCode + currentPath + location.search);
      }
    }
  };


  return (
    <header
      data-testid="site-header"
      className="fixed top-0 inset-x-0 z-50 bg-black/85 backdrop-blur-xl border-b border-zinc-800"
    >
      {/* Global B2B Trust Badge Bar */}
      <div className="bg-zinc-950 border-b border-zinc-800/80 py-1 px-4 text-center text-[11px] md:text-xs text-zinc-300 font-medium tracking-wide flex items-center justify-center gap-2 md:gap-4 overflow-x-auto whitespace-nowrap">
        <span className="inline-flex items-center gap-1.5 text-lime-400 font-semibold">
          <span className="w-1.5 h-1.5 rounded-full bg-lime-400 animate-pulse" />
          GSTIN: <span className="font-mono text-zinc-100">{COMPANY.gst}</span>
        </span>
        <span className="text-zinc-600 hidden sm:inline">|</span>
        <span className="text-zinc-200">FMTTI / SRFMTTI Tested Machinery</span>
        <span className="text-zinc-600 hidden sm:inline">|</span>
        <span className="text-zinc-300 hidden md:inline">Factory Dispatch 24–48h PAN India</span>
      </div>

      <div className="max-w-[1400px] mx-auto px-4 md:px-8 h-20 flex items-center justify-between gap-6">
        {/* Logo */}
        <Link href="/" data-testid="header-logo-link" className="flex items-center gap-3 group">
          <img src={LOGO_URL} alt="KrishiGears" className="h-12 w-12 rounded-full ring-1 ring-lime-500/40 group-hover:ring-lime-400 transition" />
          <div className="leading-tight hidden sm:block">
            <div className="font-display font-black text-lg tracking-tight text-white">
              KRISHI<span className="text-lime-500">GEARS</span>
            </div>
            <div className="text-[10px] tracking-[0.25em] text-zinc-400 uppercase">Farming Tools</div>
          </div>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden lg:flex items-center gap-1">
          {NAV.slice(0, 2).map((item) => (
            <Link
              key={item.to}
              href={item.to}
              data-testid={`nav-${item.labelKey.split('.')[1].toLowerCase().replace(/\s+/g, "-")}`}
              className="px-4 py-2 text-sm font-medium transition text-zinc-300 hover:text-white"
            >
              {t(item.labelKey)}
            </Link>
          ))}

          <DropdownMenu>
            <DropdownMenuTrigger
              data-testid="nav-products-trigger"
              className="px-4 py-2 text-sm font-medium text-zinc-300 hover:text-white flex items-center gap-1 outline-none"
            >
              {t('nav.products', 'Products')} <ChevronDown className="h-4 w-4 text-lime-400" />
            </DropdownMenuTrigger>
            <DropdownMenuContent className="bg-zinc-950 border-zinc-800 w-80 max-h-[70vh] overflow-y-auto text-zinc-200">
              <DropdownMenuItem asChild>
                <Link href="/products" className="font-bold text-lime-400 hover:text-lime-300" data-testid="nav-all-products">View All Categories →</Link>
              </DropdownMenuItem>
              <div className="h-px bg-zinc-800 my-1" />
              {CATEGORIES.map((c) => (
                <DropdownMenuItem key={c.slug} asChild>
                  <Link
                    href={`/products/category/${c.slug}`}
                    data-testid={`nav-cat-${c.slug}`}
                    className="text-sm text-zinc-300 hover:text-lime-400"
                  >
                    {c.name}
                  </Link>
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>

          {NAV.slice(2).map((item) => (
            <Link
              key={item.to}
              href={item.to}
              data-testid={`nav-${item.labelKey.split('.')[1].toLowerCase().replace(/\s+/g, "-").replace(/&/g, "and")}`}
              className="px-4 py-2 text-sm font-medium transition text-zinc-300 hover:text-white"
            >
              {t(item.labelKey, item.fallback || item.labelKey)}
            </Link>
          ))}
        </nav>

        {/* Desktop CTA & Utilities */}
        <div className="hidden lg:flex items-center gap-3">
          {/* Quick Direct Call Affordance */}
          <a
            href={`tel:${COMPANY.phone.replace(/\s+/g, "")}`}
            onClick={() => trackPhoneClick("header_desktop")}
            className="flex items-center gap-1.5 px-3 py-2 text-xs font-semibold text-zinc-300 hover:text-white transition rounded-md border border-zinc-800 hover:border-zinc-700 bg-zinc-950/40"
            title="Direct Machinery Support Desk"
          >
            <Phone className="h-3.5 w-3.5 text-lime-400" />
            <span className="font-mono">{COMPANY.phone}</span>
          </a>

          {/* Quick Utility Menu (Language & Outdoor Sunlight Mode) */}
          <DropdownMenu>
            <DropdownMenuTrigger
              aria-label="Language & Display Options"
              className="px-2.5 py-2 text-xs font-medium text-zinc-400 hover:text-white flex items-center gap-1.5 rounded-md border border-zinc-800 hover:border-zinc-700 bg-zinc-950/40 outline-none transition"
            >
              <Globe className="h-3.5 w-3.5 text-lime-400" />
              <span>{(i18n.language || "en").toUpperCase()}</span>
              <ChevronDown className="h-3 w-3 text-zinc-500" />
            </DropdownMenuTrigger>
            <DropdownMenuContent className="bg-zinc-950 border-zinc-800 text-zinc-200 w-44">
              <div className="px-2 py-1.5 text-[10px] uppercase font-bold text-zinc-400 tracking-wider">
                Language / भाषा
              </div>
              <DropdownMenuItem onClick={() => switchLanguage('en')} className="cursor-pointer">
                English (EN)
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => switchLanguage('hi')} className="cursor-pointer">
                हिंदी (HI)
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => switchLanguage('mr')} className="cursor-pointer">
                मराठी (MR)
              </DropdownMenuItem>
              <div className="h-px bg-zinc-800 my-1" />
              <DropdownMenuItem
                onClick={toggleSunlight}
                className="flex items-center gap-2 cursor-pointer text-amber-300 hover:text-amber-200"
              >
                <Sun className="h-4 w-4 text-amber-400" />
                <span>{sunlight ? "Dark Mode ON" : "धूप मोड (Outdoor)"}</span>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          {/* Primary Action 1: WhatsApp Quick Quote */}
          <a
            href={`https://wa.me/${COMPANY.whatsapp}?utm_source=website&utm_medium=whatsapp&utm_campaign=kg_catalog`}
            target="_blank"
            rel="noreferrer"
            aria-label="WhatsApp Quick Quote"
            onClick={() => trackWhatsAppClick("header_desktop")}
            className="px-4 py-2.5 bg-whatsapp hover:bg-whatsapp-hover text-white font-bold text-xs rounded-md transition inline-flex items-center gap-2 shadow-md shadow-green-600/20 active:scale-95"
          >
            <WhatsAppIcon className="h-4 w-4" />
            <span>WhatsApp Quote</span>
          </a>

          {/* Primary Action 2: Become a Dealer */}
          <Link
            href="/become-a-dealer"
            data-testid="header-become-dealer-btn"
            className="px-4 py-2.5 bg-lime-500 hover:bg-lime-400 text-black font-extrabold text-xs rounded-md transition inline-flex items-center gap-1.5 shadow-lg shadow-lime-500/20 active:scale-95 border border-lime-400"
          >
            <span>Become a Dealer</span>
          </Link>
        </div>

        {/* Mobile */}
        <Sheet open={open} onOpenChange={setOpen}>
          <SheetTrigger asChild>
            <button data-testid="mobile-menu-trigger" aria-label="Open menu" className="lg:hidden p-3 text-white">
              <Menu className="h-6 w-6" />
            </button>
          </SheetTrigger>
          <SheetContent side="right" className="bg-zinc-950 border-zinc-800 text-white w-[85vw] sm:w-96 p-0 overflow-y-auto">
            <div className="p-6 border-b border-zinc-800 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <img src={LOGO_URL} alt="KrishiGears" className="h-10 w-10 rounded-full ring-1 ring-lime-500/40" />
                <div className="font-display font-black text-white">KRISHI<span className="text-lime-500">GEARS</span></div>
              </div>
              <div className="flex items-center gap-2">
                <button onClick={() => setOpen(false)} data-testid="mobile-menu-close" aria-label="Close menu" className="p-2 text-zinc-400 hover:text-white"><X className="h-5 w-5"/></button>
              </div>
            </div>
            <nav className="p-6 flex flex-col gap-1">

              {/* Mobile Controls: Language & Sunlight Mode */}
              <div className="py-4 border-b border-zinc-800 space-y-3">
                <div className="flex justify-between items-center gap-2">
                  <div className="flex flex-1 justify-between gap-1">
                    {(['en', 'hi', 'mr']).map((lang) => {
                      const isActive = i18n.language === lang;
                      return (
                        <button
                          key={lang}
                          onClick={() => { switchLanguage(lang); setOpen(false); }}
                          className={`flex-1 min-h-[44px] text-sm rounded font-bold transition ${
                            isActive
                              ? "bg-lime-500 text-black shadow-md shadow-lime-500/20"
                              : "border border-zinc-700 bg-zinc-900 text-zinc-200 hover:text-white"
                          }`}
                        >
                          {lang.toUpperCase()}
                        </button>
                      );
                    })}
                  </div>
                  <button
                    onClick={toggleSunlight}
                    className={`px-3 min-h-[44px] text-xs font-bold rounded flex items-center gap-1.5 transition border ${
                      sunlight
                        ? "bg-amber-100 text-amber-950 border-amber-300"
                        : "bg-zinc-900 text-zinc-200 border-zinc-700 hover:border-lime-500"
                    }`}
                  >
                    <Sun className={`h-4 w-4 ${sunlight ? "text-amber-600" : "text-lime-400"}`} />
                    <span>{sunlight ? "धूप ON" : "धूप मोड"}</span>
                  </button>
                </div>
              </div>

              {NAV.map((item) => (
                <Link
                  key={item.to}
                  href={item.to}
                  data-testid={`m-nav-${item.labelKey.split('.')[1].toLowerCase().replace(/\s+/g, "-").replace(/&/g, "and")}`}
                  onClick={() => setOpen(false)}
                  className={`px-3 py-3 text-base border-b border-zinc-850 ${location.pathname === item.to ? "text-lime-400 font-bold" : "text-zinc-200 hover:text-white"}`}
                >
                  {t(item.labelKey, item.fallback || item.labelKey)}
                </Link>
              ))}
              {/* Mobile Actions: WhatsApp Quote, Become a Dealer & Direct Call */}
              <div className="mt-6 pt-4 border-t border-zinc-850 flex flex-col gap-2.5">
                <a
                  href={`https://wa.me/${COMPANY.whatsapp}?utm_source=website&utm_medium=whatsapp&utm_campaign=kg_catalog`}
                  target="_blank"
                  rel="noreferrer"
                  aria-label="WhatsApp Quick Quote"
                  onClick={() => trackWhatsAppClick("header_mobile")}
                  data-testid="m-nav-whatsapp"
                  className="w-full min-h-[48px] px-5 py-3 bg-whatsapp hover:bg-whatsapp-hover text-white text-center rounded-md inline-flex items-center justify-center gap-2 font-bold text-sm shadow-md shadow-green-600/20 active:scale-98 transition"
                >
                  <WhatsAppIcon className="h-4 w-4" />
                  <span>WhatsApp Quote</span>
                </a>

                <Link
                  href="/become-a-dealer"
                  onClick={() => setOpen(false)}
                  data-testid="m-nav-become-dealer"
                  className="w-full min-h-[48px] px-5 py-3 bg-lime-500 hover:bg-lime-400 text-black font-extrabold text-sm text-center rounded-md shadow-md shadow-lime-500/20 active:scale-98 transition flex items-center justify-center border border-lime-400"
                >
                  Become a Dealer
                </Link>

                <a
                  href={`tel:${COMPANY.phone.replace(/\s+/g, "")}`}
                  onClick={() => trackPhoneClick("header_mobile")}
                  data-testid="m-nav-call"
                  className="w-full min-h-[48px] px-5 py-3 border border-zinc-800 bg-zinc-900/60 text-center rounded-md text-zinc-300 hover:text-white hover:border-zinc-700 font-semibold text-xs flex items-center justify-center gap-2 transition"
                >
                  <Phone className="h-4 w-4 text-lime-400" />
                  <span className="font-mono">{COMPANY.phone} (Support Desk)</span>
                </a>
              </div>
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}
