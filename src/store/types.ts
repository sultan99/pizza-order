import type {MiddlewareAPI, Dispatch} from 'redux'

type Prettify<T> = {[K in keyof T]: T[K]}
type Input<P> = (payload: P) => void

export type Action<P = any> = {type: ActionTypes, payload: P}

export type Actions = {
  'ORDER_PLACED': Input<Omit<Order, 'id'>>
  'ORDER_REMOVED': Input<string>
  'ORDERS_PLACED': Input<Order[]>
  'PIZZA_CHANGED': Input<Partial<PizzaState>>
  'PIZZA_QUANTITY_CHANGED': Input<number>
  'PIZZA_SIZE_CHANGED': Input<PizzaSize>
  'TOPPING_ADDED': Input<string>
}

export type ActionTypes = Prettify<keyof Actions>

export type PickPayload<T extends ActionTypes> = Parameters<Actions[T]>[0]

export type Store = MiddlewareAPI<Dispatch<Action<any>>, State>

// Store with curried dispatch
export type CurriedStore = {
  dispatch: <T extends ActionTypes>(type: T) => Actions[T]
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
