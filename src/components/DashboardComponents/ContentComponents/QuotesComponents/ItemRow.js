import React from 'react';

const ItemRow = (props) => {
    let colorText = "";
    if (props.change24 > 0) {
        colorText = "green"
    } else {
        colorText = "red"
    }
    return (
        <div className="Quotes-item col-lg-12 col-md-12">
            <div className="Quotes-item-prop col-md-3 col-lg-3">{props.name}</div>
            <div className="Quotes-item-prop col-md-2 col-lg-2">{props.rates}</div>
            <div className="Quotes-item-prop col-md-2 col-lg-2">{props.currency}</div>
            <div className={colorText + " Quotes-item-prop col-md-2 col-lg-2"}>{props.change24}</div>
        </div>
    )
}

export default ItemRow;