import { ProductsVIew } from "./ProductsVIew";

export const Products: React.FC = () => {
  return (
    <section className="flex flex-col gap-5 px-8 py-25">
      <div className="flex flex-col gap-4">
        <h1 className="text-[#002046]">Professional Grade Inventory</h1>
        <p className="text-[#44474E] md:w-[651.89px]">
          Precision-engineered plumbing solutions for industrial and residential
          applications. Curated for durability and modern standards.
        </p>
      </div>
      <ProductsVIew />
    </section>
  );
};
