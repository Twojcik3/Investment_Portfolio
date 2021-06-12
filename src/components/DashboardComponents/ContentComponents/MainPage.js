import React from 'react';

const MainPage = (props) => {
    return (
        <div className="mainPage offset-md-3 ">
            <div className="summary">Podsumowanie</div>
            <div className="wholeWallet">Wartość całego portfela:</div>
            <div className="cash-summary">Gotówka {(props.totalCurrentCash).toFixed(2)}</div>
            <div className="security-summary">Wartość portfela akcji</div>
            <div className="crypto-summary">Wartość portfela kryptowalut {(props.totalCrypto.toFixed(2))}</div>
            <div className="precious-summary">Wartość portfela metali szlachetnych: {props.totalMetals}</div>
        </div>
    )
}

export default MainPage;