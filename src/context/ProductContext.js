import axios from "axios";
import { createContext, useContext, useState, useEffect } from "react";

export const ProductContext = createContext();

export const ProductProvider = ({ children }) => {
  const [products, setProducts] = useState(null);
  useEffect(() => {
    (async function () {
      try {
        let { data } = await axios.get(
          "https://shopify-backend.kinshukshah.repl.co/api/products/getProducts"
        );
        if (data.success) {
          setProducts(data.products);
        }
        console.log(data);
      } catch (error) {
        alert("Could not fetch products");
      }
    })();
  }, []);
  return (
    <ProductContext.Provider value={{ products, setProducts }}>
      {children}
    </ProductContext.Provider>
  );
};

export const useProducts = () => useContext(ProductContext);
