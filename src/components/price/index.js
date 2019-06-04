import styled from 'styled-components'
import {prop} from 'common/style'

const Price = styled.span`
  color: ${prop(`color`, `black`)};
  font-family: 'Rationale', sans-serif;
  font-size: ${prop(`size`, `50px`)};
`

export default Price
