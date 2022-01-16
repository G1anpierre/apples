export const UPDATE_CART = 'UPDATE_CART'
export const DELETE_PRODUCT = 'DELETE_PRODUCT'

export const deleteProduct = (dispatch, id) => {
  dispatch({
    type: DELETE_PRODUCT,
    payload: id,
  })
}

export const updateCart = (dispatch, totalProductsToadd) => {
  dispatch({
    type: UPDATE_CART,
    payload: totalProductsToadd,
  })
}
