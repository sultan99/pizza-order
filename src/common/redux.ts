import type {ActionTypes, Actions, State} from '@/store/types'
import type {PathToType} from '@/common/fp-fns'
import {get} from '@/common/fp-fns'
import {useDispatch, useSelector} from 'react-redux'

type Action = {
  type: ActionTypes | string
  payload?: any
}
type Reducer<S> = (state: S, action: Action) => S
type CurriedReducer<S, P> = (payload: P) => (state: S) => S

export const createReducer = <S>(initialState: S, ...fns: Reducer<S>[]) =>
  (state = initialState, action: Action) => (
    fns.reduce(
      (nextState, fn) => fn(nextState, action),
      state,
    )
  )

export const on = <S, P>(
  actionType: ActionTypes,
  reducer: CurriedReducer<S, P>
): Reducer<S> => (state, action) => (
    action.type === actionType
      ? reducer(action.payload)(state)
      : state
  )

export const useAction = <K extends ActionTypes>(type: K) => {
  type Payload = Parameters<Actions[K]>[number]
  const dispatch = useDispatch()

  return (payload: Payload) => dispatch({type, payload})
}

export const useStore = <P extends string>(path: P) => (
  useSelector<State, PathToType<State, P>>(get(path))
)
