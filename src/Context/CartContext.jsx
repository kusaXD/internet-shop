import { useContext, useReducer } from "react";
import { createContext } from "react";

const CartContext = createContext();
const initialState = {
  cart: [],
  totalPrice: 0,
};

const CartReducer = (state, action) => {
  switch (action.type) {
    case "ADD_TO_CART":
      return {
        ...state,
        cart: [...state.cart, action.payload],
        totalPrice: state.totalPrice + action.payload.price,
      };
    case "REMOVE_FROM_CART":
      const itemToRemove = state.cart.find(
        (item) => item.cartItemId === action.payload,
      );
      return {
        ...state,
        cart: state.cart.filter((item) => item.cartItemId !== action.payload),
        totalPrice: state.totalPrice - itemToRemove.price,
      };
    default:
      return state;
  }
};

const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(CartReducer, initialState);

  const addToCart = (product) => {
    const productWithId = {
      ...product,
      cartItemId: Date.now(),
    };
    dispatch({ type: "ADD_TO_CART", payload: productWithId });
  };

  const removeFromCart = (cartItemId) => {
    dispatch({ type: "REMOVE_FROM_CART", payload: cartItemId });
  };

  return (
    <CartContext.Provider
      value={{
        cart: state.cart,
        totalPrice: state.totalPrice,
        addToCart,
        removeFromCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

const useCartContext = () => {
  return useContext(CartContext);
};

export { CartProvider, useCartContext };
