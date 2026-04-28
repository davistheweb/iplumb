import { Hero } from "@/components/landing/Hero";
import { ServicesSection } from "@/components/landing/ServicesSection";
import Image from "next/image";

export default function Home() {
  return (
    <div className="overflow-x-hidden h-full">
      <Hero />
      <ServicesSection />
    </div>
  );
}
