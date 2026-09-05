import Link from "next/link";
import {
  ShieldCheck, Truck, BadgeCheck, Wrench, Shield, Zap, Headphones,
  Handshake, ArrowRight, MapPin, Star, Quote, Play, ChevronRight
} from "lucide-react";
import { CATEGORIES, COMPANY, HERO_BG, INDIA_MAP, ABSTRACT_TERRAIN, FARMER_FIELD, TESTIMONIALS, TRUST_BADGES, FARMINGTOOLS_URL } from "@/data/catalog";
import ProductCard from "@/components/ProductCard";
import { useEffect, useState } from "react";
import { apiClient, formatApiError } from "@/lib/api";
import { toast } from "sonner";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";

const ICONS = { "shield-check": ShieldCheck, truck: Truck, "badge-check": BadgeCheck, wrench: Wrench, shield: Shield, zap: Zap, headphones: Headphones, handshake: Handshake };

export default function Home() {
  const featured = CATEGORIES.filter((c) => c.featured);
  const [featuredProducts, setFeaturedProducts] = useState([]);

  useEffect(() => {
    Promise.all([
      apiClient.get("/products?featured=true"),
      apiClient.get("/products"),
    ])
      .then(([feat, all]) => {
        const featured = Array.isArray(feat.data) ? feat.data : [];
        const allList = Array.isArray(all.data) ? all.data : [];
        const ids = new Set(featured.map((p) => p.slug));
        const fillers = allList.filter((p) => !ids.has(p.slug));
        setFeaturedProducts([...featured, ...fillers].slice(0, 6));
      })
      .catch(() => setFeaturedProducts([]));
    // apiClient is a module-level stable import — mount-only fetch.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const [videos, setVideos] = useState([]);
  const [reviews, setReviews] = useState([]);
  useEffect(() => {
    apiClient.get("/videos").then((r) => setVideos(Array.isArray(r.data) ? r.data : [])).catch(() => setVideos([]));
    apiClient.get("/reviews").then((r) => setReviews(Array.isArray(r.data) ? r.data : [])).catch(() => setReviews([]));
    // apiClient is a module-level stable import — mount-only fetch.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="bg-background text-foreground">
      {/* ========== HERO ========== */}
      <section data-testid="hero-section" className="relative min-h-[88vh] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <img src={HERO_BG} alt="" className="w-full h-full object-cover opacity-50" />
          <div className="absolute inset-0 bg-gradient-to-b from-white dark:from-black/40 via-black/60 to-black"></div>
          <div className="absolute inset-0 bg-grid-pattern bg-grid opacity-50"></div>
        </div>

        <div className="relative max-w-[1400px] mx-auto px-6 md:px-12 py-24 grid lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-8 animate-fade-up">
            <div className="inline-flex items-center gap-2 border border-lime-500/40 bg-lime-500/10 px-3 py-1.5 text-xs tracking-[0.25em] uppercase text-lime-400 font-bold rounded-sm">
              <span className="h-1.5 w-1.5 bg-lime-500 rounded-full animate-pulse"></span> Premium Agricultural Machinery · GST Registered
            </div>
            <h1 className="kg-h1 mt-6 text-balance">
              For the <span className="text-lime-500">Farmers,</span><br/>
              With the <span className="text-lime-500">Farmer,</span><br/>
              To the <span className="text-lime-500">Farmer.</span>
              <span className="block text-zinc-400 mt-2 text-2xl sm:text-3xl lg:text-4xl tracking-[0.3em]">HAMESHA.</span>
            </h1>
            <h2 className="sr-only">B2B Agricultural Machinery Supply, Dealer Network & OEM Distribution in India</h2>
            <p className="mt-6 text-zinc-300 text-lg max-w-2xl leading-relaxed">
              B2B agricultural machinery supply, dealer network development, OEM distribution and institutional procurement support across India. Retail buyers can purchase online through FarmingTools.in.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row flex-wrap items-start sm:items-center gap-4 sm:gap-6">
              <a
                href={FARMINGTOOLS_URL}
                target="_blank"
                rel="noreferrer"
                data-testid="hero-buy-online"
                className="group inline-flex items-center gap-2 bg-lime-500 hover:bg-lime-400 text-black dark:text-black font-bold px-8 py-4 rounded-md transition shadow-lg shadow-lime-500/20"
              >
                Buy Online
                <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition" />
              </a>
              <div className="flex items-center gap-4">
                <Link
                  href="/become-a-dealer"
                  data-testid="hero-dealer-btn"
                  className="inline-flex items-center gap-2 text-zinc-300 hover:text-lime-500 text-sm font-medium transition"
                >
                  Become Dealer
                </Link>
                <span className="text-zinc-300 dark:text-zinc-200 hidden sm:inline">•</span>
                <Link
                  href="/bulk-order"
                  data-testid="hero-bulk-btn"
                  className="inline-flex items-center gap-2 text-zinc-300 hover:text-lime-500 text-sm font-medium transition"
                >
                  Bulk Order Inquiry
                </Link>
              </div>
            </div>

            {/* Quick stats */}
            <div className="mt-16 grid grid-cols-3 gap-6 max-w-2xl">
              {[
                { v: "7+", l: "Power Weeder Models" },
                { v: "PAN India", l: "Supply Network" },
                { v: "100%", l: "Genuine Parts" },
              ].map((s) => (
                <div key={s.l} className="border-l-2 border-lime-500 pl-4">
                  <div className="font-display font-black text-3xl text-white">{s.v}</div>
                  <div className="text-xs uppercase tracking-[0.2em] text-zinc-400 mt-1">{s.l}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom marquee */}
        <div className="absolute bottom-0 left-0 right-0 border-t border-zinc-900 bg-black/60 backdrop-blur-md py-3 overflow-hidden">
          <div className="flex gap-12 whitespace-nowrap animate-marquee hover:[animation-play-state:paused]">
            {[...TRUST_BADGES, ...TRUST_BADGES].map((b, i) => {
              const Icon = ICONS[b.icon] || ShieldCheck;
              return (
                <div key={`marquee-${i}-${b.icon}`} className="flex items-center gap-2 text-zinc-400 text-sm">
                  <Icon className="h-4 w-4 text-lime-500"/> <span className="tracking-wider uppercase text-xs font-medium">{b.label}</span>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ========== CATEGORY GRID (Bento) ========== */}
      <section data-testid="categories-section" className="kg-section">
        <div className="max-w-[1400px] mx-auto">
          <div className="flex items-end justify-between flex-wrap gap-4 mb-10">
            <div>
              <div className="kg-eyebrow">Our Range</div>
              <h2 className="kg-h2 mt-3">Built for every <span className="text-lime-500">Indian farm.</span></h2>
            </div>
            <Link href="/products" data-testid="all-products-link" className="text-sm text-lime-500 hover:text-lime-400 flex items-center gap-1 font-bold">
              View all products <ChevronRight className="h-4 w-4" />
            </Link>
          </div>

          {/* Bento grid */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
            {/* Featured large cards */}
            {featured.map((c, idx) => {
              const Icon = c.icon;
              const big = idx === 0;
              return (
                <Link
                  key={c.slug}
                  href={`/products/category/${c.slug}`}
                  data-testid={`cat-card-${c.slug}`}
                  className={`relative group overflow-hidden border border-zinc-800 bg-surface hover:border-lime-500/60 transition-all duration-500 ${big ? "md:col-span-7 md:row-span-2 min-h-[480px]" : "md:col-span-5 min-h-[230px]"}`}
                >
                  <img src={c.image} alt={c.name} loading="lazy" className="absolute inset-0 w-full h-full object-cover opacity-30 group-hover:opacity-50 group-hover:scale-105 transition-all duration-700" />
                  <div className="absolute inset-0 bg-gradient-to-tr from-white dark:from-black via-white/70 dark:via-black/70 to-transparent"></div>
                  <div className="relative h-full p-7 flex flex-col justify-between">
                    <div className="h-12 w-12 grid place-items-center bg-lime-500/10 border border-lime-500/40 text-lime-500">
                      <Icon className="h-6 w-6" />
                    </div>
                    <div>
                      <div className="text-xs tracking-[0.25em] uppercase text-lime-500 font-bold">Category</div>
                      <h3 className="font-display font-black text-2xl md:text-3xl mt-2">{c.name}</h3>
                      <p className="text-zinc-300 text-sm mt-2 max-w-md">{c.short}</p>
                      <div className="mt-5 inline-flex items-center gap-2 text-sm font-bold text-white group-hover:text-lime-500 transition">
                        Browse Range <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition" />
                      </div>
                    </div>
                  </div>
                </Link>
              );
            })}

            {/* Rest as compact tiles */}
            {CATEGORIES.filter((c) => !c.featured).map((c) => {
              const Icon = c.icon;
              return (
                <Link
                  key={c.slug}
                  href={`/products/category/${c.slug}`}
                  data-testid={`cat-tile-${c.slug}`}
                  className="md:col-span-3 p-5 border border-zinc-800 bg-surface-dark hover:bg-surface hover:border-lime-500/40 hover:-translate-y-1 transition-all"
                >
                  <Icon className="h-5 w-5 text-lime-500 mb-3" />
                  <div className="font-display font-bold text-base leading-tight">{c.name}</div>
                  <div className="mt-2 text-xs text-zinc-400">View →</div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* ========== TRUST SIGNALS BAR ========== */}
      <section className="bg-surface border-y border-zinc-800 py-8">
        <div className="max-w-[1400px] mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8">
          <div className="flex flex-col items-center text-center gap-3">
            <ShieldCheck className="h-8 w-8 text-lime-500" />
            <div>
              <div className="font-bold text-sm">FMTTI Tested</div>
              <div className="text-[10px] text-zinc-400 uppercase tracking-wider">Quality Assured</div>
            </div>
          </div>
          <div className="flex flex-col items-center text-center gap-3">
            <Truck className="h-8 w-8 text-lime-500" />
            <div>
              <div className="font-bold text-sm">PAN India Delivery</div>
              <div className="text-[10px] text-zinc-400 uppercase tracking-wider">Fast Logistics</div>
            </div>
          </div>
          <div className="flex flex-col items-center text-center gap-3">
            <BadgeCheck className="h-8 w-8 text-lime-500" />
            <div>
              <div className="font-bold text-sm">Genuine OEM</div>
              <div className="text-[10px] text-zinc-400 uppercase tracking-wider">Original Spares</div>
            </div>
          </div>
          <div className="flex flex-col items-center text-center gap-3">
            <Headphones className="h-8 w-8 text-lime-500" />
            <div>
              <div className="font-bold text-sm">24x7 Support</div>
              <div className="text-[10px] text-zinc-400 uppercase tracking-wider">Expert Help</div>
            </div>
          </div>
        </div>
      </section>

      {/* ========== FEATURED PRODUCTS ========== */}
      {/* Build cache bust */}
      <section data-testid="featured-products-section" className="kg-section bg-surface-darker border-y border-zinc-900">
        <div className="max-w-[1400px] mx-auto">
          <div className="flex items-end justify-between flex-wrap gap-4 mb-10">
            <div>
              <div className="kg-eyebrow">Products We Supply</div>
              <h2 className="kg-h2 mt-3">Featured B2B equipment.</h2>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {featuredProducts.map((p) => (
              <ProductCard key={p.slug} product={p} />
            ))}
          </div>
        </div>
      </section>

      {/* ========== ABOUT KRISHIGEARS ========== */}
      <section data-testid="about-section" className="kg-section">
        <div className="max-w-[1400px] mx-auto grid lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6 relative">
            <div className="aspect-[4/5] overflow-hidden border border-zinc-800 relative">
              <img src={FARMER_FIELD} alt="Indian farmer" loading="lazy" className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-white dark:from-black via-transparent"></div>
            </div>
            <div className="absolute -bottom-6 -right-6 hidden md:block bg-lime-500 text-black dark:text-black p-6 max-w-xs lime-glow">
              <div className="font-display font-black text-4xl">10K+</div>
              <div className="text-sm font-bold uppercase tracking-wider mt-1">Farmers Served Across India</div>
            </div>
          </div>
          <div className="lg:col-span-6">
            <div className="kg-eyebrow">About KrishiGears</div>
            <h2 className="kg-h2 mt-3 text-balance">Built by farmers. <span className="text-lime-500">For farmers.</span></h2>
            <p className="text-zinc-300 mt-6 leading-relaxed">
              KrishiGears is India's trusted B2B agricultural machinery brand for dealers, distributors, FPOs, contractors, institutions and OEM partners. Our range is built for rugged field use and backed by genuine warranty support.
            </p>
            <p className="text-zinc-300 mt-4 leading-relaxed">
              We support serious procurement with GST invoicing, bulk dispatch coordination, genuine spare parts and dealer enablement. Retail orders are fulfilled through FarmingTools.in.
            </p>
            <div className="mt-8 grid grid-cols-2 gap-4">
              {[
                { v: "GST", l: "Registered Business" },
                { v: "PAN India", l: "Delivery & Support" },
                { v: "FMTTI", l: "Tested Equipment" },
                { v: "Genuine", l: "Spare Parts Only" },
              ].map((b) => (
                <div key={b.l} className="border border-zinc-800 p-4 bg-surface-dark">
                  <div className="text-lime-500 font-display font-black text-lg">{b.v}</div>
                  <div className="text-xs uppercase tracking-wider text-zinc-300 mt-1">{b.l}</div>
                </div>
              ))}
            </div>
            <Link href="/about" data-testid="about-learn-more" className="mt-8 inline-flex items-center gap-2 text-lime-500 font-bold hover:gap-3 transition-all">
              Learn more about us <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* ========== WHY CHOOSE US ========== */}
      <section data-testid="why-choose-section" className="kg-section bg-surface-darker border-y border-zinc-900 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20" style={{ backgroundImage: `url(${ABSTRACT_TERRAIN})`, backgroundSize: "cover" }}></div>
        <div className="max-w-[1400px] mx-auto relative">
          <div className="text-center mb-14 max-w-2xl mx-auto">
            <div className="kg-eyebrow">Why KrishiGears</div>
            <h2 className="kg-h2 mt-3">Eight reasons farmers <span className="text-lime-500">trust us.</span></h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {TRUST_BADGES.map((b) => {
              const Icon = ICONS[b.icon] || ShieldCheck;
              return (
                <div key={b.icon} data-testid={`trust-${b.icon}`} className="kg-card p-6 text-center">
                  <div className="h-12 w-12 mx-auto grid place-items-center bg-lime-500/10 border border-lime-500/40 text-lime-500 rounded-sm">
                    <Icon className="h-5 w-5" />
                  </div>
                  <div className="mt-4 text-sm font-bold uppercase tracking-wider text-white">{b.label}</div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ========== VIDEO GALLERY ========== */}
      <VideoGallery videos={videos} />

      {/* ========== TESTIMONIALS ========== */}
      <TestimonialsSection reviews={reviews} />

      {/* ========== DEALER OPPORTUNITY ========== */}
      <section data-testid="dealer-cta-section" className="kg-section relative overflow-hidden">
        <div className="absolute inset-0">
          <img src={INDIA_MAP} alt="" loading="lazy" className="w-full h-full object-cover opacity-30" />
          <div className="absolute inset-0 bg-gradient-to-r from-white dark:from-black via-black/80 to-transparent"></div>
        </div>
        <div className="max-w-[1400px] mx-auto relative grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="kg-eyebrow">Dealer Opportunity</div>
            <h2 className="kg-h2 mt-3 text-balance">Become a <span className="text-lime-500">KrishiGears</span> dealer in your district.</h2>
            <p className="text-zinc-300 mt-6 max-w-xl leading-relaxed">
              Strong margins, dedicated dealer support, fast dispatch and authorized warranty — partner with India's most trusted agricultural machinery distributor and grow with us.
            </p>
            <ul className="mt-6 space-y-2">
              {["Attractive dealer margins", "Co-branded marketing support", "Free dealer training", "Priority spare parts supply"].map((b) => (
                <li key={b} className="flex items-center gap-3 text-zinc-200 text-sm">
                  <div className="h-1.5 w-1.5 bg-lime-500"></div>{b}
                </li>
              ))}
            </ul>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link href="/become-a-dealer" data-testid="dealer-cta-apply" className="bg-lime-500 hover:bg-lime-400 text-black dark:text-black font-bold px-7 py-4 rounded-md transition inline-flex items-center gap-2">
                Apply as Dealer <ArrowRight className="h-4 w-4" />
              </Link>
              <Link href="/dealer-network" data-testid="dealer-cta-network" className="border border-zinc-700 hover:border-lime-500 hover:text-lime-500 px-7 py-4 font-bold rounded-md transition inline-flex items-center gap-2">
                View Network
              </Link>
            </div>
          </div>
          <div className="hidden lg:block">
            <div className="grid grid-cols-2 gap-4">
              {[
                { v: "28+", l: "States Covered" },
                { v: "500+", l: "Dealer Network" },
                { v: "1000+", l: "Pin Codes" },
                { v: "48h", l: "Fast Dispatch" },
              ].map((s) => (
                <div key={s.l} className="border border-lime-500/30 bg-black/70 backdrop-blur p-6">
                  <div className="font-display font-black text-4xl text-lime-500">{s.v}</div>
                  <div className="text-xs uppercase tracking-[0.2em] text-zinc-300 mt-2">{s.l}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ========== CONTACT FORM ========== */}
      <ContactStrip />
    </div>
  );
}

function ContactStrip() {
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState(null);
  const [form, setForm] = useState({ name: "", phone: "", email: "", subject: "General Enquiry", message: "" });
  const update = (k) => (e) => setForm((f) => ({ ...f, [k]: e.target.value }));
  const submit = async (e) => {
    e.preventDefault();
    setErrorMsg(null);
    if (!form.name || !form.phone || !form.message) {
      toast.error("Name, phone and message are required");
      return;
    }
    setLoading(true);
    try {
      await apiClient.post("/leads/contact", form);
      toast.success("Message sent! We will get back to you shortly.");
      setForm({ name: "", phone: "", email: "", subject: "General Enquiry", message: "" });
    } catch (err) {
      setErrorMsg(formatApiError(err));
    } finally {
      setLoading(false);
    }
  };

  return (
    <section data-testid="home-contact-section" className="kg-section bg-surface-darker border-t border-zinc-900">
      <div className="max-w-[1400px] mx-auto grid lg:grid-cols-2 gap-12">
        <div>
          <div className="kg-eyebrow">Get in touch</div>
          <h2 className="kg-h2 mt-3 text-balance">Have a question? <span className="text-lime-500">Talk to us.</span></h2>
          <p className="text-zinc-300 mt-6 leading-relaxed max-w-md">
            Our team is ready to help you choose the right machine, place a bulk order, or join our dealer network. Fill the form and we'll get back within 24 hours.
          </p>
          <div className="mt-8 space-y-4">
            <div className="flex items-start gap-4">
              <MapPin className="h-5 w-5 text-lime-500 mt-0.5 shrink-0" />
              <div>
                <div className="text-xs uppercase tracking-wider text-zinc-400">Head Office · PAN India Supply</div>
                <div className="text-sm">{COMPANY.address}</div>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <Headphones className="h-5 w-5 text-lime-500 mt-0.5 shrink-0" />
              <div>
                <div className="text-xs uppercase tracking-wider text-zinc-400">Customer Care</div>
                <div className="text-sm">{COMPANY.phone}</div>
              </div>
            </div>
          </div>
        </div>
        <form onSubmit={submit} className="border border-zinc-800 bg-surface-dark p-6 md:p-8 space-y-4">
          <div className="grid grid-cols-2 gap-3">
            <div>
              <Label htmlFor="contact-name" className="text-xs uppercase tracking-wider text-zinc-300">Name*</Label>
              <Input id="contact-name" name="name" required minLength={2} data-testid="home-contact-name" value={form.name} onChange={update("name")} className="bg-black border-zinc-800 mt-1.5" />
            </div>
            <div>
              <Label htmlFor="contact-phone" className="text-xs uppercase tracking-wider text-zinc-300">Phone*</Label>
              <Input id="contact-phone" type="tel" name="phone" required pattern="[0-9\+\-\s]+" data-testid="home-contact-phone" value={form.phone} onChange={update("phone")} className="bg-black border-zinc-800 mt-1.5" />
            </div>
          </div>
          <div>
            <Label htmlFor="contact-email" className="text-xs uppercase tracking-wider text-zinc-300">Email</Label>
            <Input id="contact-email" type="email" name="email" data-testid="home-contact-email" value={form.email} onChange={update("email")} className="bg-black border-zinc-800 mt-1.5" />
          </div>
          <div>
            <Label htmlFor="contact-subject" className="text-xs uppercase tracking-wider text-zinc-300">Subject</Label>
            <Input id="contact-subject" name="subject" data-testid="home-contact-subject" value={form.subject} onChange={update("subject")} className="bg-black border-zinc-800 mt-1.5" />
          </div>
          <div>
            <Label htmlFor="contact-message" className="text-xs uppercase tracking-wider text-zinc-300">Message*</Label>
            <Textarea id="contact-message" name="message" required minLength={10} data-testid="home-contact-message" rows={4} value={form.message} onChange={update("message")} className="bg-black border-zinc-800 mt-1.5" />
          </div>
          {errorMsg && (
            <div className="bg-red-500/10 border border-red-500/50 text-red-500 p-4 rounded-md flex items-center justify-between">
              <span className="text-sm">{errorMsg}</span>
              <button type="button" onClick={submit} className="text-sm font-bold underline hover:no-underline">Retry</button>
            </div>
          )}
          <button
            type="submit"
            disabled={loading}
            data-testid="home-contact-submit"
            className="w-full bg-lime-500 hover:bg-lime-400 text-black dark:text-black font-bold py-3.5 rounded-md transition disabled:opacity-50"
          >
            {loading ? "Sending..." : "Send Message"}
          </button>
        </form>
      </div>
    </section>
  );
}

function getYoutubeEmbed(url) {
  if (!url) return null;
  const m = url.match(/(?:youtube\.com\/(?:[^/]+\/.+\/|(?:v|e(?:mbed)?)\/|.*[?&]v=)|youtu\.be\/)([^"&?/\s]{11})/);
  return m ? `https://www.youtube.com/embed/${m[1]}` : null;
}

function VideoGallery({ videos }) {
  if (!videos || videos.length === 0) return null;
  return (
    <section data-testid="video-section" className="kg-section">
      <div className="max-w-[1400px] mx-auto">
        <div className="kg-eyebrow">In Action</div>
        <h2 className="kg-h2 mt-3">Watch our equipment <span className="text-lime-500">at work.</span></h2>
        <div className="mt-10 grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {videos.slice(0, 6).map((v) => <VideoCard key={v.id} video={v} />)}
        </div>
      </div>
    </section>
  );
}

function VideoCard({ video }) {
  const youtubeEmbed = getYoutubeEmbed(video.url);
  const [playing, setPlaying] = useState(false);

  if (youtubeEmbed && playing) {
    return (
      <div className="aspect-video overflow-hidden border border-zinc-800 bg-black">
        <iframe
          src={`${youtubeEmbed}?autoplay=1`}
          title={video.title}
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className="w-full h-full"
        />
      </div>
    );
  }

  const thumb = video.thumbnail || (youtubeEmbed ? `https://img.youtube.com/vi/${youtubeEmbed.split("/embed/")[1]}/hqdefault.jpg` : "");
  const onClick = (e) => {
    if (youtubeEmbed) { e.preventDefault(); setPlaying(true); }
  };

  return (
    <a
      href={video.url}
      target={youtubeEmbed ? "_self" : "_blank"}
      rel="noreferrer"
      onClick={onClick}
      data-testid={`home-video-${video.id}`}
      className="relative aspect-video overflow-hidden border border-zinc-800 group cursor-pointer block bg-zinc-50 dark:bg-zinc-900"
    >
      {thumb && <img src={thumb} alt={video.title} loading="lazy" className="w-full h-full object-cover opacity-70 group-hover:opacity-90 transition"/>}
      <div className="absolute inset-0 bg-gradient-to-t from-white dark:from-black/80 via-white/40 dark:via-black/40 to-transparent"/>
      <div className="absolute inset-0 grid place-items-center">
        <div className="h-16 w-16 grid place-items-center bg-lime-500 text-black dark:text-black rounded-full group-hover:scale-110 transition">
          <Play className="h-6 w-6 fill-black ml-1" />
        </div>
      </div>
      <div className="absolute bottom-3 left-3 right-3">
        <div className="text-[10px] tracking-[0.25em] uppercase text-lime-400 font-bold">{video.source}</div>
        <div className="text-white font-bold text-sm leading-tight mt-1 line-clamp-2">{video.title}</div>
      </div>
    </a>
  );
}

function TestimonialsSection({ reviews }) {
  const list = reviews && reviews.length > 0 ? reviews : TESTIMONIALS;
  return (
    <section data-testid="testimonials-section" className="kg-section bg-surface-darker border-y border-zinc-900">
      <div className="max-w-[1400px] mx-auto">
        <div className="kg-eyebrow">Voices from the field</div>
        <h2 className="kg-h2 mt-3 max-w-2xl">What our <span className="text-lime-500">farmers & dealers</span> say.</h2>
        <div className="mt-10 grid md:grid-cols-2 lg:grid-cols-4 gap-5">
          {list.slice(0, 8).map((t, i) => (
            <div key={t.id || `t-${i}`} data-testid={`testimonial-${i}`} className="kg-card p-6">
              {t.photo_url && (
                <div className="h-14 w-14 overflow-hidden border border-zinc-800 mb-4 bg-white">
                  <img src={t.photo_url} alt={t.name} loading="lazy" className="w-full h-full object-cover"/>
                </div>
              )}
              {!t.photo_url && <Quote className="h-6 w-6 text-lime-500 mb-4" />}
              <p className="text-zinc-200 text-sm leading-relaxed">{t.text}</p>
              <div className="mt-5 flex items-center gap-1">
                {Array.from({ length: t.rating || 5 }).map((_, j) => (
                  <Star key={`star-${j}`} className="h-3.5 w-3.5 fill-lime-500 text-lime-500" />
                ))}
              </div>
              <div className="mt-4 pt-4 border-t border-zinc-800">
                <div className="font-bold text-sm">{t.name}</div>
                <div className="text-xs text-zinc-400">{[t.role, t.location].filter(Boolean).join(" · ")}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
