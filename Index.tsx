import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import KnowledgeSection from "@/components/KnowledgeSection";
import EngineSection from "@/components/EngineSection";
import PerformanceSection from "@/components/PerformanceSection";
import TechnologySection from "@/components/TechnologySection";
import DesignSection from "@/components/DesignSection";
import FeaturedSection from "@/components/FeaturedSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <HeroSection />
      <KnowledgeSection />
      <EngineSection />
      <PerformanceSection />
      <TechnologySection />
      <DesignSection />
      <FeaturedSection />
      <Footer />
    </div>
  );
};

export default Index;
