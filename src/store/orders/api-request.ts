import type {CurriedResolver as R} from '@/common/redux/api'
import {createMiddleware, on} from '@/common/redux/api'

/**
 * All functions below showcase different ways of declaring them.
 */

// No need to declare types 👍
// Not ideal for testing 👎
const onOrdersPlaced = on('ORDERS_PLACED', store => payload => {
  store.dispatch('TOPPING_ADDED')('YouCanDispatchAnyAction')
  console.info(store.getState(), payload)
})

// Ideal for testing 👍
// Reusable function, the same function can be used for different actions 👍
// Requires to declare types 👎
const placeOrders: R<'ORDERS_PLACED'> = store => payload => {
  console.info(store, payload)
}

const orderApiRequest = createMiddleware(
  onOrdersPlaced,
  on('ORDERS_PLACED', placeOrders),
  on('ORDERS_PLACED', store => payload => {
    // No need to declare types 👍
    // Hard to test 👎
    // Not reusable function 👎
    console.info(store, payload)
  }),
)

export default orderApiRequest
