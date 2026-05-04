"use client";
import { CategoryList, ProductsList } from "@/data";
import { ProductCategory } from "@/types";
import { ChevronRight } from "lucide-react";
import { useMemo, useState } from "react";
import CertifiedIcon from "../icons/CertifiedIcon";
import { ProductCard } from "./ProductCard";

export const ProductsVIew: React.FC = () => {
  const [selectedProductCategory, setSelectedProductCategory] =
    useState<ProductCategory>(ProductCategory.ALL);

  const filteredProductCategory = useMemo(() => {
    if (selectedProductCategory === ProductCategory.ALL) return ProductsList;

    return ProductsList.filter(
      (p) => p.productCategory === selectedProductCategory,
    );
  }, [ProductsList, selectedProductCategory]);

  return (
    <div className="flex flex-col gap-8 lg:flex-row">
      <aside className="flex w-[256px] flex-col gap-3 lg:h-233">
        <div className="border-b border-b-[#C4C6CF]">
          <h5 className="pb-2 text-[#002046]">Categories</h5>
        </div>
        <div className="flex flex-col gap-5">
          <ul className="space-y-5">
            {CategoryList.map(({ categoryName, productCategory }, i) => (
              <li
                key={i}
                className={`${selectedProductCategory === productCategory ? "bg-[#1B365D]" : ""} flex cursor-pointer items-center justify-between rounded-lg px-2 py-3 text-[#87A0CD] lg:w-[123.21px] lg:justify-start`}
                onClick={() => {
                  setSelectedProductCategory(productCategory);
                }}
              >
                {categoryName}
                <ChevronRight size={12} />
              </li>
            ))}
          </ul>
        </div>
        <div className="flex flex-col gap-4 rounded-lg bg-[#1B365D] px-6 py-6">
          <CertifiedIcon color="#EF8300" />
          <h1 className="text-white">WARRANTY PROMISE</h1>
          <p className="text-xs text-white">
            All Iplumb certified products come with a 5-year operational
            warranty.
          </p>
        </div>
      </aside>
      <div className="grid grid-cols-1 justify-items-center gap-5 space-y-5 sm:grid-cols-2 lg:grid-cols-3">
        {filteredProductCategory.map(
          ({ productImg, productName, price, productLink }, i) => (
            <ProductCard
              productImg={productImg}
              productName={productName}
              price={price}
              // about={about}
              productLink={productLink}
              key={i}
            />
          ),
        )}
      </div>
    </div>
  );
};
