import type {ActionTypes, PizzaState, Topping} from '@/store/types'
import type {CurriedReducer} from '@/common/redux'
import {compose, set} from '@/common/fp-fns'
import {createReducer, on} from '@/common/redux'

type R<T extends ActionTypes> = CurriedReducer<T, PizzaState>

const initialState: PizzaState = {
  basePrice: 0,
  description: '',
  isLoading: false,
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

const addTopping: R<'TOPPING_ADDED'> = toppingName => state => {
  const index = state.toppings.findIndex(
    topping => toppingName === topping.name
  )

  return set(
    `toppings.${index}.selected`,
    value => (value || canAddMore(state)) && !value,
    state,
  )
}

const setPizza: R<'PIZZA_CHANGED'> = pizza => state => ({
  ...state,
  ...pizza,
  isLoading: false,
})

const setPizzaQuantity: R<'PIZZA_QUANTITY_CHANGED'> = increment => (
  set('quantity', value => Math.max(1, value + increment))
)

const setPizzaSize: R<'PIZZA_SIZE_CHANGED'> = pizzaSize => compose(
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
