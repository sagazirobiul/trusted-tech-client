import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import './Service.css'
import {UserContext} from '../../../App'
import Fade from 'react-reveal/Fade';

const Service = ({service}) => {
    const [, , admin] = useContext(UserContext)
    const {_id, name, price, description, img} = service;
    return (
        <div className="col-md-4 service">
            <Fade bottom duration={2700} distance='70px'>
                <div className="service-card">
                    <div className="text-center">
                        <img src={`${img}`} alt="" className="serviceImg"/>
                    </div>
                    <h4 className="serviceName">{name}</h4>
                    <p className="serviceDes">{description}</p>
                    <div className="bookingBox">
                        <p className="servicePrice">${price}</p>
                        <Link className="serviceLink" to={admin ? `/dashboard` : `/dashboard/book/${_id}`}>
                            <button className="bookingBtn">Book Now</button>
                        </Link>
                    </div>
                </div>
            </Fade>
        </div>
    );
};

export default Service;