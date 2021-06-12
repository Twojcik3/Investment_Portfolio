import React, { useEffect, useState } from 'react';
import { Route, Switch } from 'react-router-dom';
import axios from 'axios';

import MainPage from './ContentComponents/MainPage';
import Wallet from './ContentComponents/Wallet';
import Statistic from './ContentComponents/Statistic';
import Quotes from './ContentComponents/Quotes';
import AppInformation from './ContentComponents/AppInformation';

const Content = () => {
    const [currencyTable, setCurrencyTable] = useState([]);
    const [cryptoCureencyTable, setCryptoCurrencyTable] = useState([]);
    const [preciousMetals, setPreciousMetals] = useState([]);
    const [items, setItems] = useState([]);
    const NBPAPI = 'http://api.nbp.pl/api/exchangerates/tables/A/';
    const coinGeckoAPI = 'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=200&page=1&sparkline=false';
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
    useEffect(() => {
        getUserItems();
    }, [])
    const getUserItems = async () => {
        axios.get('http://localhost:5000/getItems', {
            headers: {
                'Content-Type': 'application/json'
            },
            withCredentials: true
        }).then((response) => {
            const userItems = response.data;
            setItems(userItems);
        })
    }

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
        <div className="col-lg-8 offset-md-1 Content">
            <Switch>
                <Route path="/dashboard/" exact ><MainPage items={items} /></Route>
                <Route path="/dashboard/wallet" ><Wallet currencyRates={currencyTable} cryptoCurrencyRates={cryptoCureencyTable} metalsRates={preciousMetals} items={items} /></Route>
                <Route path="/dashboard/statistic"><Statistic items={items} /></Route>
                <Route path="/dashboard/quotes" ><Quotes currencyRates={currencyTable} cryptoCurrencyRates={cryptoCureencyTable} metalsRates={preciousMetals} /></Route>
                <Route path="/dashboard/info"><AppInformation /></Route>
            </Switch>
        </div>
    )
}
export default Content;