import * as R from 'ramda'
import {createSelector, Selector} from 'reselect'
import {round} from '@/common/utils'
import {Order} from './reducer'
import {AppState} from '@/store'

export const selectOrder = R.prop(`order`)

export const selectTotal = createSelector<AppState, Order[], number>(
  selectOrder,
  R.pipe(
    R.pluck(`subtotal`),
    R.sum,
    round
  )
)
