import React from "react";

type TCoreValuesCardProps = {
  customClass: string;
  Icon: IconType;
  core: string;
  coreTxtColor: string;
  description: string;
  descriptionTextColor: string;
};

export const CoreValuesCard: React.FC<TCoreValuesCardProps> = ({
  customClass,
  Icon,
  core,
  coreTxtColor,
  description,
  descriptionTextColor,
}) => {
  return (
    <div
      className={`md:w-[389.33px] ${customClass} flex flex-col gap-4 rounded-lg px-8 py-[61.5px] pb-[61.49px]`}
    >
      <Icon
        color="#FD6673"
        size={30}
      />
      <h1 className={`${coreTxtColor} font-manrope text-2xl font-semibold`}>
        {core}
      </h1>
      <p className={`${descriptionTextColor} `}>{description}</p>
    </div>
  );
};
