import { ShoppingBagIcon } from "@heroicons/react/outline";
import React from "react";
import { useEffect } from "react";
import { useSelector } from "react-redux";

const ShoppingBag = () => {
  const state = useSelector((state) => state.handleCart);

  // console.log(state);

  return (
    <div className="shopping-bag">
      <button className="flex items-center">
        <ShoppingBagIcon className="w-6 h-6 text-slate-900" />
        <span className="text-xl font-light ml-1">{state.length}</span>
      </button>
    </div>
  );
};

export default ShoppingBag;
