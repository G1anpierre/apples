import {UPDATE_CART, DELETE_PRODUCT} from './actions'

export const reducer = (state, action) => {
  switch (action.type) {
    case UPDATE_CART:
      return {
        ...state,
        cart: [...state.cart, ...action.payload],
      }
    case DELETE_PRODUCT:
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
