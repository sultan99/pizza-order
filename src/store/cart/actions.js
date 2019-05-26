export const ADD_ORDER = `CART/ADD_ORDER`
export const REMOVE_ORDER = `CART/REMOVE_ORDER`

export const addOrder = payload => ({
  type: ADD_ORDER,
  payload
})

export const removeOrder = id => ({
  type: REMOVE_ORDER,
  id
})
