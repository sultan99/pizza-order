// finds type from path, e.g: 'pizza.basePrice' -> number
export type PathToType<T, P extends string> = (
  P extends `${infer K}.${infer Rest}`
    ? K extends `${number}`
      ? T extends Array<infer U>
        ? PathToType<U, Rest>
        : never
      : K extends keyof T
        ? PathToType<T[K], Rest>
        : never
    : P extends keyof T
      ? T[P]
      : never
)

// It allows find the type of value -> function or other type
type Value<T, P extends string> =
  | PathToType<T, P>
  | ((value: PathToType<T, P>) => PathToType<T, P>)

type Func = (...args: any[]) => any
const curry = (fn: Func) => (...args: any[]) => (
  args.length >= fn.length
    ? fn(...args)
    : curry(fn.bind(undefined, ...args))
)

const update = (keys: string[], fn: any, obj: any | any[]): any => {
  const [key, ...rest] = keys

  if (keys.length === 1) {
    return Array.isArray(obj)
      ? obj.map((v, i) => i.toString() === key ? fn(v) : v)
      : {...obj, [key]: fn(obj[key])}
  }

  return Array.isArray(obj)
    ? obj.map((v, i) => i.toString() === key ? update(rest, fn, v) : v)
    : {...obj, [key]: update(rest, fn, obj[key])}
}

interface Set {
  <P extends string, T>(path: P, value: Value<T, P>, obj: T): T
  <P extends string>(path: P): <T>(value: Value<T, P>, obj: T) => T
  <P extends string, T>(path: P, value: Value<T, P>): (obj: T) => T
  <P extends string, T>(path: P): (value: Value<T, P>) => (obj: T) => T
}
export const set: Set = curry(<T, P extends string>(path: P, fn: Value<T, P>, object: T) =>
  update(
    path.split('.'),
    typeof fn === 'function' ? fn : () => fn,
    object,
  )
)

export interface Get {
  <P extends string, T>(value: P, obj: T): PathToType<T, P>
  <P extends string, T>(value: P): (obj: T) => PathToType<T, P>
}
export const get: Get = curry((value: string, obj: any) =>
  value
    .split('.')
    .reduce((acc, key) => acc?.[key], obj)
)

export {compose} from 'redux'
