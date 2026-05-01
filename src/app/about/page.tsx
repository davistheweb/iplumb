import { AboutHeroSection } from "@/components/about/AboutHeroSection";
import { CoreValues } from "@/components/about/CoreValues";
import { Narrative } from "@/components/about/Narrative";
import { QuoteSection } from "@/components/about/QuoteSection";

export default function About() {
  return (
    <div className="h-full w-full overflow-x-hidden">
      <AboutHeroSection />

      <Narrative />
      <CoreValues />
      <QuoteSection />
    </div>
  );
}
