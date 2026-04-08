import { useState, useEffect, useRef } from "react";
import Icon from "@/components/ui/icon";

const WHATSAPP_NUMBER = "962791531496";
const EMAIL = "ahmadjilani@email.com";
const PHONE = "+962791531496";

const categories = [
  { icon: "Package", label: "Electronics & Tech", desc: "Consumer electronics, accessories, components" },
  { icon: "Shirt", label: "Apparel & Textiles", desc: "Fashion, fabrics, workwear, sportswear" },
  { icon: "Home", label: "Home & Living", desc: "Furniture, décor, kitchenware, bedding" },
  { icon: "Wrench", label: "Industrial & Tools", desc: "Equipment, machinery, hardware, safety" },
  { icon: "Leaf", label: "Food & Agriculture", desc: "Commodities, organic produce, packaged goods" },
  { icon: "Gem", label: "Luxury & Gifts", desc: "Premium items, corporate gifts, accessories" },
  { icon: "Car", label: "Auto Parts", desc: "OEM parts, accessories, maintenance products" },
  { icon: "HeartPulse", label: "Health & Beauty", desc: "Cosmetics, wellness, medical supplies" },
];

const faqs = [
  {
    q: "Do you offer wholesale pricing?",
    a: "Yes. We offer competitive wholesale pricing for bulk orders. Minimum order quantities vary by category. Contact us directly for a custom quote.",
  },
  {
    q: "Which countries do you ship to?",
    a: "We ship internationally to most countries. Our logistics network covers the Middle East, Europe, Asia, Africa, and the Americas.",
  },
  {
    q: "How can I place an order?",
    a: "You can reach us via WhatsApp, phone, or email. We'll discuss your requirements, confirm pricing, and arrange delivery.",
  },
  {
    q: "What payment methods are accepted?",
    a: "We accept bank transfers (T/T), letters of credit (L/C), and other internationally recognized payment methods.",
  },
  {
    q: "Can I request product samples?",
    a: "Yes. Sample requests are handled case by case. Please contact us with your product interest and we'll arrange accordingly.",
  },
  {
    q: "Do you provide certificates of origin and quality documents?",
    a: "Yes. All export documentation including CoO, quality certificates, and packing lists are provided upon request.",
  },
];

function useVisible() {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.15 }
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

