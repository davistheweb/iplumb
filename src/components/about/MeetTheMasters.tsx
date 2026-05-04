import { TeamImage } from "@/assets";
import Image from "next/image";

export const MeetTheMasters: React.FC = () => {
  return (
    <section className="flex flex-col gap-10 bg-[#F8F9FA] px-8 py-10">
      <div className="flex flex-col gap-5">
        <h1 className="font-manrope text-3xl font-bold text-[#002046]">
          Meet the Masters
        </h1>
        <div className="flex flex-col justify-between gap-2 md:flex-row">
          <p className="w-[505.75px] text-[#44474E]">
            Our team consists of licensed specialists, senior engineers, and
            dedicated consultants who are experts in their respective fields.
          </p>
          <a
            href="#"
            className="flex w-fit rounded-lg border border-[#002046] px-8 py-3 text-[#002046]"
          >
            Join Our Team
          </a>
        </div>
      </div>
      <div className="relative flex flex-col items-center justify-center gap-5 lg:flex-row">
        <div className="relative h-115 md:h-156">
          <Image
            src={TeamImage}
            alt="construction"
            className="h-115 rounded-2xl md:h-156"
          />
        </div>
        {/* <div className="flex h-156 w-87.5 flex-col items-center justify-between sm:w-xl lg:w-[300.33px]">
          <div className="relative h-75 w-full">
            <Image
              src={FounderImage}
              alt="project management"
              className="h-74.5 rounded-lg"
            />
          </div>
          <div className="relative h-75 w-full">
            <Image
              src={Narrate}
              alt="project management"
              className="h-74.5 rounded-lg"
            />
          </div>
        </div> */}
      </div>
      {/* Previous Ui  */}
      {/* <div className="grid grid-cols-1 place-items-center gap-5 md:grid-cols-2 lg:grid-cols-3">
        {AboutMasters.map(({ masterImg, name, position, about }, i) => (
          <AboutMastersCard
            key={i}
            masterImg={masterImg}
            name={name}
            position={position}
            about={about}
          />
        ))}
      </div> */}
    </section>
  );
};
