import type {CurriedStore, PizzaSize, PizzaState, Topping} from '@/store/types'
import randomPizza from './names'
import {compose, get, set} from '@/common/fp-fns'
import {createMiddleware, on} from '@/common/redux/api'
import {isDev} from '@/common/utils'
import {pizzaByName} from './graphql'

const API_URL = isDev ? '/api/pizza' : 'https://core-graphql.dev.waldo.photos/pizza'

type R<P> = (store: CurriedStore) => (payload: P) => Promise<void> | void
type Reshape = (input: RawData) => Partial<PizzaState>

type RawTopping = {
  selected: boolean
  topping: {
    name: string
    price: number
  }
}

export type RawPizza = {
  name: string
  maxToppings: number
  basePrice: number
  toppings: RawTopping[]
}

export type RawData = {
  data: {
    pizzaSizeByName: RawPizza
  }
}

const flatToppings = (toppings: RawTopping[]): Topping[] => (
  toppings.map(({topping, selected}) => ({...topping, selected}))
)

const reshape: Reshape = compose(
  set('toppings', flatToppings as any),
  set<'description', PizzaState>('description', () => randomPizza('description')),
  set<'name', PizzaState>('name', () => randomPizza('name')),
  get('data.pizzaSizeByName'),
)

export const fetchData = (query: string) => {
  const opts = {
    method: 'POST',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify({query: `{${query}}`})
  }
  return fetch(API_URL, opts)
    .then<RawData>(res => res.json())
    .then(reshape)
}

const fetchPizza: R<PizzaSize> = ({dispatch}) => size => (
  Promise.resolve(size)
    .then(pizzaByName)
    .then(fetchData)
    .then(dispatch('PIZZA_CHANGED'))
    .catch(console.error)
)

const pizzaApiRequest = createMiddleware(
  on('PIZZA_SIZE_CHANGED', fetchPizza),
)

export default pizzaApiRequest
