import { useState, useEffect, useRef } from "react";
import Icon from "@/components/ui/icon";

// ─────────────────────────────────────────────
// SITE CONFIG — edit these values anytime
// ─────────────────────────────────────────────
const SITE = {
  name: "SmartSourceHub",
  tagline: "Global Trade & Commerce",
  owner: "Ahmad Jilani",
  whatsapp: "962791531496",
  phone: "+962791531496",
  email: "info@smartsourcehub.com",
  location: "Jordan · Worldwide",
  year: "2025",
};

// ─────────────────────────────────────────────
// IMAGE CONFIG — replace any URL to swap images
// Just paste your new image URL here and done!
// ─────────────────────────────────────────────
const IMAGES = {
  hero: "https://cdn.poehali.dev/projects/ca4f54b2-59bc-40e4-a41d-c1741d566fb8/files/a8b2bf6b-3156-4c1c-8d3e-b3570d4ad21f.jpg",
  electronics: "https://cdn.poehali.dev/projects/ca4f54b2-59bc-40e4-a41d-c1741d566fb8/files/58a3c51f-8d03-4a5c-92fa-e32499d3b033.jpg",
  apparel: "https://cdn.poehali.dev/projects/ca4f54b2-59bc-40e4-a41d-c1741d566fb8/files/c1fc665b-982d-439f-aa57-b21f6e4e37f1.jpg",
  homeLiving: "https://cdn.poehali.dev/projects/ca4f54b2-59bc-40e4-a41d-c1741d566fb8/files/a3e7400b-c3fa-44df-845d-b5c58a5f3578.jpg",
  industrial: "https://cdn.poehali.dev/projects/ca4f54b2-59bc-40e4-a41d-c1741d566fb8/files/13b422b9-460d-4edd-ab9c-9ec78b24d590.jpg",
  healthBeauty: "https://cdn.poehali.dev/projects/ca4f54b2-59bc-40e4-a41d-c1741d566fb8/files/6fd3b167-0a79-49da-be65-4b37e2900f6f.jpg",
  food: "https://cdn.poehali.dev/projects/ca4f54b2-59bc-40e4-a41d-c1741d566fb8/files/8a68bca0-2046-4280-a405-009fd74d165f.jpg",
};

// ─────────────────────────────────────────────
// PRODUCTS DATA — add/edit/remove products here
// Each product has: id, name, category, price,
// priceWholesale, unit, image, badge, description
// ─────────────────────────────────────────────
const PRODUCTS = [
  {
    id: 1,
    name: "Wireless Earbuds Pro",
    category: "Electronics & Tech",
    price: "$24.99",
    priceWholesale: "$14.99",
    unit: "per unit",
    image: IMAGES.electronics,
    badge: "Best Seller",
    description: "Premium sound, ANC, 30hr battery. Retail & bulk available.",
  },
  {
    id: 2,
    name: "Smart LED Watch",
    category: "Electronics & Tech",
    price: "$39.99",
    priceWholesale: "$22.00",
    unit: "per unit",
    image: IMAGES.electronics,
    badge: "New",
    description: "Multi-sport tracking, sleep monitor, IP68 waterproof.",
  },
  {
    id: 3,
    name: "Premium Cotton Shirts",
    category: "Apparel & Textiles",
    price: "$18.00",
    priceWholesale: "$8.50",
    unit: "per piece",
    image: IMAGES.apparel,
    badge: "Wholesale",
    description: "100% Egyptian cotton, business casual, sizes XS–3XL.",
  },
  {
    id: 4,
    name: "Luxury Linen Set",
    category: "Apparel & Textiles",
    price: "$55.00",
    priceWholesale: "$28.00",
    unit: "per set",
    image: IMAGES.apparel,
    badge: null,
    description: "Hotel-grade linen, available in 12 colors, MOQ 20 sets.",
  },
  {
    id: 5,
    name: "Ceramic Décor Collection",
    category: "Home & Living",
    price: "$32.00",
    priceWholesale: "$16.00",
    unit: "per set",
    image: IMAGES.homeLiving,
    badge: "Popular",
    description: "Handcrafted ceramics, gift-ready packaging, 6-piece sets.",
  },
  {
    id: 6,
    name: "Premium Cookware Set",
    category: "Home & Living",
    price: "$89.00",
    priceWholesale: "$45.00",
    unit: "per set",
    image: IMAGES.homeLiving,
    badge: null,
    description: "Non-stick coated, stainless steel handles, 8-piece.",
  },
  {
    id: 7,
    name: "Professional Power Drill",
    category: "Industrial & Tools",
    price: "$68.00",
    priceWholesale: "$38.00",
    unit: "per unit",
    image: IMAGES.industrial,
    badge: "Heavy Duty",
    description: "1200W brushless motor, variable speed, includes bit set.",
  },
  {
    id: 8,
    name: "Safety Equipment Kit",
    category: "Industrial & Tools",
    price: "$45.00",
    priceWholesale: "$24.00",
    unit: "per kit",
    image: IMAGES.industrial,
    badge: "Certified",
    description: "EN ISO certified. Helmets, gloves, goggles — bulk pricing.",
  },
  {
    id: 9,
    name: "Premium Skincare Set",
    category: "Health & Beauty",
    price: "$42.00",
    priceWholesale: "$21.00",
    unit: "per set",
    image: IMAGES.healthBeauty,
    badge: "Natural",
    description: "Paraben-free, dermatologist tested. White-label available.",
  },
  {
    id: 10,
    name: "Vitamin Supplement Bundle",
    category: "Health & Beauty",
    price: "$29.00",
    priceWholesale: "$14.50",
    unit: "per pack",
    image: IMAGES.healthBeauty,
    badge: null,
    description: "GMP certified facility. Multivitamin + Omega-3 combo.",
  },
  {
    id: 11,
    name: "Extra Virgin Olive Oil",
    category: "Food & Agriculture",
    price: "$22.00",
    priceWholesale: "$11.00",
    unit: "per liter",
    image: IMAGES.food,
    badge: "Organic",
    description: "Cold-pressed, first extraction. Jordan origin, export-ready.",
  },
  {
    id: 12,
    name: "Premium Dried Fruits Mix",
    category: "Food & Agriculture",
    price: "$15.00",
    priceWholesale: "$7.50",
    unit: "per kg",
    image: IMAGES.food,
    badge: "Export Ready",
    description: "Apricots, figs, dates, raisins. Private label packaging.",
  },
];

