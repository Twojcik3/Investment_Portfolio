import React from 'react';
import ItemRow from './ItemRow';

const QuotesItems = (props) => {
    let tabRates = [];

    if (props.type === "Currencies") {
        tabRates = props.currencyRates.map(el => <ItemRow key={el.code} name={el.code} currency='PLN' rates={el.mid} change24="-" />)
    } else if (props.type === "CryptoCurrencies") {
        tabRates = props.cryptoRates.map(el => <ItemRow key={el.id} name={el.name} currency='USD' rates={el.current_price} change24={el.price_change_percentage_24h} />)
    } else if (props.type === "PreciousMetals") {
        tabRates = props.metalsRates.map(el => <ItemRow key={el.id} name={el.name} currency='USD' rates={el.price} change24="-" />)
    }

    console.log(tabRates)
    return (
        <div className="Quotes-container col-md-12">
            {tabRates}
        </div>
    )
}

export default QuotesItems;