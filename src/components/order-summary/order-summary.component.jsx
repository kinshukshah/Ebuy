import React from "react";
import "./order-summary.styles.css";
const OrderSummary = ({ totalPrice, CartItems }) => {
  return (
    <div className="order-summary">
      <div className="summary-header list-grid">
        <div>Products</div>
        <div>Quantity</div>
        <div>Total</div>
      </div>
      {CartItems.map((item) => (
        <div className="summary-details list-grid">
          <div>{item.productId.name}</div>
          <div>{item.quantity}X</div>
          <div>{item.productId.price * item.quantity}</div>
        </div>
      ))}
      <hr />
      <div className="total-amt">
        <span style={{ fontWeight: "bold" }}>Total Amount: </span>
        <span>${totalPrice}</span>
      </div>
      <div>
        <button>Checkout</button>
      </div>
    </div>
  );
};

export { OrderSummary };
