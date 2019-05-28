import React from 'react'
import Section from './section.sc'
import Text from 'components/text'
import Title from 'components/title'
import connect from './connect'

function PizzaDescription({pizzaName}) {
  const [name, description] = pizzaName
  return (
    <Section>
      <Title>{name}</Title>
      <Text>{description}</Text>
    </Section>
  )
}

export default connect(PizzaDescription)
