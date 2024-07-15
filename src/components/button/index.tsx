import type {ComponentProps} from 'react'
import type {IconGlyph} from '@/components/icon'
import Icon from '../icon'
import {Button} from './styles.scss'

type Props = ComponentProps<'button'> & {
  icon?: IconGlyph
  children?: string
}

const PrimaryButton = ({icon, children, ...rest}: Props) => (
  <Button hasText={!!children} {...rest}>
    {icon ? <Icon glyph={icon} fill='white'/> : null}
    {children}
  </Button>
)

export default PrimaryButton
