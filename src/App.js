import {BrowserRouter, Route, Switch} from 'react-router-dom'

import CryptocurrenciesList from './components/CryptocurrenciesList'
import CryptocurrencyItem from './components/CryptocurrencyItem'
import CryptocurrencyTracker from './components/CryptocurrencyTracker'
import './App.css'

const App = () => (
  <BrowserRouter>
    <CryptocurrencyTracker />
    {/* <CryptocurrenciesList />
    {/* <Switch>
      <Route p component={CryptocurrenciesList} />
    </Switch> */}
  </BrowserRouter>
)

export default App
