import React from 'react'
import connect from './connect'
import {useMount} from 'common/hooks'

const pickInfo = props => ({
  pizzaName: props.pizzaName[0],
  quantity: props.quantity,
  toppings: props.selectedToppings.map(topping => topping.name),
  subtotal: props.total,
})

function OrderCenter(props) {
  useMount(() => {
    props.setPizzaSize(`SMALL`)
  })
  const [pizzaName, pizzaDesc] = props.pizzaName
  const isSizeChecked = name => name === props.pizzaSize
  const sizeInput = name => (
    <label>
      <input
        checked={isSizeChecked(name)}
        name="size"
        onChange={({target}) => props.setPizzaSize(target.value)}
        type="radio"
        value={name}
      />
      {name}
    </label>
  )
  if (props.isLoading) {
    return <div>Loading...</div>
  }
  return (
    <div>
      <h1>{pizzaName}</h1>
      <p>{pizzaDesc}</p>
      <h4>SIZES</h4>
      <p>
        {sizeInput(`SMALL`)}
        {sizeInput(`MEDIUM`)}
        {sizeInput(`LARGE`)}
      </p>
      <h4>TOPPINGS</h4>
      <p>
        {props.toppings.map((topping, key) =>
          <label key={key}>
            <input
              checked={topping.selected}
              name="toppings"
              onChange={({target}) => props.checkTopping(target.value)}
              type="checkbox"
              value={topping.name}
            />
            {topping.name}
          </label>
        )}
      </p>
      <p>
        ${props.total}
      </p>
      <p>
        <button onClick={() => props.setPizzaQuantity(-1)}>-</button>
        {props.quantity}
        <button onClick={() => props.setPizzaQuantity(1)}>+</button>
      </p>
      <p>
        <button onClick={() => props.addOrder(pickInfo(props)) && props.setPizzaSize(`SMALL`)}>
          ORDER PLACE
        </button>
      </p>
    </div>
  )
}

export default connect(OrderCenter)
