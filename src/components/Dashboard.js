import React from 'react';
import '../css/Dashboard.css'
import Header from './DashboardComponents/HeaderDashboard';
import Footer from './Footer';
import Content from './DashboardComponents/Content';
import Navigation from './DashboardComponents/Navigation';
const Dashboard = () => {

    return (
        <div>
            <Header />
            <div className="container containerDashboard">
                <div className="row">
                    <Navigation />
                    <Content />
                </div>
            </div>

            <Footer />
        </div>
    )
}

export default Dashboard;