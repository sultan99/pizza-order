import * as R from 'ramda'

export const ifProp:IfProp = (prop, a, b) => (
  R.ifElse(
    R.propEq(prop, true),
    R.always(a),
    R.always(b),
  )
)

export const prop: Prop = (name, defValue) => (
  R.ifElse(
    R.has(name),
    R.prop(name),
    R.always(defValue),
  )
)

interface IfProp {
  <T, U, V>(prop: string, a: U, b: V): (props: T) => string
}

interface Prop {
  <T, U>(name: string, defValue?: U): (props: T) => string
}