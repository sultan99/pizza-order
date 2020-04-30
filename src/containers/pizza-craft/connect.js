import {connect} from 'react-redux'
import {createStructuredSelector} from 'reselect'
import {selectIsLoading} from '@/store/pizza/selectors'
import {setPizzaSize} from '@/store/pizza/actions'

const props = createStructuredSelector({
  isLoading: selectIsLoading,
})

const actions = {
  setPizzaSize,
}

export default connect(props, actions)
