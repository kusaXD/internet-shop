import React, { useContext } from "react";
import { useCartContext } from "../Context/CartContext";

function ProductItem({ product }) {
  const { addToCart } = useCartContext();

  return (
    <div className="shadow-lg rounded-md w-80 md:w-96 flex flex-col justify-between p-4 m-2 md:m-5 hover:shadow-xl transition-shadow">
      <div>
        <h2 className="font-bold text-xl md:text-2xl text-center line-clamp-1 mb-2">
          {product.name}
        </h2>
        <p className="text-neutral-500 text-sm md:text-base text-center line-clamp-3 min-h-[48px]">
          {product.description}
        </p>
      </div>

      <div className="flex justify-between items-center mt-4 pt-2 border-t border-gray-200">
        <p className="text-blue-500 text-lg md:text-xl font-bold">
          {product.price}
        </p>
        <button
          onClick={() => addToCart(product)}
          className="bg-blue-500 hover:bg-blue-700 px-3 md:px-4 py-2 rounded-md text-white font-bold text-sm md:text-base transition-all whitespace-nowrap"
        >
          Add to cart
        </button>
      </div>
    </div>
  );
}

export default ProductItem;
