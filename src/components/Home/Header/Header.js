import React from 'react';
import banner from '../../../image/hero-img.png'
import Navbar from '../../Shared/Navbar/Navbar';
import './Header.css'

const Header = () => {
    return (
        <div className="header">
            <Navbar/>
            <div className="row w-100">
                <div className="row col-md-11 mx-auto ">
                    <div className="col-md-7 titleArea">
                        <p className="miniTitle">WE CREATE IDEAS</p>
                        <h1 className="headerTitle">HOW WE CAN HELP YOUR <span className="headerHighlight">BUSINESS</span></h1>
                        <p className="headerContent">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration.</p>
                        <button className="branBtn">Get Started</button>
                    </div>
                    <div className="col-md-5 img">
                        <img src={`${banner}`} alt="" className="img-fluid"/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;