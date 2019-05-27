import Input from './input.sc'
import Label from './label.sc'
import React from 'react'
import Text from './text.sc'

const Checkbox = ({text, checked, ...rest}) => (
  <Label checked={checked}>
    <Input type="checkbox" {...rest} checked={checked}/>
    <Text>{text}</Text>
  </Label>
)

export default Checkbox
