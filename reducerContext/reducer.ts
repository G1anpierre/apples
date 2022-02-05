import {UPDATE_CART, DELETE_PRODUCT} from './actions'

type ActionType =
  | {type: 'UPDATE_CART'; payload: ListItem[]}
  | {type: 'DELETE_PRODUCT'; payload: string}

export const reducer = (state: InitialStateType, action: ActionType) => {
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
