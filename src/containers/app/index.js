import Content from './content.sc'
import OrderCenter from 'containers/order-center'
import PageLayout from './page-layout.sc'
import PizzaCart from 'containers/pizza-cart'
import React from 'react'
import SideBar from './side-bar.sc'
import {random} from 'common/side-effects'

const src = () => (
  `./public/images/photo-0${random(1, 2)}.jpg`
)

const App = () => (
  <PageLayout>
    <SideBar image={src()}>
      <PizzaCart/>
    </SideBar>
    <Content>
      <OrderCenter/>
    </Content>
  </PageLayout>
)

export default App
