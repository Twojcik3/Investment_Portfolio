import React from 'react';
import PercentageChart from './StatisticComponents/PercentageChart';
import LinearChart from './StatisticComponents/LinearChart';


const Statistic = (props) => {


    return (
        <div className="Statistic">
            <div className="Wallet-parts">
                <h4>Podział portfela</h4>
                <PercentageChart
                    totalCurrentCash={props.totalCurrentCash}
                    totalCurrentCrypto={props.totalCurrentCrypto}
                    totalCurrentMetals={props.totalCurrentMetals}
                    totalCurrentWallet={props.totalCurrentWallet}
                />
            </div>
            <div className="Wallet-change">
                <h4>Wartość portfela w czasie</h4>
                <LinearChart
                    items={props.items}
                    totalCurrentCash={props.totalCurrentCash}
                    totalCurrentCrypto={props.totalCurrentCrypto}
                    totalCurrentMetals={props.totalCurrentMetals}
                    totalCurrentWallet={props.totalCurrentWallet}
                />
            </div>
        </div>
    )
}

export default Statistic;