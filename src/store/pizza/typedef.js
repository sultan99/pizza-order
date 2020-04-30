/**
  @typedef {`SMALL` | `MEDIUM` | `LARGE`} PizzaSize

  @typedef {object} Topping
  @property {string} name
  @property {number} price
  @property {boolean} selected

  @typedef {object} PizzaState
  @property {number} basePrice
  @property {boolean} isLoading
  @property {number} maxToppings
  @property {number} quantity
  @property {PizzaSize} size
  @property {Topping[]} toppings

  @typedef {object} ActionToppingAdded
  @property {string} type
  @property {PayloadToppingAdded} payload
  
  @typedef {object} PayloadToppingAdded
  @property {string} toppingName

  @typedef {object} ActionPizzaReceived
  @property {string} type
  @property {PayloadPizza} payload
  
  @typedef {object} PayloadPizza
  @property {number} basePrice
  @property {number} maxToppings
  @property {Topping[]} toppings

  @typedef {object} ActionPizzaQuantityChanged
  @property {string} type
  @property {PayloadPizzaQuantityChanged} payload
  
  @typedef {object} PayloadPizzaQuantityChanged
  @property {number} increment

  @typedef {object} ActionPizzaSizeChanged
  @property {string} type
  @property {PayloadPizzaQuantityChanged} payload
  
  @typedef {object} PayloadPizzaSizeChanged
  @property {PizzaSize} pizzaSize
 */

