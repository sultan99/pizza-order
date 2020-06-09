/**
 * @typedef {import('@/store/types').Action} Action
 * @typedef {import('@/store/types').Payload} Payload
 */
/**
 * @template A action
 * @template S state
 * @typedef {import('@/store/types').Reducer<A, S>} Reducer
 */
/**
 * @template P payload
 * @template S state
 * @typedef {import('@/store/types').CurriedReducer<P, S>} CurriedReducer
 */

import * as R from 'ramda'

/**
 * @param {string | string[]} path
 * @returns {import('ramda').Lens}
 */
const lens = R.ifElse(
  R.is(String),
  R.lensProp,
  R.lensPath
)

/**
 * @param {string} prop
 * @param {any} value
 * @returns {import('ramda').Lens}
 */
export const lensFindProp = (prop, value) => R.lens(
  R.find(R.propEq(prop, value)),
  (newValue, data) => R.update(
    R.findIndex(R.propEq(prop, value), data),
    newValue,
    data
  )
)

export const set = R.curry((path, value, state) =>
  R.set(
    lens(path),
    value,
    state
  )
)

/**
 * @template S state
 * @param {string | string[]} path
 * @param {any} value
 * @returns {() => (state: S) => S}
 */
export const setState = (path, value) => () => set(path, value)

/**
 * @template S state
 * @param {string} actionType
 * @param {CurriedReducer<Payload, S>} reducer
 * @returns {Reducer<Action, S>}
 */
export const on = (actionType, reducer) => R.when(
  ([action]) => action.type === actionType,
  ([action, state]) => [action, reducer(action.payload)(state)]
)

/**
 * @template S state
 * @param {S} initialState
 * @param {...Reducer<Action, S>} reducers
 * @returns {import('redux').Reducer<S, Action>}
 */
export const createReducer = (initialState, ...reducers) => R.pipe(
  (state = initialState, action) => [action, state],
  ...reducers,
  R.last
)
