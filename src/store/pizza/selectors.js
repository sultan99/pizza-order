import * as R from 'ramda'
import {createSelector} from 'reselect'
import {round} from '@/common/utils'

export const selectPizza = R.prop(`pizza`)

export const selectIsLoading = createSelector(
  selectPizza,
  R.prop(`isLoading`)
)

export const selectPizzaName = createSelector(
  selectPizza,
  R.prop(`name`)
)

export const selectPizzaDescription = createSelector(
  selectPizza,
  R.prop(`description`)
)

export const selectPizzaSize = createSelector(
  selectPizza,
  R.prop(`size`)
)

/**
 * @param {StatePizza} state
 * @returns {number}
 */
export const selectQuantity = createSelector(
  selectPizza,
  R.prop(`quantity`)
)

export const selectBasePrice = createSelector(
  selectPizza,
  R.prop(`basePrice`)
)

/**
 * @param {StatePizza} state
 * @returns {Topping[]} toppings
 */

export const selectToppings = createSelector(
  selectPizza,
  R.prop(`toppings`)
)

/**
 * @type {(state: StatePizza) => Topping[]}
 */
export const selectSelectedToppings = createSelector(
  selectToppings,
  R.filter(R.propEq(`selected`, true))
)

/**
 * @param {StatePizza} state
 * @returns {number}
 */
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

/**
 * @typedef {import('@/store/pizza/types').StatePizza} StatePizza
 */
