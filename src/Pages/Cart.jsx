import React from "react";
import { Link } from "react-router";
import HeaderShop from "../Components/HeaderShop";
import { useCartContext } from "../Context/CartContext";

function Cart() {
  const { cart } = useCartContext();

  return (
    <div>
      <HeaderShop title={"Catalog"} link={"/"} />
      <div className="flex flex-col items-center mt-72">
        {cart.map((item) => (
          <div className="w-3/4 h-28 flex justify-between items-center p-3 rounded-lg m-4 text-4xl shadow-xl font-bold">
            <h3>{item.name}</h3>
            <h3>{item.price}</h3>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Cart;
