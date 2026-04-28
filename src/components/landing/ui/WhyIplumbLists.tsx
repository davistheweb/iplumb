import React from "react";

export const WhyIplumbLists: React.FC<TWhyChooseIplumbReasonsProps> = ({
  Icon,
  title,
  subtitle,
}) => {
  return (
    <li className="list-none flex gap-4">
      <div>
        <Icon color="#AF2B3E" />
      </div>

      <div className="flex flex-col gap-2">
        <h1 className="text-[#002046]">{title}</h1>
        <p className="text-[#44474E] max-w-175">{subtitle}</p>
      </div>
    </li>
  );
};
