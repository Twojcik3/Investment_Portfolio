import React from 'react';

const WalletHeader = () => {
    return (
        <div className="wallet-header col-lg-12 col-md-12">
            <div className="item-box_header wallet-item_name">Nazwa</div>
            <div className="item-box_header  wallet-item_quantity">Ilość</div>
            <div className="item-box_header  wallet-item_currentValue">Aktualna wartość(PLN)</div>
            <div className="item-box_header  wallet-item_profitLoss">Zysk/Strata(PLN)</div>
            <div className="item-box_header  wallet-item_profitLoss-Percantage">Zysk/Strata %</div>
        </div>
    )
}
export default WalletHeader;