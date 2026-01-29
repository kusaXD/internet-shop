import React from "react";
import HeaderShop from "../Components/HeaderShop";
import { useCartContext } from "../Context/CartContext";

function Cart() {
  const { cart, totalPrice, totalQuanity, removeFromCart } = useCartContext();

  return (
    <div>
      <HeaderShop title={"Catalog"} link={"/"} />
      <h2 className="text-6xl font-bold text-center mt-52">Products in cart</h2>
      <p className="text-4xl font-bold text-center mt-4">
        Total items: {totalQuanity}
      </p>
      <p className="text-4xl font-bold text-center mt-4">
        total cost: {totalPrice}
      </p>
      {cart.length > 0 ? (
        <div className="flex flex-col items-center mt-12">
          {cart.map((item) => (
            <div className="w-3/4 h-28 flex justify-between items-center p-3 rounded-lg m-4 text-4xl shadow-xl font-bold">
              <h3>{item.name}</h3>
              <h3>{item.price}</h3>
              <button onClick={() => removeFromCart(item.cartItemId)}>
                remove
              </button>
            </div>
          ))}
        </div>
      ) : (
        <h2 className="text-6xl font-bold text-center mt-36">empty</h2>
      )}
    </div>
  );
}

export default Cart;
