import React from 'react';
import Item from '../HomeComponents/Item'

const QuotesTable = (props) => {
    let currencyTab = []
    let rightCurrency = [];
    let cryptoTab = [];
    let precious = [];
    let indexes = [];
    if (props.type === "currencies") {
        currencyTab = props.currencies.filter(el => el.code === 'EUR' || el.code === 'USD' || el.code === "GBP" || el.code === "CHF" || el.code === 'NOK');
        rightCurrency = currencyTab.map(el => <Item key={el.code} name={el.code} rates={el.mid} />)

    }
    if (props.type === "cryptocurrency") {
        cryptoTab = props.cryptocurrencies.map(el => <Item key={el.symbol} name={el.name} rates={el.current_price} currency='USD' change24={el.price_change_percentage_24h} />)
    }
    if (props.type === "indexes") {
        indexes = props.indexes.map(el => <Item key={el.name} name={el.name} rates={el.rates} currency={el.currency} change24={el.change24} />)
    }

    if (props.type === "preciousMetals") {
        precious = props.precious.map(el => <Item key={el.id} name={el.name} rates={el.price} currency='USD' />)
    }
    return (
        <div >
            <div>{props.type === "currencies" ? rightCurrency : <div />}</div>
            <div>{props.type === "cryptocurrency" ? cryptoTab : <div />}</div>
            <div>{props.type === "indexes" ? indexes : <div />}</div>
            <div>{props.type === "preciousMetals" ? precious : <div />}</div>
        </div>
    )
}

export default QuotesTable;