import {DUMMY_ACTION} from './actions'
// import {appendState, updateState} from 'common/reducer-fns'

const initialState = {
  pizzaSizes: [],
}

function orderReducer(state = initialState, action) {
  switch (action.type) {
    case DUMMY_ACTION: {
      // some actions
    }
    default: return state
  }
}

export default orderReducer
