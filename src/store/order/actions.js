export const ADD_TOPPING = `ORDER/ADD_TOPPING`
export const PIZZA_RECEIVED = `ORDER/PIZZA_RECEIVED`
export const SET_PIZZA_QUANTITY = `ORDER/SET_PIZZA_QUANTITY`
export const SET_PIZZA_SIZE = `ORDER/SET_PIZZA_SIZE`

export const addTopping = name => ({
  type: ADD_TOPPING,
  name
})

export const setPizzaQuantity = increment => ({
  type: SET_PIZZA_QUANTITY,
  increment
})

export const setPizzaSize = value => ({
  type: SET_PIZZA_SIZE,
  value
})

export const updatePizza = payload => ({
  type: PIZZA_RECEIVED,
  payload
})
