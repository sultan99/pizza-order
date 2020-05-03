export const ORDER_PLACED = `ORDER/PLACED`
export const ORDER_REMOVED = `ORDER/REMOVED`

/**
 * @param {Order} payload
 * @returns {OrderPlaced}
 */
export const placeOrder = payload => ({
  type: ORDER_PLACED,
  payload
})

/**
 * @param {number} orderId
 * @returns {OrderRemoved}
 */
export const removeOrder = orderId => ({
  type: ORDER_REMOVED,
  payload: {orderId}
})
