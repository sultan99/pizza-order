import * as R from 'ramda'
import {asyncPipe} from '@/common/side-effects'

/**
 * @type {(value: any) => string}
 */
const toJson = data => JSON.stringify(
  data,
  (key, value) => value || R.toString(value)
)

/**
 * @type {(value: any) => string}
 */
const hashCode = R.pipe(
  R.unless(R.is(String), toJson),
  R.split(``),
  R.reduce((a, b) => {
    const h = (a << 5) - a + b.charCodeAt(0)
    return h & h & 0xfffffff
  }, 0),
  R.toString,
)

/**
 * @type {() => (resolve: Function) => (name: string) => Promise}
 */
export const makeCache = () => resolve => {
  const cache = {}
  return async input => {
    const key = hashCode(input)
    if (!cache[key]) {
      cache[key] = await resolve(input)
    }
    return cache[key]
  }
}

/**
 * @type {() => (...resolvers: Function[]) => (name: string) => Promise}
 */
export const createCache = () => (...resolvers) => {
  const cache = {}
  const resolve = asyncPipe(...resolvers)
  /** @type {(id: string) => (data: any) => any} */
  const populateCache = id => data => cache[id] || (cache[id] = data)

  return input => {
    const key = hashCode(input)

    const retrieve = R.ifElse(
      R.isNil,
      () => resolve(input),
      data => Promise.resolve(data),
    )
    return retrieve(cache[key]).then(populateCache(key))
  }
}

/**
 * @param {number} value
 * @returns {number}
 */
export const round = value => (
  parseFloat(value.toFixed(2))
)

/**
 * @type {(...funcs: Function[]) => (action: any) => any}
 */
export const pipeGenerator = (...funcs) => function* (action) {
  let result = action
  for (const func of funcs) {
    result = yield func(result)
  }
  return result
}