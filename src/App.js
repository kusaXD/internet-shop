import HeaderShop from "./Components/HeaderShop";
import ProductsList from "./Components/ProductsList";
import ProductForm from "./Components/ProductForm";
import { useProducts } from "./Context/ProductContext";

function App() {
  const { products, setProducts } = useProducts();

  return (
    <div>
      <HeaderShop title={"Cart"} link={"/Cart"} />
      <ProductForm products={products} setProducts={setProducts} />
      <ProductsList products={products} />
    </div>
  );
}

export default App;
