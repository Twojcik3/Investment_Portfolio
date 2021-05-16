import React from 'react';

const Item = (props) => {
    let colorText = "";
    if (props.change24 > 0) {
        colorText = "green"
    } else {
        colorText = "red"
    }
    return (
        <div className="Item-table col-lg-12 col-sm-12 col-xs-12">
            <div className="Item-prop col-lg-3 col-sm-3 col-md-3">{props.name}</div>
            <div className="Item-prop col-lg-3 col-sm-3 col-md-3">{props.rates}</div>
            <div className="Item-prop col-lg-3 col-sm-3 col-md-3">{props.currency}</div>
            {props.change24 ? <div className={colorText + " Item-prop col-lg-3 col-sm-3 col-md-3"}>{parseFloat(props.change24).toFixed(2) + '%'}</div> : <div />}
        </div>
    )
}

export default Item;