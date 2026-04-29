import { ReviewList } from "@/data";
import { Star } from "lucide-react";
import React from "react";
import { ReviewSectionCard } from "./ui/ReviewSectionCard";

export const ReviewsSection: React.FC = () => {
  return (
    <section className="flex flex-col space-y-4 space-x-4 bg-[#002046] px-8 py-20 md:flex-row">
      <div className="flex flex-col space-y-5">
        <h1 className="text-white">Trusted By the Community</h1>
        <p className="text-[#87A0CD]">
          Professional service isn't just about fixing pipes; it's about
          building lasting relationships with our clients.
        </p>
        <div className="flex flex-col space-y-4">
          <span className="flex cursor-pointer gap-2">
            {Array.from({ length: 5 }, (_, i) => i).map((i) => (
              <Star
                key={i}
                color="#EF8300"
              />
            ))}
          </span>
          <p className="text-[14px] text-[#87A0CD]">4.9/5 AVERAGE RATING</p>
        </div>
      </div>
      <div className="flex w-full flex-col items-center justify-center space-y-4 lg:flex-row lg:space-y-0 lg:space-x-5">
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
