import * as R from 'ramda'
import {ORDER_PLACED, ORDER_REMOVED} from './actions'
import {PayloadReducer} from '../types'
import {createReducer, on} from '@/store/reducer-fns'
import {guid} from '@/common/side-effects'

const initialState: Order[] = []

const placeOrder: OrderPlaced = order => R.append(
  R.merge(
    {id: guid()},
    order
  )
)

const removeOrder: RemoveOrder = orderId => R.reject<Order>(
  R.propEq<string>(`id`, orderId)
)

const orderReducer = createReducer(
  initialState,
  on(ORDER_PLACED, placeOrder),
  on(ORDER_REMOVED, removeOrder),
)

export default orderReducer

export interface Order {
  id?: string
  pizzaName: string
  quantity: number
  subtotal: number
  toppings: string[]
}

export type OrderPlaced = PayloadReducer<Order, Order[]>

export type RemoveOrder = PayloadReducer<string, Order[]>
