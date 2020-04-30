import scrollBar from '@/components/scroll-bar/index.sc'
import styled from 'styled-components'

const Panel = styled.div`
  box-sizing: border-box;
  height: 100%;
  min-width: 660px;
  overflow-y: auto;
  padding: 40px 100px;

  ${scrollBar}
`

export default Panel
