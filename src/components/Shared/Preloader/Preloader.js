import React from 'react';
import loader from '../../../image/loader.svg'

const Preloader = () => {
    return (
        <div className="d-flex justify-content-center align-items-center" style={{height: "100vh"}}>
            <img src={`${loader}`} alt=""/>
        </div>
    );
};

export default Preloader;