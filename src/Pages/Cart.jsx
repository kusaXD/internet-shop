import React from "react";
import { Link } from "react-router";
import HeaderShop from "../Components/HeaderShop";
import { useCartContext } from "../Context/CartContext";

function Cart() {
  const { cart } = useCartContext();

  return (
    <div>
      <HeaderShop title={"Catalog"} link={"/"} />
      <div>
        {cart.map((item) => (
          <div>
            <h3>{item.name}</h3>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Cart;
