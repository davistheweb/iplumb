import QuoteIcon from "@/components/icons/QuoteIcon";
import React from "react";

export const ReviewSectionCard: React.FC<TReviewListProps> = ({
  comment,
  by,
  position,
}) => {
  return (
    <div className="flex h-72 w-85 flex-col space-y-4 rounded-xl bg-[#1B365D] px-8 py-8 md:w-[381.33px]">
      <div className="flex items-start">
        <QuoteIcon color="#EF8300" />
      </div>
      <div className="max-w-[315.33px]">
        <i className="max-w-[315.33px] text-white">{comment}</i>
      </div>
      <div className="flex flex-col space-y-0">
        <p className="text-white">{by}</p>
        <p className="text-[14px] text-[#87A0CD]">{position}</p>
      </div>
    </div>
  );
};
