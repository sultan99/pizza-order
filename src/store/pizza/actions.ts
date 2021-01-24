import {createAction} from '../reducer-fns'

export const [PIZZA_CHANGED, setPizza] = createAction(`ORDER/PIZZA_CHANGED`)
export const [PIZZA_QUANTITY_CHANGED, setPizzaQuantity] = createAction(`ORDER/PIZZA_QUANTITY_CHANGED`)
export const [PIZZA_SIZE_CHANGED, setPizzaSize] = createAction(`ORDER/SIZE_CHANGED`)
export const [TOPPING_ADDED, addTopping] = createAction(`ORDER/TOPPING_ADDED`)
