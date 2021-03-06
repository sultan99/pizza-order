import styled from 'styled-components'

const RadioGroup = styled.div`
  display: inline;

  > label:first-child {
    border-radius: 25px 0 0 25px;
  }

  > label:last-child {
    border-radius: 0 25px 25px 0;
  }
`

export default RadioGroup
