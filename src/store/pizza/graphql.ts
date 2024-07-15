import type {PizzaSize} from '@/store/types'

export const pizzaByName = (size: PizzaSize) => `
  pizzaSizeByName(name: ${size}) {
    name
    maxToppings
    basePrice
    toppings {
      selected: defaultSelected
      topping {
        name
        price
      }
    }
  }
`
