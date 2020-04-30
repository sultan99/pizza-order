import {connect} from 'react-redux'
import {createStructuredSelector} from 'reselect'
import {selectPizzaName} from '@/store/pizza/selectors'

const props = createStructuredSelector({
  pizzaName: selectPizzaName
})

export default connect(props)
