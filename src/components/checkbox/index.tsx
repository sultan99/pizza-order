import type {ComponentProps} from 'react'
import {Input, Label, Text} from './styles.scss'

type CheckboxProps = ComponentProps<'input'> & {
  checked: boolean
  text: string
}

const Checkbox = ({checked, text, ...rest}: CheckboxProps) => (
  <Label checked={checked}>
    <Input type='checkbox' checked={checked} {...rest}/>
    <Text>{text}</Text>
  </Label>
)

export {CheckboxGroup} from './styles.scss'

export default Checkbox
