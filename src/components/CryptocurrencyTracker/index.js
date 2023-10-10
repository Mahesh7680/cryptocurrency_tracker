import {Component} from 'react'
import CryptocurrenciesList from '../CryptocurrenciesList/index'
import './index.css'

class FileName extends Component {
  render() {
    return (
      <div className="main-container">
        <CryptocurrenciesList />
      </div>
    )
  }
}

export default FileName
