export const INITIAL_STATE = {
  itemsInCart: [],
  itemsInWishlist: [],
  hidden: true,
};

export const StateReducer = (state, action) => {
  switch (action.type) {
    case "ADD_TO_CART":
      return {
        ...state,
        itemsInCart: [...action.payload.cartItems],
      };
    case "INITIALIZE_CART":
      return {
        ...state,
        itemsInCart: [...action.payload.cartItems],
      };
    case "REMOVE_FROM_CART":
      return {
        ...state,
        itemsInCart: [...action.payload.cartItems],
      };
    case "INITIALIZE_WISHLIST":
      return {
        ...state,
        itemsInWishlist: [...action.payload.wishlistItems],
      };
    case "TOGGLE_CART_DROPDOWN":
      return {
        ...state,
        hidden: action.payload,
      };
    default:
      break;
  }
};
