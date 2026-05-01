import { AboutHeroSection } from "@/components/about/AboutHeroSection";
import { CoreValues } from "@/components/about/CoreValues";
import { Narrative } from "@/components/about/Narrative";

export default function About() {
  return (
    <div className="h-full w-full overflow-x-hidden">
      <AboutHeroSection />

      <Narrative />
      <CoreValues />
    </div>
  );
}
