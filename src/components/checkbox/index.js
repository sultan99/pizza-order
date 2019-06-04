import Input from './input.sc'
import Label from './label.sc'
import React from 'react'
import Text from './text.sc'

const Checkbox = ({checked, text, ...rest}) => (
  <Label checked={checked}>
    <Input type="checkbox" checked={checked} {...rest}/>
    <Text>{text}</Text>
  </Label>
)

export default Checkbox
