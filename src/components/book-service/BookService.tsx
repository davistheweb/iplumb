import { Clock5 } from "lucide-react";
import React from "react";
import TrustCheckIcon from "../icons/TrustCheckIcon";
import { BookServiceForm } from "./BookServiceForm";

export const BookService: React.FC = () => {
  return (
    <section className="flex w-full flex-col gap-5 px-4 pt-25 md:px-8">
      <div className="flex w-full flex-col gap-6 lg:flex-row">
        <div className="book_service_bg flex h-171.5 items-end rounded-md bg-[#010e1d] px-12 py-12 lg:w-150">
          <div className="flex flex-col gap-4">
            <h1 className="font-manrope text-white">
              Precision Plumbing Services
            </h1>
            <p className="text-white">
              Experience the gold standard in craftsmanship. Licensed, insured,
              and dedicated to your property's integrity.
            </p>
            <div className="flex flex-col gap-4 lg:flex-row">
              <span className="flex items-center gap-4">
                <TrustCheckIcon
                  color="#EF8300"
                  size={15}
                />{" "}
                <span className="text-[14px] font-bold text-white">
                  Certified Experts
                </span>
              </span>
              <span className="flex items-center gap-4">
                {" "}
                <Clock5
                  color="#EF8300"
                  size={15}
                />{" "}
                <span className="text-[14px] font-bold text-white">
                  24/7 Avaliability
                </span>
              </span>
            </div>
          </div>
        </div>
        <BookServiceForm />
      </div>
    </section>
  );
};
