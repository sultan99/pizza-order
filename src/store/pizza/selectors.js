import * as R from 'ramda'
import {createSelector} from 'reselect'
import {round} from '@/common/utils'

/**
 * @returns {PizzaState} state
 */
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
 * @param {PizzaState} state
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
 * @param {PizzaState} state
 * @returns {Topping[]} toppings
 */

export const selectToppings = createSelector(
  selectPizza,
  R.prop(`toppings`)
)

/**
 * @type {(state: PizzaState) => Topping[]}
 */
export const selectSelectedToppings = createSelector(
  selectToppings,
  R.filter(R.propEq(`selected`, true))
)

/**
 * @param {PizzaState} state
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
