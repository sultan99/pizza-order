export const PIZZA_CHANGED = `PIZZA/PIZZA_CHANGED`
export const PIZZA_QUANTITY_CHANGED = `PIZZA/QUANTITY_CHANGED`
export const PIZZA_SIZE_CHANGED = `PIZZA/SIZE_CHANGED`
export const TOPPING_ADDED = `PIZZA/TOPPING_ADDED`

/**
 * @param {string} toppingName
 * @returns { import('./types').ToppingAdded }
 */
export const addTopping = toppingName => ({
  type: TOPPING_ADDED,
  payload: {toppingName}
})

/**
 * @param {import('./types').PizzaPayload} payload
 * @returns {import('./types').PizzaReceived}
 */
export const setPizza = payload => ({
  type: PIZZA_CHANGED,
  payload
})

/**
 * @param {number} increment
 * @returns {import('./types').ActionPizzaQuantity}
 */
export const setPizzaQuantity = increment => ({
  type: PIZZA_QUANTITY_CHANGED,
  payload: {increment}
})

/**
 * @param {import('./types').PizzaSize} value
 * @returns {import('./types').ActionPizzaSize}
 */
export const setPizzaSize = value => ({
  type: PIZZA_SIZE_CHANGED,
  payload: {pizzaSize: value}
})
