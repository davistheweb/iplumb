import { ReviewList } from "@/data";
import { Star } from "lucide-react";
import React from "react";
import { ReviewSectionCard } from "./ui/ReviewSectionCard";

export const ReviewsSection: React.FC = () => {
  return (
    <section className="bg-[#002046] px-8 flex flex-col md:flex-row py-20 space-x-4 space-y-4">
      <div className="flex flex-col space-y-5">
        <h1 className="text-white">Trusted By the Community</h1>
        <p className="text-[#87A0CD]">
          Professional service isn't just about fixing pipes; it's about
          building lasting relationships with our clients.
        </p>
        <div className="flex flex-col space-y-4">
          <span className="flex gap-2 cursor-pointer">
            {Array.from({ length: 5 }, (_, i) => i).map((i) => (
              <Star key={i} color="#EF8300" />
            ))}
          </span>
          <p className="text-[#87A0CD] text-[14px]">4.9/5 AVERAGE RATING</p>
        </div>
      </div>
      <div className="flex flex-col lg:flex-row lg:space-x-5 space-y-4 lg:space-y-0 w-full justify-center items-center">
        {ReviewList.map(({ comment, by, position }, i) => (
          <ReviewSectionCard
            key={i}
            comment={comment}
            by={by}
            position={position}
          />
        ))}
      </div>
    </section>
  );
};
