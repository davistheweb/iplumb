import { StandardsList } from "@/data";
import React from "react";
import { StandardsCcard } from "./ui/StandardsCcard";

export const Standards: React.FC = () => {
  return (
    <section className="flex flex-col items-center justify-center gap-10 px-8 py-20">
      <div className="flex items-center justify-center">
        <h1 className="text-[#002046]">The Iplumb Standard</h1>
      </div>
      <div className="grid grid-cols-1 gap-8 py-10 sm:grid-cols-2 lg:grid-cols-4">
        {StandardsList.map(({ Icon, standard, description }, i) => (
          <StandardsCcard
            key={i}
            Icon={Icon}
            standard={standard}
            description={description}
          />
        ))}
      </div>
    </section>
  );
};
