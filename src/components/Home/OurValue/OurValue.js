import React from 'react';
import './OurValue.css'

const OurValue = ({value}) => {
    const {title, img} = value;
    return (
        <div className="col-md-4">
            <div className="ourValue">
                <div className="text-center">
                    <img src={`${img}`} alt=""/>
                </div>
                <h6 className="ourValueTitle">{title}</h6>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique modi pariatur commodi.</p>
            </div>
        </div>
    );
};

export default OurValue;