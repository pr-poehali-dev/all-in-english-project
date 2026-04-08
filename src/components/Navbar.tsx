import { useState, useEffect } from "react";
import Icon from "@/components/ui/icon";
import { SITE, NAV_LINKS, waUrl } from "@/data/siteData";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
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
          {NAV_LINKS.map((l) => (
            <a key={l.label} href={l.href} className="nav-link text-xs tracking-widest uppercase text-white/70 hover:text-white">
              {l.label}
            </a>
          ))}
        </div>

        <a
          href={waUrl(SITE.whatsapp)}
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
          {NAV_LINKS.map((l) => (
            <a key={l.label} href={l.href}
              className="text-white/75 hover:text-white text-sm tracking-wide py-1.5 border-b border-white/10"
              onClick={() => setMenuOpen(false)}
            >
              {l.label}
            </a>
          ))}
          <a href={waUrl(SITE.whatsapp)} target="_blank" rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 mt-2 px-4 py-3 rounded text-sm font-semibold"
            style={{ backgroundColor: "#25D366", color: "#fff" }}
          >
            <Icon name="MessageCircle" size={16} />
            Chat on WhatsApp
          </a>
        </div>
      )}
    </nav>
  );
}
