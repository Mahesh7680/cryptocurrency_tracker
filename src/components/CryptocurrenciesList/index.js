import {Component} from 'react'
import {Link} from 'react-dom'
import Loader from 'react-loader-spinner'
import CryptocurrencyItem from '../CryptocurrencyItem'
import './index.css'
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'

const fakeData = [
  {
    id: 1,
    currency: 'Bitcoin',
    usd: 44444,
    euro: 574,
  },
  {
    id: 2,
    currency: 'etherium',
    usd: 1232,
    euro: 577,
  },
  {
    id: 3,
    currency: 'Bitcoin',
    usd: 4,
    euro: 74,
  },
]

class CryptocurrenciesList extends Component {
  state = {currencyList: [], isLoading: true}

  componentDidMount() {
    this.getCurrency()
  }

  getCurrency = async () => {
    const response = await fetch(
      'https://apis.ccbp.in/crypto-currency-converter',
    )
    const data = await response.json()
    console.log(data)
    const updatedData = data.map(each => ({
      id: each.id,
      currencyName: each.currency_name,
      usdValue: each.usd_value,
      euroValue: each.euro_value,
      currencyLogo: each.currency_logo,
    }))
    this.setState({currencyList: updatedData, isLoading: false})
  }

  render() {
    const {currencyList, isLoading} = this.state
    // const {currencyName, usdValue, euroValue, currencyLogo} = currencyList

    return (
      <div>
        <h1>Cryptocurrency Tracker</h1>
        <img
          alt="cryptocurrency"
          src="https://assets.ccbp.in/frontend/react-js/cryptocurrency-bg.png"
          width={400}
        />
        <div className="card-container">
          <ul className="table-names-container">
            <p>Coin Type</p>
            <p>USD</p>
            <p>EURO</p>
          </ul>
          <ul>
            {isLoading ? (
              <div data-testid="loader">
                <Loader type="TailSpin" height={50} width={50} />
              </div>
            ) : (
              currencyList.map(each => (
                <CryptocurrencyItem key={each.id} eachItem={each} />
              ))
            )}
          </ul>
        </div>
      </div>
    )
  }
}

export default CryptocurrenciesList
