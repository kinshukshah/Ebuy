import React from "react";
import MenuItem from "../../components/menu-items/menu-item.component";
import { useUserState } from "../../context/StateContext";
import "./wishlist.styles.css";
const Wishlist = () => {
  const {
    userState: { itemsInWishlist },
    userStatedispatch,
  } = useUserState();
  return (
    <div className="wishlist-page small-container">
      <div className="wishlist-headers">Wishlist Page</div>
      <div className="wishlist-items">
        {itemsInWishlist.length > 0 &&
          itemsInWishlist.map((item) => (
            <MenuItem
              key={item._id}
              element={item.productId}
              wishlistPage={true}
            />
          ))}
      </div>
    </div>
  );
};

export { Wishlist };
