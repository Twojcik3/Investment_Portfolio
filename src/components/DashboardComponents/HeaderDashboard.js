import axios from 'axios';
import React, { useContext } from 'react';
import { AppContext } from '../../AppContext';

const Header = () => {
    const [username] = useContext(AppContext);
    const [isAuth, setIsAuth] = useContext(AppContext);
    const changeAuth = (type) => {
        setIsAuth(type)
    }

    const logout = () => {
        axios.post('http://localhost:5000/logout', {
            header: {
                'Content-Type': 'application/json'
            },
            withCredentials: true,
            httpOnly: false
        }).then((res) => {
            changeAuth(false)
        }).catch((err) => {
            console.log(err)
        })
    }
    return (
        <header className="header-bar header-dashboard bg-secondary">
            <div className="container d-flex flex-column flex-md-row align-items-center p-3">
                <h4 className="offset-lg-2 my-0 mr-md-auto font-weight-normal">
                    <a href="/" className="text-white">Portfolio inwestycyjne</a>
                </h4>

                <div className="flex-row my-3 my-md-0">
                    <button className="btn btn-info" onClick={logout}>Wyloguj</button>
                </div>
            </div>
        </header>
    )
}

export default Header;