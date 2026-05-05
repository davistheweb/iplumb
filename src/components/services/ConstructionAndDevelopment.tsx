import { Hotel, ProjectManagementImg } from "@/assets";
import { ArrowRight, CompassIcon, MoveUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export const ConstructionAndDevelopment: React.FC = () => {
  return (
    <section className="flex h-full w-full flex-col gap-10 bg-[#F3F4F5] px-8 py-25">
      <div className="flex flex-col items-center justify-center gap-4">
        <h1 className="text-[#002046]">Construction & Development</h1>
        <p className="text-center text-[#44474E] lg:w-[616.25px]">
          From concept to completion, we manage high-end commercial and
          residential construction projects with surgical precision.
        </p>
      </div>
      <div className="relative flex flex-col items-center justify-center gap-5 lg:flex-row">
        <div className="relative h-115 w-87.5 sm:w-xl md:h-156 lg:w-[802.66px]">
          <Image
            src={Hotel}
            alt="construction"
            className="h-115 rounded-2xl md:h-156"
          />
          <div className="absolute bottom-0 flex flex-col gap-4 p-10.5">
            <span className="w-[150.41px] rounded-md bg-[#AF2B3E] px-4 py-1 text-xs font-medium text-white">
              FLAGSHIP SERVICE
            </span>
            <h1 className="leading-6 text-white">Full-Scale Construction</h1>
            <p className="font-bold text-[#AF2B3E] md:w-lg">
              Comprehensive general contracting for commercial developments and
              luxury residential builds.
            </p>
            <Link
              href="/book-service"
              className="flex w-fit items-center justify-center gap-1 rounded-lg bg-[#EF8300] px-8 py-4 text-[16px] text-white"
            >
              Consult Project
              <ArrowRight size={20} />
            </Link>
          </div>
        </div>
        <div className="flex h-156 w-87.5 flex-col items-center justify-between sm:w-xl lg:w-[389.33px]">
          <div className="relative h-75 w-full">
            <Image
              src={ProjectManagementImg}
              alt="project management"
              className="h-74.5 rounded-lg"
            />
            <div className="absolute bottom-0 space-y-4 p-8">
              <h1 className="font-bold text-white">Project Management</h1>
              <p className="font-semibold text-white">
                Precision scheduling and budget control for every phase.
              </p>
            </div>
          </div>
          <div className="flex h-75 flex-col justify-between rounded-lg bg-[#002046] p-8">
            <div className="flex justify-start">
              <CompassIcon color="#AF2B3E" />
            </div>
            <div className="space-y-2">
              <h1 className="leading-6 font-medium text-white">
                Technical Design
              </h1>
              <p className="font-light text-[#87A0CD]">
                Blueprints, structural engineering, and regulatory compliance
                consulting.
              </p>
            </div>
            <a
              href="#"
              className="flex items-center gap-2 text-[#EF8300]"
            >
              Learn More
              <MoveUpRight size={20} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
