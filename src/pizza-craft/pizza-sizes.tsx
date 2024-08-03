import type {PizzaSize} from '@/store/types'
import type {RadioButtonChangeEvent} from '@/components/button/radio'
import RadioButton, {RadioButtonGroup} from '@/components/button/radio'
import {Caption} from './styles.scss'
import {useAction, useStore} from '@/common/redux'

type RadioButtonEvent = RadioButtonChangeEvent<PizzaSize>

const PizzaSizes = () => {
  const pizzaSize = useStore('pizza.size')
  const setPizzaSize = useAction('PIZZA_SIZE_CHANGED')

  const handleChange = (event: RadioButtonEvent) => {
    setPizzaSize(event.target.value)
  }

  return (
    <section>
      <Caption>SIZES</Caption>
      <RadioButtonGroup>
        <RadioButton
          checked={pizzaSize === 'SMALL'}
          name='size'
          subtext='320g'
          value='SMALL'
          onChange={handleChange}
        />
        <RadioButton
          checked={pizzaSize === 'MEDIUM'}
          name='size'
          subtext='530g'
          value='MEDIUM'
          onChange={handleChange}
        />
        <RadioButton
          checked={pizzaSize === 'LARGE'}
          name='size'
          subtext='860g'
          value='LARGE'
          onChange={handleChange}
        />
      </RadioButtonGroup>
    </section>
  )
}

export default PizzaSizes
