import React from 'react';
import Navbar from '../../Shared/Navbar/Navbar';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import LatestWork from '../LatestWork/LatestWork';
import OurValues from '../OurValues/OurValues';
import Reviews from '../Reviews/Reviews';
import Services from '../Services/Services';

const Home = () => {
    return (
        <div>
            <Navbar/>
            <Header/>
            <div className="row w-100">
                <div className="col-md-11 mx-auto">
                    <OurValues/>
                    <Services/>
                    <LatestWork/>
                    <Reviews/>
                </div>
            </div>
            <Footer/>
        </div>
    );
};

export default Home;