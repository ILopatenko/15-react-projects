const reducer = (state, action, sign) => {
  if (action.type === 'CLEAR_CART') {
    return { ...state, cart: [] };
  }

  if (action.type === 'REMOVE') {
    return {
      ...state,
      cart: state.cart.filter(
        (eachElement) => eachElement.id !== action.payload
      ),
    };
  }

  if (action.type === 'CHANGE_AMOUNT') {
    let tempCart = state.cart
      .map((eachElement) => {
        if (eachElement.id === action.payload.id) {
          return action.payload.sign === 'increase'
            ? { ...eachElement, amount: eachElement.amount + 1 }
            : { ...eachElement, amount: eachElement.amount - 1 };
        }

        return eachElement;
      })
      .filter((eachElement) => eachElement.amount !== 0);
    return { ...state, cart: tempCart };
  }

  if (action.type === 'GET_TOTAL') {
    let { total, amount } = state.cart.reduce(
      (cartTotal, cartItem) => {
        const { price, amount } = cartItem;
        const itemTotal = price * amount;
        cartTotal.total += itemTotal;
        cartTotal.amount += amount;
        return cartTotal;
      },
      {
        total: 0,
        amount: 0,
      }
    );
    total = parseFloat(total.toFixed(2));
    return { ...state, total, amount };
  }

  if (action.type === 'LOADING') {
    return { ...state, loading: true };
  }
  if (action.type === 'DISPLAY_ITEMS') {
    return { ...state, cart: action.payload, loading: false };
  }

  return state;
};

export default reducer;
