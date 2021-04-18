import React from "react";
import "./shop-category.style.css";
import { useParams } from "react-router-dom";

const ShopCategory = () => {
  let { category } = useParams();
  return <div>Shop Category:{category}</div>;
};

export default ShopCategory;
