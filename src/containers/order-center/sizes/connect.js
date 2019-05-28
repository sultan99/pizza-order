import {connect} from 'react-redux'
import {createStructuredSelector} from 'reselect'
import {selectPizzaSize} from 'store/order/selectors'
import {setPizzaSize} from 'store/order/actions'

const props = createStructuredSelector({
  pizzaSize: selectPizzaSize,
})

const actions = {
  setPizzaSize,
}

export default connect(props, actions)
