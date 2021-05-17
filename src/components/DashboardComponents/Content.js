import React from 'react';
import { Route, Switch } from 'react-router-dom';

import MainPage from './ContentComponents/MainPage';
import Wallet from './ContentComponents/Wallet';
import Statistic from './ContentComponents/Statistic';
import Quotes from './ContentComponents/Quotes';
import AppInformation from './ContentComponents/AppInformation';

const Content = () => {
    return (
        <div className="col-lg-8 offset-md-1 Content">
            <Switch>
                <Route path="/dashboard/" exact component={MainPage}></Route>
                <Route path="/dashboard/wallet" component={Wallet}></Route>
                <Route path="/dashboard/statistic" component={Statistic}></Route>
                <Route path="/dashboard/quotes" component={Quotes}></Route>
                <Route path="/dashboard/info" component={AppInformation}></Route>
            </Switch>
        </div>
    )
}
export default Content;