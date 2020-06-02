import * as R from 'ramda'
import {ORDER_PLACED, ORDER_REMOVED} from './actions'
import {createReducer, on} from '@/store/reducer-fns'
import {guid} from '@/common/side-effects'

/**
 * @constant
 * @type {Order[]}
 */
const initialState = []

const placeOrder = orderDetails => R.append(
  R.merge(
    {id: guid()},
    orderDetails
  )
)
/** @type {Reducer} */
const removeOrder = ({orderId}) => R.reject(
  R.propEq(`id`, orderId)
)

const orderReducer = createReducer(
  initialState,
  on(ORDER_PLACED, placeOrder),
  on(ORDER_REMOVED, removeOrder),
)

export default orderReducer
