import type {TransitionEvent} from 'react'
import AppLogo from '@/components/app-logo'
import OrderDetails from './details'
import randomImages from '@/components/images'
import {Pane, Row, Sidebar} from './styles.scss'
import {Price} from '@/components/misc'
import {Title} from '@/components/misc'
import {useRef, useState} from 'react'
import {useStore} from '@/common/redux'

type TEvent = TransitionEvent<HTMLDivElement>

const initImage = randomImages()

const PizzaOrder = () => {
  const [isHidden, setIsHidden] = useState(true)
  const orders = useStore('orders')
  const total = orders.reduce((sum, order) => sum + order.subtotal, 0)
  const image = useRef(initImage)

  if (!isHidden && orders.length) {
    image.current = randomImages()
  }

  const handleTransitionEnd = (event: TEvent) => {
    if (event.currentTarget.id !== 'side-bar') return
    setIsHidden(!orders.length)
  }

  return (
    <Sidebar imageSrc={image.current}>
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
        <Row>
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
