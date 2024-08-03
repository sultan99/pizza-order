import logo from './logo.png'
import {Circle} from './styles.scss'

const AppLogo = () => (
  <Circle>
    <img
      alt='Logo, slice of a pizza'
      height='35px'
      src={logo}
      width='35px'
    />
  </Circle>
)

export default AppLogo
