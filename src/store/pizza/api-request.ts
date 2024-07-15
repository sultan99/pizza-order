import type {PizzaState, Store, Topping} from '@/store/types'
import randomPizza from './names'
import {asyncCompose, createMiddleware, on} from '@/common/side-effects'
import {compose, get, set} from '@/common/fp-fns'
import {pizzaByName} from './graphql'

const isDev = process.env.NODE_ENV === 'development'
const API_URL = isDev ? '/api/pizza' : 'https://core-graphql.dev.waldo.photos/pizza'

type R<A> = (arg: A) => (state: RawPizza) => PizzaState

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

const reshape: R<RawData> = compose(
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
  return fetch(API_URL, opts).then<RawData>(res => res.json())
}

const fetchPizza = ({dispatch}: Store) => asyncCompose(
  dispatch('PIZZA_CHANGED'),
  reshape,
  fetchData,
  pizzaByName,
)

const pizzaApiRequest = createMiddleware(
  on('PIZZA_SIZE_CHANGED', fetchPizza),
)

export default pizzaApiRequest
