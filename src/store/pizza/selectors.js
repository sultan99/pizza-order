import * as R from 'ramda'
import {createSelector} from 'reselect'
import {random} from '@/common/side-effects'
import {round} from '@/common/utils'
import pizzaNames from './names'

export const selectPizza = R.prop(`pizza`)

export const selectIsLoading = createSelector(
  selectPizza,
  R.prop(`isLoading`)
)

export const selectPizzaSize = createSelector(
  selectPizza,
  R.prop(`size`)
)

export const selectQuantity = createSelector(
  selectPizza,
  R.prop(`quantity`)
)

export const selectBasePrice = createSelector(
  selectPizza,
  R.prop(`basePrice`)
)

export const selectToppings = createSelector(
  selectPizza,
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
