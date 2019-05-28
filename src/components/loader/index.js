import Pane from './pane.sc'
import Cover from './cover.sc'
import React from 'react'

const Loader = ({loading, children}) => (
  <Pane>
    {children}
    <Cover visible={loading}/>
  </Pane>
)

export default Loader
