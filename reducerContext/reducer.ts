export const reducer = (state, action) => {
  switch (action.type) {
    case 'updateCart':
      return {
        ...state,
        cart: [...state.cart, ...action.payload],
      }
    case 'deleteProduct':
      return {
        ...state,
        cart: state.cart.filter(
          product => product.uniqueIdProduct !== action.payload,
        ),
      }
    default:
      return state
  }
}
