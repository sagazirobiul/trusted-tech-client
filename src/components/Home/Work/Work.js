import React from 'react';
import './Work.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMapMarkedAlt } from '@fortawesome/free-solid-svg-icons'

const Work = ({work}) => {
    const {img, name, location} = work;
    return (
        <div className="col-md-4">
            <div className="workBox">
                <div className="text-center">
                    <img src={`${img}`} alt=""/>
                </div>
                <h6 className="ourValueTitle">{name}</h6>
                <p> <FontAwesomeIcon icon={faMapMarkedAlt}/> {location}</p>
            </div>
        </div>
    );
};

export default Work;