import type {ChangeEvent} from 'react'
import Checkbox, {CheckboxGroup} from '@/components/checkbox'
import {Caption} from './styles.scss'
import {useAction, useStore} from '@/common/redux'

type CheckboxEvent = ChangeEvent<HTMLInputElement>

const PizzaToppings = () => {
  const toppings = useStore('pizza.toppings')
  const addTopping = useAction('TOPPING_ADDED')

  const handleChange = (event: CheckboxEvent) => {
    addTopping(event.target.value)
  }

  return (
    <section>
      <Caption>TOPPINGS</Caption>
      <CheckboxGroup>
        {toppings.map((topping, key) =>
          <Checkbox
            key={key}
            checked={topping.selected}
            name='toppings'
            text={topping.name}
            value={topping.name}
            onChange={handleChange}
          />
        )}
      </CheckboxGroup>
    </section>
  )
}

export default PizzaToppings
