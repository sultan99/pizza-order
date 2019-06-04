import Badge from './badge.sc'
import styled from 'styled-components'

const Section = styled.div`
  align-items: center;
  display: flex;

  &:hover {
    > :first-child > #btn-remove {
      display: inline-block;
    }

    > :first-child > ${Badge} {
      display: none;
    }
  }

  > :first-child {
    margin-right: 24px;
    min-width: 65px;
    text-align: center;

    > #btn-remove {
      display: none;
    }
  }
`

export default Section
