import * as R from 'ramda'
import {ORDER_PLACED, ORDER_REMOVED} from './actions'
import {createReducer, on} from 'common/reducer-fns'
import {guid} from 'common/side-effects'

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

const cartReducer = createReducer(
  initialState,
  on(ORDER_PLACED, placeOrder),
  on(ORDER_REMOVED, removeOrder),
)

export default cartReducer
