import {isDev} from '@/common/utils'

type Devtools = (options: {name?: string}) => any

declare global {
  interface Window {
    '__REDUX_DEVTOOLS_EXTENSION__'?: Devtools
  }
}

const mockExt: Devtools = () => (fn: () => void) => fn

const extension = window?.__REDUX_DEVTOOLS_EXTENSION__ ?? mockExt

export default isDev ? extension : mockExt
