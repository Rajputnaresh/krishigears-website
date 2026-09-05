import { Link } from "react-router-dom";
import { Mail, Phone, MapPin, Facebook, Instagram, Youtube, Twitter, ShieldCheck } from "lucide-react";
import { LOGO_URL, COMPANY, CATEGORIES } from "@/data/catalog";

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
            { Icon: Facebook, label: "Facebook" },
            { Icon: Instagram, label: "Instagram" },
            { Icon: Youtube, label: "YouTube" },
            { Icon: Twitter, label: "Twitter" },
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
                  to={`/products/category/${c.slug}`}
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
            <li><Link to="/about" className="hover:text-lime-500">About Us</Link></li>
            <li><Link to="/dealer-network" className="hover:text-lime-500">Dealer Network</Link></li>
            <li><Link to="/locations" className="hover:text-lime-500">All Supply Locations</Link></li>
            <li><Link to="/become-a-dealer" className="hover:text-lime-500">Become a Dealer</Link></li>
            <li><Link to="/bulk-order" className="hover:text-lime-500">Bulk Order</Link></li>
            <li><Link to="/warranty-and-support" className="hover:text-lime-500">Warranty</Link></li>
            <li><Link to="/blog" className="hover:text-lime-500">Blog</Link></li>
            <li><Link to="/contact" className="hover:text-lime-500">Contact Us</Link></li>
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
              <Link to="/seo/power-weeders-supplier-india" className="hover:text-lime-500">Power Weeder Dealer Network</Link>
              <Link to="/seo/power-weeder-spare-parts-supplier-india" className="hover:text-lime-500">Power Weeder Spare Parts OEM Supply</Link>
            </div>
          </div>
          <div>
            <div className="text-[10px] tracking-[0.25em] uppercase text-zinc-600 mb-3">Top Dealer States</div>
            <div className="flex flex-wrap gap-x-4 gap-y-2 text-xs text-zinc-500">
              <Link to="/dealer/maharashtra" className="hover:text-lime-500">Maharashtra</Link>
              <Link to="/dealer/karnataka" className="hover:text-lime-500">Karnataka</Link>
              <Link to="/dealer/tamil-nadu" className="hover:text-lime-500">Tamil Nadu</Link>
              <Link to="/dealer/gujarat" className="hover:text-lime-500">Gujarat</Link>
              <Link to="/dealer/madhya-pradesh" className="hover:text-lime-500">Madhya Pradesh</Link>
              <Link to="/dealer/uttar-pradesh" className="hover:text-lime-500">Uttar Pradesh</Link>
              <Link to="/dealer/rajasthan" className="hover:text-lime-500">Rajasthan</Link>
              <Link to="/dealer/bihar" className="hover:text-lime-500">Bihar</Link>
              <Link to="/dealer-network" className="hover:text-lime-500 font-bold">View All States →</Link>
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
