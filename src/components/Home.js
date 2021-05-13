import React from 'react';
import Header from './HomeComponents/Header';
import OverView from './HomeComponents/Overview';
import Register from './HomeComponents/Register';
import Footer from './HomeComponents/Footer';

const Home = () => {
    return (
        <>
            <Header />
            <div className="container py-md-5">
                <div className="row align-items-center">
                    <OverView />
                    <Register />
                </div>
            </div>
            <Footer />
        </>
    )
}

export default Home;