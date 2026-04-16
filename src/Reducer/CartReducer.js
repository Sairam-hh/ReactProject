export const initialState = {
  cart: []
};

export const cartReducer = (state, action) => {
  switch (action.type) {
    case "ADD_ITEM":
      return { ...state, cart: [...state.cart, action.payload] };

    case "REMOVE_ITEM":
      return {
        ...state,
        cart: state.cart.filter((_, i) => i !== action.index)
      };

    default:
      return state;
  }
};