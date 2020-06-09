/**
 * @typedef {import('@/store/pizza/types').ActionPizzaSize} ActionPizzaSize
 * @typedef {import('@/store/pizza/types').DbPizzaByName} DbPizzaByName
 * @typedef {import('@/store/pizza/types').DbTopping} DbTopping
 * @typedef {import('@/store/pizza/types').PayloadPizzaSize} PayloadPizzaSize
 * @typedef {import('@/store/pizza/types').StatePizza} StatePizza
 * @typedef {import('@/store/pizza/types').Topping} Topping
 */

import * as R from 'ramda'
import randomPizza from './names'
import {PIZZA_SIZE_CHANGED, setPizza} from './actions'
import {createCache, promisePipe} from '@/store/api-middleware'
import {fetchData, on, onFail} from '@/store/api-middleware'
import {pizzaByName} from './graphql'

const pizzaCache = createCache()

/**
 * @param {DbTopping} item
 * @returns {Topping}
 */
const flatData = item => R.merge(
  item.topping,
  {selected: item.defaultSelected}
)

/**
 * @type {(data: DbPizzaByName) => StatePizza}
 */
const reshape = R.pipe(
  R.path([`data`, `pizzaSizeByName`]),
  R.over(R.lensProp(`description`), randomPizza(`description`)),
  R.over(R.lensProp(`name`), randomPizza(`name`)),
  R.over(R.lensProp(`toppings`), R.map(flatData)),
)

const takeDataFromCache = pizzaCache(
  pizzaByName,
  fetchData,
  reshape,
)

/**
 * @type {import('@/store/types').ApiRequest<PayloadPizzaSize, ActionPizzaSize>}
 */
const fetchPizza = ({dispatch}) => promisePipe(
  R.prop(`pizzaSize`),
  takeDataFromCache,
  setPizza,
  dispatch,
  onFail(
    R.prop(`message`),
    console.error,
  )
)

const pizzaRequests = [
  on(PIZZA_SIZE_CHANGED, fetchPizza),
]

export default pizzaRequests
