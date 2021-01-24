import * as R from 'ramda'

export const lens: Lens = R.ifElse(
  R.is(String),
  R.lensProp,
  R.lensPath
)

export const lensFindProp: LensFindProp = (prop, value) => R.lens(
  R.find(R.propEq(prop, value)),
  (newValue, data) => R.update(
    R.findIndex(R.propEq(prop, value), data),
    newValue,
    data
  )
)

export const set = R.curry((path, value, state) => 
  R.set(
    lens(path as string | string[]),
    value,
    state
  )
) as Set

interface Lens {
  (path: string | string[]): R.Lens
}

interface LensFindProp {
  <T>(prop: string, value: T): R.Lens
}

interface Set {
  <S, K extends keyof S>(path: K, value: S[K], state: S): S
  <S, K extends keyof S>(path: K, value: S[K]): (state: S) => S
  <S, K extends keyof S>(path: K): (value: S[K], state: S) => S
  <S, K extends keyof S>(path: K): (value: S[K]) => (state: S) => S
}

const someState: SomeState = {
  id: 1,
  name: `noname`,
}

interface SomeState {
  id: number
  name: string
}