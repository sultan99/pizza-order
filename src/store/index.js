import {applyMiddleware, compose, createStore} from 'redux'
import devtools from './devtools'
import reducers from './reducers'
import createSideEffectMiddleware from '@/common/side-effects'
import pizzaSideEffects from './pizza/side-effects'

const sideEffectMiddleware = createSideEffectMiddleware(pizzaSideEffects)

const middlewares = compose(
  applyMiddleware(sideEffectMiddleware),
  devtools()
)

const store = createStore(
  reducers,
  middlewares
)

export default store
