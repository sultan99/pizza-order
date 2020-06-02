import * as R from 'ramda'
import Button from '@/components/button'
import Caption from '../caption.sc'
import IncButton from '@/components/button/increment'
import Price from '@/components/price'
import React from 'react'
import Row from './row.sc'
import Section from '../section.sc'
import connect from './connect'

const placeOrder = props => () => {
  const orderDetails = {
    pizzaName: props.pizzaName,
    quantity: props.quantity,
    subtotal: props.total,
    toppings: R.pluck(`name`, props.selectedToppings),
  }
  props.placeOrder(orderDetails)
}

const QuantityPrice = props => (
  <Section>
    <Caption>QUANTITY</Caption>
    <Row>
      <IncButton onClick={props.setPizzaQuantity}>
        {props.quantity}
      </IncButton>
      <Price>
        ${props.total}
      </Price>
    </Row>
    <Button icon="pizza" onClick={placeOrder(props)}>
      PLACE ORDER
    </Button>
  </Section>
)

export default connect(QuantityPrice)
