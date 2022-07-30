import { ShoppingBagIcon } from "@heroicons/react/outline";
import React from "react";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useQuery } from "@tanstack/react-query";
import { useState } from "react";

const ShoppingBag = () => {
  const state = useSelector((state) => state.handleCart);

  return (
    <div className="shopping-bag">
      <button className="transition-all group hover:text-blue-100 flex items-center">
        <ShoppingBagIcon className="w-6 h-6 text-white group-hover:text-blue-100" />
        <span className="text-xl font-light ml-1">{state.length}</span>
      </button>
    </div>
  );
};

export default ShoppingBag;
