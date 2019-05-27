import {addOrder} from 'store/cart/actions'
import {addTopping, setPizzaSize} from 'store/order/actions'
import {connect} from 'react-redux'
import {createStructuredSelector} from 'reselect'
import {selectPizzaName, selectPizzaSize} from 'store/order/selectors'
import {selectQuantity, selectSelectedToppings} from 'store/order/selectors'
import {selectToppings, selectTotal, selectIsLoading} from 'store/order/selectors'
import {setPizzaQuantity} from 'store/order/actions'

const props = createStructuredSelector({
  isLoading: selectIsLoading,
  pizzaName: selectPizzaName,
  pizzaSize: selectPizzaSize,
  quantity: selectQuantity,
  selectedToppings: selectSelectedToppings,
  toppings: selectToppings,
  total: selectTotal,
})

const actions = {
  addOrder,
  addTopping,
  setPizzaQuantity,
  setPizzaSize,
}

export default connect(props, actions)
