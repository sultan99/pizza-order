import {createMiddleware, on} from '@/common/side-effects'

const placeOrders = () => () => {
  console.info('A mock API request is made to place orders')
}

const orderApiRequest = createMiddleware(
  on('ORDERS_PLACED', placeOrders),
)

export default orderApiRequest
