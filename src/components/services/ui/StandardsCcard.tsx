import React from "react";

export const StandardsCcard: React.FC<TStandardsCardProps> = ({
  Icon,
  standard,
  description,
}) => {
  return (
    <div className="flex h-[127.5px] w-67 flex-col items-center justify-center gap-4">
      <Icon color="#AF2B3E" />
      <h1 className="text-[#002046]">{standard}</h1>
      <p className="text-center text-[#44474E]">{description}</p>
    </div>
  );
};
