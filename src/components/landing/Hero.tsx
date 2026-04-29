import Link from "next/link";
import React from "react";
import CustomBookIcon from "../icons/CustomBookIcon";

export const Hero: React.FC = () => {
  return (
    <section className="hero-background flex h-200 w-full items-center px-8 pt-25">
      <div className="5 flex w-full flex-col gap-5 p-0">
        <div className="flex w-full flex-col gap-4">
          <h1 className="hidden leading-5 text-[#EF8300] md:block">
            CRAFTSMANSHIP MEETS PRECISION
          </h1>
          <h3 className="text-[30px] font-bold text-white md:text-[16px] md:font-normal">
            Reliable Plumbing & Construction Services You Can Trust
          </h3>
          <p className="font-bold text-[#87A0CD] md:w-137.5 md:font-normal">
            We provide premium structural and plumbing solutions for homeowners
            and commercial managers who demand excellence, transparency, and
            modern engineering.
          </p>
        </div>
        <div className="flex flex-col items-start gap-4 md:flex-row">
          <Link
            href="#"
            className="flex items-center gap-1 rounded-lg bg-[#EF8300] px-8 pt-[17.5px] pb-4.5 text-white"
          >
            Book a Service <CustomBookIcon size={15} />
          </Link>
          <Link
            href="#"
            className="rounded-sm bg-[#002046] px-8 pt-[17.5px] pb-4.5 text-white"
          >
            View Products
          </Link>
        </div>
      </div>
    </section>
  );
};
