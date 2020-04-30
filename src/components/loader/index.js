import Pane from './pane.sc'
import Cover from './cover.sc'
import React from 'react'

/** 
 * @typedef {object} LoaderProps
 * @property {boolean} loading
 * @property {import('react').ReactNode} children
 *
 * @component
 * @param {LoaderProps} props
 */
const Loader = ({loading, children}) => (
  <Pane>
    {children}
    <Cover visible={loading}/>
  </Pane>
)

export default Loader
