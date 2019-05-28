import {connect} from 'react-redux'
import {createStructuredSelector} from 'reselect'
import {selectIsLoading} from 'store/order/selectors'
import {setPizzaSize} from 'store/order/actions'

const props = createStructuredSelector({
  isLoading: selectIsLoading,
})

const actions = {
  setPizzaSize,
}

export default connect(props, actions)
