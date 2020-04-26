import * as R from 'ramda'
import {PIZZA_SIZE_CHANGED, PIZZA_QUANTITY_CHANGED} from './actions'
import {TOPPING_ADDED, PIZZA_RECEIVED} from './actions'
import {createReducer, lensFindProp, on, set} from 'common/reducer-fns'

const initialState = {
  basePrice: 0,
  isLoading: true,
  maxToppings: 0,
  pizzaSize: `SMALL`,
  quantity: 1,
  toppings: [],
}

const countSelectedToppings = R.pipe(
  R.prop(`toppings`),
  R.filter(R.propEq(`selected`, true)),
  R.length,
)

const canAddMore = state => selected => (
  selected ||
  R.isNil(state.maxToppings) ||
  countSelectedToppings(state) < state.maxToppings
)

const addToppings = ({toppingName}) => state => R.over(
  R.compose(
    R.lensProp(`toppings`),
    lensFindProp(`name`, toppingName),
    R.lensProp(`selected`),
  ),
  R.when(
    canAddMore(state),
    R.not
  ),
  state
)

const receivePizza = payload => state => R.mergeAll([
  state,
  {isLoading: false},
  payload
])

const setPizzaQuantity = ({increment}) => R.over(
  R.lensProp(`quantity`),
  R.pipe(
    R.add(increment),
    R.max(1)
  )
)

const setPizzaSize = ({pizzaSize}) => R.pipe(
  set(`pizzaSize`, pizzaSize),
  set(`isLoading`, true),
  set(`quantity`, 1)
)

const orderReducer = createReducer(
  initialState,
  on(PIZZA_QUANTITY_CHANGED, setPizzaQuantity),
  on(PIZZA_RECEIVED, receivePizza),
  on(PIZZA_SIZE_CHANGED, setPizzaSize),
  on(TOPPING_ADDED, addToppings),
)

export default orderReducer
