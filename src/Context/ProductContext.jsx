import { useContext, useState } from "react";
import { createContext } from "react";

const ProductsContext = createContext();

export const useProducts = () => useContext(ProductsContext);

export const ProductsProvider = ({ children }) => {
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
    <ProductsContext.Provider value={{ products, setProducts }}>
      {children}
    </ProductsContext.Provider>
  );
};
