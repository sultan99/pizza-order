import type {Pizza, PizzaSize, PizzaState, Topping} from '@/store/types'
import {compose, set} from '@/common/fp-fns'
import {createReducer, on} from '@/common/redux'

type R<A> = (arg: A) => (state: PizzaState) => PizzaState

const initialState: PizzaState = {
  basePrice: 0,
  description: '',
  isLoading: true,
  maxToppings: 0,
  name: '',
  quantity: 1,
  size: 'SMALL',
  toppings: [],
}

const countSelected = (toppings: Topping[]) => toppings
  .filter(({selected}) => selected)
  .length

const canAddMore = ({toppings, maxToppings}: PizzaState) => (
  !maxToppings ||
  countSelected(toppings) < maxToppings
)

const addTopping: R<string> = toppingName => state => {
  const index = state.toppings.findIndex(
    topping => toppingName === topping.name
  )

  return set(
    `toppings.${index}.selected`, // TODO: Fix this
    value => (value || canAddMore(state)) && !value,
    state,
  )
}

const setPizza: R<Pizza> = pizza => state => ({
  ...state,
  ...pizza,
  isLoading: false,
})

const setPizzaQuantity: R<number> = increment => (
  set('quantity', value => Math.max(1, value + increment))
)

const setPizzaSize: R<PizzaSize> = pizzaSize => compose(
  set('size', pizzaSize),
  set('isLoading', true),
  set('quantity', 1),
)

const pizzaReducer = createReducer(
  initialState,
  on('PIZZA_CHANGED', setPizza),
  on('PIZZA_QUANTITY_CHANGED', setPizzaQuantity),
  on('PIZZA_SIZE_CHANGED', setPizzaSize),
  on('TOPPING_ADDED', addTopping),
)

export default pizzaReducer
