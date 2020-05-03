import Button from './button.sc'
import Icon from '../icon'
import React from 'react'

/**
 * @type {import('./types').SexyButton}
 */
const SexyButton = ({icon, children, ...rest}) => (
  <Button noText={!children} {...rest}>
    {icon && <Icon src={icon}/>}
    {children && <span>{children}</span>}
  </Button>
)

export default SexyButton
