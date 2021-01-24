import * as R from 'ramda'
import devtools from './devtools'
import pizzaRequests from './pizza/api-requests'
import reducers from './reducers'
import {Order} from '@/store/order/reducer'
import {PizzaState} from '@/store/pizza/types'
import {applyMiddleware, createStore} from 'redux'
import {createApiMiddleware} from '@/store/api-middleware'

const apiMiddleware = createApiMiddleware(pizzaRequests)

const store = createStore(
  reducers,
  R.pipe(
    devtools({name: `pizza-order`}),
    applyMiddleware(apiMiddleware),
  )
)

export default store

export interface AppState{
  pizza: PizzaState,
  order: Order[]
}
