import React from "react";
import { ShoppingBagItem } from "../shopping-bag-item/shopping-bag-item.component";
import "./shopping-bag.styles.css";
const ShoppingBag = ({
  CartItems,
  startLoading,
  stopLoading,
  userStatedispatch,
}) => {
  return (
    <div className="shopping-bag">
      {CartItems.map(
        ({
          productId: { brandName, imageUrl, name, price, _id },
          quantity,
        }) => (
          <ShoppingBagItem
            brandName={brandName}
            imageUrl={imageUrl}
            name={name}
            price={price}
            quantity={quantity}
            startLoading={startLoading}
            stopLoading={stopLoading}
            userStatedispatch={userStatedispatch}
            productId={_id}
          />
        )
      )}
    </div>
  );
};

export { ShoppingBag };
