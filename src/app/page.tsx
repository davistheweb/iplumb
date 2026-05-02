import { Hero } from "@/components/landing/Hero";
import { PremiumComponents } from "@/components/landing/PremiumComponents";
import { ReviewsSection } from "@/components/landing/ReviewsSection";
import { ServicesSection } from "@/components/landing/ServicesSection";
import { WhyChooseIplumb } from "@/components/landing/WhyChooseIplumb";

export default function Home() {
  return (
    <div className="h-full w-full overflow-x-hidden">
      <Hero />
      <ServicesSection />
      <WhyChooseIplumb />
      <PremiumComponents />
      <ReviewsSection />
    </div>
  );
}
