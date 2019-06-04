import {connect} from 'react-redux'
import {createStructuredSelector} from 'reselect'
import {selectCart, selectTotal} from 'store/cart/selectors'

const props = createStructuredSelector({
  orders: selectCart,
  total: selectTotal,
})

export default connect(props)
