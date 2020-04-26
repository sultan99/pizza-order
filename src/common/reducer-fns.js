import * as R from 'ramda'

const lens = R.ifElse(
  R.is(String),
  R.lensProp,
  R.lensPath
)

export const set = R.curry((path, value, state) =>
  R.set(
    lens(path),
    value,
    state
  )
)

export const setState = (path, value) => () => set(path, value)

export const on = (actionType, reducer) => R.when(
  R.pathEq([`action`, `type`], actionType),
  ({action, state}) => ({
    action,
    state: reducer(action.payload)(state)
  })
)

export const createReducer = (initialState, ...reducers) => R.pipe(
  (state = initialState, action) => ({action, state}),
  ...reducers,
  R.prop(`state`)
)

export const shape = R.curry((desiredObject, object) =>
  R.mapObjIndexed(
    fn => R.is(Array, fn) ? R.pipe(...fn)(object) : fn(object),
    desiredObject
  )
)

export const lensFindProp = (prop, value) => R.lens(
  R.find(R.propEq(prop, value)),
  (newValue, data) => R.update(
    R.findIndex(R.propEq(prop, value), data),
    newValue,
    data
  )
)