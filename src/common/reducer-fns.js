import * as R from 'ramda'

/**
 * @function
 * @type {(path: string | string[]) => () => any}
 */
const lens = R.ifElse(
  R.is(String),
  R.lensProp,
  R.lensPath
)

/**
 * @function
 * @param {string} prop
 * @param {any} value
 * @returns {() => () => any}
 */
export const lensFindProp = (prop, value) => R.lens(
  R.find(R.propEq(prop, value)),
  (newValue, data) => R.update(
    R.findIndex(R.propEq(prop, value), data),
    newValue,
    data
  )
)

/**
 * @curried
 * @function
 * @param {string | string[]} path
 * @param {any} value
 * @param {any} state
 * @returns {any}
 */
export const set = R.curry((path, value, state) =>
  R.set(
    lens(path),
    value,
    state
  )
)

/**
 * @param {string | string[]} path
 * @param {any} value
 * @returns {(state: any) => any}
 */
export const setState = (path, value) => () => set(path, value)

/**
 * @function
 * @param {string} actionType
 * @param {(action: any) => (state: any) => any} reducer
 * @returns {({action, state}) => {action: any, state: any}}
 */
export const on = (actionType, reducer) => R.when(
  R.pathEq([`action`, `type`], actionType),
  ({action, state}) => ({
    action,
    state: reducer(action.payload)(state)
  })
)

/**
 * @function
 * @param {any} initialState
 * @param {...(action: any, state: any) => any} reducers
 * @returns {(action: any, state: any) => any} state
 */
export const createReducer = (initialState, ...reducers) => R.pipe(
  (state = initialState, action) => ({action, state}),
  ...reducers,
  R.prop(`state`)
)
