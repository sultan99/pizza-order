import styled from 'styled-components'

const Button = styled.button`
  background-color: #f5f5f5;
  border: 0;
  color: #b7b7b7;
  cursor: pointer;
  font-size: 32px;
  font-weight: 400;
  height: 50px;
  padding-top: 7px;
  user-select: none;
  width: 50px;

  &:hover {
    background-color: #ececec;
    color: black;
  }
  &:focus {
    outline: none;
  }
`

export default Button
