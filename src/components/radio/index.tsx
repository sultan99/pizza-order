import DarkText from './dark-text.sc'
import Input from './input.sc'
import Label from './label.sc'
import LightText from './light-text.sc'
import React, {FC} from 'react'
import {OnChangeEvent} from '@/types/common'

const Radio: RadioType = ({checked, text, subtext, ...rest}) => (
  <Label checked={checked}>
    <Input type="radio" checked={checked} {...rest}/>
    <DarkText>{text}</DarkText>
    <LightText checked={checked}>{subtext}</LightText>
  </Label>
)

export default Radio

export type RadioType = FC<Props>

interface Props {
  checked: boolean
  name: string
  onChange: OnChangeEvent
  subtext: string
  text: string
  value: string
}
