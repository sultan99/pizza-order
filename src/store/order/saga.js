import * as R from 'ramda'
import {SET_PIZZA_SIZE} from './actions'
import {fetchData, asyncPipe} from 'common/side-effects'
import {makeCacheable} from 'common/utils'
import {pizzaByName} from './graphql'
import {put, takeEvery} from 'redux-saga/effects'
import {pizzaReceived} from './actions'

const flat = item => R.merge(
  item.topping,
  {selected: item.defaultSelected}
)

const reshape = R.pipe(
  R.path([`data`, `pizzaSizeByName`]),
  R.omit([`name`]),
  R.over(R.lensProp(`toppings`), R.map(flat))
)

const cache = makeCacheable(
  asyncPipe(
    pizzaByName,
    fetchData,
    reshape
  )
)

function* fetchPizza({value}) {
  const payload = yield cache(value)
  yield put(pizzaReceived(payload))
}

function* orderSaga() {
  yield takeEvery(SET_PIZZA_SIZE, fetchPizza)
}

export default orderSaga
