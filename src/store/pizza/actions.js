export const PIZZA_QUANTITY_CHANGED = `PIZZA/QUANTITY_CHANGED`
export const PIZZA_RECEIVED = `PIZZA/RECEIVED`
export const PIZZA_SIZE_CHANGED = `PIZZA/SIZE_CHANGED`
export const TOPPING_ADDED = `PIZZA/TOPPING_ADDED`

/**
 * @param {string} toppingName
 * @returns { ToppingAdded }
 */
export const addTopping = toppingName => ({
  type: TOPPING_ADDED,
  payload: {toppingName}
})

/**
 * @param {PizzaPayload} payload
 * @returns {PizzaReceived}
 */
export const receivePizza = payload => ({
  type: PIZZA_RECEIVED,
  payload
})

/**
 * @param {number} increment
 * @returns {PizzaQuantityChanged}
 */
export const setPizzaQuantity = increment => ({
  type: PIZZA_QUANTITY_CHANGED,
  payload: {increment}
})

/**
 * @param {PizzaSize} value
 * @returns {PizzaSizeChanged}
 */
export const setPizzaSize = value => ({
  type: PIZZA_SIZE_CHANGED,
  payload: {pizzaSize: value}
})
