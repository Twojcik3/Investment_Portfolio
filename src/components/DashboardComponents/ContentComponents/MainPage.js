import React from 'react';

const MainPage = (props) => {
    let profit = (props.totalCurrentWallet - props.totalWallet).toFixed(2);
    let percentage = ((profit / props.totalWallet) * 100).toFixed(2)
    let colorText = "";
    if (profit > 0) {
        colorText = "green"
    } else {
        colorText = "red"
    }
    return (
        <div className="mainPage">
            <div className="summary">Podsumowanie</div>
            <div className="wholeWallet">Wartość całego portfela: {props.totalCurrentWallet ? (props.totalCurrentWallet).toFixed(2) : 0} zł</div>
            <div className="cash-summary">Gotówka {props.totalCurrentCash ? (props.totalCurrentCash).toFixed(2) : 0} zł</div>
            <div className="security-summary">Wartość portfela akcji</div>
            <div className="crypto-summary">Wartość portfela kryptowalut {props.totalCurrentCrypto ? (props.totalCurrentCrypto).toFixed(2) : 0} zł</div>
            <div className="precious-summary">Wartość portfela metali szlachetnych: {props.totalCurrentMetals ? (props.totalCurrentMetals).toFixed(2) : 0} zł</div>
            <div className="profit-loss_summary">Zysk/Strata: <span className={colorText}>{profit} zł</span></div>
            <div className="profit-loss_summary_percentage">Zysk/Strata %: <span className={colorText}>{percentage}%</span></div>
        </div>
    )
}

export default MainPage;