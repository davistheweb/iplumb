import { Narrate } from "@/assets";
import Image from "next/image";
import CertifiedIcon from "../icons/CertifiedIcon";

export const Narrative: React.FC = () => {
  return (
    <section className="flex w-full flex-col items-center justify-center gap-12 px-8 py-25 lg:flex-row">
      <div className="flex flex-col gap-4">
        <h1 className="text-start text-[32px] font-bold text-[#002046]">
          The Iplumb Narrative
        </h1>
        <p className="text-[#44474E] sm:w-xl">
          Founded on the principle that mechanical services should be as precise
          as fine architecture, Iplumb began as a small family venture with a
          single van and a set of master tools. Today, we stand as a leader in
          premium residential and commercial infrastructure.
        </p>
        <p className="text-[#44474E] sm:w-xl">
          Our history is etched into the foundations of this city’s most
          prestigious properties. We don’t just fix leaks; we engineer systems
          that last for generations, utilizing the highest grade materials and
          cutting-edge diagnostic technology.
        </p>

        <div className="grid grid-cols-1 gap-8 border-t-2 border-t-[#74777F] pt-8 md:grid-cols-3">
          <div className="h-12 w-[170.67px]">
            <h1 className="leading-[33.6px] font-semibold text-[#AF2B3E]">
              25+
            </h1>
            <p className="text-[14px] font-bold text-[#74777F]">
              YEARS OF EXPERIENCE
            </p>
          </div>
          <div className="h-12 w-[170.67px]">
            <h1 className="leading-[33.6px] font-semibold text-[#AF2B3E]">
              15k
            </h1>
            <p className="text-[14px] font-bold text-[#74777F]">
              PROJECTS DONE
            </p>
          </div>
          <div className="h-12 w-[170.67px]">
            <h1 className="leading-[33.6px] font-semibold text-[#AF2B3E]">
              100%
            </h1>
            <p className="text-[14px] font-bold text-[#74777F]">
              QUALITY GUARANTEE
            </p>
          </div>
        </div>
      </div>
      <div className="relative flex rounded-md">
        <Image
          src={Narrate}
          alt="narrate"
          className="rounded-4xl"
          // h-[585.96px] w-[500px]
        />
        <div className="absolute -bottom-2 -left-6 flex h-33.5 w-50 flex-col gap-2 rounded-xl bg-[#FFFFFF] py-6 pr-[50.36px] pl-6 shadow-2xl">
          <CertifiedIcon
            size={33}
            color="#AF2B3E"
          />
          <h1 className="work-sans leading-6 text-[#002046]">
            Certified Master Craftsmen
          </h1>
        </div>
      </div>
    </section>
  );
};
