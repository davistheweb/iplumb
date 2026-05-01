import Image from "next/image";
import React from "react";

export const AboutMastersCard: React.FC<TAboutMastersCardProps> = ({
  masterImg,
  name,
  position,
  about,
}) => {
  return (
    <div className="flex h-160.5 w-87.5 flex-col items-center justify-between sm:w-92.5 md:w-85 lg:w-[384px]">
      <div>
        <Image
          src={masterImg}
          alt="Master"
          className="rounded-xl"
        />
      </div>
      <div className="space-y-1 py-6">
        <h1 className="font-manrope font-semibold text-[#002046]">{name}</h1>
        <p className="text-[#AF2B3E]">{position}</p>
        <p className="text-[#44474E]">{about}</p>
      </div>
    </div>
  );
};
