import { useState } from "react";
import Icon from "@/components/ui/icon";
import { Section } from "@/components/ui/siteUtils";
import { SITE, FAQS, NAV_LINKS, waUrl } from "@/data/siteData";

export default function InfoSections() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <>
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

            <a href={waUrl(SITE.whatsapp, "Hello Ahmad, I am interested in wholesale pricing and would like a quote.")}
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
              <a href={waUrl(SITE.whatsapp)} target="_blank" rel="noopener noreferrer"
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
              {NAV_LINKS.map((l) => (
                <a key={l.label} href={l.href} className="text-xs text-white/45 hover:text-white/80 transition-colors">
                  {l.label}
                </a>
              ))}
            </div>
            <a href={waUrl(SITE.whatsapp)} target="_blank" rel="noopener noreferrer"
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
        href={waUrl(SITE.whatsapp)}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full flex items-center justify-center shadow-2xl wa-pulse transition-transform duration-200 hover:scale-110"
        style={{ backgroundColor: "#25D366" }}
        title="Chat on WhatsApp"
      >
        <Icon name="MessageCircle" size={26} style={{ color: "#fff" }} />
      </a>
    </>
  );
}
