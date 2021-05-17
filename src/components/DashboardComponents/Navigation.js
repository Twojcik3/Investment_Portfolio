import React from 'react';
import { NavLink } from 'react-router-dom';

const listMenu = [
    { name: "Strona główna", path: "/dashboard/", exact: true },
    { name: "Portfel", path: "/dashboard/wallet" },
    { name: "Statystyka", path: "/dashboard/statistic" },
    { name: "Notowania", path: "/dashboard/quotes" },
    { name: "Informacje o aplikacji", path: "/dashboard/info" }
]
const Navigation = () => {
    const menu = listMenu.map(item => (
        <li key={item.name}>
            <NavLink to={item.path} exact={item.exact ? item.exact : false}>{item.name}</NavLink>
        </li>
    ))
    return (
        <div className="col-lg-3 Navigation">
            {menu}
        </div>
    )
}
export default Navigation;