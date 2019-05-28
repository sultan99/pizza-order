import * as R from 'ramda'

const lens = R.ifElse(
  R.is(String),
  R.lensProp,
  R.lensPath
)

const plainShape = (shape, object) => (
  R.mapObjIndexed(
    fn => R.is(Array, fn) ? R.pipe(...fn)(object) : fn(object),
    shape
  )
)

const plainSet = (path, value, state) => (
  R.set(
    lens(path),
    value, state
  )
)

export const shape = R.curry(plainShape)
export const set = R.curry(plainSet)
