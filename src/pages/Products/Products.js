import React, { useEffect, useState } from "react";
import SingleProducts from "./SingleProducts";

import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import ShoppingBag from "../../components/Shared/ShoppingBag";

const Products = () => {
  const [productData, setProductData] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetch("http://localhost:5000/products")
      .then((res) => res.json())
      .then((data) => {
        setProductData(data);
        setLoading(true);
      });
  }, []);

  const Loading = () => {
    return (
      <>
        <Skeleton height={240} />
        <Skeleton height={240} />
        <Skeleton height={240} />
        <Skeleton height={240} />
        <Skeleton height={240} />
        <Skeleton height={240} />
      </>
    );
  };

  return (
    <main className="px-4 pt-4 bg-slate-50">
      <div className="flex justify-between">
        <div className="title">
          <h2 className="text-2xl">Chose your best product</h2>
          <p className="text-base">
            Get all products from one destination for your daily basis work.
          </p>
        </div>
      </div>

      <div className="product-wrapper grid lg:grid-cols-3 2xl:grid-cols-4 gap-2 pt-12">
        {loading ? (
          productData.map((item) => (
            <SingleProducts item={item} key={item._id} />
          ))
        ) : (
          <Loading />
        )}
      </div>
    </main>
  );
};

export default Products;
