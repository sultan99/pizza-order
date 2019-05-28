import * as R from 'ramda'
import {createSelector} from 'reselect'
import {random} from 'common/side-effects'
import {round} from 'common/utils'
import pizzaNames from './pizza-names'

export const selectState = R.prop(`order`)

export const selectIsLoading = createSelector(
  selectState,
  R.prop(`isLoading`)
)

export const selectPizzaSize = createSelector(
  selectState,
  R.prop(`pizzaSize`)
)

export const selectQuantity = createSelector(
  selectState,
  R.prop(`quantity`)
)

export const selectBasePrice = createSelector(
  selectState,
  R.prop(`basePrice`)
)

export const selectPrice = createSelector(
  selectBasePrice,
  selectQuantity,
  R.multiply
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
  selectPizzaSize,
  () => pizzaNames[random(0, 26)]
)

export const selectToppingPrice = createSelector(
  selectSelectedToppings,
  R.pipe(
    R.map(R.prop(`price`)),
    R.sum
  )
)

export const selectTotal = createSelector(
  selectPrice,
  selectToppingPrice,
  R.pipe(
    R.add,
    round
  )
)