export default function Index() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const navLinks = [
    { label: "Home", href: "#home" },
    { label: "Products", href: "#products" },
    { label: "Categories", href: "#categories" },
    { label: "About", href: "#about" },
    { label: "Wholesale", href: "#wholesale" },
    { label: "Contact", href: "#contact" },
    { label: "FAQ", href: "#faq" },
  ];

  return (
    <div className="min-h-screen" style={{ backgroundColor: "var(--cream)" }}>

      {/* ─── NAVBAR ─── */}
      <nav
        className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
        style={{
          backgroundColor: scrolled ? "var(--navy)" : "transparent",
          backdropFilter: scrolled ? "blur(10px)" : "none",
          boxShadow: scrolled ? "0 2px 30px rgba(0,0,0,0.25)" : "none",
        }}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between h-16">
          <a href="#home" className="flex items-center gap-2">
            <span
              className="text-xl font-semibold tracking-wide"
              style={{ color: "var(--gold)", fontFamily: "Cormorant Garamond, serif" }}
            >
              Ahmad Jilani
            </span>
            <span className="text-xs tracking-widest uppercase text-white/50 hidden sm:block ml-1">
              Global Trade
            </span>
          </a>

          <div className="hidden md:flex items-center gap-7">
            {navLinks.map((l) => (
              <a
                key={l.label}
                href={l.href}
                className="nav-link text-sm tracking-wide text-white/80 hover:text-white"
                onClick={() => setMenuOpen(false)}
              >
                {l.label}
              </a>
            ))}
          </div>

          <a
            href={`https://wa.me/${WHATSAPP_NUMBER}`}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:flex items-center gap-2 px-4 py-2 rounded text-sm font-medium transition-all duration-200 hover:opacity-90"
            style={{ backgroundColor: "#25D366", color: "#fff" }}
          >
            <Icon name="MessageCircle" size={16} />
            WhatsApp
          </a>

          <button
            className="md:hidden text-white"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <Icon name={menuOpen ? "X" : "Menu"} size={22} />
          </button>
        </div>

        {menuOpen && (
          <div
            className="md:hidden px-6 pb-5 pt-2 flex flex-col gap-4"
            style={{ backgroundColor: "var(--navy)" }}
          >
            {navLinks.map((l) => (
              <a
                key={l.label}
                href={l.href}
                className="text-white/80 hover:text-white text-sm tracking-wide py-1 border-b border-white/10"
                onClick={() => setMenuOpen(false)}
              >
                {l.label}
              </a>
            ))}
            <a
              href={`https://wa.me/${WHATSAPP_NUMBER}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 mt-2 px-4 py-3 rounded text-sm font-medium"
              style={{ backgroundColor: "#25D366", color: "#fff" }}
            >
              <Icon name="MessageCircle" size={16} />
              Contact via WhatsApp
            </a>
          </div>
        )}
      </nav>

      {/* ─── HERO ─── */}
      <section
        id="home"
        className="hero-pattern min-h-screen flex items-center justify-center relative overflow-hidden"
      >
        <div
          className="absolute left-0 top-0 h-full w-1"
          style={{ background: "linear-gradient(180deg, transparent, var(--gold), transparent)" }}
        />

        <div className="relative z-10 text-center max-w-4xl mx-auto px-6 pt-20">
          <p
            className="text-xs tracking-[0.35em] uppercase mb-6 animate-fade-in opacity-0"
            style={{ color: "var(--gold)", animationDelay: "0.2s", animationFillMode: "forwards" }}
          >
            Trusted International Supplier
          </p>

          <h1
            className="text-5xl md:text-7xl font-light text-white leading-tight mb-6 animate-fade-in-up opacity-0"
            style={{ fontFamily: "Cormorant Garamond, serif", animationDelay: "0.3s", animationFillMode: "forwards" }}
          >
            Global Trade,
            <br />
            <em style={{ color: "var(--gold-light)" }}>Exceptional Quality</em>
          </h1>

          <p
            className="text-lg text-white/70 max-w-2xl mx-auto mb-10 leading-relaxed animate-fade-in-up opacity-0"
            style={{ animationDelay: "0.5s", animationFillMode: "forwards" }}
          >
            Retail & wholesale supplier of diverse product categories.
            Serving businesses and individuals worldwide with reliability and trust.
          </p>

          <div
            className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up opacity-0"
            style={{ animationDelay: "0.7s", animationFillMode: "forwards" }}
          >
            <a
              href={`https://wa.me/${WHATSAPP_NUMBER}`}
              target="_blank"
              rel="noopener noreferrer"
              className="wa-pulse inline-flex items-center justify-center gap-3 px-8 py-4 rounded text-base font-medium transition-all duration-200 hover:opacity-90"
              style={{ backgroundColor: "#25D366", color: "#fff" }}
            >
              <Icon name="MessageCircle" size={20} />
              Chat on WhatsApp
            </a>
            <a
              href="#categories"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded text-base font-medium border transition-all duration-200 hover:bg-white/10"
              style={{ borderColor: "var(--gold)", color: "var(--gold-light)" }}
            >
              Explore Products
              <Icon name="ArrowRight" size={18} />
            </a>
          </div>

          <div
            className="mt-16 flex flex-wrap justify-center gap-8 animate-fade-in opacity-0"
            style={{ animationDelay: "0.9s", animationFillMode: "forwards" }}
          >
            {[
              { icon: "Globe", label: "International Shipping" },
              { icon: "ShieldCheck", label: "Verified Supplier" },
              { icon: "Handshake", label: "Wholesale Available" },
              { icon: "BadgeCheck", label: "Quality Guaranteed" },
            ].map((b) => (
              <div key={b.label} className="flex items-center gap-2 text-white/60 text-sm">
                <Icon name={b.icon} fallback="Globe" size={16} style={{ color: "var(--gold)" }} />
                {b.label}
              </div>
            ))}
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 opacity-40">
          <div className="w-px h-8 bg-white animate-pulse" />
          <Icon name="ChevronDown" size={14} className="text-white" />
        </div>
      </section>

      {/* ─── STATS BAR ─── */}
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
                <span
                  className="text-3xl font-semibold"
                  style={{ color: "var(--gold)", fontFamily: "Cormorant Garamond, serif" }}
                >
                  {s.val}
                </span>
                <span className="text-xs tracking-widest uppercase text-white/50 mt-1">{s.label}</span>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* ─── CATEGORIES ─── */}
      <section id="categories" className="py-24 px-6" style={{ backgroundColor: "var(--cream)" }}>
        <Section>
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-14">
              <p className="text-xs tracking-[0.3em] uppercase mb-3" style={{ color: "var(--gold)" }}>
                What We Offer
              </p>
              <h2
                className="text-4xl md:text-5xl font-light mb-4"
                style={{ color: "var(--navy)", fontFamily: "Cormorant Garamond, serif" }}
              >
                Product Categories
              </h2>
              <div className="gold-divider" />
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
              {categories.map((cat) => (
                <div
                  key={cat.label}
                  className="product-card bg-white rounded-sm p-6 text-center cursor-pointer border border-transparent hover:border-amber-200"
                >
                  <div
                    className="w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4"
                    style={{ backgroundColor: "rgba(201, 168, 76, 0.1)" }}
                  >
                    <Icon name={cat.icon} fallback="Package" size={22} style={{ color: "var(--gold)" }} />
                  </div>
                  <h3
                    className="font-semibold mb-1"
                    style={{ color: "var(--navy)", fontFamily: "Cormorant Garamond, serif", fontSize: "1rem" }}
                  >
                    {cat.label}
                  </h3>
                  <p className="text-xs leading-relaxed" style={{ color: "#6b7280" }}>
                    {cat.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </Section>
      </section>

      {/* ─── PRODUCTS ─── */}
      <section id="products" className="py-24 px-6" style={{ backgroundColor: "#eef0f5" }}>
        <Section>
          <div className="max-w-5xl mx-auto text-center">
            <p className="text-xs tracking-[0.3em] uppercase mb-3" style={{ color: "var(--gold)" }}>
              Catalog
            </p>
            <h2
              className="text-4xl md:text-5xl font-light mb-4"
              style={{ color: "var(--navy)", fontFamily: "Cormorant Garamond, serif" }}
            >
              Our Products
            </h2>
            <div className="gold-divider mb-10" />

            <div
              className="rounded-sm p-10 md:p-16 border"
              style={{ backgroundColor: "white", borderColor: "rgba(201,168,76,0.25)" }}
            >
              <div
                className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6"
                style={{ backgroundColor: "rgba(201, 168, 76, 0.12)" }}
              >
                <Icon name="PackageOpen" size={28} style={{ color: "var(--gold)" }} />
              </div>
              <h3
                className="text-2xl font-light mb-3"
                style={{ color: "var(--navy)", fontFamily: "Cormorant Garamond, serif" }}
              >
                Catalog Coming Soon
              </h3>
              <p className="text-sm leading-relaxed mb-8 max-w-md mx-auto" style={{ color: "#6b7280" }}>
                Our full product catalog with detailed specifications and pricing is being prepared.
                Contact us directly for availability, pricing, and custom orders.
              </p>
              <a
                href={`https://wa.me/${WHATSAPP_NUMBER}?text=Hello%20Ahmad%2C%20I%20would%20like%20to%20inquire%20about%20your%20products.`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-8 py-3 rounded text-sm font-medium transition-all duration-200 hover:opacity-90"
                style={{ backgroundColor: "#25D366", color: "#fff" }}
              >
                <Icon name="MessageCircle" size={16} />
                Inquire via WhatsApp
              </a>
            </div>
          </div>
        </Section>
      </section>

      {/* ─── ABOUT ─── */}
      <section id="about" className="py-24 px-6" style={{ backgroundColor: "var(--cream)" }}>
        <Section>
          <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-xs tracking-[0.3em] uppercase mb-3" style={{ color: "var(--gold)" }}>
                Who We Are
              </p>
              <h2
                className="text-4xl md:text-5xl font-light mb-6 leading-tight"
                style={{ color: "var(--navy)", fontFamily: "Cormorant Garamond, serif" }}
              >
                Building Global
                <br />
                <em>Trade Relationships</em>
              </h2>
              <div className="w-14 h-0.5 mb-8" style={{ background: "linear-gradient(90deg, var(--gold), var(--gold-light))" }} />
              <p className="text-sm leading-relaxed mb-5" style={{ color: "#4b5563" }}>
                Ahmad Jilani is an internationally-operating trade professional with over a decade
                of experience connecting buyers and suppliers across continents. Based in Jordan,
                we serve clients in the Middle East, Europe, Asia, Africa, and beyond.
              </p>
              <p className="text-sm leading-relaxed mb-8" style={{ color: "#4b5563" }}>
                Our mission is to deliver reliable, high-quality products at competitive prices —
                whether you're a retail buyer or a wholesale distributor. We value trust,
                transparency, and long-term partnerships.
              </p>
              <div className="flex flex-wrap gap-4">
                {["Retail Orders", "Bulk Wholesale", "Custom Sourcing", "Export Documentation"].map((tag) => (
                  <span
                    key={tag}
                    className="px-4 py-1.5 text-xs tracking-wide rounded-sm border"
                    style={{ borderColor: "var(--gold)", color: "var(--navy)" }}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {[
                { icon: "Globe2", title: "International Reach", desc: "Exporting to 50+ countries worldwide with reliable logistics partners." },
                { icon: "ShieldCheck", title: "Verified Quality", desc: "All products are sourced from certified and trusted manufacturers." },
                { icon: "Users", title: "Dedicated Support", desc: "Personal communication — no automated bots, always a real person." },
                { icon: "TrendingUp", title: "Competitive Pricing", desc: "Best-market pricing for both retail buyers and wholesale clients." },
              ].map((item) => (
                <div
                  key={item.title}
                  className="bg-white rounded-sm p-6 border border-transparent hover:border-amber-200 transition-colors duration-200"
                >
                  <Icon name={item.icon} fallback="Star" size={22} style={{ color: "var(--gold)" }} className="mb-3" />
                  <h4
                    className="font-semibold mb-2"
                    style={{ color: "var(--navy)", fontFamily: "Cormorant Garamond, serif", fontSize: "1rem" }}
                  >
                    {item.title}
                  </h4>
                  <p className="text-xs leading-relaxed" style={{ color: "#6b7280" }}>{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </Section>
      </section>

      {/* ─── WHOLESALE ─── */}
      <section id="wholesale" className="py-24 px-6" style={{ backgroundColor: "var(--navy)" }}>
        <Section>
          <div className="max-w-5xl mx-auto text-center">
            <p className="text-xs tracking-[0.3em] uppercase mb-3" style={{ color: "var(--gold)" }}>
              For Business
            </p>
            <h2
              className="text-4xl md:text-5xl font-light text-white mb-4"
              style={{ fontFamily: "Cormorant Garamond, serif" }}
            >
              Wholesale Program
            </h2>
            <div className="gold-divider mb-10" />
            <p className="text-sm text-white/65 max-w-xl mx-auto mb-14 leading-relaxed">
              We partner with distributors, importers, retailers, and businesses of all sizes.
              Dedicated pricing tiers, flexible MOQs, and full export support.
            </p>

            <div className="grid md:grid-cols-3 gap-6 mb-14">
              {[
                {
                  icon: "Package",
                  title: "Flexible MOQ",
                  desc: "Minimum order quantities are negotiable based on product category and client relationship.",
                },
                {
                  icon: "FileText",
                  title: "Full Documentation",
                  desc: "Certificate of Origin, Commercial Invoice, Packing List, and all required export documents.",
                },
                {
                  icon: "Truck",
                  title: "Worldwide Logistics",
                  desc: "Air freight, sea freight, and express delivery options tailored to your timeline.",
                },
              ].map((item) => (
                <div
                  key={item.title}
                  className="rounded-sm p-8 border"
                  style={{ borderColor: "rgba(201,168,76,0.3)", backgroundColor: "rgba(255,255,255,0.04)" }}
                >
                  <div
                    className="w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-5"
                    style={{ backgroundColor: "rgba(201,168,76,0.15)" }}
                  >
                    <Icon name={item.icon} fallback="Package" size={22} style={{ color: "var(--gold)" }} />
                  </div>
                  <h3
                    className="text-lg font-semibold text-white mb-2"
                    style={{ fontFamily: "Cormorant Garamond, serif" }}
                  >
                    {item.title}
                  </h3>
                  <p className="text-xs leading-relaxed text-white/55">{item.desc}</p>
                </div>
              ))}
            </div>

            <a
              href={`https://wa.me/${WHATSAPP_NUMBER}?text=Hello%20Ahmad%2C%20I%20am%20interested%20in%20wholesale%20pricing.`}
              target="_blank"
              rel="noopener noreferrer"
              className="wa-pulse inline-flex items-center gap-3 px-10 py-4 rounded text-base font-medium transition-all duration-200 hover:opacity-90"
              style={{ backgroundColor: "#25D366", color: "#fff" }}
            >
              <Icon name="MessageCircle" size={20} />
              Get Wholesale Quote on WhatsApp
            </a>
          </div>
        </Section>
      </section>

      {/* ─── CONTACT ─── */}
      <section id="contact" className="py-24 px-6" style={{ backgroundColor: "var(--cream)" }}>
        <Section>
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-14">
              <p className="text-xs tracking-[0.3em] uppercase mb-3" style={{ color: "var(--gold)" }}>
                Get In Touch
              </p>
              <h2
                className="text-4xl md:text-5xl font-light mb-4"
                style={{ color: "var(--navy)", fontFamily: "Cormorant Garamond, serif" }}
              >
                Contact Ahmad Jilani
              </h2>
              <div className="gold-divider" />
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              <a
                href={`https://wa.me/${WHATSAPP_NUMBER}`}
                target="_blank"
                rel="noopener noreferrer"
                className="product-card bg-white rounded-sm p-8 text-center border-2 flex flex-col items-center"
                style={{ borderColor: "#25D366" }}
              >
                <div
                  className="w-14 h-14 rounded-full flex items-center justify-center mb-4"
                  style={{ backgroundColor: "rgba(37, 211, 102, 0.12)" }}
                >
                  <Icon name="MessageCircle" size={26} style={{ color: "#25D366" }} />
                </div>
                <h3
                  className="text-lg font-semibold mb-2"
                  style={{ color: "var(--navy)", fontFamily: "Cormorant Garamond, serif" }}
                >
                  WhatsApp
                </h3>
                <p className="text-sm mb-4" style={{ color: "#6b7280" }}>
                  Fastest response — click to chat directly
                </p>
                <span className="text-sm font-medium" style={{ color: "#25D366" }}>
                  {PHONE}
                </span>
                <span
                  className="mt-4 px-6 py-2 rounded text-xs font-medium text-white"
                  style={{ backgroundColor: "#25D366" }}
                >
                  Open WhatsApp →
                </span>
              </a>

              <a
                href={`tel:${PHONE}`}
                className="product-card bg-white rounded-sm p-8 text-center border flex flex-col items-center"
                style={{ borderColor: "rgba(201,168,76,0.3)" }}
              >
                <div
                  className="w-14 h-14 rounded-full flex items-center justify-center mb-4"
                  style={{ backgroundColor: "rgba(201,168,76,0.1)" }}
                >
                  <Icon name="Phone" size={26} style={{ color: "var(--gold)" }} />
                </div>
                <h3
                  className="text-lg font-semibold mb-2"
                  style={{ color: "var(--navy)", fontFamily: "Cormorant Garamond, serif" }}
                >
                  Phone
                </h3>
                <p className="text-sm mb-4" style={{ color: "#6b7280" }}>
                  Available for calls and inquiries
                </p>
                <span className="text-sm font-medium" style={{ color: "var(--navy)" }}>
                  {PHONE}
                </span>
                <span
                  className="mt-4 px-6 py-2 rounded text-xs font-medium border"
                  style={{ borderColor: "var(--gold)", color: "var(--navy)" }}
                >
                  Call Now →
                </span>
              </a>

              <a
                href={`mailto:${EMAIL}`}
                className="product-card bg-white rounded-sm p-8 text-center border flex flex-col items-center"
                style={{ borderColor: "rgba(201,168,76,0.3)" }}
              >
                <div
                  className="w-14 h-14 rounded-full flex items-center justify-center mb-4"
                  style={{ backgroundColor: "rgba(201,168,76,0.1)" }}
                >
                  <Icon name="Mail" size={26} style={{ color: "var(--gold)" }} />
                </div>
                <h3
                  className="text-lg font-semibold mb-2"
                  style={{ color: "var(--navy)", fontFamily: "Cormorant Garamond, serif" }}
                >
                  Email
                </h3>
                <p className="text-sm mb-4" style={{ color: "#6b7280" }}>
                  For formal inquiries & documentation
                </p>
                <span className="text-sm font-medium break-all" style={{ color: "var(--navy)" }}>
                  {EMAIL}
                </span>
                <span
                  className="mt-4 px-6 py-2 rounded text-xs font-medium border"
                  style={{ borderColor: "var(--gold)", color: "var(--navy)" }}
                >
                  Send Email →
                </span>
              </a>
            </div>
          </div>
        </Section>
      </section>

      {/* ─── FAQ ─── */}
      <section id="faq" className="py-24 px-6" style={{ backgroundColor: "#eef0f5" }}>
        <Section>
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-14">
              <p className="text-xs tracking-[0.3em] uppercase mb-3" style={{ color: "var(--gold)" }}>
                Questions & Answers
              </p>
              <h2
                className="text-4xl md:text-5xl font-light mb-4"
                style={{ color: "var(--navy)", fontFamily: "Cormorant Garamond, serif" }}
              >
                Frequently Asked Questions
              </h2>
              <div className="gold-divider" />
            </div>

            <div className="flex flex-col gap-3">
              {faqs.map((faq, i) => (
                <div
                  key={i}
                  className="bg-white rounded-sm border overflow-hidden"
                  style={{ borderColor: "rgba(201,168,76,0.2)" }}
                >
                  <button
                    className="w-full flex items-center justify-between px-6 py-5 text-left"
                    onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  >
                    <span
                      className="text-sm font-medium pr-4"
                      style={{ color: "var(--navy)", fontFamily: "Cormorant Garamond, serif", fontSize: "1.05rem" }}
                    >
                      {faq.q}
                    </span>
                    <Icon
                      name={openFaq === i ? "Minus" : "Plus"}
                      size={18}
                      style={{ color: "var(--gold)", flexShrink: 0 }}
                    />
                  </button>
                  {openFaq === i && (
                    <div
                      className="px-6 pb-5 text-sm leading-relaxed border-t"
                      style={{ color: "#6b7280", borderColor: "rgba(201,168,76,0.15)" }}
                    >
                      {faq.a}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </Section>
      </section>

      {/* ─── FOOTER ─── */}
      <footer className="py-12 px-6" style={{ backgroundColor: "var(--navy)" }}>
        <div className="max-w-5xl mx-auto">
          <div
            className="flex flex-col md:flex-row justify-between items-center gap-6 pb-8 border-b"
            style={{ borderColor: "rgba(255,255,255,0.1)" }}
          >
            <div>
              <span
                className="text-xl font-semibold"
                style={{ color: "var(--gold)", fontFamily: "Cormorant Garamond, serif" }}
              >
                Ahmad Jilani
              </span>
              <p className="text-xs text-white/40 mt-1">International Trade & Commerce</p>
            </div>
            <div className="flex flex-wrap gap-6">
              {navLinks.map((l) => (
                <a
                  key={l.label}
                  href={l.href}
                  className="text-xs text-white/50 hover:text-white/80 transition-colors"
                >
                  {l.label}
                </a>
              ))}
            </div>
            <a
              href={`https://wa.me/${WHATSAPP_NUMBER}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-5 py-2.5 rounded text-sm font-medium"
              style={{ backgroundColor: "#25D366", color: "#fff" }}
            >
              <Icon name="MessageCircle" size={16} />
              WhatsApp
            </a>
          </div>
          <div className="pt-6 text-center">
            <p className="text-xs text-white/30">
              © 2025 Ahmad Jilani. All rights reserved. · Jordan · Global Trade
            </p>
          </div>
        </div>
      </footer>

      {/* ─── FLOATING WHATSAPP BUTTON ─── */}
      <a
        href={`https://wa.me/${WHATSAPP_NUMBER}`}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full flex items-center justify-center shadow-lg wa-pulse transition-transform duration-200 hover:scale-110"
        style={{ backgroundColor: "#25D366" }}
        title="Chat on WhatsApp"
      >
        <Icon name="MessageCircle" size={26} style={{ color: "#fff" }} />
      </a>
    </div>
  );
}