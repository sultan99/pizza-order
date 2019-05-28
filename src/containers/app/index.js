import Content from './content.sc'
import OrderCenter from 'containers/order-center'
import PageLayout from './page-layout.sc'
import PizzaCart from 'containers/pizza-cart'
import React from 'react'
import SideBar from './side-bar.sc'
import randomImages from 'components/images'

const App = () => (
  <PageLayout>
    <SideBar image={randomImages()}>
      <PizzaCart/>
    </SideBar>
    <Content>
      <OrderCenter/>
    </Content>
  </PageLayout>
)

export default App
