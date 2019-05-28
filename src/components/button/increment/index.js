import Button from './button.sc'
import Panel from './panel.sc'
import React from 'react'
import Text from './text.sc'

const IncButton = ({children, onClick}) => (
  <Panel>
    <Button onClick={() => onClick(-1)}>-</Button>
    <Text>{children}</Text>
    <Button onClick={() => onClick(1)}>+</Button>
  </Panel>
)

export default IncButton
