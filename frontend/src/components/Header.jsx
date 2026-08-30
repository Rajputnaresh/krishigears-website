import { useState, useEffect } from "react";
import { Link, NavLink, useNavigate, useLocation } from "react-router-dom";
import { Menu, X, Phone, ChevronDown, Globe, Headphones } from "lucide-react";
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
  { to: "/blog", labelKey: "nav.blog" },
  { to: "/warranty-and-support", labelKey: "nav.warranty" },
  { to: "/contact", labelKey: "nav.contactUs" },
];

export default function Header() {
  const { t, i18n } = useTranslation();
  const navigate = useNavigate();
  const location = useLocation();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'd') {
        e.preventDefault();
        navigate('/become-a-dealer');
      }
      if ((e.metaKey || e.ctrlKey) && e.key === 'p') {
        e.preventDefault();
        navigate('/products');
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [navigate]);

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
      className="fixed top-0 inset-x-0 z-50 bg-white/90 dark:bg-black/70 backdrop-blur-xl border-b border-zinc-200 dark:border-white/10"
    >
      <div className="max-w-[1400px] mx-auto px-4 md:px-8 h-20 flex items-center justify-between gap-6">
        {/* Logo */}
        <Link to="/" data-testid="header-logo-link" className="flex items-center gap-3 group">
          <img src={LOGO_URL} alt="KrishiGears" className="h-12 w-12 rounded-full ring-1 ring-lime-500/40 group-hover:ring-lime-400 transition" />
          <div className="leading-tight hidden sm:block">
            <div className="font-display font-black text-lg tracking-tight">
              KRISHI<span className="text-lime-500">GEARS</span>
            </div>
            <div className="text-[10px] tracking-[0.25em] text-zinc-500 dark:text-zinc-500 uppercase">Farming Tools</div>
          </div>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden lg:flex items-center gap-1">
          {NAV.slice(0, 2).map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              data-testid={`nav-${item.labelKey.split('.')[1].toLowerCase().replace(/\s+/g, "-")}`}
              className={({ isActive }) =>
                `px-4 py-2 text-sm font-medium transition ${isActive ? "text-lime-500" : "text-zinc-700 dark:text-zinc-300 hover:text-zinc-900 dark:text-white"}`
              }
            >
              {t(item.labelKey)}
            </NavLink>
          ))}

          <DropdownMenu>
            <DropdownMenuTrigger
              data-testid="nav-products-trigger"
              className="px-4 py-2 text-sm font-medium text-zinc-700 dark:text-zinc-300 hover:text-zinc-900 dark:text-white flex items-center gap-1 outline-none"
            >
              {t('nav.products', 'Products')} <ChevronDown className="h-4 w-4" />
            </DropdownMenuTrigger>
            <DropdownMenuContent className="bg-[#0A0A0A] border-zinc-200 dark:border-zinc-800 w-80 max-h-[70vh] overflow-y-auto">
              <DropdownMenuItem asChild>
                <Link to="/products" className="font-bold text-lime-500" data-testid="nav-all-products">View All Categories →</Link>
              </DropdownMenuItem>
              <div className="h-px bg-zinc-800 my-1" />
              {CATEGORIES.map((c) => (
                <DropdownMenuItem key={c.slug} asChild>
                  <Link
                    to={`/products/category/${c.slug}`}
                    data-testid={`nav-cat-${c.slug}`}
                    className="text-sm text-zinc-700 dark:text-zinc-300 hover:text-lime-500"
                  >
                    {c.name}
                  </Link>
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>

          {NAV.slice(2).map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              data-testid={`nav-${item.labelKey.split('.')[1].toLowerCase().replace(/\s+/g, "-").replace(/&/g, "and")}`}
              className={({ isActive }) =>
                `px-4 py-2 text-sm font-medium transition ${isActive ? "text-lime-500" : "text-zinc-700 dark:text-zinc-300 hover:text-zinc-900 dark:text-white"}`
              }
            >
              {t(item.labelKey)}
            </NavLink>
          ))}
        </nav>

        {/* CTA */}
        <div className="hidden lg:flex items-center gap-2">
          {/* Language Switcher */}
          <DropdownMenu>
            <DropdownMenuTrigger className="px-3 py-2 text-sm font-medium text-zinc-700 dark:text-zinc-300 hover:text-white flex items-center gap-1 outline-none">
              <Globe className="h-4 w-4" /> {(i18n.language || "en").toUpperCase()}
            </DropdownMenuTrigger>
            <DropdownMenuContent className="bg-[#0A0A0A] border-zinc-200 dark:border-zinc-800">
              <DropdownMenuItem onClick={() => switchLanguage('en')}>English (EN)</DropdownMenuItem>
              <DropdownMenuItem onClick={() => switchLanguage('hi')}>हिंदी (HI)</DropdownMenuItem>
              <DropdownMenuItem onClick={() => switchLanguage('mr')}>मराठी (MR)</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          {/* Support Dropdown */}
          <DropdownMenu>
            <DropdownMenuTrigger className="px-3 py-2 text-sm font-medium text-zinc-700 dark:text-zinc-300 hover:text-white flex items-center gap-1 outline-none">
              <Headphones className="h-4 w-4" /> Support
            </DropdownMenuTrigger>
            <DropdownMenuContent className="bg-[#0A0A0A] border-zinc-200 dark:border-zinc-800 w-56">
              <DropdownMenuItem asChild>
                <a href={`https://wa.me/${COMPANY.whatsapp}`} target="_blank" rel="noreferrer" onClick={() => trackWhatsAppClick("header_desktop")} className="flex items-center gap-2 text-zinc-300 hover:text-[#25D366]">
                  <WhatsAppIcon className="h-4 w-4" /> WhatsApp Us
                </a>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <a href={`tel:${COMPANY.phone.replace(/\s+/g, "")}`} onClick={() => trackPhoneClick("header_desktop")} className="flex items-center gap-2 text-zinc-300 hover:text-lime-500">
                  <Phone className="h-4 w-4" /> {COMPANY.phone}
                </a>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          <Link
            to="/become-a-dealer"
            data-testid="header-become-dealer-btn"
            title="Become a Dealer (⌘D)"
            className="ml-2 px-5 py-2.5 bg-lime-500 text-black dark:text-black font-bold text-sm rounded-md hover:bg-lime-400 transition flex items-center gap-2"
          >
            Become a Dealer <span className="opacity-50 text-[10px] hidden xl:inline">⌘D</span>
          </Link>
        </div>

        {/* Mobile */}
        <Sheet open={open} onOpenChange={setOpen}>
          <SheetTrigger asChild>
            <button data-testid="mobile-menu-trigger" className="lg:hidden p-2 text-zinc-900 dark:text-white">
              <Menu className="h-6 w-6" />
            </button>
          </SheetTrigger>
          <SheetContent side="right" className="bg-[#0A0A0A] border-zinc-200 dark:border-zinc-800 text-zinc-900 dark:text-white w-[85vw] sm:w-96 p-0 overflow-y-auto">
            <div className="p-6 border-b border-zinc-200 dark:border-zinc-800 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <img src={LOGO_URL} alt="KrishiGears" className="h-10 w-10 rounded-full" />
                <div className="font-display font-black">KRISHI<span className="text-lime-500">GEARS</span></div>
              </div>
              <div className="flex items-center gap-2">
                <button onClick={() => setOpen(false)} data-testid="mobile-menu-close"><X className="h-5 w-5"/></button>
              </div>
            </div>
            <nav className="p-6 flex flex-col gap-1">

              {/* Mobile Language Switcher */}
              <div className="flex justify-around py-4 border-b border-zinc-100 dark:border-zinc-900">
                <button onClick={() => { switchLanguage('en'); setOpen(false); }} className={`px-4 py-2 text-sm rounded ${i18n.language === 'en' ? 'bg-lime-500 text-black' : 'border border-zinc-700'}`}>EN</button>
                <button onClick={() => { switchLanguage('hi'); setOpen(false); }} className={`px-4 py-2 text-sm rounded ${i18n.language === 'hi' ? 'bg-lime-500 text-black' : 'border border-zinc-700'}`}>HI</button>
                <button onClick={() => { switchLanguage('mr'); setOpen(false); }} className={`px-4 py-2 text-sm rounded ${i18n.language === 'mr' ? 'bg-lime-500 text-black' : 'border border-zinc-700'}`}>MR</button>
              </div>
              
              {NAV.map((item) => (

                <NavLink
                  key={item.to}
                  to={item.to}
                  data-testid={`m-nav-${item.labelKey.split('.')[1].toLowerCase().replace(/\s+/g, "-").replace(/&/g, "and")}`}
                  onClick={() => setOpen(false)}
                  className={({ isActive }) =>
                    `px-3 py-3 text-base border-b border-zinc-100 dark:border-zinc-900 ${isActive ? "text-lime-500" : "text-zinc-800 dark:text-zinc-200"}`
                  }
                >
                  {t(item.labelKey)}
                </NavLink>
              ))}
              <NavLink to="/products" onClick={() => setOpen(false)} data-testid="m-nav-products" className="px-3 py-3 text-base border-b border-zinc-100 dark:border-zinc-900 text-zinc-800 dark:text-zinc-200">{t('nav.products', 'Products')}</NavLink>
              <Link
                to="/become-a-dealer"
                onClick={() => setOpen(false)}
                data-testid="m-nav-become-dealer"
                className="mt-4 px-5 py-3 bg-lime-500 text-black dark:text-black font-bold text-center rounded-md"
              >
                Become a Dealer
              </Link>
              <a
                href={`tel:${COMPANY.phone.replace(/\s+/g, "")}`}
                onClick={() => trackPhoneClick("header_mobile")}
                data-testid="m-nav-call"
                className="mt-2 px-5 py-3 border border-zinc-300 dark:border-zinc-700 text-center rounded-md text-zinc-800 dark:text-zinc-200"
              >
                <Phone className="h-4 w-4 inline mr-2" /> {COMPANY.phone}
              </a>
              <a
                href={`https://wa.me/${COMPANY.whatsapp}`}
                target="_blank"
                rel="noreferrer"
                onClick={() => trackWhatsAppClick("header_mobile")}
                data-testid="m-nav-whatsapp"
                className="mt-2 px-5 py-3 bg-[#25D366] hover:bg-[#1ebe57] text-zinc-900 dark:text-white text-center rounded-md inline-flex items-center justify-center gap-2"
              >
                <WhatsAppIcon className="h-4 w-4" /> WhatsApp Us
              </a>
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}
