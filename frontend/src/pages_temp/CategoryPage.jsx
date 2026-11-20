"use client";
import Image from "next/image";
import { useSyncExternalStore, useMemo } from "react";
import Link from "next/link";
import { useParams } from "next/navigation";
import { ChevronRight, Search, X, SlidersHorizontal, RotateCcw } from "lucide-react";
import { CATEGORIES, COMPANY, PRODUCTS, farmingtoolsCategoryUrl } from "@/data/catalog";
import EnquiryDialog from "@/components/EnquiryDialog";
import ProductCard from "@/components/ProductCard";
import WhatsAppIcon from "@/components/WhatsAppIcon";
import PowerWeederGuide from "@/components/PowerWeederGuide";
import { productSpecifications, CATEGORY_FAQS } from "@/lib/product-specifications.mjs";
import { trackWhatsAppClick } from "@/lib/analytics";

export default function CategoryPage() {
  const { slug } = useParams();
  const category = CATEGORIES.find((c) => c.slug === slug);
  const items = category ? PRODUCTS.filter((p) => p.category === slug) : [];

  if (!category) {
    return (
      <div className="kg-section text-center">
        <h1 className="kg-h2">Category not found</h1>
        <Link href="/products" className="mt-6 inline-flex items-center gap-2 text-lime-500"><ChevronRight className="h-4 w-4"/> All products</Link>
      </div>
    );
  }

  const Icon = category.icon;
  const waMsg = encodeURIComponent(`Hello KrishiGears, I am interested in ${category.name} for bulk/dealer/institutional supply. Please share details.`);
  const supplySignals = ["Dealer supply", "Bulk procurement", "Institutional orders", "Service support"];

  return (
    <div data-testid="category-page" className="kg-section">
      <div className="max-w-[1400px] mx-auto">
        <div className="flex items-center gap-2 text-xs text-zinc-400 mb-8">
          <Link href="/" className="hover:text-lime-500">Home</Link>
          <ChevronRight className="h-3 w-3" />
          <Link href="/products" className="hover:text-lime-500">Products</Link>
          <ChevronRight className="h-3 w-3" />
          <span className="text-lime-500">{category.name}</span>
        </div>

        <div className="grid lg:grid-cols-12 gap-10 items-center mb-12">
          <div className="lg:col-span-7">
            <div className="inline-flex items-center gap-3 mb-4">
              <div className="h-12 w-12 grid place-items-center bg-lime-500/10 border border-lime-500/40 text-lime-500">
                <Icon className="h-6 w-6" />
              </div>
              <div className="kg-eyebrow">Supply Category</div>
            </div>
            <h1 className="kg-h1">{category.name} Supply Category</h1>
            <p className="text-zinc-300 mt-5 leading-relaxed max-w-xl">{category.short}</p>
            <div className="mt-5 flex flex-wrap gap-2">
              {supplySignals.map((signal) => (
                <span key={signal} className="text-xs font-bold tracking-wider uppercase px-3 py-1.5 border border-zinc-800 text-zinc-200 bg-black/30">
                  {signal}
                </span>
              ))}
            </div>
            <div className="mt-6 flex flex-wrap gap-3">
              <EnquiryDialog product={category.name} trigger={
                <button data-testid="cat-enquiry-btn" className="bg-lime-500 hover:bg-lime-400 text-black dark:text-black font-bold px-6 py-3.5 rounded-md">Bulk / Dealer Inquiry</button>
              } />
              <Link href="/become-a-dealer" data-testid="cat-dealer-btn" className="border border-zinc-700 hover:border-lime-500 hover:text-lime-500 px-6 py-3.5 font-bold rounded-md">
                Become Dealer
              </Link>
              <Link href="/bulk-order" data-testid="cat-institutional-btn" className="border border-zinc-700 hover:border-lime-500 hover:text-lime-500 px-6 py-3.5 font-bold rounded-md">
                Institutional Supply
              </Link>
              <a
                href={farmingtoolsCategoryUrl(category.slug)}
                target="_blank"
                rel="noreferrer"
                data-testid="cat-buy-online-btn"
                className="border border-zinc-700 hover:border-lime-500 hover:text-lime-500 px-6 py-3.5 font-bold rounded-md"
              >
                Browse FarmingTools Retail Listings
              </a>
              <a
                href={`https://api.whatsapp.com/send?phone=${COMPANY.whatsapp}&text=${waMsg}&utm_source=website&utm_medium=whatsapp&utm_campaign=kg_catalog`}
                target="_blank"
                rel="noreferrer"
                aria-label={`WhatsApp Enquiry for ${category.name}`}
                onClick={() => trackWhatsAppClick("category_page", slug)}
                data-testid="cat-whatsapp-btn"
                className="border border-zinc-700 hover:border-lime-500 hover:text-lime-500 px-6 py-3.5 font-bold rounded-md inline-flex items-center gap-2"
              >
                <WhatsAppIcon className="h-4 w-4"/> WhatsApp Enquiry
              </a>
            </div>
          </div>
          <div className="lg:col-span-5">
            <div className="aspect-[4/3] overflow-hidden border border-zinc-800/80 rounded-xl bg-zinc-900/40 p-3">
              <div className="w-full h-full rounded-lg bg-zinc-950/70 p-4 flex items-center justify-center border border-zinc-800/50">
                <Image src={category.image} alt={category.name} width={640} height={480} sizes="(max-width: 1024px) 100vw, 42vw" className="w-full h-full object-contain" />
              </div>
            </div>
          </div>
        </div>

        <ModelsSection items={items} category={category} />

        {/* B2B Wholesale Commercial Guide & FAQ Section (>300 words SEO Content) */}
        {slug === "power-weeders" ? <PowerWeederGuide items={items} /> : <div className="mt-16 pt-12 border-t border-zinc-800 space-y-12">
          <div className="grid lg:grid-cols-12 gap-8 items-start">
            <div className="lg:col-span-7 space-y-4">
              <span className="text-xs font-bold text-lime-400 uppercase tracking-widest">
                Procurement & Dealer Guide
              </span>
              <h2 className="text-2xl md:text-3xl font-display font-black text-white">
                {category.name} Wholesale Supply & Dealership in India
              </h2>
              <p className="text-zinc-300 leading-relaxed text-sm">
                KrishiGears supplies commercial-grade <strong className="text-white">{category.name}</strong> engineered specifically for intensive Indian agricultural soils and multi-crop farming operations. Every machine and component in our catalog adheres to strict commercial manufacturing guidelines, guaranteeing rated power output, reinforced housings, and precision metallurgy tailored for Indian operating conditions.
              </p>
              <p className="text-zinc-300 leading-relaxed text-sm">
                Whether you are a machinery dealer, regional distributor or FPO, request a quotation confirming the supplied brand, configuration, price, warranty, availability, freight and dispatch timing before placing an order.
              </p>
            </div>
            <div className="lg:col-span-5 bg-zinc-900/60 border border-zinc-800 rounded-lg p-6 space-y-4">
              <h3 className="font-display font-bold text-white text-base flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-lime-400" />
                Wholesale Dealer Advantages
              </h3>
              <ul className="space-y-2.5 text-xs text-zinc-300">
                <li className="flex items-start gap-2">
                  <span className="text-lime-400 font-bold">✓</span>
                  <span><strong>Dealer Pricing:</strong> Request delivered cost and quantity-specific terms for the selected model.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-lime-400 font-bold">✓</span>
                  <span><strong>Order Quantities:</strong> Confirm the required minimum order and procurement terms.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-lime-400 font-bold">✓</span>
                  <span><strong>Full Tax Invoicing:</strong> 100% compliant GST invoices (HSN code verified) for input tax credit (ITC) and subsidies.</span>
                </li>
              </ul>
            </div>
          </div>

          {/* State-by-State Agriculture Subsidy Eligibility Table - strictly for machinery categories eligible for farm subsidies */}
          {["crop-reapers", "farm-machinery"].includes(slug) && (
            <div className="border border-zinc-800 bg-zinc-950/60 rounded-xl p-6 md:p-8 space-y-4">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-2">
                <div>
                  <span className="text-xs font-bold text-lime-400 uppercase tracking-widest">Government Subsidies</span>
                  <h3 className="text-xl font-display font-bold text-white mt-1">State Subsidy Guidelines for {category.name} (DBT / SMAM)</h3>
                </div>
                <span className="text-xs font-mono text-zinc-400 bg-zinc-900 border border-zinc-800 px-3 py-1.5 rounded self-start md:self-auto">
                  FMTTI Commercial Test Compliant
                </span>
              </div>
              <p className="text-xs text-zinc-300 leading-relaxed max-w-3xl">
                KrishiGears agricultural power machinery qualifies for direct beneficiary subsidies under the Sub-Mission on Agricultural Mechanization (SMAM) and state agriculture portals. Authorized dealers are provided complete documentation to facilitate customer approvals:
              </p>
              <div className="overflow-x-auto">
                <table className="w-full text-left text-xs border-collapse">
                  <thead>
                    <tr className="border-b border-zinc-800 text-zinc-400 font-semibold bg-zinc-900/50">
                      <th className="py-3 px-4">State / Portal</th>
                      <th className="py-3 px-4">Scheme Name</th>
                      <th className="py-3 px-4">Subsidy Percentage</th>
                      <th className="py-3 px-4">Eligible Beneficiaries</th>
                      <th className="py-3 px-4">Required Documents</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-zinc-850 text-zinc-300">
                    <tr className="hover:bg-zinc-900/30">
                      <td className="py-3 px-4 font-bold text-white">Rajasthan (Raj Kisan Sathi)</td>
                      <td className="py-3 px-4">Krishi Yantra Anudan Yojana</td>
                      <td className="py-3 px-4 text-lime-400 font-semibold">40% – 50% (Up to ₹25,000)</td>
                      <td className="py-3 px-4">Small, marginal, SC/ST, women farmers</td>
                      <td className="py-3 px-4">GST invoice, Jamabandi, Aadhaar/Jan Aadhaar</td>
                    </tr>
                    <tr className="hover:bg-zinc-900/30">
                      <td className="py-3 px-4 font-bold text-white">Madhya Pradesh (e-Krishi Yantra)</td>
                      <td className="py-3 px-4">SMAM / Rashtriya Krishi Vikas Yojana</td>
                      <td className="py-3 px-4 text-lime-400 font-semibold">40% – 50% DBT Grant</td>
                      <td className="py-3 px-4">All registered landholding farmers</td>
                      <td className="py-3 px-4">FMTTI Test Certificate, B1 Khasra, Bank Passbook</td>
                    </tr>
                    <tr className="hover:bg-zinc-900/30">
                      <td className="py-3 px-4 font-bold text-white">Maharashtra (MahaDBT)</td>
                      <td className="py-3 px-4">Krishi Yantrikikaran Scheme</td>
                      <td className="py-3 px-4 text-lime-400 font-semibold">Up to 50% (Fixed cap)</td>
                      <td className="py-3 px-4">Individual farmers & FPOs</td>
                      <td className="py-3 px-4">7/12 & 8A Extract, GST Bill, Caste Certificate</td>
                    </tr>
                    <tr className="hover:bg-zinc-900/30">
                      <td className="py-3 px-4 font-bold text-white">Uttar Pradesh (UP Agriculture)</td>
                      <td className="py-3 px-4">Yantra Anudan Scheme (E-Lottery)</td>
                      <td className="py-3 px-4 text-lime-400 font-semibold">40% – 50% Token Grant</td>
                      <td className="py-3 px-4">Pre-registered portal farmers</td>
                      <td className="py-3 px-4">Dealer bill, serial verification, Bank DBT link</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {/* Category FAQs */}
          <div className="bg-zinc-950 border border-zinc-800 rounded-xl p-6 md:p-8 space-y-6">
            <div className="space-y-1">
              <h3 className="text-xl md:text-2xl font-display font-bold text-white">
                Frequently Asked Questions — {category.name} Price & Supply
              </h3>
              <p className="text-xs text-zinc-400">
                Common dealer and institutional queries regarding procurement, pricing, and subsidy verification.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {(CATEGORY_FAQS[slug] || CATEGORY_FAQS["power-weeders"] || []).map((faq, idx) => (
                <div key={idx} className="border border-zinc-850 bg-zinc-900/30 rounded-lg p-5 space-y-2">
                  <h4 className="font-bold text-sm text-white flex items-center gap-2">
                    <span className="text-lime-400">Q:</span>
                    {faq.question}
                  </h4>
                  <p className="text-xs text-zinc-300 leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>}
      </div>
    </div>
  );
}

function subscribeToFilters(callback) {
  window.addEventListener("popstate", callback);
  return () => window.removeEventListener("popstate", callback);
}

function ModelsSection({ items, category }) {
  const query = useSyncExternalStore(subscribeToFilters, () => window.location.search, () => "");
  const params = new URLSearchParams(query);
  const search = params.get("q") || "";
  const fuel = ["petrol", "diesel", "electric"].includes(params.get("fuel")) ? params.get("fuel") : "all";
  const hpRange = ["under-5", "5-7", "8-10", "10-plus"].includes(params.get("hp")) ? params.get("hp") : "all";
  const transmission = params.get("transmission") || "all";
  const rotary = params.get("rotary") || "all";

  const updateUrl = (newSearch, newFuel, newHp, newTransmission = transmission, newRotary = rotary) => {
    if (typeof window === "undefined") return;
    const params = new URLSearchParams();
    if (newSearch.trim()) params.set("q", newSearch.trim());
    if (newFuel !== "all") params.set("fuel", newFuel);
    if (newHp !== "all") params.set("hp", newHp);
    if (newTransmission !== "all") params.set("transmission", newTransmission);
    if (newRotary !== "all") params.set("rotary", newRotary);
    const qs = params.toString();
    const newUrl = qs ? `${window.location.pathname}?${qs}` : window.location.pathname;
    window.history.replaceState(null, "", newUrl);
    window.dispatchEvent(new PopStateEvent("popstate"));
  };

  const handleSearchChange = (val) => {
    updateUrl(val, fuel, hpRange);
  };

  const handleFuelChange = (val) => {
    updateUrl(search, val, hpRange);
  };

  const handleHpChange = (val) => {
    updateUrl(search, fuel, val);
  };

  const extractHp = (product) => {
    const text = productSpecifications(product).find((s) => s.name === "Power")?.value || product.name;
    const match = text.match(/(\d+(?:\.\d+)?)\s*HP/i);
    return match ? parseFloat(match[1]) : null;
  };

  const extractFuel = (product) => {
    const text = productSpecifications(product).filter((s) => ["Fuel", "Engine"].includes(s.name)).map((s) => s.value).join(" ").toLowerCase();
    if (text.includes("petrol") || text.includes("gasoline") || text.includes("gas")) return "petrol";
    if (text.includes("diesel")) return "diesel";
    if (text.includes("electric") || text.includes("battery") || text.includes("cordless")) return "electric";
    return "other";
  };

  const isSpareParts = category?.slug === "power-weeder-spare-parts";

  const filteredItems = useMemo(() => {
    if (!items) return [];
    return items.filter((p) => {
      const specs = productSpecifications(p);
      if (transmission !== "all" && !specs.some((s) => s.name === "Transmission" && s.value === transmission)) return false;
      if (rotary !== "all" && !specs.some((s) => s.name === "Rotary type" && s.value === rotary)) return false;
      if (search.trim()) {
        const q = search.toLowerCase();
        const matchName = p.name?.toLowerCase().includes(q);
        const matchModel = p.model?.toLowerCase().includes(q);
        const matchSpec = Object.values(p.specs || {}).some((v) => String(v).toLowerCase().includes(q));
        if (!matchName && !matchModel && !matchSpec) return false;
      }
      if (fuel !== "all") {
        const f = extractFuel(p);
        if (f !== fuel) return false;
      }
      if (hpRange !== "all") {
        const hp = extractHp(p);
        if (hp === null) return false;
        if (hpRange === "under-5" && hp >= 5) return false;
        if (hpRange === "5-7" && (hp < 5 || hp > 7.5)) return false;
        if (hpRange === "8-10" && (hp < 8 || hp > 10.5)) return false;
        if (hpRange === "10-plus" && hp < 10) return false;
      }
      return true;
    });
  }, [items, search, fuel, hpRange, transmission, rotary]);

  const hasActiveFilters = search.trim() !== "" || fuel !== "all" || hpRange !== "all" || transmission !== "all" || rotary !== "all";

  const resetFilters = () => {
    updateUrl("", "all", "all", "all", "all");
  };

  if (items === null) {
    return <div className="text-center text-zinc-400 py-12">Loading models…</div>;
  }
  if (items.length === 0) {
    return (
      <div className="border border-zinc-800 bg-surface-dark p-10 text-center">
        <p className="text-zinc-200">Multiple supply models are available in this category. Request the B2B catalogue and our team will share dealer, distributor, bulk and institutional supply details.</p>
        <div className="mt-6">
          <EnquiryDialog product={category.name} trigger={
            <button data-testid="cat-empty-enquiry-btn" className="bg-lime-500 hover:bg-lime-400 text-black dark:text-black font-bold px-7 py-4 rounded-md">Request Catalogue</button>
          } />
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 pb-2 border-b border-zinc-800">
        <div>
          <h2 className="kg-h2" aria-live="polite">
            Supply <span className="text-lime-500">Models</span> ({filteredItems.length}
            {filteredItems.length !== items.length ? ` of ${items.length}` : ""})
          </h2>
          <p className="text-xs text-zinc-400 mt-1">
            Catalogue models for specification comparison. Availability, price and dispatch require supplier confirmation.
          </p>
        </div>

        {/* Search input */}
        <div className="relative w-full md:w-72">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-zinc-400" />
          <input
            type="text"
            value={search}
            onChange={(e) => handleSearchChange(e.target.value)}
            aria-label="Search models or specifications"
            placeholder="Search model or spec..."
            className="w-full bg-zinc-900 border border-zinc-800 rounded-lg pl-9 pr-8 py-2 text-xs text-white placeholder-zinc-500 focus:outline-none focus:border-lime-500"
          />
          {search && (
            <button
              aria-label="Clear model search"
              onClick={() => handleSearchChange("")}
              className="absolute right-2.5 top-1/2 -translate-y-1/2 text-zinc-400 hover:text-white"
            >
              <X className="h-3.5 w-3.5" />
            </button>
          )}
        </div>
      </div>

      {/* Filter Chips Bar */}
      <div className="bg-zinc-900/40 border border-zinc-800/80 rounded-xl p-4 flex flex-wrap items-center justify-between gap-4">
        <div className="flex flex-wrap items-center gap-3">
          <span className="text-xs font-semibold text-zinc-400 flex items-center gap-1.5 mr-1">
            <SlidersHorizontal className="h-3.5 w-3.5 text-lime-400" /> Filters:
          </span>

          {/* Fuel Filter Pills (only for machinery, not pure spare parts) */}
          {!isSpareParts && (
            <div className="flex flex-wrap items-center gap-1 bg-zinc-950 border border-zinc-800 rounded-lg p-1">
              {[
                { id: "all", label: "All Fuel" },
                { id: "petrol", label: "Petrol" },
                { id: "diesel", label: "Diesel" },
                { id: "electric", label: "Electric" }
              ].map((f) => (
                <button
                  key={f.id}
                  aria-pressed={fuel === f.id}
                  onClick={() => handleFuelChange(f.id)}
                  className={`px-3 py-2.5 min-h-11 rounded text-xs font-medium transition-colors ${
                    fuel === f.id
                      ? "bg-lime-500 text-black font-bold"
                      : "text-zinc-400 hover:text-white hover:bg-zinc-900"
                  }`}
                >
                  {f.label}
                </button>
              ))}
            </div>
          )}

          {/* Power Range Filter Pills */}
          {!isSpareParts && (
            <div className="flex flex-wrap items-center gap-1 bg-zinc-950 border border-zinc-800 rounded-lg p-1">
              {[
                { id: "all", label: "All HP" },
                { id: "under-5", label: "< 5 HP" },
                { id: "5-7", label: "5 – 7.5 HP" },
                { id: "8-10", label: "8 – 10 HP" },
                { id: "10-plus", label: "10+ HP" }
              ].map((hp) => (
                <button
                  key={hp.id}
                  aria-pressed={hpRange === hp.id}
                  onClick={() => handleHpChange(hp.id)}
                  className={`px-3 py-2.5 min-h-11 rounded text-xs font-medium transition-colors ${
                    hpRange === hp.id
                      ? "bg-lime-500 text-black font-bold"
                      : "text-zinc-400 hover:text-white hover:bg-zinc-900"
                  }`}
                >
                  {hp.label}
                </button>
              ))}
            </div>
          )}
        </div>

        {category.slug === "power-weeders" && [
          { name: "Transmission", value: transmission, param: "transmission" },
          { name: "Rotary type", value: rotary, param: "rotary" },
        ].map((facet) => <label key={facet.param} className="text-sm text-zinc-200">{facet.name}
          <select className="ml-2 min-h-11 bg-zinc-950 border border-zinc-700 rounded p-2" value={facet.value} onChange={(event) => {
            const value = event.target.value;
            updateUrl(search, fuel, hpRange, facet.param === "transmission" ? value : transmission, facet.param === "rotary" ? value : rotary);
          }}>
            <option value="all">All</option>
            {[...new Set(items.flatMap((p) => productSpecifications(p).filter((s) => s.name === facet.name).map((s) => s.value)))].sort().map((value) => <option key={value} value={value}>{value}</option>)}
          </select>
        </label>)}
        {hasActiveFilters && (
          <button
            onClick={resetFilters}
            className="text-xs text-zinc-400 hover:text-lime-400 flex items-center gap-1 transition-colors ml-auto"
          >
            <RotateCcw className="h-3 w-3" /> Reset Filters
          </button>
        )}
      </div>

      {/* Results Grid */}
      {filteredItems.length === 0 ? (
        <div className="border border-zinc-800 bg-surface-dark p-12 text-center rounded-xl">
          <p className="text-zinc-300 font-semibold">No models match your selected filter criteria.</p>
          <p className="text-xs text-zinc-500 mt-1">Try clearing your filters or contact our B2B desk for custom configurations.</p>
          <button
            onClick={resetFilters}
            className="mt-5 bg-zinc-800 hover:bg-zinc-700 text-white font-medium px-5 py-2.5 rounded-md text-xs inline-flex items-center gap-2"
          >
            <RotateCcw className="h-3.5 w-3.5" /> Clear All Filters
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {filteredItems.map((p) => (
            <ProductCard key={p.slug} product={p} />
          ))}
        </div>
      )}
    </div>
  );
}
