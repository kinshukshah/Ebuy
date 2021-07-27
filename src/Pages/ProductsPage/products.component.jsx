import React from "react";
import { useProducts } from "../../context/ProductContext";
import MenuItem from "../../components/menu-items/menu-item.component";
import "./products.styles.css";
function Products() {
  const { products } = useProducts();
  console.log(products);
  return (
    <div className="products-row">
      {products
        ? products.map((item) => <MenuItem key={item._id} element={item} />)
        : null}
    </div>
  );
}

export default Products;
