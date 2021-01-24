import Input from './input.sc'
import Label from './label.sc'
import React, {FC} from 'react'
import Text from './text.sc'
import {OnChangeEvent} from '@/types/common'

const Checkbox: CheckboxType = ({checked, text, ...rest}) => (
  <Label checked={checked}>
    <Input type="checkbox" checked={checked} {...rest}/>
    <Text>{text}</Text>
  </Label>
)

export default Checkbox

type CheckboxType = FC<Props>

interface Props {
  checked: boolean
  name: string
  onChange: OnChangeEvent
  text: string
  value: string
}