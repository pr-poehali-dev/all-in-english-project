// ─────────────────────────────────────────────
// SITE CONFIG — edit these values anytime
// ─────────────────────────────────────────────
export const SITE = {
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
export const IMAGES = {
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
export const PRODUCTS = [
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
export const CATEGORIES = [
  { icon: "Cpu", label: "Electronics & Tech", image: IMAGES.electronics, count: 45 },
  { icon: "Shirt", label: "Apparel & Textiles", image: IMAGES.apparel, count: 78 },
  { icon: "Home", label: "Home & Living", image: IMAGES.homeLiving, count: 62 },
  { icon: "Wrench", label: "Industrial & Tools", image: IMAGES.industrial, count: 91 },
  { icon: "HeartPulse", label: "Health & Beauty", image: IMAGES.healthBeauty, count: 53 },
  { icon: "Leaf", label: "Food & Agriculture", image: IMAGES.food, count: 37 },
  { icon: "Gem", label: "Luxury & Gifts", image: IMAGES.homeLiving, count: 29 },
  { icon: "Car", label: "Auto Parts", image: IMAGES.industrial, count: 84 },
];

export const FAQS = [
  { q: "Do you offer wholesale pricing?", a: "Yes. We offer competitive wholesale pricing for bulk orders. Minimum order quantities vary by category. Contact us directly for a custom quote." },
  { q: "Which countries do you ship to?", a: "We ship internationally to most countries. Our logistics network covers the Middle East, Europe, Asia, Africa, and the Americas." },
  { q: "How can I place an order?", a: "You can reach us via WhatsApp, phone, or email. We'll discuss your requirements, confirm pricing, and arrange delivery." },
  { q: "What payment methods are accepted?", a: "We accept bank transfers (T/T), letters of credit (L/C), and other internationally recognized payment methods." },
  { q: "Can I request product samples?", a: "Yes. Sample requests are handled case by case. Please contact us with your product interest and we'll arrange accordingly." },
  { q: "Do you provide certificates of origin and quality documents?", a: "Yes. All export documentation including CoO, quality certificates, and packing lists are provided upon request." },
];

export const NAV_LINKS = [
  { label: "Home", href: "#home" },
  { label: "Products", href: "#products" },
  { label: "Categories", href: "#categories" },
  { label: "About", href: "#about" },
  { label: "Wholesale", href: "#wholesale" },
  { label: "Contact", href: "#contact" },
  { label: "FAQ", href: "#faq" },
];

export const waUrl = (whatsapp: string, msg = "") =>
  `https://wa.me/${whatsapp}${msg ? `?text=${encodeURIComponent(msg)}` : ""}`;
