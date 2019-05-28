import styled from 'styled-components'
import {prop} from 'common/style'

const SideBar = styled.div`
  background-image: url(${prop(`image`)});
  background-size: cover;
  height: 100%;
  min-width: 400px;
  position: relative;
  width: 38%;
`

export default SideBar
