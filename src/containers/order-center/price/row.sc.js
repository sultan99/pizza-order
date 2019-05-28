import styled from 'styled-components'

const Row = styled.div`
  margin-bottom: 40px;

  > div + span {
    margin-left: 40px;
  }

  > span, div {
    vertical-align: middle;
  }
`

export default Row
