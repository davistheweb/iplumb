import { MapPin, MessageSquareText, Phone } from "lucide-react";
import React from "react";
import { ContactForm } from "./ContactForm";

export const Contact: React.FC = () => {
  return (
    <section className="flex w-full flex-col gap-5 px-4 pt-25 md:px-8">
      <div className="flex w-full flex-col gap-6 lg:flex-row">
        <div className="h-[839.57px] space-y-8 lg:w-[469.33px]">
          <h1 className="font-manrope text-2xl font-extrabold text-[#002046] md:text-5xl">
            Let's connect with our experts.
          </h1>
          <p className="text-[#44474E] md:w-md">
            Our team of professional plumbers and engineers is ready to assist
            with your residential or commercial needs.
          </p>
          <div className="flex flex-col gap-4 pt-12">
            <div className="flex gap-8">
              <div className="flex h-14 w-14 items-center justify-center rounded-lg bg-[#1B365D]">
                <Phone color="#EF8300" />
              </div>
              <div className="space-y-2">
                <h6 className="text-[14px] font-bold text-[#AF2B3E]">
                  DIRECT LINE
                </h6>
                <h4 className="font-manrope font-semibold text-[#002046]">
                  08062228206
                </h4>
                <p className="text-[#44474E]">
                  Available 24/7 for emergency services.
                </p>
              </div>
            </div>
            <div className="flex gap-5">
              <div className="flex h-14 w-14 items-center justify-center rounded-lg bg-[#E1E3E4]">
                <MessageSquareText color="#002046" />
              </div>
              <div className="space-y-2">
                <h6 className="text-[14px] font-bold text-[#AF2B3E]">
                  MESSAGE US
                </h6>
                <h4 className="font-manrope font-semibold text-[#002046]">
                  +2348170740048
                </h4>
                <p className="text-[#44474E]">
                  Available 24/7 for emergency services.
                </p>
              </div>
            </div>
            <div className="flex gap-5">
              <div className="flex h-14 w-14 items-center justify-center rounded-lg bg-[#E1E3E4]">
                <MapPin color="#002046" />
              </div>
              <div className="space-y-2">
                <h6 className="text-[14px] font-bold text-[#AF2B3E]">
                  HEADQUARTERS
                </h6>
                <h4 className="font-manrope font-semibold text-[#002046]">
                  Shop 29 Powa Plaza Aladinma, by Holy Cross Bustop, Owerri, Imo state
                </h4>
                <p className="text-[#44474E]">Owerri, Imo State, Nigeria</p>
              </div>
            </div>
          </div>
          <div className="h-54 space-y-3 rounded-lg border border-[#C4C6CF] px-8 py-8 md:w-[469.33px]">
            <h5 className="text-[14px] font-bold text-[#002046]">
              SERVICE AVAILABILITY
            </h5>
            <div className="flex justify-between border-b border-b-[#C4C6CF] pb-2">
              <span className="text-[#191C1D]">Mon — Fri</span>
              <span className="font-bold text-[#002046]">
                8:00 AM - 6:00 PM
              </span>
            </div>
            <div className="flex justify-between border-b border-b-[#C4C6CF] pb-2">
              <span className="text-[#191C1D]">Saturday</span>
              <span className="font-bold text-[#002046]">
                9:00 AM - 4:00 PM
              </span>
            </div>
            <div className="flex justify-between pb-2">
              <span className="text-[#191C1D]">Sunday</span>
              <span className="font-bold text-[#AF2B3E]">Emergency Only</span>
            </div>
          </div>
        </div>
        <ContactForm />
      </div>
    </section>
  );
};
