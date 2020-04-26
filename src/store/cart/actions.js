export const ORDER_PLACED = `CART/ORDER_PLACED`
export const ORDER_REMOVED = `CART/ORDER_REMOVED`

export const placeOrder = payload => ({
  type: ORDER_PLACED,
  payload
})

export const removeOrder = orderId => ({
  type: ORDER_REMOVED,
  payload: {orderId}
})
