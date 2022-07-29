import { ShoppingBagIcon } from "@heroicons/react/outline";
import React from "react";

const ShoppingBag = () => {
  return (
    <div className="shopping-bag">
      <button className="flex items-center">
        <ShoppingBagIcon className="w-6 h-6 text-slate-900" />
        <span className="text-xl font-light ml-1">0</span>
      </button>
    </div>
  );
};

export default ShoppingBag;
