import { PremiumComponentsLists } from "@/data";
import React from "react";
import { PremiumComponentsListView } from "./ui/PremiumComponentsListView";

export const PremiumComponents: React.FC = () => {
  return (
    <section className="relative flex h-full w-full flex-col items-center gap-10 px-8 pt-15 pb-10">
      <div className="flex w-full flex-col items-center justify-center gap-4">
        <h1 className="text-[#002046]">Premium Components</h1>
        <p className="text-center text-[#44474E] lg:w-[627.77px]">
          We only install and supply hardware from world-class manufacturers
          known for durability and efficiency.
        </p>
      </div>
      <div className="grid h-full w-full grid-cols-1 place-items-center gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {PremiumComponentsLists.map(({ Img, name, description, link }, i) => (
          <PremiumComponentsListView
            key={i}
            Img={Img}
            name={name}
            description={description}
            link={link}
          />
        ))}
      </div>
    </section>
  );
};
