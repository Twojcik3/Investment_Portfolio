import React from 'react';
import AddItem from './WalletComponents/AddItem';

const Wallet = (props) => {
    return (
        <div className="Wallet col-md-12 col-lg-12">
            <AddItem currencyRates={props.currencyRates} cryptoCurrencyRates={props.cryptoCurrencyRates} metalsRates={props.metalsRates} />
        </div>
    )
}

export default Wallet;