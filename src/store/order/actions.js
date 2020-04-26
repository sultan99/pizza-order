export const PIZZA_QUANTITY_CHANGED = `ORDER/PIZZA_QUANTITY_CHANGED`
export const PIZZA_RECEIVED = `ORDER/PIZZA_RECEIVED`
export const PIZZA_SIZE_CHANGED = `ORDER/PIZZA_SIZE_CHANGED`
export const TOPPING_ADDED = `ORDER/TOPPING_ADDED`

export const addTopping = toppingName => ({
  type: TOPPING_ADDED,
  payload: {toppingName}
})

export const receivePizza = payload => ({
  type: PIZZA_RECEIVED,
  payload
})

export const setPizzaQuantity = increment => ({
  type: PIZZA_QUANTITY_CHANGED,
  payload: {increment}
})

export const setPizzaSize = value => ({
  type: PIZZA_SIZE_CHANGED,
  payload: {pizzaSize: value}
})
