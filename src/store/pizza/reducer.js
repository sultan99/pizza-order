import * as R from 'ramda'
import {PIZZA_SIZE_CHANGED, PIZZA_QUANTITY_CHANGED} from './actions'
import {TOPPING_ADDED, PIZZA_RECEIVED} from './actions'
import {createReducer, lensFindProp, on, set} from '@/common/reducer-fns'

/**
 * @constant
 * @type {PizzaState}
 */
const initialState = {
  basePrice: 0,
  isLoading: true,
  maxToppings: 0,
  quantity: 1,
  size: `SMALL`,
  toppings: [],
}

/**
 * @type {(state: PizzaState) => number}
 */
const countSelectedToppings = R.pipe(
  R.prop(`toppings`),
  R.filter(R.propEq(`selected`, true)),
  R.length,
)

/**
 * @param {PizzaState} state
 * @returns {(selected: boolean) => boolean}
 */
const canAddMore = state => selected => (
  selected ||
  R.isNil(state.maxToppings) ||
  countSelectedToppings(state) < state.maxToppings
)

/**
 * @param {ToppingPayload} toppingName
 * @returns {(state: PizzaState) => PizzaState}
 */
const addTopping = ({toppingName}) => state => R.over(
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

/**
 * @param {PizzaPayload} pizza
 * @returns {(state: PizzaState) => PizzaState}
 */
const receivePizza = pizza => state => R.mergeAll([
  state,
  {isLoading: false},
  pizza
])

/**
 * @param {PizzaQuantityPayload} increment
 * @returns {(state: PizzaState) => PizzaState}
 */
const setPizzaQuantity = ({increment}) => R.over(
  R.lensProp(`quantity`),
  R.pipe(
    R.add(increment),
    R.max(1)
  )
)

/**
 * @param {PizzaSizePayload} pizzaSize
 * @returns {(state: PizzaState) => PizzaState}
 */
const setPizzaSize = ({pizzaSize}) => R.pipe(
  set(`size`, pizzaSize),
  set(`isLoading`, true),
  set(`quantity`, 1)
)

const pizzaReducer = createReducer(
  initialState,
  on(PIZZA_QUANTITY_CHANGED, setPizzaQuantity),
  on(PIZZA_RECEIVED, receivePizza),
  on(PIZZA_SIZE_CHANGED, setPizzaSize),
  on(TOPPING_ADDED, addTopping),
)

export default pizzaReducer
