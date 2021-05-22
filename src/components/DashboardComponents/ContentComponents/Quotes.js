import React, { useState } from 'react';
import QuotesItems from './QuotesComponents/QuotesItems';

const Quotes = (props) => {
    const [inputSwitch, setInputSwitch] = useState("Currencies")

    const currencyRates = props.currencyRates;
    const cryptoRates = props.cryptoCurrencyRates;
    const metalsRates = props.metalsRates;

    const handleSwitch = (e) => {
        setInputSwitch(e.target.value)
    }

    return (
        <div className="Qutoes-content">
            <div className="Quotes-input">
                <select value={inputSwitch} onChange={handleSwitch}>
                    <option value="Currencies" selected>Waluty obce</option>
                    <option value="CryptoCurrencies">Kryptowaluty</option>
                    <option value="PreciousMetals" >Metale szlachetne</option>
                    <option value="GPWExchange" >Akcje GPW</option>
                </select>
            </div>
            <div className="Quotes-rates">
                <div className="Quotes-header col-md-12">
                    <div className="Quotes-header_name col-md-3">Nazwa</div>
                    <div className="Quotes-header_price col-md-2">Cena</div>
                    <div className="Quotes-header_currency col-md-2">Waluta</div>
                    <div className="Quotes-header_change col-md-2">24h %</div>
                </div>
                <QuotesItems currencyRates={currencyRates} cryptoRates={cryptoRates} metalsRates={metalsRates} type={inputSwitch} />
            </div>
        </div>
    )
}

export default Quotes;