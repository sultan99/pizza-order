export type StatePizza = {
  basePrice: number
  description: string
  isLoading: boolean
  maxToppings: number
  name: string
  quantity: number
  size: PizzaSize
  toppings: Topping[]
}

// Pizza
export type ActionPizza = {
  type: string
  payload: PayloadPizza
}

export type PayloadPizza = {
  basePrice: number
  maxToppings: number
  toppings: Topping[]
}

// PizzaQuantity
export type ActionPizzaQuantity = {  
  type: string
  payload: PayloadPizzaQuantity
}

export type PayloadPizzaQuantity = {
  increment: number
}

// PizzaSize
export type PizzaSize = 'SMALL' | 'MEDIUM' | 'LARGE'

export type PayloadPizzaSize = {
  pizzaSize: PizzaSize
}

export type ActionPizzaSize = {
  type: string
  payload: PayloadPizzaSize
}

// Topping
export type Topping = {
  name: string
  price: number
  selected: boolean
}

export type ActionToppingAdded = {
  type: string
  payload: PayloadTopping
}

export type PayloadTopping = {
  toppingName: string
}

// Api data
export type DbTopping = {
  defaultSelected: boolean
  topping: {
    name: string
    price: number
  }
}

export type DbPizzaByName = {
  data: {
    pizzaSizeByName: {
      name: string
      maxToppings: number
      basePrice: number
      toppings: DbTopping[]
    }
  }
}