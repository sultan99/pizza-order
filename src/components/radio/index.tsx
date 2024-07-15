import type {ComponentProps} from 'react'
import {DarkText, Input, Label, LightText} from './styles.scss'

type RadioParams = ComponentProps<'input'> & {
  checked: boolean
  subtext: string
  text: string
}

const Radio = ({checked, text, subtext, ...rest}: RadioParams) => (
  <Label checked={checked}>
    <Input type='radio' checked={checked} {...rest}/>
    <DarkText>{text}</DarkText>
    <LightText checked={checked}>{subtext}</LightText>
  </Label>
)

export default Radio
export {RadioGroup} from './styles.scss'
