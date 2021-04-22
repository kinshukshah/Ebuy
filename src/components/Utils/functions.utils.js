export const AddToCartUtils = (element, CartContext) => {
  let isItemExisting = CartContext.find((ele) => ele.id === element.id);
  if (isItemExisting) {
    return CartContext.map((ele) =>
      ele.id === element.id ? { ...ele, quantity: ele.quantity + 1 } : ele
    );
  }
  return [...CartContext, { ...element, quantity: 1 }];
};

export const GetTotalItemUtils = (cartItems) => {
  return cartItems.reduce((a, b) => a + b.quantity, 0);
};
