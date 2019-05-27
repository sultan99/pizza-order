import React from 'react'
import connect from './connect'

const toDetails = onRemove => (order, key) => (
  <div key={key}>
    <h2>{order.pizzaName} x {order.quantity}</h2>
    <p>{order.toppings.join(`, `)}</p>
    <div>{order.subtotal}</div>
    <div>
      <button onClick={() => onRemove(order.id)}>
        Remove
      </button>
    </div>
  </div>
)

function Cart(props) {
  if (!props.orders.length) return null
  return (
    <div>
      {props.orders.map(toDetails(props.removeOrder))}
      <p>Total: ${props.total}</p>
    </div>
  )
}

export default connect(Cart)
