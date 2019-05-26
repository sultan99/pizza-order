import * as R from 'ramda'
import {CHECK_TOPPING, PIZZA_RECEIVED} from './actions'
import {SET_PIZZA_SIZE, SET_PIZZA_QUANTITY} from './actions'
import {updateState} from 'common/reducer-fns'

const initialState = {
  pizzaSize: `SMALL`,
  quantity: 1,
  maxToppings: 0,
  basePrice: 0,
  toppings: [],
  isLoading: true,
}

function orderReducer(state = initialState, action) {
  switch (action.type) {
    case CHECK_TOPPING: {
      const isLimited = R.pipe(
        R.prop(`toppings`),
        R.filter(R.propEq(`selected`, true)),
        R.length,
        count => count >= state.maxToppings
      )
      const index = R.findIndex(
        R.propEq(`name`, action.name),
        state.toppings
      )
      const {selected} = state.toppings[index]
      const canAddMore = state.maxToppings === null || selected || !isLimited(state)
      const setState = R.over(
        R.lensPath([`toppings`, index, `selected`]),
        R.not
      )

      return canAddMore ? setState(state) : state
    }
    case PIZZA_RECEIVED: {
      return R.mergeAll([
        state,
        {isLoading: false},
        action.payload
      ])
    }
    case SET_PIZZA_QUANTITY: {
      const lessThanOne = action.increment < 0 && state.quantity === 1
      const setState = R.over(
        R.lensProp(`quantity`),
        R.add(action.increment)
      )

      return !lessThanOne ? setState(state) : state
    }
    case SET_PIZZA_SIZE: {
      const update = R.compose(
        updateState(`pizzaSize`, action.value),
        updateState(`isLoading`, true),
        updateState(`quantity`, 1)
      )
      return update(state)
    }
    default: return state
  }
}

export default orderReducer
