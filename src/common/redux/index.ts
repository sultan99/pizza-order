import type {ActionTypes, Actions, PickPayload, State} from '@/store/types'
import type {PathToType} from '@/common/fp-fns'
import {get} from '@/common/fp-fns'
import {useDispatch, useSelector} from 'react-redux'

type Action = {
  type: ActionTypes | string
  payload?: any
}

type Reducer<S> = (state: S, action: Action) => S

export type CurriedReducer<T extends ActionTypes, S> = (
  (payload: PickPayload<T>) => (state: S) => S
)

export const createReducer = <S>(initialState: S, ...fns: Reducer<S>[]) =>
  (state = initialState, action: Action) => (
    fns.reduce(
      (nextState, fn) => fn(nextState, action),
      state,
    )
  )

export const on = <T extends ActionTypes, S>(
  actionType: T,
  reducer: CurriedReducer<T, S>
): Reducer<S> => (state, action) => (
    action.type === actionType
      ? reducer(action.payload)(state)
      : state
  )

export const useAction = <K extends ActionTypes>(type: K) => {
  const dispatch = useDispatch()

  return (payload: PickPayload<K>) => {
    dispatch({type, payload})
  }
}

export const useStore = <P extends string>(path: P) => (
  useSelector<State, PathToType<State, P>>(get(path))
)
