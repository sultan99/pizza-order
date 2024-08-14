import Button from '@/components/button'
import {Badge, Section} from './styles.scss'
import {Price, Text, Title} from '@/components/misc'
import {useAction, useStore} from '@/common/redux'

const OrderDetails = () => {
  const orders = useStore('orders')
  const removeOrder = useAction('ORDER_REMOVED')

  return orders.map((order, key) =>
    <Section key={key}>
      <div>
        <Badge>x{order.quantity}</Badge>
        <Button
          icon='trash'
          onClick={() => removeOrder(order.id)}
        />
      </div>
      <div>
        <Title size='30px'>
          {order.pizzaName}
        </Title>
        <Text size='28px'>
          {order.toppings.join(', ')}
        </Text>
        <Price size='26px' color='#555555'>
          subtotal: ${order.subtotal.toFixed(2)}
        </Price>
      </div>
    </Section>
  )
}

export default OrderDetails
