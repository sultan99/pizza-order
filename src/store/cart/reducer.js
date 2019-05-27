import * as R from 'ramda'
import {ADD_ORDER, REMOVE_ORDER} from './actions'
import {guid} from 'common/utils'

function cartReducer(state = [], action) {
  switch (action.type) {
    case ADD_ORDER: {
      const newItem = R.merge(
        {id: guid()},
        action.payload
      )

      return R.append(newItem, state)
    }
    case REMOVE_ORDER: {
      const index = R.findIndex(
        R.propEq(`id`, action.id),
        state
      )

      return R.remove(index, 1, state)
    }
    default: return state
  }
}

export default cartReducer
