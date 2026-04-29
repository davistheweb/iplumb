import { PlumbingExcellence } from "@/components/services/PlumbingExcellence";
import { ServiceHero } from "@/components/services/ServiceHero";

export default function Services() {
  return (
    <div className="h-full w-full overflow-x-hidden">
      <ServiceHero />
      <PlumbingExcellence />
    </div>
  );
}
