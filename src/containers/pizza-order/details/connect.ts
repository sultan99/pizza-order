import {connect} from 'react-redux'
import {createStructuredSelector} from 'reselect'
import {removeOrder} from '@/store/order/actions'
import {selectOrder} from '@/store/order/selectors'

const props = createStructuredSelector({
  orders: selectOrder,
})

const actions = {
  removeOrder
}

export default connect(props, actions)
