import React from 'react';

const MainPage = () => {
    return (
        <div className="mainPage offset-md-3 ">
            <div className="summary">Podsumowanie</div>
            <div className="wholeWallet">Wartość całego portfela</div>
            <div className="cash-summary">Gotówka</div>
            <div className="security-summary">Wartość portfela akcji</div>
            <div className="crypto-summary">Wartość portfela kryptowalut</div>
            <div className="precious-summary">Wartość portfela metali szlachetnych</div>
        </div>
    )
}

export default MainPage;