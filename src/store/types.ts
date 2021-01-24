import {Reducer} from 'redux'

export interface Action<P> {
  type: string
  payload: P
}

export interface ActionCreator<P> {
  (payload: P): Action<P>
}

export interface PayloadReducer<P, S> {
  (payload: P): (state: S) => S
}

export interface ActionReducer<S, A> {
  (action: A) : (state: S) => S
}

export interface On {
  <S>(actionType: string, reducer: PayloadReducer<any, S>): ActionReducer<S, Action<any>>
}

export interface CreateReducer {
  <S>(initialState: S, ...reducers: ActionReducer<S, Action<any>>[]): Reducer<S, Action<any>>
}

export interface CreateAction {
  (type: string): [string, <P>(payload: P) => Action<P>]
}

