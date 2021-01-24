import {addTopping} from '@/store/pizza/actions'
import {connect} from 'react-redux'
import {createStructuredSelector} from 'reselect'
import {selectToppings} from '@/store/pizza/selectors'

const props = createStructuredSelector({
  toppings: selectToppings,
})

const actions = {
  addTopping,
}

export default connect(props, actions)
