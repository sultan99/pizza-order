import React, {FC} from 'react'
import Section from './section.sc'
import Text from '@/components/text'
import Title from '@/components/title'
import connect from './connect'

const PizzaInfo: PizzaInfoType = ({name, description}) => (
  <Section>
    <Title>{name}</Title>
    <Text>{description}</Text>
  </Section>
)

export default connect(PizzaInfo)

type PizzaInfoType = FC<Props>

interface Props {
  name: string
  description: string
}