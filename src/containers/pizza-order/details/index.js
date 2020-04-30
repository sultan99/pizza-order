import Badge from './badge.sc'
import Button from '@/components/button'
import Price from '@/components/price'
import React from 'react'
import Section from './section.sc'
import Text from '@/components/text'
import Title from '@/components/title'
import connect from './connect'

function OrderDetails({orders, removeOrder}) {
  const onRemove = orderId => () => removeOrder(orderId)

  return orders.map((order, key) =>
    <Section key={key}>
      <div>
        <Badge>
          x{order.quantity}
        </Badge>
        <Button
          id="btn-remove"
          icon='trash'
          onClick={onRemove(order.id)}
        />
      </div>
      <div>
        <Title size="30px">
          {order.pizzaName}
        </Title>
        <Text size="28px">
          {order.toppings.join(`, `)}
        </Text>
        <Price size="26px" color="#555555">
          subtotal: ${order.subtotal}
        </Price>
      </div>
    </Section>
  )
}

export default connect(OrderDetails)
