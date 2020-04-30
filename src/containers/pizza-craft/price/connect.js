import * as R from 'ramda'
import {connect} from 'react-redux'
import {createStructuredSelector} from 'reselect'
import {placeOrder} from '@/store/order/actions'
import {selectPizzaName} from '@/store/pizza/selectors'
import {selectQuantity, selectSelectedToppings} from '@/store/pizza/selectors'
import {selectToppings, selectTotal} from '@/store/pizza/selectors'
import {setPizzaSize, setPizzaQuantity} from '@/store/pizza/actions'

const props = createStructuredSelector({
  pizzaName: selectPizzaName,
  quantity: selectQuantity,
  selectedToppings: selectSelectedToppings,
  toppings: selectToppings,
  total: selectTotal,
})

const actions = dispatch => ({
  placeOrder: payload => {
    dispatch(placeOrder(payload))
    dispatch(setPizzaSize(`SMALL`))
  },
  setPizzaQuantity: R.compose(
    dispatch,
    setPizzaQuantity,
  )
})

export default connect(props, actions)