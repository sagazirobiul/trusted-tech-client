import React from 'react';
import ScrollTop from '../../Shared/ScrollTop/ScrollTop';
import About from '../About/About';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import OurValue from '../OurValue/OurValue';
import Pricing from '../Pricing/Pricing';
import Reviews from '../Review/Reviews';
import Services from '../Services/Services';

const Home = () => {
    return (
        <main>
            <Header/>
            <About/>
            <Services/>
            <OurValue/>
            <Reviews/>
            <Pricing/>
            <Footer/>
            <ScrollTop/>
        </main>
    );
};

export default Home;