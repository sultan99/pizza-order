import DarkText from './dark-text.sc'
import Input from './input.sc'
import Label from './label.sc'
import LightText from './light-text.sc'
import React from 'react'

const Radio = ({checked, text, subtext, ...rest}) => (
  <Label checked={checked}>
    <Input type="radio" checked={checked} {...rest}/>
    <DarkText>{text}</DarkText>
    <LightText checked={checked}>{subtext}</LightText>
  </Label>
)

export default Radio
