import {Store} from 'redux'

export type State = {}

export type Payload = {}

export type Action = {
  type: string
  payload: Payload
}

// reducer-fns
export type Reducer<A, S> = ([action, state]: [A, S]) => [A, S]

export type CurriedReducer<P, S> = (payload: P) => (state: S) => S

// api-middleware
export type ApiRequest<P, S> = (store: Store) => (payload: P) => Promise<S>

export type  UnaryFunction = (value: any) => any

export interface OnFail extends UnaryFunction {
  type: string
}
