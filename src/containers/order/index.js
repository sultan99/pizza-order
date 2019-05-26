import React from 'react'
import connect from './connect'
import {useMount} from 'common/hooks'

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
  return (
    <div>
      <h1>{pizzaName}</h1>
      <p>{pizzaDesc}</p>
      <div>
        <h4>SIZES</h4>
        {sizeInput(`SMALL`)}
        {sizeInput(`MEDIUM`)}
        {sizeInput(`LARGE`)}
      </div>
      <div>
        <h4>TOPPINGS</h4>
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
      </div>
      <p>
        ${props.total}
      </p>
      <p>
        <button onClick={() => props.setPizzaQuantity(-1)}>-</button>
        {props.quantity}
        <button onClick={() => props.setPizzaQuantity(1)}>+</button>
      </p>
    </div>
  )
}

export default connect(OrderCenter)
