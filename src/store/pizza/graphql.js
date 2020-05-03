/**
 * @param {PizzaSize} size
 * @returns {string}
 */
export const pizzaByName = size => `
  pizzaSizeByName(name: ${size}) {
    name
    maxToppings
    basePrice
    toppings {
      defaultSelected
      topping {
        name
        price
      }
    }
  }
`
