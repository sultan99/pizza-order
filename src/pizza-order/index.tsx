import type {TransitionEvent} from 'react'
import AppLogo from '@/components/app-logo'
import OrderDetails from './details'
import {Pane, Row, Sidebar} from './styles.scss'
import {Price} from '@/components/misc'
import {Title} from '@/components/misc'
import {useState} from 'react'
import {useStore} from '@/common/redux'
import randomImages from '@/components/images'

const PizzaOrder = () => {
  const [isHidden, setIsHidden] = useState(true)
  const orders = useStore('orders')
  const total = orders.reduce((sum, order) => sum + order.subtotal, 0)

  const handleTransitionEnd = (event: TransitionEvent<HTMLDivElement>) => {
    if (event.currentTarget.id !== 'side-bar') return
    setIsHidden(!orders.length)
  }

  return (
    <Sidebar imageSrc={randomImages()}>
      <Pane
        id='side-bar'
        isHidden={isHidden && !orders.length}
        isVisible={!!orders.length}
        onTransitionEnd={handleTransitionEnd}>
        <Row>
          <AppLogo/>
          <Title size='38px'>
            Your Order
          </Title>
        </Row>
        <OrderDetails/>
        <Row >
          <Title size='24px'>
            Total
          </Title>
          <Price size='28px'>
            ${total.toFixed(2)}
          </Price>
        </Row>
      </Pane>
    </Sidebar>
  )
}

export default PizzaOrder
