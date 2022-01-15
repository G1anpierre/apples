export const reducer = (state, action) => {
  switch (action.type) {
    case 'updateCart':
      console.log('updateCart :', ...action.payload)
      return {
        ...state,
        cart: [...state.cart, ...action.payload],
      }
    default:
      return state
  }
}
