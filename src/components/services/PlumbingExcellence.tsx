import { PlumbingServicesLists } from "@/data";
import { PlumbingServices } from "./ui/PlumbingServices";

export const PlumbingExcellence: React.FC = () => {
  return (
    <section className="flex flex-col gap-10 px-8 py-10">
      <div className="space-y-2">
        <h1 className="text-[#002046]">Plumbing Excellence</h1>
        <p className="text-[#44474E] lg:w-[549.75px]">
          Reliable plumbing infrastructure is the heartbeat of any property. We
          provide end-to-end solutions for residential and commercial systems.
        </p>
      </div>
      <div className="grid h-full w-full grid-cols-1 place-items-center gap-10 md:grid-cols-2 md:gap-5 xl:grid-cols-3">
        {PlumbingServicesLists.map(
          ({ Icon, img, service, description, link }, i) => (
            <PlumbingServices
              key={i}
              Icon={Icon}
              img={img}
              service={service}
              description={description}
              link={link}
            />
          ),
        )}
      </div>
    </section>
  );
};
