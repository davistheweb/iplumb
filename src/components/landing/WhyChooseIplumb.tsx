import { WhyChooseIplumbImage } from "@/assets";
import { WhyChooseIplumbReasons } from "@/data";
import Image from "next/image";
import React from "react";
import { WhyIplumbLists } from "./ui/WhyIplumbLists";

export const WhyChooseIplumb: React.FC = () => {
  return (
    <section className="w-full flex flex-col-reverse lg:flex-row justify-center items-center h-full pt-10 px-8 pb-5 gap-15 bg-[#F3F4F5]">
      <div className="relative flex">
        <Image
          src={WhyChooseIplumbImage}
          alt="construction image"
          className="w-112.5"
        />
        <div className="absolute bg-[#EF8300] w-57 md:w-62.5 h-35 md:h-40 rounded-lg -bottom-4 -right-4 flex flex-col items-start justify-center px-10">
          <h1 className="text-white font-bold text-[20px] md:text-[40px]">
            15+
          </h1>
          <p className="text-white text-[14px] md:text-[16px] w-50">
            YEARS OF EXCELLENCE
          </p>
        </div>
      </div>
      <div className="flex flex-col gap-3 ">
        <h1 className="text-[#002046]">Why Propertly Owners Choose Iplumb</h1>
        <div className="flex flex-col gap-5">
          {WhyChooseIplumbReasons.map(({ Icon, title, subtitle }, i) => (
            <WhyIplumbLists
              key={i}
              Icon={Icon}
              title={title}
              subtitle={subtitle}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
