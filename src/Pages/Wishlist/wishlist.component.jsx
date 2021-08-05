import React from "react";
import { useUserState } from "../../context/StateContext";
import "./wishlist.styles.css";
const Wishlist = () => {
  const {
    userState: { itemsInWishlist },
    userStatedispatch,
  } = useUserState();
  return (
    <div>
      {itemsInWishlist.length > 0 &&
        itemsInWishlist.map((item) => (
          <div key={item._id}>{item.productId.name}</div>
        ))}
    </div>
  );
};

export { Wishlist };
