/**
 * @template P payload
 * @template S state
 * @typedef {import('@/store/types').CurriedReducer<P, S>} CurriedReducer
 */
import * as R from 'ramda'
import {PIZZA_SIZE_CHANGED, PIZZA_QUANTITY_CHANGED} from './actions'
import {TOPPING_ADDED, PIZZA_CHANGED} from './actions'
import {createReducer, lensFindProp, on, set} from '@/store/reducer-fns'

/**
 * @typedef {import('@/store/pizza/types').StatePizza} StatePizza
 * @type {StatePizza}
 */
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

/**
 * @type {(state: StatePizza) => number}
 */
const countSelectedToppings = R.pipe(
  R.prop(`toppings`),
  R.filter(R.propEq(`selected`, true)),
  R.length,
)

/**
 * @param {StatePizza} state
 * @returns {(selected: boolean) => boolean}
 */
const canAddMore = state => selected => (
  selected ||
  R.isNil(state.maxToppings) ||
  countSelectedToppings(state) < state.maxToppings
)

/**
 * @typedef {import('@/store/pizza/types').PayloadTopping} PayloadTopping
 * @type {CurriedReducer<PayloadTopping, StatePizza>}
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
 * @typedef {import('@/store/pizza/types').PayloadPizza} PayloadPizza
 * @type {CurriedReducer<PayloadPizza, StatePizza>}
 */
const setPizza = pizza => state => R.mergeAll([
  state,
  {isLoading: false},
  pizza,
])

/**
 * @typedef {import('@/store/pizza/types').PayloadPizzaQuantity} PayloadPizzaQuantity
 * @type {CurriedReducer<PayloadPizzaQuantity, StatePizza>}
 */
const setPizzaQuantity = ({increment}) => R.over(
  R.lensProp(`quantity`),
  R.pipe(
    R.add(increment),
    R.max(1)
  )
)

/**
 * @typedef {import('@/store/pizza/types').PayloadPizzaSize} PayloadPizzaSize
 * @type {CurriedReducer<PayloadPizzaSize, StatePizza>}
 */
const setPizzaSize = ({pizzaSize}) => R.pipe(
  set(`size`, pizzaSize),
  set(`isLoading`, true),
  set(`quantity`, 1)
)

const pizzaReducer = createReducer(
  initialState,
  on(PIZZA_CHANGED, setPizza),
  on(PIZZA_QUANTITY_CHANGED, setPizzaQuantity),
  on(PIZZA_SIZE_CHANGED, setPizzaSize),
  on(TOPPING_ADDED, addTopping),
)

export default pizzaReducer
