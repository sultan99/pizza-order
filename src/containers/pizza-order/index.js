import AppLogo from '@/components/app-logo'
import OrderDetails from './details'
import Pane from './pane.sc'
import Price from '@/components/price'
import React from 'react'
import Section from './section.sc'
import Title from '@/components/title'
import connect from './connect'

function PizzaOrder({orders, total}) {
  return (
    <Pane visible={!!orders.length}>
      <Section >
        <AppLogo/>
        <Title size="38px">
          Your Order
        </Title>
      </Section>
      <OrderDetails data={orders}/>
      <Section >
        <Title size="24px">
          Total
        </Title>
        <Price size="28px">
          ${total}
        </Price>
      </Section>
    </Pane>
  )
}

export default connect(PizzaOrder)
