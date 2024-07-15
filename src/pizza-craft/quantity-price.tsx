import Button from '@/components/button'
import IncButton from '@/components/button/increment'
import {Caption, Row} from './styles.scss'
import {Price} from '@/components/misc'
import {useAction, useStore} from '@/common/redux'

const QuantityPrice = () => {
  const pizzaName = useStore('pizza.name')
  const basePrice = useStore('pizza.basePrice')
  const quantity = useStore('pizza.quantity')
  const selectedToppings = useStore('pizza.toppings').filter(top => top.selected)

  const toppings = selectedToppings.map(topping => topping.name)
  const toppingsCost = selectedToppings.reduce((acc, topping) => acc + topping.price, 0)
  const subtotal = (basePrice + toppingsCost) * quantity

  const setPizzaSize = useAction('PIZZA_SIZE_CHANGED')
  const setPizzaQuantity = useAction('PIZZA_QUANTITY_CHANGED')
  const placeOrder = useAction('ORDER_PLACED')

  const handlePlaceOrder = () => {
    placeOrder({pizzaName, quantity, subtotal, toppings})
    setPizzaSize('SMALL')
  }

  return (
    <section>
      <Caption>QUANTITY</Caption>
      <Row>
        <IncButton onClick={setPizzaQuantity}>
          {quantity}
        </IncButton>
        <Price>
          ${subtotal?.toFixed(2) ?? 0}
        </Price>
      </Row>
      <Button icon='pizza' onClick={handlePlaceOrder}>
        PLACE ORDER
      </Button>
    </section>
  )
}

export default QuantityPrice
