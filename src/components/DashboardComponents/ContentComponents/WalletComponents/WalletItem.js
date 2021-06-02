import React from 'react';

const WalletItem = () => {
    return (
        <div className="wallet-item col-lg-12 col-md-12">
            <div className="item-box col-lg-2 wallet-item_name">nazwa</div>
            <div className="item-box  col-lg-1 wallet-item_quantity">100</div>
            <div className="item-box  col-lg-1 wallet-item_purchaseValue">1000</div>
            <div className="item-box  col-lg-1 wallet-item_currentValue">1200</div>
            <div className="item-box  col-lg-1 wallet-item_profitLoss">200</div>
            <div className="item-box  col-lg-1 wallet-item_profitLoss-Percantage">20%</div>
            <button className="item-box  offset-lg-1 col-lg-2 btn btn-info wallet-item">Edytuj</button>
            <button className="item-box  col-lg-2 btn btn-danger wallet-item_delete">Usuń</button>
        </div>
    )
}

export default WalletItem;