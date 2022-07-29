import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const ProductDetails = () => {
  const id = useParams();
  const [productData, setProductData] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetch(`http://localhost:5000/products/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setProductData(data);
        setLoading(true);
      });
  }, []);

  return <div>hello</div>;
};

export default ProductDetails;
