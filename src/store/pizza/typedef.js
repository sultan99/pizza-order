/**
 * @typedef {object} PizzaState
 * @property {number} basePrice
 * @property {boolean} isLoading
 * @property {number} maxToppings
 * @property {number} quantity
 * @property {PizzaSize} size
 * @property {Topping[]} toppings
 */

/**
 * @typedef {'SMALL' | 'MEDIUM' | 'LARGE'} PizzaSize
 */

/**
 * @typedef {object} Topping
 * @property {string} name
 * @property {number} price
 * @property {boolean} selected
 */

/**
 * @typedef {object} ToppingAdded
 * @property {string} type
 * @property {ToppingPayload} payload
 */

/**
 * @typedef {object} ToppingPayload
 * @property {string} toppingName
 */

/**
 * @typedef {object} PizzaReceived
 * @property {string} type
 * @property {PizzaPayload} payload
 */

/**
 * @typedef {object} PizzaPayload
 * @property {number} basePrice
 * @property {number} maxToppings
 * @property {Topping[]} toppings
 */

/**
 * @typedef {object} PizzaQuantityChanged
 * @property {string} type
 * @property {PizzaQuantityPayload} payload
 */

/**
 * @typedef {object} PizzaQuantityPayload
 * @property {number} increment
 */

/**
 * @typedef {object} PizzaSizeChanged
 * @property {string} type
 * @property {PizzaSizePayload} payload
 */

/**
 * @typedef {object} PizzaSizePayload
 * @property {PizzaSize} pizzaSize
 */