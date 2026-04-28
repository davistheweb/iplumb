import { ServiceArticleLists } from "@/data";
import { ArrowRight } from "lucide-react";
import React from "react";
import { ServicesArticle } from "./ui/ServicesArticle";

export const ServicesSection: React.FC = () => {
  return (
    <section className="relative h-full w-full pt-15 px-8 items-center bg-[#F8F9FA] pb-5">
      <div className="w-full h-full flex flex-col gap-1 justify-center items-center md:items-start">
        <h1 className="text-[#002046] text-xl text-center md:text-start">
          Comprehensive Technical Solutions
        </h1>
        <p className="text-[#44474E] md:w-[512.7px] text-center md:text-start">
          From emergency repairs to large-scale construction, our licensed
          experts deliver results backed by industry-leading warranties.
        </p>
        <div className="w-full h-full gap-1 hidden md:flex align-middle justify-end items-center ">
          <span className="text-[#AF2B3E]">EXPLORE ALL SERVICES </span>{" "}
          <ArrowRight color="#AF2B3E" size={20} />
        </div>
      </div>
      <div className="grid md:grid-cols-2 gap-10 lg:grid-cols-3 pt-10 h-full w-full ">
        {ServiceArticleLists.map(
          ({ Icon, iconColor, title, subtitle, features }, i) => (
            <ServicesArticle
              key={i}
              Icon={Icon}
              iconColor={iconColor}
              title={title}
              subtitle={subtitle}
              features={features}
            />
          ),
        )}
      </div>
    </section>
  );
};
