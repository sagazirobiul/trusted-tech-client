import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import './Service.css'
import {UserContext} from '../../../App'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHandPointer } from '@fortawesome/free-solid-svg-icons'

const Service = ({service}) => {
    const [user, setUser, admin, setAdmin] = useContext(UserContext)
    const {_id, name, price, description, img} = service;
    return (<div className="col-md-4">
        <Link className="serviceLink" to={admin ? `/dashboard` : `/dashboard/book/${_id}`}>
            <div className="service">
                <div className="text-center">
                    <img src={`${img}`} alt=""/>
                </div>
                <h5 className="ourValueTitle">{name}</h5>
                <h6 className="ourValueTitle">${price}</h6>
                <p>{description}</p>
                <div className="animationDiv">
                    <h2>{name}</h2>
                    <h6 className="text-center text-white">Click Here</h6>
                    <div className="animationIcon"><FontAwesomeIcon icon={faHandPointer}/></div>
                </div>
            </div>
        </Link>
    </div>);
};

export default Service;