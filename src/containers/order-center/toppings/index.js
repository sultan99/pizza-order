import Caption from 'components/caption'
import Checkbox from 'components/checkbox'
import CheckboxGroup from 'components/checkbox/group'
import React from 'react'
import Section from '../section.sc'
import connect from './connect'

function makeToppings({toppings, addTopping}) {
  const handleChange = event => (
    addTopping(event.target.value)
  )

  return toppings.map((topping, key) =>
    <Checkbox
      key={key}
      checked={topping.selected}
      name="toppings"
      onChange={handleChange}
      type="checkbox"
      value={topping.name}
      text={topping.name}
    />
  )
}

const PizzaDetails = props => (
  <Section style={{marginTop: `50px`}}>
    <Caption>TOPPINGS</Caption>
    <CheckboxGroup>
      {makeToppings(props)}
    </CheckboxGroup>
  </Section>
)

export default connect(PizzaDetails)
