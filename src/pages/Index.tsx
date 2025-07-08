
import { Navigation } from "@/components/Navigation"
import { HeroSection } from "@/components/HeroSection"
import { FeatureSection } from "@/components/FeatureSection"
import { CTASection } from "@/components/CTASection"

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <HeroSection />
      <FeatureSection />
      <CTASection />
    </div>
  );
};

export default Index;
