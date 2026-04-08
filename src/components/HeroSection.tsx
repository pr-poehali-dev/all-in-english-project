import Icon from "@/components/ui/icon";
import { Section } from "@/components/ui/siteUtils";
import { SITE, IMAGES, waUrl } from "@/data/siteData";

export default function HeroSection() {
  return (
    <>
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
            <a href={waUrl(SITE.whatsapp, "Hello, I'd like to inquire about your products.")}
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
    </>
  );
}
