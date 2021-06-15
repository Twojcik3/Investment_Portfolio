import React from 'react';
import '../css/Dashboard.css'
import Header from './DashboardComponents/HeaderDashboard';
import Footer from './Footer';
import Content from './DashboardComponents/Content';
import Navigation from './DashboardComponents/Navigation';
const Dashboard = () => {

    return (
        <>
            <Navigation />
            <Header />
            <Content />

        </>
    )
}

export default Dashboard;