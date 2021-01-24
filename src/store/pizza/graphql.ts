import { PizzaSize } from "./types";

export const pizzaByName: PizzaByName = size => `
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

interface PizzaByName {
  (size: PizzaSize): string
}