type Prettify<T> = { [K in keyof T]: T[K] }
type Input<P> = (payload: P) => void

export type Action<P = any> = {type: ActionTypes, payload: P}

export type Actions = {
  'ORDER_PLACED': Input<Omit<Order, 'id'>>
  'ORDER_REMOVED': Input<string>
  'ORDERS_PLACED': Input<Order[]>
  'PIZZA_CHANGED': Input<Pizza>
  'PIZZA_QUANTITY_CHANGED': Input<number>
  'PIZZA_SIZE_CHANGED': Input<PizzaSize>
  'TOPPING_ADDED': Input<Topping>
}

export type ActionTypes = Prettify<keyof Actions>

// Store with curried dispatch
export type Store = {
  dispatch: (type: ActionTypes) => <P>(payload: P) => void
  getState: () => State
}

export type PizzaSize = 'SMALL' | 'MEDIUM' | 'LARGE'

export type Topping = {
  name: string
  price: number
  selected: boolean
}

export type Pizza = {
  basePrice: number
  maxToppings: number
  toppings: Topping[]
}

export type PizzaState = Pizza & {
  description: string
  isLoading: boolean
  name: string
  quantity: number
  size: PizzaSize
}

export type Order = {
  id: string
  pizzaName: string
  quantity: number
  subtotal: number
  toppings: string[]
}

export type State = {
  pizza: PizzaState
  orders: Order[]
}
