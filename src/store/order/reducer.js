import '@/typedef'
import * as R from 'ramda'
import {ORDER_PLACED, ORDER_REMOVED} from './actions'
import {createReducer, on} from '@/common/reducer-fns'
import {guid} from '@/common/side-effects'

/**
 * Initial state of Order reducer
 * @const
 * @type {OrderState[]}
 */
const initialState = []

const placeOrder = orderDetails => R.append(
  R.merge(
    {id: guid()},
    orderDetails
  )
)

const removeOrder = ({orderId}) => R.reject(
  R.propEq(`id`, orderId)
)

const orderReducer = createReducer(
  initialState,
  on(ORDER_PLACED, placeOrder),
  on(ORDER_REMOVED, removeOrder),
)

export default orderReducer
