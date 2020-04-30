import '@/typedef'

/**
 * @param {PizzaSize} size 
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
