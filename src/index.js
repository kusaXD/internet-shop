import React from "react";
import ReactDOM from "react-dom/client";
import "./styles/index.css";
import App from "./App";
import { createBrowserRouter, RouterProvider } from "react-router";
import Cart from "./Pages/Cart";
import { CartProvider } from "./Context/CartContext";
import { ProductsProvider } from "./Context/ProductContext";

const router = createBrowserRouter([
  {
    path: "/",
    Component: App,
  },
  {
    path: "/cart",
    Component: Cart,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <CartProvider>
    <ProductsProvider>
      <RouterProvider router={router} />
    </ProductsProvider>
  </CartProvider>,
);
