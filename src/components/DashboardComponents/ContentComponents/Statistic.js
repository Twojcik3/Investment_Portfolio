import React from 'react';

const Statistic = () => {
    return (
        <div className="Statistic">
            <div className="Wallet-parts">
                <h4>Podział portfela</h4>
                <div className="pie-chart_container">
                    <h5>Wykres</h5>
                </div>
            </div>
            <div className="Wallet-change">
                <h4>Wartość portfela</h4>
                <div className="linear-chart_container">
                    <h5>Wykres</h5>
                </div>
            </div>
        </div>
    )
}

export default Statistic;