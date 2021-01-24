import {connect} from 'react-redux'
import {createStructuredSelector} from 'reselect'
import {selectPizzaSize} from '@/store/pizza/selectors'
import {setPizzaSize} from '@/store/pizza/actions'

const props = createStructuredSelector({
  pizzaSize: selectPizzaSize,
})

const actions = {
  setPizzaSize,
}

export default connect(props, actions)
