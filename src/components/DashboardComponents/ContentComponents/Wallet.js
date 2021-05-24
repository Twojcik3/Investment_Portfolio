import React from 'react';
import AddItem from './WalletComponents/AddItem';
import ItemsContainer from './WalletComponents/ItemsContainer'

const Wallet = (props) => {
    return (
        <div className="Wallet col-md-12 col-lg-12">
            <AddItem currencyRates={props.currencyRates} cryptoCurrencyRates={props.cryptoCurrencyRates} metalsRates={props.metalsRates} items={props.items} />
            <ItemsContainer items={props.items} currencyRates={props.currencyRates} cryptoCurrencyRates={props.cryptoCurrencyRates} metalsRates={props.metalsRates} />
        </div>
    )
}

export default Wallet;