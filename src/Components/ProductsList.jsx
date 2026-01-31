import React from "react";
import ProductItem from "./ProductItem";

function ProductsList({ products }) {
  return (
    <div className="grid grid-cols-3 gap-4 max-w-screen-xl mx-auto p-4 mt-40">
      {products.map((product) => (
        <ProductItem product={product} />
      ))}
    </div>
  );
}

export default ProductsList;
