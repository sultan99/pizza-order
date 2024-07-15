import type {Action, ActionTypes} from '@/store/types'
import type {Middleware} from 'redux'
import type {State, Store} from '@/store/types'

export const guid = () => {
  const rnd = (c: string) => {
    const r = Math.random() * 16 | 0, v = c === 'x' ? r : (r & 0x3 | 0x8)
    return v.toString(16)
  }
  return 'xxxx-xxxx-4xxx-yxxx'.replace(/[xy]/g, rnd)
}

export const random = (min: number, max: number) => {
  min = Math.ceil(min)
  max = Math.floor(max)
  return Math.floor(Math.random() * (max - min + 1)) + min
}

type Fn = (...args: any[]) => any
type Last<T extends any[]> = T extends [...infer _, infer L] ? L : never
type LastParam<F extends Fn[]> = Parameters<Last<F>>[0]
type Resolver = (store: Store) => (payload: any) => any
type CreateMiddleware = (...resolvers: [ActionTypes, Resolver][]) => Middleware<{}, State>
type On = (actionType: ActionTypes, resolver: Resolver) => [ActionTypes, Resolver]

export const asyncCompose = <F extends Fn[], I extends LastParam<F>>
  (...fns: F) => (data: I): Promise<ReturnType<F[0]>> =>
    fns.reduceRight(
      (promise, fn) => promise.then(fn),
      Promise.resolve(data)
    )

export const on: On = (actionType, resolver) => [
  actionType,
  resolver,
]

export const createMiddleware: CreateMiddleware = (...resolvers) => store => next => action => {
  const typedAction = action as Action

  resolvers.forEach(([actionType, resolver]) => {
    if (typedAction.type !== actionType) return
    const getState = store.getState
    const dispatch = (type: ActionTypes) => <P>(payload: P) => {
      store.dispatch({type, payload})
    }
    resolver({getState, dispatch})(typedAction.payload)
  })

  return next(action)
}
