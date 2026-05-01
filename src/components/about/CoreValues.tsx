import { ArrowRight } from "lucide-react";
import React from "react";
import Integrity from "../icons/Integrity";
import Legacy from "../icons/Legacy";
import UnCompromising from "../icons/UnCompromising";
import { CoreValuesCard } from "./ui/CoreValuesCard";

export const CoreValues: React.FC = () => {
  return (
    <section className="flex flex-col gap-5 bg-[#F3F4F5] px-8">
      <div className="flex flex-col items-center justify-center gap-4">
        <h1 className="font-manrope text-3xl font-bold text-[#002046]">
          Our Core Values
        </h1>
        <p className="w-[561.34px] text-center leading-6 text-[#44474E]">
          The principles that guide every weld, every connection, and every
          client interaction.
        </p>
      </div>
      <div className="flex flex-col gap-8">
        {/* 1st core values  */}
        <div className="flex flex-col gap-4 lg:flex-row">
          <div className="h-[298.01px] rounded-lg border border-[#C4C6CF] bg-white p-4 shadow-sm md:w-[702.67px] md:p-8 lg:w-[802.67px]">
            <div className="flex flex-col gap-1 md:gap-4">
              <UnCompromising
                color="#AF2B3E"
                size={30}
              />
              <h1 className="font-manrope font-semibold text-[#002046] md:text-2xl">
                Uncompromising Precision
              </h1>
              <p className="lg:w-[736.67px]">
                We believe that near-enough is never enough. Our technicians
                operate with a jeweler's focus, ensuring that every fitting is
                perfect and every system is optimized for lifelong performance.
              </p>
            </div>
            <div className="pt-2 md:h-18 md:pt-8">
              <div className="flex justify-between border-t border-t-[#E1E3E4] pt-2 md:pt-8">
                <h1 className="font-bold text-[#AF2B3E]">
                  THE IPLUMB STANDARD
                </h1>
                <ArrowRight
                  color="#74777F"
                  size={20}
                />
              </div>
            </div>
          </div>
          <CoreValuesCard
            Icon={Integrity}
            customClass="bg-[#002046] h-[308.99px]"
            core="Integrity First"
            coreTxtColor="text-white"
            description="Honest assessments, transparent
pricing, and zero shortcuts. We treat
your property as if it were our own."
            descriptionTextColor="text-[#87A0CD]"
          />
        </div>
        {/* 2nd core values  */}
        <div className="flex flex-col gap-4 lg:flex-row">
          <CoreValuesCard
            Icon={Legacy}
            customClass="bg-white border border-[#C4C6CF] h-[284.41px]"
            core="Legacy Knowledge"
            coreTxtColor="text-[#002046]"
            description="Blending decades of expertise with
modern innovation to solve today's
complex plumbing challenges."
            descriptionTextColor="text-[#44474E]"
          />
          <div className="technological_mastery-bg flex flex-col items-start justify-end gap-2 rounded-lg px-8 py-8 md:w-[802.67px]">
            <h1 className="font-manrope text-2xl font-semibold text-white">
              Technological Mastery
            </h1>
            <p className="text-white">
              Investing in the future of infrastructure today.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
