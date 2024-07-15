declare global {
  interface Window {
    '__REDUX_DEVTOOLS_EXTENSION__'?: Devtools
  }
}

type Devtools = (options: {name?: string}) => any

const isDev = process.env.NODE_ENV === 'development'
const mockExt: Devtools = () => (fn: () => void) => fn
const extension = window?.__REDUX_DEVTOOLS_EXTENSION__ ?? mockExt

export default isDev ? extension : mockExt
