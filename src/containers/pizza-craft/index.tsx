import Info from './info'
import Loader from '@/components/loader'
import Panel from './panel.sc'
import QuantityPrice from './quantity-price'
import React, {FC, useEffect} from 'react'
import Sizes from './sizes'
import Toppings from './toppings'
import connect from './connect'
import { PizzaSize } from '@/store/pizza/types'

const PizzaCraft: PizzaCraftType = ({isLoading, setPizzaSize}) => {
  useEffect(() => {
    setPizzaSize(`SMALL`)
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

export default connect(PizzaCraft)

type PizzaCraftType = FC<Props>

interface Props {
  isLoading: boolean
  setPizzaSize: (size: PizzaSize) => void
}