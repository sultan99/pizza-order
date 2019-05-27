import * as R from 'ramda'
import {createSelector} from 'reselect'
import {round} from 'common/utils'

export const selectState = R.prop(`cart`)

export const selectTotal = createSelector(
  selectState,
  R.pipe(
    R.map(R.prop(`subtotal`)),
    R.sum,
    round
  )
)
