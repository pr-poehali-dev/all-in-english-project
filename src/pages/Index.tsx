import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import CatalogSection from "@/components/CatalogSection";
import InfoSections from "@/components/InfoSections";

export default function Index() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: "var(--cream)" }}>
      <Navbar />
      <HeroSection />
      <CatalogSection />
      <InfoSections />
    </div>
  );
}
