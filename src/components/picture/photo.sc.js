import {prop} from 'common/style'
import styled from 'styled-components'

const Image = styled.div`
  background-image: url(${prop(`image`)});
  background-size: cover;
  height: 100vh;
  left: 0;
  position: fixed;
  top: 0;
  width: 550px;
`

export default Image
