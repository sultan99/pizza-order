import AppLogo from '@/components/app-logo'
import OrderDetails from './details'
import Pane from './pane.sc'
import Price from '@/components/price'
import React, {FC} from 'react'
import Section from './section.sc'
import Title from '@/components/title'
import connect from './connect'
import {Order} from '@/store/order/reducer'

const PizzaOrder: PizzaOrderType = ({orders, total}) => (
  <Pane visible={!!orders.length}>
    <Section >
      <AppLogo/>
      <Title size="38px">
        Your Order
      </Title>
    </Section>
    <OrderDetails/>
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

export default connect(PizzaOrder)

export type PizzaOrderType = FC<Props>

interface Props {
  orders: Order[]
  total: number
}