import Bill from 'containers/bill'
import OrderCenter from 'containers/order'
import Panel from './panel.sc'
import React from 'react'

const App = () => (
  <Panel>
    <Bill/>
    <OrderCenter/>
  </Panel>
)

export default App
