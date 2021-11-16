import React from "react";
import MenuItem from "../../components/menu-items/menu-item.component";
import { useUserState } from "../../context/StateContext";
import "./wishlist.styles.css";
const Wishlist = () => {
  const {
    userState: { itemsInWishlist },
  } = useUserState();
  return (
    <div className="wishlist-page small-container">
      {itemsInWishlist.length > 0 ? (
        <>
          <div className="wishlist-headers">Your Wishlist</div>
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
        </>
      ) : (
        <div className="empty-wishlist">Your Wishlist is Empty!</div>
      )}
    </div>
  );
};

export { Wishlist };
