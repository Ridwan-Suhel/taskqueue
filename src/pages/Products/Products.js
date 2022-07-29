import React from "react";
import SingleProducts from "./SingleProducts";

const Products = () => {
  return (
    <main className="px-4 pt-4">
      <div className="title">
        <h2 className="text-2xl">Chose your best product</h2>
        <p className="text-base">
          Get all products from one destination for your daily basis work.
        </p>
      </div>

      <div className="product-wrapper grid lg:grid-cols-3 2xl:grid-cols-4 gap-2 pt-12">
        {/* single col  */}
        <SingleProducts />
        <SingleProducts />
        <SingleProducts />
        <SingleProducts />
      </div>
    </main>
  );
};

export default Products;
