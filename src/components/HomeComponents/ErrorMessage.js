import React from 'react';

const ErrorMessage = (props) => {
    return (
        <div className="Error-message alert alert-danger small">{props.message}</div>
    )
}

export default ErrorMessage;