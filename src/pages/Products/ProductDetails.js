import { ArrowLeftIcon } from "@heroicons/react/outline";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux/es/exports";
import { addCart } from "../../redux/action";
import { NavLink, useParams } from "react-router-dom";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import ShoppingBag from "../../components/Shared/ShoppingBag";

const ProductDetails = () => {
  const { id } = useParams();
  const [product, setDetailsProduct] = useState({});
  const [loading, setLoading] = useState(false);

  const dispatch = useDispatch();
  const addProduct = (product) => {
    dispatch(addCart(product));
  };

  useEffect(() => {
    fetch(`http://localhost:5000/products/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setDetailsProduct(data);
        setLoading(true);
      });
  }, [id]);

  const { image, name, model, description, price } = product;

  const Loading = () => {
    return (
      <>
        <div className="flex gap-5 px-4 mt-8">
          <div className="w-1/3">
            <Skeleton height={250} />
          </div>
          <div className="w-2/3">
            <Skeleton style={{ width: "50%" }} />
            <Skeleton style={{ width: "45%" }} />
            <Skeleton style={{ width: "42%" }} />
            <Skeleton style={{ width: "20%", marginTop: "14px" }} />
            <Skeleton style={{ width: "100%", marginTop: "10px" }} />
            <Skeleton style={{ width: "100%" }} />
            <Skeleton style={{ width: "100%" }} />
            <Skeleton style={{ width: "100%" }} />
            <div className="flex mt-3">
              <Skeleton height={40} width={200} />
              <Skeleton height={40} width={200} style={{ marginLeft: 6 }} />
            </div>
          </div>
        </div>
      </>
    );
  };

  return (
    <div className="">
      <div className="py-6 px-4">
        <div className="flex justify-between">
          <NavLink
            to="/products"
            className="transition-all hover:bg-blue-900 w-8 h-8 bg-slate-900 flex items-center justify-center rounded-full "
          >
            <ArrowLeftIcon className="w-5 h-5 text-white" />
          </NavLink>
          <div className="site-top">
            <ShoppingBag />
          </div>
        </div>
      </div>
      <div className="bg-slate-900 py-2 mb-3">
        <p className="text-center font-light text-lg text-white">
          Get 5% off on Entire order with digital payment
        </p>
      </div>
      {loading ? (
        <div className="flex gap-5 justify-between px-4">
          <div className="img-wrapper w-1/3">
            <img src={image} alt="img" />
          </div>
          <div className=" w-2/3 mt-4">
            <h2 className="text-lg text-slate-800">
              <span className="font-[500] text-slate-900">Product Name:</span>{" "}
              {name}
            </h2>
            <h2 className="text-lg text-slate-800">
              <span className="font-[500] text-slate-900">Model: </span>
              {model}
            </h2>
            <h2 className="text-lg text-slate-800">
              <span className="font-[500] text-slate-900">Price: </span>${price}
            </h2>
            <div className="mt-3 border-t pt-2">
              <p className="font-[500] text-slate-900">Decription</p>
              <p className="text-lg text-slate-600 leading-[22px]">
                {description}
              </p>
            </div>

            <div className="btn-group mt-8">
              <button
                onClick={() => addProduct(product)}
                className="border-2 border-black w-[200px] mr-2 py-2 text-base text-white font-[500] bg-black uppercase"
              >
                Add To Bag
              </button>
              <button className="border-2 border-black w-[200px] py-2 text-base font-[500] uppercase ">
                Go to cart
              </button>
            </div>
          </div>
        </div>
      ) : (
        <Loading />
      )}
    </div>
  );
};

export default ProductDetails;
