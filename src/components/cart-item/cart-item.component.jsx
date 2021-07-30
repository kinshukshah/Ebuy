import React from "react";
import "./cart-item.styles.css";
const CartItem = ({ product: { name, price }, quantity }) => {
  return (
    <div className="cart-item">
      <div className="item-name">{name}</div>
      <div className="item-quantity">Qty: {quantity}</div>
    </div>
  );
};

export default CartItem;
