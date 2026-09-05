import Link from "next/link";
import { Mail, Phone, MapPin, ShieldCheck } from "lucide-react";
import { LOGO_URL, COMPANY, CATEGORIES } from "@/data/catalog";

function FacebookIcon(props) {
  return (
    <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
    </svg>
  );
}

function InstagramIcon(props) {
  return (
    <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
    </svg>
  );
}

function YoutubeIcon(props) {
  return (
    <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
      <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
    </svg>
  );
}

function TwitterIcon(props) {
  return (
    <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  );
}

export default function Footer() {
  return (
    <footer data-testid="site-footer" className="bg-surface-darkest border-t border-zinc-100 dark:border-zinc-900 mt-12">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 py-16 grid grid-cols-1 md:grid-cols-12 gap-10">
        {/* Brand */}
        <div className="md:col-span-4">
          <div className="flex items-center gap-3">
            <img src={LOGO_URL} alt="KrishiGears" className="h-14 w-14 rounded-full" />
            <div>
              <div className="font-display font-black text-xl">KRISHI<span className="text-lime-500">GEARS</span></div>
              <div className="text-[10px] tracking-[0.25em] text-zinc-500 dark:text-zinc-500 uppercase">Farming Tools</div>
            </div>
          </div>
          <p className="mt-6 text-zinc-600 dark:text-zinc-400 leading-relaxed text-sm">
            B2B agricultural machinery brand for dealer networks, distributor partners, institutional procurement, OEM programs and service-backed supply across India.
          </p>
          <div className="mt-6 flex gap-3">
          {[
            { Icon: FacebookIcon, label: "Facebook" },
            { Icon: InstagramIcon, label: "Instagram" },
            { Icon: YoutubeIcon, label: "YouTube" },
            { Icon: TwitterIcon, label: "Twitter" },
          ].map(({ Icon: I, label }) => (
            <a key={label} href="#" aria-label={label} className="h-9 w-9 grid place-items-center border border-zinc-200 dark:border-zinc-800 rounded-md hover:border-lime-500 hover:text-lime-500 text-zinc-600 dark:text-zinc-400 transition">
              <I className="h-4 w-4" />
            </a>
          ))}
          </div>
        </div>

        {/* Products */}
        <div className="md:col-span-3">
          <div className="text-xs font-bold tracking-[0.25em] uppercase text-zinc-500 dark:text-zinc-500 mb-5">Product Range</div>
          <ul className="grid grid-cols-1 gap-2.5">
            {CATEGORIES.slice(0, 10).map((c) => (
              <li key={c.slug}>
                <Link
                  href={`/products/category/${c.slug}`}
                  className="text-sm text-zinc-600 dark:text-zinc-400 hover:text-lime-500 transition"
                  data-testid={`footer-cat-${c.slug}`}
                >
                  {c.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* SEO + Pages */}
        <div className="md:col-span-2">
          <div className="text-xs font-bold tracking-[0.25em] uppercase text-zinc-500 dark:text-zinc-500 mb-5">Quick Links</div>
          <ul className="space-y-2.5 text-sm text-zinc-600 dark:text-zinc-400">
            <li><Link href="/about" className="hover:text-lime-500">About Us</Link></li>
            <li><Link href="/dealer-network" className="hover:text-lime-500">Dealer Network</Link></li>
            <li><Link href="/locations" className="hover:text-lime-500">All Supply Locations</Link></li>
            <li><Link href="/become-a-dealer" className="hover:text-lime-500">Become a Dealer</Link></li>
            <li><Link href="/bulk-order" className="hover:text-lime-500">Bulk Order</Link></li>
            <li><Link href="/warranty-and-support" className="hover:text-lime-500">Warranty</Link></li>
            <li><Link href="/blog" className="hover:text-lime-500">Blog</Link></li>
            <li><Link href="/contact" className="hover:text-lime-500">Contact Us</Link></li>
          </ul>
        </div>

        {/* Contact */}
        <div className="md:col-span-3">
          <div className="text-xs font-bold tracking-[0.25em] uppercase text-zinc-500 dark:text-zinc-500 mb-5">Get In Touch</div>
          <ul className="space-y-3 text-sm">
            <li className="flex items-start gap-3 text-zinc-600 dark:text-zinc-400">
              <Mail className="h-4 w-4 mt-0.5 text-lime-500 shrink-0" />
              <div className="space-y-1">
                <a href={`mailto:${COMPANY.email}`} className="hover:text-lime-500 block">Sales — {COMPANY.email}</a>
                <a href={`mailto:${COMPANY.support}`} className="hover:text-lime-500 block">Service — {COMPANY.support}</a>
                <a href={`mailto:${COMPANY.dealers}`} className="hover:text-lime-500 block">Dealers — {COMPANY.dealers}</a>
                <a href={`mailto:${COMPANY.accounts}`} className="hover:text-lime-500 block">Accounts — {COMPANY.accounts}</a>
              </div>
            </li>
            <li className="flex items-start gap-3 text-zinc-600 dark:text-zinc-400">
              <Phone className="h-4 w-4 mt-0.5 text-lime-500 shrink-0" />
              <a href={`tel:${COMPANY.phone.replace(/\s+/g, "")}`} className="hover:text-lime-500">{COMPANY.phone}</a>
            </li>
            <li className="flex items-start gap-3 text-zinc-600 dark:text-zinc-400">
              <MapPin className="h-4 w-4 mt-0.5 text-lime-500 shrink-0" />
              <span>{COMPANY.address}</span>
            </li>
            <li className="flex items-start gap-3 text-zinc-600 dark:text-zinc-400">
              <ShieldCheck className="h-4 w-4 mt-0.5 text-lime-500 shrink-0" />
              <span>GSTIN: <span className="text-zinc-800 dark:text-zinc-200 font-mono text-xs">{COMPANY.gst}</span></span>
            </li>
          </ul>
        </div>
      </div>

      {/* B2B supply links */}
      <div className="border-t border-zinc-200 dark:border-zinc-900">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12 py-6 grid md:grid-cols-2 gap-8">
          <div>
            <div className="text-[10px] tracking-[0.25em] uppercase text-zinc-600 mb-3">B2B Supply Programs</div>
            <div className="flex flex-wrap gap-x-4 gap-y-2 text-xs text-zinc-500">
              <Link href="/seo/power-weeders-supplier-india" className="hover:text-lime-500">Power Weeder Dealer Network</Link>
              <Link href="/seo/power-weeder-spare-parts-supplier-india" className="hover:text-lime-500">Power Weeder Spare Parts OEM Supply</Link>
            </div>
          </div>
          <div>
            <div className="text-[10px] tracking-[0.25em] uppercase text-zinc-600 mb-3">Top Dealer States</div>
            <div className="flex flex-wrap gap-x-4 gap-y-2 text-xs text-zinc-500">
              <Link href="/dealer/maharashtra" className="hover:text-lime-500">Maharashtra</Link>
              <Link href="/dealer/karnataka" className="hover:text-lime-500">Karnataka</Link>
              <Link href="/dealer/tamil-nadu" className="hover:text-lime-500">Tamil Nadu</Link>
              <Link href="/dealer/gujarat" className="hover:text-lime-500">Gujarat</Link>
              <Link href="/dealer/madhya-pradesh" className="hover:text-lime-500">Madhya Pradesh</Link>
              <Link href="/dealer/uttar-pradesh" className="hover:text-lime-500">Uttar Pradesh</Link>
              <Link href="/dealer/rajasthan" className="hover:text-lime-500">Rajasthan</Link>
              <Link href="/dealer/bihar" className="hover:text-lime-500">Bihar</Link>
              <Link href="/dealer-network" className="hover:text-lime-500 font-bold">View All States →</Link>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-zinc-100 dark:border-zinc-900">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <div className="text-xs text-zinc-500 dark:text-zinc-500">© {new Date().getFullYear()} KrishiGears. All rights reserved.</div>
          <div className="text-xs text-zinc-500 dark:text-zinc-500">{COMPANY.website}</div>
        </div>
      </div>
    </footer>
  );
}
