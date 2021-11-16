import React from "react";
import "./featured.products.styles.css";

import MenuItem from "../menu-items/menu-item.component";
import { useProducts } from "../../context/ProductContext";
import { GetItemsByTags } from "../Utils";

const FeaturedProducts = () => {
  const { products } = useProducts();
  const tag = {
    name: "featured",
    value: true,
  };
  const featuredProducts = products && GetItemsByTags(tag, products);
  console.log(featuredProducts);
  return (
    <>
      <h2 className="feature-title">Featured Products</h2>
      <div className="featuredrow">
        {products &&
          featuredProducts.map((item) => (
            <MenuItem key={item._id} element={item} />
          ))}
      </div>
    </>
  );
};
export default FeaturedProducts;
