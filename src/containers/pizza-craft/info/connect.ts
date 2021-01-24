import {connect} from 'react-redux'
import {createStructuredSelector} from 'reselect'
import {selectPizzaName, selectPizzaDescription} from '@/store/pizza/selectors'

const props = createStructuredSelector({
  name: selectPizzaName,
  description: selectPizzaDescription,
})

export default connect(props)
