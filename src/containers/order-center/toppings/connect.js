import {addTopping} from 'store/order/actions'
import {connect} from 'react-redux'
import {createStructuredSelector} from 'reselect'
import {selectToppings} from 'store/order/selectors'

const props = createStructuredSelector({
  toppings: selectToppings,
})

const actions = {
  addTopping,
}

export default connect(props, actions)
