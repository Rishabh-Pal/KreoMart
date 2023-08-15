import React from "react";
import Products from "@/components/BestSeller/Products";
import Pagination from "@/components/BestSeller/Pagination";

const Related_products = () => {
  return (
    <main>
      <div className="flex justify-between">
        <div className="font-semibold text-[32px] py-10">You may also like</div>
        <div className="py-14 px-7 text-[32px]">
          <Pagination />
        </div>
      </div>
      <div className="flex flex-wrap gap-x-2 ">
        <Products />
        <Products />
        <Products />
        <Products />
      </div>
    </main>
  );
};

export default Related_products;
