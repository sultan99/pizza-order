import * as R from 'ramda'
import {createSelector} from 'reselect'

export const selectState = R.prop(`order`)

export const selectPizzaSizes = createSelector(
  selectState,
  R.prop(`pizzaSizes`)
)
