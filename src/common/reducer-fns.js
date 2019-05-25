import * as R from 'ramda'

const lens = R.ifElse(
  R.is(String),
  R.lensProp,
  R.lensPath
)

const append = (path, value, state) => (
  R.over(
    lens(path),
    R.append(value),
    state
  )
)

const update = (path, value, state) => (
  R.set(
    lens(path),
    value, state
  )
)

export const appendState = R.curry(append)
export const updateState = R.curry(update)
