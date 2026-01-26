import React from "react";
import ProductItem from "./ProductItem";

function ProductsList({ products }) {
  return (
    <div className="flex justify-center mt-52">
      {products.map((product) => (
        <ProductItem product={product} />
      ))}
    </div>
  );
}

export default ProductsList;
