import Radio, {RadioGroup} from '@/components/radio'
import {Caption} from './styles.scss'
import {compose, get} from '@/common/fp-fns'
import {useAction, useStore} from '@/common/redux'

const PizzaSizes = () => {
  const pizzaSize = useStore('pizza.size')
  const setPizzaSize = useAction('PIZZA_SIZE_CHANGED')

  const handleChange = compose(
    setPizzaSize,
    get('target.value'),
  )

  return (
    <section>
      <Caption>SIZES</Caption>
      <RadioGroup>
        <Radio
          checked={pizzaSize === 'SMALL'}
          name='size'
          onChange={handleChange}
          subtext='320g'
          text='SMALL'
          value='SMALL'
        />
        <Radio
          checked={pizzaSize === 'MEDIUM'}
          name='size'
          onChange={handleChange}
          subtext='530g'
          text='MEDIUM'
          value='MEDIUM'
        />
        <Radio
          checked={pizzaSize === 'LARGE'}
          name='size'
          onChange={handleChange}
          subtext='860g'
          text='LARGE'
          value='LARGE'
        />
      </RadioGroup>
    </section>
  )
}

export default PizzaSizes
