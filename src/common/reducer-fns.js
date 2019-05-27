import * as R from 'ramda'

const lens = R.ifElse(
  R.is(String),
  R.lensProp,
  R.lensPath
)

const setState = (path, value, state) => (
  R.set(
    lens(path),
    value, state
  )
)

export const set = R.curry(setState)
