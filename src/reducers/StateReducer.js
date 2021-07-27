export const INITIAL_STATE = {
  itemsInCart: [],
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

    default:
      break;
  }
};
