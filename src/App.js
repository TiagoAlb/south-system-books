import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import store from '../src/store'
import Default from './layouts/Default'
import './App.css'

function App() {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <Default />
      </Provider>
    </BrowserRouter >
  )
}

export default App
