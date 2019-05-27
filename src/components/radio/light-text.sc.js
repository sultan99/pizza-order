import styled from 'styled-components'
import {ifProp} from 'common/style'

const LightText = styled.span`
  color: ${ifProp(`checked`, `white`, `#b7b7b7`)};
  vertical-align: middle;
`

export default LightText
