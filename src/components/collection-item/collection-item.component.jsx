import React from "react";
import MenuItem from "../menu-items/menu-item.component";
import "./collection-item.style.css";
import { Link } from "react-router-dom";
import { useProducts } from "../../context/ProductContext";
import { GetItemsByTags } from "../Utils/index";
import { useUserState } from "../../context/StateContext";
const CollectionItem = ({ routeName, title, category }) => {
  const { products } = useProducts();
  let spliceValue = 4;
  let tag = {
    name: "category",
    value: category,
  };
  const productsByCategory = products ? GetItemsByTags(tag, products) : null;
  const {
    userState: { itemsInWishlist },
  } = useUserState();
  console.log({routeName});
  return (
    <div className="collection">
      <div className="collection-header">
        <h2>{title}</h2>
        {/* {routeName ? (
          <Link to={`/products`}>
            <button>View All</button>
          </Link>
        ) : null} */}
        <Link to={routeName}>
          <button>View All</button>
        </Link>
      </div>
      <div className="collection-row">
        {productsByCategory
          ? productsByCategory.slice(0, spliceValue).map((item) => {
              const itemInWishlistExists = itemsInWishlist.find(
                (ele) => ele.productId._id === item._id
              );
              return (
                <MenuItem
                  key={item._id}
                  element={item}
                  wishlistExists={itemInWishlistExists ? true : false}
                />
              );
            })
          : null}
      </div>
    </div>
  );
};
export default CollectionItem;
