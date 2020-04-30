import '@/typedef'
import * as R from 'ramda'
import {PIZZA_SIZE_CHANGED} from './actions'
import {fetchData, asyncPipe} from '@/common/side-effects'
import {makeCacheable} from '@/common/utils'
import {pizzaByName} from './graphql'
import {put, takeEvery} from 'redux-saga/effects'
import {receivePizza} from './actions'

/**
 * @typedef {object} DbTopping
 * @property {string} name
 * @property {number} price
 * 
 * @typedef {object} Item
 * @property {DbTopping} topping
 * @property {boolean} defaultSelected
 * 
 * @function
 * @param {Item} item
 * @returns {Topping}
 */
const flat = item => R.merge(
  item.topping,
  {selected: item.defaultSelected}
)

const reshape = R.pipe(
  R.path([`data`, `pizzaSizeByName`]),
  R.omit([`name`]),
  R.over(R.lensProp(`toppings`), R.map(flat)),
)

const cache = makeCacheable(
  asyncPipe(
    pizzaByName,
    fetchData,
    reshape
  )
)

function* fetchPizza({payload: {pizzaSize}}) {
  const data = yield cache(pizzaSize)
  yield put(receivePizza(data))
}

function* orderSaga() {
  yield takeEvery(PIZZA_SIZE_CHANGED, fetchPizza)
}

export default orderSaga
