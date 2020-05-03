/**
 * @typedef {object} Order
 * @property {string} pizzaName
 * @property {number} quantity
 * @property {number} subtotal
 * @property {number} quantity
 * @property {string[]} toppings
 */

/**
 * @typedef {object} OrderPlaced
 * @property {string} type
 * @property {Order} payload
 */

/**
 * @typedef {object} OrderRemoved
 * @property {string} type
 * @property {OrderRemovedPayload} payload
 */

/**
 * @typedef {object} OrderRemovedPayload
 * @property {number} orderId
 */
