import React from 'react';

const WalletItem = (props) => {
    let currentValue = 0;
    let percentageChange;
    let rate;
    let rateUSD;
    let profit;
    props.currencyRates.forEach((el) => {
        if (el.code === props.currency) {
            rate = el.mid;
        }
        if (el.code === "USD") {
            rateUSD = el.mid
        }
        if (props.currency === "PLN") {
            rate = 1;
        }
    })
    if (props.category === "Currencies") {
        if (props.name === "PLN") {
            currentValue = props.valuePLN
            percentageChange = 0;
            profit = 0;
        } else {
            props.currencyRates.forEach((el) => {
                if (el.code === props.name) {
                    currentValue = (el.mid * props.quantity * rate).toFixed(2);
                    percentageChange = ((1 - (currentValue / props.valuePLN)) * 100 * (-1)).toFixed(2)
                    profit = (currentValue - props.valuePLN).toFixed(2)
                }
            })
        }

    }
    if (props.category === "PreciousMetals") {
        props.metalsRates.forEach((el) => {
            if (el.name === props.name) {
                currentValue = (el.price * props.quantity * rateUSD).toFixed(2);
                percentageChange = ((1 - (currentValue / props.valuePLN)) * 100 * (-1)).toFixed(2);
                profit = (currentValue - props.valuePLN).toFixed(2)
            }
        })
    }
    if (props.category === "CryptoCurrencies") {
        props.cryptoCurrencyRates.forEach((el) => {
            if (el.name === props.name) {
                currentValue = (el.current_price * props.quantity * rateUSD).toFixed(2);
                percentageChange = ((1 - (currentValue / props.valuePLN)) * 100 * (-1)).toFixed(2);
                profit = (currentValue - props.valuePLN).toFixed(2);
            }
        })
    }
    let colorText = "";
    if (profit > 0) {
        colorText = "green"
    } else {
        colorText = "red"
    }
    const handleDeleteItem = (e) => {
        e.preventDefault();
        console.log(props.id);
        props.delete(props.id)
    }
    return (
        <div className="wallet-item col-lg-12 col-md-12">
            <div className="item-box wallet-item_name">{props.name}</div>
            <div className="item-box  wallet-item_quantity">{props.quantity}</div>
            <div className="item-box  wallet-item_currentValue" >{currentValue}</div>
            <div className={colorText + ` item-box  wallet-item_profitLoss`}>{profit}</div>
            <div className={colorText + ' item-box  col-lg-1 wallet-item_profitLoss-Percantage'}>{percentageChange}%</div>
            <span className="pt-2">
                <button className="btn item-box col-lg-1 wallet-item_edit">
                    <svg className="svg-inline--fa fa-edit fa-w-18 text-primary" aria-hidden="true" data-prefix="fas" data-icon="edit" role="img" xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 576 512" data-fa-i2svg=""><path fill="currentColor" d="M402.6 83.2l90.2 90.2c3.8 3.8 3.8 10 0 13.8L274.4 405.6l-92.8 10.3c-12.4 1.4-22.9-9.1-21.5-21.5l10.3-92.8L388.8 83.2c3.8-3.8 10-3.8 13.8 0zm162-22.9l-48.8-48.8c-15.2-15.2-39.9-15.2-55.2 0l-35.4 35.4c-3.8 3.8-3.8 10 0 13.8l90.2 90.2c3.8 3.8 10 3.8 13.8 0l35.4-35.4c15.2-15.3 15.2-40 0-55.2zM384 346.2V448H64V128h229.8c3.2 0 6.2-1.3 8.5-3.5l40-40c7.6-7.6 2.2-20.5-8.5-20.5H48C21.5 64 0 85.5 0 112v352c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V306.2c0-10.7-12.9-16-20.5-8.5l-40 40c-2.2 2.3-3.5 5.3-3.5 8.5z">
                        </path>
                    </svg>
                </button>

                <button className="btn item-box  wallet-item_delete text-danger" onClick={handleDeleteItem}>
                    <svg className="svg-inline--fa fa-trash fa-w-14" aria-hidden="true" data-prefix="fas" data-icon="trash" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"
                        data-fa-i2svg="">
                        <path fill="currentColor" d="M0 84V56c0-13.3 10.7-24 24-24h112l9.4-18.7c4-8.2 12.3-13.3 21.4-13.3h114.3c9.1 0 17.4 5.1 21.5 13.3L312 32h112c13.3 0 24 10.7 24 24v28c0 6.6-5.4 12-12 12H12C5.4 96 0 90.6 0 84zm415.2 56.7L394.8 467c-1.6 25.3-22.6 45-47.9 45H101.1c-25.3 0-46.3-19.7-47.9-45L32.8 140.7c-.4-6.9 5.1-12.7 12-12.7h358.5c6.8 0 12.3 5.8 11.9 12.7z">
                        </path>
                    </svg>
                </button>
            </span>

        </div>
    )
}

export default WalletItem;