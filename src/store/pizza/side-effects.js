import * as R from 'ramda'
import store from '@/store'
import {PIZZA_SIZE_CHANGED} from './actions'
import {asyncPipe, createSideEffects, fetchData, on} from '@/common/side-effects'
import {createCache} from '@/common/utils'
import {pizzaByName} from './graphql'
import {receivePizza} from './actions'

const pizzaCache = createCache()

const flatData = item => R.merge(
  item.topping,
  {selected: item.defaultSelected}
)

const reshape = R.pipe(
  R.path([`data`, `pizzaSizeByName`]),
  R.omit([`name`]),
  R.over(R.lensProp(`toppings`), R.map(flatData)),
)

const takeDataFromCache = pizzaCache(
  pizzaByName,
  fetchData,
  reshape
)

const fetchPizza = asyncPipe(
  R.path([`payload`, `pizzaSize`]),
  takeDataFromCache,
  receivePizza,
  action => store.dispatch(action)
)

const pizzaSideEffects = createSideEffects(
  on(PIZZA_SIZE_CHANGED, fetchPizza)
)

export default pizzaSideEffects
