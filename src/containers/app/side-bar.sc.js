import styled from 'styled-components'
import {prop} from 'common/style'

const SideBar = styled.div`
  background-image: url(${prop(`image`)});
  background-size: cover;
  height: 100%;
  min-width: 400px;
  width: 38%;
  position: relative;
`

export default SideBar
