import React from "react";
import {
  ShieldExclamationIcon,
  ShoppingCartIcon,
} from "@heroicons/react/outline";
import { HeartIcon } from "@heroicons/react/solid";
import "./Products.css";
import { useNavigate } from "react-router-dom";

const SingleProducts = ({ item }) => {
  const navigate = useNavigate();
  const { name, price, model, image, _id } = item;

  const handleClick = (id) => {
    navigate(`/products/${id}`);
  };
  return (
    <div className="bg-white overflow-hidden group single-col border rounded-lg px-6 py-4 cursor-pointer relative">
      <div className="flex justify-between items-center">
        <div className="pr-name font-bold text-base">{name}</div>
        <span>
          <HeartIcon className="w-5 h-5 text-rose-500" />
        </span>
      </div>
      <div className="img-wrapper py-3">
        <img className="w-[200px] mx-auto" src={image} alt="img" />
      </div>

      <div className="flex justify-between items-center">
        <div className="pr-model font-bold text-sm flex gap-1 items-center">
          <ShieldExclamationIcon className="w-5 h-5 text-slate-900" />
          <h3>{model}</h3>
        </div>
        <p className="font-bold text-sm">${price}</p>
      </div>

      <div className="transition-all hover-back w-full h-[80px] bg-black absolute bottom-[-100%] group-hover:bottom-0 left-0">
        <div className="w-full pt-4 px-4 text-white text-lg absolute top-0 left-[-100%] group-hover:left-0 transition-all delay-300">
          <h2 className="leading-[16px]">{name}</h2>
          <div className="flex items-center justify-between ">
            <h2 className="text-base">Price: ${price}</h2>
            <button
              onClick={() => handleClick(_id)}
              className="buy-btn relative flex text-sm items-center px-3 py-1 border-2 border-white rounded-lg text-white"
            >
              <span className="btn-icon z-10 bg-black absolute translate-y-[-50%] top-[50%] left-[-20px] border-2 p-2 rounded-full">
                <ShoppingCartIcon className="w-4 h-4 text-white " />
              </span>
              <span className="btn-text ml-4">Buy Now</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleProducts;
