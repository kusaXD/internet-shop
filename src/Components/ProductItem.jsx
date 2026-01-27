import React, { useContext } from "react";
import { useCartContext } from "../Context/CartContext";

function ProductItem({ product }) {
  const { addToCart } = useCartContext();

  return (
    <div className="shadow-lg rounded-md w-96 h-52 flex flex-col justify-center items-center m-5">
      <div className=" w-80 h-48">
        <section className="flex justify-center items-center flex-col">
          <h2 className="font-bold text-3xl mt-5">{product.name}</h2>
          <p className="text-neutral-500 text-2xl mt-4">
            {product.description}
          </p>
        </section>
        <section className="flex justify-between mt-7">
          <p className="text-blue-500 text-2xl font-bold">{product.price}</p>
          <button
            onClick={() => addToCart(product)}
            className="bg-blue-500 text-xl w-30 p-2 rounded-md text-white font-bold"
          >
            Add to cart
          </button>
        </section>
      </div>
    </div>
  );
}

export default ProductItem;
