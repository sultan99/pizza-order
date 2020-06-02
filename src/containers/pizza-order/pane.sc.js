import scrollBar from '@/components/scroll-bar/index.sc'
import styled from 'styled-components'
import {ifProp} from '@/common/style'

const Pane = styled.div`
  background-color: #f5f5f5;
  box-sizing: border-box;
  height: 100%;
  left: ${ifProp(`visible`, `0`, `-600px`)};
  overflow-y: auto;
  padding: 50px 40px;
  position: absolute;
  top: 0;
  transition: left 0.3s linear;
  width: 100%;

  > div + div {
    margin-top: 65px;
  }

  ${scrollBar}
`

export default Pane
