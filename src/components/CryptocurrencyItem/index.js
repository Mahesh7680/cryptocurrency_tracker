import './index.css'

const CryptocurrencyItem = props => {
  const {eachItem} = props
  const {currencyName, usdValue, euroValue, currencyLogo} = eachItem

  return (
    <li className="card-items">
      <div className="currency-image">
        <img alt={currencyName} src={currencyLogo} width={40} height={40} />
        <p>{currencyName}</p>
      </div>
      <p>{usdValue}</p>
      <p>{euroValue}</p>
    </li>
  )
}

export default CryptocurrencyItem
