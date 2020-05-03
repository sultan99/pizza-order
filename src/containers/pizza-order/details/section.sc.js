import Badge from './badge.sc'
import styled from 'styled-components'

const Section = styled.div`
  align-items: center;
  display: flex;

  > :first-child {
    margin-right: 24px;
    min-width: 65px;
    text-align: center;

    > button {
      display: none;
    }
  }

  &:hover {
    > :first-child > button {
      display: inline-block;
    }

    > :first-child > ${Badge} {
      display: none;
    }
  }
`

export default Section
