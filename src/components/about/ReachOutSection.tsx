export const ReachOutSection: React.FC = () => {
  return (
    <section className="flex items-center justify-center px-8 py-10">
      <div className="md:w-165.2 flex h-fit w-87.5 flex-col rounded-2xl bg-[#1B365D] sm:w-125 md:flex-row lg:w-250 xl:w-304">
        <div className="flex flex-col gap-4 px-20 py-20">
          <h3 className="font-manrope text-white">
            Ready for Professional Standards?
          </h3>
          <p className="text-[#87A0CD] lg:w-2xl">
            Experience the Iplumb difference. Whether it's a routine
            consultation or a major infrastructure project, we bring elite
            craftsmanship to your doorstep.
          </p>
          <div className="flex flex-col gap-4 lg:flex-row">
            <a
              href="#"
              className="w-fit rounded-xl bg-[#FD6673] px-12 py-4.5 text-white"
            >
              Get a Custom Quote
            </a>
            <a
              href="#"
              className="w-fit rounded-xl border border-[#87A0CD] px-12 py-4.5 text-white"
            >
              Speak with a Consultant
            </a>
          </div>
        </div>
        <div className="bg-compass hidden w-[405.55px] rounded-lg bg-[#1B365D]/90 lg:flex"></div>
      </div>
    </section>
  );
};
