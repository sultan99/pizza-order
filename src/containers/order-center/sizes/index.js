import Caption from '../caption.sc'
import Radio from 'components/radio'
import RadioGroup from 'components/radio/group'
import React from 'react'
import Section from '../section.sc'
import connect from './connect'

function makeRadio({pizzaSize, setPizzaSize}) {
  const weights = {
    SMALL: `320g`,
    MEDIUM: `530g`,
    LARGE: `860g`,
  }
  const handleChange = event => (
    setPizzaSize(event.target.value)
  )

  return name => (
    <Radio
      checked={name === pizzaSize}
      name="size"
      onChange={handleChange}
      subtext={weights[name]}
      text={name}
      value={name}
    />
  )
}

function PizzaSizes(props) {
  const radio = makeRadio(props)
  return (
    <Section>
      <Caption>SIZES</Caption>
      <RadioGroup>
        {radio(`SMALL`)}
        {radio(`MEDIUM`)}
        {radio(`LARGE`)}
      </RadioGroup>
    </Section>
  )
}

export default connect(PizzaSizes)
