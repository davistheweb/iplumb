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
    <article className="flex flex-col items-center justify-center gap-3 rounded-xl bg-[#FFFFFF] px-8 pt-8 pb-16 shadow-lg">
      <div className="w-full items-start pb-2">
        <div className="flex h-14 w-14 items-center justify-center rounded-md bg-[#F3F4F5]">
          <Icon color={iconColor} />
        </div>
      </div>
      <div className="flex w-full flex-col space-y-5">
        <h1 className="text-[#002046]">{title}</h1>
        <p className="text-[#44474E]">{subtitle}</p>
        <div className="flex flex-col space-y-4">
          {features.map((feature, i) => (
            <div
              className="flex cursor-pointer items-center gap-2 delay-100 duration-500 ease-in-out hover:-translate-1"
              key={i}
            >
              <OrangeCheckedIcon
                color="#EF8300"
                size={15}
              />
              <span className="text-[14px] leading-5 text-[#191C1D]">
                {feature}
              </span>
            </div>
          ))}
        </div>
      </div>
    </article>
  );
};
