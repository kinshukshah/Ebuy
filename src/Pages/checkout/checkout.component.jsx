import React from "react";
import { OrderSummary } from "../../components/order-summary/order-summary.component";
import { ShoppingBag } from "../../components/shopping-bag/shopping-bag.component";
import { GetTotalPrice } from "../../components/Utils/functions.utils";
import { useUserState } from "../../context/StateContext";
import { useLoading } from "../../hooks/useLoading";
import "./checkout.styles.css";
const CheckoutPage = () => {
  const {
    userState: { itemsInCart: CartItems },
    userStatedispatch,
  } = useUserState();
  const [loading, stopLoading, startLoading] = useLoading();
  const totalPrice = GetTotalPrice(CartItems);
  return (
    <div className="checkout small-container">
      <div className="checkout-items">
        <ShoppingBag
          CartItems={CartItems}
          startLoading={startLoading}
          stopLoading={stopLoading}
          userStatedispatch={userStatedispatch}
        />
      </div>
      <div className="checkout-summary">
        <OrderSummary totalPrice={totalPrice} CartItems={CartItems} />
      </div>
      {loading}
    </div>
  );
};

export default CheckoutPage;
