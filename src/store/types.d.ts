import {Store} from 'redux'

export type State = {}

export type Payload = {}

export type Action = {
  type: string
  payload: Payload
}

// reducer-fns
export type Reducer<S, A> = ({action: A, state: S}) => {action: A, state: S}

export type CurriedReducer<P, S> = (payload: P) => (state: S) => S

// api-middleware
export type PromisePipe = Function | OnFail | Promise<any>

export interface OnFail extends Function {
  type: string
}

export type ApiRequest<P> = (store: Store) => (payload: P) => Promise<any>