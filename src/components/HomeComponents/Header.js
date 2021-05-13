import React from 'react';
import Login from './Login'

const Header = () => {
    return (
        <header className="header-bar mb-3">
            <div className="container d-flex flex-column flex-md-row align-items-center p-3">
                <h4 className="my-0 mr-md-auto font-weight-normal"><a href="/" className="text-white">Porfolio inwestycyjne</a></h4>
                <Login />
            </div>
        </header>
    )
}
export default Header;