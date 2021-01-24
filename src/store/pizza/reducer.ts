import * as R from 'ramda'
import {AddTopping, CanAddMore, CountSelectedToppings, PizzaState, SetPizza, SetPizzaQuantity, SetPizzaSize} from './types'
import {TOPPING_ADDED, PIZZA_QUANTITY_CHANGED, PIZZA_CHANGED,PIZZA_SIZE_CHANGED} from './actions'
import {createReducer, on} from '../reducer-fns'
import {lensFindProp, set} from '@/utils/lens'

const initialState: PizzaState = {
  basePrice: 0,
  description: ``,
  isLoading: true,
  maxToppings: 0,
  name: ``,
  quantity: 1,
  size: `SMALL`,
  toppings: [],
}

const countSelectedToppings: CountSelectedToppings = R.pipe(
  R.prop(`toppings`),
  R.filter(R.propEq(`selected`, true)),
  R.length,
)

const canAddMore: CanAddMore = state => selected => (
  selected ||
  R.isNil(state.maxToppings) ||
  countSelectedToppings(state) < state.maxToppings
)

const addTopping: AddTopping = toppingName => state => R.over(
  R.compose(
    R.lensProp(`toppings`),
    lensFindProp(`name`, toppingName),
    R.lensProp(`selected`),
  ) as R.Lens,
  R.when(
    canAddMore(state),
    R.not
  ),
  state
)

const setPizza: SetPizza = pizza => state => R.mergeAll([
  state,
  {isLoading: false},
  pizza,
]) as PizzaState

const setPizzaQuantity: SetPizzaQuantity = increment => R.over(
  R.lensProp(`quantity`),
  R.pipe(
    R.add(increment),
    R.max<number>(1), // at least should be 1 quantity
  )
)

const setPizzaSize: SetPizzaSize = pizzaSize => R.pipe(
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
