import type {Order} from '@/store/types'
import {createReducer, on} from '@/common/redux'
import {guid} from '@/common/side-effects'

type R<A> = (arg: A) => (state: Order[]) => Order[]

const initialState: Order[] = []

const placeOrder: R<Order> = order => orders => [
  {...order, id: guid()},
  ...orders,
]

const removeOrder: R<string> = orderId => list => (
  list.filter(order => order.id !== orderId)
)

const orderReducer = createReducer(
  initialState,
  on('ORDER_PLACED', placeOrder),
  on('ORDER_REMOVED', removeOrder),
)

export default orderReducer
