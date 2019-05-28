import styled from 'styled-components'
import {prop} from 'common/style'

const Text = styled.p`
  color: ${prop(`color`, `#b7b7b7`)};
  font-size: ${prop(`size`, `28px`)};
  font-weight: normal;
  margin: 16px 0;
`

export default Text
