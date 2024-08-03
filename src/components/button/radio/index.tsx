import type {ChangeEvent, ComponentProps} from 'react'
import {DarkText, Input, Label, LightText} from './styles.scss'

type RadioButtonParams = ComponentProps<'input'> & {
  checked: boolean
  subtext: string
  text?: string
}

export type RadioButtonChangeEvent<T> = ChangeEvent<HTMLInputElement> & {
  target: {value: T}
}

const RadioButton = ({checked, text, subtext, value, ...rest}: RadioButtonParams) => (
  <Label checked={checked}>
    <Input type='radio' value={value} checked={checked} {...rest}/>
    <DarkText>{text || value}</DarkText>
    <LightText checked={checked}>{subtext}</LightText>
  </Label>
)

export {RadioButtonGroup} from './styles.scss'

export default RadioButton
