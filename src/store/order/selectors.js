import * as R from 'ramda'
import {createSelector} from 'reselect'
import pizzaNames from './pizza-names'

export const selectState = R.prop(`order`)

export const selectPizzaSize = createSelector(
  selectState,
  R.prop(`pizzaSize`)
)

export const selectQuantity = createSelector(
  selectState,
  R.prop(`quantity`)
)

export const selectToppings = createSelector(
  selectState,
  R.prop(`toppings`)
)

export const selectSelectedToppings = createSelector(
  selectToppings,
  R.filter(R.propEq(`selected`, true))
)

export const selectPizzaName = createSelector(
  selectToppings,
  R.pipe(
    R.addIndex(R.map)(
      (item, index) => item.selected ? index : 0
    ),
    R.sum,
    index => pizzaNames[index]
  )
)

export const selectBasePrice = createSelector(
  selectState,
  selectQuantity,
  (state, quantity) => state.basePrice * quantity
)

export const selectToppingPrice = createSelector(
  selectSelectedToppings,
  R.pipe(
    R.map(R.prop(`price`)),
    R.sum
  )
)

export const selectTotal = createSelector(
  selectBasePrice,
  selectToppingPrice,
  R.pipe (
    R.add,
    total => Math.trunc(total * 100) / 100
  )
)
