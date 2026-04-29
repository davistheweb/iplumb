import React from "react";

export const ServiceHero: React.FC = () => {
  return (
    <section className="flex w-full bg-[#1B365D] px-8 pt-30 pb-15">
      <div className="flex w-full flex-col gap-5">
        <h1 className="leading-6 text-[#EF8300]">PRECISION CRAFTSMANSHIP</h1>
        <h2 className="leading-5 text-white">
          Professional Services & Expert Solutions
        </h2>
        <p className="text-[#87A0CD] lg:w-3xl">
          From emergency plumbing repairs to large-scale commercial
          construction, Iplumb delivers excellence with modern technology and
          heritage skill.
        </p>
      </div>
    </section>
  );
};
