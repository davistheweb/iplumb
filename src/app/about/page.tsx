import { AboutHeroSection } from "@/components/about/AboutHeroSection";
import { Narrative } from "@/components/about/Narrative";

export default function About() {
  return (
    <div className="h-full w-full overflow-x-hidden">
      <AboutHeroSection />

      <Narrative />
    </div>
  );
}
