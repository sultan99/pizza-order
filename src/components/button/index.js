import Button from './button.sc'
import Icon from '../icon'
import React from 'react'

/**
 * @type {import('./types').SexyButtonType}
 */
const SexyButton = ({icon, children, ...rest}) => (
  <Button hasText={!children} {...rest}>
    {icon && <Icon src={icon}/>}
    {children && <span>{children}</span>}
  </Button>
)

export default SexyButton
