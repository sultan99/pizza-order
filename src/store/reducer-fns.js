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
 * @returns {Lens}
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
 * @returns {() => (state: State) => State}
 */
export const setState = (path, value) => () => set(path, value)

/**
 * @param {string} actionType
 * @param {CurriedReducer} reducer
 * @returns {Reducer}
 */
export const on = (actionType, reducer) => R.when(
  R.pathEq([`action`, `type`], actionType),
  ({action, state}) => ({
    action,
    state: reducer(action.payload)(state)
  })
)

/**
 * @param {any} initialState
 * @param {...Reducer} reducers
 * @returns {ReduxReducer}
 */
export const createReducer = (initialState, ...reducers) => R.pipe(
  (state, action) => ({action, state: state || initialState}),
  ...reducers,
  R.prop(`state`)
)

/**
 * @typedef {import('ramda').Lens} Lens
 * @typedef {import('@/store/types').State} State
 * @typedef {import('@/store/types').Action} Action
 * @typedef {import('@/store/types').Payload} Payload
 * @typedef {import('@/store/types').Reducer<State, Action>} Reducer
 * @typedef {import('@/store/types').CurriedReducer<Payload, State>} CurriedReducer
 * @typedef {import('redux').Reducer<State, Action>} ReduxReducer
 */
