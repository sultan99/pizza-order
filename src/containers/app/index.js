import Cart from 'containers/cart'
import OrderCenter from 'containers/order'
import Panel from './panel.sc'
import React from 'react'

const App = () => (
  <Panel>
    <OrderCenter/>
    <Cart/>
  </Panel>
)

export default App
