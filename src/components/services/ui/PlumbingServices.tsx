import Image from "next/image";
import React from "react";

export const PlumbingServices: React.FC<TPlumbingServicesProps> = ({
  Icon,
  img,
  service,
  description,
  link,
}) => {
  return (
    <div className="relative flex h-fit w-87.5 flex-col items-center justify-between gap-8 rounded-xl px-6 pb-8 shadow-xl md:w-[384px]">
      <div className="relative flex md:w-95.5 w-87 items-center justify-center">
        <span className="absolute md:top-3  top-5 left-4 flex h-[34.03px] w-[34.53px] cursor-pointer items-center justify-center rounded-md bg-white">
          <Icon
            size={20}
            color="#AF2B3E"
          />
        </span>
        <Image
          src={img}
          alt="icon"
          className="rounded-xl"
        />
      </div>
      <div className="flex flex-col space-y-5">
        <h1 className="text-start font-semibold text-[#002046]">{service}</h1>
        <p className="text-[#44474E]">{description}</p>
        <a
          href={link}
          className="h-12 w-79.5 rounded-xl bg-[#EF8300] px-4 py-3 text-center text-white"
        >
          Book Now
        </a>
      </div>
    </div>
  );
};
