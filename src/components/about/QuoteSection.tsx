import QuoteIcon from "../icons/QuoteIcon";

export const QuoteSection: React.FC = () => {
  return (
    <section className="flex flex-col items-center justify-center gap-5 px-8 py-10">
      <QuoteIcon color="#FD6673" />
      <h2 className="font-manrope text-center text-2xl font-bold text-[#002046] sm:w-[400.11px]">
        " Our mission is to redefine the service industry through unparalleled
        professionalism ensuring every client expereinces that peace of mind
        that comes with master-level engineering. "
      </h2>
      <div className="flex items-center gap-4">
        <div className="h-12 w-12 rounded-full bg-[#D9DADB]" />
        <div className="flex flex-col">
          <span className="text-[#002046]">Arthur J. Plumb</span>
          <span className="text-[#74777F]">Founder & CEO</span>
        </div>
      </div>
    </section>
  );
};
