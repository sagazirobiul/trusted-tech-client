import React from 'react';
import teamPic from '../../../image/about.svg'

const About = () => {
    return (
        <div className="about">
            <div className="row w-100">
                <div className="row col-md-10 mx-auto ">
                    <div className="col-md-6 img">
                        <img src={`${teamPic}`} alt="" className="img-fluid"/>
                    </div>
                    <div className="col-md-6">
                        <p className="miniTitle">about us</p>
                        <h1 className="headerTitle">HOW WE CAN HELP YOUR <span className="headerHighlight">BUSINESS</span> GOAL</h1>
                        <p className="headerContent">Choosing a suitable theme for your business isn’t hard if you know what to look for. A solid bundled contact form plugin enables customers to make contact with you, and a means of displaying your business and location information prominently is also essential.</p>
                        <button className="branBtn">learn More</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;