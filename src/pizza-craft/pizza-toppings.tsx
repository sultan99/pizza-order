import Checkbox, {CheckboxGroup} from '@/components/checkbox'
import {Caption} from './styles.scss'
import {compose, get} from '@/common/fp-fns'
import {useAction, useStore} from '@/common/redux'

const PizzaToppings = () => {
  const toppings = useStore('pizza.toppings')
  const addTopping = useAction('TOPPING_ADDED')

  const handleChange = compose(
    addTopping,
    get('target.value'),
  )

  return (
    <section>
      <Caption>TOPPINGS</Caption>
      <CheckboxGroup>
        {toppings.map((topping, key) =>
          <Checkbox
            key={key}
            checked={topping.selected}
            name='toppings'
            onChange={handleChange}
            text={topping.name}
            value={topping.name}
          />
        )}
      </CheckboxGroup>
    </section>
  )
}

export default PizzaToppings
