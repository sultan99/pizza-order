import scrollBar from 'components/scroll-bar/index.sc'
import styled from 'styled-components'

const Panel = styled.div`
  box-sizing: border-box;
  min-width: 650px;
  padding: 50px 100px;
  overflow-y: auto;
  height: 100%;

  ${scrollBar}
`

export default Panel
