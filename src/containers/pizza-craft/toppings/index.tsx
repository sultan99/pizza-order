import Caption from '../caption.sc'
import Checkbox from '@/components/checkbox'
import CheckboxGroup from '@/components/checkbox/group'
import React, {FC} from 'react'
import Section from '../section.sc'
import connect from './connect'
import {OnChangeEvent} from '@/types/common'
import { Topping } from '@/store/pizza/types'

const makeToppings: MakeToppings = ({toppings, addTopping}) => {
  const handleChange: OnChangeEvent = event => (
    addTopping(event.target.value)
  )

  return toppings.map((topping, key) =>
    <Checkbox
      key={key}
      checked={topping.selected}
      name="toppings"
      onChange={handleChange}
      text={topping.name}
      value={topping.name}
    />
  )
}

const PizzaToppings: PizzaToppingsType = props => (
  <Section style={{marginTop: `50px`}}>
    <Caption>TOPPINGS</Caption>
    <CheckboxGroup>
      {makeToppings(props)}
    </CheckboxGroup>
  </Section>
)

export default connect(PizzaToppings)

type PizzaToppingsType = FC<Props>

interface Props {
  toppings: Topping[]
  addTopping: (name: string) => void
}

interface MakeToppings {
  (params: Props): JSX.Element[]
}