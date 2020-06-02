import React from 'react'
import Section from './section.sc'
import Text from '@/components/text'
import Title from '@/components/title'
import connect from './connect'

const PizzaInfo = ({name, description}) => (
  <Section>
    <Title>{name}</Title>
    <Text>{description}</Text>
  </Section>
)

export default connect(PizzaInfo)
