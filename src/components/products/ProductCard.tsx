import { ArrowRight } from "lucide-react";
import Image from "next/image";
import React from "react";

export const ProductCard: React.FC<TProductCardProps> = ({
  productImg,
  productName,
  price,

  productLink,
}) => (
  <div className="flex h-112.5 w-[282.67px] flex-col gap-8 lg:w-[202.67px] xl:w-[282.67px]">
    <Image
      src={productImg}
      alt="product image"
      className="h-64 rounded-md"
    />
    <div className="space-y-4 px-6 py-6">
      <div className="flex flex-col justify-between space-y-3">
        <h1 className="font-manrope text-[14px] text-[#1B365D]">
          {productName}
        </h1>
        <span className="text-[#EF8300]">₦{price}</span>
      </div>

      <a
        href={productLink}
        className="flex justify-between rounded-md bg-[#1B365D] px-5 py-3 text-white"
      >
        Buy On Store <ArrowRight />
      </a>
    </div>
  </div>
);
