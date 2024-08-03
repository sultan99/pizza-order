import type {Action, ActionTypes, PickPayload} from '@/store/types'
import type {CurriedStore, State, Store} from '@/store/types'
import type {Middleware} from 'redux'

type Resolver<P> = (store: CurriedStore) => (payload: P) => void | Promise<void>
type ReduxResolver<P = any> = (store: Store, action: Action<P>) => void

export type CurriedResolver<T extends ActionTypes> = Resolver<PickPayload<T>>

export const on = <
  T extends ActionTypes,
  P extends PickPayload<T>,
>(actionType: T, resolver: Resolver<P>): ReduxResolver<P> => (store, action) => {
    if (action.type !== actionType) return
    resolver({
      getState: store.getState,
      dispatch: <A extends ActionTypes>(type: A) => (payload: PickPayload<A>) => {
        store.dispatch({type, payload})
      }
    })(action.payload)
  }

export const createMiddleware = <Resolvers extends ReduxResolver[]>
  (...resolvers: Resolvers): Middleware<{}, State> => store => next => a => {
    const action = a as Action<any>
    resolvers.forEach(resolver => resolver(store, action))
    return next(action)
  }
