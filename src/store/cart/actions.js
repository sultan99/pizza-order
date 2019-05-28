export const PLACE_ORDER = `CART/PLACE_ORDER`
export const REMOVE_ORDER = `CART/REMOVE_ORDER`

export const placeOrder = payload => ({
  type: PLACE_ORDER,
  payload
})

export const removeOrder = id => ({
  type: REMOVE_ORDER,
  id
})
