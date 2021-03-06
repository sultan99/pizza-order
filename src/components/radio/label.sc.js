import styled from 'styled-components'
import {ifProp} from '@/common/style'

const Label = styled.label`
  background-color: ${ifProp(`checked`, `#ffbf44`, `#f5f5f5`)};
  cursor: pointer;
  display: inline-block;
  line-height: 50px;
  padding: 0 20px;
  position: relative;
  user-select: none;

  > span + span {
    margin-left: 10px;
  }
`

export default Label
