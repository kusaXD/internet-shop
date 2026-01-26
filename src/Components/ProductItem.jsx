import React from "react";

function ProductItem({ product }) {
  return (
    <div className="border-2 w-80 h-32 flex flex-col justify-center items-center m-5">
      <div className="w-72 h-28">
        <section className="flex justify-center items-center flex-col">
          <h2 className="font-bold mt-1">{product.name}</h2>
          <p className="text-neutral-500 mt-2">{product.description}</p>
        </section>
        <section className="flex justify-between m-6">
          <p className="text-blue-500 font-bold">{product.price}</p>
          <button className="bg-blue-500 w-24 rounded-md text-white font-bold">
            Add to cart
          </button>
        </section>
      </div>
    </div>
  );
}

export default ProductItem;
