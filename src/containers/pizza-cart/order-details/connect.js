import {connect} from 'react-redux'
import {createStructuredSelector} from 'reselect'
import {removeOrder} from 'store/cart/actions'
import {selectCart} from 'store/cart/selectors'

const props = createStructuredSelector({
  orders: selectCart,
})

const actions = {
  removeOrder
}

export default connect(props, actions)
