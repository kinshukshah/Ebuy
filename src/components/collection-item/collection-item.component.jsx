import React from "react";
import MenuItem from "../menu-items/menu-item.component";
import "./collection-item.style.css";
import { Link } from "react-router-dom";
import { useProducts } from "../../context/ProductContext";
import { GetItemsByTags } from "../Utils/index";
const CollectionItem = ({ routeName, title, category }) => {
  const { products } = useProducts();
  let spliceValue = 4;
  let tag = {
    name: "category",
    value: category,
  };
  const productsByCategory = products ? GetItemsByTags(tag, products) : null;
  return (
    <div className="collection">
      <div className="collection-header">
        <h2>{title}</h2>
        {/* {routeName ? (
          <Link to={`/products`}>
            <button>View All</button>
          </Link>
        ) : null} */}
        <Link to={`/products`}>
          <button>View All</button>
        </Link>
      </div>
      <div className="collection-row">
        {productsByCategory
          ? productsByCategory
              .slice(0, spliceValue)
              .map((ele) => <MenuItem key={ele._id} element={ele} />)
          : null}
      </div>
    </div>
  );
};
export default CollectionItem;
