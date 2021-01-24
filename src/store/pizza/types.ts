import {PayloadReducer} from '../types'

export type PizzaSize = `SMALL` | `MEDIUM` | `LARGE`

export interface Topping {
  name: string
  price: number
  selected: boolean
}

export interface Pizza {
  basePrice: number
  maxToppings: number
  toppings: Topping[]
}

export interface PizzaState {
  basePrice: number
  description: string
  isLoading: boolean
  maxToppings: number
  name: string
  quantity: number
  size: PizzaSize
  toppings: Topping[]
}

export type SetPizza = PayloadReducer<Pizza, PizzaState>

export type SetPizzaQuantity = PayloadReducer<number, PizzaState>

export interface CountSelectedToppings {
  (state: PizzaState): number
}

export interface CanAddMore {
  (state: PizzaState): (selected: boolean) => boolean
}

export interface AddTopping {
  (toppingName: string): (state: PizzaState) => PizzaState
}

export interface SetPizzaSize {
  (pizzaSize: PizzaSize): (state: PizzaState) => PizzaState
}