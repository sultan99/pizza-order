import {connect} from 'react-redux'
import {createStructuredSelector} from 'reselect'
import {selectOrder, selectTotal} from '@/store/order/selectors'

const props = createStructuredSelector({
  orders: selectOrder,
  total: selectTotal,
})

export default connect(props)
