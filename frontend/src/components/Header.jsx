"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter, usePathname } from "next/navigation";
import { Menu, X, Phone, ChevronDown, ChevronRight, Globe, Headphones, Sun } from "lucide-react";
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
      document.documentElement.classList.remove("dark");
    }

    const savedLng = localStorage.getItem("i18nextLng");
    // Check if googtrans cookie is set
    const match = document.cookie.match(/googtrans=\/en\/([a-z]{2})/i);
    const activeLng = (match && match[1]) || savedLng;

    if (activeLng && ['en', 'hi', 'mr'].includes(activeLng) && i18n.language !== activeLng) {
      i18n.changeLanguage(activeLng);
    }
  }, [i18n]);

  const toggleSunlight = () => {
    const next = !sunlight;
    setSunlight(next);
    if (next) {
      document.documentElement.classList.add("sunlight");
      document.documentElement.classList.remove("dark");
      localStorage.setItem("kg_sunlight_mode", "true");
    } else {
      document.documentElement.classList.remove("sunlight");
      document.documentElement.classList.add("dark");
      localStorage.setItem("kg_sunlight_mode", "false");
    }
  };

  const switchLanguage = (langCode) => {
    i18n.changeLanguage(langCode);
    try {
      localStorage.setItem("i18nextLng", langCode);
      
      // Synchronize with Google Translate engine for whole-page & blog translation
      const googleSelect = document.querySelector(".goog-te-combo");
      if (googleSelect) {
        googleSelect.value = langCode;
        googleSelect.dispatchEvent(new Event("change"));
      } else {
        // Set Google Translate cookie directly (/en/hi or /en/mr)
        const pair = langCode === "en" ? "/en/en" : `/en/${langCode}`;
        document.cookie = `googtrans=${pair}; path=/;`;
        document.cookie = `googtrans=${pair}; path=/; domain=${window.location.hostname}`;
        // Trigger page refresh if combo wasn't loaded yet to activate translation
        window.location.reload();
      }
    } catch (e) {
      // ignore localstorage/cookie errors
    }
  };

  return (
    <header
      data-testid="site-header"
      className="fixed top-0 inset-x-0 z-50 bg-black/90 backdrop-blur-xl border-b border-zinc-800"
    >
      {/* Global B2B Trust & Utility Bar */}
      <div className="bg-zinc-950 border-b border-zinc-800/80 px-3 md:px-8 py-1 relative flex items-center justify-between text-xs text-zinc-300 min-h-[28px] md:min-h-[32px]">
        {/* Centered Trust Badges - clean on mobile */}
        <div className="flex items-center gap-2 md:gap-4 overflow-hidden text-[11px] md:text-xs">
          <span className="inline-flex items-center gap-1.5 text-lime-400 font-semibold truncate">
            <span className="w-1.5 h-1.5 rounded-full bg-lime-400 motion-safe:animate-pulse shrink-0" />
            GSTIN: <span className="font-mono text-zinc-100">{COMPANY.gst}</span>
          </span>
          <span className="text-zinc-700 hidden sm:inline">|</span>
          <span className="text-zinc-300 hidden sm:inline">FMTTI Tested Machinery</span>
          <span className="text-zinc-700 hidden md:inline">|</span>
          <span className="text-zinc-400 hidden md:inline">Factory Dispatch 24–48h PAN India</span>
        </div>

        {/* Right Pinned: Language & Sunlight Controls */}
        <div className="flex items-center gap-1.5 shrink-0 z-10">
          <DropdownMenu>
            <DropdownMenuTrigger
              aria-label="Language & Display Options"
              className="px-2 py-0.5 text-[10px] md:text-[11px] font-semibold text-zinc-300 hover:text-white flex items-center gap-1 rounded border border-zinc-800 hover:border-zinc-700 bg-zinc-900/60 outline-none focus-visible:ring-2 focus-visible:ring-lime-400 transition"
            >
              <Globe className="h-3 w-3 md:h-3.5 md:w-3.5 text-lime-400" />
              <span>{(i18n.language || "en").toUpperCase()}</span>
              <ChevronDown className="h-2.5 w-2.5 text-zinc-500" />
            </DropdownMenuTrigger>
            <DropdownMenuContent className="bg-zinc-950 border-zinc-800 text-zinc-200 w-40 shadow-2xl z-[60]">
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
            className={`px-2 py-0.5 text-[10px] md:text-[11px] font-semibold rounded flex items-center gap-1 transition border ${
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

      <div className="max-w-[1400px] mx-auto px-4 md:px-8 h-14 md:h-18 flex items-center justify-between gap-4">
        {/* Logo */}
        <Link href="/" data-testid="header-logo-link" className="flex items-center gap-2.5 shrink-0 group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lime-400 rounded-md">
          <img src={LOGO_URL} alt="KrishiGears" className="h-9 w-9 md:h-11 md:w-11 rounded-full ring-1 ring-lime-500/40 group-hover:ring-lime-400 transition" />
          <div className="leading-tight">
            <div className="font-display font-black text-base md:text-lg tracking-tight text-white">
              KRISHI<span className="text-lime-500">GEARS</span>
            </div>
            <div className="text-[8px] md:text-[10px] tracking-[0.25em] text-zinc-400 uppercase hidden sm:block">Farming Tools</div>
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
            <nav className="p-5 flex flex-col gap-1">
              {/* Primary Navigation Links */}
              <div className="flex flex-col">
                {NAV.map((item) => (
                  <Link
                    key={item.to}
                    href={item.to}
                    data-testid={`m-nav-${item.labelKey.split('.')[1].toLowerCase().replace(/\s+/g, "-").replace(/&/g, "and")}`}
                    onClick={() => setOpen(false)}
                    className={`px-3 py-3 text-base font-medium border-b border-zinc-900 flex items-center justify-between ${location.pathname === item.to ? "text-lime-400 font-bold" : "text-zinc-200 hover:text-white"}`}
                  >
                    <span>{t(item.labelKey, item.fallback || item.labelKey)}</span>
                    <ChevronRight className="h-4 w-4 text-zinc-600" />
                  </Link>
                ))}
              </div>

              {/* Machinery Categories Quick Nav for Mobile Dealers */}
              <div className="py-4 border-b border-zinc-900">
                <div className="text-[11px] font-bold text-lime-400 uppercase tracking-wider mb-2.5">
                  Machinery Catalog
                </div>
                <div className="grid grid-cols-2 gap-2">
                  <Link
                    href="/products"
                    onClick={() => setOpen(false)}
                    className="p-2.5 bg-zinc-900/80 border border-zinc-800 rounded text-xs font-semibold text-lime-400 hover:text-lime-300"
                  >
                    All Products →
                  </Link>
                  {CATEGORIES.slice(0, 7).map((cat) => (
                    <Link
                      key={cat.slug}
                      href={`/products/category/${cat.slug}`}
                      onClick={() => setOpen(false)}
                      className="p-2.5 bg-zinc-900/60 border border-zinc-800/80 rounded text-xs font-medium text-zinc-300 hover:text-lime-400 truncate"
                    >
                      {cat.name}
                    </Link>
                  ))}
                </div>
              </div>

              {/* Mobile Actions: Become a Dealer & Direct Call */}
              <div className="mt-4 flex flex-col gap-2.5">
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
