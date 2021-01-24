import Content from './content.sc'
import PageLayout from './page-layout.sc'
import PizzaCraft from '@/containers/pizza-craft'
import PizzaOrder from '@/containers/pizza-order'
import React from 'react'
import SideBar from './side-bar.sc'
import randomImages from '@/components/images'

const App = () => (
  <PageLayout>
    <SideBar image={randomImages()}>
      <PizzaOrder/>
    </SideBar>
    <Content>
      <PizzaCraft/>
    </Content>
  </PageLayout>
)

export default App
