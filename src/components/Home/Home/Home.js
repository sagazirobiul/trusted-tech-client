import React from 'react';
import Navbar from '../../Shared/Navbar/Navbar';
import Header from '../Header/Header';
import Reviews from '../Reviews/Reviews';
import Services from '../Services/Services';

const Home = () => {
    return (
        <div>
            <Navbar/>
            <Header/>
            <Services/>
            <Reviews/>
        </div>
    );
};

export default Home;