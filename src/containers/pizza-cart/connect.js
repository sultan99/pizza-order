import {connect} from 'react-redux'
import {createStructuredSelector} from 'reselect'
import {removeOrder} from 'store/cart/actions'
import {selectState, selectTotal} from 'store/cart/selectors'

const props = createStructuredSelector({
  orders: selectState,
  total: selectTotal,
})

const actions = {
  removeOrder
}

export default connect(props, actions)