// ─────────────────────────────────────────────
// CATEGORIES
// ─────────────────────────────────────────────
const CATEGORIES = [
  { icon: "Cpu", label: "Electronics & Tech", image: IMAGES.electronics, count: 45 },
  { icon: "Shirt", label: "Apparel & Textiles", image: IMAGES.apparel, count: 78 },
  { icon: "Home", label: "Home & Living", image: IMAGES.homeLiving, count: 62 },
  { icon: "Wrench", label: "Industrial & Tools", image: IMAGES.industrial, count: 91 },
  { icon: "HeartPulse", label: "Health & Beauty", image: IMAGES.healthBeauty, count: 53 },
  { icon: "Leaf", label: "Food & Agriculture", image: IMAGES.food, count: 37 },
  { icon: "Gem", label: "Luxury & Gifts", image: IMAGES.homeLiving, count: 29 },
  { icon: "Car", label: "Auto Parts", image: IMAGES.industrial, count: 84 },
];

const FAQS = [
  { q: "Do you offer wholesale pricing?", a: "Yes. We offer competitive wholesale pricing for bulk orders. Minimum order quantities vary by category. Contact us directly for a custom quote." },
  { q: "Which countries do you ship to?", a: "We ship internationally to most countries. Our logistics network covers the Middle East, Europe, Asia, Africa, and the Americas." },
  { q: "How can I place an order?", a: "You can reach us via WhatsApp, phone, or email. We'll discuss your requirements, confirm pricing, and arrange delivery." },
  { q: "What payment methods are accepted?", a: "We accept bank transfers (T/T), letters of credit (L/C), and other internationally recognized payment methods." },
  { q: "Can I request product samples?", a: "Yes. Sample requests are handled case by case. Please contact us with your product interest and we'll arrange accordingly." },
  { q: "Do you provide certificates of origin and quality documents?", a: "Yes. All export documentation including CoO, quality certificates, and packing lists are provided upon request." },
];

// ─────────────────────────────────────────────
// HOOKS & UTILITIES
// ─────────────────────────────────────────────
function useVisible() {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.1 }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);
  return { ref, visible };
}

