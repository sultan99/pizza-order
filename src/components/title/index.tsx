import styled from 'styled-components'
import {prop} from '@/common/style'

const Title = styled.h1<Props>`
  font-size: ${prop(`size`, `58px`)};
  font-weight: 600;
  margin: 0;
`

export default Title

interface Props {
  size?: string
}
