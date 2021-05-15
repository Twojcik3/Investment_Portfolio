import React from 'react';

const QuotesTable = (props) => {

    return (
        <div>
            <h1>Table</h1>
            <h2>{props.type}</h2>
            <h3>{props.message}</h3>
            {console.log(props.data)}
        </div>
    )
}

export default QuotesTable;