function Section({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  const { ref, visible } = useVisible();
  return (
    <div ref={ref} className={`section-transition ${visible ? "visible" : ""} ${className}`}>
      {children}
    </div>
  );
}

function Badge({ text }: { text: string }) {
  const colors: Record<string, string> = {
    "Best Seller": "#c9a84c",
    "New": "#3b82f6",
    "Wholesale": "#0f1f3d",
    "Popular": "#9333ea",
    "Heavy Duty": "#ef4444",
    "Certified": "#22c55e",
    "Natural": "#16a34a",
    "Organic": "#15803d",
    "Export Ready": "#0891b2",
    "null": "transparent",
  };
  const color = colors[text] || "#c9a84c";
  return (
    <span
      className="text-[10px] font-semibold uppercase tracking-wider px-2 py-0.5 rounded-sm text-white"
      style={{ backgroundColor: color }}
    >
      {text}
    </span>
  );
}

// ─────────────────────────────────────────────
// MAIN COMPONENT
// ─────────────────────────────────────────────
export default function Index() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [scrolled, setScrolled] = useState(false);
  const [activeCategory, setActiveCategory] = useState("All");
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const allCategories = ["All", ...Array.from(new Set(PRODUCTS.map((p) => p.category)))];
  const filteredProducts = activeCategory === "All"
    ? PRODUCTS
    : PRODUCTS.filter((p) => p.category === activeCategory);

  const navLinks = [
    { label: "Home", href: "#home" },
    { label: "Products", href: "#products" },
    { label: "Categories", href: "#categories" },
    { label: "About", href: "#about" },
    { label: "Wholesale", href: "#wholesale" },
    { label: "Contact", href: "#contact" },
    { label: "FAQ", href: "#faq" },
  ];

  const waUrl = (msg = "") =>
    `https://wa.me/${SITE.whatsapp}${msg ? `?text=${encodeURIComponent(msg)}` : ""}`;

  return (
    <div className="min-h-screen" style={{ backgroundColor: "var(--cream)" }}>

      {/* ══════════════════ NAVBAR ══════════════════ */}
      <nav
        className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
        style={{
          backgroundColor: scrolled ? "var(--navy)" : "transparent",
          backdropFilter: scrolled ? "blur(12px)" : "none",
          boxShadow: scrolled ? "0 2px 30px rgba(0,0,0,0.3)" : "none",
        }}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between h-16">
          <a href="#home" className="flex items-center gap-3">
            <div
              className="w-8 h-8 rounded flex items-center justify-center"
              style={{ backgroundColor: "var(--gold)" }}
            >
              <Icon name="Globe2" size={16} style={{ color: "var(--navy)" }} />
            </div>
            <div className="flex flex-col leading-none">
              <span
                className="text-base font-semibold tracking-tight text-white"
                style={{ fontFamily: "Cormorant Garamond, serif", fontSize: "1.1rem" }}
              >
                {SITE.name}
              </span>
              <span className="text-[9px] tracking-[0.2em] uppercase text-white/40 hidden sm:block">
                {SITE.tagline}
              </span>
            </div>
          </a>

          <div className="hidden md:flex items-center gap-6">
            {navLinks.map((l) => (
              <a key={l.label} href={l.href} className="nav-link text-xs tracking-widest uppercase text-white/70 hover:text-white">
                {l.label}
              </a>
            ))}
          </div>

          <a
            href={waUrl()}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:flex items-center gap-2 px-4 py-2 rounded text-xs font-semibold uppercase tracking-wider transition-all duration-200 hover:opacity-90"
            style={{ backgroundColor: "#25D366", color: "#fff" }}
          >
            <Icon name="MessageCircle" size={14} />
            WhatsApp
          </a>

          <button className="md:hidden text-white" onClick={() => setMenuOpen(!menuOpen)}>
            <Icon name={menuOpen ? "X" : "Menu"} size={22} />
          </button>
        </div>

        {menuOpen && (
          <div className="md:hidden px-6 pb-6 pt-2 flex flex-col gap-4" style={{ backgroundColor: "var(--navy)" }}>
            {navLinks.map((l) => (
              <a key={l.label} href={l.href}
                className="text-white/75 hover:text-white text-sm tracking-wide py-1.5 border-b border-white/10"
                onClick={() => setMenuOpen(false)}
              >
                {l.label}
              </a>
            ))}
            <a href={waUrl()} target="_blank" rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 mt-2 px-4 py-3 rounded text-sm font-semibold"
              style={{ backgroundColor: "#25D366", color: "#fff" }}
            >
              <Icon name="MessageCircle" size={16} />
              Chat on WhatsApp
            </a>
          </div>
        )}
      </nav>

      {/* ══════════════════ HERO ══════════════════ */}
      <section
        id="home"
        className="min-h-screen flex items-center justify-center relative overflow-hidden"
        style={{
          backgroundImage: `linear-gradient(rgba(10,20,50,0.80), rgba(10,20,50,0.88)), url('${IMAGES.hero}')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute left-0 top-0 h-full w-1"
          style={{ background: "linear-gradient(180deg, transparent, var(--gold), transparent)" }}
        />
        <div className="absolute right-0 top-0 h-full w-px opacity-30"
          style={{ background: "linear-gradient(180deg, transparent, var(--gold), transparent)" }}
        />

        <div className="relative z-10 text-center max-w-4xl mx-auto px-6 pt-20">
          <div className="flex items-center justify-center gap-2 mb-6">
            <div className="h-px w-8 opacity-50" style={{ backgroundColor: "var(--gold)" }} />
            <p className="text-xs tracking-[0.4em] uppercase animate-fade-in opacity-0"
              style={{ color: "var(--gold)", animationDelay: "0.2s", animationFillMode: "forwards" }}
            >
              Trusted International Supplier
            </p>
            <div className="h-px w-8 opacity-50" style={{ backgroundColor: "var(--gold)" }} />
          </div>

          <h1
            className="text-5xl md:text-7xl font-light text-white leading-tight mb-4 animate-fade-in-up opacity-0"
            style={{ fontFamily: "Cormorant Garamond, serif", animationDelay: "0.3s", animationFillMode: "forwards" }}
          >
            {SITE.name}
          </h1>
          <h2
            className="text-2xl md:text-3xl font-light mb-8 animate-fade-in-up opacity-0"
            style={{ color: "var(--gold-light)", fontFamily: "Cormorant Garamond, serif", fontStyle: "italic", animationDelay: "0.45s", animationFillMode: "forwards" }}
          >
            Where Quality Meets Global Reach
          </h2>

          <p
            className="text-base text-white/65 max-w-xl mx-auto mb-10 leading-relaxed animate-fade-in-up opacity-0"
            style={{ animationDelay: "0.55s", animationFillMode: "forwards" }}
          >
            Retail & wholesale supplier of 200+ diverse product categories.
            Serving buyers and businesses in 50+ countries with trust and transparency.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up opacity-0"
            style={{ animationDelay: "0.7s", animationFillMode: "forwards" }}
          >
            <a href={waUrl("Hello, I'd like to inquire about your products.")}
              target="_blank" rel="noopener noreferrer"
              className="wa-pulse inline-flex items-center justify-center gap-3 px-8 py-4 rounded text-sm font-semibold uppercase tracking-wider transition-all duration-200 hover:opacity-90"
              style={{ backgroundColor: "#25D366", color: "#fff" }}
            >
              <Icon name="MessageCircle" size={18} />
              Chat on WhatsApp
            </a>
            <a href="#products"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded text-sm font-semibold uppercase tracking-wider border transition-all duration-200 hover:bg-white/10"
              style={{ borderColor: "var(--gold)", color: "var(--gold-light)" }}
            >
              Browse Catalog
              <Icon name="ArrowRight" size={16} />
            </a>
          </div>

          <div className="mt-16 flex flex-wrap justify-center gap-8 animate-fade-in opacity-0"
            style={{ animationDelay: "0.9s", animationFillMode: "forwards" }}
          >
            {[
              { icon: "Globe", label: "50+ Countries" },
              { icon: "ShieldCheck", label: "Verified Supplier" },
              { icon: "Handshake", label: "Wholesale Ready" },
              { icon: "BadgeCheck", label: "Quality Guaranteed" },
            ].map((b) => (
              <div key={b.label} className="flex items-center gap-2 text-white/55 text-xs uppercase tracking-wider">
                <Icon name={b.icon} fallback="Globe" size={14} style={{ color: "var(--gold)" }} />
                {b.label}
              </div>
            ))}
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 opacity-30">
          <div className="w-px h-8 bg-white animate-pulse" />
          <Icon name="ChevronDown" size={14} className="text-white" />
        </div>
      </section>

      {/* ══════════════════ STATS ══════════════════ */}
      <Section>
        <div className="py-10 px-6" style={{ backgroundColor: "var(--navy)" }}>
          <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {[
              { val: "50+", label: "Countries Served" },
              { val: "200+", label: "Product Categories" },
              { val: "10+", label: "Years Experience" },
              { val: "24/7", label: "Support Available" },
            ].map((s) => (
              <div key={s.label} className="flex flex-col items-center">
                <span className="text-3xl font-semibold" style={{ color: "var(--gold)", fontFamily: "Cormorant Garamond, serif" }}>
                  {s.val}
                </span>
                <span className="text-[10px] tracking-widest uppercase text-white/40 mt-1">{s.label}</span>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* ══════════════════ CATEGORIES ══════════════════ */}
      <section id="categories" className="py-24 px-6" style={{ backgroundColor: "var(--cream)" }}>
        <Section>
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-14">
              <p className="text-xs tracking-[0.35em] uppercase mb-3" style={{ color: "var(--gold)" }}>What We Offer</p>
              <h2 className="text-4xl md:text-5xl font-light mb-4" style={{ color: "var(--navy)", fontFamily: "Cormorant Garamond, serif" }}>
                Product Categories
              </h2>
              <div className="gold-divider" />
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {CATEGORIES.map((cat) => (
                <a
                  key={cat.label}
                  href="#products"
                  onClick={() => setActiveCategory(cat.label)}
                  className="product-card relative overflow-hidden rounded-sm group cursor-pointer"
                  style={{ height: "200px" }}
                >
                  <img
                    src={cat.image}
                    alt={cat.label}
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0" style={{ background: "linear-gradient(180deg, transparent 30%, rgba(10,20,50,0.85) 100%)" }} />
                  <div className="absolute bottom-0 left-0 right-0 p-4">
                    <div className="flex items-center gap-2 mb-1">
                      <Icon name={cat.icon} fallback="Package" size={14} style={{ color: "var(--gold)" }} />
                      <span className="text-white font-medium text-sm" style={{ fontFamily: "Cormorant Garamond, serif" }}>
                        {cat.label}
                      </span>
                    </div>
                    <span className="text-white/50 text-xs">{cat.count} products</span>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </Section>
      </section>

      {/* ══════════════════ PRODUCTS CATALOG ══════════════════ */}
      <section id="products" className="py-24 px-6" style={{ backgroundColor: "#eef0f5" }}>
        <Section>
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-14">
              <p className="text-xs tracking-[0.35em] uppercase mb-3" style={{ color: "var(--gold)" }}>Catalog</p>
              <h2 className="text-4xl md:text-5xl font-light mb-4" style={{ color: "var(--navy)", fontFamily: "Cormorant Garamond, serif" }}>
                Our Products
              </h2>
              <div className="gold-divider mb-6" />
              <p className="text-sm text-gray-500 max-w-lg mx-auto">
                Browse our current catalog. Contact us for full specs, pricing, and availability.
              </p>
            </div>

            {/* Filter + View Toggle */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-8">
              <div className="flex flex-wrap gap-2">
                {allCategories.map((cat) => (
                  <button
                    key={cat}
                    onClick={() => setActiveCategory(cat)}
                    className="px-3 py-1.5 rounded-sm text-xs font-medium tracking-wide transition-all duration-200"
                    style={{
                      backgroundColor: activeCategory === cat ? "var(--navy)" : "white",
                      color: activeCategory === cat ? "var(--gold)" : "#6b7280",
                      border: activeCategory === cat ? "1px solid var(--navy)" : "1px solid #e5e7eb",
                    }}
                  >
                    {cat}
                  </button>
                ))}
              </div>
              <div className="flex items-center gap-2">
                <button onClick={() => setViewMode("grid")}
                  className="p-2 rounded transition-colors duration-150"
                  style={{ backgroundColor: viewMode === "grid" ? "var(--navy)" : "white", color: viewMode === "grid" ? "var(--gold)" : "#9ca3af" }}
                >
                  <Icon name="LayoutGrid" size={16} />
                </button>
                <button onClick={() => setViewMode("list")}
                  className="p-2 rounded transition-colors duration-150"
                  style={{ backgroundColor: viewMode === "list" ? "var(--navy)" : "white", color: viewMode === "list" ? "var(--gold)" : "#9ca3af" }}
                >
                  <Icon name="List" size={16} />
                </button>
              </div>
            </div>

            {/* Products Grid */}
            {viewMode === "grid" ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                {filteredProducts.map((product) => (
                  <div key={product.id} className="product-card bg-white rounded-sm overflow-hidden border border-transparent hover:border-amber-200">
                    <div className="relative overflow-hidden" style={{ height: "180px" }}>
                      <img src={product.image} alt={product.name}
                        className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                      />
                      {product.badge && (
                        <div className="absolute top-3 left-3">
                          <Badge text={product.badge} />
                        </div>
                      )}
                    </div>
                    <div className="p-5">
                      <p className="text-xs text-gray-400 uppercase tracking-wider mb-1">{product.category}</p>
                      <h3 className="font-semibold mb-1 text-base" style={{ color: "var(--navy)", fontFamily: "Cormorant Garamond, serif" }}>
                        {product.name}
                      </h3>
                      <p className="text-xs text-gray-500 mb-4 leading-relaxed">{product.description}</p>
                      <div className="flex items-end justify-between mb-4">
                        <div>
                          <div className="flex items-baseline gap-1">
                            <span className="text-lg font-semibold" style={{ color: "var(--navy)" }}>{product.price}</span>
                            <span className="text-xs text-gray-400">{product.unit}</span>
                          </div>
                          <div className="flex items-center gap-1 mt-0.5">
                            <Icon name="TrendingDown" size={11} style={{ color: "var(--gold)" }} />
                            <span className="text-xs font-medium" style={{ color: "var(--gold)" }}>
                              Wholesale: {product.priceWholesale}
                            </span>
                          </div>
                        </div>
                      </div>
                      <a
                        href={waUrl(`Hello, I'm interested in: ${product.name}. Please send me more details.`)}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center gap-2 w-full py-2.5 rounded text-xs font-semibold uppercase tracking-wider transition-all duration-200 hover:opacity-90"
                        style={{ backgroundColor: "#25D366", color: "#fff" }}
                      >
                        <Icon name="MessageCircle" size={13} />
                        Inquire on WhatsApp
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="flex flex-col gap-3">
                {filteredProducts.map((product) => (
                  <div key={product.id} className="product-card bg-white rounded-sm overflow-hidden border border-transparent hover:border-amber-200 flex gap-0">
                    <div className="relative overflow-hidden flex-shrink-0" style={{ width: "120px", minHeight: "100px" }}>
                      <img src={product.image} alt={product.name} className="w-full h-full object-cover" />
                    </div>
                    <div className="flex flex-1 items-center justify-between p-4 gap-4 flex-wrap">
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2 mb-1">
                          <p className="text-xs text-gray-400 uppercase tracking-wider">{product.category}</p>
                          {product.badge && <Badge text={product.badge} />}
                        </div>
                        <h3 className="font-semibold text-base" style={{ color: "var(--navy)", fontFamily: "Cormorant Garamond, serif" }}>
                          {product.name}
                        </h3>
                        <p className="text-xs text-gray-500 mt-1 leading-relaxed hidden sm:block">{product.description}</p>
                      </div>
                      <div className="flex items-center gap-6 flex-shrink-0">
                        <div className="text-right">
                          <div className="text-base font-semibold" style={{ color: "var(--navy)" }}>{product.price}</div>
                          <div className="text-xs" style={{ color: "var(--gold)" }}>WS: {product.priceWholesale}</div>
                        </div>
                        <a
                          href={waUrl(`Hello, I'm interested in: ${product.name}. Please send me more details.`)}
                          target="_blank" rel="noopener noreferrer"
                          className="flex items-center gap-1.5 px-4 py-2 rounded text-xs font-semibold transition-all duration-200 hover:opacity-90 whitespace-nowrap"
                          style={{ backgroundColor: "#25D366", color: "#fff" }}
                        >
                          <Icon name="MessageCircle" size={13} />
                          Inquire
                        </a>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {/* Add More CTA */}
            <div className="mt-10 text-center">
              <div className="rounded-sm p-8 border border-dashed" style={{ borderColor: "rgba(201,168,76,0.35)" }}>
                <Icon name="Plus" size={24} style={{ color: "var(--gold)" }} className="mx-auto mb-3" />
                <p className="text-sm text-gray-500 mb-4">More products coming soon · Contact us for unlisted items</p>
                <a href={waUrl("Hello Ahmad, I'm looking for a product that's not listed on your catalog.")}
                  target="_blank" rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-2.5 rounded text-xs font-semibold uppercase tracking-wider transition-all duration-200 hover:opacity-90"
                  style={{ backgroundColor: "var(--navy)", color: "var(--gold)" }}
                >
                  <Icon name="Search" size={13} />
                  Request a Product
                </a>
              </div>
            </div>
          </div>
        </Section>
      </section>

      {/* ══════════════════ ABOUT ══════════════════ */}
      <section id="about" className="py-24 px-6" style={{ backgroundColor: "var(--cream)" }}>
        <Section>
          <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-xs tracking-[0.35em] uppercase mb-3" style={{ color: "var(--gold)" }}>Who We Are</p>
              <h2 className="text-4xl md:text-5xl font-light mb-6 leading-tight" style={{ color: "var(--navy)", fontFamily: "Cormorant Garamond, serif" }}>
                Building Global<br /><em>Trade Relationships</em>
              </h2>
              <div className="w-14 h-0.5 mb-8" style={{ background: "linear-gradient(90deg, var(--gold), var(--gold-light))" }} />
              <p className="text-sm leading-relaxed mb-5 text-gray-600">
                <strong style={{ color: "var(--navy)" }}>{SITE.name}</strong> is operated by {SITE.owner}, an internationally-operating trade professional with over a decade of experience connecting buyers and suppliers across continents. Based in Jordan, we serve clients across the Middle East, Europe, Asia, Africa, and beyond.
              </p>
              <p className="text-sm leading-relaxed mb-8 text-gray-600">
                Our mission is to deliver reliable, high-quality products at competitive prices — whether you're a retail buyer or a wholesale distributor. We value trust, transparency, and long-term partnerships.
              </p>
              <div className="flex flex-wrap gap-3">
                {["Retail Orders", "Bulk Wholesale", "Custom Sourcing", "Export Documentation", "White Label"].map((tag) => (
                  <span key={tag} className="px-4 py-1.5 text-xs tracking-wide rounded-sm border" style={{ borderColor: "var(--gold)", color: "var(--navy)" }}>
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {[
                { icon: "Globe2", title: "International Reach", desc: "Exporting to 50+ countries worldwide with reliable logistics partners." },
                { icon: "ShieldCheck", title: "Verified Quality", desc: "All products sourced from certified and trusted manufacturers." },
                { icon: "Users", title: "Dedicated Support", desc: "Personal communication — always a real person, never a bot." },
                { icon: "TrendingUp", title: "Competitive Pricing", desc: "Best-market pricing for both retail buyers and wholesale clients." },
              ].map((item) => (
                <div key={item.title} className="bg-white rounded-sm p-6 border border-transparent hover:border-amber-200 transition-colors duration-200">
                  <Icon name={item.icon} fallback="Star" size={20} style={{ color: "var(--gold)" }} className="mb-3" />
                  <h4 className="font-semibold mb-2 text-base" style={{ color: "var(--navy)", fontFamily: "Cormorant Garamond, serif" }}>
                    {item.title}
                  </h4>
                  <p className="text-xs leading-relaxed text-gray-500">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </Section>
      </section>

      {/* ══════════════════ WHOLESALE ══════════════════ */}
      <section id="wholesale" className="py-24 px-6" style={{ backgroundColor: "var(--navy)" }}>
        <Section>
          <div className="max-w-5xl mx-auto text-center">
            <p className="text-xs tracking-[0.35em] uppercase mb-3" style={{ color: "var(--gold)" }}>For Business</p>
            <h2 className="text-4xl md:text-5xl font-light text-white mb-4" style={{ fontFamily: "Cormorant Garamond, serif" }}>
              Wholesale Program
            </h2>
            <div className="gold-divider mb-10" />
            <p className="text-sm text-white/60 max-w-xl mx-auto mb-14 leading-relaxed">
              We partner with distributors, importers, retailers, and businesses of all sizes.
              Dedicated pricing tiers, flexible MOQs, and full export support.
            </p>

            <div className="grid md:grid-cols-3 gap-5 mb-14">
              {[
                { icon: "Package", title: "Flexible MOQ", desc: "Minimum order quantities are negotiable based on product category and client relationship." },
                { icon: "FileText", title: "Full Documentation", desc: "Certificate of Origin, Commercial Invoice, Packing List, and all required export docs." },
                { icon: "Truck", title: "Worldwide Logistics", desc: "Air freight, sea freight, and express delivery options tailored to your timeline and budget." },
                { icon: "Tag", title: "Volume Pricing", desc: "Tiered pricing structure — the more you order, the better your per-unit cost." },
                { icon: "RefreshCw", title: "Recurring Orders", desc: "Set up recurring supply contracts with consistent stock and guaranteed lead times." },
                { icon: "Headphones", title: "Dedicated Account", desc: "Your own point of contact for all queries, order tracking, and after-sales support." },
              ].map((item) => (
                <div key={item.title} className="rounded-sm p-7 border text-left"
                  style={{ borderColor: "rgba(201,168,76,0.25)", backgroundColor: "rgba(255,255,255,0.04)" }}
                >
                  <div className="w-10 h-10 rounded flex items-center justify-center mb-4"
                    style={{ backgroundColor: "rgba(201,168,76,0.15)" }}
                  >
                    <Icon name={item.icon} fallback="Package" size={18} style={{ color: "var(--gold)" }} />
                  </div>
                  <h3 className="text-base font-semibold text-white mb-2" style={{ fontFamily: "Cormorant Garamond, serif" }}>
                    {item.title}
                  </h3>
                  <p className="text-xs leading-relaxed text-white/50">{item.desc}</p>
                </div>
              ))}
            </div>

            <a href={waUrl("Hello Ahmad, I am interested in wholesale pricing and would like a quote.")}
              target="_blank" rel="noopener noreferrer"
              className="wa-pulse inline-flex items-center gap-3 px-10 py-4 rounded text-sm font-semibold uppercase tracking-wider transition-all duration-200 hover:opacity-90"
              style={{ backgroundColor: "#25D366", color: "#fff" }}
            >
              <Icon name="MessageCircle" size={18} />
              Get Wholesale Quote on WhatsApp
            </a>
          </div>
        </Section>
      </section>

      {/* ══════════════════ CONTACT ══════════════════ */}
      <section id="contact" className="py-24 px-6" style={{ backgroundColor: "var(--cream)" }}>
        <Section>
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-14">
              <p className="text-xs tracking-[0.35em] uppercase mb-3" style={{ color: "var(--gold)" }}>Get In Touch</p>
              <h2 className="text-4xl md:text-5xl font-light mb-4" style={{ color: "var(--navy)", fontFamily: "Cormorant Garamond, serif" }}>
                Contact {SITE.owner}
              </h2>
              <div className="gold-divider" />
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              <a href={waUrl()} target="_blank" rel="noopener noreferrer"
                className="product-card bg-white rounded-sm p-8 text-center border-2 flex flex-col items-center"
                style={{ borderColor: "#25D366" }}
              >
                <div className="w-14 h-14 rounded-full flex items-center justify-center mb-4" style={{ backgroundColor: "rgba(37,211,102,0.12)" }}>
                  <Icon name="MessageCircle" size={26} style={{ color: "#25D366" }} />
                </div>
                <h3 className="text-lg font-semibold mb-2" style={{ color: "var(--navy)", fontFamily: "Cormorant Garamond, serif" }}>WhatsApp</h3>
                <p className="text-xs mb-4 text-gray-500">Fastest response — click to chat directly</p>
                <span className="text-sm font-medium mb-4" style={{ color: "#25D366" }}>{SITE.phone}</span>
                <span className="mt-auto px-6 py-2 rounded text-xs font-semibold text-white uppercase tracking-wider" style={{ backgroundColor: "#25D366" }}>
                  Open WhatsApp →
                </span>
              </a>

              <a href={`tel:${SITE.phone}`}
                className="product-card bg-white rounded-sm p-8 text-center border flex flex-col items-center"
                style={{ borderColor: "rgba(201,168,76,0.3)" }}
              >
                <div className="w-14 h-14 rounded-full flex items-center justify-center mb-4" style={{ backgroundColor: "rgba(201,168,76,0.1)" }}>
                  <Icon name="Phone" size={26} style={{ color: "var(--gold)" }} />
                </div>
                <h3 className="text-lg font-semibold mb-2" style={{ color: "var(--navy)", fontFamily: "Cormorant Garamond, serif" }}>Phone</h3>
                <p className="text-xs mb-4 text-gray-500">Available for calls and inquiries</p>
                <span className="text-sm font-medium mb-4" style={{ color: "var(--navy)" }}>{SITE.phone}</span>
                <span className="mt-auto px-6 py-2 rounded text-xs font-semibold border uppercase tracking-wider" style={{ borderColor: "var(--gold)", color: "var(--navy)" }}>
                  Call Now →
                </span>
              </a>

              <a href={`mailto:${SITE.email}`}
                className="product-card bg-white rounded-sm p-8 text-center border flex flex-col items-center"
                style={{ borderColor: "rgba(201,168,76,0.3)" }}
              >
                <div className="w-14 h-14 rounded-full flex items-center justify-center mb-4" style={{ backgroundColor: "rgba(201,168,76,0.1)" }}>
                  <Icon name="Mail" size={26} style={{ color: "var(--gold)" }} />
                </div>
                <h3 className="text-lg font-semibold mb-2" style={{ color: "var(--navy)", fontFamily: "Cormorant Garamond, serif" }}>Email</h3>
                <p className="text-xs mb-4 text-gray-500">For formal inquiries & documentation</p>
                <span className="text-sm font-medium mb-4 break-all" style={{ color: "var(--navy)" }}>{SITE.email}</span>
                <span className="mt-auto px-6 py-2 rounded text-xs font-semibold border uppercase tracking-wider" style={{ borderColor: "var(--gold)", color: "var(--navy)" }}>
                  Send Email →
                </span>
              </a>
            </div>
          </div>
        </Section>
      </section>

      {/* ══════════════════ FAQ ══════════════════ */}
      <section id="faq" className="py-24 px-6" style={{ backgroundColor: "#eef0f5" }}>
        <Section>
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-14">
              <p className="text-xs tracking-[0.35em] uppercase mb-3" style={{ color: "var(--gold)" }}>Questions & Answers</p>
              <h2 className="text-4xl md:text-5xl font-light mb-4" style={{ color: "var(--navy)", fontFamily: "Cormorant Garamond, serif" }}>
                Frequently Asked Questions
              </h2>
              <div className="gold-divider" />
            </div>

            <div className="flex flex-col gap-3">
              {FAQS.map((faq, i) => (
                <div key={i} className="bg-white rounded-sm border overflow-hidden" style={{ borderColor: "rgba(201,168,76,0.2)" }}>
                  <button
                    className="w-full flex items-center justify-between px-6 py-5 text-left"
                    onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  >
                    <span className="text-sm font-medium pr-4" style={{ color: "var(--navy)", fontFamily: "Cormorant Garamond, serif", fontSize: "1.05rem" }}>
                      {faq.q}
                    </span>
                    <Icon name={openFaq === i ? "Minus" : "Plus"} size={16} style={{ color: "var(--gold)", flexShrink: 0 }} />
                  </button>
                  {openFaq === i && (
                    <div className="px-6 pb-5 text-sm leading-relaxed border-t text-gray-500" style={{ borderColor: "rgba(201,168,76,0.15)" }}>
                      {faq.a}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </Section>
      </section>

      {/* ══════════════════ FOOTER ══════════════════ */}
      <footer className="py-12 px-6" style={{ backgroundColor: "var(--navy)" }}>
        <div className="max-w-5xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6 pb-8 border-b" style={{ borderColor: "rgba(255,255,255,0.1)" }}>
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded flex items-center justify-center" style={{ backgroundColor: "var(--gold)" }}>
                <Icon name="Globe2" size={16} style={{ color: "var(--navy)" }} />
              </div>
              <div>
                <span className="text-base font-semibold text-white" style={{ fontFamily: "Cormorant Garamond, serif" }}>
                  {SITE.name}
                </span>
                <p className="text-[10px] text-white/35 mt-0.5">{SITE.location}</p>
              </div>
            </div>
            <div className="flex flex-wrap justify-center gap-5">
              {navLinks.map((l) => (
                <a key={l.label} href={l.href} className="text-xs text-white/45 hover:text-white/80 transition-colors">
                  {l.label}
                </a>
              ))}
            </div>
            <a href={waUrl()} target="_blank" rel="noopener noreferrer"
              className="flex items-center gap-2 px-5 py-2.5 rounded text-xs font-semibold uppercase tracking-wider"
              style={{ backgroundColor: "#25D366", color: "#fff" }}
            >
              <Icon name="MessageCircle" size={14} />
              WhatsApp
            </a>
          </div>
          <div className="pt-6 text-center">
            <p className="text-xs text-white/25">
              © {SITE.year} {SITE.name} · {SITE.owner} · All rights reserved.
            </p>
          </div>
        </div>
      </footer>

      {/* ══════════════════ FLOATING WHATSAPP ══════════════════ */}
      <a
        href={waUrl()}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full flex items-center justify-center shadow-2xl wa-pulse transition-transform duration-200 hover:scale-110"
        style={{ backgroundColor: "#25D366" }}
        title="Chat on WhatsApp"
      >
        <Icon name="MessageCircle" size={26} style={{ color: "#fff" }} />
      </a>
    </div>
  );
}
