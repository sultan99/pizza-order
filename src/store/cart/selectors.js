import * as R from 'ramda'
import {createSelector} from 'reselect'
import {round} from 'common/utils'

export const selectCart = R.prop(`cart`)

export const selectTotal = createSelector(
  selectCart,
  R.pipe(
    R.pluck(`subtotal`),
    R.sum,
    round
  )
)
