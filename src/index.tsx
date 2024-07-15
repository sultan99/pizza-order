import PizzaCraft from '@/pizza-craft'
import PizzaOrder from '@/pizza-order'
import store from '@/store'
import {PageLayout} from './styles.scss'
import {Provider} from 'react-redux'
import {createRoot} from 'react-dom/client'

const rootElement = document.getElementById('app')

if (!rootElement) {
  throw new Error('No root element found')
}

const App = () => (
  <Provider store={store}>
    <PageLayout>
      <PizzaOrder/>
      <PizzaCraft/>
    </PageLayout>
  </Provider>
)

createRoot(rootElement).render(<App/>)
