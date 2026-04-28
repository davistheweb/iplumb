import { MoveUpRight } from "lucide-react";
import React from "react";

export const PremiumComponentsListView: React.FC<
  TPremiumComponentsListsProps
> = ({ Icon, name, description, link }) => {
  return (
    <div className="h-fit flex flex-col items-center justify-center border w-69.5 gap-10 pb-4 rounded-sm  relative border-[#E1E3E4]">
      <div className="bg-[#EDEEEF] h-66.5 w-full flex items-center justify-center relative">
        <span className="absolute cursor-pointer top-3 right-4">
          <MoveUpRight size={20} color="#1E3A8A" />
        </span>
        <Icon size={35} />
      </div>
      <div className="flex flex-col space-y-2">
        <h1 className="text-[#191C1D] font-bold">{name}</h1>
        <p className="text-[#002046]">{description}</p>
        <a
          href={link}
          className="bg-[#002046] text-white  text-center rounded-md py-3 w-57.5 h-12"
        >
          Buy on Store
        </a>
      </div>
    </div>
  );
};
