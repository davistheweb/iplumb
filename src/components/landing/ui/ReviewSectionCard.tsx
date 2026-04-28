import QuoteIcon from "@/components/icons/QuoteIcon";
import React from "react";

export const ReviewSectionCard: React.FC<TReviewListProps> = ({
  comment,
  by,
  position,
}) => {
  return (
    <div className="w-85 md:w-[381.33px] h-72 py-8 px-8 bg-[#1B365D] rounded-xl flex flex-col space-y-4">
      <div className="flex items-start">
        <QuoteIcon color="#EF8300" />
      </div>
      <div className="max-w-[315.33px]">
        <i className="text-white max-w-[315.33px]">{comment}</i>
      </div>
      <div className="flex flex-col space-y-0">
        <p className="text-white">{by}</p>
        <p className="text-[#87A0CD] text-[14px]">{position}</p>
      </div>
    </div>
  );
};
