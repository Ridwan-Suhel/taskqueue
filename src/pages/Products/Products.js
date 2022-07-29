import React, { useEffect, useState } from "react";
import SingleProducts from "./SingleProducts";

const Products = () => {
  const [productData, setProductData] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/products")
      .then((res) => res.json())
      .then((data) => setProductData(data));
  }, []);

  return (
    <main className="px-4 pt-4 bg-slate-50">
      <div className="title">
        <h2 className="text-2xl">Chose your best product</h2>
        <p className="text-base">
          Get all products from one destination for your daily basis work.
        </p>
      </div>

      <div className="product-wrapper grid lg:grid-cols-3 2xl:grid-cols-4 gap-2 pt-12">
        {productData.map((item) => (
          <SingleProducts item={item} key={item._id} />
        ))}
      </div>
    </main>
  );
};

export default Products;
