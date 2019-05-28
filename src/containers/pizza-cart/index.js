import AppLogo from 'components/app-logo'
import Button from 'components/button/round'
import Pane from './pane.sc'
import React from 'react'
import Section from './section.sc'
import Text from 'components/text'
import Title from 'components/title'
import connect from './connect'

function orderDetails({orders, removeOrder}) {
  const onRemove = orderId => () => removeOrder(orderId)

  return orders.map((order, key) =>
    <Section key={key}>
      <div>
        <Button icon="trash"onClick={onRemove(order.id)}>
          x{order.quantity}
        </Button>
      </div>
      <div>
        <Title size="32px">{order.pizzaName} </Title>
        <Text size="28px">
          {order.toppings.join(`, `)}
        </Text>
        <Text size="25px" color="#555555">
           subtotal: ${order.subtotal}
        </Text>
      </div>
    </Section>
  )
}

function Cart(props) {
  return (
    <Pane visible={!!props.orders.length}>
      <Section >
        <AppLogo/>
        <Title size="38px">
          Your Order
        </Title>
      </Section>
      {orderDetails(props)}
      <Section >
        <Title size="24px">
          Total
        </Title>
        <Title size="24px">
          ${props.total}
        </Title>
      </Section>
    </Pane>
  )
}

export default connect(Cart)
