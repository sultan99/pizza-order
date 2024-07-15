import type {ComponentProps} from 'react'
import {Button, Panel, Text} from './styles.scss'

type Props = Omit<ComponentProps<'div'>, 'onClick'> & {
  onClick: (value: number) => void
}

const IncButton = ({children, onClick}: Props) => (
  <Panel>
    <Button onClick={() => onClick(-1)}>-</Button>
    <Text>{children}</Text>
    <Button onClick={() => onClick(1)}>+</Button>
  </Panel>
)

export default IncButton
