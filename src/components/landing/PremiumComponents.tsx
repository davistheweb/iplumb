import { PremiumComponentsLists } from "@/data";
import React from "react";
import { PremiumComponentsListView } from "./ui/PremiumComponentsListView";

export const PremiumComponents: React.FC = () => {
  return (
    <section className="relative h-full flex flex-col gap-10 w-full pt-15 px-8 items-center pb-10">
      <div className="w-full flex flex-col items-center gap-4 justify-center">
        <h1 className="text-[#002046]">Premium Components</h1>
        <p className="text-[#44474E] text-center lg:w-[627.77px]">
          We only install and supply hardware from world-class manufacturers
          known for durability and efficiency.
        </p>
      </div>
      <div className="grid w-full h-full grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 place-items-center gap-5">
        {PremiumComponentsLists.map(({ Icon, name, description, link }, i) => (
          <PremiumComponentsListView
            key={i}
            Icon={Icon}
            name={name}
            description={description}
            link={link}
          />
        ))}
      </div>
    </section>
  );
};
