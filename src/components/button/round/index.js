import styled, {css} from 'styled-components'
import iconsList from 'components/icon/svg'

const hover = src => css`
  &:hover {
    background-color: #ff552f;
    color: rgba(0,0,0,0);
    background-image: url(${iconsList[src].url});
    background-position: center;
    background-repeat: no-repeat;
    background-size: 20px;
    box-shadow: 0px 2px 2px 2px rgba(0,0,0,0.1);
    margin-top: -2px;
  }
`

const RoundButton = styled.button`
  background-color: #ffbf44;
  border-radius: 50%;
  border: 0;
  cursor: pointer;
  font-family: 'Rationale', sans-serif;
  font-size: 22px;
  font-weight: 400;
  height: 40px;
  width: 40px;

  ${prop => prop.icon ? hover(prop.icon) : ``}

  &:active {
    box-shadow: none;
    margin-top: 0px;
  }
  &:focus {
    outline: none;
  }
`

export default RoundButton
