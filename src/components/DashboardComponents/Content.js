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
    const [totalWalletAmount, setTotalWallet] = useState();
    const [totalCurrentWalletAmount, setTotalCurrentWallet] = useState();
    const [totalCash, setTotalCash] = useState();
    const [totalCurrentCash, setTotalCurrentCash] = useState();
    const [totalMetals, setTotalMetals] = useState();
    const [totalCurrentMetals, setTotalCurrentMetals] = useState();
    const [totalCrypto, setTotalCrypto] = useState();
    const [totalCurrentCrypto, setTotalCurrentCrypto] = useState();
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
        calculateTotalWallet();
        calculateTotalCategory();
        calculateTotalCash();
        calculateTotalMetals();
        calculateTotalCrypto();
        calculateTotalCurrentWallet();
    })
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
                    name: "Z??oto",
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
    const calculateTotalWallet = () => {
        let amount = 0;
        items.forEach((el) => {
            amount += el.valuePLN;
        })
        setTotalWallet(amount)
    }
    const calculateTotalCurrentWallet = () => {
        let amount = totalCurrentCash + totalCurrentCrypto + totalCurrentMetals;
        setTotalCurrentWallet(amount);

    }
    const deleteItem = (id) => {
        const url = 'http://localhost:5000/deleteItem/' + id;
        axios.delete(url, {
            headers: {
                'Content-Type': 'application/json'
            },
            withCredentials: true
        }).then((response) => {
            console.log(response)
        }).catch((err) => {
            console.log(err)
        })
    }
    const calculateTotalCategory = () => {
        let amountCash = 0;
        let amountCrypto = 0;
        let amountMetals = 0;
        items.forEach((el) => {
            if (el.category === "Currencies") {
                amountCash += el.valuePLN;
            }
            if (el.category === "CryptoCurrencies") {
                amountCrypto += (el.valuePLN);
            }
            if (el.category === "PreciousMetals") {
                amountMetals += el.valuePLN
            }
        })
        setTotalCash(amountCash);
        setTotalCrypto(amountCrypto);
        setTotalMetals(amountMetals);
    }
    const calculateTotalCash = () => {
        let amountCashCurrent = 0;
        items.forEach((el) => {
            if (el.category === "Currencies") {
                if (el.asset == 'PLN') {
                    amountCashCurrent += el.valuePLN;
                } else {
                    let valPLN;
                    currencyTable.forEach((curr) => {
                        if (el.asset === curr.code) {
                            valPLN = el.quantity * curr.mid;
                            amountCashCurrent += valPLN;
                        }
                    })
                }
            }
        })
        // console.log(amountCashCurrent)
        setTotalCurrentCash(amountCashCurrent)
    }
    const calculateTotalMetals = () => {
        let amountCurrentMetals = 0;
        let rateUSD;
        currencyTable.forEach((el) => {
            if (el.code === "USD") {
                rateUSD = el.mid
            }
        })

        items.forEach((el) => {
            if (el.category === "PreciousMetals") {
                preciousMetals.forEach((metal) => {
                    if (metal.name === el.asset) {
                        let valPLN = el.quantity * metal.price * rateUSD;
                        amountCurrentMetals += valPLN
                    }
                })
            }
        })
        setTotalCurrentMetals(amountCurrentMetals);


    }
    const calculateTotalCrypto = () => {
        let amountCurrentCrypto = 0;
        let rateUSD;
        currencyTable.forEach((el) => {
            if (el.code === "USD") {
                rateUSD = el.mid
            }
        })
        //console.log(rateUSD)
        items.forEach((el) => {
            if (el.category === "CryptoCurrencies") {
                cryptoCureencyTable.forEach((crypto) => {
                    if (crypto.name === el.asset) {
                        let valPLN = el.quantity * crypto.current_price * rateUSD;
                        amountCurrentCrypto += valPLN;
                    }

                })
            }
        })
        //console.log(amountCurrentCrypto)
        setTotalCurrentCrypto(amountCurrentCrypto);
    }
    return (
        <div className="col-lg-8 offset-md-3 Content">
            <Switch>
                <Route path="/dashboard/" exact >
                    <MainPage
                        items={items}
                        totalWallet={totalWalletAmount}
                        totalCurrentWallet={totalCurrentWalletAmount}
                        totalCash={totalCash}
                        totalCurrentCash={totalCurrentCash}
                        totalMetals={totalMetals}
                        totalCurrentMetals={totalCurrentMetals}
                        totalCrypto={totalCrypto}
                        totalCurrentCrypto={totalCurrentCrypto}
                    />
                </Route>
                <Route path="/dashboard/wallet" >
                    <Wallet
                        currencyRates={currencyTable}
                        cryptoCurrencyRates={cryptoCureencyTable}
                        metalsRates={preciousMetals}
                        items={items}
                        totalCash={totalCash}
                        totalCurrentCash={totalCurrentCash}
                        totalMetals={totalMetals}
                        totalCurrentMetals={totalCurrentMetals}
                        totalCrypto={totalCrypto}
                        totalCurrentCrypto={totalCurrentCrypto}
                        delete={deleteItem}
                    />
                </Route>
                <Route path="/dashboard/statistic">
                    <Statistic
                        totalCurrentCash={totalCurrentCash}
                        totalCurrentMetals={totalCurrentMetals}
                        totalCurrentCrypto={totalCurrentCrypto}
                        totalCurrentWallet={totalCurrentWalletAmount}
                        items={items}
                    />
                </Route>
                <Route path="/dashboard/quotes" >
                    <Quotes
                        currencyRates={currencyTable}
                        cryptoCurrencyRates={cryptoCureencyTable}
                        metalsRates={preciousMetals}

                    />
                </Route>
                <Route path="/dashboard/info">
                    <AppInformation />
                </Route>
            </Switch>
        </div>
    )
}
export default Content;