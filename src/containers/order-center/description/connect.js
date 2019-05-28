import {connect} from 'react-redux'
import {createStructuredSelector} from 'reselect'
import {selectPizzaName} from 'store/order/selectors'

const props = createStructuredSelector({
  pizzaName: selectPizzaName
})

export default connect(props)
