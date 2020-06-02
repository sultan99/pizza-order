import * as R from 'ramda'
import {hashCode} from '@/common/utils'

export const API_URL = `https://core-graphql.dev.waldo.photos/pizza`

/**
 * @param {...PromisePipe} resolvers
 * @returns {(data: any) => Promise<any>}
 */
export const promisePipe = (...resolvers) => data => resolvers.reduce(
  (promise, next) => next.type !== `onFail` ?
    promise.then(next) :
    promise.catch(next),
  Promise.resolve(data)
)

/**
 * @param  {...Function} fns
 * @returns {OnFail}
 */
export function onFail(...fns) {
  const fail = R.pipe(...fns)
  fail.type = `onFail`
  return fail
}

/**
 * @type {() => (...resolvers: PromisePipe[]) => (name: string) => Promise}
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
 * @param {string} actionType
 * @param {ApiRequest} resolver
 * @returns {(store: Store) => (action: Action) => void}
 */
export const on = (actionType, resolver) => store => R.when(
  R.propEq(`type`, actionType),
  R.pipe(
    R.prop(`payload`),
    resolver(store)
  )
)

/**
 * @template A
 * @param {ApiRequest[]} requests
 * @returns {(store: Store) => (next: Function) => (action: A) => Middleware}
 */
export const createApiMiddleware = requests => store => next => action => {
  requests.forEach(sendRequest =>
    sendRequest(store)(action)
  )
  return next(action)
}

/**
 * @typedef {import('./types').ApiRequest<any>} ApiRequest
 * @typedef {import('./types').OnFail} OnFail
 * @typedef {import('./types').PromisePipe} PromisePipe
 * @typedef {import('@/store/types').Action} Action
 * @typedef {import('redux').Middleware} Middleware
 * @typedef {import('redux').Store} Store
 */
