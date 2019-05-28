import styled from 'styled-components'
import {ifProp} from 'common/style'

const Cover = styled.div`
  background-color: rgba(255, 255, 255, 0.5);
  bottom: 0;
  display: ${ifProp(`visible`, `block`, `none`)};
  left: 0;
  position: absolute;
  right: 0;
  top: 0;
`

export default Cover
