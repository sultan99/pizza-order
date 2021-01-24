import * as R from 'ramda'
import {hashCode} from '@/common/utils'
import {Action} from '@/store/types'
import {Promise as PromiseType} from 'es6-promise'
import {RawData} from './pizza/api-requests'
import { ValueOfRecord } from 'ramda'

const API_URL = `https://core-graphql.dev.waldo.photos/pizza`

export const onFail = (...fns) => {
  const fail = R.pipe(...fns)
  fail.type = `onFail`
  return fail
}

// next['type'] === `onFail` ? // eslint-disable-line
//   promise.catch(next) :
//   promise.then(next)

interface PPR {
  <T, U>(x: T): U | PromiseType<U>
}

interface PromisePipe {
  <A1, R2, R1>(f2: (a: Promise<R1>) => Promise<R2>, f1: (a1: A1) => Promise<R1>): (a1: A1) => Promise<R2>;
}

interface PromisePipe {
  <A1, R2, R1>(f2: (a: Promise<R1>) => Promise<R2>, f1: (a1: A1) => Promise<R1>): (a1: A1) => Promise<R2>;
}


interface ReducePromise<L> {
  (fn: (acc: Promise<any>, elem: any) => Promise<any>, acc: PromiseType<any>, list: L[]): PromiseType<any>;
}

interface Fn {
  <T, U>(x: T):  U
}

type L = [Fn, Fn]

type Q = L[keyof L]

const a: Q = (x: number) => x + 1

export const promisePipeA: PromisePipeA = (...fns) => data => (
  fns.reduce(
    (promise, next) => promise.then(next),
    Promise.resolve(data),
  )
)

export const promisePipe = <L>(...fns: ListOf<L>) => data => (
  fns.reduce(
    (promise, next) => promise.then(next),
    Promise.resolve(data),
  )
)

interface Cache {
  [key: string]: any
}

interface CreateCache {
  (): (resolver: any) => <T>(input: string) => PromiseType<T>
}

export const createCache: CreateCache = () => resolve => {
  const cache: Cache = {}
  const populateCache: PopulateCache = id => data => cache[id] || (cache[id] = data)

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

interface FetchData {
  <T>(query: string): PromiseType<T>
}

export const fetchData: FetchData = query => {
  const opts = {
    method: `POST`,
    headers: {"Content-Type": `application/json`},
    body: JSON.stringify({query: `{${query}}`})
  }
  return fetch(API_URL, opts).then(res => res.json())
}

export const on = (actionType, resolver) => [actionType, resolver]



export const createApiMiddleware: CreateApiMiddleware = requests => store => next => action => {
  requests.forEach(([actionType, resolver]) => R.when(
    R.propEq(`type`, actionType),
    R.pipe(
      R.prop(`payload`),
      resolver(store),
    ),
    action
  ))
  return next(action)
}



export interface CreateApiMiddleware {
  <R, S>(requests: R[]): (store: S) => (next:  any) => (action: Action<any>) =>  S
}







interface PopulateCache {
  <T>(id: string): (data: T) => PromiseType<T>
}
