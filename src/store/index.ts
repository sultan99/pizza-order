import devtools from './devtools'
import orderRequests from './orders/api-request'
import orders from './orders/reducer'
import pizza from './pizza/reducer'
import pizzaRequests from './pizza/api-request'
import {applyMiddleware, combineReducers, compose} from 'redux'
import {legacy_createStore as createStore} from 'redux'

const store = createStore(
  combineReducers({orders, pizza}),
  compose(
    applyMiddleware(orderRequests, pizzaRequests),
    devtools({name: 'pizza-order'}),
  ),
)

export default store
