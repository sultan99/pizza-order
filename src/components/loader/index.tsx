import type {ComponentProps} from 'react'
import {Cover, Pane} from './styles.scss'

type Props = ComponentProps<'div'> & {
  loading: boolean
}

const Loader = ({loading, children}: Props) => (
  <Pane>
    {children}
    <Cover isVisible={loading}/>
  </Pane>
)

export default Loader
