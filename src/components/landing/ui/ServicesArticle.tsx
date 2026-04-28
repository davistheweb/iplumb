import OrangeCheckedIcon from "@/components/icons/OrangeCheckedIcon";
import React from "react";

export const ServicesArticle: React.FC<TServicesArticleProps> = ({
  Icon,
  iconColor,
  title,
  subtitle,
  features,
}) => {
  return (
    <div className="bg-[#FFFFFF] px-8 pt-8 pb-16 rounded-xl shadow-lg flex flex-col items-center justify-center gap-3">
      <div className="w-full items-start pb-2">
        <div className="bg-[#F3F4F5] h-14 w-14 flex items-center justify-center rounded-md">
          <Icon color={iconColor} />
        </div>
      </div>
      <div className="flex flex-col space-y-5  w-full">
        <h1 className="text-[#002046]">{title}</h1>
        <p className="text-[#44474E]">{subtitle}</p>
        <div className="flex flex-col space-y-4">
          {features.map((feature, i) => (
            <div
              className="flex gap-2 items-center cursor-pointer hover:-translate-1 duration-500 ease-in-out delay-100"
              key={i}
            >
              <OrangeCheckedIcon color="#EF8300" size={15} />
              <span className="text-[#191C1D] leading-5 text-[14px]">
                {feature}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
