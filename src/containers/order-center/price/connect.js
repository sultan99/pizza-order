import {placeOrder} from 'store/cart/actions'
import {connect} from 'react-redux'
import {createStructuredSelector} from 'reselect'
import {selectPizzaName} from 'store/order/selectors'
import {selectQuantity, selectSelectedToppings} from 'store/order/selectors'
import {selectToppings, selectTotal} from 'store/order/selectors'
import {setPizzaSize, setPizzaQuantity} from 'store/order/actions'

const props = createStructuredSelector({
  pizzaName: selectPizzaName,
  quantity: selectQuantity,
  selectedToppings: selectSelectedToppings,
  toppings: selectToppings,
  total: selectTotal,
})

const actions = {
  placeOrder,
  setPizzaQuantity,
  setPizzaSize,
}

export default connect(props, actions)
