import React from "react";

export const WhyIplumbLists: React.FC<TWhyChooseIplumbReasonsProps> = ({
  Icon,
  title,
  subtitle,
}) => {
  return (
    <li className="flex list-none gap-4">
      <div>
        <Icon color="#AF2B3E" />
      </div>

      <div className="flex flex-col gap-2">
        <h1 className="text-[#002046]">{title}</h1>
        <p className="max-w-175 text-[#44474E]">{subtitle}</p>
      </div>
    </li>
  );
};
