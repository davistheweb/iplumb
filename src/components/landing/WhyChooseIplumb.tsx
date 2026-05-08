import { WhyChooseIplumbImage } from "@/assets";
import { WhyChooseIplumbReasons } from "@/data";
import Image from "next/image";
import React from "react";
import { WhyIplumbLists } from "./ui/WhyIplumbLists";

export const WhyChooseIplumb: React.FC = () => {
  return (
    <section className="flex h-full w-full flex-col-reverse items-center justify-center gap-15 bg-[#F3F4F5] px-8 pt-10 pb-10 lg:flex-row">
      <div className="relative flex">
        <Image
          src={WhyChooseIplumbImage}
          alt="construction image"
          className="w-112.5 rounded-lg"
        />
        <div className="absolute -right-4 -bottom-4 flex h-20 w-57 flex-col items-start justify-center rounded-lg bg-[#EF8300] px-10 md:h-40 md:w-62.5">
          <h1 className="text-[20px] font-bold text-white md:text-[40px]">
            15+
          </h1>
          <p className="w-50 text-[14px] text-white md:text-[16px]">
            YEARS OF EXCELLENCE
          </p>
        </div>
      </div>
      <div className="flex flex-col gap-3">
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
