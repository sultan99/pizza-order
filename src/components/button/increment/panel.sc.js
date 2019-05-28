import styled from 'styled-components'

const Panel = styled.div`
  display: inline-block;
  font-family: 'Rationale', sans-serif;

  > button:first-child {
    border-radius: 25px 0 0 25px;
  }

  > button:last-child {
    border-radius: 0 25px 25px 0;
  }
`

export default Panel
