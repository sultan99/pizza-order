import {Lens} from 'ramda'
import {Reducer} from '@/store/types'
import {OnFail} from '@/common/types'

declare module 'ramda' {
  export function compose(...fns: Lens[]): Lens
  export function find<T>(fn: (element: T) => boolean, list: T[]): T | undefined
  export function merge<T, U>(o1: T, o2: U): T & U
  export function mergeAll<T>([...T]): T
  export function pipe<A, S>(fn: (state: S, action: A) => {action: A, state: S},  ...fns: Reducer<A, S>[]): S
  // export function pipe<F>(...fns: F[]): OnFail
  export function propEq<T, K extends keyof T>(prop: K, value: any): (obj: T) => boolean
  export function propEq<T, K extends keyof T>(prop: K, value: any, obj: T): boolean
}