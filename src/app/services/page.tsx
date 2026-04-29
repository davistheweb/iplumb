import { ConstructionAndDevelopment } from "@/components/services/ConstructionAndDevelopment";
import { PlumbingExcellence } from "@/components/services/PlumbingExcellence";
import { ServiceHero } from "@/components/services/ServiceHero";
import { Standards } from "@/components/services/Standards";

export default function Services() {
  return (
    <div className="h-full w-full overflow-x-hidden">
      <ServiceHero />
      <PlumbingExcellence />
      <ConstructionAndDevelopment />
      <Standards />
    </div>
  );
}
