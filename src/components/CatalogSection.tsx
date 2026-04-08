import { useState } from "react";
import Icon from "@/components/ui/icon";
import { Section, Badge } from "@/components/ui/siteUtils";
import { SITE, PRODUCTS, CATEGORIES, waUrl } from "@/data/siteData";

export default function CatalogSection() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");

  const allCategories = ["All", ...Array.from(new Set(PRODUCTS.map((p) => p.category)))];
  const filteredProducts = activeCategory === "All"
    ? PRODUCTS
    : PRODUCTS.filter((p) => p.category === activeCategory);

  return (
    <>
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
                        href={waUrl(SITE.whatsapp, `Hello, I'm interested in: ${product.name}. Please send me more details.`)}
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
                          href={waUrl(SITE.whatsapp, `Hello, I'm interested in: ${product.name}. Please send me more details.`)}
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
                <a href={waUrl(SITE.whatsapp, "Hello Ahmad, I'm looking for a product that's not listed on your catalog.")}
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
    </>
  );
}
