import * as R from 'ramda'
import {createSelector} from 'reselect'
import {random} from 'common/side-effects'
import {round} from 'common/utils'
import pizzaNames from './pizza-names'

export const selectOrder = R.prop(`order`)

export const selectIsLoading = createSelector(
  selectOrder,
  R.prop(`isLoading`)
)

export const selectPizzaSize = createSelector(
  selectOrder,
  R.prop(`pizzaSize`)
)

export const selectQuantity = createSelector(
  selectOrder,
  R.prop(`quantity`)
)

export const selectBasePrice = createSelector(
  selectOrder,
  R.prop(`basePrice`)
)

export const selectToppings = createSelector(
  selectOrder,
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
    R.pluck(`price`),
    R.sum
  )
)

export const selectPrice = createSelector(
  selectBasePrice,
  selectToppingPrice,
  R.add
)

export const selectTotal = createSelector(
  selectPrice,
  selectQuantity,
  R.pipe(
    R.multiply,
    round
  )
)
