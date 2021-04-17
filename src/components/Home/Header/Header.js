import React from 'react';
import banner from '../../../image/hero-img.png'

const Header = () => {
    return (
        <div className="row">
            <div className="col-md-4">
                <h2>We offer modern solutions for growing your business</h2>
                <button className="btn btn-info">Get Started</button>
            </div>
            <div className="col-md-4">
                <img src={`${banner}`} alt="" className="img-fluid"/>
            </div>
        </div>
    );
};

export default Header;