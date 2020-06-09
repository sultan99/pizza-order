export const PIZZA_CHANGED = `PIZZA/PIZZA_CHANGED`
export const PIZZA_QUANTITY_CHANGED = `PIZZA/QUANTITY_CHANGED`
export const PIZZA_SIZE_CHANGED = `PIZZA/SIZE_CHANGED`
export const TOPPING_ADDED = `PIZZA/TOPPING_ADDED`

/**
 * @param {string} toppingName
 * @returns {import('@/store/pizza/types').ActionToppingAdded}
 */
export const addTopping = toppingName => ({
  type: TOPPING_ADDED,
  payload: {toppingName}
})

/**
 * @param {import('@/store/pizza/types').PayloadPizza} payload
 * @returns {import('@/store/pizza/types').ActionPizza}
 */
export const setPizza = payload => ({
  type: PIZZA_CHANGED,
  payload
})

/**
 * @param {number} increment
 * @returns {import('@/store/pizza/types').ActionPizzaQuantity}
 */
export const setPizzaQuantity = increment => ({
  type: PIZZA_QUANTITY_CHANGED,
  payload: {increment}
})

/**
 * @param {import('@/store/pizza/types').PizzaSize} value
 * @returns {import('@/store/pizza/types').ActionPizzaSize}
 */
export const setPizzaSize = value => ({
  type: PIZZA_SIZE_CHANGED,
  payload: {pizzaSize: value}
})
