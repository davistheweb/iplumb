import { MoveUpRight } from "lucide-react";
import Image from "next/image";
import React from "react";

export const PremiumComponentsListView: React.FC<
  TPremiumComponentsListsProps
> = ({ Img, name, description, link }) => {
  return (
    <div className="relative flex h-fit w-69.5 flex-col items-center justify-center gap-10 rounded-sm border border-[#E1E3E4] px-4 pb-4">
      <div className="relative flex h-66.5 w-full items-center justify-center bg-[#EDEEEF]">
        <span className="absolute top-3 right-4 cursor-pointer">
          <MoveUpRight
            size={20}
            color="#1E3A8A"
          />
        </span>
        <Image
          src={Img}
          alt="component"
          className="h-66.5"
        />
      </div>
      <div className="flex flex-col space-y-2">
        <h1 className="font-bold text-[#191C1D]">{name}</h1>
        <p className="text-[#002046]">{description}</p>
        <a
          href={link}
          className="h-12 w-57.5 rounded-md bg-[#002046] py-3 text-center text-white"
        >
          Buy on Store
        </a>
      </div>
    </div>
  );
};
