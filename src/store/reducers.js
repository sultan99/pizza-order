import {combineReducers} from 'redux'
import cart from './cart/reducer'
import order from './order/reducer'

export default combineReducers({cart, order})
