import OrderCenter from 'containers/order-center'
import Panel from './panel.sc'
import Picture from 'components/picture'
import PizzaCart from 'containers/pizza-cart'
import React from 'react'

const App = () => (
  <Panel>
    <Picture/>
    <OrderCenter/>
    <PizzaCart/>
  </Panel>
)

export default App
