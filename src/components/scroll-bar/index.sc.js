import {css} from 'styled-components'

const scrollBar = css`
  ::-webkit-scrollbar {
    width: 10px;
  }

  ::-webkit-scrollbar-track {
    display: none;
  }

  ::-webkit-scrollbar-thumb {
    background-color: rgba(0,0,0,0.15);
    border-radius: 5px;

    &:hover {
      background-color: rgba(0,0,0,0.25);
    }
  }
`

export default scrollBar
