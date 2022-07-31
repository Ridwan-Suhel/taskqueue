import React from "react";
import loaderImg from "../../images/loading.gif";

const LoadingSpinner = () => {
  return (
    <div className="flex items-center justify-center h-[70vh]">
      <img className="w-8 h-8 object-cover" src={loaderImg} alt="Loading..." />
    </div>
  );
};

export default LoadingSpinner;
