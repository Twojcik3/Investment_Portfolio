import React from 'react';
import WalletItem from './WalletItem';
import WalletHeader from './WalletHeader'
const ItemsContainer = (props) => {
    const currencies = props.items.filter(el => el.category === "Currencies");
    const preciouses = props.items.filter(el => el.category === "PreciousMetals");
    const cryptos = props.items.filter(el => el.category === "CryptoCurrencies");
    const gpwexchanges = props.items.filter(el => el.category === "GPWExchange");
    const profitCash = (props.totalCurrentCash - props.totalCash).toFixed(2)

    const currenciesItems = currencies.map(el =>
        <WalletItem key={el._id} category={el.category} name={el.asset} quantity={el.quantity} valuePLN={el.valuePLN} currency={el.currency}
            currencyRates={props.currencyRates} cryptoCurrencyRates={props.cryptoCurrencyRates} metalsRates={props.metalsRates}
        />)
    const preciousesItems = preciouses.map(el =>
        <WalletItem key={el._id} category={el.category} name={el.asset} quantity={el.quantity} valuePLN={el.valuePLN} currency={el.currency}
            currencyRates={props.currencyRates} cryptoCurrencyRates={props.cryptoCurrencyRates} metalsRates={props.metalsRates}
        />)
    const cryptosItems = cryptos.map(el =>
        <WalletItem key={el._id} category={el.category} name={el.asset} quantity={el.quantity} valuePLN={el.valuePLN} currency={el.currency}
            currencyRates={props.currencyRates} cryptoCurrencyRates={props.cryptoCurrencyRates} metalsRates={props.metalsRates}
        />)
    // const gpwexchangesItems = gpwexchanges.map(el => <WalletItem key={el._id} category={el.category} name={el.asset} quantity={el.quantity} valuePLN={el.valuePLN} currency={el.currency} />)
    let colorTextCash = "";
    if (profitCash > 0) {
        colorTextCash = "green"
    } else {
        colorTextCash = "red"
    }
    return (
        <div className="Items-container">
            <div className="Items-group">
                <h2>Gotówka</h2>
                <WalletHeader />
                {currenciesItems}
                <div className="Items-group_summary">
                    <h4>Podsumowanie</h4>
                    <h5>Wartość: {(props.totalCurrentCash).toFixed(2)} PLN</h5>
                    <h6>Zysk/Strata: </h6>
                    <h6 className={colorTextCash}>{(props.totalCurrentCash - props.totalCash).toFixed(2)} PLN</h6>
                </div>
            </div>
            <div className="Items-group">
                <h2>Metale szlachetne</h2>
                <WalletHeader />
                {preciousesItems}
                <div className="Items-group_summary">
                    <h4>Podsumowanie</h4>
                    <h5>Wartość: </h5>
                    <h6>Zysk/Strata: </h6>
                    <h6 className={colorTextCash}>{(props.totalCurrentCash - props.totalCash).toFixed(2)} PLN</h6>
                </div>
            </div>
            <div className="Items-group">
                <h2>Kryptowaluty</h2>
                <WalletHeader />
                {cryptosItems}
                <div className="Items-group_summary">
                    <h4>Podsumowanie</h4>
                    <h5>Wartość: </h5>
                    <h6>Zysk/Strata: </h6>
                    <h6 className={colorTextCash}>{(props.totalCurrentCash - props.totalCash).toFixed(2)} PLN</h6>
                </div>
            </div>
            <div className="Items-group">
                <h2>Akcje</h2>
                <WalletHeader />

                <div className="Items-group_summary">
                    <h4>Podsumowanie</h4>
                    <h5>Wartość: </h5>
                    <h6>Zysk/Strata: </h6>
                    <h6 className={colorTextCash}>{(props.totalCurrentCash - props.totalCash).toFixed(2)} PLN</h6>

                </div>
            </div>
        </div>
    )
}

export default ItemsContainer;