import type {Middleware} from 'redux'
import {applyMiddleware, compose} from 'redux'
import {isDev} from '@/common/utils'

type Devtools = <R = any>(options: {name?: string}) => R

declare global {
  interface Window {
    '__REDUX_DEVTOOLS_EXTENSION__'?: Devtools
  }
}

const extension = window?.__REDUX_DEVTOOLS_EXTENSION__

export default (middlewares: Middleware[]) => isDev && extension
  ? compose(
    applyMiddleware(...middlewares),
    extension({name: 'pizza-order'}),
  )
  : applyMiddleware(...middlewares)
