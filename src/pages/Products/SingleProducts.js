import React from "react";
import {
  ShieldExclamationIcon,
  ShoppingBagIcon,
  ShoppingCartIcon,
} from "@heroicons/react/outline";
import { HeartIcon } from "@heroicons/react/solid";
import chair from "../../images/chair-1.png";
import book from "../../images/book.png";
import headphone1 from "../../images/noise-reducer-headp.png";
import penMug from "../../images/pen-mug.png";
import redChair from "../../images/red-chair.png";
import speaker from "../../images/speaker.png";
import usb from "../../images/usb.png";
import "./Products.css";

const SingleProducts = () => {
  return (
    <div className="overflow-hidden group single-col border rounded-lg px-6 py-4 cursor-pointer relative">
      <div className="flex justify-between items-center">
        <div className="pr-name font-bold text-base">Vanity chair red</div>
        <span>
          <HeartIcon className="w-5 h-5 text-rose-500" />
        </span>
      </div>
      <div className="img-wrapper py-3">
        <img className="w-[200px] mx-auto" src={chair} alt="img" />
      </div>

      <div className="flex justify-between items-center">
        <div className="pr-model font-bold text-sm flex gap-1 items-center">
          <ShieldExclamationIcon className="w-5 h-5 text-slate-900" />
          <h3>Office chair CSM 220-12</h3>
        </div>
        <p className="font-bold text-sm">$120</p>
      </div>

      <div className="transition-all hover-back w-full h-[80px] bg-black absolute bottom-[-100%] group-hover:bottom-0 left-0">
        <div className="w-full pt-4 px-4 text-white text-lg absolute top-0 left-[-100%] group-hover:left-0 transition-all delay-300">
          <h2 className="leading-[16px]">Product Name</h2>
          <div className="flex items-center justify-between ">
            <h2 className="text-base">Price $220</h2>
            <button className="buy-btn relative flex text-sm items-center px-3 py-1 border-2 border-white rounded-lg text-white">
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
