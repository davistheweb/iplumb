import { ServiceArticleLists } from "@/data";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import React from "react";
import { ServicesArticle } from "./ui/ServicesArticle";

export const ServicesSection: React.FC = () => {
  return (
    <section className="relative h-full w-full items-center bg-[#F8F9FA] px-8 pt-15 pb-10">
      <div className="flex h-full w-full flex-col items-center justify-center gap-1 md:items-start">
        <h1 className="text-center text-xl text-[#002046] md:text-start">
          Comprehensive Technical Solutions
        </h1>
        <p className="text-center text-[#44474E] md:w-[512.7px] md:text-start">
          From emergency repairs to large-scale construction, our licensed
          experts deliver results backed by industry-leading warranties.
        </p>
        <div className="hidden h-full w-full items-center justify-end gap-1 align-middle md:flex">
          <Link
            className="text-[#AF2B3E]"
            href="/services"
          >
            EXPLORE ALL SERVICES{" "}
          </Link>{" "}
          <ArrowRight
            color="#AF2B3E"
            size={20}
          />
        </div>
      </div>
      <div className="grid h-full w-full gap-10 pt-10 md:grid-cols-2 lg:grid-cols-3">
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
