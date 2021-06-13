import React from 'react';
import { NavLink } from 'react-router-dom';


const Navigation = () => {

    return (
        <nav className="navbar bg-dark" role="navigation" id="fixed-sidebar">
            <div className="Navigation">
                <li className="col-lg-12">
                    <NavLink to="/dashboard/" exact={true}>Strona główna</NavLink>
                </li>
                <li className="col-lg-12">
                    <NavLink to="/dashboard/wallet" >Portfel</NavLink>
                </li>
                <li className="col-lg-12">
                    <NavLink to="/dashboard/statistic" >Statystyka</NavLink>
                </li>
                <li className="col-lg-12">
                    <NavLink to="/dashboard/quotes" >Notowania</NavLink>
                </li>
                <li className="col-lg-12">
                    <NavLink to="/dashboard/info" >Informacje</NavLink>
                </li>
            </div>
        </nav>
    )
}
export default Navigation;