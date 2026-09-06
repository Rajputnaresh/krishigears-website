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
    i18n.changeLanguage(langCode);
    const currentPath = location.pathname || "/";
    const parts = currentPath.split('/').filter(Boolean);
    const search = location.search || "";
    
    if (parts.length > 0 && ['hi', 'mr'].includes(parts[0])) {
      const rest = parts.slice(1).join('/');
      if (langCode === 'en') {
        navigate.push('/' + (rest ? rest : '') + search);
      } else {
        navigate.push('/' + langCode + (rest ? '/' + rest : '') + search);
      }
    } else {
      if (langCode !== 'en') {
        navigate.push('/' + langCode + (currentPath === '/' ? '' : currentPath) + search);
      }
    }
  };

  return (
    <header
      data-testid="site-header"
      className="fixed top-0 inset-x-0 z-50 bg-black/90 backdrop-blur-xl border-b border-zinc-800"
    >
      {/* Global B2B Trust & Utility Bar */}
      <div className="bg-zinc-950 border-b border-zinc-800/80 px-4 md:px-8 py-1.5 relative flex items-center justify-between text-xs text-zinc-300 min-h-[32px]">
        {/* Centered Trust Badges */}
        <div className="w-full flex items-center justify-center gap-3 md:gap-4 overflow-x-auto whitespace-nowrap px-2 md:px-28">
          <span className="inline-flex items-center gap-1.5 text-lime-400 font-semibold">
            <span className="w-1.5 h-1.5 rounded-full bg-lime-400 motion-safe:animate-pulse" />
            GSTIN: <span className="font-mono text-zinc-100">{COMPANY.gst}</span>
          </span>
          <span className="text-zinc-700 hidden sm:inline">|</span>
          <span className="text-zinc-300 hidden sm:inline">FMTTI / SRFMTTI Tested Machinery</span>
          <span className="text-zinc-700 hidden md:inline">|</span>
          <span className="text-zinc-400 hidden md:inline">Factory Dispatch 24–48h PAN India</span>
        </div>

        {/* Right Pinned: Compact Language & Display Controls */}
        <div className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 flex items-center gap-2 shrink-0 z-10">
          <DropdownMenu>
            <DropdownMenuTrigger
              aria-label="Language & Display Options"
              className="px-2 py-0.5 text-[11px] font-semibold text-zinc-300 hover:text-white flex items-center gap-1 rounded border border-zinc-800 hover:border-zinc-700 bg-zinc-900/60 outline-none focus-visible:ring-2 focus-visible:ring-lime-400 transition"
            >
              <Globe className="h-3.5 w-3.5 text-lime-400" />
              <span>{(i18n.language || "en").toUpperCase()}</span>
              <ChevronDown className="h-3 w-3 text-zinc-500" />
            </DropdownMenuTrigger>
            <DropdownMenuContent className="bg-zinc-950 border-zinc-800 text-zinc-200 w-44 shadow-2xl z-[60]">
              <div className="px-2 py-1.5 text-[10px] uppercase font-bold text-zinc-400 tracking-wider">
                Language / भाषा
              </div>
              <DropdownMenuItem onClick={() => switchLanguage('en')} className="cursor-pointer flex justify-between text-xs">
                <span>English</span>
                <span className="text-zinc-500">EN</span>
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => switchLanguage('hi')} className="cursor-pointer flex justify-between text-xs">
                <span>हिंदी</span>
                <span className="text-zinc-500">HI</span>
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => switchLanguage('mr')} className="cursor-pointer flex justify-between text-xs">
                <span>मराठी</span>
                <span className="text-zinc-500">MR</span>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          {/* Sunlight Mode Pill */}
          <button
            onClick={toggleSunlight}
            title={sunlight ? "Dark Mode ON" : "Outdoor Sunlight Mode (धूप मोड)"}
            className={`px-2 py-0.5 text-[11px] font-semibold rounded flex items-center gap-1 transition border ${
              sunlight
                ? "bg-amber-100 text-amber-950 border-amber-300"
                : "bg-zinc-900/60 text-zinc-300 border-zinc-800 hover:border-zinc-700 hover:text-white"
            }`}
          >
            <Sun className={`h-3 w-3 ${sunlight ? "text-amber-600" : "text-lime-400"}`} />
            <span>{sunlight ? "धूप ON" : "धूप"}</span>
          </button>
        </div>
      </div>

      <div className="max-w-[1400px] mx-auto px-4 md:px-8 h-18 flex items-center justify-between gap-4">
        {/* Logo */}
        <Link href="/" data-testid="header-logo-link" className="flex items-center gap-3 shrink-0 group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lime-400 rounded-md">
          <img src={LOGO_URL} alt="KrishiGears" className="h-11 w-11 rounded-full ring-1 ring-lime-500/40 group-hover:ring-lime-400 transition" />
          <div className="leading-tight hidden xl:block">
            <div className="font-display font-black text-lg tracking-tight text-white">
              KRISHI<span className="text-lime-500">GEARS</span>
            </div>
            <div className="text-[10px] tracking-[0.25em] text-zinc-400 uppercase">Farming Tools</div>
          </div>
        </Link>

        {/* Desktop nav — strictly single-line whitespace-nowrap */}
        <nav className="hidden lg:flex items-center gap-1 xl:gap-1.5 whitespace-nowrap">
          <Link
            href="/"
            data-testid="nav-home"
            className="px-3 py-2 text-sm font-medium transition text-zinc-300 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lime-400 rounded-md"
          >
            {t('nav.home', 'Home')}
          </Link>

          <DropdownMenu>
            <DropdownMenuTrigger
              data-testid="nav-products-trigger"
              className="px-3 py-2 text-sm font-medium text-zinc-300 hover:text-white flex items-center gap-1 outline-none focus-visible:ring-2 focus-visible:ring-lime-400 rounded-md"
            >
              <span>{t('nav.products', 'Products')}</span>
              <ChevronDown className="h-3.5 w-3.5 text-lime-400" />
            </DropdownMenuTrigger>
            <DropdownMenuContent className="bg-zinc-950 border-zinc-800 w-72 max-h-[70vh] overflow-y-auto text-zinc-200 shadow-2xl z-[60]">
              <DropdownMenuItem asChild>
                <Link href="/products" className="font-bold text-lime-400 hover:text-lime-300 cursor-pointer" data-testid="nav-all-products">
                  All Products →
                </Link>
              </DropdownMenuItem>
              <div className="h-px bg-zinc-800 my-1" />
              {CATEGORIES.map((c) => (
                <DropdownMenuItem key={c.slug} asChild>
                  <Link
                    href={`/products/category/${c.slug}`}
                    data-testid={`nav-cat-${c.slug}`}
                    className="text-sm text-zinc-300 hover:text-lime-400 cursor-pointer"
                  >
                    {c.name}
                  </Link>
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>

          <Link
            href="/dealer-network"
            data-testid="nav-dealers"
            className="px-3 py-2 text-sm font-medium transition text-zinc-300 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lime-400 rounded-md"
          >
            Dealers
          </Link>

          <Link
            href="/about"
            data-testid="nav-about"
            className="px-3 py-2 text-sm font-medium transition text-zinc-300 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lime-400 rounded-md"
          >
            About
          </Link>

          <Link
            href="/locations"
            data-testid="nav-locations"
            className="px-3 py-2 text-sm font-medium transition text-zinc-300 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lime-400 rounded-md"
          >
            Locations
          </Link>

          <Link
            href="/blog"
            data-testid="nav-blog"
            className="px-3 py-2 text-sm font-medium transition text-zinc-300 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lime-400 rounded-md"
          >
            Blog
          </Link>

          <Link
            href="/warranty-and-support"
            data-testid="nav-warranty"
            className="px-3 py-2 text-sm font-medium transition text-zinc-300 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lime-400 rounded-md"
          >
            Warranty
          </Link>

          <Link
            href="/contact"
            data-testid="nav-contact"
            className="px-3 py-2 text-sm font-medium transition text-zinc-300 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lime-400 rounded-md"
          >
            Contact
          </Link>
        </nav>

        {/* Desktop Actions — strictly single-line, uniform height (h-10) */}
        <div className="hidden lg:flex items-center gap-2.5 shrink-0 whitespace-nowrap">
          {/* Direct Phone Dial (h-10) */}
          <a
            href={`tel:${COMPANY.phone.replace(/\s+/g, "")}`}
            onClick={() => trackPhoneClick("header_desktop")}
            className="h-10 px-3.5 flex items-center gap-2 text-xs font-semibold text-zinc-300 hover:text-white transition rounded-md border border-zinc-800 hover:border-zinc-700 bg-zinc-950/60 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lime-400"
            title="Direct Machinery Support Desk"
          >
            <Phone className="h-3.5 w-3.5 text-lime-400 shrink-0" />
            <span className="font-mono">{COMPANY.phone}</span>
          </a>

          {/* WhatsApp RFQ Quote (h-10) */}
          <a
            href={`https://wa.me/${COMPANY.whatsapp}?utm_source=website&utm_medium=whatsapp&utm_campaign=kg_catalog`}
            target="_blank"
            rel="noreferrer"
            aria-label="WhatsApp Quick Quote"
            onClick={() => trackWhatsAppClick("header_desktop")}
            className="h-10 px-3.5 text-zinc-200 hover:text-white font-semibold text-xs rounded-md border border-zinc-700/80 bg-zinc-900/90 hover:bg-zinc-800 transition inline-flex items-center gap-2 shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lime-400 active:scale-95"
          >
            <WhatsAppIcon className="h-4 w-4 text-[#25D366] shrink-0" />
            <span>WhatsApp Quote</span>
          </a>

          {/* Become a Dealer (h-10 Primary CTA) */}
          <Link
            href="/become-a-dealer"
            data-testid="header-become-dealer-btn"
            className="h-10 px-4 bg-lime-500 hover:bg-lime-400 text-black font-extrabold text-xs rounded-md transition inline-flex items-center justify-center gap-1.5 shadow-lg shadow-lime-500/20 active:scale-95 border border-lime-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
          >
            <span>Become a Dealer</span>
          </Link>
        </div>

        {/* Mobile */}
        <Sheet open={open} onOpenChange={setOpen}>
          <SheetTrigger asChild>
            <button data-testid="mobile-menu-trigger" aria-label="Open menu" className="lg:hidden p-3 text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lime-400 rounded-md">
              <Menu className="h-6 w-6" />
            </button>
          </SheetTrigger>
          <SheetContent side="right" className="bg-zinc-950 border-zinc-800 text-white w-[85vw] sm:w-96 p-0 overflow-y-auto">
            <div className="p-5 border-b border-zinc-800 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <img src={LOGO_URL} alt="KrishiGears" className="h-10 w-10 rounded-full ring-1 ring-lime-500/40" />
                <div className="font-display font-black text-white">KRISHI<span className="text-lime-500">GEARS</span></div>
              </div>
              <div className="flex items-center gap-2">
                <button
                  onClick={() => setOpen(false)}
                  data-testid="mobile-menu-close"
                  aria-label="Close menu"
                  className="min-h-[44px] min-w-[44px] p-2.5 flex items-center justify-center text-zinc-400 hover:text-white rounded-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lime-400"
                >
                  <X className="h-5 w-5"/>
                </button>
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
                          {lang === 'en' ? 'EN' : lang === 'hi' ? 'हिंदी' : 'मराठी'}
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

              {/* Machinery Categories Quick Nav for Mobile Dealers */}
              <div className="py-3 border-b border-zinc-800">
                <div className="text-[11px] font-bold text-lime-400 uppercase tracking-wider mb-2">
                  Machinery Catalog
                </div>
                <div className="grid grid-cols-2 gap-2">
                  <Link
                    href="/products"
                    onClick={() => setOpen(false)}
                    className="p-2.5 bg-zinc-900/90 border border-zinc-800 rounded text-xs font-semibold text-zinc-200 hover:text-lime-400"
                  >
                    All Products →
                  </Link>
                  {CATEGORIES.map((cat) => (
                    <Link
                      key={cat.slug}
                      href={`/products/category/${cat.slug}`}
                      onClick={() => setOpen(false)}
                      className="p-2.5 bg-zinc-900/90 border border-zinc-800 rounded text-xs font-semibold text-zinc-200 hover:text-lime-400 truncate"
                    >
                      {cat.name}
                    </Link>
                  ))}
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
                <Link
                  href="/become-a-dealer"
                  onClick={() => setOpen(false)}
                  data-testid="m-nav-become-dealer"
                  className="w-full min-h-[48px] px-5 py-3 bg-lime-500 hover:bg-lime-400 text-black font-extrabold text-sm text-center rounded-md shadow-md shadow-lime-500/20 active:scale-98 transition flex items-center justify-center border border-lime-400"
                >
                  Become a Dealer
                </Link>

                <a
                  href={`https://wa.me/${COMPANY.whatsapp}?utm_source=website&utm_medium=whatsapp&utm_campaign=kg_catalog`}
                  target="_blank"
                  rel="noreferrer"
                  aria-label="WhatsApp Quick Quote"
                  onClick={() => trackWhatsAppClick("header_mobile")}
                  data-testid="m-nav-whatsapp"
                  className="w-full min-h-[48px] px-5 py-3 bg-zinc-900 hover:bg-zinc-850 border border-zinc-700 text-white text-center rounded-md inline-flex items-center justify-center gap-2 font-bold text-sm shadow-sm active:scale-98 transition"
                >
                  <WhatsAppIcon className="h-4 w-4 text-[#25D366]" />
                  <span>WhatsApp Quote</span>
                </a>

                <a
                  href={`tel:${COMPANY.phone.replace(/\s+/g, "")}`}
                  onClick={() => trackPhoneClick("header_mobile")}
                  data-testid="m-nav-call"
                  className="w-full min-h-[48px] px-5 py-3 border border-zinc-800 bg-zinc-950 text-center rounded-md text-zinc-300 hover:text-white hover:border-zinc-700 font-semibold text-xs flex items-center justify-center gap-2 transition"
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
