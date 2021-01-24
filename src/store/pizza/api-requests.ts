import * as R from 'ramda'
import randomPizza from './names'
import {PIZZA_SIZE_CHANGED, setPizza} from './actions'
import {createCache, promisePipe} from '@/store/api-middleware'
import {fetchData, on, onFail} from '@/store/api-middleware'
import {pizzaByName} from './graphql'
import {Store} from 'redux'
import {PizzaSize, PizzaState, Pizza, Topping} from './types'

const pizzaCache = createCache()

interface RawTopping {
  defaultSelected: boolean
  topping: {
    name: string
    price: number
  }
}

export interface RawPizzaSizeByName {
  name: 'small' | 'medium' | 'large',
  maxToppings: number
  basePrice: number
  toppings: RawTopping[]
}

export interface RawData {
  data: {
    pizzaSizeByName: RawPizzaSizeByName
  }
}

const flatData: FlatData = item => R.merge(
  item.topping,
  {selected: item.defaultSelected}
)

interface FlatData {
  (item: RawTopping): Topping
}

interface Reshape {
  (data: RawData): PizzaState
}

// pipe<V0, T1, T2, T3>(fn0: (x: V0) => T1, fn1: (x: T1) => T2, fn2: (x: T2) => T3): (x: V0) => T3;

const reshape = R.pipe(
  R.path([`data`, `pizzaSizeByName`]),
  R.over(R.lensProp(`description`), randomPizza(`description`)),
  R.over(R.lensProp(`name`), randomPizza(`name`)),
  R.over(R.lensProp(`toppings`), R.map(flatData)),
) as Reshape

const takeDataFromCache = pizzaCache(
  promisePipe(
    pizzaByName,
    fetchData,
    reshape,
  )
)


// interface PizzaSizePayload {
//   payload: 
// }
// R.prop(`pizzaSize`),

const fetchPizza: FetchPizza = ({dispatch}) => promisePipe(
  takeDataFromCache,
  setPizza,
  dispatch,
  // onFail(
  //   R.prop(`message`),
  //   console.error,
  // )
)

const pizzaRequests = [
  on(PIZZA_SIZE_CHANGED, fetchPizza),
]

export default pizzaRequests

interface FetchPizza {
  <S>(action: Store<S>): void
}



