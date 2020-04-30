export const ORDER_PLACED = `ORDER/PLACED`
export const ORDER_REMOVED = `ORDER/REMOVED`

export const placeOrder = payload => ({
  type: ORDER_PLACED,
  payload
})

export const removeOrder = orderId => ({
  type: ORDER_REMOVED,
  payload: {orderId}
})
