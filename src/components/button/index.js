import styled from 'styled-components'

const Button = styled.button`
  background-color: #ff5c38;
  border-radius: 35px;
  border: 0;
  color: white;
  cursor: pointer;
  font-family: 'Rationale', sans-serif;
  font-size: 30px;
  font-weight: 400;
  height: 70px;
  padding: 0 50px;
  user-select: none;

  &:hover {
    background-color: #ff552f;
    box-shadow: 0px 2px 2px 2px rgba(0,0,0,0.1);
    margin-top: -2px;
  }
  &:active {
    box-shadow: none;
    margin-top: 0px;
  }
  &:focus {
    outline: none;
  }
`

export default Button
