import { Hero } from "@/components/landing/Hero";
import { ServicesSection } from "@/components/landing/ServicesSection";
import { WhyChooseIplumb } from "@/components/landing/WhyChooseIplumb";
import Image from "next/image";

export default function Home() {
  return (
    <div className="overflow-x-hidden h-full">
      <Hero />
      <ServicesSection />
      <WhyChooseIplumb />
    </div>
  );
}
