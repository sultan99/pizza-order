import {connect} from 'react-redux'
import {createStructuredSelector} from 'reselect'
import {selectPizzaSizes} from 'store/order/selectors'

const props = createStructuredSelector({
  pizzaSizes: selectPizzaSizes,
})

const actions = {}

export default connect(props, actions)
