import App from 'containers/app'
import React from 'react'
import store from 'store'
import {Provider} from 'react-redux'
import {render} from 'react-dom'

render(
  <Provider store={store}>
    <App/>
  </Provider>,
  document.getElementById(`app`)
)
