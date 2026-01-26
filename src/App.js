import { useState } from "react";
import { Link } from "react-router";
import HeaderShop from "./Components/HeaderShop";
import ProductsList from "./Components/ProductsList";

function App() {
  const [products, setProducts] = useState([
    {
      id: 1,
      name: "Name",
      description: "Description",
      price: 100,
    },
    {
      id: 1,
      name: "Name",
      description: "Description",
      price: 100,
    },
    {
      id: 1,
      name: "Name",
      description: "Description",
      price: 100,
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
