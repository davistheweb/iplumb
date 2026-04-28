import { Hero } from "@/components/landing/Hero";
import { PremiumComponents } from "@/components/landing/PremiumComponents";
import { ReviewsSection } from "@/components/landing/ReviewsSection";
import { ServicesSection } from "@/components/landing/ServicesSection";
import { WhyChooseIplumb } from "@/components/landing/WhyChooseIplumb";
import Image from "next/image";

export default function Home() {
  return (
    <div className="overflow-x-hidden h-full">
      <Hero />
      <ServicesSection />
      <WhyChooseIplumb />
      <PremiumComponents />
      <ReviewsSection />
    </div>
  );
}
