import Caption from '../caption.sc'
import Radio from '@/components/radio'
import RadioGroup from '@/components/radio/group'
import React, {FC} from 'react'
import Section from '../section.sc'
import connect from './connect'
import {OnChangeEvent} from '@/types/common'
import {PizzaSize} from '@/store/pizza/types'

const weights = {
  SMALL: `320g`,
  MEDIUM: `530g`,
  LARGE: `860g`,
}

const makeRadio: MakeRadio = ({pizzaSize, setPizzaSize}) => {
  const handleChange: OnChangeEvent = event => (
    setPizzaSize(event.target.value as PizzaSize)
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

const PizzaSizes: PizzaSizesType = props => {
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

type PizzaSizesType = FC<Props>

interface Props {
  pizzaSize: PizzaSize
  setPizzaSize: (value: PizzaSize) => void
}

interface MakeRadio {
  (params: Props): (name: PizzaSize) => JSX.Element
}