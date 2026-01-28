import { useState } from "react";

import HeaderShop from "./Components/HeaderShop";
import ProductsList from "./Components/ProductsList";
import { useCartContext } from "./Context/CartContext";

function App() {
  const [products, setProducts] = useState([
    {
      id: 1,
      name: "Playstation",
      description: "Description",
      price: 500,
    },
    {
      id: 2,
      name: "TV",
      description: "Description",
      price: 300,
    },
    {
      id: 3,
      name: "Iphone 16",
      description: "Description",
      price: 400,
    },
  ]);

  return (
    <div>
      <HeaderShop title={"Cart"} link={"/Cart"} />
      <ProductsList products={products} />
    </div>
  );
}

export default App;
