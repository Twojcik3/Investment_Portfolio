import React from 'react';

const MainPage = (props) => {
    return (
        <div className="mainPage offset-md-3 ">
            <div className="summary">Podsumowanie</div>
            <div className="wholeWallet">Wartość całego portfela:</div>
            <div className="cash-summary">Gotówka {(props.totalCurrentCash).toFixed(2)}</div>
            <div className="security-summary">Wartość portfela akcji</div>
            <div className="crypto-summary">Wartość portfela kryptowalut {(props.totalCurrentCrypto).toFixed(2)}</div>
            <div className="precious-summary">Wartość portfela metali szlachetnych: {(props.totalCurrentMetals).toFixed(2)}</div>
        </div>
    )
}

export default MainPage;