import {combineReducers} from 'redux'
import pizza from './pizza/reducer'
import order from './order/reducer'

export default combineReducers({pizza, order})
