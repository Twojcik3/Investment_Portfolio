import React from 'react';
import WalletItem from './WalletItem';
const ItemsContainer = (props) => {
    const currencies = props.items.filter(el => el.category === "Currencies");
    const preciouses = props.items.filter(el => el.category === "PreciousMetals");
    const cryptos = props.items.filter(el => el.category === "CryptoCurrencies");
    const gpwexchanges = props.items.filter(el => el.category === "GPWExchange");
    return (
        <div className="Items-container col-lg-12">
            <div className="Items-group">
                <h2>Gotówka</h2>
                <div>Wallet item</div>
                <div className="Items-group_summary">Summary</div>
            </div>
            <div className="Items-group">
                <h2>Metale szlachetne</h2>
                <div>Wallet item</div>
                <div className="Items-group_summary">Summary</div>
            </div>
            <div className="Items-group">
                <h2>Kryptowaluty</h2>
                <div>Wallet item</div>
                <div className="Items-group_summary">Summary</div>
            </div>
            <div className="Items-group">
                <h2>Akcje</h2>
                <div>Wallet item</div>
                <div className="Items-group_summary">Summary</div>
            </div>
        </div>
    )
}

export default ItemsContainer;