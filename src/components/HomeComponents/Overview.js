import React, { useState, useEffect } from 'react';
import QuotesTable from '../HomeComponents/QuotesTable'

const OverView = () => {
    const [currencyTable, setCurrencyTable] = useState([]);
    const [cryptoCureencyTable, setCryptoCurrencyTable] = useState([]);
    //const [indexesTable, setIndexesTable] = useState([]);
    const [preciousMetals, setPreciousMetals] = useState([]);

    const indexesTable = [
        { name: 'DAX', rates: 15000, currency: 'PKT', change24: 1 },
        { name: 'WIG20', rates: 2050, currency: 'PKT', change24: -0.5 },
        { name: 'NASDAQ', rates: 14000, currency: 'PKT', change24: 1.2 },
        { name: 'S&P 500', rates: 4200, currency: 'PKT', change24: 1.5 },
    ]

    const NBPAPI = 'http://api.nbp.pl/api/exchangerates/tables/A/';
    const coinGeckoAPI = 'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=5&page=1&sparkline=false';
    const preciousMetalsAPI = 'https://api.metals.live/v1/spot';

    useEffect(() => {
        let mounted = true;
        getCurrencyRates(mounted);
        getCryptoCurrencyRates(mounted);
        getPreciousMetals(mounted);
        return () => {
            mounted = false;
        }
    }, [])

    const getPreciousMetals = async (mounted) => {
        if (mounted) {
            const resposne = await fetch(preciousMetalsAPI);
            const data = await resposne.json();
            const metals = [
                {
                    id: 0,
                    name: "Złoto",
                    price: 0
                },
                {
                    id: 1,
                    name: "Platyna",
                    price: 0
                },
                {
                    id: 2,
                    name: "Srebro",
                    price: 0
                },
                {
                    id: 3,
                    name: "Pallad",
                    price: 0
                }

            ];
            metals[0].price = data[0].gold;
            metals[1].price = data[1].platinum;
            metals[2].price = data[2].silver;
            metals[3].price = data[3].palladium;
            console.log(metals)
            setPreciousMetals(metals);
        }
    }
    const getCryptoCurrencyRates = async (mounted) => {
        if (mounted) {
            const response = await fetch(coinGeckoAPI);
            const data = await response.json();
            setCryptoCurrencyTable(data);
        }
    }
    const getCurrencyRates = async (mounted) => {
        if (mounted) {
            const response = await fetch(NBPAPI);
            const data = await response.json();
            setCurrencyTable(data[0].rates)
        }
    }


    return (
        <div className="col-lg-6 overview col-sm-12 col-xs-12">
            <ul className="nav nav-tabs" role="tablist">
                <li className={(window.location.href.substr(window.location.href.length - 4, 4) === "1tab") ? "active" : "none-active"} role="presentation">
                    <a href="#1tab" role="tab" data-toggle="tab">Indeksy</a>
                </li>
                <li className={(window.location.href.substr(window.location.href.length - 4, 4) === "2tab") ? "active" : "none-active"} role="presentation">
                    <a href="#2tab" role="tab" data-toggle="tab">Waluty</a>
                </li>
                <li className={(window.location.href.substr(window.location.href.length - 4, 4) === "3tab") ? "active" : "none-active"} role="presentation">
                    <a href="#3tab" role="tab" data-toggle="tab">Kryptowaluty</a>
                </li>
                <li className={(window.location.href.substr(window.location.href.length - 4, 4) === "4tab") ? "active" : "none-active"} role="presentation">
                    <a href="#4tab" role="tab" data-toggle="tab">Metale szlachetne</a>
                </li>
            </ul>
            <div className="tab-content col-lg-12 col-sm-12 col-xs-12">
                <div className={(
                    (window.location.href.substr(window.location.href.length - 4, 4) !== "2tab") &&
                    (window.location.href.substr(window.location.href.length - 4, 4) !== "3tab") &&
                    (window.location.href.substr(window.location.href.length - 4, 4) !== "4tab"))
                    ? "tab-pane active" : "tab-pane"} id="1tab">
                    <QuotesTable message="Zawartość Indeksy" indexes={indexesTable} type="indexes" />
                </div>
                <div className={(window.location.href.substr(window.location.href.length - 4, 4) === "2tab") ? "tab-pane active" : "tab-pane"} id="2tab">
                    <QuotesTable message="Zawartość waluty" currencies={currencyTable} type="currencies" />
                </div>
                <div className={(window.location.href.substr(window.location.href.length - 4, 4) === "3tab") ? "tab-pane active" : "tab-pane"} id="3tab">
                    <QuotesTable message="Zawartość kryptowaluty" cryptocurrencies={cryptoCureencyTable} type="cryptocurrency" />
                </div>
                <div className={(window.location.href.substr(window.location.href.length - 4, 4) === "4tab") ? "tab-pane active" : "tab-pane"} id="4tab">
                    <QuotesTable message="Zawartość metale" precious={preciousMetals} type="preciousMetals" />
                </div>
            </div>
        </div>
    )
}

export default OverView;