/**
 * @template P payload
 * @template S state
 * @typedef {import('@/store/types').ApiRequest<P, S>} ApiRequest
 */
/**
 * @typedef {import('@/store/types').Action} Action
 * @typedef {import('redux').Middleware} Middleware
 * @typedef {import('redux').Store} Store
 */

import * as R from 'ramda'
import {hashCode} from '@/common/utils'

const API_URL = `https://core-graphql.dev.waldo.photos/pizza`

/**
 * @typedef {import('@/store/types').OnFail} OnFail
 * @param {...UnaryFunction} fns
 * @returns {UnaryFunction}
 */
export const onFail = (...fns) => {
  const fail = R.pipe(...fns)
  fail.type = `onFail`
  return fail
}

/**
 * @typedef {import('@/store/types').UnaryFunction} UnaryFunction
 * @param {...UnaryFunction | OnFail} resolvers
 * @returns {(data: any) => Promise}
 */
export const promisePipe = (...resolvers) => data => R.reduce(
  (promise, next) => (
    next['type'] === `onFail` ? // eslint-disable-line
      promise.catch(next) :
      promise.then(next)
  ),
  Promise.resolve(data),
  resolvers
)

/**
 * @returns {(...resolvers: UnaryFunction[]) => (name: string) => Promise}
 */
export const createCache = () => (...resolvers) => {
  const cache = {}
  const resolve = promisePipe(...resolvers)
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
 * @template T
 * @param {string} query
 * @returns {Promise<T>}
 */
export function fetchData(query) {
  const opts = {
    method: `POST`,
    headers: {"Content-Type": `application/json`},
    body: JSON.stringify({query: `{${query}}`})
  }
  return fetch(API_URL, opts).then(res => res.json())
}

/**
 * @template P payload
 * @template S state
 * @param {string} actionType
 * @param {ApiRequest<P, S>} resolver
 * @returns {[string, ApiRequest<P, S>]}
 */
export const on = (actionType, resolver) => [actionType, resolver]

/**
 * @template P payload
 * @template S state
 * @param {[string, ApiRequest<P, S>][]} requests
 * @returns {(store: Store) => (next: Function) => (action: Action) => Middleware}
 */
export const createApiMiddleware = requests => store => next => action => {
  requests.forEach(([actionType, resolver]) => R.when(
    R.propEq(`type`, actionType),
    R.pipe(
      R.prop(`payload`),
      resolver(store)
    ),
    action
  ))
  return next(action)
}
