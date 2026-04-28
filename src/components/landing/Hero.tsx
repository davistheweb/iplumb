import Link from "next/link";
import React from "react";

export const Hero: React.FC = () => {
  return (
    <section className="w-full h-200 hero-background pt-25 px-8 flex items-center">
      <div className="flex p-0 5 flex-col gap-5 w-full">
        <div className="flex flex-col gap-4 w-full">
          <h1 className="hidden md:block  text-[#EF8300] leading-5">
            CRAFTSMANSHIP MEETS PRECISION
          </h1>
          <h3 className="md:text-[16px] text-[30px] font-bold md:font-normal text-white">
            Reliable Plumbing & Construction Services You Can Trust
          </h3>
          <p className="text-[#87A0CD] font-bold md:font-normal md:w-137.5">
            We provide premium structural and plumbing solutions for homeowners
            and commercial managers who demand excellence, transparency, and
            modern engineering.
          </p>
        </div>
        <div className="flex items-start flex-col md:flex-row gap-4">
          <Link
            href="#"
            className="bg-[#EF8300] text-white px-8 pt-[17.5px] pb-4.5 rounded-lg"
          >
            Book a Service
          </Link>
          <Link
            href="#"
            className="bg-[#002046] text-white px-8 pt-[17.5px] pb-4.5 rounded-sm"
          >
            View Products
          </Link>
        </div>
      </div>
    </section>
  );
};
