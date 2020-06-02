import Info from './info'
import Loader from '@/components/loader'
import Panel from './panel.sc'
import QuantityPrice from './quantity-price'
import React from 'react'
import Sizes from './sizes'
import Toppings from './toppings'
import connect from './connect'
import {useMount} from '@/common/hooks'

/**
 * @typedef PizzaCraftProps
 * @type {object}
 * @property {boolean} isLoading
 * @property {(value: PizzaSize) => void} setPizzaSize
 *
 * @function
 * @param {PizzaCraftProps} props
 */
function PizzaCraft({isLoading, setPizzaSize}) {
  useMount(() => {
    setPizzaSize(`SMALL`)
  })
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
