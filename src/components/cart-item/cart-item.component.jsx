import React from "react";
import "./cart-item.styles.css";
const CartItem = ({ image, name, quantity, price }) => {
  return (
    <div className="cart-item">
      <div className="cart-item-img">
        <img src={image} alt="item"></img>
      </div>
      <div className="item-details">
        <span className="name">{name}</span>
        <span className="price">
          {quantity} X ${price}
        </span>
      </div>
    </div>
  );
};

export default CartItem;
