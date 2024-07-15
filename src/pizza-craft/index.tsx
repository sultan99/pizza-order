import Info from './pizza-info'
import Loader from '@/components/loader'
import QuantityPrice from './quantity-price'
import Sizes from './pizza-sizes'
import Toppings from './pizza-toppings'
import {Panel} from './styles.scss'
import {useAction, useStore} from '@/common/redux'
import {useEffect} from 'react'

const PizzaCraft = () => {
  const isLoading = useStore('pizza.isLoading')
  const setPizzaSize = useAction('PIZZA_SIZE_CHANGED')

  useEffect(() => {
    setPizzaSize('SMALL')
  }, [])

  return (
    <Panel>
      <Info/>
      <Sizes/>
      <Loader loading={isLoading}>
        <Toppings/>
        <QuantityPrice/>
      </Loader>
    </Panel>
  )
}

export default PizzaCraft
