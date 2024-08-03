import type {ActionTypes, Order} from '@/store/types'
import type {CurriedReducer} from '@/common/redux'
import {createReducer, on} from '@/common/redux'
import {guid} from '@/common/utils'

type R<T extends ActionTypes> = CurriedReducer<T, Order[]>

const initialState: Order[] = []

const placeOrder: R<'ORDER_PLACED'> = order => orders => [
  {...order, id: guid()},
  ...orders,
]

const removeOrder: R<'ORDER_REMOVED'> = orderId => list => (
  list.filter(order => order.id !== orderId)
)

const orderReducer = createReducer(
  initialState,
  on('ORDER_PLACED', placeOrder),
  on('ORDER_REMOVED', removeOrder),
)

export default orderReducer
