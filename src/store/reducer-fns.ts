import * as R from 'ramda'
import {CreateAction, CreateReducer, On} from './types'

export const createAction: CreateAction = type => [
  type,
  payload => ({
    type,
    payload
  })
]

export const createReducer: CreateReducer = (initState, ...actionReducers) => (state = initState, action) => (
  R.reduce((newState, reduce) =>
    reduce(action)(newState),
    state,
    actionReducers
  )
)

export const on: On = (actionType, reducer) => action => R.when(
  R.always(action.type === actionType),
  reducer(action.payload)
)