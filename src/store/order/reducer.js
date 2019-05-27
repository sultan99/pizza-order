import * as R from 'ramda'
import {ADD_TOPPING, PIZZA_RECEIVED} from './actions'
import {SET_PIZZA_SIZE, SET_PIZZA_QUANTITY} from './actions'
import {set} from 'common/reducer-fns'

const initialState = {
  basePrice: 0,
  isLoading: true,
  maxToppings: 0,
  pizzaSize: `SMALL`,
  quantity: 1,
  toppings: [],
}

function orderReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_TOPPING: {
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
      const update = R.over(
        R.lensPath([`toppings`, index, `selected`]),
        R.not
      )

      return canAddMore ? update(state) : state
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
      const update = R.over(
        R.lensProp(`quantity`),
        R.add(action.increment)
      )

      return !lessThanOne ? update(state) : state
    }
    case SET_PIZZA_SIZE: {
      const update = R.compose(
        set(`pizzaSize`, action.value),
        set(`isLoading`, true),
        set(`quantity`, 1)
      )

      return update(state)
    }
    default: return state
  }
}

export default orderReducer
