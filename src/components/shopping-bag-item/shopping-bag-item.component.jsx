import React from "react";
import {
  AddToWishlist,
  removeCartItem,
  updateCart,
} from "../../utils/Apicalls";
import "./shopping-bag-item.styles.css";

const ShoppingBagItem = ({
  brandName,
  imageUrl,
  name,
  price,
  quantity,
  stopLoading,
  startLoading,
  userStatedispatch,
  productId,
}) => {
  const userId = JSON.parse(localStorage?.getItem("currentUser")).user._id;
  const handleRemoveFromCart = async () => {
    startLoading();
    await removeCartItem(userStatedispatch, productId, userId);
    stopLoading();
  };

  const handleMoveToWishlist = async () => {
    startLoading();
    await AddToWishlist(userStatedispatch, productId);
    await removeCartItem(userStatedispatch, productId, userId);
    stopLoading();
  };

  const handleUpdateCartQuantity = async (action) => {
    startLoading();
    await updateCart(userStatedispatch, productId, userId, action);
    stopLoading();
  };

  return (
    <div className="shopping-bag-container">
      <div className="shopping-bag-item">
        <div className="bag-item-image">
          <img src={imageUrl} alt={name} />
        </div>
        <div className="bag-item-details">
          <div>{brandName}</div>
          <div>{name}</div>
          <span>Quantity:</span>
          <button
            disabled={quantity === 1}
            onClick={() => handleUpdateCartQuantity("decrease")}
          >
            <i class="fas fa-minus"></i>
          </button>
          <span>{quantity}</span>
          <button onClick={() => handleUpdateCartQuantity("increase")}>
            <i class="fas fa-plus"></i>
          </button>
        </div>
        <div className="bag-item-price">${price * quantity}</div>
      </div>
      <div className="shopping-bag-actions">
        <div>
          <button className="remove-cart-item" onClick={handleRemoveFromCart}>
            Remove
          </button>
        </div>
        <div>
          <button className="move-to-wishlist" onClick={handleMoveToWishlist}>
            Move to Wishlist
          </button>
        </div>
      </div>
    </div>
  );
};

export { ShoppingBagItem };
