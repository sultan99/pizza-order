import applyMiddleware from './devtools'
import orderRequests from './orders/api-request'
import orders from './orders/reducer'
import pizza from './pizza/reducer'
import pizzaRequests from './pizza/api-request'
import {combineReducers} from 'redux'
import {legacy_createStore as createStore} from 'redux'

const store = createStore(
  combineReducers({orders, pizza}),
  applyMiddleware([orderRequests, pizzaRequests]),
)

export default store
