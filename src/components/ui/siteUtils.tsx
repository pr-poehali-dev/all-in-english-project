import { useState, useEffect, useRef } from "react";

export function useVisible() {
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

export function Section({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  const { ref, visible } = useVisible();
  return (
    <div ref={ref} className={`section-transition ${visible ? "visible" : ""} ${className}`}>
      {children}
    </div>
  );
}

export function Badge({ text }: { text: string }) {
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
