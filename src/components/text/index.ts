import styled from 'styled-components'
import {prop} from '@/common/style'

const Text = styled.p<Props>`
  color: ${prop(`color`, `#b7b7b7`)};
  font-size: ${prop(`size`, `28px`)};
  font-weight: normal;
  margin-bottom: 20px;
  margin-top: 8px;
`

export default Text

interface Props {
  color?: string
  size?: string
}