import {Text, Title} from '@/components/misc'
import {useStore} from '@/common/redux'

const PizzaInfo = () => {
  const name = useStore('pizza.name')
  const description = useStore('pizza.description')

  return (
    <div>
      <Title>{name}</Title>
      <Text>{description}</Text>
    </div>
  )
}
export default PizzaInfo
