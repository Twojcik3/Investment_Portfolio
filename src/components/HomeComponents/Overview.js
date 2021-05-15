import React, { useState, useEffect } from 'react';
import QuotesTable from '../HomeComponents/QuotesTable'

const OverView = () => {
    const [currencyTable, setCurrencyTable] = useState([]);
    const [cryptoCureencyTable, setCryptoCurrencyTable] = useState([]);
    const [indexesTable, setIndexesTable] = useState([]);
    const [preciousMetals, setPreciousMetals] = useState([]);

    const NBPAPI = 'http://api.nbp.pl/api/exchangerates/tables/A/';
    const coinGeckoAPI = 'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=5&page=1&sparkline=false';

    useEffect(() => {
        getCurrencyRates();
        getCryptoCurrencyRates()
    }, [])

    const getCryptoCurrencyRates = async () => {
        const response = await fetch(coinGeckoAPI);
        const data = await response.json();
        setCryptoCurrencyTable(data)
    }
    const getCurrencyRates = async () => {
        const response = await fetch(NBPAPI);
        const data = await response.json();
        setCurrencyTable(data[0].rates)
    }


    return (
        <div className="col-lg-6 overview">
            <ul className="nav nav-tabs" role="tablist">
                <li className="active" role="presentation">
                    <a href="#1tab" role="tab" data-toggle="tab">Indeksy</a>
                </li>
                <li role="presentation">
                    <a href="#2tab" role="tab" data-toggle="tab">Waluty</a>
                </li>
                <li role="presentation">
                    <a href="#3tab" role="tab" data-toggle="tab">Kryptowaluty</a>
                </li>
                <li role="presentation">
                    <a href="#4tab" role="tab" data-toggle="tab">Metale szlachetne</a>
                </li>
            </ul>
            <div className="tab-content">
                <div className={(
                    (window.location.href.substr(window.location.href.length - 4, 4) !== "2tab") &&
                    (window.location.href.substr(window.location.href.length - 4, 4) !== "3tab") &&
                    (window.location.href.substr(window.location.href.length - 4, 4) !== "4tab"))
                    ? "tab-pane active" : "tab-pane"} id="1tab">
                    <QuotesTable message="Zawartość Indeksy" table={indexesTable} type="indexes" />
                </div>
                <div className={(window.location.href.substr(window.location.href.length - 4, 4) === "2tab") ? "tab-pane active" : "tab-pane"} id="2tab">
                    <QuotesTable message="Zawartość waluty" data={currencyTable} type="currencies" />
                </div>
                <div className={(window.location.href.substr(window.location.href.length - 4, 4) === "3tab") ? "tab-pane active" : "tab-pane"} id="3tab">
                    <QuotesTable message="Zawartość kryptowaluty" data={cryptoCureencyTable} type="cryptocurrency" />
                </div>
                <div className={(window.location.href.substr(window.location.href.length - 4, 4) === "4tab") ? "tab-pane active" : "tab-pane"} id="4tab">
                    <QuotesTable message="Zawartość metale" data={preciousMetals} type="preciousMetals" />
                </div>
            </div>
        </div>
    )
}

export default OverView;