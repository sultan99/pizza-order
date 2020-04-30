import * as R from 'ramda'
import {createSelector} from 'reselect'
import {round} from '@/common/utils'

export const selectOrder = R.prop(`order`)

export const selectTotal = createSelector(
  selectOrder,
  R.pipe(
    R.pluck(`subtotal`),
    R.sum,
    round
  )
)
