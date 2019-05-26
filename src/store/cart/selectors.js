import * as R from 'ramda'
import {createSelector} from 'reselect'

export const selectState = R.prop(`cart`)

export const selectTotal = createSelector(
  selectState,
  R.pipe(
    R.map(R.prop(`subtotal`)),
    R.sum,
    total => Math.trunc(total * 100) / 100
  )
)
