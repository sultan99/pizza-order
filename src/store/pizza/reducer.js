import * as R from 'ramda'
import {PIZZA_SIZE_CHANGED, PIZZA_QUANTITY_CHANGED} from './actions'
import {TOPPING_ADDED, PIZZA_CHANGED} from './actions'
import {createReducer, lensFindProp, on, set} from '@/store/reducer-fns'

/** @type {PizzaState} */
const initialState = {
  basePrice: 0,
  description: ``,
  isLoading: true,
  maxToppings: 0,
  name: ``,
  quantity: 1,
  size: `SMALL`,
  toppings: [],
}

/** @type {(state: PizzaState) => number} */
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

/** @type {import('@/store/types').CurriedReducer<PayloadTopping, PizzaState>} */
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

/** @type {import('@/store/types').CurriedReducer<PayloadPizza, PizzaState>} */
const setPizza = pizza => state => R.mergeAll([
  state,
  {isLoading: false},
  pizza,
])

/** @type {import('@/store/types').CurriedReducer<PayloadPizzaQuantity, PizzaState>} */
const setPizzaQuantity = ({increment}) => R.over(
  R.lensProp(`quantity`),
  R.pipe(
    R.add(increment),
    R.max(1)
  )
)

/** @type {import('@/store/types').CurriedReducer<PayloadPizzaSize, PizzaState>} */
const setPizzaSize = ({pizzaSize}) => R.pipe(
  set(`size`, pizzaSize),
  set(`isLoading`, true),
  set(`quantity`, 1)
)

/** @type {ReduxReducer} */
const pizzaReducer = createReducer(
  initialState,
  on(PIZZA_CHANGED, setPizza),
  on(PIZZA_QUANTITY_CHANGED, setPizzaQuantity),
  on(PIZZA_SIZE_CHANGED, setPizzaSize),
  on(TOPPING_ADDED, addTopping),
)

export default pizzaReducer

/**
 * @typedef {import('./types').PayloadPizzaQuantity} PayloadPizzaQuantity
 * @typedef {import('./types').PayloadPizzaSize} PayloadPizzaSize
 * @typedef {import('./types').PayloadPizza} PayloadPizza
 * @typedef {import('./types').PayloadTopping} PayloadTopping
 * @typedef {import('./types').PizzaState} PizzaState
 * @typedef {import('@/store/types').Action} Action
 * @typedef {import('redux').Reducer<PizzaState, Action>} ReduxReducer
 */
