import React from 'react'
import connect from './connect'
import {useMount} from 'common/utils'

function OrderCenter(props) {
  useMount(() => {
    console.log(props.pizzaSizes)
  })

  return (
    <div>OrderCenter</div>
  )
}

export default connect(OrderCenter)
