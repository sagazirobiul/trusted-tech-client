import React from 'react';
import banner from '../../../image/hero-img.png'
import './Header.css'

const Header = () => {
    return (
        <div className="header">
            <div className="row w-100">
                <div className="row col-md-11 mx-auto ">
                    <div className="col-md-6 titleArea">
                        <h1 className="mainTitle">WE EMPOWER <br/> AMBITIONS</h1>
                        <h4 className="headerTitle">GROW YOUR <br/>___BUSINESS WITH US</h4>
                        <button className="btn branBtn">Get Started</button>
                    </div>
                    <div className="col-md-6 img">
                        <img src={`${banner}`} alt="" className="img-fluid"/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;