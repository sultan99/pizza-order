import {checkTopping, setPizzaSize} from 'store/order/actions'
import {connect} from 'react-redux'
import {createStructuredSelector} from 'reselect'
import {selectPizzaName, selectPizzaSize} from 'store/order/selectors'
import {selectQuantity} from 'store/order/selectors'
import {selectToppings, selectTotal} from 'store/order/selectors'
import {setPizzaQuantity} from 'store/order/actions'

const props = createStructuredSelector({
  pizzaName: selectPizzaName,
  pizzaSize: selectPizzaSize,
  quantity: selectQuantity,
  toppings: selectToppings,
  total: selectTotal,
})

const actions = {
  checkTopping,
  setPizzaQuantity,
  setPizzaSize,
}

export default connect(props, actions)
