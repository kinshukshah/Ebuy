import React, { useState, useEffect } from "react";
import "./shop-category.style.css";
import { useParams } from "react-router-dom";
import ShopData from "../../components/Data/shop.data";
import CollectionItem from "../../components/collection-item/collection-item.component";

const ShopCategory = () => {
  const [categoryProducts, setCategoryProducts] = useState(null);
  let { category } = useParams();
  let categoryArr = Object.keys(ShopData);
  useEffect(() => {
    if (categoryArr.includes(category)) {
      setCategoryProducts(ShopData[category]);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <div className="small-container">
      {categoryProducts ? (
        <CollectionItem
          key={categoryProducts.id}
          title={categoryProducts.title}
          items={categoryProducts.items}
        />
      ) : (
        "No Products Available"
      )}
    </div>
  );
};

export default ShopCategory;
