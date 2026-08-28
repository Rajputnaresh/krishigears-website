import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { Menu, X, Phone, ChevronDown, Sun, Moon } from "lucide-react";
import WhatsAppIcon from "@/components/WhatsAppIcon";
import { LOGO_URL, COMPANY, CATEGORIES } from "@/data/catalog";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import {
  DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger
} from "@/components/ui/dropdown-menu";
import { trackWhatsAppClick, trackPhoneClick } from "@/lib/analytics";
import { useTheme } from "@/components/ThemeProvider";

const NAV = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About Us" },
  { to: "/dealer-network", label: "Dealer Network" },
  { to: "/blog", label: "Blog" },
  { to: "/warranty-and-support", label: "Warranty & Support" },
  { to: "/contact", label: "Contact" },
];

export default function Header() {
  const { isDark, toggleTheme } = useTheme();
  const [open, setOpen] = useState(false);

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
              data-testid={`nav-${item.label.toLowerCase().replace(/\s+/g, "-")}`}
              className={({ isActive }) =>
                `px-4 py-2 text-sm font-medium transition ${isActive ? "text-lime-500" : "text-zinc-700 dark:text-zinc-300 hover:text-zinc-900 dark:text-white"}`
              }
            >
              {item.label}
            </NavLink>
          ))}

          <DropdownMenu>
            <DropdownMenuTrigger
              data-testid="nav-products-trigger"
              className="px-4 py-2 text-sm font-medium text-zinc-700 dark:text-zinc-300 hover:text-zinc-900 dark:text-white flex items-center gap-1 outline-none"
            >
              Products <ChevronDown className="h-4 w-4" />
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
              data-testid={`nav-${item.label.toLowerCase().replace(/\s+/g, "-").replace(/&/g, "and")}`}
              className={({ isActive }) =>
                `px-4 py-2 text-sm font-medium transition ${isActive ? "text-lime-500" : "text-zinc-700 dark:text-zinc-300 hover:text-zinc-900 dark:text-white"}`
              }
            >
              {item.label}
            </NavLink>
          ))}
        </nav>

        {/* CTA */}
        <div className="hidden lg:flex items-center gap-3">
          <a
            href={`https://wa.me/${COMPANY.whatsapp}`}
            target="_blank"
            rel="noreferrer"
            onClick={() => trackWhatsAppClick("header_desktop")}
            data-testid="header-whatsapp-link"
            title="WhatsApp Chat"
            className="h-9 w-9 grid place-items-center rounded-full bg-[#25D366] hover:bg-[#1ebe57] text-zinc-900 dark:text-white transition"
          >
            <WhatsAppIcon className="h-4 w-4" />
          </a>
          <a
            href={`tel:${COMPANY.phone.replace(/\s+/g, "")}`}
            onClick={() => trackPhoneClick("header_desktop")}
            data-testid="header-call-link"
            className="text-sm font-medium text-zinc-700 dark:text-zinc-300 hover:text-lime-500 flex items-center gap-2"
          >
            <Phone className="h-4 w-4" /> {COMPANY.phone}
          </a>
          <Link
            to="/become-a-dealer"
            data-testid="header-become-dealer-btn"
            className="px-5 py-2.5 bg-lime-500 text-zinc-50 dark:text-black font-bold text-sm rounded-md hover:bg-lime-400 transition"
          >
            Become a Dealer
          </Link>
          <button onClick={toggleTheme} className="p-2.5 ml-2 rounded-full hover:bg-zinc-200 dark:hover:bg-zinc-800 transition text-zinc-700 dark:text-zinc-300">
            {isDark ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
          </button>
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
                <button onClick={toggleTheme} className="p-2 rounded-full hover:bg-zinc-200 dark:hover:bg-zinc-800 transition text-zinc-700 dark:text-zinc-300">
                  {isDark ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
                </button>
                <button onClick={() => setOpen(false)} data-testid="mobile-menu-close"><X className="h-5 w-5"/></button>
              </div>
            </div>
            <nav className="p-6 flex flex-col gap-1">
              {NAV.map((item) => (
                <NavLink
                  key={item.to}
                  to={item.to}
                  data-testid={`m-nav-${item.label.toLowerCase().replace(/\s+/g, "-").replace(/&/g, "and")}`}
                  onClick={() => setOpen(false)}
                  className={({ isActive }) =>
                    `px-3 py-3 text-base border-b border-zinc-100 dark:border-zinc-900 ${isActive ? "text-lime-500" : "text-zinc-800 dark:text-zinc-200"}`
                  }
                >
                  {item.label}
                </NavLink>
              ))}
              <NavLink to="/products" onClick={() => setOpen(false)} data-testid="m-nav-products" className="px-3 py-3 text-base border-b border-zinc-100 dark:border-zinc-900 text-zinc-800 dark:text-zinc-200">Products</NavLink>
              <Link
                to="/become-a-dealer"
                onClick={() => setOpen(false)}
                data-testid="m-nav-become-dealer"
                className="mt-4 px-5 py-3 bg-lime-500 text-zinc-50 dark:text-black font-bold text-center rounded-md"
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
